"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcadGradingSchemeBandEntity = void 0;
exports.initAcadGradingSchemeBandEntity = initAcadGradingSchemeBandEntity;
const sequelize_1 = require("sequelize");
class AcadGradingSchemeBandEntity extends sequelize_1.Model {
}
exports.AcadGradingSchemeBandEntity = AcadGradingSchemeBandEntity;
function initAcadGradingSchemeBandEntity(sequelize) {
    AcadGradingSchemeBandEntity.init({
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
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table ('acad_grading_scheme_band')"),
        },
        gradingSchemeBandId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'grading_scheme_band_id',
            allowNull: false,
            unique: true,
            defaultValue: sequelize_1.Sequelize.literal("gen_random_uuid ()"),
        },
        gradingSchemeId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'grading_scheme_id',
            allowNull: false,
            references: { model: 'acad_grading_scheme', key: 'grading_scheme_id' },
            onDelete: 'CASCADE',
        },
        gradeLabel: {
            type: sequelize_1.DataTypes.STRING(5),
            field: 'grade_label',
            allowNull: false,
        },
        descriptor: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'descriptor',
            allowNull: true,
        },
        minPercentage: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'min_percentage',
            allowNull: false,
        },
        maxPercentage: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'max_percentage',
            allowNull: false,
        },
        percentageRange: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'percentage_range',
            allowNull: true,
            autoIncrement: true,
        },
        gradePoint: {
            type: sequelize_1.DataTypes.DECIMAL(3, 2),
            field: 'grade_point',
            allowNull: false,
            defaultValue: 0,
        },
        scaleGradePoint: {
            type: sequelize_1.DataTypes.DECIMAL(4, 2),
            field: 'scale_grade_point',
            allowNull: true,
        },
        isPassing: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'is_passing',
            allowNull: false,
            defaultValue: true,
        },
        sortOrder: {
            type: sequelize_1.DataTypes.SMALLINT,
            field: 'sort_order',
            allowNull: false,
            defaultValue: 0,
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
        tableName: 'acad_grading_scheme_band',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        indexes: [
            { unique: true, fields: ['grading_scheme_id', 'grade_label'] }
        ]
    });
    return AcadGradingSchemeBandEntity;
}
