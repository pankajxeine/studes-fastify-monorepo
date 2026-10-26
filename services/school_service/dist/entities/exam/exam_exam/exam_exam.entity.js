"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExamExamEntity = void 0;
exports.initExamExamEntity = initExamExamEntity;
const sequelize_1 = require("sequelize");
class ExamExamEntity extends sequelize_1.Model {
}
exports.ExamExamEntity = ExamExamEntity;
function initExamExamEntity(sequelize) {
    ExamExamEntity.init({
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
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table ('exam_exam')"),
        },
        examId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'exam_id',
            allowNull: false,
            unique: true,
            defaultValue: sequelize_1.Sequelize.literal("gen_random_uuid ()"),
        },
        academicYearId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'academic_year_id',
            allowNull: false,
            references: { model: 'acad_academic_year', key: 'academic_year_id' },
        },
        termId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'term_id',
            allowNull: false,
            references: { model: 'acad_term', key: 'term_id' },
        },
        campusId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'campus_id',
            allowNull: false,
            references: { model: 'org_campus', key: 'campus_id' },
        },
        assessmentTypeCode: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'assessment_type_code',
            allowNull: false,
            references: { model: 'exam_assessment_type', key: 'assessment_type_code' },
            onUpdate: 'CASCADE',
        },
        code: {
            type: sequelize_1.DataTypes.STRING(30),
            field: 'code',
            allowNull: false,
        },
        name: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'name',
            allowNull: false,
        },
        description: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'description',
            allowNull: true,
        },
        startDate: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'start_date',
            allowNull: false,
        },
        endDate: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'end_date',
            allowNull: false,
        },
        examWindow: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'exam_window',
            allowNull: true,
            autoIncrement: true,
        },
        status: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'status',
            allowNull: false,
            defaultValue: "draft",
        },
        marksEntryDueOn: {
            type: sequelize_1.DataTypes.DATEONLY,
            field: 'marks_entry_due_on',
            allowNull: true,
        },
        resultsPlannedOn: {
            type: sequelize_1.DataTypes.DATEONLY,
            field: 'results_planned_on',
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
        tableName: 'exam_exam',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        indexes: [
            { unique: true, fields: ['code'] }
        ]
    });
    return ExamExamEntity;
}
