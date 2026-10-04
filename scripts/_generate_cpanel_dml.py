from pathlib import Path
import re
import sqlglot
from sqlglot import exp

schema_path = Path(r'c:\workspace\studes-fastify-monorepo\infra\skeleton_cpanel.sql')
output_path = Path(r'c:\workspace\studes-fastify-monorepo\infra\skeleton_cpanel_dml.sql')
sql = schema_path.read_text(encoding='utf-8')
sql = re.sub(r'/\*.*?\*/', '', sql, flags=re.S)
statements = sqlglot.parse(sql, read='postgres')

def table_name_from_create(statement):
    schema = statement.this
    if isinstance(schema, exp.Schema) and isinstance(schema.this, exp.Table):
        return schema.this.name
    return None

def owner_table(statement):
    if isinstance(statement, exp.Create):
        return table_name_from_create(statement)
    if isinstance(statement, exp.Alter) and isinstance(statement.this, exp.Table):
        return statement.this.name
    return None

def check_values(column):
    for constraint in column.args.get('constraints') or []:
        kind = constraint.kind
        if isinstance(kind, exp.CheckColumnConstraint) and isinstance(kind.this, exp.In):
            values = kind.this.expressions
            if values:
                return [value.this for value in values if isinstance(value, exp.Literal)]
    return []

def column_default(column):
    for constraint in column.args.get('constraints') or []:
        if isinstance(constraint.kind, exp.DefaultColumnConstraint):
            return constraint.kind.this
    return None

def is_not_null(column):
    return any(
        isinstance(constraint.kind, exp.NotNullColumnConstraint)
        for constraint in column.args.get('constraints') or []
    )

def sql_string(value):
    return "'" + str(value).replace("'", "''") + "'"

def generic_text(table, column, max_length=None):
    name = column.lower()
    if name in {'access'}:
        value = 'cpanel,crm'
    elif name in {'alert_priority'}:
        value = 'High,Medium,Low'
    elif 'password' in name or name == 'pass' or 'secret' in name or 'token' in name or 'api_key' in name or 'auth_key' in name or 'hash_key' in name:
        value = 'DEMO_NOT_A_REAL_SECRET'
    elif 'email' in name or name in {'from', 'user'}:
        value = 'demo@example.test'
    elif 'url' in name or 'website' in name or 'endpoint' in name or name.endswith('_link'):
        value = 'https://example.test'
    elif 'phone' in name or 'mobile' in name or name in {'fax'}:
        value = '5550100'
    elif name in {'status', 'st_status'}:
        value = 'Active'
    elif name in {'username', 'user_name'}:
        value = 'demo_user'
    elif name in {'name', 'title', 'subject', 'module_name', 'plan_name'}:
        value = f'Demo {table.replace("_", " ").title()}'
    elif name.endswith('_key') or name.endswith('_code') or name in {'code', 'shortname', 'short_code'}:
        value = f'demo_{table}'
    elif name in {'permission', 'permission_option'}:
        value = 'Full'
    else:
        value = f'Demo {column.replace("_", " ")}'
    if max_length and len(value) > max_length:
        value = value[:max_length]
    return sql_string(value)

def column_value(table, column, primary_columns, foreign_columns):
    name = column.this.name
    data_type = column.args['kind']
    kind = data_type.this
    checks = check_values(column)
    if checks:
        return sql_string(checks[0])
    if name in primary_columns:
        if kind in (exp.DType.VARCHAR, exp.DType.CHAR, exp.DType.TEXT):
            return generic_text(table, name, 40)
        return '1'
    if name in foreign_columns:
        return '1'
    if name in {'deleted_at', 'password_reset_expires', 'password_reset_token', 'password_token', 'cancel_date', 'cancel_terms'}:
        return 'NULL'
    if kind in (exp.DType.JSON, exp.DType.JSONB):
        return "'{}'::jsonb"
    if kind in (exp.DType.ARRAY,):
        return "'{}'"
    if kind in (exp.DType.DATE,):
        return "DATE '2026-10-02'"
    if kind in (exp.DType.TIME,):
        return "TIME '12:00:00'"
    if kind in (exp.DType.DATETIME, exp.DType.TIMESTAMP, exp.DType.TIMESTAMPTZ):
        return "TIMESTAMP '2026-10-02 12:00:00'"
    kind_name = str(kind).split('.')[-1]
    if kind_name in {'INT', 'INTEGER', 'SMALLINT', 'BIGINT', 'SERIAL', 'BIGSERIAL', 'SMALLSERIAL', 'UINT', 'TINYINT', 'MEDIUMINT'}:
        if name in {'is_verified', 'is_admin'}:
            return '1'
        return '1'
    if kind_name in {'DECIMAL', 'NUMERIC', 'DOUBLE', 'FLOAT', 'REAL', 'MONEY'}:
        return '1.00'
    if kind_name in {'BOOLEAN', 'BOOL'}:
        return 'TRUE'
    if kind_name in {'BYTEA'}:
        return "'\\x00'::bytea"
    max_length = None
    if data_type.expressions and isinstance(data_type.expressions[0], exp.DataTypeParam):
        size = data_type.expressions[0].this
        if isinstance(size, exp.Literal) and not size.is_string:
            max_length = int(size.this)
    return generic_text(table, name, max_length)

