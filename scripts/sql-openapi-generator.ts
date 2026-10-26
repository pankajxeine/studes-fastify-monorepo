import fs from 'node:fs'
import path from 'node:path'

export interface Column {
  name: string;              // column name
  type: string;              // raw SQL type (e.g. VARCHAR(255), JSONB, TIMESTAMP)
  required: boolean;         // true if NOT NULL
  defaultValue?: string;     // default value if present
  isGenerated?: boolean;
  isUnique?: boolean;
  nullable?: boolean;
  minimum?: number;
  maximum?: number;
  maxLength?: number;        // for VARCHAR/CHAR types
  minLength?: number;        // usually 1 if required string
  isPrimaryKey?: boolean;    // true if PRIMARY KEY
  isAuditField?: boolean;    // true if created_at / updated_at
  enumValues?: string[]; // ✅ new field
}

interface Table {
  name: string;
  columns: Column[];
}

// Parse SQL file (very simplified)
function parseEnumTypes(sql: string): Map<string, string[]> {
  const enumTypes = new Map<string, string[]>();
  const enumRegex = /CREATE\s+TYPE\s+(?:IF\s+NOT\s+EXISTS\s+)?((?:"[^"]+"|[\w$]+)(?:\s*\.\s*(?:"[^"]+"|[\w$]+))?)\s+AS\s+ENUM\s*\(([^)]*)\)\s*;/gi;
  let match: RegExpExecArray | null;
  while ((match = enumRegex.exec(sql)) !== null) {
    const typeName = match[1].split('.').pop()!.replace(/["\s]/g, '').toLowerCase();
    const values = [...match[2].matchAll(/'((?:''|[^'])*)'/g)].map(value => value[1].replace(/''/g, "'"));
    enumTypes.set(typeName, values);
  }
  return enumTypes;
}

function parseSqlType(rest: string): string {
  const base = rest.match(/^(?:[\w$]+\.)?[\w$]+/i)?.[0] ?? 'text';
  const tail = rest.slice(base.length);
  let type = base;
  const lower = base.toLowerCase();

  if (lower === 'character' && /^\s+varying\b/i.test(tail)) type += tail.match(/^\s+varying/i)?.[0] ?? '';
  else if ((lower === 'timestamp' || lower === 'time') && /^\s+(?:with|without)\s+time\s+zone\b/i.test(tail)) {
    type += tail.match(/^\s+(?:with|without)\s+time\s+zone/i)?.[0] ?? '';
  } else if (lower === 'double' && /^\s+precision\b/i.test(tail)) type += tail.match(/^\s+precision/i)?.[0] ?? '';

  const modifier = rest.slice(type.length).match(/^\s*\([^)]*\)/)?.[0];
  return `${type}${modifier ?? ''}`.trim();
}

