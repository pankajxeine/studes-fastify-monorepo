"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommsMessageThreadEntity = void 0;
exports.initCommsMessageThreadEntity = initCommsMessageThreadEntity;
const sequelize_1 = require("sequelize");
class CommsMessageThreadEntity extends sequelize_1.Model {
}
exports.CommsMessageThreadEntity = CommsMessageThreadEntity;
function initCommsMessageThreadEntity(sequelize) {
    CommsMessageThreadEntity.init({
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
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table ('comms_message_thread')"),
        },
        messageThreadId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'message_thread_id',
            allowNull: false,
            unique: true,
            defaultValue: sequelize_1.Sequelize.literal("gen_random_uuid ()"),
        },
        subject: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'subject',
            allowNull: false,
        },
        contextType: {
            type: sequelize_1.DataTypes.STRING(30),
            field: 'context_type',
            allowNull: true,
        },
        contextId: {
            type: sequelize_1.DataTypes.UUID,
            field: 'context_id',
            allowNull: true,
        },
        campusId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'campus_id',
            allowNull: true,
            references: { model: 'org_campus', key: 'campus_id' },
        },
        createdByUserId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'created_by_user_id',
            allowNull: false,
            references: { model: 'iam_app_user', key: 'app_user_id' },
        },
        isClosed: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'is_closed',
            allowNull: false,
            defaultValue: false,
        },
        closedAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'closed_at',
            allowNull: true,
        },
        lastMessageAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'last_message_at',
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
        tableName: 'comms_message_thread',
        timestamps: true,
        underscored: true,
        freezeTableName: true
    });
    return CommsMessageThreadEntity;
}
