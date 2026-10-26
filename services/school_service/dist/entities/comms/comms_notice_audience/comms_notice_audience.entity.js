"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommsNoticeAudienceEntity = void 0;
exports.initCommsNoticeAudienceEntity = initCommsNoticeAudienceEntity;
const sequelize_1 = require("sequelize");
class CommsNoticeAudienceEntity extends sequelize_1.Model {
}
exports.CommsNoticeAudienceEntity = CommsNoticeAudienceEntity;
function initCommsNoticeAudienceEntity(sequelize) {
    CommsNoticeAudienceEntity.init({
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
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table ('comms_notice_audience')"),
        },
        noticeAudienceId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'notice_audience_id',
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
        audienceType: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'audience_type',
            allowNull: false,
        },
        campusId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'campus_id',
            allowNull: true,
            references: { model: 'org_campus', key: 'campus_id' },
        },
        roleCode: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'role_code',
            allowNull: true,
            references: { model: 'iam_role', key: 'role_code' },
            onUpdate: 'CASCADE',
        },
        programId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'program_id',
            allowNull: true,
            references: { model: 'acad_program', key: 'program_id' },
        },
        gradeLevelId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'grade_level_id',
            allowNull: true,
            references: { model: 'acad_grade_level', key: 'grade_level_id' },
        },
        sectionId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'section_id',
            allowNull: true,
            references: { model: 'acad_section', key: 'section_id' },
        },
        courseOfferingId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'course_offering_id',
            allowNull: true,
            references: { model: 'acad_course_offering', key: 'course_offering_id' },
        },
        personId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'person_id',
            allowNull: true,
            references: { model: 'ppl_person', key: 'person_id' },
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
        tableName: 'comms_notice_audience',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        indexes: [
            { unique: true, fields: ['notice_id', 'audience_type', 'campus_id', 'role_code', 'program_id', 'grade_level_id', 'section_id', 'course_offering_id', 'person_id'] }
        ]
    });
    return CommsNoticeAudienceEntity;
}
