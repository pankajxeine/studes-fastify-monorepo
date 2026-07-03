"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceTicketTypeLogsEntity = void 0;
exports.initServiceTicketTypeLogsEntity = initServiceTicketTypeLogsEntity;
const sequelize_1 = require("sequelize");
class ServiceTicketTypeLogsEntity extends sequelize_1.Model {
}
exports.ServiceTicketTypeLogsEntity = ServiceTicketTypeLogsEntity;
function initServiceTicketTypeLogsEntity(sequelize) {
    ServiceTicketTypeLogsEntity.init({
        id: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'id',
            allowNull: true,
            defaultValue: null,
        },
        service_ticket_id: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'service_ticket_id',
            allowNull: true,
            defaultValue: null,
        },
        service_ticket_type_id: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'service_ticket_type_id',
            allowNull: true,
            defaultValue: null,
        },
        hours_lapsed: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'hours_lapsed',
            allowNull: true,
            defaultValue: null,
        },
        minutes_lapsed: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'minutes_lapsed',
            allowNull: true,
            defaultValue: null,
        },
        is_active: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'is_active',
            allowNull: true,
            defaultValue: null,
        },
        created_by: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'created_by',
            allowNull: true,
            defaultValue: null,
        },
        ticket_start_time: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'ticket_start_time',
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
        cron_last_updated_at: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'cron_last_updated_at',
            allowNull: true,
            defaultValue: null,
        }
    }, {
        sequelize,
        tableName: 'service_ticket_type_logs',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        paranoid: true
    });
    return ServiceTicketTypeLogsEntity;
}