def primary_key_columns(create_statement):
    columns = []
    schema = create_statement.this
    for expression in schema.expressions:
        if isinstance(expression, exp.PrimaryKey):
            columns.extend(item.name for item in expression.expressions)
        elif isinstance(expression, exp.ColumnDef):
            if any(isinstance(constraint.kind, exp.PrimaryKeyColumnConstraint)
                   for constraint in expression.args.get('constraints') or []):
                columns.append(expression.this.name)
    return list(dict.fromkeys(columns))

tables = {}
primary_keys = {}
foreign_keys = {}
serial_ids = set()
for statement in statements:
    if isinstance(statement, exp.Create) and statement.args.get('kind') == 'TABLE':
        name = table_name_from_create(statement)
        if not name:
            continue
        tables[name] = statement
        primary_keys[name] = primary_key_columns(statement)
        for column in statement.this.expressions:
            if isinstance(column, exp.ColumnDef) and column.this.name == 'id':
                type_name = str(column.args['kind'].this).split('.')[-1]
                if type_name in {'SERIAL', 'BIGSERIAL', 'SMALLSERIAL'}:
                    serial_ids.add(name)
    owner = owner_table(statement)
    if owner:
        for foreign_key in statement.find_all(exp.ForeignKey):
            reference = foreign_key.args.get('reference')
            referenced_schema = reference.this if reference else None
            referenced_table = referenced_schema.this.name if isinstance(referenced_schema, exp.Schema) and isinstance(referenced_schema.this, exp.Table) else None
            if referenced_table:
                for column in foreign_key.expressions:
                    foreign_keys.setdefault(owner, {}).setdefault(column.name, referenced_table)

if len(tables) != 116:
    raise ValueError(f'Expected 116 schema tables, found {len(tables)}')

# Insert referenced rows before rows that point to them.
dependencies = {
    name: set(foreign_keys.get(name, {}).values()) & set(tables)
    for name in tables
}
ordered = []
remaining = list(tables)
while remaining:
    ready = [name for name in remaining if dependencies[name].issubset(ordered)]
    if not ready:
        raise ValueError(f'Foreign-key dependency cycle among: {remaining}')
    ordered.extend(ready)
    remaining = [name for name in remaining if name not in ready]

lines = [
    '-- Synthetic development seed data for skeleton_cpanel.sql.',
    '-- Values are deliberately fake; secret-like values are nonfunctional placeholders.',
    '-- Each table is seeded only when empty, so rerunning this file is safe.',
    'BEGIN;',
    'SET search_path TO demo_cpanel;',
    '',
]
for table in ordered:
    create = tables[table]
    schema = create.this
    columns = [item for item in schema.expressions if isinstance(item, exp.ColumnDef)]
    pk_columns = primary_keys[table]
    selected = columns
    if not selected:
        raise ValueError(f'No seedable columns for table {table}')
    column_names = [column.this.name for column in selected]
    values = [column_value(table, column, pk_columns, set(foreign_keys.get(table, {}))) for column in selected]
    quoted_columns = ', '.join('"' + name.replace('"', '""') + '"' for name in column_names)
    quoted_table = '"' + table.replace('"', '""') + '"'
    predicate = ' AND '.join(
        f'{quoted_table}."{column}" = {column_value(table, next(c for c in columns if c.this.name == column), pk_columns, set(foreign_keys.get(table, {})))}'
        for column in pk_columns
    )
    if not predicate:
        predicate = 'TRUE'
    lines.append(f'INSERT INTO {quoted_table} ({quoted_columns})')
    lines.append(f'    SELECT {", ".join(values)}')
    lines.append(f'    WHERE NOT EXISTS (SELECT 1 FROM {quoted_table} WHERE {predicate})')
    lines.append('    ON CONFLICT DO NOTHING;')
    lines.append('')

for table in ordered:
    if table in serial_ids:
        lines.append(
            f"SELECT setval(pg_get_serial_sequence('demo_cpanel.{table}', 'id'), "
            f"COALESCE((SELECT MAX(id) FROM \"{table}\"), 1), "
            f"EXISTS (SELECT 1 FROM \"{table}\"));"
        )
lines.extend(['', 'COMMIT;', ''])
output = '\n'.join(lines)
sqlglot.parse(output, read='postgres', error_level=sqlglot.ErrorLevel.RAISE)
output_path.write_text(output, encoding='utf-8', newline='')
print(f'Generated {len(ordered)} seed inserts; {len(serial_ids)} serial sequences are reset after seeding.')
