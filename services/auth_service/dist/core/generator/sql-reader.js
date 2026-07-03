"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.readSQLFile = readSQLFile;
exports.parseTables = parseTables;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
function readSQLFile(filePath) {
    const absolutePath = path_1.default.resolve(filePath);
    return fs_1.default.readFileSync(absolutePath, 'utf-8');
}
function parseTables(sql) {
    const tableRegex = /CREATE TABLE\s+`?(\w+)`?\s*\(([^;]+)\)/gi;
    const tables = [];
    let match;
    while ((match = tableRegex.exec(sql)) !== null) {
        const [, tableName, cols] = match;
        // detect primary key constraint
        const pkRegex = /PRIMARY KEY\s*\(([^)]+)\)/i;
        const pkMatch = pkRegex.exec(cols);
        const pkCols = pkMatch ? pkMatch[1].split(',').map(c => c.replace(/`/g, '').trim()) : [];
        // detect foreign keys with actions
        const fkRegex = /FOREIGN KEY\s*\(`?(\w+)`?\)\s+REFERENCES\s+`?(\w+)`?\s*\(`?(\w+)`?\)([^,)]*)/gi;
        const foreignKeys = [];
        let fkMatch;
        while ((fkMatch = fkRegex.exec(cols)) !== null) {
            const actions = fkMatch[4] || '';
            const onDeleteMatch = /ON DELETE (\w+)/i.exec(actions);
            const onUpdateMatch = /ON UPDATE (\w+)/i.exec(actions);
            foreignKeys.push({
                column: fkMatch[1],
                referencedTable: fkMatch[2],
                referencedColumn: fkMatch[3],
                onDelete: onDeleteMatch ? onDeleteMatch[1].toUpperCase() : undefined,
                onUpdate: onUpdateMatch ? onUpdateMatch[1].toUpperCase() : undefined
            });
        }
        // detect unique keys and indexes
        const indexRegex = /(UNIQUE KEY|KEY)\s+`?(\w+)`?\s*\(([^)]+)\)/gi;
        const indexes = [];
        let idxMatch;
        while ((idxMatch = indexRegex.exec(cols)) !== null) {
            const unique = idxMatch[1].toUpperCase().includes('UNIQUE');
            const name = idxMatch[2];
            const columns = idxMatch[3].split(',').map(c => c.replace(/`/g, '').trim());
            indexes.push({ name, columns, unique });
        }
        const columns = cols.split(',')
            .map(c => {
            const parts = c.trim().split(/\s+/);
            const colName = parts[0].replace(/`/g, '');
            const colType = parts[1]?.toUpperCase() || '';
            const raw = c.trim();
            const isUnique = indexes.some(idx => idx.unique && idx.columns.length === 1 && idx.columns.includes(colName));
            return {
                name: colName,
                type: colType,
                raw,
                isPrimaryKey: pkCols.includes(colName),
                isAutoIncrement: /AUTO_INCREMENT/i.test(raw),
                isUnique
            };
        })
            .filter(col => !col.raw.startsWith('PRIMARY KEY') && !col.raw.startsWith('KEY') && !col.raw.startsWith('CONSTRAINT'));
        tables.push({ tableName, columns, foreignKeys, indexes });
    }
    return tables;
}
