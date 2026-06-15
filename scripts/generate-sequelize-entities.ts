import fs from 'node:fs'
import path from 'node:path'

type Column = {
  name: string;
  sqlType: string;
  dataType: string;
  allowNull: boolean;
  primaryKey: boolean;
  autoIncrement: boolean;
  unique: boolean;
  defaultValue?: string;
  comment?: string;
  references?: { model: string; key: string };
  onDelete?: string;
  onUpdate?: string;
};

type Table = {
  name: string
  columns: Column[]
  indexes: any[]
  comment?: string
}

type Options = {
  sqlFile: string
  outDir: string
  schemaName?: string
  dryRun: boolean
}

function usage(): never {
  console.log(`Usage:
  tsx scripts/generate-sequelize-entities.ts --sql infra/cpanel_default.sql --out services/auth_service/src/entities

Options:
  --sql <file>       MySQL .sql dump or schema file to read
  --out <dir>        Directory where entity folders will be created
  --schema <name>    Optional Sequelize schema/database name for generated models
  --dry-run          Parse and print table count without writing files
`)
  process.exit(1)
}

function parseArgs(argv: string[]): Options {
  const options: Partial<Options> = { dryRun: false }

  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i]
    if (arg === '--sql') options.sqlFile = argv[++i]
    else if (arg === '--out') options.outDir = argv[++i]
    else if (arg === '--schema') options.schemaName = argv[++i]
    else if (arg === '--dry-run') options.dryRun = true
    else if (arg === '--help' || arg === '-h') usage()
    else {
      console.error(`Unknown option: ${arg}`)
      usage()
    }
  }

  if (!options.sqlFile || !options.outDir) usage()

  return {
    sqlFile: path.resolve(process.cwd(), options.sqlFile),
    outDir: path.resolve(process.cwd(), options.outDir),
    schemaName: options.schemaName,
    dryRun: options.dryRun ?? false
  }
}

function stripMysqlComments(sql: string): string {
  return sql
    .replace(/\/\*![\s\S]*?\*\//g, '')
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/^\s*--.*$/gm, '')
}

function findCreateTableStatements(sql: string): string[] {
  const statements: string[] = []
  const createTable = /create\s+table\s+(?:if\s+not\s+exists\s+)?/gi
  let match: RegExpExecArray | null

  while ((match = createTable.exec(sql))) {
    let index = match.index
    let quote: string | null = null
    let depth = 0

    while (index < sql.length) {
      const char = sql[index]
      const next = sql[index + 1]

      if (quote) {
        if (char === '\\') {
          index += 2
          continue
        }
        if (char === quote) quote = null
      } else if (char === "'" || char === '"' || char === '`') {
        quote = char
      } else if (char === '(') {
        depth += 1
      } else if (char === ')') {
        depth -= 1
      } else if (char === ';' && depth === 0) {
        statements.push(sql.slice(match.index, index + 1))
        createTable.lastIndex = index + 1
        break
      } else if (char === '-' && next === '-') {
        const lineEnd = sql.indexOf('\n', index)
        index = lineEnd === -1 ? sql.length : lineEnd
      }

      index += 1
    }
  }

  return statements
}

function splitTopLevel(input: string): string[] {
  const parts: string[] = []
  let start = 0
  let quote: string | null = null
  let depth = 0

  for (let index = 0; index < input.length; index += 1) {
    const char = input[index]

    if (quote) {
      if (char === '\\') {
        index += 1
        continue
      }
      if (char === quote) quote = null
    } else if (char === "'" || char === '"' || char === '`') {
      quote = char
    } else if (char === '(') {
      depth += 1
    } else if (char === ')') {
      depth -= 1
    } else if (char === ',' && depth === 0) {
      parts.push(input.slice(start, index).trim())
      start = index + 1
    }
  }

  const tail = input.slice(start).trim()
  if (tail) parts.push(tail)
  return parts
}

