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
            primaryKey: true,
        },
        customerId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'customer_id',
            allowNull: true,
        },
        customerStatusId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'customer_status_id',
            allowNull: true,
        },
        hoursLapsed: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'hours_lapsed',
            allowNull: true,
            defaultValue: 0,
        },
        minutesLapsed: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'minutes_lapsed',
            allowNull: true,
            defaultValue: 0,
        },
        isActive: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'is_active',
            allowNull: true,
            defaultValue: "False",
        },
        createdBy: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'created_by',
            allowNull: true,
        },
        createdAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'created_at',
            allowNull: true,
        },
        startTime: {
            type: sequelize_1.DataTypes.DATE,
            field: 'start_time',
            allowNull: true,
        },
        updatedAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'updated_at',
            allowNull: true,
        },
        cronLastUpdatedAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'cron_last_updated_at',
            allowNull: true,
        }
    }, {
        sequelize,
        tableName: 'customer_status_time_logs',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        paranoid: false,
        indexes: [
            { unique: true, fields: ['id'] }
        ]
    });
    return CustomerStatusTimeLogsEntity;
}
