"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommsNotificationEntity = void 0;
exports.initCommsNotificationEntity = initCommsNotificationEntity;
const sequelize_1 = require("sequelize");
class CommsNotificationEntity extends sequelize_1.Model {
}
exports.CommsNotificationEntity = CommsNotificationEntity;
function initCommsNotificationEntity(sequelize) {
    CommsNotificationEntity.init({
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
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table ('comms_notification')"),
        },
        notificationId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'notification_id',
            allowNull: false,
            unique: true,
            defaultValue: sequelize_1.Sequelize.literal("gen_random_uuid ()"),
        },
        appUserId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'app_user_id',
            allowNull: false,
            references: { model: 'iam_app_user', key: 'app_user_id' },
        },
        notificationTemplateCode: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'notification_template_code',
            allowNull: true,
            references: { model: 'comms_notification_template', key: 'notification_template_code' },
            onUpdate: 'CASCADE',
        },
        channel: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'channel',
            allowNull: false,
        },
        title: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'title',
            allowNull: false,
        },
        body: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'body',
            allowNull: false,
        },
        payload: {
            type: sequelize_1.DataTypes.JSONB,
            field: 'payload',
            allowNull: false,
            defaultValue: "{}",
        },
        status: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'status',
            allowNull: false,
            defaultValue: "queued",
        },
        scheduledAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'scheduled_at',
            allowNull: false,
            defaultValue: sequelize_1.DataTypes.NOW,
        },
        sentAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'sent_at',
            allowNull: true,
        },
        deliveredAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'delivered_at',
            allowNull: true,
        },
        readAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'read_at',
            allowNull: true,
        },
        retryCount: {
            type: sequelize_1.DataTypes.SMALLINT,
            field: 'retry_count',
            allowNull: false,
            defaultValue: 0,
        },
        failureReason: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'failure_reason',
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
        tableName: 'comms_notification',
        timestamps: true,
        underscored: true,
        freezeTableName: true
    });
    return CommsNotificationEntity;
}
