"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExamAssessmentWeightEntity = void 0;
exports.initExamAssessmentWeightEntity = initExamAssessmentWeightEntity;
const sequelize_1 = require("sequelize");
class ExamAssessmentWeightEntity extends sequelize_1.Model {
}
exports.ExamAssessmentWeightEntity = ExamAssessmentWeightEntity;
function initExamAssessmentWeightEntity(sequelize) {
    ExamAssessmentWeightEntity.init({
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
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table ('exam_assessment_weight')"),
        },
        assessmentWeightId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'assessment_weight_id',
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
        assessmentTypeCode: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'assessment_type_code',
            allowNull: false,
            references: { model: 'exam_assessment_type', key: 'assessment_type_code' },
            onUpdate: 'CASCADE',
        },
        weightPct: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'weight_pct',
            allowNull: false,
        },
        bestOfCount: {
            type: sequelize_1.DataTypes.SMALLINT,
            field: 'best_of_count',
            allowNull: true,
        },
        isMandatory: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'is_mandatory',
            allowNull: false,
            defaultValue: true,
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
        tableName: 'exam_assessment_weight',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        indexes: [
            { unique: true, fields: ['course_offering_id', 'assessment_type_code'] }
        ]
    });
    return ExamAssessmentWeightEntity;
}
