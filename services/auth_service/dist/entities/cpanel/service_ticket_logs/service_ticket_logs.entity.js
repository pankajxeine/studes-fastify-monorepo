"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceTicketLogsEntity = void 0;
exports.initServiceTicketLogsEntity = initServiceTicketLogsEntity;
const sequelize_1 = require("sequelize");
class ServiceTicketLogsEntity extends sequelize_1.Model {
}
exports.ServiceTicketLogsEntity = ServiceTicketLogsEntity;
function initServiceTicketLogsEntity(sequelize) {
    ServiceTicketLogsEntity.init({
        id: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'id',
            allowNull: true,
            primaryKey: true,
        },
        ticketId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'ticket_id',
            allowNull: true,
        },
        ticketTypeId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'ticket_type_id',
            allowNull: true,
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
        updatedAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'updated_at',
            allowNull: true,
        }
    }, {
        sequelize,
        tableName: 'service_ticket_logs',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        paranoid: false,
        indexes: [
            { unique: true, fields: ['id'] }
        ]
    });
    return ServiceTicketLogsEntity;
}
