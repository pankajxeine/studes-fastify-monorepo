import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type AcadGradingSchemeBandAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  gradingSchemeBandId?: string
  gradingSchemeId: string
  gradeLabel: string
  descriptor?: string | null
  minPercentage: string
  maxPercentage: string
  percentageRange?: string | null
  gradePoint?: number
  scaleGradePoint?: number | null
  isPassing?: string
  sortOrder?: number
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type AcadGradingSchemeBandCreationAttributes = Optional<AcadGradingSchemeBandAttributes, "id" | "publicId" | "recordCode" | "gradingSchemeBandId" | "descriptor" | "percentageRange" | "gradePoint" | "scaleGradePoint" | "isPassing" | "sortOrder" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class AcadGradingSchemeBandEntity
  extends Model<AcadGradingSchemeBandAttributes, AcadGradingSchemeBandCreationAttributes>
  implements AcadGradingSchemeBandAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare gradingSchemeBandId: string
  declare gradingSchemeId: string
  declare gradeLabel: string
  declare descriptor: string | null
  declare minPercentage: string
  declare maxPercentage: string
  declare percentageRange: string | null
  declare gradePoint: number
  declare scaleGradePoint: number | null
  declare isPassing: string
  declare sortOrder: number
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initAcadGradingSchemeBandEntity(sequelize: Sequelize): typeof AcadGradingSchemeBandEntity {
  AcadGradingSchemeBandEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('acad_grading_scheme_band')"),
      },
      gradingSchemeBandId: {
        type: DataTypes.TEXT,
        field: 'grading_scheme_band_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      gradingSchemeId: {
        type: DataTypes.TEXT,
        field: 'grading_scheme_id',
        allowNull: false,
        references: { model: 'acad_grading_scheme', key: 'grading_scheme_id' },
        onDelete: 'CASCADE',
      },
      gradeLabel: {
        type: DataTypes.STRING(5),
        field: 'grade_label',
        allowNull: false,
      },
      descriptor: {
        type: DataTypes.TEXT,
        field: 'descriptor',
        allowNull: true,
      },
      minPercentage: {
        type: DataTypes.TEXT,
        field: 'min_percentage',
        allowNull: false,
      },
      maxPercentage: {
        type: DataTypes.TEXT,
        field: 'max_percentage',
        allowNull: false,
      },
      percentageRange: {
        type: DataTypes.TEXT,
        field: 'percentage_range',
        allowNull: true,
        autoIncrement: true,
      },
      gradePoint: {
        type: DataTypes.DECIMAL(3, 2),
        field: 'grade_point',
        allowNull: false,
        defaultValue: 0,
      },
      scaleGradePoint: {
        type: DataTypes.DECIMAL(4, 2),
        field: 'scale_grade_point',
        allowNull: true,
      },
      isPassing: {
        type: DataTypes.TEXT,
        field: 'is_passing',
        allowNull: false,
        defaultValue: true,
      },
      sortOrder: {
        type: DataTypes.SMALLINT,
        field: 'sort_order',
        allowNull: false,
        defaultValue: 0,
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
      tableName: 'acad_grading_scheme_band',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['grading_scheme_id', 'grade_label'] }
      ]
    }
  )
  return AcadGradingSchemeBandEntity
}
