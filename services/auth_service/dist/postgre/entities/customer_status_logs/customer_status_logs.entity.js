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
            type: sequelize_1.DataTypes.CHAR,
            field: 'id',
            allowNull: true,
            defaultValue: null,
        },
        customer_id: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'customer_id',
            allowNull: true,
            defaultValue: null,
        },
        status_id: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'status_id',
            allowNull: true,
            defaultValue: null,
        },
        created_by: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'created_by',
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
        tableName: 'customer_status_logs',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        paranoid: true
    });
    return CustomerStatusLogsEntity;
}
