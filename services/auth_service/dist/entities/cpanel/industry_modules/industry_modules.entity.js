"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IndustryModulesEntity = void 0;
exports.initIndustryModulesEntity = initIndustryModulesEntity;
const sequelize_1 = require("sequelize");
class IndustryModulesEntity extends sequelize_1.Model {
}
exports.IndustryModulesEntity = IndustryModulesEntity;
function initIndustryModulesEntity(sequelize) {
    IndustryModulesEntity.init({
        id: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'id',
            allowNull: true,
            primaryKey: true,
        },
        industryId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'industry_id',
            allowNull: true,
        },
        moduleId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'module_id',
            allowNull: true,
        },
        createdAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'created_at',
            allowNull: true,
        },
        updatedAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'updated_at',
            allowNull: true,
        }
    }, {
        sequelize,
        tableName: 'industry_modules',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        paranoid: false,
        indexes: [
            { unique: true, fields: ['id'] }
        ]
    });
    return IndustryModulesEntity;
}
