"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrtnInternshipEntity = void 0;
exports.initPrtnInternshipEntity = initPrtnInternshipEntity;
const sequelize_1 = require("sequelize");
class PrtnInternshipEntity extends sequelize_1.Model {
}
exports.PrtnInternshipEntity = PrtnInternshipEntity;
function initPrtnInternshipEntity(sequelize) {
    PrtnInternshipEntity.init({
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
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table ('prtn_internship')"),
        },
        internshipId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'internship_id',
            allowNull: false,
            unique: true,
            defaultValue: sequelize_1.Sequelize.literal("gen_random_uuid ()"),
        },
        studentId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'student_id',
            allowNull: false,
            references: { model: 'sis_student', key: 'student_id' },
        },
        partnerOrganizationId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'partner_organization_id',
            allowNull: false,
            references: { model: 'prtn_partner_organization', key: 'partner_organization_id' },
        },
        supervisorPartnerContactId: {
            type: sequelize_1.DataTypes.UUID,
            field: 'supervisor_partner_contact_id',
            allowNull: true,
            references: { model: 'prtn_partner_contact', key: 'partner_contact_id' },
        },
        facultyMentorStaffId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'faculty_mentor_staff_id',
            allowNull: false,
            references: { model: 'hr_staff', key: 'staff_id' },
        },
        jobOfferId: {
            type: sequelize_1.DataTypes.UUID,
            field: 'job_offer_id',
            allowNull: true,
            references: { model: 'prtn_job_offer', key: 'job_offer_id' },
        },
        title: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'title',
            allowNull: false,
        },
        startOn: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'start_on',
            allowNull: false,
        },
        endOn: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'end_on',
            allowNull: false,
        },
        period: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'period',
            allowNull: true,
            autoIncrement: true,
        },
        workMode: {
            type: sequelize_1.DataTypes.STRING(10),
            field: 'work_mode',
            allowNull: false,
            defaultValue: "onsite",
        },
        hoursPerWeek: {
            type: sequelize_1.DataTypes.SMALLINT,
            field: 'hours_per_week',
            allowNull: true,
        },
        stipendAmount: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'stipend_amount',
            allowNull: true,
        },
        isForCredit: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'is_for_credit',
            allowNull: false,
            defaultValue: false,
        },
        credits: {
            type: sequelize_1.DataTypes.DECIMAL(4, 1),
            field: 'credits',
            allowNull: true,
        },
        status: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'status',
            allowNull: false,
            defaultValue: "planned",
        },
        evaluationScore: {
            type: sequelize_1.DataTypes.DECIMAL(5, 2),
            field: 'evaluation_score',
            allowNull: true,
        },
        supervisorFeedback: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'supervisor_feedback',
            allowNull: true,
        },
        mentorFeedback: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'mentor_feedback',
            allowNull: true,
        },
        terminatedOn: {
            type: sequelize_1.DataTypes.DATEONLY,
            field: 'terminated_on',
            allowNull: true,
        },
        terminationReason: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'termination_reason',
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
        tableName: 'prtn_internship',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        indexes: [
            { unique: true, fields: ['job_offer_id'] }
        ]
    });
    return PrtnInternshipEntity;
}
