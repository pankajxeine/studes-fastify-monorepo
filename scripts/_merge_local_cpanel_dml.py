from pathlib import Path
from collections import Counter
import json
import re
from decimal import Decimal, InvalidOperation
import sqlglot
from sqlglot import exp

ROOT = Path(r'C:\workspace\studes-fastify-monorepo')
MYSQL_FILE = Path(r'C:\workspace\ud-db-backup\local-db\local-cpanel.sql')
SCHEMA_FILE = ROOT / 'infra' / 'skeleton_cpanel.sql'
DML_FILE = ROOT / 'infra' / 'skeleton_cpanel_dml.sql'

SKIP_SOURCE_TABLES = {
    'crm_cron_logs',       # 36k operational log records
    'crm_email_logs',      # contains recipients and rendered messages
}
SENSITIVE_FIELDS = re.compile(
    r'password|(^|_)pass($|_)|secret|token|api.?key|auth.?key|hash.?key|credential|account_number|routing_number',
    re.I,
)
EMAIL_FIELDS = re.compile(r'^(email|from|from_email|customer_email|client_email|contact_email)$|_email$', re.I)
ALIASES = {
    'package_features': {
        'additional_store_price': 'additional_price',
        'additional_store_cost_price': 'additional_cost_price',
        'primary_store_price': 'primary_price',
        'primary_store_cost_price': 'primary_cost_price',
    },
    'packages': {
        'additional_store_price': 'additional_price',
        'additional_store_cost_price': 'additional_cost_price',
    },
    'sub_package_features': {
        'additional_store_price': 'additional_price',
        'primary_store_price': 'primary_price',
    },
}
PII_TABLES = {'cpanel_companies', 'customers', 'sub_companies', 'sub_store_details', 'users', 'subs'}


def table_name(create):
    target = create.this
    if isinstance(target, exp.Schema) and isinstance(target.this, exp.Table):
        return target.this.name
    if isinstance(target, exp.Table):
        return target.name
    return None

def column_map(create):
    return {
        column.this.name: column
        for column in create.this.expressions
        if isinstance(column, exp.ColumnDef)
    }

def primary_key_columns(create):
    result = []
    for item in create.this.expressions:
        if isinstance(item, exp.PrimaryKey):
            result.extend(column.name for column in item.expressions)
        elif isinstance(item, exp.ColumnDef) and any(
            isinstance(constraint.kind, exp.PrimaryKeyColumnConstraint)
            for constraint in item.args.get('constraints') or []
        ):
            result.append(item.this.name)
    return list(dict.fromkeys(result))


def parse_create_statements(text, dialect):
    if dialect == 'mysql':
        pattern = r'(?is)CREATE TABLE\s+.*?\)\s*ENGINE\s*=\s*[^;]+;'
    else:
        pattern = r'(?is)CREATE TABLE\s+.*?\);'
    result = {}
    for match in re.finditer(pattern, text):
        create = sqlglot.parse_one(match.group(0), read=dialect)
        name = table_name(create)
        if name:
            result[name] = create
    return result


def mysql_insert_statements(text):
    position = 0
    while True:
        start = text.find('INSERT INTO ', position)
        if start < 0:
            return
        quote = None
        escaped = False
        end = start
        while end < len(text):
            char = text[end]
            if escaped:
                escaped = False
            elif char == '\\':
                escaped = True
            elif quote:
                if char == quote:
                    if end + 1 < len(text) and text[end + 1] == quote:
                        end += 1
                    else:
                        quote = None
            elif char in "'\"`":
                quote = char
            elif char == ';':
                break
            end += 1
        if end >= len(text):
            return
        yield text[start:end + 1]
        position = end + 1


def column_map(create):
    return {
        column.this.name: column
        for column in create.this.expressions
        if isinstance(column, exp.ColumnDef)
    }


def primary_key_columns(create):
    result = []
    for item in create.this.expressions:
        if isinstance(item, exp.PrimaryKey):
            result.extend(column.name for column in item.expressions)
        elif isinstance(item, exp.ColumnDef) and any(
            isinstance(constraint.kind, exp.PrimaryKeyColumnConstraint)
            for constraint in item.args.get('constraints') or []
        ):
            result.append(item.this.name)
    return list(dict.fromkeys(result))


