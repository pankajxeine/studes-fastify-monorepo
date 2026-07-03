"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateEntity = generateEntity;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
function mapSQLTypeToSequelize(sqlType, raw) {
    if (/TINYINT\(1\)/i.test(raw))
        return 'DataTypes.BOOLEAN';
    if (/BIGINT/i.test(sqlType))
        return 'DataTypes.BIGINT';
    if (/INT/i.test(sqlType))
        return 'DataTypes.INTEGER';
    if (/VARCHAR\((\d+)\)/i.test(sqlType)) {
        const len = sqlType.match(/\d+/)?.[0];
        return `DataTypes.STRING(${len})`;
    }
    if (/CHAR\((\d+)\)/i.test(sqlType)) {
        const len = sqlType.match(/\d+/)?.[0];
        return `DataTypes.STRING(${len})`;
    }
    if (/TEXT/i.test(sqlType))
        return 'DataTypes.TEXT';
    if (/DATE|DATETIME|TIMESTAMP/i.test(sqlType))
        return 'DataTypes.DATE';
    if (/DECIMAL|NUMERIC/i.test(sqlType))
        return 'DataTypes.DECIMAL';
    if (/FLOAT|DOUBLE/i.test(sqlType))
        return 'DataTypes.FLOAT';
    if (/ENUM/i.test(sqlType)) {
        const values = raw.match(/\(([^)]+)\)/)?.[1];
        return `DataTypes.ENUM(${values})`;
    }
    if (/JSON/i.test(sqlType))
        return 'DataTypes.JSON';
    return 'DataTypes.STRING';
}
function generateEntity(schema, tableName, columns, foreignKeys, indexes) {
    const className = tableName.charAt(0).toUpperCase() + tableName.slice(1);
    const content = `
import { DataTypes, Model, Sequelize } from 'sequelize';

export class ${className} extends Model {
  ${columns.map(col => `${col.name}!: any;`).join('\n  ')}
}

export function init${className}(sequelize: Sequelize) {
  ${className}.init({
    ${columns.map(col => {
        const options = [`type: ${mapSQLTypeToSequelize(col.type, col.raw)}`];
        if (col.isPrimaryKey)
            options.push('primaryKey: true');
        if (col.isAutoIncrement)
            options.push('autoIncrement: true');
        if (col.isUnique)
            options.push('unique: true');
        return `${col.name}: { ${options.join(', ')} },`;
    }).join('\n    ')}
  }, {
    sequelize,
    modelName: '${tableName}',
    schema: '${schema}',
    indexes: [
      ${indexes.map(idx => `{
        name: '${idx.name}',
        unique: ${idx.unique},
        fields: [${idx.columns.map(c => `'${c}'`).join(', ')}]
      }`).join(',\n      ')}
    ]
  });

  // Associations
  ${foreignKeys.map(fk => `
  ${className}.belongsTo(sequelize.models.${fk.referencedTable.charAt(0).toUpperCase() + fk.referencedTable.slice(1)}, {
    foreignKey: '${fk.column}',
    targetKey: '${fk.referencedColumn}',
    ${fk.onDelete ? `onDelete: '${fk.onDelete}',` : ''}
    ${fk.onUpdate ? `onUpdate: '${fk.onUpdate}',` : ''}
  });
  sequelize.models.${fk.referencedTable.charAt(0).toUpperCase() + fk.referencedTable.slice(1)}.hasMany(${className}, {
    foreignKey: '${fk.column}'
  });
  `).join('')}
}
`;
    const filePath = path_1.default.resolve(__dirname, 'entities', `${schema}.${tableName}.entity.ts`);
    fs_1.default.writeFileSync(filePath, content, 'utf-8');
}
