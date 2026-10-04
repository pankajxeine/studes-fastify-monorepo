from pathlib import Path
import re
import sqlglot
from sqlglot import exp

text = Path(r'c:\workspace\studes-fastify-monorepo\infra\skeleton_cpanel.sql').read_text(encoding='utf-8')
text = re.sub(r'/\*.*?\*/', '', text, flags=re.S)
statements = sqlglot.parse(text, read='postgres')
for statement in statements:
    if isinstance(statement, exp.Create) and statement.args.get('kind') == 'TABLE':
        schema = statement.this
        name = schema.this.name
        if name == 'cpanel_companies':
            for column in schema.expressions:
                if isinstance(column, exp.ColumnDef):
                    constraints = column.args.get('constraints') or []
                    if any(isinstance(c.kind, exp.CheckColumnConstraint) for c in constraints):
                        print('CHECK COLUMN', column.this.name, column.args)
    for foreign_key in statement.find_all(exp.ForeignKey):
        print('FOREIGN KEY', foreign_key.args)
