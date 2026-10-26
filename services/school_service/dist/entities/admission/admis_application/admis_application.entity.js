"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdmisApplicationEntity = void 0;
exports.initAdmisApplicationEntity = initAdmisApplicationEntity;
const sequelize_1 = require("sequelize");
class AdmisApplicationEntity extends sequelize_1.Model {
}
exports.AdmisApplicationEntity = AdmisApplicationEntity;
function initAdmisApplicationEntity(sequelize) {
    AdmisApplicationEntity.init({
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
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table ('admis_application')"),
        },
        applicationId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'application_id',
            allowNull: false,
            unique: true,
            defaultValue: sequelize_1.Sequelize.literal("gen_random_uuid ()"),
        },
        admissionCycleId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'admission_cycle_id',
            allowNull: false,
            references: { model: 'admis_admission_cycle', key: 'admission_cycle_id' },
        },
        applicantPersonId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'applicant_person_id',
            allowNull: false,
            references: { model: 'ppl_person', key: 'person_id' },
        },
        gradeLevelId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'grade_level_id',
            allowNull: false,
            references: { model: 'acad_grade_level', key: 'grade_level_id' },
        },
        inquiryId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'inquiry_id',
            allowNull: true,
            references: { model: 'admis_inquiry', key: 'inquiry_id' },
        },
        applicationNo: {
            type: sequelize_1.DataTypes.STRING(30),
            field: 'application_no',
            allowNull: false,
        },
        status: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'status',
            allowNull: false,
            defaultValue: "draft",
        },
        submittedAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'submitted_at',
            allowNull: true,
        },
        decidedAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'decided_at',
            allowNull: true,
        },
        decidedByUserId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'decided_by_user_id',
            allowNull: true,
            references: { model: 'iam_app_user', key: 'app_user_id' },
        },
        decisionRemarks: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'decision_remarks',
            allowNull: true,
        },
        offerExpiresOn: {
            type: sequelize_1.DataTypes.DATEONLY,
            field: 'offer_expires_on',
            allowNull: true,
        },
        offerRespondedAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'offer_responded_at',
            allowNull: true,
        },
        waitlistRank: {
            type: sequelize_1.DataTypes.SMALLINT,
            field: 'waitlist_rank',
            allowNull: true,
        },
        previousSchoolName: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'previous_school_name',
            allowNull: true,
        },
        previousGradeCompleted: {
            type: sequelize_1.DataTypes.STRING(30),
            field: 'previous_grade_completed',
            allowNull: true,
        },
        hasSiblingInSchool: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'has_sibling_in_school',
            allowNull: false,
            defaultValue: false,
        },
        applicationFeeAmount: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'application_fee_amount',
            allowNull: false,
            defaultValue: 0,
        },
        isFeeWaived: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'is_fee_waived',
            allowNull: false,
            defaultValue: false,
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
        tableName: 'admis_application',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        indexes: [
            { unique: true, fields: ['application_no'] }
        ]
    });
    return AdmisApplicationEntity;
}
