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
        },
        industry_id: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'industry_id',
            allowNull: true,
        },
        module_id: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'module_id',
            allowNull: true,
        },
        created_at: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'created_at',
            allowNull: true,
            defaultValue: null,
        },
        updated_at: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'updated_at',
            allowNull: true,
            defaultValue: null,
        }
    }, {
        sequelize,
        tableName: 'industry_modules',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        paranoid: true
    });
    return IndustryModulesEntity;
}
