"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IndustryEnvironmentsEntity = void 0;
exports.initIndustryEnvironmentsEntity = initIndustryEnvironmentsEntity;
const sequelize_1 = require("sequelize");
class IndustryEnvironmentsEntity extends sequelize_1.Model {
}
exports.IndustryEnvironmentsEntity = IndustryEnvironmentsEntity;
function initIndustryEnvironmentsEntity(sequelize) {
    IndustryEnvironmentsEntity.init({
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
        environment_id: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'environment_id',
            allowNull: true,
        },
        configuration: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'configuration',
            allowNull: true,
            defaultValue: null,
        }
    }, {
        sequelize,
        tableName: 'industry_environments',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        paranoid: true
    });
    return IndustryEnvironmentsEntity;
}
