"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IamUserSessionEntity = void 0;
exports.initIamUserSessionEntity = initIamUserSessionEntity;
const sequelize_1 = require("sequelize");
class IamUserSessionEntity extends sequelize_1.Model {
}
exports.IamUserSessionEntity = IamUserSessionEntity;
function initIamUserSessionEntity(sequelize) {
    IamUserSessionEntity.init({
        id: {
            type: sequelize_1.DataTypes.BIGINT,
            field: 'id',
            allowNull: true,
            primaryKey: true,
            autoIncrement: true,
        },
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
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table ('iam_user_session')"),
        },
        userSessionId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'user_session_id',
            allowNull: false,
            unique: true,
            defaultValue: sequelize_1.Sequelize.literal("gen_random_uuid ()"),
        },
        appUserId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'app_user_id',
            allowNull: false,
            references: { model: 'iam_app_user', key: 'app_user_id' },
            onDelete: 'CASCADE',
        },
        tokenHash: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'token_hash',
            allowNull: false,
        },
        campusId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'campus_id',
            allowNull: true,
            references: { model: 'org_campus', key: 'campus_id' },
        },
        clientType: {
            type: sequelize_1.DataTypes.STRING(10),
            field: 'client_type',
            allowNull: false,
            defaultValue: "web",
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
        startedAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'started_at',
            allowNull: false,
            defaultValue: sequelize_1.DataTypes.NOW,
        },
        lastSeenAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'last_seen_at',
            allowNull: false,
            defaultValue: sequelize_1.DataTypes.NOW,
        },
        expiresAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'expires_at',
            allowNull: false,
        },
        endedAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'ended_at',
            allowNull: true,
        },
        endReason: {
            type: sequelize_1.DataTypes.STRING(20),
            field: 'end_reason',
            allowNull: true,
        },
        createdAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'created_at',
            allowNull: false,
            defaultValue: sequelize_1.DataTypes.NOW,
        },
        createdBy: {
            type: sequelize_1.DataTypes.UUID,
            field: 'created_by',
            allowNull: true,
        },
        updatedAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'updated_at',
            allowNull: false,
            defaultValue: sequelize_1.DataTypes.NOW,
        },
        updatedBy: {
            type: sequelize_1.DataTypes.UUID,
            field: 'updated_by',
            allowNull: true,
        }
    }, {
        sequelize,
        tableName: 'iam_user_session',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        indexes: [
            { unique: true, fields: ['token_hash'] }
        ]
    });
    return IamUserSessionEntity;
}
