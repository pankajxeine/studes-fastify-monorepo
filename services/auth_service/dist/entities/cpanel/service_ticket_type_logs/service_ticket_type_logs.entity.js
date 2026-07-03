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
            type: sequelize_1.DataTypes.TEXT,
            field: 'id',
            allowNull: true,
            primaryKey: true,
        },
        serviceTicketId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'service_ticket_id',
            allowNull: true,
        },
        serviceTicketTypeId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'service_ticket_type_id',
            allowNull: true,
        },
        hoursLapsed: {
            type: sequelize_1.DataTypes.STRING(1),
            field: 'hours_lapsed',
            allowNull: true,
        },
        minutesLapsed: {
            type: sequelize_1.DataTypes.STRING(1),
            field: 'minutes_lapsed',
            allowNull: true,
        },
        isActive: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'is_active',
            allowNull: false,
            defaultValue: "No",
        },
        createdBy: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'created_by',
            allowNull: true,
        },
        ticketStartTime: {
            type: sequelize_1.DataTypes.DATE,
            field: 'ticket_start_time',
            allowNull: true,
        },
        cronLastUpdatedAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'cron_last_updated_at',
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
        tableName: 'service_ticket_type_logs',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        paranoid: false,
        indexes: [
            { unique: true, fields: ['id'] }
        ]
    });
    return ServiceTicketTypeLogsEntity;
}
