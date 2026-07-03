"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceTicketsEntity = void 0;
exports.initServiceTicketsEntity = initServiceTicketsEntity;
const sequelize_1 = require("sequelize");
class ServiceTicketsEntity extends sequelize_1.Model {
}
exports.ServiceTicketsEntity = ServiceTicketsEntity;
function initServiceTicketsEntity(sequelize) {
    ServiceTicketsEntity.init({
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
        serviceTicketTypeId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'service_ticket_type_id',
            allowNull: true,
        },
        serviceTicketNumber: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'service_ticket_number',
            allowNull: true,
        },
        subject: {
            type: sequelize_1.DataTypes.STRING(100),
            field: 'subject',
            allowNull: true,
        },
        stStatus: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'st_status',
            allowNull: false,
            defaultValue: "Open",
        },
        userId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'user_id',
            allowNull: true,
        },
        assignUsers: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'assign_users',
            allowNull: true,
        },
        industry: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'industry',
            allowNull: true,
        },
        subId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'sub_id',
            allowNull: true,
        },
        priority: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'priority',
            allowNull: false,
            defaultValue: "Low",
        },
        followupTime: {
            type: sequelize_1.DataTypes.TIME,
            field: 'followup_time',
            allowNull: true,
        },
        followupDate: {
            type: sequelize_1.DataTypes.DATEONLY,
            field: 'followup_date',
            allowNull: true,
        },
        emailFollowup: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'email_followup',
            allowNull: false,
            defaultValue: "No",
        },
        callerName: {
            type: sequelize_1.DataTypes.STRING(30),
            field: 'caller_name',
            allowNull: true,
        },
        callDirection: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'call_direction',
            allowNull: false,
            defaultValue: "Inbound",
        },
        primaryServiceRequestId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'primary_service_request_id',
            allowNull: true,
        },
        notes: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'notes',
            allowNull: true,
        },
        description: {
            type: sequelize_1.DataTypes.STRING(1),
            field: 'description',
            allowNull: true,
        },
        status: {
            type: sequelize_1.DataTypes.STRING(1),
            field: 'status',
            allowNull: true,
        },
        hoursElapsed: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'hours_elapsed',
            allowNull: true,
            defaultValue: 0,
        },
        minutesElapsed: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'minutes_elapsed',
            allowNull: true,
            defaultValue: 0,
        },
        isNewClient: {
            type: sequelize_1.DataTypes.STRING(1),
            field: 'is_new_client',
            allowNull: true,
        },
        createdBy: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'created_by',
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
        tableName: 'service_tickets',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        paranoid: false,
        indexes: [
            { unique: true, fields: ['id'] }
        ]
    });
    return ServiceTicketsEntity;
}
