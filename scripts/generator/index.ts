import { readSQLFile, parseTables } from './sql-reader';
import { generateEntity } from './entity-generator';
import path from 'path';

const options = {
  sqlFile: process.argv[2] || './schema.sql',
  outDir: process.argv[3] || path.resolve(__dirname, 'entities'),
  schemaName: process.argv[4] || 'public'
};

const sql = readSQLFile(options.sqlFile);
const tables = parseTables(sql);

const generatedFiles: string[] = [];

tables.forEach(({ tableName, columns, foreignKeys, indexes }) => {
  const filePath = generateEntity(options.schemaName, tableName, columns, foreignKeys, indexes, options.outDir);
  generatedFiles.push(filePath);
});

// ✅ Print summary
console.log(`\n✅ Sequelize entities generated for schema "${options.schemaName}"`);
console.log(`📂 Output directory: ${options.outDir}`);
console.log(`📝 Files created:`);
generatedFiles.forEach(f => console.log(`   - ${f}`));
