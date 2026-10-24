import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type AcadGradingSchemeAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  gradingSchemeId?: string
  code: string
  name: string
  gradingType: string
  passPercentage?: string
  maxGradePoint?: number | null
  description?: string | null
  isActive?: string
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type AcadGradingSchemeCreationAttributes = Optional<AcadGradingSchemeAttributes, "id" | "publicId" | "recordCode" | "gradingSchemeId" | "passPercentage" | "maxGradePoint" | "description" | "isActive" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class AcadGradingSchemeEntity
  extends Model<AcadGradingSchemeAttributes, AcadGradingSchemeCreationAttributes>
  implements AcadGradingSchemeAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare gradingSchemeId: string
  declare code: string
  declare name: string
  declare gradingType: string
  declare passPercentage: string
  declare maxGradePoint: number | null
  declare description: string | null
  declare isActive: string
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initAcadGradingSchemeEntity(sequelize: Sequelize): typeof AcadGradingSchemeEntity {
  AcadGradingSchemeEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('acad_grading_scheme')"),
      },
      gradingSchemeId: {
        type: DataTypes.TEXT,
        field: 'grading_scheme_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
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
      gradingType: {
        type: DataTypes.TEXT,
        field: 'grading_type',
        allowNull: false,
      },
      passPercentage: {
        type: DataTypes.TEXT,
        field: 'pass_percentage',
        allowNull: false,
        defaultValue: 40,
      },
      maxGradePoint: {
        type: DataTypes.DECIMAL(4, 2),
        field: 'max_grade_point',
        allowNull: true,
      },
      description: {
        type: DataTypes.TEXT,
        field: 'description',
        allowNull: true,
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
      tableName: 'acad_grading_scheme',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['code'] }
      ]
    }
  )
  return AcadGradingSchemeEntity
}
