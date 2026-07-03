"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerStatusEntity = void 0;
exports.initCustomerStatusEntity = initCustomerStatusEntity;
const sequelize_1 = require("sequelize");
class CustomerStatusEntity extends sequelize_1.Model {
}
exports.CustomerStatusEntity = CustomerStatusEntity;
function initCustomerStatusEntity(sequelize) {
    CustomerStatusEntity.init({
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
        status: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'status',
            allowNull: true,
            defaultValue: null,
        },
        created_by: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'created_by',
            allowNull: true,
        },
        hours: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'hours',
            allowNull: true,
        },
        sequence: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'sequence',
            allowNull: true,
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
        tableName: 'customer_status',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        paranoid: true
    });
    return CustomerStatusEntity;
}
