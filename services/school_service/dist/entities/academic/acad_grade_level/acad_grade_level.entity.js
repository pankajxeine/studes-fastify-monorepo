"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcadGradeLevelEntity = void 0;
exports.initAcadGradeLevelEntity = initAcadGradeLevelEntity;
const sequelize_1 = require("sequelize");
class AcadGradeLevelEntity extends sequelize_1.Model {
}
exports.AcadGradeLevelEntity = AcadGradeLevelEntity;
function initAcadGradeLevelEntity(sequelize) {
    AcadGradeLevelEntity.init({
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
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table ('acad_grade_level')"),
        },
        gradeLevelId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'grade_level_id',
            allowNull: false,
            unique: true,
            defaultValue: sequelize_1.Sequelize.literal("gen_random_uuid ()"),
        },
        programId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'program_id',
            allowNull: false,
            references: { model: 'acad_program', key: 'program_id' },
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
        sequenceNo: {
            type: sequelize_1.DataTypes.SMALLINT,
            field: 'sequence_no',
            allowNull: false,
        },
        minEntryAgeYears: {
            type: sequelize_1.DataTypes.SMALLINT,
            field: 'min_entry_age_years',
            allowNull: true,
        },
        isTerminal: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'is_terminal',
            allowNull: false,
            defaultValue: false,
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
        tableName: 'acad_grade_level',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        indexes: [
            { unique: true, fields: ['code'] },
            { unique: true, fields: ['program_id', 'sequence_no'] },
            { unique: true, fields: ['grade_level_id', 'program_id'] }
        ]
    });
    return AcadGradeLevelEntity;
}
