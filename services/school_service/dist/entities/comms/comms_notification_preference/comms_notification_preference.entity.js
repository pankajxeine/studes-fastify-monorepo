"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommsNotificationPreferenceEntity = void 0;
exports.initCommsNotificationPreferenceEntity = initCommsNotificationPreferenceEntity;
const sequelize_1 = require("sequelize");
class CommsNotificationPreferenceEntity extends sequelize_1.Model {
}
exports.CommsNotificationPreferenceEntity = CommsNotificationPreferenceEntity;
function initCommsNotificationPreferenceEntity(sequelize) {
    CommsNotificationPreferenceEntity.init({
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
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table (\r\n        'comms_notification_preference'\r\n    )"),
        },
        notificationPreferenceId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'notification_preference_id',
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
            allowNull: false,
            references: { model: 'comms_notification_template', key: 'notification_template_code' },
            onUpdate: 'CASCADE',
        },
        channel: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'channel',
            allowNull: false,
        },
        isEnabled: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'is_enabled',
            allowNull: false,
            defaultValue: true,
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
        tableName: 'comms_notification_preference',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        indexes: [
            { unique: true, fields: ['app_user_id', 'notification_template_code', 'channel'] }
        ]
    });
    return CommsNotificationPreferenceEntity;
}