function parseSQL(sql: string, knownEnumTypes = new Map<string, string[]>()): Table[] {
  const enumTypes = new Map([...parseEnumTypes(sql), ...knownEnumTypes]);
  const tables: Table[] = [];
  const regex = /CREATE TABLE\s+(?:IF NOT EXISTS\s+)?(?:"([^"]+)"|`([^`]+)`|(\w+))\s*\(([\s\S]+?)\);/gi;
  let match;
  while ((match = regex.exec(sql)) !== null) {
    const tableName = match[1] ?? match[2] ?? match[3];
    const body = match[4];

    // Split top-level by commas, but not inside parentheses
    const parts: string[] = [];
    let depth = 0, current = '';
    let quote: string | null = null;
    for (let index = 0; index < body.length; index += 1) {
      const ch = body[index];
      const next = body[index + 1];

      if (quote) {
        current += ch;
        if (ch === quote && next === quote) {
          current += next;
          index += 1;
        } else if (ch === quote) {
          quote = null;
        } else if (ch === '\\' && next && quote === "'") {
          current += next;
          index += 1;
        }
        continue;
      }

      if (ch === "'" || ch === '"' || ch === '`') {
        quote = ch;
        current += ch;
      } else if (ch === '(') {
        depth++;
        current += ch;
      } else if (ch === ')') {
        depth--;
        current += ch;
      } else if (ch === ',' && depth === 0) {
        parts.push(current.trim());
        current = '';
      } else {
        current += ch;
      }
    }
    if (current.trim()) parts.push(current.trim());

    const columns: Column[] = parts
      .filter(c =>
        !/^constraint/i.test(c) &&
        !/^primary key/i.test(c) &&
        !/^unique/i.test(c)
      )
      .map(c => {
        const columnMatch = c.trim().match(/^(?:"([^"]+)"|`([^`]+)`|([\w$]+))\s+([\s\S]+)$/);
        if (!columnMatch) return null;
        const name = columnMatch[1] ?? columnMatch[2] ?? columnMatch[3];
        const rest = columnMatch[4].trim();
        const type = parseSqlType(rest);
        const required = /\bNOT\s+NULL\b/i.test(rest) || /\bPRIMARY\s+KEY\b/i.test(rest);
        const defaultMatch = rest.match(/\bDEFAULT\s+([\s\S]*?)(?=\s+(?:NOT\s+NULL|NULL|PRIMARY\s+KEY|UNIQUE|REFERENCES|CHECK|CONSTRAINT|COLLATE|GENERATED)\b|$)/i);
        const defaultValue = defaultMatch?.[1]?.trim();
        const isGenerated = /\b(?:GENERATED\s+(?:ALWAYS|BY\s+DEFAULT)\s+AS\s+IDENTITY|SERIAL\b|IDENTITY\b)/i.test(rest) || /(?:gen_random_uuid|uuid_generate_v4|fn_next_record_code)/i.test(defaultValue ?? '');

        let maxLength: number | undefined;
        const lengthMatch = type.match(/\((\d+)\)/);
        if (/^(?:character varying|varchar|character|char)\b/i.test(type) && lengthMatch) maxLength = Number(lengthMatch[1]);

        let enumValues: string[] | undefined;
        const enumTypeName = type.split('.').pop()?.replace(/["`]/g, '').toLowerCase();
        if (enumTypeName) enumValues = enumTypes.get(enumTypeName);
        const checkMatch = rest.match(/\bcheck\s*\(\s*["`]?\w+["`]?\s+in\s*\(([^)]+)\)\s*\)/i);
        if (!enumValues && checkMatch) {
          enumValues = [...checkMatch[1].matchAll(/'((?:''|[^'])*)'/g)]
            .map(match => match[1].replace(/''/g, "'"));
        }

        const rangeMatch = rest.match(/\bcheck\s*\(\s*["`]?\w+["`]?\s+between\s+(-?\d+(?:\.\d+)?)\s+and\s+(-?\d+(?:\.\d+)?)\s*\)/i);
        const isPrimaryKey = /\bprimary\s+key\b/i.test(rest);
        const isUnique = /\bunique\b/i.test(rest);
        const isAuditField = /^(?:created_at|updated_at|deleted_at|created_by|updated_by)$/i.test(name);

        return {
          name, type, required, defaultValue, maxLength, isPrimaryKey, isUnique, isGenerated,
          nullable: !required, isAuditField, enumValues,
          minimum: rangeMatch ? Number(rangeMatch[1]) : undefined,
          maximum: rangeMatch ? Number(rangeMatch[2]) : undefined,
        };
      }).filter((column): column is Column => column !== null);

    // A table-level CHECK can constrain a column just like an inline CHECK.
    for (const part of parts) {
      const primaryKey = part.match(/^\s*(?:constraint\s+["`\w]+\s+)?primary\s+key\s*\(([^)]+)\)/i);
      if (primaryKey) {
        for (const keyName of primaryKey[1].split(',').map(value => value.trim().replace(/["`]/g, ''))) {
          const column = columns.find(item => item.name === keyName);
          if (column) {
            column.isPrimaryKey = true;
            column.required = true;
            column.nullable = false;
          }
        }
      }
      const rangeCheck = part.match(/\bcheck\s*\(\s*["`]?([\w$]+)["`]?(?:\s+between\s+(-?\d+(?:\.\d+)?)\s+and\s+(-?\d+(?:\.\d+)?))\s*\)/i);
      if (!rangeCheck) continue;
      const column = columns.find(item => item.name === rangeCheck[1]);
      if (column && rangeCheck[2] !== undefined) {
        column.minimum = Number(rangeCheck[2]);
        column.maximum = Number(rangeCheck[3]);
      }
    }

    tables.push({ name: tableName, columns });
  }
  return tables;
}

function toPascalCase(str: string): string {
  return str
    .replace(/[_\s]+(.)?/g, (_, c) => (c ? c.toUpperCase() : '')) // handle underscores/spaces
    .replace(/^(.)/, (_, c) => c.toUpperCase()); // capitalize first letter
}

function generateSchemas(table: Table, moduleName: string): string {
  const requestSchemaName = `${toPascalCase(moduleName)}Request`;
  const responseSchemaName = `${toPascalCase(moduleName)}Response`;

  const requestProps = table.columns
    .filter(c => !c.isPrimaryKey && !c.isAuditField && !c.isGenerated)
    .map(col => columnToOpenAPI(col))
    .join('\n');

  const responseProps = table.columns
    .map(col => columnToOpenAPI(col))
    .join('\n');

  const createRequired = table.columns
    .filter(c => !c.isPrimaryKey && !c.isAuditField && !c.isGenerated && !c.defaultValue && c.required)
    .map(c => `        - ${c.name}`).join('\n');
  const updateRequired = table.columns
    .filter(c => !c.isPrimaryKey && !c.isAuditField && !c.isGenerated)
    .map(c => `        - ${c.name}`).join('\n');
  const responseRequired = table.columns
    .filter(c => c.required)
    .map(c => `        - ${c.name}`).join('\n');

  return `
    ${requestSchemaName}:
      type: object
${createRequired ? `      required:\n${createRequired}\n` : ''}      additionalProperties: false
      properties:
${requestProps}

    ${toPascalCase(moduleName)}UpdateRequest:
      type: object
${updateRequired ? `      required:\n${updateRequired}\n` : ''}      additionalProperties: false
      properties:
${table.columns.filter(c => !c.isPrimaryKey && !c.isAuditField && !c.isGenerated).map(col => columnToOpenAPI(col)).join('\n')}

    ${responseSchemaName}:
      type: object
${responseRequired ? `      required:\n${responseRequired}\n` : ''}      additionalProperties: false
      properties:
${responseProps}
  `;
}

function sanitizeColumnName(name: string): string {
  return name
    .replace(/['"`]/g, '')   // remove quotes
    .replace(/[()]/g, '')    // remove parentheses
    .trim();
}

function openApiDefault(raw?: string): string | undefined {
  if (!raw) return undefined;
  const value = raw.trim();
  if (/^(?:now\s*\(\)|current_timestamp\b|gen_random_uuid\s*\()/i.test(value)) return undefined;
  if (/^(?:true|false)$/i.test(value) || /^-?\d+(?:\.\d+)?$/.test(value)) return value.toLowerCase();
  const quoted = value.match(/^'((?:''|[^'])*)'(?:\s*::\s*[\w. ]+)?$/s);
  if (quoted) return JSON.stringify(quoted[1].replace(/''/g, "'"));
  return undefined;
}

function columnToOpenAPI(col: Column): string {
  if (!col || !col.type) return '';

  const openapiType = pgTypeToOpenAPI(col.type);
  const cleanName = col.name.replace(/['"`()]/g, '').trim();

  const lines = [
    `        ${cleanName}:`,
    ...(openapiType.type ? [`          type: ${openapiType.type}`] : [])
  ];
  if (openapiType.format) lines.push(`          format: ${openapiType.format}`);
  if (col.nullable) lines.push('          nullable: true');
  if (col.maxLength) lines.push(`          maxLength: ${col.maxLength}`);
  if (col.minimum !== undefined) lines.push(`          minimum: ${col.minimum}`);
  if (col.maximum !== undefined) lines.push(`          maximum: ${col.maximum}`);
  const defaultValue = openApiDefault(col.defaultValue);
  if (defaultValue && !col.isPrimaryKey && !col.isGenerated) lines.push(`          default: ${defaultValue}`);
  if (col.isPrimaryKey || col.isGenerated || col.isAuditField) lines.push('          readOnly: true');
  if (col.enumValues?.length) {
    lines.push('          enum:');
    col.enumValues.forEach(value => lines.push(`            - ${JSON.stringify(value)}`));
  }
  return lines.join('\n');
}



function generateTableOpenAPI(table: Table, moduleName: string): string {
  const schemaName = `${toPascalCase(moduleName)}Response`;
  const schemas = generateSchemas(table, moduleName);
  const primaryKeyName = getPrimaryKey(table).name;

  return `openapi: 3.0.0
x-sql-table: ${table.name}
info:
  title: ${schemaName} API
  version: 1.0.0
paths:
  /${moduleName}:
    get:
      operationId: ${buildOperationId(moduleName, 'get', `/${moduleName}`)}
      summary: Get all ${moduleName}
      responses:
        '200':
          description: List of ${moduleName}
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/${toPascalCase(moduleName)}Response'
    post:
      operationId: ${buildOperationId(moduleName, 'post', `/${moduleName}`)}
      summary: Create a new ${moduleName}
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/${toPascalCase(moduleName)}Request'
      responses:
        '201':
          description: Created
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/${toPascalCase(moduleName)}Response'
        '400':
          description: Invalid request
        '409':
          description: Unique constraint conflict

  /${moduleName}/{${primaryKeyName}}:
    get:
      operationId: ${buildOperationId(moduleName, 'get', `/${moduleName}/{${primaryKeyName}}`)}
      summary: Get ${moduleName} by ${primaryKeyName}
      parameters:
        - in: path
          name: ${primaryKeyName}
          required: true
          schema:
${pathParameterSchema(table)}
      responses:
        '200':
          description: ${moduleName} object
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/${toPascalCase(moduleName)}Response'
        '404':
          description: ${moduleName} not found
    put:
      operationId: ${buildOperationId(moduleName, 'put', `/${moduleName}/{${primaryKeyName}}`)}
      summary: Update ${moduleName} by ${primaryKeyName}
      parameters:
        - in: path
          name: ${primaryKeyName}
          required: true
          schema:
${pathParameterSchema(table)}
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/${toPascalCase(moduleName)}UpdateRequest'
      responses:
        '200':
          description: Updated
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/${toPascalCase(moduleName)}Response'
        '400':
          description: Invalid request
        '404':
          description: ${moduleName} not found
        '409':
          description: Unique constraint conflict
    delete:
      operationId: ${buildOperationId(moduleName, 'delete', `/${moduleName}/{${primaryKeyName}}`)}
      summary: Delete ${moduleName} by ${primaryKeyName}
      parameters:
        - in: path
          name: ${primaryKeyName}
          required: true
          schema:
${pathParameterSchema(table)}
      responses:
        '204':
          description: Deleted
        '404':
          description: ${moduleName} not found
components:
  schemas:
${schemas}
`;
}


function buildOperationId(tableName: string, method: string, pathKey: string): string {
  const pascal = toPascalCase(tableName);

  switch (method.toLowerCase()) {
    case 'get':
      if (/\{[^}]+\}/.test(pathKey)) return `get${pascal}ById`;
      return `list${pascal}`;
    case 'post':
      return `create${pascal}`;
    case 'put':
    case 'patch':
      return `update${pascal}`;
    case 'delete':
      return `delete${pascal}`;
    default:
      return `${method}${pascal}`;
  }
}

function moduleNameFromTable(tableName: string, serviceName: string): string {
  const servicePrefix = serviceName.split(/[\\/]/).filter(Boolean).at(-1)?.toLowerCase()
  if (!servicePrefix) return tableName

  const prefix = `${servicePrefix}_`
  const normalizedTableName = tableName.toLowerCase()
  if (normalizedTableName.startsWith(prefix)) return tableName.slice(prefix.length)

  // Some SQL modules use an abbreviated table prefix (e.g. acad_* in the
  // academic module). When it differs from the service name, strip that first
  // segment only when it shares the service name's initial.
  const separatorIndex = tableName.indexOf('_')
  if (separatorIndex > 0 && normalizedTableName[0] === servicePrefix[0]) {
    return tableName.slice(separatorIndex + 1)
  }

  return tableName
}


function pgTypeToOpenAPI(pgType: string): { type: string; format?: string } {
  const t = pgType.toLowerCase();
  if (t === 'uuid') return { type: 'string', format: 'uuid' };
  if (t.includes('bigint') || t.includes('bigserial')) return { type: 'integer', format: 'int64' };
  if (t.includes('smallint') || t.includes('integer') || t === 'int' || t.includes('serial')) return { type: 'integer', format: 'int32' };
  if (t.includes('char') || t.includes('text') || t.includes('varchar') || t.includes('email') || t.includes('phone')) return { type: 'string' };
  if (t.includes('bool')) return { type: 'boolean' };
  if (t.includes('jsonb') || t.includes('json')) return { type: '' };
  if (t.includes('timestamp')) return { type: 'string', format: 'date-time' };
  if (t === 'date') return { type: 'string', format: 'date' };
  if (t.startsWith('time')) return { type: 'string', format: 'time' };
  if (t.includes('numeric') || t.includes('decimal')) return { type: 'number', format: 'double' };
  if (t.includes('float') || t.includes('double') || t === 'real') return { type: 'number', format: 'double' };
  return { type: 'string' };
}

function pathParameterSchema(table: Table): string {
  const key = getPrimaryKey(table);
  const mapped = pgTypeToOpenAPI(key.type);
  return [`            type: ${mapped.type || 'object'}`, ...(mapped.format ? [`            format: ${mapped.format}`] : [])].join('\n');
}

function getPrimaryKey(table: Table): Column {
  const primaryKey = table.columns.find(column => column.isPrimaryKey);
  if (!primaryKey) throw new Error(`Table "${table.name}" does not declare a primary key`);
  return primaryKey;
}

const args = process.argv.slice(2);
let sqlFile: string | undefined;
let enumsFile: string | undefined;
let outDir: string | undefined;
let service: string | undefined;
let onlyTable: string | undefined;

for (let i = 0; i < args.length; i++) {
  if (args[i] === '--sql') sqlFile = args[++i];
  else if (args[i] === '--enums') enumsFile = args[++i];
  else if (args[i] === '--service') service = args[++i];
  else if (args[i] === '--out') outDir = args[++i];
  else if (args[i] === '--table') onlyTable = args[++i];
  else if (args[i] === '--help' || args[i] === '-h') {
    console.log('Usage: npm run openapi:sql -- --sql <schema.sql> --service <service-name> --out <service-dir> [--enums <enums.sql>] [--table <table-name>]');
    process.exit(0);
  } else {
    console.error(`Unknown option: ${args[i]}`);
    process.exit(1);
  }
}

if (!sqlFile || !outDir || !service) {
  console.error('Usage: npm run openapi:sql -- --sql <schema.sql> --service <service-name> --out <service-dir> [--enums <enums.sql>] [--table <table-name>]');
  process.exit(1);
}

const resolvedSqlFile = path.resolve(sqlFile!);
const sql = fs.readFileSync(resolvedSqlFile, 'utf-8');
// Enum declarations are commonly kept in infra/enums.sql beside the schema file.
const companionEnumsFile = enumsFile
  ? path.resolve(enumsFile)
  : path.join(path.dirname(resolvedSqlFile), 'enums.sql');
const enumSql = fs.existsSync(companionEnumsFile) ? fs.readFileSync(companionEnumsFile, 'utf-8') : '';
const parsedTables = parseSQL(sql, parseEnumTypes(enumSql));
const tables = onlyTable
  ? parsedTables.filter(table => table.name.toLowerCase() === onlyTable!.toLowerCase())
  : parsedTables;
if (tables.length === 0) {
  throw new Error(onlyTable
    ? `Table "${onlyTable}" was not found in ${resolvedSqlFile}`
    : `No CREATE TABLE statements found in ${resolvedSqlFile}`);
}
const serviceModulesDir = path.join(outDir, 'src', 'services', service)
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true })
}
if (!fs.existsSync(serviceModulesDir)) {
  fs.mkdirSync(serviceModulesDir, { recursive: true })
}
for (const table of tables) {
  const moduleName = moduleNameFromTable(table.name, service);
  const yaml = generateTableOpenAPI(table, moduleName);

  const moduleDir = path.join(serviceModulesDir, moduleName)
  if (!fs.existsSync(moduleDir)) {
    fs.mkdirSync(moduleDir, { recursive: true })
  }
  const openapiDir = path.join(moduleDir, 'api')
  if (!fs.existsSync(openapiDir)) {
    fs.mkdirSync(openapiDir, { recursive: true })
  }
  const filePath = path.join(openapiDir, `${moduleName}.openapi.yaml`);
  fs.writeFileSync(filePath, yaml);
  console.log(`✅ Generated ${filePath}`);
}
