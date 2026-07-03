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
        service_ticket_type_id: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'service_ticket_type_id',
            allowNull: true,
            defaultValue: null,
        },
        service_ticket_number: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'service_ticket_number',
            allowNull: true,
            defaultValue: null,
        },
        subject: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'subject',
            allowNull: true,
            defaultValue: null,
        },
        st_status: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'st_status',
            allowNull: true,
            defaultValue: null,
        },
        user_id: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'user_id',
            allowNull: true,
            defaultValue: null,
        },
        litepos_users: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'litepos_users',
            allowNull: true,
            defaultValue: null,
        },
        industry: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'industry',
            allowNull: true,
            defaultValue: null,
        },
        sub_id: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'sub_id',
            allowNull: true,
            defaultValue: null,
        },
        priority: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'priority',
            allowNull: true,
            defaultValue: null,
        },
        followup_time: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'followup_time',
            allowNull: true,
            defaultValue: null,
        },
        followup_date: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'followup_date',
            allowNull: true,
            defaultValue: null,
        },
        email_followup: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'email_followup',
            allowNull: true,
            defaultValue: null,
        },
        caller_name: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'caller_name',
            allowNull: true,
            defaultValue: null,
        },
        call_direction: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'call_direction',
            allowNull: true,
            defaultValue: null,
        },
        primary_service_request_id: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'primary_service_request_id',
            allowNull: true,
            defaultValue: null,
        },
        notes: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'notes',
            allowNull: true,
            defaultValue: null,
        },
        description: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'description',
            allowNull: true,
            defaultValue: null,
        },
        status: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'status',
            allowNull: true,
            defaultValue: null,
        },
        hours_elapsed: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'hours_elapsed',
            allowNull: true,
            defaultValue: null,
        },
        minutes_elapsed: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'minutes_elapsed',
            allowNull: true,
            defaultValue: null,
        },
        is_new_client: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'is_new_client',
            allowNull: true,
            defaultValue: null,
        },
        created_by: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'created_by',
            allowNull: true,
            defaultValue: null,
        },
        updated_by: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'updated_by',
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
        deleted_at: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'deleted_at',
            allowNull: true,
            defaultValue: null,
        }
    }, {
        sequelize,
        tableName: 'service_tickets',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        paranoid: true
    });
    return ServiceTicketsEntity;
}
