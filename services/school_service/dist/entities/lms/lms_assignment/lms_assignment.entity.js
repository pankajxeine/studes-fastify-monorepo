"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LmsAssignmentEntity = void 0;
exports.initLmsAssignmentEntity = initLmsAssignmentEntity;
const sequelize_1 = require("sequelize");
class LmsAssignmentEntity extends sequelize_1.Model {
}
exports.LmsAssignmentEntity = LmsAssignmentEntity;
function initLmsAssignmentEntity(sequelize) {
    LmsAssignmentEntity.init({
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
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table ('lms_assignment')"),
        },
        assignmentId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'assignment_id',
            allowNull: false,
            unique: true,
            defaultValue: sequelize_1.Sequelize.literal("gen_random_uuid ()"),
        },
        courseOfferingId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'course_offering_id',
            allowNull: false,
            references: { model: 'acad_course_offering', key: 'course_offering_id' },
        },
        createdByStaffId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'created_by_staff_id',
            allowNull: false,
            references: { model: 'hr_staff', key: 'staff_id' },
        },
        assessmentTypeCode: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'assessment_type_code',
            allowNull: false,
            defaultValue: "assignment",
            references: { model: 'exam_assessment_type', key: 'assessment_type_code' },
            onUpdate: 'CASCADE',
        },
        title: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'title',
            allowNull: false,
        },
        instructions: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'instructions',
            allowNull: false,
        },
        attachmentFileId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'attachment_file_id',
            allowNull: true,
            references: { model: 'docs_file', key: 'file_id' },
        },
        submissionMode: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'submission_mode',
            allowNull: false,
            defaultValue: "file",
        },
        maxMarks: {
            type: sequelize_1.DataTypes.DECIMAL(6, 2),
            field: 'max_marks',
            allowNull: false,
        },
        publishedAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'published_at',
            allowNull: true,
        },
        dueAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'due_at',
            allowNull: false,
        },
        allowLate: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'allow_late',
            allowNull: false,
            defaultValue: false,
        },
        lateUntil: {
            type: sequelize_1.DataTypes.DATE,
            field: 'late_until',
            allowNull: true,
        },
        latePenaltyPct: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'late_penalty_pct',
            allowNull: false,
            defaultValue: 0,
        },
        maxAttempts: {
            type: sequelize_1.DataTypes.SMALLINT,
            field: 'max_attempts',
            allowNull: false,
            defaultValue: 1,
        },
        isGroupWork: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'is_group_work',
            allowNull: false,
            defaultValue: false,
        },
        status: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'status',
            allowNull: false,
            defaultValue: "draft",
        },
        closedAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'closed_at',
            allowNull: true,
        },
        cancelledReason: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'cancelled_reason',
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
        tableName: 'lms_assignment',
        timestamps: true,
        underscored: true,
        freezeTableName: true
    });
    return LmsAssignmentEntity;
}
