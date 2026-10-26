"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExamReportCardEntity = void 0;
exports.initExamReportCardEntity = initExamReportCardEntity;
const sequelize_1 = require("sequelize");
class ExamReportCardEntity extends sequelize_1.Model {
}
exports.ExamReportCardEntity = ExamReportCardEntity;
function initExamReportCardEntity(sequelize) {
    ExamReportCardEntity.init({
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
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table ('exam_report_card')"),
        },
        reportCardId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'report_card_id',
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
        studentEnrollmentId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'student_enrollment_id',
            allowNull: false,
            references: { model: 'sis_student_enrollment', key: 'student_enrollment_id' },
        },
        termId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'term_id',
            allowNull: false,
            references: { model: 'acad_term', key: 'term_id' },
        },
        examId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'exam_id',
            allowNull: true,
            references: { model: 'exam_exam', key: 'exam_id' },
        },
        kind: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'kind',
            allowNull: false,
            defaultValue: "term_end",
        },
        status: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'status',
            allowNull: false,
            defaultValue: "draft",
        },
        overallPercentage: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'overall_percentage',
            allowNull: true,
        },
        overallGrade: {
            type: sequelize_1.DataTypes.STRING(5),
            field: 'overall_grade',
            allowNull: true,
        },
        gpa: {
            type: sequelize_1.DataTypes.DECIMAL(4, 2),
            field: 'gpa',
            allowNull: true,
        },
        classRank: {
            type: sequelize_1.DataTypes.SMALLINT,
            field: 'class_rank',
            allowNull: true,
        },
        classSize: {
            type: sequelize_1.DataTypes.SMALLINT,
            field: 'class_size',
            allowNull: true,
        },
        attendancePct: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'attendance_pct',
            allowNull: true,
        },
        daysPresent: {
            type: sequelize_1.DataTypes.DECIMAL(5, 1),
            field: 'days_present',
            allowNull: true,
        },
        workingDays: {
            type: sequelize_1.DataTypes.SMALLINT,
            field: 'working_days',
            allowNull: true,
        },
        fileId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'file_id',
            allowNull: true,
            references: { model: 'docs_file', key: 'file_id' },
        },
        generatedAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'generated_at',
            allowNull: true,
        },
        publishedAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'published_at',
            allowNull: true,
        },
        publishedByUserId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'published_by_user_id',
            allowNull: true,
            references: { model: 'iam_app_user', key: 'app_user_id' },
        },
        withdrawnReason: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'withdrawn_reason',
            allowNull: true,
        },
        acknowledgedAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'acknowledged_at',
            allowNull: true,
        },
        acknowledgedByPersonId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'acknowledged_by_person_id',
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
        tableName: 'exam_report_card',
        timestamps: true,
        underscored: true,
        freezeTableName: true
    });
    return ExamReportCardEntity;
}
