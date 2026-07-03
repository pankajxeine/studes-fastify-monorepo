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
            primaryKey: true,
        },
        name: {
            type: sequelize_1.DataTypes.STRING(30),
            field: 'name',
            allowNull: true,
        },
        code: {
            type: sequelize_1.DataTypes.STRING(30),
            field: 'code',
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
        tableName: 'environments',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        paranoid: false,
        indexes: [
            { unique: true, fields: ['id'] }
        ]
    });
    return EnvironmentsEntity;
}
