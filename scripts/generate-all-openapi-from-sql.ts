import fs from 'node:fs'
import path from 'node:path'
import { execFileSync } from 'node:child_process'

type Options = {
  service: string
  enumsFile?: string
}

function usage(): never {
  console.log(`Usage:
  npm run openapi:sql:all -- [options]

Options:
  --service <name>  Service directory under services/ (default: school_service)
  --enums <file>    Optional shared SQL file containing enum declarations
  --help, -h        Show this help

Example:
  npm run openapi:sql:all -- --service school_service
`)
  process.exit(0)
}

function parseArgs(argv: string[]): Options {
  const options: Options = { service: 'school_service' }

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index]
    if (arg === '--service') options.service = argv[++index] ?? ''
    else if (arg === '--enums') options.enumsFile = argv[++index]
    else if (arg === '--help' || arg === '-h') usage()
    else throw new Error(`Unknown option: ${arg}`)
  }

  if (!options.service) throw new Error('--service requires a service directory name')
  if (path.basename(options.service) !== options.service) {
    throw new Error('--service must be a directory name under services/')
  }

  return options
}

function main() {
  const options = parseArgs(process.argv.slice(2))
  const serviceDir = path.resolve(process.cwd(), 'services', options.service)
  const modulesDir = path.join(serviceDir, 'sql', 'modules')
  const generatorPath = path.resolve(process.cwd(), 'scripts', 'sql-openapi-generator.ts')
  const tsxCliPath = path.resolve(process.cwd(), 'node_modules', 'tsx', 'dist', 'cli.mjs')

  if (!fs.existsSync(modulesDir)) throw new Error(`SQL modules directory not found: ${modulesDir}`)
  if (!fs.existsSync(generatorPath)) throw new Error(`SQL OpenAPI generator not found: ${generatorPath}`)
  if (!fs.existsSync(tsxCliPath)) throw new Error(`tsx CLI not found: ${tsxCliPath}`)
  if (options.enumsFile && !fs.existsSync(path.resolve(process.cwd(), options.enumsFile))) {
    throw new Error(`Enum SQL file not found: ${options.enumsFile}`)
  }

  const sqlFiles = fs.readdirSync(modulesDir)
    .filter((file) => file.toLowerCase().endsWith('.sql'))
    .sort((a, b) => a.localeCompare(b))
    .map((file) => path.join(modulesDir, file))
    .filter((file) => /\bcreate\s+table\b/i.test(fs.readFileSync(file, 'utf8')))

  if (sqlFiles.length === 0) throw new Error(`No SQL modules containing CREATE TABLE found in ${modulesDir}`)

  console.log(`Generating OpenAPI YAML for ${sqlFiles.length} SQL modules in ${options.service}`)

  for (const sqlFile of sqlFiles) {
    const serviceName = path.basename(sqlFile, path.extname(sqlFile))
    const args = [
      generatorPath,
      '--sql', sqlFile,
      '--service', serviceName,
      '--out', serviceDir,
    ]
    if (options.enumsFile) args.push('--enums', path.resolve(process.cwd(), options.enumsFile))

    console.log(`\n[${serviceName}]`)
    execFileSync(process.execPath, [tsxCliPath, ...args], { stdio: 'inherit' })
  }
}

try {
  main()
} catch (error) {
  console.error(error instanceof Error ? error.message : error)
  process.exitCode = 1
}
