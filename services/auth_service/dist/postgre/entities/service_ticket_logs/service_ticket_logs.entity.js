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
            type: sequelize_1.DataTypes.CHAR,
            field: 'id',
            allowNull: true,
            defaultValue: null,
        },
        ticket_id: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'ticket_id',
            allowNull: true,
            defaultValue: null,
        },
        ticket_type_id: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'ticket_type_id',
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
        tableName: 'service_ticket_logs',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        paranoid: true
    });
    return ServiceTicketLogsEntity;
}
