import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type AcadGradeLevelAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  gradeLevelId?: string
  programId: string
  code: string
  name: string
  sequenceNo: number
  minEntryAgeYears?: number | null
  isTerminal?: string
  isActive?: string
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type AcadGradeLevelCreationAttributes = Optional<AcadGradeLevelAttributes, "id" | "publicId" | "recordCode" | "gradeLevelId" | "minEntryAgeYears" | "isTerminal" | "isActive" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class AcadGradeLevelEntity
  extends Model<AcadGradeLevelAttributes, AcadGradeLevelCreationAttributes>
  implements AcadGradeLevelAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare gradeLevelId: string
  declare programId: string
  declare code: string
  declare name: string
  declare sequenceNo: number
  declare minEntryAgeYears: number | null
  declare isTerminal: string
  declare isActive: string
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initAcadGradeLevelEntity(sequelize: Sequelize): typeof AcadGradeLevelEntity {
  AcadGradeLevelEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('acad_grade_level')"),
      },
      gradeLevelId: {
        type: DataTypes.TEXT,
        field: 'grade_level_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      programId: {
        type: DataTypes.TEXT,
        field: 'program_id',
        allowNull: false,
        references: { model: 'acad_program', key: 'program_id' },
      },
      code: {
        type: DataTypes.STRING(20),
        field: 'code',
        allowNull: false,
      },
      name: {
        type: DataTypes.TEXT,
        field: 'name',
        allowNull: false,
      },
      sequenceNo: {
        type: DataTypes.SMALLINT,
        field: 'sequence_no',
        allowNull: false,
      },
      minEntryAgeYears: {
        type: DataTypes.SMALLINT,
        field: 'min_entry_age_years',
        allowNull: true,
      },
      isTerminal: {
        type: DataTypes.TEXT,
        field: 'is_terminal',
        allowNull: false,
        defaultValue: false,
      },
      isActive: {
        type: DataTypes.TEXT,
        field: 'is_active',
        allowNull: false,
        defaultValue: true,
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
      tableName: 'acad_grade_level',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['code'] },
      { unique: true, fields: ['program_id', 'sequence_no'] },
      { unique: true, fields: ['grade_level_id', 'program_id'] }
      ]
    }
  )
  return AcadGradeLevelEntity
}
