"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MigrationDetailsEntity = void 0;
exports.initMigrationDetailsEntity = initMigrationDetailsEntity;
const sequelize_1 = require("sequelize");
class MigrationDetailsEntity extends sequelize_1.Model {
}
exports.MigrationDetailsEntity = MigrationDetailsEntity;
function initMigrationDetailsEntity(sequelize) {
    MigrationDetailsEntity.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            field: 'id',
            allowNull: true,
            primaryKey: true,
            autoIncrement: true,
        },
        folder: {
            type: sequelize_1.DataTypes.STRING(50),
            field: 'folder',
            allowNull: false,
        },
        yearFolder: {
            type: sequelize_1.DataTypes.STRING(50),
            field: 'year_folder',
            allowNull: true,
        },
        fileName: {
            type: sequelize_1.DataTypes.STRING(255),
            field: 'file_name',
            allowNull: false,
        },
        industry: {
            type: sequelize_1.DataTypes.STRING(50),
            field: 'industry',
            allowNull: false,
        },
        executionTime: {
            type: sequelize_1.DataTypes.DATE,
            field: 'execution_time',
            allowNull: false,
        },
        createdAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'created_at',
            allowNull: false,
        },
        updatedAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'updated_at',
            allowNull: false,
        }
    }, {
        sequelize,
        tableName: 'migration_details',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        paranoid: false,
        indexes: [
            { unique: true, fields: ['file_name'] }
        ]
    });
    return MigrationDetailsEntity;
}
