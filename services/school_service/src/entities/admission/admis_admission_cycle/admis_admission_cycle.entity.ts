import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type AdmisAdmissionCycleAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  admissionCycleId?: string
  academicYearId: string
  campusId: string
  programId: string
  code: string
  name: string
  opensOn: string
  closesOn: string
  applicationWindow?: string | null
  status?: string
  applicationFeeAmount?: string
  offerValidityDays?: number
  description?: string | null
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type AdmisAdmissionCycleCreationAttributes = Optional<AdmisAdmissionCycleAttributes, "id" | "publicId" | "recordCode" | "admissionCycleId" | "applicationWindow" | "status" | "applicationFeeAmount" | "offerValidityDays" | "description" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class AdmisAdmissionCycleEntity
  extends Model<AdmisAdmissionCycleAttributes, AdmisAdmissionCycleCreationAttributes>
  implements AdmisAdmissionCycleAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare admissionCycleId: string
  declare academicYearId: string
  declare campusId: string
  declare programId: string
  declare code: string
  declare name: string
  declare opensOn: string
  declare closesOn: string
  declare applicationWindow: string | null
  declare status: string
  declare applicationFeeAmount: string
  declare offerValidityDays: number
  declare description: string | null
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initAdmisAdmissionCycleEntity(sequelize: Sequelize): typeof AdmisAdmissionCycleEntity {
  AdmisAdmissionCycleEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('admis_admission_cycle')"),
      },
      admissionCycleId: {
        type: DataTypes.TEXT,
        field: 'admission_cycle_id',
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
      opensOn: {
        type: DataTypes.TEXT,
        field: 'opens_on',
        allowNull: false,
      },
      closesOn: {
        type: DataTypes.TEXT,
        field: 'closes_on',
        allowNull: false,
      },
      applicationWindow: {
        type: DataTypes.TEXT,
        field: 'application_window',
        allowNull: true,
        autoIncrement: true,
      },
      status: {
        type: DataTypes.TEXT,
        field: 'status',
        allowNull: false,
        defaultValue: "planned",
      },
      applicationFeeAmount: {
        type: DataTypes.TEXT,
        field: 'application_fee_amount',
        allowNull: false,
        defaultValue: 0,
      },
      offerValidityDays: {
        type: DataTypes.SMALLINT,
        field: 'offer_validity_days',
        allowNull: false,
        defaultValue: 14,
      },
      description: {
        type: DataTypes.TEXT,
        field: 'description',
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
      tableName: 'admis_admission_cycle',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['code'] }
      ]
    }
  )
  return AdmisAdmissionCycleEntity
}
