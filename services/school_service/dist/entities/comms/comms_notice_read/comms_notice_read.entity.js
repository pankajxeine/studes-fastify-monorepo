"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommsNoticeReadEntity = void 0;
exports.initCommsNoticeReadEntity = initCommsNoticeReadEntity;
const sequelize_1 = require("sequelize");
class CommsNoticeReadEntity extends sequelize_1.Model {
}
exports.CommsNoticeReadEntity = CommsNoticeReadEntity;
function initCommsNoticeReadEntity(sequelize) {
    CommsNoticeReadEntity.init({
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
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table ('comms_notice_read')"),
        },
        noticeReadId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'notice_read_id',
            allowNull: false,
            unique: true,
            defaultValue: sequelize_1.Sequelize.literal("gen_random_uuid ()"),
        },
        noticeId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'notice_id',
            allowNull: false,
            references: { model: 'comms_notice', key: 'notice_id' },
            onDelete: 'CASCADE',
        },
        appUserId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'app_user_id',
            allowNull: false,
            references: { model: 'iam_app_user', key: 'app_user_id' },
        },
        readAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'read_at',
            allowNull: false,
            defaultValue: sequelize_1.DataTypes.NOW,
        },
        acknowledgedAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'acknowledged_at',
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
        tableName: 'comms_notice_read',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        indexes: [
            { unique: true, fields: ['notice_id', 'app_user_id'] }
        ]
    });
    return CommsNoticeReadEntity;
}
