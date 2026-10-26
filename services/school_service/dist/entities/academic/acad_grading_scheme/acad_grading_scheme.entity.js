"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcadGradingSchemeEntity = void 0;
exports.initAcadGradingSchemeEntity = initAcadGradingSchemeEntity;
const sequelize_1 = require("sequelize");
class AcadGradingSchemeEntity extends sequelize_1.Model {
}
exports.AcadGradingSchemeEntity = AcadGradingSchemeEntity;
function initAcadGradingSchemeEntity(sequelize) {
    AcadGradingSchemeEntity.init({
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
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table ('acad_grading_scheme')"),
        },
        gradingSchemeId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'grading_scheme_id',
            allowNull: false,
            unique: true,
            defaultValue: sequelize_1.Sequelize.literal("gen_random_uuid ()"),
        },
        code: {
            type: sequelize_1.DataTypes.STRING(20),
            field: 'code',
            allowNull: false,
        },
        name: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'name',
            allowNull: false,
        },
        gradingType: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'grading_type',
            allowNull: false,
        },
        passPercentage: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'pass_percentage',
            allowNull: false,
            defaultValue: 40,
        },
        maxGradePoint: {
            type: sequelize_1.DataTypes.DECIMAL(4, 2),
            field: 'max_grade_point',
            allowNull: true,
        },
        description: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'description',
            allowNull: true,
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
        tableName: 'acad_grading_scheme',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        indexes: [
            { unique: true, fields: ['code'] }
        ]
    });
    return AcadGradingSchemeEntity;
}
