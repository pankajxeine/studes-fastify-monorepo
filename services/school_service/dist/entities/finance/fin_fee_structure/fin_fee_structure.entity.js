"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FinFeeStructureEntity = void 0;
exports.initFinFeeStructureEntity = initFinFeeStructureEntity;
const sequelize_1 = require("sequelize");
class FinFeeStructureEntity extends sequelize_1.Model {
}
exports.FinFeeStructureEntity = FinFeeStructureEntity;
function initFinFeeStructureEntity(sequelize) {
    FinFeeStructureEntity.init({
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
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table ('fin_fee_structure')"),
        },
        feeStructureId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'fee_structure_id',
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
        campusId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'campus_id',
            allowNull: false,
            references: { model: 'org_campus', key: 'campus_id' },
        },
        programId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'program_id',
            allowNull: false,
            references: { model: 'acad_program', key: 'program_id' },
        },
        gradeLevelId: {
            type: sequelize_1.DataTypes.UUID,
            field: 'grade_level_id',
            allowNull: true,
            references: { model: 'acad_grade_level', key: 'grade_level_id' },
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
        status: {
            type: sequelize_1.DataTypes.STRING(12),
            field: 'status',
            allowNull: false,
            defaultValue: "draft",
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
        tableName: 'fin_fee_structure',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        indexes: [
            { unique: true, fields: ['academic_year_id', 'code'] }
        ]
    });
    return FinFeeStructureEntity;
}
