from collections import Counter
from pathlib import Path
import re
import sqlglot
from sqlglot import exp

source = Path(r'c:\workspace\ud-db-backup\local-db\local-cpanel.sql').read_text(encoding='utf-8')
position = 0
counts = Counter()
failures = []
while True:
    start = source.find('INSERT INTO ', position)
    if start < 0:
        break
    quote = None
    escaped = False
    end = start
    while end < len(source):
        char = source[end]
        if escaped:
            escaped = False
        elif char == '\\':
            escaped = True
        elif quote:
            if char == quote:
                if end + 1 < len(source) and source[end + 1] == quote:
                    end += 1
                else:
                    quote = None
        elif char in "'\"`":
            quote = char
        elif char == ';':
            break
        end += 1
    statement = source[start:end + 1]
    position = end + 1
    try:
        parsed = sqlglot.parse_one(statement, read='mysql')
        target = parsed.this
        if isinstance(target, exp.Schema):
            table = target.this.name
        else:
            table = target.name
        values = parsed.expression
        rows = len(values.expressions) if isinstance(values, exp.Values) else 0
        counts[table] += rows
    except Exception as error:
        failures.append((statement[:120], str(error)))
print(f'parsed tables with inserts: {len(counts)}; rows: {sum(counts.values())}; failures: {len(failures)}')
for table, count in sorted(counts.items()):
    print(f'{table}\t{count}')
if failures:
    print('parse failures:', failures[:5])

def create_statements(text, dialect):
    pattern = (
        r'(?is)CREATE TABLE\s+.*?\)\s*ENGINE\s*=\s*[^;]+;'
        if dialect == 'mysql'
        else r'(?is)CREATE TABLE\s+.*?\);'
    )
    tables = {}
    for match in re.finditer(pattern, text):
        try:
            parsed = sqlglot.parse_one(match.group(0), read=dialect)
            target = parsed.this
            table = target.this.name if isinstance(target, exp.Schema) else target.name
            columns = [
                item.this.name
                for item in (target.expressions if isinstance(target, exp.Schema) else [])
                if isinstance(item, exp.ColumnDef)
            ]
            tables[table] = (parsed, columns)
        except Exception as error:
            print('DDL parse failure:', dialect, str(error))
    return tables

source_tables = create_statements(source, 'mysql')
schema_sql = Path(r'c:\workspace\studes-fastify-monorepo\infra\skeleton_cpanel.sql').read_text(encoding='utf-8')
schema_sql = re.sub(r'/\*.*?\*/', '', schema_sql, flags=re.S)
postgres_tables = create_statements(schema_sql, 'postgres')
print('--- column compatibility ---')
for table, count in sorted(counts.items()):
    if table not in source_tables or table not in postgres_tables:
        print(f'{table}\t{count}\tmissing table definition')
        continue
    source_columns = source_tables[table][1]
    target_columns = postgres_tables[table][1]
    missing = sorted(set(source_columns) - set(target_columns))
    added = sorted(set(target_columns) - set(source_columns))
    print(f'{table}\t{count}\tsource_only={missing}\tpostgres_only={added}')
