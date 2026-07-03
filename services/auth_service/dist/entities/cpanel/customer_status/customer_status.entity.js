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
            primaryKey: true,
        },
        name: {
            type: sequelize_1.DataTypes.STRING(50),
            field: 'name',
            allowNull: true,
        },
        status: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'status',
            allowNull: true,
            defaultValue: "Active",
        },
        createdBy: {
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
        updatedBy: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'updated_by',
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
        },
        deletedAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'deleted_at',
            allowNull: true,
        }
    }, {
        sequelize,
        tableName: 'customer_status',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        paranoid: false,
        indexes: [
            { unique: true, fields: ['id'] }
        ]
    });
    return CustomerStatusEntity;
}
