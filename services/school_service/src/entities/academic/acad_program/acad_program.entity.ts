import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type AcadProgramAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  programId?: string
  campusId: string
  departmentId?: string | null
  gradingSchemeId: string
  code: string
  name: string
  level: string
  isCreditBased?: string
  awardTitle?: string | null
  durationTerms?: number | null
  totalCreditsRequired?: number | null
  minCreditsPerTerm?: number | null
  maxCreditsPerTerm?: number | null
  description?: string | null
  isActive?: string
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
  deletedAt?: Date | null
}

export type AcadProgramCreationAttributes = Optional<AcadProgramAttributes, "id" | "publicId" | "recordCode" | "programId" | "departmentId" | "isCreditBased" | "awardTitle" | "durationTerms" | "totalCreditsRequired" | "minCreditsPerTerm" | "maxCreditsPerTerm" | "description" | "isActive" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy" | "deletedAt">

export class AcadProgramEntity
  extends Model<AcadProgramAttributes, AcadProgramCreationAttributes>
  implements AcadProgramAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare programId: string
  declare campusId: string
  declare departmentId: string | null
  declare gradingSchemeId: string
  declare code: string
  declare name: string
  declare level: string
  declare isCreditBased: string
  declare awardTitle: string | null
  declare durationTerms: number | null
  declare totalCreditsRequired: number | null
  declare minCreditsPerTerm: number | null
  declare maxCreditsPerTerm: number | null
  declare description: string | null
  declare isActive: string
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
  declare deletedAt: Date | null
}

export function initAcadProgramEntity(sequelize: Sequelize): typeof AcadProgramEntity {
  AcadProgramEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('acad_program')"),
      },
      programId: {
        type: DataTypes.TEXT,
        field: 'program_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      campusId: {
        type: DataTypes.TEXT,
        field: 'campus_id',
        allowNull: false,
        references: { model: 'org_campus', key: 'campus_id' },
      },
      departmentId: {
        type: DataTypes.TEXT,
        field: 'department_id',
        allowNull: true,
        references: { model: 'org_department', key: 'department_id' },
      },
      gradingSchemeId: {
        type: DataTypes.TEXT,
        field: 'grading_scheme_id',
        allowNull: false,
        references: { model: 'acad_grading_scheme', key: 'grading_scheme_id' },
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
      level: {
        type: DataTypes.TEXT,
        field: 'level',
        allowNull: false,
      },
      isCreditBased: {
        type: DataTypes.TEXT,
        field: 'is_credit_based',
        allowNull: false,
        defaultValue: false,
      },
      awardTitle: {
        type: DataTypes.TEXT,
        field: 'award_title',
        allowNull: true,
      },
      durationTerms: {
        type: DataTypes.SMALLINT,
        field: 'duration_terms',
        allowNull: true,
      },
      totalCreditsRequired: {
        type: DataTypes.DECIMAL(5, 1),
        field: 'total_credits_required',
        allowNull: true,
      },
      minCreditsPerTerm: {
        type: DataTypes.DECIMAL(4, 1),
        field: 'min_credits_per_term',
        allowNull: true,
      },
      maxCreditsPerTerm: {
        type: DataTypes.DECIMAL(4, 1),
        field: 'max_credits_per_term',
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
      },
      deletedAt: {
        type: DataTypes.DATE,
        field: 'deleted_at',
        allowNull: true,
      }
    },
    {
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
    }
  )
  return AcadProgramEntity
}
