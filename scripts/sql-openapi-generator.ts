import fs from 'node:fs'
import path from 'node:path'

export interface Column {
    name: string;              // column name
    type: string;              // raw SQL type (e.g. VARCHAR(255), JSONB, TIMESTAMP)
    required: boolean;         // true if NOT NULL
    defaultValue?: string;     // default value if present
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
function parseSQL(sql: string): Table[] {
    const tables: Table[] = [];
    const regex = /CREATE TABLE (\w+)\s*\(([\s\S]+?)\);/gi; // allow multiline
    let match;
    while ((match = regex.exec(sql)) !== null) {
        const [, tableName, body] = match;

        // Split top-level by commas, but not inside parentheses
        const parts: string[] = [];
        let depth = 0, current = '';
        for (const ch of body) {
            if (ch === '(') depth++;
            if (ch === ')') depth--;
            if (ch === ',' && depth === 0) {
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
                const tokens = c.trim().split(/\s+/);
                const name = tokens[0].replace(/["`]/g, '');
                const type = tokens[1];
                const required = /\bNOT NULL\b/i.test(c);

                const defaultMatch = c.match(/default\s+(['"]?[^,\s'"]+['"]?)/i);
                const defaultValue = defaultMatch ? defaultMatch[1].replace(/['"]/g, '') : undefined;

                let maxLength: number | undefined;
                const varcharMatch = type?.match(/varchar\((\d+)\)/i);
                if (varcharMatch) maxLength = parseInt(varcharMatch[1], 10);

                let enumValues: string[] | undefined;
                const checkMatch = c.match(/check\s*\(\s*\w+\s+in\s*\(([^)]+)\)\)/i);
                if (checkMatch) {
                    enumValues = checkMatch[1]
                        .split(',')
                        .map(v => v.trim().replace(/['"]/g, ''));
                }

                const isPrimaryKey = /\bprimary key\b/i.test(c);
                const isAuditField = ['created_at', 'updated_at'].includes(name);

                return { name, type, required, defaultValue, maxLength, isPrimaryKey, isAuditField, enumValues };
            });

        tables.push({ name: tableName, columns });
    }
    return tables;
}

function toPascalCase(str: string): string {
    return str
        .replace(/[_\s]+(.)?/g, (_, c) => (c ? c.toUpperCase() : '')) // handle underscores/spaces
        .replace(/^(.)/, (_, c) => c.toUpperCase()); // capitalize first letter
}

function generateSchemas(table: Table): string {
    const requestSchemaName = `${toPascalCase(table.name)}Request`;
    const responseSchemaName = `${toPascalCase(table.name)}Response`;

    const requestProps = table.columns
        .filter(c => !c.isPrimaryKey && !c.isAuditField)
        .map(col => columnToOpenAPI(col))
        .join('\n');

    const responseProps = table.columns
        .map(col => columnToOpenAPI(col))
        .join('\n');

    return `
    ${requestSchemaName}:
      type: object
      properties:
${requestProps}

    ${responseSchemaName}:
      type: object
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

function columnToOpenAPI(col: Column): string {
    if (!col || !col.type) return '';

    const openapiType = pgTypeToOpenAPI(col.type);
    const cleanName = col.name.replace(/['"`()]/g, '').trim();

    const lines = [
        `        ${cleanName}:`,
        `          type: ${openapiType.type}`
    ];
    if (openapiType.format) lines.push(`          format: ${openapiType.format}`);
    if (col.maxLength) lines.push(`          maxLength: ${col.maxLength}`);
    return lines.join('\n');
}



function generateTableOpenAPI(table: Table): string {
    const schemaName = `${toPascalCase(table.name)}Response`;
    const schemas = generateSchemas(table);

    return `openapi: 3.0.0
info:
  title: ${schemaName} API
  version: 1.0.0
paths:
  /${table.name}:
    get:
      operationId: ${buildOperationId(table.name, 'get', `/${table.name}`)}
      summary: Get all ${table.name}
      responses:
        '200':
          description: List of ${table.name}
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/${toPascalCase(table.name)}Response'
    post:
      operationId: ${buildOperationId(table.name, 'post', `/${table.name}`)}
      summary: Create a new ${table.name}
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/${toPascalCase(table.name)}Request'
      responses:
        '201':
          description: Created
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/${toPascalCase(table.name)}Response'

  /${table.name}/{id}:
    get:
      operationId: ${buildOperationId(table.name, 'get', `/${table.name}/{id}`)}
      summary: Get ${table.name} by ID
      parameters:
        - in: path
          name: id
          required: true
          schema:
            type: integer
      responses:
        '200':
          description: ${table.name} object
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/${toPascalCase(table.name)}Response'
    put:
      operationId: ${buildOperationId(table.name, 'put', `/${table.name}/{id}`)}
      summary: Update ${table.name} by ID
      parameters:
        - in: path
          name: id
          required: true
          schema:
            type: integer
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/${toPascalCase(table.name)}Request'
      responses:
        '200':
          description: Updated
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/${toPascalCase(table.name)}Response'
    delete:
      operationId: ${buildOperationId(table.name, 'delete', `/${table.name}/{id}`)}
      summary: Delete ${table.name} by ID
      parameters:
        - in: path
          name: id
          required: true
          schema:
            type: integer
      responses:
        '204':
          description: Deleted
components:
  schemas:
${schemas}
`;
}


function buildOperationId(tableName: string, method: string, pathKey: string): string {
    const pascal = toPascalCase(tableName);
    const singular = tableName.endsWith('s') ? tableName.slice(0, -1) : tableName;

    switch (method.toLowerCase()) {
        case 'get':
            if (pathKey.includes('{id}')) return `get${pascal}ById`;
            return `list${pascal}`;
        case 'post':
            return `create${toPascalCase(singular)}`;
        case 'put':
        case 'patch':
            return `update${toPascalCase(singular)}`;
        case 'delete':
            return `delete${toPascalCase(singular)}`;
        default:
            return `${method}${pascal}`;
    }
}


function pgTypeToOpenAPI(pgType: string): { type: string; format?: string } {
    const t = pgType.toLowerCase();
    if (t.includes('int')) return { type: 'integer' };
    if (t.includes('serial')) return { type: 'integer' };
    if (t.includes('char') || t.includes('text') || t.includes('varchar')) return { type: 'string' };
    if (t.includes('bool')) return { type: 'boolean' };
    if (t.includes('jsonb') || t.includes('json')) return { type: 'object' };
    if (t.includes('timestamp')) return { type: 'string', format: 'date-time' };
    if (t === 'date') return { type: 'string', format: 'date' };
    if (t === 'time') return { type: 'string', format: 'time' };
    if (t.includes('numeric') || t.includes('decimal') || t.includes('float') || t.includes('double')) return { type: 'number' };
    return { type: 'string' };
}

const args = process.argv.slice(2);
let sqlFile: string | undefined;
let outDir: string | undefined;
let service: string | undefined;

for (let i = 0; i < args.length; i++) {
    if (args[i] === '--sql') sqlFile = args[i + 1];
    if (args[i] === '--service') service = args[i + 1];
    if (args[i] === '--out') outDir = args[i + 1];
}

if (!sqlFile && !outDir && !service) {
    console.error('Usage: npm run generate -- --sql schema.sql --service ./openapi');
    process.exit(1);
}

const sql = fs.readFileSync(path.resolve(sqlFile), 'utf-8');
const tables = parseSQL(sql);
const serviceModulesDir = path.join(outDir, 'src', 'services', service)
if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true })
}
if (!fs.existsSync(serviceModulesDir)) {
    fs.mkdirSync(serviceModulesDir, { recursive: true })
}
for (const table of tables) {
    const yaml = generateTableOpenAPI(table);

    const moduleDir = path.join(serviceModulesDir, table.name)
    if (!fs.existsSync(moduleDir)) {
        fs.mkdirSync(moduleDir, { recursive: true })
    }
    const openapiDir = path.join(moduleDir, 'api')
    if (!fs.existsSync(openapiDir)) {
        fs.mkdirSync(openapiDir, { recursive: true })
    }
    const filePath = path.join(openapiDir, `${table.name}.openapi.yaml`);
    fs.writeFileSync(filePath, yaml);
    console.log(`✅ Generated ${filePath}`);
}