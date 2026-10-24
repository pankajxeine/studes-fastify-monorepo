import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type FinScholarshipAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  scholarshipId?: string
  academicYearId: string
  campusId?: string | null
  code: string
  name: string
  sponsorName?: string | null
  description?: string | null
  discountKind?: string
  discountValue: number
  maxAmount?: string | null
  budgetAmount?: string | null
  awardedAmount?: string
  maxAwards?: number | null
  eligibilityCriteria?: string | null
  applicationDeadline?: Date | null
  status?: string
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type FinScholarshipCreationAttributes = Optional<FinScholarshipAttributes, "id" | "publicId" | "recordCode" | "scholarshipId" | "campusId" | "sponsorName" | "description" | "discountKind" | "maxAmount" | "budgetAmount" | "awardedAmount" | "maxAwards" | "eligibilityCriteria" | "applicationDeadline" | "status" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class FinScholarshipEntity
  extends Model<FinScholarshipAttributes, FinScholarshipCreationAttributes>
  implements FinScholarshipAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare scholarshipId: string
  declare academicYearId: string
  declare campusId: string | null
  declare code: string
  declare name: string
  declare sponsorName: string | null
  declare description: string | null
  declare discountKind: string
  declare discountValue: number
  declare maxAmount: string | null
  declare budgetAmount: string | null
  declare awardedAmount: string
  declare maxAwards: number | null
  declare eligibilityCriteria: string | null
  declare applicationDeadline: Date | null
  declare status: string
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initFinScholarshipEntity(sequelize: Sequelize): typeof FinScholarshipEntity {
  FinScholarshipEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('fin_scholarship')"),
      },
      scholarshipId: {
        type: DataTypes.TEXT,
        field: 'scholarship_id',
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
        allowNull: true,
        references: { model: 'org_campus', key: 'campus_id' },
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
      sponsorName: {
        type: DataTypes.TEXT,
        field: 'sponsor_name',
        allowNull: true,
      },
      description: {
        type: DataTypes.TEXT,
        field: 'description',
        allowNull: true,
      },
      discountKind: {
        type: DataTypes.TEXT,
        field: 'discount_kind',
        allowNull: false,
        defaultValue: "percent",
      },
      discountValue: {
        type: DataTypes.DECIMAL(12, 2),
        field: 'discount_value',
        allowNull: false,
      },
      maxAmount: {
        type: DataTypes.TEXT,
        field: 'max_amount',
        allowNull: true,
      },
      budgetAmount: {
        type: DataTypes.TEXT,
        field: 'budget_amount',
        allowNull: true,
      },
      awardedAmount: {
        type: DataTypes.TEXT,
        field: 'awarded_amount',
        allowNull: false,
        defaultValue: 0,
      },
      maxAwards: {
        type: DataTypes.SMALLINT,
        field: 'max_awards',
        allowNull: true,
      },
      eligibilityCriteria: {
        type: DataTypes.TEXT,
        field: 'eligibility_criteria',
        allowNull: true,
      },
      applicationDeadline: {
        type: DataTypes.DATEONLY,
        field: 'application_deadline',
        allowNull: true,
      },
      status: {
        type: DataTypes.STRING(12),
        field: 'status',
        allowNull: false,
        defaultValue: "draft",
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
      tableName: 'fin_scholarship',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['academic_year_id', 'code'] }
      ]
    }
  )
  return FinScholarshipEntity
}
