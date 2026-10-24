import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type FinFeeStructureAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  feeStructureId?: string
  academicYearId: string
  campusId: string
  programId: string
  gradeLevelId?: string | null
  code: string
  name: string
  description?: string | null
  status?: string
  publishedAt?: Date | null
  publishedByUserId?: string | null
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type FinFeeStructureCreationAttributes = Optional<FinFeeStructureAttributes, "id" | "publicId" | "recordCode" | "feeStructureId" | "gradeLevelId" | "description" | "status" | "publishedAt" | "publishedByUserId" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class FinFeeStructureEntity
  extends Model<FinFeeStructureAttributes, FinFeeStructureCreationAttributes>
  implements FinFeeStructureAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare feeStructureId: string
  declare academicYearId: string
  declare campusId: string
  declare programId: string
  declare gradeLevelId: string | null
  declare code: string
  declare name: string
  declare description: string | null
  declare status: string
  declare publishedAt: Date | null
  declare publishedByUserId: string | null
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initFinFeeStructureEntity(sequelize: Sequelize): typeof FinFeeStructureEntity {
  FinFeeStructureEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('fin_fee_structure')"),
      },
      feeStructureId: {
        type: DataTypes.TEXT,
        field: 'fee_structure_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      academicYearId: {
        type: DataTypes.TEXT,
        field: 'academic_year_id',
        allowNull: false,
        references: { model: 'acad_academic_year', key: 'academic_year_id' },
      },
      campusId: {
        type: DataTypes.TEXT,
        field: 'campus_id',
        allowNull: false,
        references: { model: 'org_campus', key: 'campus_id' },
      },
      programId: {
        type: DataTypes.TEXT,
        field: 'program_id',
        allowNull: false,
        references: { model: 'acad_program', key: 'program_id' },
      },
      gradeLevelId: {
        type: DataTypes.UUID,
        field: 'grade_level_id',
        allowNull: true,
        references: { model: 'acad_grade_level', key: 'grade_level_id' },
      },
      code: {
        type: DataTypes.STRING(30),
        field: 'code',
        allowNull: false,
      },
      name: {
        type: DataTypes.TEXT,
        field: 'name',
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        field: 'description',
        allowNull: true,
      },
      status: {
        type: DataTypes.STRING(12),
        field: 'status',
        allowNull: false,
        defaultValue: "draft",
      },
      publishedAt: {
        type: DataTypes.DATE,
        field: 'published_at',
        allowNull: true,
      },
      publishedByUserId: {
        type: DataTypes.TEXT,
        field: 'published_by_user_id',
        allowNull: true,
        references: { model: 'iam_app_user', key: 'app_user_id' },
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
      tableName: 'fin_fee_structure',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['academic_year_id', 'code'] }
      ]
    }
  )
  return FinFeeStructureEntity
}