function tsTypeFor(sqlType: string): string {
  const normalized = sqlType.toLowerCase();

  if (normalized.includes('serial') || normalized.startsWith('int') || normalized.startsWith('smallint')) return 'number';
  if (normalized.startsWith('bigint')) return 'string | number';
  if (normalized === 'uuid') return 'string';
  if (normalized === 'boolean') return 'boolean';
  if (normalized.startsWith('timestamp') || normalized === 'date' || normalized.startsWith('time')) return 'Date';
  if (normalized.startsWith('jsonb') || normalized.startsWith('json')) return 'unknown';
  if (normalized === 'bytea') return 'Buffer';
  if (normalized.startsWith('numeric') || normalized.startsWith('decimal') || normalized.startsWith('float') || normalized.startsWith('double')) return 'number';

  return 'string';
}

function cleanIdentifier(name: string): string {
  return name.replace(/"/g, '').trim();
}

// Helper: convert snake_case → camelCase
function toCamelCase(str: string): string {
  return str.replace(/_([a-z])/g, (_, c) => c.toUpperCase());
}

// Helper: convert table name → PascalCase
function toPascalCase(str: string): string {
  return str
    .replace(/(^|_)(\w)/g, (_, __, c) => c.toUpperCase());
}

// Extract identifiers from PRIMARY KEY, UNIQUE, FOREIGN KEY clauses
function extractIdentifiers(value: string): string[] {
  // First try quoted identifiers
  const quoted = Array.from(value.matchAll(/"([^"]+)"/g)).map(m => m[1]);
  if (quoted.length > 0) return quoted;

  // Otherwise grab bare words inside parentheses
  const parenMatch = value.match(/\(([^)]+)\)/);
  if (parenMatch) {
    return parenMatch[1]
      .split(',')
      .map(s => s.trim().replace(/["']/g, ''))
      .filter(s => s.length > 0 && !/^(PRIMARY|CONSTRAINT|FOREIGN|KEY)$/i.test(s));
  }

  return [];
}

function dataTypeFor(sqlType: string): string {
  const normalized = sqlType.toLowerCase();
  const length = normalized.match(/\((.+)\)/)?.[1];

  if (normalized.includes('serial')) return 'DataTypes.INTEGER';
  if (normalized === 'uuid') return 'DataTypes.UUID';
  if (normalized.startsWith('varchar')) return length ? `DataTypes.STRING(${length})` : 'DataTypes.STRING';
  if (normalized.startsWith('char')) return length ? `DataTypes.CHAR(${length})` : 'DataTypes.CHAR';
  if (normalized === 'text') return 'DataTypes.TEXT';
  if (normalized === 'bytea') return 'DataTypes.BLOB';
  if (normalized === 'boolean') return 'DataTypes.BOOLEAN';
  if (normalized.startsWith('timestamp')) return 'DataTypes.DATE';
  if (normalized === 'date') return 'DataTypes.DATEONLY';
  if (normalized.startsWith('time')) return 'DataTypes.TIME';
  if (normalized.startsWith('jsonb')) return 'DataTypes.JSONB';
  if (normalized.startsWith('json')) return 'DataTypes.JSON';
  if (normalized.startsWith('numeric') || normalized.startsWith('decimal')) return length ? `DataTypes.DECIMAL(${length})` : 'DataTypes.DECIMAL';
  if (normalized.startsWith('float')) return 'DataTypes.FLOAT';
  if (normalized.startsWith('double')) return 'DataTypes.DOUBLE';
  if (normalized.startsWith('bigint')) return 'DataTypes.BIGINT';
  if (normalized.startsWith('int')) return 'DataTypes.INTEGER';

  return 'DataTypes.TEXT';
}

// Column parser (PostgreSQL → Sequelize metadata)
function parseColumn(definition: string): Column | null {
  const match = definition.match(/^(?:"([^"]+)"|(\w+))\s+(.+)$/s);
  if (!match) return null;

  const name = match[1] || match[2];
  const rest = match[3].trim();

  const sqlType = rest.match(/^([a-zA-Z]+(?:\s+[a-zA-Z]+)?)(?:\s*\([^)]*\))?/i)?.[0] ?? 'text';

  // Map PostgreSQL types → Sequelize DataTypes
  let dataType: string;
  if (/^smallint/i.test(sqlType)) dataType = 'DataTypes.SMALLINT';
  else if (/^integer/i.test(sqlType)) dataType = 'DataTypes.INTEGER';
  else if (/^bigint/i.test(sqlType)) dataType = 'DataTypes.BIGINT';
  else if (/^serial/i.test(sqlType)) dataType = 'DataTypes.INTEGER';
  else if (/^character varying/i.test(sqlType) || /^varchar/i.test(sqlType)) {
    const len = sqlType.match(/\((\d+)\)/)?.[1];
    dataType = len ? `DataTypes.STRING(${len})` : 'DataTypes.STRING';
  }
  else if (/^text/i.test(sqlType)) dataType = 'DataTypes.TEXT';
  else if (/^jsonb/i.test(sqlType)) dataType = 'DataTypes.JSONB';
  else if (/^timestamp/i.test(sqlType)) dataType = 'DataTypes.DATE';
  else if (/^uuid/i.test(sqlType)) dataType = 'DataTypes.UUID';
  else dataType = 'DataTypes.STRING';

  // Normalize defaults
  let defaultValue: string | undefined;
  const defaultMatch = rest.match(/\bDEFAULT\s+([^,]+)/i);
  if (defaultMatch) {
    defaultValue = defaultMatch[1].trim();
    if (/^null(::[a-z\s]+)?$/i.test(defaultValue)) defaultValue = null;
    else if (/^current_timestamp/i.test(defaultValue) || /^now\(\)/i.test(defaultValue)) defaultValue = 'DataTypes.NOW';
    else if (/^uuid_generate_v4\(\)/i.test(defaultValue)) defaultValue = 'Sequelize.fn("uuid_generate_v4")';
  }

  return {
    name,
    sqlType,
    dataType,
    allowNull: !/\bNOT\s+NULL\b/i.test(rest),
    primaryKey: /\bPRIMARY\s+KEY\b/i.test(rest),
    autoIncrement: /\bSERIAL\b/i.test(sqlType) || /\bGENERATED\b/i.test(rest),
    unique: /\bUNIQUE\b/i.test(rest),
    defaultValue,
    comment: undefined
  };
}


function extractBacktickNames(value: string): string[] {
  return Array.from(value.matchAll(/`([^`]+)`/g)).map((match) => match[1])
}
// Table parser
function parseTable(statement: string): Table | null {
  const tableMatch = statement.match(/create\s+table\s+(?:if\s+not\s+exists\s+)?("?[\w]+"?(?:\."?[\w]+"?)?)/i);
  if (!tableMatch) return null;

  const tableName = cleanIdentifier(tableMatch[1]);
  const bodyStart = statement.indexOf('(', tableMatch.index);
  const bodyEnd = statement.lastIndexOf(')');
  if (bodyStart === -1 || bodyEnd === -1 || bodyEnd <= bodyStart) return null;

  const body = statement.slice(bodyStart + 1, bodyEnd);
  const columns: Column[] = [];
  const indexes: { fields: string[]; unique?: boolean }[] = [];
  const primaryKeyColumns = new Set<string>();
  const uniqueColumns = new Set<string>();

  for (const part of splitTopLevel(body)) {
    const column = parseColumn(part);
    if (column && !/^(PRIMARY|CONSTRAINT)$/i.test(column.name)) {
      columns.push(column);
      continue;
    }

    // PRIMARY KEY (col1, col2)
    if (/^primary\s+key\b/i.test(part)) {
      const names = extractIdentifiers(part);
      names.forEach(name => primaryKeyColumns.add(name));
      indexes.push({ fields: names, unique: true });
      continue;
    }

    // UNIQUE (col1, col2)
    if (/unique\b/i.test(part)) {
      const names = extractIdentifiers(part);
      indexes.push({ fields: names, unique: true });
      continue;
    }

    // FOREIGN KEY ... REFERENCES
    if (/references/i.test(part)) {
      const fkMatch = part.match(/references\s+"?(\w+)"?\s*\("?(\w+)"?\)/i);
      if (fkMatch) {
        const colNames = extractIdentifiers(part);
        for (const colName of colNames) {
          const col = columns.find(c => c.name === colName);
          if (col) {
            col.references = { model: fkMatch[1], key: fkMatch[2] };
            if (/on delete cascade/i.test(part)) col.onDelete = 'CASCADE';
            if (/on delete set null/i.test(part)) col.onDelete = 'SET NULL';
            if (/on update cascade/i.test(part)) col.onUpdate = 'CASCADE';
          }
        }
      }
    }
  }

  // Apply PK/Unique flags
  // Apply PK flags
  for (const column of columns) {
    if (primaryKeyColumns.has(column.name)) column.primaryKey = true;
  }

  return { name: tableName, columns, indexes }
}



// function defaultValueFor(raw?: string): string | undefined {
//   if (!raw) return undefined
//   const value = raw.trim()
//   const lower = value.toLowerCase()

//   if (lower === 'null') return 'null'
//   if (lower === 'current_timestamp' || lower === 'current_timestamp()' || lower === 'now()') return 'DataTypes.NOW'
//   if (/^'.*'$/.test(value)) return JSON.stringify(value.slice(1, -1).replace(/\\'/g, "'"))
//   if (/^-?\d+(?:\.\d+)?$/.test(value)) return value

//   return undefined
// }

function defaultValueFor(raw?: string): string | undefined {
  if (!raw) return undefined;
  const lower = raw.toLowerCase();

  if (lower === 'null') return 'null';
  if (lower.includes('now()')) return 'DataTypes.NOW';
  if (lower.includes('uuid_generate_v4()')) return 'Sequelize.fn("uuid_generate_v4")';
  if (/^-?\d+(?:\.\d+)?$/.test(raw)) return raw; // numeric
  if (/^'.*'$/.test(raw)) {
    const inner = raw.slice(1, -1).replace(/\\'/g, "'");
    return JSON.stringify(inner);
  }

  return JSON.stringify(raw);
}


function renderEntity(table: Table, schemaName?: string): string {
  const className = `${toPascalCase(table.name)}Entity`;
  const attributesName = `${className.replace('Entity', '')}Attributes`;
  const creationName = `${className.replace('Entity', '')}CreationAttributes`;
  const initName = `init${className}`;

  const attributes = table.columns.map(col => {
    const optional = col.allowNull || col.defaultValue || col.autoIncrement ? '?' : '';
    const nullable = col.allowNull ? ' | null' : '';
    return `  ${toCamelCase(col.name)}${optional}: ${tsTypeFor(col.sqlType)}${nullable}`;
  }).join('\n');

  const creationOptional = table.columns
    .filter(col => col.allowNull || col.defaultValue || col.autoIncrement)
    .map(col => `"${toCamelCase(col.name)}"`)
    .join(' | ') || 'never';

  const fields = table.columns.map(col => {
    const lines = [
      `      ${toCamelCase(col.name)}: {`,
      `        type: ${dataTypeFor(col.sqlType)},`,
      `        field: '${col.name}',`,
      `        allowNull: ${col.allowNull},`
    ];
    if (col.primaryKey) lines.push('        primaryKey: true,');
    if (col.autoIncrement) lines.push('        autoIncrement: true,');
    if (col.unique) lines.push('        unique: true,');
    if (col.defaultValue) lines.push(`        defaultValue: ${defaultValueFor(col.defaultValue)},`);
    if (col.comment) lines.push(`        comment: '${col.comment}',`);
    if (col.references) {
      lines.push(`        references: { model: '${col.references.model}', key: '${col.references.key}' },`);
      if (col.onDelete) lines.push(`        onDelete: '${col.onDelete}',`);
      if (col.onUpdate) lines.push(`        onUpdate: '${col.onUpdate}',`);
    }
    lines.push('      }');
    return lines.join('\n');
  }).join(',\n');
  const indexes = table.indexes.map(idx => {
    return `      { unique: ${!!idx.unique}, fields: [${idx.fields.map(f => `'${f}'`).join(', ')}] }`;
  }).join(',\n');

  return `import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type ${attributesName} = {
${attributes}
}

export type ${creationName} = Optional<${attributesName}, ${creationOptional}>

export class ${className}
  extends Model<${attributesName}, ${creationName}>
  implements ${attributesName}
{
${table.columns.map(col => {
    const nullable = col.allowNull ? ' | null' : '';
    return `  declare ${toCamelCase(col.name)}: ${tsTypeFor(col.sqlType)}${nullable}`;
  }).join('\n')}
}

export function ${initName}(sequelize: Sequelize): typeof ${className} {
  ${className}.init(
    {
${fields}
    },
    {
      sequelize,
      tableName: '${table.name}',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: false${schemaName ? `,\n      schema: '${schemaName}'` : ''}${table.comment ? `,\n      comment: '${table.comment}'` : ''}${indexes ? `,\n      indexes: [\n${indexes}\n      ]` : ''}
    }
  )
  return ${className}
}
`;
}


function renderIndex(tables: Table[]): string {
  const imports = tables
    .map(
      (table) =>
        `import { init${toPascalCase(table.name)}Entity } from './${table.name}/${table.name}.entity'`
    )
    .join('\n')

  // Generate type entries
  const typeEntries = tables
    .map(
      (t) =>
        `  ${t.name}: ReturnType<typeof init${toPascalCase(t.name)}Entity>;`
    )
    .join('\n')

  // Generate model initializers
  const models = tables
    .map(
      (t) => `      ${t.name}: init${toPascalCase(t.name)}Entity(sequelize)`
    )
    .join(',\n')

  return `import type { Sequelize } from 'sequelize'
${imports}

export type GeneratedModels = {
${typeEntries}
}

export function initGeneratedEntities(sequelize: Sequelize): { models: GeneratedModels } {
  return {
    models: {
${models}
    }
  }
}
`
}


export function writeEntities(tables: Table[], outDir: string, schemaName?: string) {
  fs.mkdirSync(outDir, { recursive: true })

  for (const table of tables) {
    const folder = path.join(outDir, table.name)
    fs.mkdirSync(folder, { recursive: true })
    fs.writeFileSync(
      path.join(folder, `${table.name}.entity.ts`),
      renderEntity(table, schemaName)
    )
  }

  fs.writeFileSync(path.join(outDir, 'index.ts'), renderIndex(tables))
}

function main() {
  const options = parseArgs(process.argv.slice(2))
  const sql = stripMysqlComments(fs.readFileSync(options.sqlFile, 'utf8'))
  const tables = findCreateTableStatements(sql).map(parseTable).filter((table): table is Table => Boolean(table))

  if (tables.length === 0) {
    throw new Error(`No CREATE TABLE statements found in ${options.sqlFile}`)
  }

  if (options.dryRun) {
    console.log(`Parsed ${tables.length} tables from ${options.sqlFile}`)
    console.log(tables.map((table) => `- ${table.name} (${table.columns.length} columns)`).join('\n'))
    return
  }

  writeEntities(tables, options.outDir, options.schemaName)
  console.log(`Generated ${tables.length} Sequelize entities in ${options.outDir}`)
}

main()
