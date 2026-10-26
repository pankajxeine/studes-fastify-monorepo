"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExamCourseResultEntity = void 0;
exports.initExamCourseResultEntity = initExamCourseResultEntity;
const sequelize_1 = require("sequelize");
class ExamCourseResultEntity extends sequelize_1.Model {
}
exports.ExamCourseResultEntity = ExamCourseResultEntity;
function initExamCourseResultEntity(sequelize) {
    ExamCourseResultEntity.init({
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
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table ('exam_course_result')"),
        },
        courseResultId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'course_result_id',
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
        courseOfferingId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'course_offering_id',
            allowNull: false,
            references: { model: 'acad_course_offering', key: 'course_offering_id' },
        },
        termId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'term_id',
            allowNull: false,
            references: { model: 'acad_term', key: 'term_id' },
        },
        percentage: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'percentage',
            allowNull: true,
        },
        letterGrade: {
            type: sequelize_1.DataTypes.STRING(5),
            field: 'letter_grade',
            allowNull: true,
        },
        gradePoint: {
            type: sequelize_1.DataTypes.DECIMAL(3, 2),
            field: 'grade_point',
            allowNull: true,
        },
        creditsAttempted: {
            type: sequelize_1.DataTypes.DECIMAL(4, 1),
            field: 'credits_attempted',
            allowNull: true,
        },
        creditsEarned: {
            type: sequelize_1.DataTypes.DECIMAL(4, 1),
            field: 'credits_earned',
            allowNull: true,
        },
        qualityPoints: {
            type: sequelize_1.DataTypes.DECIMAL(6, 2),
            field: 'quality_points',
            allowNull: true,
            autoIncrement: true,
        },
        result: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'result',
            allowNull: true,
        },
        status: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'status',
            allowNull: false,
            defaultValue: "provisional",
        },
        isPublished: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'is_published',
            allowNull: true,
            autoIncrement: true,
        },
        classRank: {
            type: sequelize_1.DataTypes.SMALLINT,
            field: 'class_rank',
            allowNull: true,
        },
        computedAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'computed_at',
            allowNull: false,
            defaultValue: sequelize_1.DataTypes.NOW,
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
        tableName: 'exam_course_result',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        indexes: [
            { unique: true, fields: ['student_id', 'course_offering_id'] }
        ]
    });
    return ExamCourseResultEntity;
}
