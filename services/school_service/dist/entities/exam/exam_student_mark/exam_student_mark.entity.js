"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExamStudentMarkEntity = void 0;
exports.initExamStudentMarkEntity = initExamStudentMarkEntity;
const sequelize_1 = require("sequelize");
class ExamStudentMarkEntity extends sequelize_1.Model {
}
exports.ExamStudentMarkEntity = ExamStudentMarkEntity;
function initExamStudentMarkEntity(sequelize) {
    ExamStudentMarkEntity.init({
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
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table ('exam_student_mark')"),
        },
        studentMarkId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'student_mark_id',
            allowNull: false,
            unique: true,
            defaultValue: sequelize_1.Sequelize.literal("gen_random_uuid ()"),
        },
        examScheduleId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'exam_schedule_id',
            allowNull: false,
            references: { model: 'exam_exam_schedule', key: 'exam_schedule_id' },
        },
        studentId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'student_id',
            allowNull: false,
            references: { model: 'sis_student', key: 'student_id' },
        },
        marksObtained: {
            type: sequelize_1.DataTypes.DECIMAL(6, 2),
            field: 'marks_obtained',
            allowNull: true,
        },
        isAbsent: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'is_absent',
            allowNull: false,
            defaultValue: false,
        },
        isExempt: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'is_exempt',
            allowNull: false,
            defaultValue: false,
        },
        percentage: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'percentage',
            allowNull: true,
        },
        gradeLabel: {
            type: sequelize_1.DataTypes.STRING(5),
            field: 'grade_label',
            allowNull: true,
        },
        enteredByStaffId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'entered_by_staff_id',
            allowNull: false,
            references: { model: 'hr_staff', key: 'staff_id' },
        },
        enteredAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'entered_at',
            allowNull: false,
            defaultValue: sequelize_1.DataTypes.NOW,
        },
        originalMarks: {
            type: sequelize_1.DataTypes.DECIMAL(6, 2),
            field: 'original_marks',
            allowNull: true,
        },
        moderationReason: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'moderation_reason',
            allowNull: true,
        },
        moderatedAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'moderated_at',
            allowNull: true,
        },
        remarks: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'remarks',
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
        tableName: 'exam_student_mark',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        indexes: [
            { unique: true, fields: ['exam_schedule_id', 'student_id'] }
        ]
    });
    return ExamStudentMarkEntity;
}
