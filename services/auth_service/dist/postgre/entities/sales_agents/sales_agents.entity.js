"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesAgentsEntity = void 0;
exports.initSalesAgentsEntity = initSalesAgentsEntity;
const sequelize_1 = require("sequelize");
class SalesAgentsEntity extends sequelize_1.Model {
}
exports.SalesAgentsEntity = SalesAgentsEntity;
function initSalesAgentsEntity(sequelize) {
    SalesAgentsEntity.init({
        id: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'id',
            allowNull: true,
            defaultValue: null,
        },
        name: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'name',
            allowNull: true,
            defaultValue: null,
        },
        address1: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'address1',
            allowNull: true,
            defaultValue: null,
        },
        address2: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'address2',
            allowNull: true,
            defaultValue: null,
        },
        notes: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'notes',
            allowNull: true,
            defaultValue: null,
        },
        city: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'city',
            allowNull: true,
            defaultValue: null,
        },
        state_id: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'state_id',
            allowNull: true,
            defaultValue: null,
        },
        country_id: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'country_id',
            allowNull: true,
            defaultValue: null,
        },
        postal_code: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'postal_code',
            allowNull: true,
            defaultValue: null,
        },
        status: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'status',
            allowNull: true,
            defaultValue: null,
        },
        created_by: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'created_by',
            allowNull: true,
            defaultValue: null,
        },
        updated_by: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'updated_by',
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
        },
        deleted_at: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'deleted_at',
            allowNull: true,
            defaultValue: null,
        }
    }, {
        sequelize,
        tableName: 'sales_agents',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        paranoid: true
    });
    return SalesAgentsEntity;
}
