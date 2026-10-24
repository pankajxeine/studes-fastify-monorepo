import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type HealthHealthCheckupAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  healthCheckupId?: string
  personId: string
  campusId?: string | null
  checkupDate: string
  checkupType?: string
  heightCm?: number | null
  weightKg?: number | null
  bmi?: number | null
  visionLeft?: string | null
  visionRight?: string | null
  hearingNotes?: string | null
  dentalNotes?: string | null
  findings?: string | null
  recommendations?: string | null
  isReferralNeeded?: string
  checkedByStaffId?: string | null
  examinerName?: string | null
  fileId?: string | null
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type HealthHealthCheckupCreationAttributes = Optional<HealthHealthCheckupAttributes, "id" | "publicId" | "recordCode" | "healthCheckupId" | "campusId" | "checkupType" | "heightCm" | "weightKg" | "bmi" | "visionLeft" | "visionRight" | "hearingNotes" | "dentalNotes" | "findings" | "recommendations" | "isReferralNeeded" | "checkedByStaffId" | "examinerName" | "fileId" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class HealthHealthCheckupEntity
  extends Model<HealthHealthCheckupAttributes, HealthHealthCheckupCreationAttributes>
  implements HealthHealthCheckupAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare healthCheckupId: string
  declare personId: string
  declare campusId: string | null
  declare checkupDate: string
  declare checkupType: string
  declare heightCm: number | null
  declare weightKg: number | null
  declare bmi: number | null
  declare visionLeft: string | null
  declare visionRight: string | null
  declare hearingNotes: string | null
  declare dentalNotes: string | null
  declare findings: string | null
  declare recommendations: string | null
  declare isReferralNeeded: string
  declare checkedByStaffId: string | null
  declare examinerName: string | null
  declare fileId: string | null
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initHealthHealthCheckupEntity(sequelize: Sequelize): typeof HealthHealthCheckupEntity {
  HealthHealthCheckupEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('health_health_checkup')"),
      },
      healthCheckupId: {
        type: DataTypes.TEXT,
        field: 'health_checkup_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      personId: {
        type: DataTypes.TEXT,
        field: 'person_id',
        allowNull: false,
        references: { model: 'ppl_person', key: 'person_id' },
      },
      campusId: {
        type: DataTypes.TEXT,
        field: 'campus_id',
        allowNull: true,
        references: { model: 'org_campus', key: 'campus_id' },
      },
      checkupDate: {
        type: DataTypes.TEXT,
        field: 'checkup_date',
        allowNull: false,
      },
      checkupType: {
        type: DataTypes.STRING(20),
        field: 'checkup_type',
        allowNull: false,
        defaultValue: "annual",
      },
      heightCm: {
        type: DataTypes.DECIMAL(5, 1),
        field: 'height_cm',
        allowNull: true,
      },
      weightKg: {
        type: DataTypes.DECIMAL(5, 1),
        field: 'weight_kg',
        allowNull: true,
      },
      bmi: {
        type: DataTypes.DECIMAL(6, 2),
        field: 'bmi',
        allowNull: true,
        autoIncrement: true,
      },
      visionLeft: {
        type: DataTypes.STRING(10),
        field: 'vision_left',
        allowNull: true,
      },
      visionRight: {
        type: DataTypes.STRING(10),
        field: 'vision_right',
        allowNull: true,
      },
      hearingNotes: {
        type: DataTypes.TEXT,
        field: 'hearing_notes',
        allowNull: true,
      },
      dentalNotes: {
        type: DataTypes.TEXT,
        field: 'dental_notes',
        allowNull: true,
      },
      findings: {
        type: DataTypes.TEXT,
        field: 'findings',
        allowNull: true,
      },
      recommendations: {
        type: DataTypes.TEXT,
        field: 'recommendations',
        allowNull: true,
      },
      isReferralNeeded: {
        type: DataTypes.TEXT,
        field: 'is_referral_needed',
        allowNull: false,
        defaultValue: false,
      },
      checkedByStaffId: {
        type: DataTypes.TEXT,
        field: 'checked_by_staff_id',
        allowNull: true,
        references: { model: 'hr_staff', key: 'staff_id' },
      },
      examinerName: {
        type: DataTypes.TEXT,
        field: 'examiner_name',
        allowNull: true,
      },
      fileId: {
        type: DataTypes.TEXT,
        field: 'file_id',
        allowNull: true,
        references: { model: 'docs_file', key: 'file_id' },
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
      tableName: 'health_health_checkup',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['person_id', 'checkup_date', 'checkup_type'] }
      ]
    }
  )
  return HealthHealthCheckupEntity
}
