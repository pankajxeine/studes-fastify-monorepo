"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommsNotificationTemplateEntity = void 0;
exports.initCommsNotificationTemplateEntity = initCommsNotificationTemplateEntity;
const sequelize_1 = require("sequelize");
class CommsNotificationTemplateEntity extends sequelize_1.Model {
}
exports.CommsNotificationTemplateEntity = CommsNotificationTemplateEntity;
function initCommsNotificationTemplateEntity(sequelize) {
    CommsNotificationTemplateEntity.init({
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
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table ('comms_notification_template')"),
        },
        notificationTemplateCode: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'notification_template_code',
            allowNull: true,
            unique: true,
        },
        name: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'name',
            allowNull: false,
        },
        description: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'description',
            allowNull: true,
        },
        channel: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'channel',
            allowNull: false,
        },
        subjectTemplate: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'subject_template',
            allowNull: true,
        },
        bodyTemplate: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'body_template',
            allowNull: false,
        },
        isMandatory: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'is_mandatory',
            allowNull: false,
            defaultValue: false,
        },
        sortOrder: {
            type: sequelize_1.DataTypes.SMALLINT,
            field: 'sort_order',
            allowNull: false,
            defaultValue: 0,
        },
        isActive: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'is_active',
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
        tableName: 'comms_notification_template',
        timestamps: true,
        underscored: true,
        freezeTableName: true
    });
    return CommsNotificationTemplateEntity;
}
