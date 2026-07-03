"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerStatusLogsEntity = void 0;
exports.initCustomerStatusLogsEntity = initCustomerStatusLogsEntity;
const sequelize_1 = require("sequelize");
class CustomerStatusLogsEntity extends sequelize_1.Model {
}
exports.CustomerStatusLogsEntity = CustomerStatusLogsEntity;
function initCustomerStatusLogsEntity(sequelize) {
    CustomerStatusLogsEntity.init({
        id: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'id',
            allowNull: true,
            primaryKey: true,
        },
        customerId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'customer_id',
            allowNull: true,
        },
        statusId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'status_id',
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
        tableName: 'customer_status_logs',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        paranoid: false,
        indexes: [
            { unique: true, fields: ['id'] }
        ]
    });
    return CustomerStatusLogsEntity;
}