def checks(column):
    for constraint in column.args.get('constraints') or []:
        kind = constraint.kind
        if isinstance(kind, exp.CheckColumnConstraint) and isinstance(kind.this, exp.In):
            values = [value.this for value in kind.this.expressions if isinstance(value, exp.Literal)]
            if values:
                return values
    return []


def default_value(column):
    for constraint in column.args.get('constraints') or []:
        if isinstance(constraint.kind, exp.DefaultColumnConstraint):
            return constraint.kind.this
    return None


def is_nullable(column):
    return not any(
        isinstance(constraint.kind, exp.NotNullColumnConstraint)
        for constraint in column.args.get('constraints') or []
    )


def raw_value(value):
    if isinstance(value, exp.Null):
        return None
    if isinstance(value, exp.Literal):
        return value.this if value.is_string else Decimal(value.this)
    if isinstance(value, exp.Boolean):
        return bool(value.this)
    return value.sql(dialect='mysql')


def quote_sql(value):
    return "'" + str(value).replace("'", "''") + "'"


def normalized_check(value, allowed, column_name):
    if value is None:
        return None
    string = str(value)
    if string in allowed:
        return string
    lower = {choice.lower(): choice for choice in allowed}
    if string.lower() in lower:
        return lower[string.lower()]
    yes_no = {choice.lower() for choice in allowed}
    if yes_no == {'yes', 'no'} and string in {'0', '1'}:
        return lower['yes' if string == '1' else 'no']
    if column_name in {'is_admin', 'is_role_synced', 'is_required', 'is_skipped', 'is_selected', 'is_primary', 'is_billing_shipping_same'}:
        if string in {'0', '1'} and yes_no == {'yes', 'no'}:
            return lower['yes' if string == '1' else 'no']
    if string.lower() == 'pos' and 'other' in lower:
        return lower['other']
    if string.lower() == 'pos' and column_name == 'source_of_cancellation' and 'cpanel' in lower:
        return lower['cpanel']
    raise ValueError(f'{string!r} is not allowed for {column_name}: {allowed}')


def sanitize(table, column, value, row_id):
    name = column.lower()
    if value is None:
        return None
    if SENSITIVE_FIELDS.search(name):
        return 'DEMO_NOT_A_REAL_SECRET'
    if EMAIL_FIELDS.search(name):
        return f'demo+{table}_{row_id}@example.test'
    if table == 'crm_email_config':
        if name == 'host':
            return 'smtp.example.test'
        if name == 'user':
            return 'demo-user'
    if table == 'crm_email_templates':
        if name in {'email_message', 'email_subject', 'description'}:
            return 'Demo email template content'
    if table == 'wizard_contents':
        if name in {'contents', 'videos'}:
            return 'Demo wizard content'
    if table in PII_TABLES:
        if name in {'username', 'user_name'}:
            return f'demo_user_{row_id}'
        if name in {'name', 'firstname', 'first_name', 'lastname', 'last_name', 'contact_name', 'principal_name', 'dba'}:
            return f'Demo {name.replace("_", " ")} {row_id}'
            if any(part in name for part in ('phone', 'mobile', 'fax')):
                return '5550100'
            if name in {'postal_code', 'zip_code'}:
                return '10001'
            if not name.endswith('_id') and any(part in name for part in ('address', 'city', 'state', 'postal', 'zip')):
                return f'Demo {name.replace("_", " ")}'
        if name in {'domain', 'subdomain', 'from_domain', 'website', 'url', 'shortname', 'database_name', 's3_folder'}:
                return f'demo-{row_id}.example.test'
        if name in {'logo', 'cloud_print_logo', 'logo_zpl', 'site_logo', 'favicon_icon', 'mobile_logo'}:
            return f'demo-{name}.png'
    return value


