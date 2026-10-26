"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdmisInquiryFollowUpEntity = void 0;
exports.initAdmisInquiryFollowUpEntity = initAdmisInquiryFollowUpEntity;
const sequelize_1 = require("sequelize");
class AdmisInquiryFollowUpEntity extends sequelize_1.Model {
}
exports.AdmisInquiryFollowUpEntity = AdmisInquiryFollowUpEntity;
function initAdmisInquiryFollowUpEntity(sequelize) {
    AdmisInquiryFollowUpEntity.init({
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
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table ('admis_inquiry_follow_up')"),
        },
        inquiryFollowUpId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'inquiry_follow_up_id',
            allowNull: false,
            unique: true,
            defaultValue: sequelize_1.Sequelize.literal("gen_random_uuid ()"),
        },
        inquiryId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'inquiry_id',
            allowNull: false,
            references: { model: 'admis_inquiry', key: 'inquiry_id' },
            onDelete: 'CASCADE',
        },
        followedUpByStaffId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'followed_up_by_staff_id',
            allowNull: true,
            references: { model: 'hr_staff', key: 'staff_id' },
        },
        channel: {
            type: sequelize_1.DataTypes.STRING(20),
            field: 'channel',
            allowNull: false,
        },
        followedUpAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'followed_up_at',
            allowNull: false,
            defaultValue: sequelize_1.DataTypes.NOW,
        },
        summary: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'summary',
            allowNull: false,
        },
        outcome: {
            type: sequelize_1.DataTypes.STRING(20),
            field: 'outcome',
            allowNull: false,
            defaultValue: "reached",
        },
        nextFollowUpOn: {
            type: sequelize_1.DataTypes.DATEONLY,
            field: 'next_follow_up_on',
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
        tableName: 'admis_inquiry_follow_up',
        timestamps: true,
        underscored: true,
        freezeTableName: true
    });
    return AdmisInquiryFollowUpEntity;
}
