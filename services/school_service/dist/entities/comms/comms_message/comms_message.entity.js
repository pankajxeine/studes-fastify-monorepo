"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommsMessageEntity = void 0;
exports.initCommsMessageEntity = initCommsMessageEntity;
const sequelize_1 = require("sequelize");
class CommsMessageEntity extends sequelize_1.Model {
}
exports.CommsMessageEntity = CommsMessageEntity;
function initCommsMessageEntity(sequelize) {
    CommsMessageEntity.init({
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
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table ('comms_message')"),
        },
        messageId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'message_id',
            allowNull: false,
            unique: true,
            defaultValue: sequelize_1.Sequelize.literal("gen_random_uuid ()"),
        },
        messageThreadId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'message_thread_id',
            allowNull: false,
            references: { model: 'comms_message_thread', key: 'message_thread_id' },
            onDelete: 'CASCADE',
        },
        senderUserId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'sender_user_id',
            allowNull: false,
            references: { model: 'iam_app_user', key: 'app_user_id' },
        },
        body: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'body',
            allowNull: false,
        },
        fileId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'file_id',
            allowNull: true,
            references: { model: 'docs_file', key: 'file_id' },
        },
        sentAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'sent_at',
            allowNull: false,
            defaultValue: sequelize_1.DataTypes.NOW,
        },
        editedAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'edited_at',
            allowNull: true,
        },
        deletedAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'deleted_at',
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
        tableName: 'comms_message',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        paranoid: true,
        deletedAt: 'deletedAt'
    });
    return CommsMessageEntity;
}
