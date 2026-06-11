import fs from 'node:fs'
import path from 'node:path'

type Column = {
  name: string
  sqlType: string
  allowNull: boolean
  primaryKey: boolean
  autoIncrement: boolean
  unique: boolean
  defaultValue?: string
  comment?: string
}

type Table = {
  name: string
  columns: Column[]
  indexes: string[]
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
    if (arg === 'sql') options.sqlFile = argv[++i]
    else if (arg === 'out') options.outDir = argv[++i]
    else if (arg === 'schema') options.schemaName = argv[++i]
    else if (arg === 'dry-run') options.dryRun = true
    else if (arg === 'help' || arg === '-h') usage()
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

function cleanIdentifier(identifier: string): string {
  return identifier.replace(/`/g, '').split('.').pop() ?? identifier
}

function toPascalCase(input: string): string {
  return input
    .split(/[^a-zA-Z0-9]+/)
    .filter(Boolean)
    .map((part) => part[0].toUpperCase() + part.slice(1))
    .join('')
}

function toCamelCase(input: string): string {
  const pascal = toPascalCase(input)
  return pascal ? pascal[0].toLowerCase() + pascal.slice(1) : input
}

function quoteObjectKey(key: string): string {
  return /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(key) ? key : JSON.stringify(key)
}

function parseColumn(definition: string): Column | null {
  const match = definition.match(/^`([^`]+)`\s+(.+)$/s)
  if (!match) return null

  const name = match[1]
  const rest = match[2].trim()
  const sqlType = rest.match(/^([a-zA-Z]+)(?:\s*\([^)]*\))?(?:\s+unsigned)?/i)?.[0] ?? 'text'
  const allowNull = !/\bnot\s+null\b/i.test(rest)
  const defaultMatch = rest.match(/\bdefault\s+((?:'([^'\\]|\\.)*')|(?:\([^)]*\))|[^\s,]+)/i)
  const commentMatch = rest.match(/\bcomment\s+'((?:[^'\\]|\\.)*)'/i)

  return {
    name,
    sqlType,
    allowNull,
    primaryKey: /\bprimary\s+key\b/i.test(rest),
    autoIncrement: /\bauto_increment\b/i.test(rest),
    unique: /\bunique\b/i.test(rest),
    defaultValue: defaultMatch?.[1],
    comment: commentMatch?.[1]?.replace(/\\'/g, "'")
  }
}

function extractBacktickNames(value: string): string[] {
  return Array.from(value.matchAll(/`([^`]+)`/g)).map((match) => match[1])
}

function parseTable(statement: string): Table | null {
  const tableMatch = statement.match(/create\s+table\s+(?:if\s+not\s+exists\s+)?((?:`[^`]+`|\w+)(?:\.(?:`[^`]+`|\w+))?)/i)
  if (!tableMatch) return null

  const tableName = cleanIdentifier(tableMatch[1])
  const bodyStart = statement.indexOf('(', tableMatch.index)
  const bodyEnd = statement.lastIndexOf(')')
  if (bodyStart === -1 || bodyEnd === -1 || bodyEnd <= bodyStart) return null

  const body = statement.slice(bodyStart + 1, bodyEnd)
  const columns: Column[] = []
  const indexes: string[] = []
  const primaryKeyColumns = new Set<string>()
  const uniqueColumns = new Set<string>()
  const tableComment = statement.match(/\bcomment\s*=\s*'((?:[^'\\]|\\.)*)'/i)?.[1]?.replace(/\\'/g, "'")

  for (const part of splitTopLevel(body)) {
    const column = parseColumn(part)
    if (column) {
      columns.push(column)
      continue
    }

    if (/^primary\s+key\b/i.test(part)) {
      for (const name of extractBacktickNames(part)) primaryKeyColumns.add(name)
      indexes.push(part)
      continue
    }

    if (/^(unique\s+)?key\b/i.test(part) || /^constraint\b/i.test(part)) {
      if (/^unique\s+key\b/i.test(part) || /\bunique\b/i.test(part)) {
        for (const name of extractBacktickNames(part).slice(1)) uniqueColumns.add(name)
      }
      indexes.push(part)
    }
  }

  for (const column of columns) {
    if (primaryKeyColumns.has(column.name)) column.primaryKey = true
    if (uniqueColumns.has(column.name)) column.unique = true
  }

  return { name: tableName, columns, indexes, comment: tableComment }
}

function dataTypeFor(sqlType: string): string {
  const normalized = sqlType.toLowerCase()
  const length = normalized.match(/\((.+)\)/)?.[1]

  if (normalized.startsWith('tinyint(1)') || normalized === 'boolean' || normalized === 'bool') return 'DataTypes.BOOLEAN'
  if (normalized.startsWith('tinyint')) return length ? `DataTypes.TINYINT(${length})` : 'DataTypes.TINYINT'
  if (normalized.startsWith('smallint')) return length ? `DataTypes.SMALLINT(${length})` : 'DataTypes.SMALLINT'
  if (normalized.startsWith('mediumint')) return 'DataTypes.INTEGER'
  if (normalized.startsWith('bigint')) return 'DataTypes.BIGINT'
  if (normalized.startsWith('int') || normalized.startsWith('integer')) return length ? `DataTypes.INTEGER(${length})` : 'DataTypes.INTEGER'
  if (normalized.startsWith('decimal') || normalized.startsWith('numeric')) return length ? `DataTypes.DECIMAL(${length})` : 'DataTypes.DECIMAL'
  if (normalized.startsWith('double')) return length ? `DataTypes.DOUBLE(${length})` : 'DataTypes.DOUBLE'
  if (normalized.startsWith('float')) return length ? `DataTypes.FLOAT(${length})` : 'DataTypes.FLOAT'
  if (normalized.startsWith('varchar')) return length ? `DataTypes.STRING(${length})` : 'DataTypes.STRING'
  if (normalized.startsWith('char')) return length ? `DataTypes.CHAR(${length})` : 'DataTypes.CHAR'
  if (normalized.startsWith('longtext')) return 'DataTypes.TEXT("long")'
  if (normalized.startsWith('mediumtext')) return 'DataTypes.TEXT("medium")'
  if (normalized.startsWith('text')) return 'DataTypes.TEXT'
  if (normalized.startsWith('datetime')) return 'DataTypes.DATE'
  if (normalized.startsWith('timestamp')) return 'DataTypes.DATE'
  if (normalized === 'date') return 'DataTypes.DATEONLY'
  if (normalized.startsWith('time')) return 'DataTypes.TIME'
  if (normalized.startsWith('json')) return 'DataTypes.JSON'
  if (normalized.startsWith('enum')) return `DataTypes.ENUM(${normalized.slice(normalized.indexOf('(') + 1, normalized.lastIndexOf(')'))})`
  if (normalized.startsWith('blob')) return 'DataTypes.BLOB'
  if (normalized.startsWith('binary') || normalized.startsWith('varbinary')) return 'DataTypes.BLOB'

  return 'DataTypes.TEXT'
}

function tsTypeFor(sqlType: string): string {
  const normalized = sqlType.toLowerCase()
  if (normalized.startsWith('tinyint(1)') || normalized === 'boolean' || normalized === 'bool') return 'boolean'
  if (
    normalized.startsWith('tinyint') ||
    normalized.startsWith('smallint') ||
    normalized.startsWith('mediumint') ||
    normalized.startsWith('int') ||
    normalized.startsWith('integer') ||
    normalized.startsWith('decimal') ||
    normalized.startsWith('numeric') ||
    normalized.startsWith('double') ||
    normalized.startsWith('float')
  ) {
    return 'number'
  }
  if (normalized.startsWith('bigint')) return 'string | number'
  if (normalized.startsWith('datetime') || normalized.startsWith('timestamp') || normalized === 'date') return 'Date'
  if (normalized.startsWith('json')) return 'unknown'
  if (normalized.startsWith('blob') || normalized.startsWith('binary') || normalized.startsWith('varbinary')) return 'Buffer'
  return 'string'
}

function defaultValueFor(raw?: string): string | undefined {
  if (!raw) return undefined
  const value = raw.trim()
  const lower = value.toLowerCase()

  if (lower === 'null') return 'null'
  if (lower === 'current_timestamp' || lower === 'current_timestamp()' || lower === 'now()') return 'DataTypes.NOW'
  if (/^'.*'$/.test(value)) return JSON.stringify(value.slice(1, -1).replace(/\\'/g, "'"))
  if (/^-?\d+(?:\.\d+)?$/.test(value)) return value

  return undefined
}

function renderEntity(table: Table, schemaName?: string): string {
  const className = `${toPascalCase(table.name)}Entity`
  const attributesName = `${toPascalCase(table.name)}Attributes`
  const creationName = `${toPascalCase(table.name)}CreationAttributes`
  const initName = `init${toPascalCase(table.name)}Entity`

  const attributes = table.columns
    .map((column) => {
      const optional = column.allowNull || column.defaultValue || column.autoIncrement ? '?' : ''
      const nullable = column.allowNull ? ' | null' : ''
      return `  ${quoteObjectKey(toCamelCase(column.name))}${optional}: ${tsTypeFor(column.sqlType)}${nullable}`
    })
    .join('\n')

  const creationOptional = table.columns
    .filter((column) => column.allowNull || column.defaultValue || column.autoIncrement)
    .map((column) => JSON.stringify(toCamelCase(column.name)))
    .join(' | ')

  const fields = table.columns
    .map((column) => {
      const lines = [
        `    ${quoteObjectKey(toCamelCase(column.name))}: {`,
        `      type: ${dataTypeFor(column.sqlType)},`,
        `      field: ${JSON.stringify(column.name)},`,
        `      allowNull: ${column.allowNull}`
      ]

      if (column.primaryKey) lines.push('      primaryKey: true')
      if (column.autoIncrement) lines.push('      autoIncrement: true')
      if (column.unique) lines.push('      unique: true')

      const defaultValue = defaultValueFor(column.defaultValue)
      if (defaultValue !== undefined) lines.push(`      defaultValue: ${defaultValue}`)
      if (column.comment) lines.push(`      comment: ${JSON.stringify(column.comment)}`)

      return `${lines.join(',\n')}\n    }`
    })
    .join(',\n')

  const options = [
    `    tableName: ${JSON.stringify(table.name)}`,
    '    timestamps: false',
    '    underscored: true',
    '    freezeTableName: true'
  ]

  if (schemaName) options.push(`    schema: ${JSON.stringify(schemaName)}`)
  if (table.comment) options.push(`    comment: ${JSON.stringify(table.comment)}`)

  const optionalType = creationOptional || 'never'

  return `import { DataTypes, Model, Sequelize, type Optional } from 'sequelize'

export type ${attributesName} = {
${attributes}
}

export type ${creationName} = Optional<${attributesName}, ${optionalType}>

export class ${className}
  extends Model<${attributesName}, ${creationName}>
  implements ${attributesName}
{
${table.columns
  .map((column) => {
    const optional = column.allowNull || column.defaultValue || column.autoIncrement ? '!' : '!'
    const nullable = column.allowNull ? ' | null' : ''
    return `  declare ${quoteObjectKey(toCamelCase(column.name))}${optional}: ${tsTypeFor(column.sqlType)}${nullable}`
  })
  .join('\n')}
}

export function ${initName}(sequelize: Sequelize): typeof ${className} {
  ${className}.init(
  {
${fields}
  },
  {
${options.join(',\n')}
  }
  )

  return ${className}
}
`
}

function renderIndex(tables: Table[]): string {
  const imports = tables
    .map((table) => `import { init${toPascalCase(table.name)}Entity } from './${table.name}/${table.name}.entity'`)
    .join('\n')
  const initCalls = tables.map((table) => `  init${toPascalCase(table.name)}Entity(sequelize)`).join('\n')

  return `import type { Sequelize } from 'sequelize'
${imports}

export function initGeneratedEntities(sequelize: Sequelize): void {
${initCalls}
}
`
}

function writeEntities(tables: Table[], outDir: string, schemaName?: string) {
  fs.mkdirSync(outDir, { recursive: true })

  for (const table of tables) {
    const folder = path.join(outDir, table.name)
    fs.mkdirSync(folder, { recursive: true })
    fs.writeFileSync(path.join(folder, `${table.name}.entity.ts`), renderEntity(table, schemaName))
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
