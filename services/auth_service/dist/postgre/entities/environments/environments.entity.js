"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnvironmentsEntity = void 0;
exports.initEnvironmentsEntity = initEnvironmentsEntity;
const sequelize_1 = require("sequelize");
class EnvironmentsEntity extends sequelize_1.Model {
}
exports.EnvironmentsEntity = EnvironmentsEntity;
function initEnvironmentsEntity(sequelize) {
    EnvironmentsEntity.init({
        id: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'id',
            allowNull: true,
        },
        name: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'name',
            allowNull: true,
            defaultValue: null,
        },
        code: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'code',
            allowNull: true,
            defaultValue: null,
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
        tableName: 'environments',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        paranoid: true
    });
    return EnvironmentsEntity;
}
