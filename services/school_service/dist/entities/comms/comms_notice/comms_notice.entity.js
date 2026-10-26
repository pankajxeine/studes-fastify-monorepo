"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommsNoticeEntity = void 0;
exports.initCommsNoticeEntity = initCommsNoticeEntity;
const sequelize_1 = require("sequelize");
class CommsNoticeEntity extends sequelize_1.Model {
}
exports.CommsNoticeEntity = CommsNoticeEntity;
function initCommsNoticeEntity(sequelize) {
    CommsNoticeEntity.init({
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
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table ('comms_notice')"),
        },
        noticeId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'notice_id',
            allowNull: false,
            unique: true,
            defaultValue: sequelize_1.Sequelize.literal("gen_random_uuid ()"),
        },
        campusId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'campus_id',
            allowNull: true,
            references: { model: 'org_campus', key: 'campus_id' },
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
        category: {
            type: sequelize_1.DataTypes.STRING(20),
            field: 'category',
            allowNull: false,
            defaultValue: "general",
        },
        priority: {
            type: sequelize_1.DataTypes.STRING(10),
            field: 'priority',
            allowNull: false,
            defaultValue: "normal",
        },
        publishAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'publish_at',
            allowNull: true,
        },
        expiresAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'expires_at',
            allowNull: true,
        },
        isPinned: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'is_pinned',
            allowNull: false,
            defaultValue: false,
        },
        requiresAcknowledgement: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'requires_acknowledgement',
            allowNull: false,
            defaultValue: false,
        },
        fileId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'file_id',
            allowNull: true,
            references: { model: 'docs_file', key: 'file_id' },
        },
        createdByUserId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'created_by_user_id',
            allowNull: false,
            references: { model: 'iam_app_user', key: 'app_user_id' },
        },
        status: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'status',
            allowNull: false,
            defaultValue: "draft",
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
        tableName: 'comms_notice',
        timestamps: true,
        underscored: true,
        freezeTableName: true
    });
    return CommsNoticeEntity;
}