def sql_value(table, column, value, row_id):
    kind = column.args['kind'].this
    kind_name = str(kind).split('.')[-1].upper()
    allowed = checks(column)
    value = sanitize(table, column.this.name, value, row_id)
    if value is not None and allowed:
        value = normalized_check(value, allowed, column.this.name)
    if value is None:
        if not is_nullable(column):
            raise ValueError(f'NULL for required column {table}.{column.this.name}')
        return 'NULL'
    if kind_name in {'JSON', 'JSONB'}:
        if isinstance(value, (str, bytes)):
            parsed = json.loads(value)
        else:
            parsed = value
        return quote_sql(json.dumps(parsed, separators=(',', ':'))) + '::jsonb'
    if kind_name in {'DATE', 'TIMESTAMP', 'TIMESTAMPTZ', 'DATETIME', 'TIME'}:
        text = str(value)
        if text.startswith('0000-00-00'):
            if is_nullable(column):
                return 'NULL'
            text = '2026-10-02 12:00:00'
        if kind_name == 'DATE':
            return f'DATE {quote_sql(text[:10])}'
        if kind_name == 'TIME':
            return f'TIME {quote_sql(text[:8])}'
        return f'TIMESTAMP {quote_sql(text[:19])}'
    if kind_name in {'SMALLINT', 'INT2'}:
        number = int(value)
        if not -32768 <= number <= 32767:
            raise ValueError(f'{number} outside SMALLINT range')
        return str(number)
    if kind_name in {'INTEGER', 'INT', 'INT4', 'SERIAL'}:
        number = int(value)
        if not -2147483648 <= number <= 2147483647:
            raise ValueError(f'{number} outside INTEGER range')
        return str(number)
    if kind_name in {'BIGINT', 'INT8', 'BIGSERIAL'}:
        return str(int(value))
    if kind_name in {'NUMERIC', 'DECIMAL', 'REAL', 'FLOAT4', 'FLOAT8', 'DOUBLE', 'MONEY'}:
        return str(Decimal(str(value)))
    if kind_name in {'BOOLEAN', 'BOOL'}:
        return 'TRUE' if value is True or str(value).lower() in {'1', 'true', 'yes'} else 'FALSE'
    if kind_name == 'BYTEA':
        return "'\\x00'::bytea"
    if isinstance(value, Decimal):
        if value == value.to_integral_value():
            return str(int(value))
        return str(value)
    text = str(value)
    max_size = None
    if column.args['kind'].expressions:
        first = column.args['kind'].expressions[0]
        if isinstance(first, exp.DataTypeParam) and isinstance(first.this, exp.Literal) and not first.this.is_string:
            max_size = int(first.this.this)
    if max_size and len(text) > max_size:
        raise ValueError(f'{table}.{column.this.name} exceeds VARCHAR({max_size})')
    return quote_sql(text)


def build_source_columns(parsed, source_table_columns):
    target = parsed.this
    if isinstance(target, exp.Schema) and target.expressions:
        return [column.name for column in target.expressions]
    return source_table_columns


def load_source_rows(source_text, source_tables):
    inserts = {}
    row_counts = Counter()
    for statement in mysql_insert_statements(source_text):
        name_match = re.match(r'INSERT INTO\s+`([^`]+)`', statement, re.I)
        if not name_match:
            continue
        table = name_match.group(1)
        if table in SKIP_SOURCE_TABLES or table not in source_tables:
            continue
        parsed = sqlglot.parse_one(statement, read='mysql')
        if not isinstance(parsed.expression, exp.Values):
            continue
        source_columns = build_source_columns(parsed, list(column_map(source_tables[table])))
        for row_index, row in enumerate(parsed.expression.expressions, start=1):
            values = row.expressions if isinstance(row, exp.Tuple) else [row]
            if len(values) != len(source_columns):
                continue
            inserts.setdefault(table, []).append(dict(zip(source_columns, map(raw_value, values))))
            row_counts[table] += 1
    return inserts, row_counts


def mysql_create_statements(text):
    return parse_create_statements(text, 'mysql')


def postgres_create_statements(text):
    text = re.sub(r'/\*.*?\*/', '', text, flags=re.S)
    return parse_create_statements(text, 'postgres')


def parse_create_statements(text, dialect):
    pattern = r'(?is)CREATE TABLE\s+.*?\)\s*ENGINE\s*=\s*[^;]+;' if dialect == 'mysql' else r'(?is)CREATE TABLE\s+.*?\);'
    parsed = {}
    for match in re.finditer(pattern, text):
        create = sqlglot.parse_one(match.group(0), read=dialect)
        schema = create.this
        if isinstance(schema, exp.Schema) and isinstance(schema.this, exp.Table):
            parsed[schema.this.name] = create
    return parsed


