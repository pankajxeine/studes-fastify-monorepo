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

type ForeignKey = {
  column: string;
  model: string;
  key: string;
  onDelete?: string;
  onUpdate?: string;
};

type Table = {
  name: string
  columns: Column[]
  foreignKeys: ForeignKey[]
  indexes: any[]
  comment?: string
}

type Options = {
  sqlFile: string
  outDir: string
  schemaName?: string
  dryRun: boolean
}

type EntityModule = {
  dirName: string
  exportName: string
  decoratorName: string
}

function usage(): never {
  console.log(`Usage:
  tsx scripts/generate-sequelize-entities.ts --sql infra/cpanel_default.sql --out services/auth_service/src/entities

Options:
  --sql <file>       PostgreSQL .sql schema file to read
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

function toLowerCamelCase(str: string): string {
  const pascal = toPascalCase(str)
  return pascal[0].toLowerCase() + pascal.slice(1)
}

// Extract identifiers from PRIMARY KEY, UNIQUE, FOREIGN KEY clauses
function extractIdentifiers(value: string): string[] {
  // Only read the key list inside parentheses; a quoted constraint name is not a key.
  const parenMatch = value.match(/\(([^)]+)\)/);
  if (parenMatch) {
    const quoted = Array.from(parenMatch[1].matchAll(/"([^"]+)"/g)).map(m => m[1]);
    if (quoted.length > 0) return quoted;

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
  if (normalized.startsWith('character varying') || normalized.startsWith('varchar')) return length ? `DataTypes.STRING(${length})` : 'DataTypes.STRING';
  if (normalized.startsWith('character') || normalized.startsWith('char')) return length ? `DataTypes.CHAR(${length})` : 'DataTypes.CHAR';
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
  if (normalized.startsWith('smallint')) return 'DataTypes.SMALLINT';
  if (normalized.startsWith('int')) return 'DataTypes.INTEGER';

  return 'DataTypes.TEXT';
}

// Column parser (PostgreSQL → Sequelize metadata)
function parseColumn(definition: string): Column | null {
  const match = definition.match(/^(?:"([^"]+)"|(\w+))\s+(.+)$/s);
  if (!match) return null;

  const name = match[1] || match[2];
  const rest = match[3].trim();

  const sqlType = rest.match(/^(?:[a-zA-Z_][\w$]*\.)?[a-zA-Z_][\w$]*(?:\s+[a-zA-Z_][\w$]*)?(?:\s*\([^)]*\))?/i)?.[0] ?? 'text';

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
  else if (/^json\b/i.test(sqlType)) dataType = 'DataTypes.JSON';
  else if (/^timestamp/i.test(sqlType)) dataType = 'DataTypes.DATE';
  else if (/^date\b/i.test(sqlType)) dataType = 'DataTypes.DATEONLY';
  else if (/^time\b/i.test(sqlType)) dataType = 'DataTypes.TIME';
  else if (/^uuid/i.test(sqlType)) dataType = 'DataTypes.UUID';
  else if (/^boolean/i.test(sqlType)) dataType = 'DataTypes.BOOLEAN';
  else if (/^bytea/i.test(sqlType)) dataType = 'DataTypes.BLOB';
  else if (/^numeric|^decimal/i.test(sqlType)) {
    const precision = sqlType.match(/\((\d+)\s*,\s*(\d+)\)/);
    dataType = precision ? `DataTypes.DECIMAL(${precision[1]}, ${precision[2]})` : 'DataTypes.DECIMAL';
  }
  else if (/^double/i.test(sqlType)) dataType = 'DataTypes.DOUBLE';
  else if (/^real|^float/i.test(sqlType)) dataType = 'DataTypes.FLOAT';
  else if (/^character varying|^varchar/i.test(sqlType)) {
    const len = sqlType.match(/\((\d+)\)/)?.[1];
    dataType = len ? `DataTypes.STRING(${len})` : 'DataTypes.STRING';
  }
  else if (/^character|^char/i.test(sqlType)) {
    const len = sqlType.match(/\((\d+)\)/)?.[1];
    dataType = len ? `DataTypes.CHAR(${len})` : 'DataTypes.CHAR';
  }
  else dataType = 'DataTypes.STRING';

  // Normalize defaults
  let defaultValue: string | undefined;
  const defaultMatch = rest.match(/\bDEFAULT\s+([\s\S]*?)(?=\s+(?:NOT\s+NULL|NULL|PRIMARY\s+KEY|UNIQUE|REFERENCES|CHECK|CONSTRAINT|COLLATE|GENERATED)\b|$)/i);
  if (defaultMatch) {
    defaultValue = defaultMatch[1].trim();
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

function unquoteIdentifier(value: string): string {
  return value.trim().replace(/^["`]|["`]$/g, '')
}

function parseForeignKeyDefinitions(sql: string): ForeignKey[] {
  const foreignKeys: ForeignKey[] = []
  const pattern = /foreign\s+key\s*\(([^)]+)\)\s*references\s+((?:"[^"]+"|`[^`]+`|[\w$]+)(?:\s*\.\s*(?:"[^"]+"|`[^`]+`|[\w$]+))?)\s*\(([^)]+)\)([\s\S]*?)(?=,\s*(?:constraint\b|foreign\s+key\b|primary\s+key\b|unique\b)|$)/gi
  let match: RegExpExecArray | null

  while ((match = pattern.exec(sql)) !== null) {
    const sourceColumn = unquoteIdentifier(match[1].split(',')[0])
    const targetTable = unquoteIdentifier(match[2].split('.').pop() ?? match[2])
    const targetColumn = unquoteIdentifier(match[3].split(',')[0])
    const actions = match[4]
    const onDelete = actions.match(/on\s+delete\s+(cascade|set\s+null|set\s+default|restrict|no\s+action)/i)?.[1]
    const onUpdate = actions.match(/on\s+update\s+(cascade|set\s+null|set\s+default|restrict|no\s+action)/i)?.[1]

    foreignKeys.push({
      column: sourceColumn,
      model: targetTable,
      key: targetColumn,
      onDelete: onDelete?.replace(/\s+/g, ' ').toUpperCase(),
      onUpdate: onUpdate?.replace(/\s+/g, ' ').toUpperCase(),
    })
  }

  return foreignKeys
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
  const foreignKeys: ForeignKey[] = [];
  const indexes: { fields: string[]; unique?: boolean }[] = [];
  const primaryKeyColumns = new Set<string>();
  for (const part of splitTopLevel(body)) {
    const tableConstraint = part.replace(/^\s*constraint\s+(?:"[^"]+"|`[^`]+`|[\w$]+)\s+/i, '')

    // PRIMARY KEY (col1, col2), including named constraints.
    if (/^primary\s+key\b/i.test(tableConstraint)) {
      const names = extractIdentifiers(part);
      names.forEach(name => primaryKeyColumns.add(name));
      indexes.push({ fields: names, unique: true });
      continue;
    }

    // Handle UNIQUE before parsing columns, otherwise a table-level UNIQUE
    // constraint is incorrectly emitted as a column named "UNIQUE".
    if (/^unique\b/i.test(tableConstraint)) {
      const names = extractIdentifiers(part);
      indexes.push({ fields: names, unique: true });
      continue;
    }

    if (/^foreign\s+key\b/i.test(tableConstraint)) {
      foreignKeys.push(...parseForeignKeyDefinitions(tableConstraint))
      continue
    }

    // Other table constraints do not define model columns.
    if (/^(?:check|exclude)\b/i.test(tableConstraint)) continue

    const column = parseColumn(part);
    if (!column) continue;
    columns.push(column);

    const referenceMatch = part.match(/references\s+((?:"[^"]+"|`[^`]+`|[\w$]+)(?:\s*\.\s*(?:"[^"]+"|`[^`]+`|[\w$]+))?)\s*\(([^)]+)\)/i)
    if (referenceMatch) {
      const targetTable = unquoteIdentifier(referenceMatch[1].split('.').pop() ?? referenceMatch[1])
      const targetColumn = unquoteIdentifier(referenceMatch[2].split(',')[0])
      foreignKeys.push({
        column: column.name,
        model: targetTable,
        key: targetColumn,
        onDelete: part.match(/on\s+delete\s+(cascade|set\s+null|set\s+default|restrict|no\s+action)/i)?.[1]?.replace(/\s+/g, ' ').toUpperCase(),
        onUpdate: part.match(/on\s+update\s+(cascade|set\s+null|set\s+default|restrict|no\s+action)/i)?.[1]?.replace(/\s+/g, ' ').toUpperCase(),
      })
    }
  }

  // Apply PK/Unique flags
  // Apply PK flags
  for (const column of columns) {
    if (primaryKeyColumns.has(column.name)) column.primaryKey = true;
  }

  for (const foreignKey of foreignKeys) {
    const column = columns.find((item) => item.name === foreignKey.column)
    if (!column) continue
    column.references = { model: foreignKey.model, key: foreignKey.key }
    if (foreignKey.onDelete) column.onDelete = foreignKey.onDelete
    if (foreignKey.onUpdate) column.onUpdate = foreignKey.onUpdate
  }

  return { name: tableName, columns, foreignKeys, indexes }
}



function defaultValueFor(raw?: string): string | undefined {
  if (!raw) return undefined;
  const value = raw.trim();
  const lower = value.toLowerCase();

  // NULL means there is no useful Sequelize default; the column's nullability
  // already controls whether callers may omit or provide null.
  if (/^null(?:\s*::\s*[\w. ]+)?$/i.test(value)) return undefined;
  if (/^(?:now\s*\(\)|current_timestamp(?:\s*\(\s*\d*\s*\))?)$/i.test(value)) return 'DataTypes.NOW';
  if (/^(?:true|false)$/i.test(value)) return lower;
  if (/^-?\d+(?:\.\d+)?$/.test(value)) return value;
  if (/^'(?:[^']|'')*'(?:\s*::\s*[\w. ]+)?$/s.test(value)) {
    const quoted = value.match(/^'((?:[^']|'')*)'/s)?.[1] ?? '';
    return JSON.stringify(quoted.replace(/''/g, "'"));
  }

  // Database functions and expressions need to run in PostgreSQL. Plain
  // strings would persist the expression text instead of its value.
  return `Sequelize.literal(${JSON.stringify(value)})`;
}


function renderEntity(table: Table, schemaName?: string): string {
  const className = `${toPascalCase(table.name)}Entity`;
  const attributesName = `${className.replace('Entity', '')}Attributes`;
  const creationName = `${className.replace('Entity', '')}CreationAttributes`;
  const initName = `init${className}`;
  const hasDeletedAt = table.columns.some((column) => column.name.toLowerCase() === 'deleted_at');
  const hasCreatedAt = table.columns.some((column) => column.name.toLowerCase() === 'created_at');
  const hasUpdatedAt = table.columns.some((column) => column.name.toLowerCase() === 'updated_at');
  const usesTimestamps = hasCreatedAt && hasUpdatedAt;
  const usesParanoidDeletes = hasDeletedAt && usesTimestamps;

  const attributes = table.columns.map(col => {
    const optional = !col.primaryKey && (col.allowNull || col.defaultValue || col.autoIncrement) ? '?' : '';
    const nullable = col.allowNull ? ' | null' : '';
    return `  ${toCamelCase(col.name)}${optional}: ${tsTypeFor(col.sqlType)}${nullable}`;
  }).join('\n');

  const creationOptional = table.columns
    .filter(col => !col.primaryKey && (col.allowNull || col.defaultValue || col.autoIncrement))
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
    const renderedDefault = defaultValueFor(col.defaultValue);
    if (renderedDefault) lines.push(`        defaultValue: ${renderedDefault},`);
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
      timestamps: ${usesTimestamps},
      underscored: true,
      freezeTableName: true${usesParanoidDeletes ? `,\n      paranoid: true,\n      deletedAt: 'deletedAt'` : ''}${schemaName ? `,\n      schema: '${schemaName}'` : ''}${table.comment ? `,\n      comment: '${table.comment}'` : ''}${indexes ? `,\n      indexes: [\n${indexes}\n      ]` : ''}
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

  const tableNames = new Set(tables.map((table) => table.name.toLowerCase()))
  const belongsToAliases = new Map<string, Set<string>>()
  const hasManyAliases = new Map<string, Set<string>>()
  const associationLines: string[] = []
  for (const table of tables) {
    for (const foreignKey of table.foreignKeys) {
      const target = tables.find((item) => item.name.toLowerCase() === foreignKey.model.toLowerCase())
      if (!target || !tableNames.has(table.name.toLowerCase())) continue

      const foreignKeyAttribute = toCamelCase(foreignKey.column)
      const targetKeyAttribute = toCamelCase(foreignKey.key)
      const baseAlias = toLowerCamelCase(foreignKey.column.replace(/_id$/i, '')) || toLowerCamelCase(target.name)
      const sourceAliases = belongsToAliases.get(table.name) ?? new Set<string>()
      const belongsToAlias = sourceAliases.has(baseAlias) ? `${baseAlias}${toPascalCase(target.name)}` : baseAlias
      sourceAliases.add(belongsToAlias)
      belongsToAliases.set(table.name, sourceAliases)

      const targetAliases = hasManyAliases.get(target.name) ?? new Set<string>()
      const reverseBaseAlias = toLowerCamelCase(table.name)
      const hasManyAlias = targetAliases.has(reverseBaseAlias)
        ? `${reverseBaseAlias}By${toPascalCase(foreignKey.column)}`
        : reverseBaseAlias
      targetAliases.add(hasManyAlias)
      hasManyAliases.set(target.name, targetAliases)

      const options = [
        `foreignKey: '${foreignKeyAttribute}'`,
        `targetKey: '${targetKeyAttribute}'`,
        ...(foreignKey.onDelete ? [`onDelete: '${foreignKey.onDelete}'`] : []),
        ...(foreignKey.onUpdate ? [`onUpdate: '${foreignKey.onUpdate}'`] : []),
      ].join(', ')
      associationLines.push(`  models.${table.name}.belongsTo(models.${target.name}, { as: '${belongsToAlias}', ${options} })`)
      associationLines.push(`  models.${target.name}.hasMany(models.${table.name}, { as: '${hasManyAlias}', foreignKey: '${foreignKeyAttribute}', sourceKey: '${targetKeyAttribute}'${foreignKey.onDelete ? `, onDelete: '${foreignKey.onDelete}'` : ''}${foreignKey.onUpdate ? `, onUpdate: '${foreignKey.onUpdate}'` : ''} })`)
    }
  }

  return `import type { Sequelize } from 'sequelize'
${imports}

export type GeneratedModels = {
${typeEntries}
}

export function createGeneratedModels(sequelize: Sequelize): GeneratedModels {
  const models: GeneratedModels = {
${models}
  }
  return models
}

export function associateGeneratedModels(models: GeneratedModels): void {
${associationLines.join('\n')}
}
`
}

function addAlterTableForeignKeys(sql: string, tables: Table[]) {
  const tableByName = new Map(tables.map((table) => [table.name.toLowerCase(), table]))
  const alterPattern = /alter\s+table\s+(?:only\s+)?((?:"[^"]+"|`[^`]+`|[\w$]+)(?:\s*\.\s*(?:"[^"]+"|`[^`]+`|[\w$]+))?)\s+([\s\S]*?);/gi
  let match: RegExpExecArray | null

  while ((match = alterPattern.exec(sql)) !== null) {
    const tableName = unquoteIdentifier(match[1].split('.').pop() ?? match[1]).toLowerCase()
    const table = tableByName.get(tableName)
    if (!table) continue

    for (const foreignKey of parseForeignKeyDefinitions(match[2])) {
      const duplicate = table.foreignKeys.some((existing) =>
        existing.column === foreignKey.column &&
        existing.model.toLowerCase() === foreignKey.model.toLowerCase() &&
        existing.key === foreignKey.key
      )
      if (duplicate) continue
      table.foreignKeys.push(foreignKey)

      const column = table.columns.find((item) => item.name === foreignKey.column)
      if (column) {
        column.references = { model: foreignKey.model, key: foreignKey.key }
        if (foreignKey.onDelete) column.onDelete = foreignKey.onDelete
        if (foreignKey.onUpdate) column.onUpdate = foreignKey.onUpdate
      }
    }
  }
}

function renderRootEntitiesIndex(modules: EntityModule[]): string {
  const imports = modules
    .map(
      (module) =>
        `import { createGeneratedModels as create${module.exportName}Models, associateGeneratedModels as associate${module.exportName}Models, type GeneratedModels as ${module.exportName}Models } from './${module.dirName}'`
    )
    .join('\n')

  const createLines = modules
    .map((module) => `  const ${module.decoratorName} = create${module.exportName}Models(sequelize)`)
    .join('\n')

  const associationLines = modules
    .map((module) => `  associate${module.exportName}Models(${module.decoratorName})`)
    .join('\n')

  const modelTypeEntries = modules
    .map((module) => `  ${module.exportName}Models`)
    .join(' &\n')

  const registryEntries = modules
    .map((module) => `    ...${module.decoratorName}`)
    .join(',\n')

  return `import type { FastifyInstance } from 'fastify'
import type { Sequelize } from 'sequelize'
${imports}

export type GeneratedEntityDecorations =
${modelTypeEntries}

export function registerGeneratedEntityDecorators(app: FastifyInstance, sequelize: Sequelize): GeneratedEntityDecorations {
${createLines}
${associationLines}
  const models: GeneratedEntityDecorations = {
${registryEntries}
  }
  app.decorate('models', models)

  return models
}

declare module 'fastify' {
  interface FastifyInstance {
    models: GeneratedEntityDecorations
  }
}
`
}

function findGeneratedEntityModules(entitiesRootDir: string): EntityModule[] {
  if (!fs.existsSync(entitiesRootDir)) return []

  return fs
    .readdirSync(entitiesRootDir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .filter((entry) => fs.existsSync(path.join(entitiesRootDir, entry.name, 'index.ts')))
    .map((entry) => ({
      dirName: entry.name,
      exportName: toPascalCase(entry.name),
      decoratorName: `${toLowerCamelCase(entry.name)}Models`,
    }))
    .sort((a, b) => a.dirName.localeCompare(b.dirName))
}

function writeRootEntitiesIndex(outDir: string) {
  const entitiesRootDir = path.dirname(outDir)
  const modules = findGeneratedEntityModules(entitiesRootDir)
  if (modules.length === 0) return

  writeFileIfChanged(path.join(entitiesRootDir, 'index.ts'), renderRootEntitiesIndex(modules))
}

function writeFileIfChanged(filePath: string, content: string) {
  if (fs.existsSync(filePath) && fs.readFileSync(filePath, 'utf8') === content) {
    return
  }

  fs.writeFileSync(filePath, content)
}


export function writeEntities(tables: Table[], outDir: string, schemaName?: string) {
  fs.mkdirSync(outDir, { recursive: true })

  for (const table of tables) {
    const folder = path.join(outDir, table.name)
    fs.mkdirSync(folder, { recursive: true })
    writeFileIfChanged(
      path.join(folder, `${table.name}.entity.ts`),
      renderEntity(table, schemaName)
    )
  }

  writeFileIfChanged(path.join(outDir, 'index.ts'), renderIndex(tables))
  writeRootEntitiesIndex(outDir)
}

function main() {
  const options = parseArgs(process.argv.slice(2))
  const sql = stripMysqlComments(fs.readFileSync(options.sqlFile, 'utf8'))
  const tables = findCreateTableStatements(sql).map(parseTable).filter((table): table is Table => Boolean(table))

  addAlterTableForeignKeys(sql, tables)

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
