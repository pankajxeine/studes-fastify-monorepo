"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdmisInquiryEntity = void 0;
exports.initAdmisInquiryEntity = initAdmisInquiryEntity;
const sequelize_1 = require("sequelize");
class AdmisInquiryEntity extends sequelize_1.Model {
}
exports.AdmisInquiryEntity = AdmisInquiryEntity;
function initAdmisInquiryEntity(sequelize) {
    AdmisInquiryEntity.init({
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
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table ('admis_inquiry')"),
        },
        inquiryId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'inquiry_id',
            allowNull: false,
            unique: true,
            defaultValue: sequelize_1.Sequelize.literal("gen_random_uuid ()"),
        },
        campusId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'campus_id',
            allowNull: false,
            references: { model: 'org_campus', key: 'campus_id' },
        },
        academicYearId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'academic_year_id',
            allowNull: true,
            references: { model: 'acad_academic_year', key: 'academic_year_id' },
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
        personId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'person_id',
            allowNull: true,
            references: { model: 'ppl_person', key: 'person_id' },
        },
        assignedToStaffId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'assigned_to_staff_id',
            allowNull: true,
            references: { model: 'hr_staff', key: 'staff_id' },
        },
        inquirySourceCode: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'inquiry_source_code',
            allowNull: false,
            defaultValue: "walk_in",
            references: { model: 'admis_inquiry_source', key: 'inquiry_source_code' },
            onUpdate: 'CASCADE',
        },
        inquiryNo: {
            type: sequelize_1.DataTypes.STRING(30),
            field: 'inquiry_no',
            allowNull: false,
        },
        contactName: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'contact_name',
            allowNull: false,
        },
        contactEmail: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'contact_email',
            allowNull: true,
        },
        contactPhone: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'contact_phone',
            allowNull: true,
        },
        prospectName: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'prospect_name',
            allowNull: true,
        },
        prospectDateOfBirth: {
            type: sequelize_1.DataTypes.DATEONLY,
            field: 'prospect_date_of_birth',
            allowNull: true,
        },
        status: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'status',
            allowNull: false,
            defaultValue: "new",
        },
        receivedAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'received_at',
            allowNull: false,
            defaultValue: sequelize_1.DataTypes.NOW,
        },
        nextFollowUpOn: {
            type: sequelize_1.DataTypes.DATEONLY,
            field: 'next_follow_up_on',
            allowNull: true,
        },
        visitScheduledAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'visit_scheduled_at',
            allowNull: true,
        },
        lostReason: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'lost_reason',
            allowNull: true,
        },
        notes: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'notes',
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
        tableName: 'admis_inquiry',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        indexes: [
            { unique: true, fields: ['inquiry_no'] }
        ]
    });
    return AdmisInquiryEntity;
}
