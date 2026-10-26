"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcadProgramEntity = void 0;
exports.initAcadProgramEntity = initAcadProgramEntity;
const sequelize_1 = require("sequelize");
class AcadProgramEntity extends sequelize_1.Model {
}
exports.AcadProgramEntity = AcadProgramEntity;
function initAcadProgramEntity(sequelize) {
    AcadProgramEntity.init({
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
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table ('acad_program')"),
        },
        programId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'program_id',
            allowNull: false,
            unique: true,
            defaultValue: sequelize_1.Sequelize.literal("gen_random_uuid ()"),
        },
        campusId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'campus_id',
            allowNull: false,
            references: { model: 'org_campus', key: 'campus_id' },
        },
        departmentId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'department_id',
            allowNull: true,
            references: { model: 'org_department', key: 'department_id' },
        },
        gradingSchemeId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'grading_scheme_id',
            allowNull: false,
            references: { model: 'acad_grading_scheme', key: 'grading_scheme_id' },
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
        level: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'level',
            allowNull: false,
        },
        isCreditBased: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'is_credit_based',
            allowNull: false,
            defaultValue: false,
        },
        awardTitle: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'award_title',
            allowNull: true,
        },
        durationTerms: {
            type: sequelize_1.DataTypes.SMALLINT,
            field: 'duration_terms',
            allowNull: true,
        },
        totalCreditsRequired: {
            type: sequelize_1.DataTypes.DECIMAL(5, 1),
            field: 'total_credits_required',
            allowNull: true,
        },
        minCreditsPerTerm: {
            type: sequelize_1.DataTypes.DECIMAL(4, 1),
            field: 'min_credits_per_term',
            allowNull: true,
        },
        maxCreditsPerTerm: {
            type: sequelize_1.DataTypes.DECIMAL(4, 1),
            field: 'max_credits_per_term',
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
        },
        deletedAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'deleted_at',
            allowNull: true,
        }
    }, {
        sequelize,
        tableName: 'acad_program',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        paranoid: true,
        deletedAt: 'deletedAt',
        indexes: [
            { unique: true, fields: ['code'] }
        ]
    });
    return AcadProgramEntity;
}
