"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuditActivityLogEntity = void 0;
exports.initAuditActivityLogEntity = initAuditActivityLogEntity;
const sequelize_1 = require("sequelize");
class AuditActivityLogEntity extends sequelize_1.Model {
}
exports.AuditActivityLogEntity = AuditActivityLogEntity;
function initAuditActivityLogEntity(sequelize) {
    AuditActivityLogEntity.init({
        publicId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'public_id',
            allowNull: false,
            unique: true,
            defaultValue: sequelize_1.Sequelize.literal("gen_random_uuid ()"),
        },
        recordCode: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'record_code',
            allowNull: false,
            unique: true,
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table ('audit_activity_log')"),
        },
        activityLogId: {
            type: sequelize_1.DataTypes.BIGINT,
            field: 'activity_log_id',
            allowNull: true,
            primaryKey: true,
            autoIncrement: true,
        },
        occurredAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'occurred_at',
            allowNull: false,
            defaultValue: sequelize_1.Sequelize.literal("clock_timestamp()"),
        },
        appUserId: {
            type: sequelize_1.DataTypes.UUID,
            field: 'app_user_id',
            allowNull: true,
        },
        username: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'username',
            allowNull: true,
        },
        campusId: {
            type: sequelize_1.DataTypes.UUID,
            field: 'campus_id',
            allowNull: true,
        },
        activityType: {
            type: sequelize_1.DataTypes.STRING(40),
            field: 'activity_type',
            allowNull: false,
        },
        outcome: {
            type: sequelize_1.DataTypes.STRING(10),
            field: 'outcome',
            allowNull: false,
            defaultValue: "success",
        },
        module: {
            type: sequelize_1.DataTypes.STRING(30),
            field: 'module',
            allowNull: true,
        },
        objectType: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'object_type',
            allowNull: true,
        },
        objectId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'object_id',
            allowNull: true,
        },
        targetAppUserId: {
            type: sequelize_1.DataTypes.UUID,
            field: 'target_app_user_id',
            allowNull: true,
        },
        description: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'description',
            allowNull: false,
        },
        details: {
            type: sequelize_1.DataTypes.JSONB,
            field: 'details',
            allowNull: false,
            defaultValue: "{}",
        },
        ipAddress: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'ip_address',
            allowNull: true,
        },
        userAgent: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'user_agent',
            allowNull: true,
        },
        sessionId: {
            type: sequelize_1.DataTypes.UUID,
            field: 'session_id',
            allowNull: true,
        },
        requestId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'request_id',
            allowNull: true,
        }
    }, {
        sequelize,
        tableName: 'audit_activity_log',
        timestamps: false,
        underscored: true,
        freezeTableName: true
    });
    return AuditActivityLogEntity;
}
