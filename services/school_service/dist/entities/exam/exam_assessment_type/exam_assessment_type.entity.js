"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExamAssessmentTypeEntity = void 0;
exports.initExamAssessmentTypeEntity = initExamAssessmentTypeEntity;
const sequelize_1 = require("sequelize");
class ExamAssessmentTypeEntity extends sequelize_1.Model {
}
exports.ExamAssessmentTypeEntity = ExamAssessmentTypeEntity;
function initExamAssessmentTypeEntity(sequelize) {
    ExamAssessmentTypeEntity.init({
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
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table ('exam_assessment_type')"),
        },
        assessmentTypeCode: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'assessment_type_code',
            allowNull: true,
            unique: true,
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
        category: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'category',
            allowNull: false,
        },
        isScheduledExam: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'is_scheduled_exam',
            allowNull: false,
            defaultValue: true,
        },
        defaultMaxMarks: {
            type: sequelize_1.DataTypes.DECIMAL(6, 2),
            field: 'default_max_marks',
            allowNull: true,
        },
        sortOrder: {
            type: sequelize_1.DataTypes.SMALLINT,
            field: 'sort_order',
            allowNull: false,
            defaultValue: 0,
        },
        isActive: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'is_active',
            allowNull: false,
            defaultValue: true,
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
        tableName: 'exam_assessment_type',
        timestamps: true,
        underscored: true,
        freezeTableName: true
    });
    return ExamAssessmentTypeEntity;
}
