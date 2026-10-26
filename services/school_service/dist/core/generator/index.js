"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sql_reader_1 = require("./sql-reader");
const entity_generator_1 = require("./entity-generator");
const args = process.argv.slice(2);
if (args.length < 1) {
    console.error('Usage: mysql-to-sequelize <schema.sql> [schemaName]');
    process.exit(1);
}
const sqlFile = args[0];
const schema = args[1] || 'public';
const sql = (0, sql_reader_1.readSQLFile)(sqlFile);
const tables = (0, sql_reader_1.parseTables)(sql);
tables.forEach(({ tableName, columns, foreignKeys, indexes }) => {
    (0, entity_generator_1.generateEntity)(schema, tableName, columns, foreignKeys, indexes);
});
console.log(`✅ Sequelize entities generated in ./src/entities for schema "${schema}"`);
