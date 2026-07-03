"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IndustriesEntity = void 0;
exports.initIndustriesEntity = initIndustriesEntity;
const sequelize_1 = require("sequelize");
class IndustriesEntity extends sequelize_1.Model {
}
exports.IndustriesEntity = IndustriesEntity;
function initIndustriesEntity(sequelize) {
    IndustriesEntity.init({
        id: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'id',
            allowNull: true,
        },
        code: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'code',
            allowNull: true,
            defaultValue: null,
        },
        name: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'name',
            allowNull: true,
            defaultValue: null,
        },
        description: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'description',
            allowNull: true,
            defaultValue: null,
        },
        port: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'port',
            allowNull: true,
        },
        verifone_code: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'verifone_code',
            allowNull: true,
            defaultValue: null,
        },
        type: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'type',
            allowNull: true,
            defaultValue: null,
        },
        image: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'image',
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
        tableName: 'industries',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        paranoid: true
    });
    return IndustriesEntity;
}
