"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LmsAssignmentSubmissionEntity = void 0;
exports.initLmsAssignmentSubmissionEntity = initLmsAssignmentSubmissionEntity;
const sequelize_1 = require("sequelize");
class LmsAssignmentSubmissionEntity extends sequelize_1.Model {
}
exports.LmsAssignmentSubmissionEntity = LmsAssignmentSubmissionEntity;
function initLmsAssignmentSubmissionEntity(sequelize) {
    LmsAssignmentSubmissionEntity.init({
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
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table ('lms_assignment_submission')"),
        },
        assignmentSubmissionId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'assignment_submission_id',
            allowNull: false,
            unique: true,
            defaultValue: sequelize_1.Sequelize.literal("gen_random_uuid ()"),
        },
        assignmentId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'assignment_id',
            allowNull: false,
            references: { model: 'lms_assignment', key: 'assignment_id' },
        },
        studentId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'student_id',
            allowNull: false,
            references: { model: 'sis_student', key: 'student_id' },
        },
        attemptNo: {
            type: sequelize_1.DataTypes.SMALLINT,
            field: 'attempt_no',
            allowNull: false,
            defaultValue: 1,
        },
        submittedAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'submitted_at',
            allowNull: false,
            defaultValue: sequelize_1.DataTypes.NOW,
        },
        submissionText: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'submission_text',
            allowNull: true,
        },
        fileId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'file_id',
            allowNull: true,
            references: { model: 'docs_file', key: 'file_id' },
        },
        isLate: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'is_late',
            allowNull: false,
            defaultValue: false,
        },
        status: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'status',
            allowNull: false,
            defaultValue: "submitted",
        },
        marksAwarded: {
            type: sequelize_1.DataTypes.DECIMAL(6, 2),
            field: 'marks_awarded',
            allowNull: true,
        },
        penaltyMarks: {
            type: sequelize_1.DataTypes.DECIMAL(6, 2),
            field: 'penalty_marks',
            allowNull: false,
            defaultValue: 0,
        },
        finalMarks: {
            type: sequelize_1.DataTypes.DECIMAL(6, 2),
            field: 'final_marks',
            allowNull: true,
            autoIncrement: true,
        },
        feedback: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'feedback',
            allowNull: true,
        },
        gradedByStaffId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'graded_by_staff_id',
            allowNull: true,
            references: { model: 'hr_staff', key: 'staff_id' },
        },
        gradedAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'graded_at',
            allowNull: true,
        },
        returnedAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'returned_at',
            allowNull: true,
        },
        resubmitReason: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'resubmit_reason',
            allowNull: true,
        },
        similarityPct: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'similarity_pct',
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
        tableName: 'lms_assignment_submission',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        indexes: [
            { unique: true, fields: ['assignment_id', 'student_id', 'attempt_no'] }
        ]
    });
    return LmsAssignmentSubmissionEntity;
}
