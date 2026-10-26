"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrtnPlacementDriveEligibilityEntity = void 0;
exports.initPrtnPlacementDriveEligibilityEntity = initPrtnPlacementDriveEligibilityEntity;
const sequelize_1 = require("sequelize");
class PrtnPlacementDriveEligibilityEntity extends sequelize_1.Model {
}
exports.PrtnPlacementDriveEligibilityEntity = PrtnPlacementDriveEligibilityEntity;
function initPrtnPlacementDriveEligibilityEntity(sequelize) {
    PrtnPlacementDriveEligibilityEntity.init({
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
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table (\r\n        'prtn_placement_drive_eligibility'\r\n    )"),
        },
        placementDriveEligibilityId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'placement_drive_eligibility_id',
            allowNull: false,
            unique: true,
            defaultValue: sequelize_1.Sequelize.literal("gen_random_uuid ()"),
        },
        placementDriveId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'placement_drive_id',
            allowNull: false,
            references: { model: 'prtn_placement_drive', key: 'placement_drive_id' },
            onDelete: 'CASCADE',
        },
        programId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'program_id',
            allowNull: false,
            references: { model: 'acad_program', key: 'program_id' },
        },
        gradeLevelId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'grade_level_id',
            allowNull: true,
            references: { model: 'acad_grade_level', key: 'grade_level_id' },
        },
        minCgpa: {
            type: sequelize_1.DataTypes.DECIMAL(3, 2),
            field: 'min_cgpa',
            allowNull: true,
        },
        notes: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'notes',
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
        tableName: 'prtn_placement_drive_eligibility',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        indexes: [
            { unique: true, fields: ['placement_drive_id', 'program_id', 'grade_level_id'] }
        ]
    });
    return PrtnPlacementDriveEligibilityEntity;
}