def render_import(table, rows, target_create):
    target_columns = column_map(target_create)
    aliases = ALIASES.get(table, {})
    source_names = set().union(*(row.keys() for row in rows))
    mapped = {}
    for source_name in source_names:
        target_name = aliases.get(source_name, source_name)
        if target_name in target_columns:
            mapped[target_name] = source_name
    primary = primary_key_columns(target_create)
    missing_required = [
        name for name, column in target_columns.items()
        if name not in mapped and not is_nullable(column) and default_value(column) is None and name not in primary
    ]
    if missing_required:
        return None, f'target-required fields absent: {missing_required}'
    if not mapped:
        return None, 'no compatible columns'
    output_columns = [name for name in target_columns if name in mapped]
    rendered_rows = []
    rejected = 0
    rejection_reasons = Counter()
    for row_index, row in enumerate(rows, start=1):
        row_id = row.get('id', row_index)
        values = []
        try:
            for target_name in output_columns:
                source_name = mapped[target_name]
                column = target_columns[target_name]
                value = row.get(source_name)
                if table == 'industry_environments' and target_name == 'configuration':
                    value = '{}'
                if table == 'subs':
                    if target_name == 'package_id' and row.get('sub_id') is not None:
                        value = row.get('sub_id')
                    if target_name == 'is_role_synced':
                        value = {'0': 'No', '1': 'Yes'}.get(str(value), value)
                    if target_name == 'source_of_creation' and value is not None:
                        value = str(value).upper()
                values.append(sql_value(table, column, value, row_id))
        except (ValueError, InvalidOperation, json.JSONDecodeError, TypeError) as error:
            rejected += 1
            rejection_reasons[str(error)] += 1
            continue
        rendered_rows.append('(' + ', '.join(values) + ')')
    if not rendered_rows:
        reason = rejection_reasons.most_common(1)[0][0] if rejection_reasons else 'unknown incompatibility'
        return None, f'all {len(rows)} source rows were incompatible: {reason}'
    quoted_columns = ', '.join('"' + name.replace('"', '""') + '"' for name in output_columns)
    statement = []
    for offset in range(0, len(rendered_rows), 250):
        batch = rendered_rows[offset:offset + 250]
        statement.extend([
            f'INSERT INTO "{table}" ({quoted_columns}) VALUES',
            ',\n'.join(batch),
            'ON CONFLICT DO NOTHING;',
            '',
        ])
    return '\n'.join(statement), f'{len(rendered_rows)} rows imported, {rejected} skipped'


def replace_seed_block(dml_text, table, replacement):
    pattern = re.compile(
        rf'(?ms)^INSERT INTO "{re.escape(table)}" \(.*?(?=^INSERT INTO "(?!{re.escape(table)}")|^SELECT setval\(|^COMMIT;|\Z)'
    )
    updated, count = pattern.subn(replacement.rstrip() + '\n\n', dml_text, count=1)
    return updated, count


mysql_text = MYSQL_FILE.read_text(encoding='utf-8')
source_tables = mysql_create_statements(mysql_text)
target_tables = postgres_create_statements(SCHEMA_FILE.read_text(encoding='utf-8'))
source_rows, source_counts = load_source_rows(mysql_text, source_tables)
dml_text = DML_FILE.read_text(encoding='utf-8')
imported = {}
skipped = {}
for table, rows in source_rows.items():
    if table not in target_tables:
        skipped[table] = 'table absent from PostgreSQL schema'
        continue
    block, reason = render_import(table, rows, target_tables[table])
    if block is None:
        skipped[table] = reason
        continue
    dml_text, replaced = replace_seed_block(dml_text, table, block)
    if replaced != 1:
        skipped[table] = 'existing demo seed block not found'
        continue
    imported[table] = reason
DML_FILE.write_text(dml_text, encoding='utf-8', newline='')
print(f'Imported {sum(int(value.split()[0]) for value in imported.values())} sanitized source rows across {len(imported)} tables.')
print(f'Kept generic demo rows for {len(skipped)} tables: {skipped}')
