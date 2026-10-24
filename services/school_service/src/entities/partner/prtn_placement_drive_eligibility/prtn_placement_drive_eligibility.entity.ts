import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type PrtnPlacementDriveEligibilityAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  placementDriveEligibilityId?: string
  placementDriveId: string
  programId: string
  gradeLevelId?: string | null
  minCgpa?: number | null
  notes?: string | null
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type PrtnPlacementDriveEligibilityCreationAttributes = Optional<PrtnPlacementDriveEligibilityAttributes, "id" | "publicId" | "recordCode" | "placementDriveEligibilityId" | "gradeLevelId" | "minCgpa" | "notes" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class PrtnPlacementDriveEligibilityEntity
  extends Model<PrtnPlacementDriveEligibilityAttributes, PrtnPlacementDriveEligibilityCreationAttributes>
  implements PrtnPlacementDriveEligibilityAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare placementDriveEligibilityId: string
  declare placementDriveId: string
  declare programId: string
  declare gradeLevelId: string | null
  declare minCgpa: number | null
  declare notes: string | null
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initPrtnPlacementDriveEligibilityEntity(sequelize: Sequelize): typeof PrtnPlacementDriveEligibilityEntity {
  PrtnPlacementDriveEligibilityEntity.init(
    {
      id: {
        type: DataTypes.BIGINT,
        field: 'id',
        allowNull: true,
        primaryKey: true,
        autoIncrement: true,
      },
      publicId: {
        type: DataTypes.TEXT,
        field: 'public_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      recordCode: {
        type: DataTypes.TEXT,
        field: 'record_code',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table (\r\n        'prtn_placement_drive_eligibility'\r\n    )"),
      },
      placementDriveEligibilityId: {
        type: DataTypes.TEXT,
        field: 'placement_drive_eligibility_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      placementDriveId: {
        type: DataTypes.TEXT,
        field: 'placement_drive_id',
        allowNull: false,
        references: { model: 'prtn_placement_drive', key: 'placement_drive_id' },
        onDelete: 'CASCADE',
      },
      programId: {
        type: DataTypes.TEXT,
        field: 'program_id',
        allowNull: false,
        references: { model: 'acad_program', key: 'program_id' },
      },
      gradeLevelId: {
        type: DataTypes.TEXT,
        field: 'grade_level_id',
        allowNull: true,
        references: { model: 'acad_grade_level', key: 'grade_level_id' },
      },
      minCgpa: {
        type: DataTypes.DECIMAL(3, 2),
        field: 'min_cgpa',
        allowNull: true,
      },
      notes: {
        type: DataTypes.TEXT,
        field: 'notes',
        allowNull: true,
      },
      createdAt: {
        type: DataTypes.DATE,
        field: 'created_at',
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      createdBy: {
        type: DataTypes.UUID,
        field: 'created_by',
        allowNull: true,
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: 'updated_at',
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      updatedBy: {
        type: DataTypes.UUID,
        field: 'updated_by',
        allowNull: true,
      }
    },
    {
      sequelize,
      tableName: 'prtn_placement_drive_eligibility',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['placement_drive_id', 'program_id', 'grade_level_id'] }
      ]
    }
  )
  return PrtnPlacementDriveEligibilityEntity
}
