# Generator CLI reference

Run these commands from the repository root after installing dependencies with `npm install`.

## Generate Fastify code from OpenAPI files

Command: `npm run openapi:gen -- [options]`

With no options, the generator scans `services/*` and processes every OpenAPI file it finds in each service's `openapi`, `api`, or `src/services` directory tree.

| Option | Purpose |
| --- | --- |
| `--out <service-dir>` | Limit generation to one service directory, such as `services/school_service`. |
| `--module <name>` | Within `--out`, generate only the module whose spec filename or path matches the name. |
| `--spec-dir <dir>` | Within `--out`, discover specs only inside this directory and its subdirectories. |
| `--skip-service` | Generate types, controllers, and routes without writing service implementation files. |
| `--routes-only` | Generate router files and the root route index without rewriting types, controllers, or services. |
| `--dry-run` | List matched spec files without writing generated files. |
| `--help`, `-h` | Print usage and options. |

Use `--module` or `--spec-dir` with `--out`. These two scope options cannot be combined.

Examples:

```bash
# Generate from every service's OpenAPI specs
npm run openapi:gen:all

# openapi:gen is also global by default
npm run openapi:gen

# Generate all specs for one service
npm run openapi:gen -- --out services/school_service

# Generate only org_building within school_service
npm run openapi:gen -- --out services/school_service --module org_building

# Generate only specs found in one API folder
npm run openapi:gen -- --out services/school_service --spec-dir services/school_service/src/services/org/org_building/api

# Preview the specs selected by a module filter
npm run openapi:gen -- --out services/school_service --module org_building --dry-run

# Generate a selected module without service implementation files
npm run openapi:gen -- --out services/school_service --module org_building --skip-service

# Refresh every router and the root route index for one service only
npm run openapi:gen -- --out services/school_service --routes-only

# Print the full option list
npm run openapi:gen -- --help
```

The generator writes TypeScript types, controllers, route handlers, and (unless `--skip-service` is set) service implementation files beside the matching specs. Routers follow the service grouping, for example `src/services/org/org_building` maps to `src/routes/org/org_building.router.ts`. It updates the root `src/routes/index.ts`; a scoped run keeps registrations for existing router files. Use `--routes-only` to refresh routes without rewriting the other generated files.

## Generate OpenAPI YAML from SQL

Command: `npm run openapi:sql -- [options]`

To generate YAML for every table module in a service's `sql/modules` directory, use `npm run openapi:sql:all`. It skips SQL files without `CREATE TABLE` statements. The default service is `school_service`.

| Option | Purpose |
| --- | --- |
| `--sql <file>` | Required SQL schema file. |
| `--service <name>` | Required service group under `src/services`. |
| `--out <service-dir>` | Required service root directory. |
| `--enums <file>` | Optional SQL file containing enum definitions. Defaults to `enums.sql` beside the schema file when present. |
| `--table <name>` | Generate only the named table. Without it, generate specs for every parsed table. |
| `--help`, `-h` | Print usage and options. |

Examples:

```bash
# Generate specs for all tables in the organization SQL module
npm run openapi:sql -- --sql services/school_service/sql/modules/org.sql --service org --out services/school_service

# Generate specs for every table module in school_service/sql/modules
npm run openapi:sql:all -- --service school_service

# Regenerate only org_building
npm run openapi:sql -- --sql services/school_service/sql/modules/org.sql --service org --out services/school_service --table org_building

# Supply enum definitions from a separate file
npm run openapi:sql -- --sql path/to/schema.sql --enums path/to/enums.sql --service org --out services/school_service

# Print usage
npm run openapi:sql -- --help
```

Generated files are written under `<service-dir>/src/services/<service>/<table>/api/<table>.openapi.yaml`.

## Generate Sequelize entities from SQL

Command: `npm run entities:gen -- [options]`

| Option | Purpose |
| --- | --- |
| `--sql <file>` | Required SQL schema file to parse. |
| `--out <dir>` | Required directory where entity folders and index files are generated. |
| `--schema <name>` | Optional Sequelize schema name added to generated models. |
| `--dry-run` | Parse the SQL and list tables without writing files. |
| `--help`, `-h` | Print usage and options. |

Examples:

```bash
# crate all sql modules entity
npm run entities:gen:all -- --service school_service
# Preview table discovery
npm run entities:gen -- --sql services/school_service/sql/modules/org.sql --out services/school_service/src/entities --dry-run

# Generate entities for the SQL schema
npm run entities:gen -- --sql services/school_service/sql/modules/org.sql --out services/school_service/src/entities

# Generate models that use a named PostgreSQL schema
npm run entities:gen -- --sql path/to/schema.sql --out services/example/src/entities --schema public

# Print usage
npm run entities:gen -- --help
```

