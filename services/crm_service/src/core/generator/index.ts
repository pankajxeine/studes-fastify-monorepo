
import { readSQLFile, parseTables } from './sql-reader';
import { generateEntity } from './entity-generator';

const args = process.argv.slice(2);

if (args.length < 1) {
  console.error('Usage: mysql-to-sequelize <schema.sql> [schemaName]');
  process.exit(1);
}

const sqlFile = args[0];
const schema = args[1] || 'public';

const sql = readSQLFile(sqlFile);
const tables = parseTables(sql);

tables.forEach(({ tableName, columns, foreignKeys, indexes }) => {
  generateEntity(schema, tableName, columns, foreignKeys, indexes);
});

console.log(`✅ Sequelize entities generated in ./src/entities for schema "${schema}"`);
