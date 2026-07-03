"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerStatusTimeLogsEntity = void 0;
exports.initCustomerStatusTimeLogsEntity = initCustomerStatusTimeLogsEntity;
const sequelize_1 = require("sequelize");
class CustomerStatusTimeLogsEntity extends sequelize_1.Model {
}
exports.CustomerStatusTimeLogsEntity = CustomerStatusTimeLogsEntity;
function initCustomerStatusTimeLogsEntity(sequelize) {
    CustomerStatusTimeLogsEntity.init({
        id: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'id',
            allowNull: true,
        },
        customer_id: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'customer_id',
            allowNull: true,
        },
        customer_status_id: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'customer_status_id',
            allowNull: true,
        },
        hours_lapsed: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'hours_lapsed',
            allowNull: true,
        },
        minutes_lapsed: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'minutes_lapsed',
            allowNull: true,
        },
        is_active: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'is_active',
            allowNull: true,
            defaultValue: null,
        },
        created_by: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'created_by',
            allowNull: true,
        },
        created_at: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'created_at',
            allowNull: true,
            defaultValue: null,
        },
        start_time: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'start_time',
            allowNull: true,
            defaultValue: null,
        },
        updated_at: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'updated_at',
            allowNull: true,
            defaultValue: null,
        },
        cron_last_updated_at: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'cron_last_updated_at',
            allowNull: true,
            defaultValue: null,
        }
    }, {
        sequelize,
        tableName: 'customer_status_time_logs',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        paranoid: true
    });
    return CustomerStatusTimeLogsEntity;
}
