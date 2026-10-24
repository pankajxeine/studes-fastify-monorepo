import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type HealthImmunizationAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  immunizationId?: string
  personId: string
  vaccineName: string
  doseNo?: number
  administeredOn: string
  nextDueOn?: Date | null
  provider?: string | null
  batchNo?: string | null
  fileId?: string | null
  verifiedByStaffId?: string | null
  notes?: string | null
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type HealthImmunizationCreationAttributes = Optional<HealthImmunizationAttributes, "id" | "publicId" | "recordCode" | "immunizationId" | "doseNo" | "nextDueOn" | "provider" | "batchNo" | "fileId" | "verifiedByStaffId" | "notes" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class HealthImmunizationEntity
  extends Model<HealthImmunizationAttributes, HealthImmunizationCreationAttributes>
  implements HealthImmunizationAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare immunizationId: string
  declare personId: string
  declare vaccineName: string
  declare doseNo: number
  declare administeredOn: string
  declare nextDueOn: Date | null
  declare provider: string | null
  declare batchNo: string | null
  declare fileId: string | null
  declare verifiedByStaffId: string | null
  declare notes: string | null
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initHealthImmunizationEntity(sequelize: Sequelize): typeof HealthImmunizationEntity {
  HealthImmunizationEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('health_immunization')"),
      },
      immunizationId: {
        type: DataTypes.TEXT,
        field: 'immunization_id',
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
      vaccineName: {
        type: DataTypes.TEXT,
        field: 'vaccine_name',
        allowNull: false,
      },
      doseNo: {
        type: DataTypes.SMALLINT,
        field: 'dose_no',
        allowNull: false,
        defaultValue: 1,
      },
      administeredOn: {
        type: DataTypes.TEXT,
        field: 'administered_on',
        allowNull: false,
      },
      nextDueOn: {
        type: DataTypes.DATEONLY,
        field: 'next_due_on',
        allowNull: true,
      },
      provider: {
        type: DataTypes.TEXT,
        field: 'provider',
        allowNull: true,
      },
      batchNo: {
        type: DataTypes.STRING(40),
        field: 'batch_no',
        allowNull: true,
      },
      fileId: {
        type: DataTypes.TEXT,
        field: 'file_id',
        allowNull: true,
        references: { model: 'docs_file', key: 'file_id' },
      },
      verifiedByStaffId: {
        type: DataTypes.TEXT,
        field: 'verified_by_staff_id',
        allowNull: true,
        references: { model: 'hr_staff', key: 'staff_id' },
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
      tableName: 'health_immunization',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['person_id', 'vaccine_name', 'dose_no'] }
      ]
    }
  )
  return HealthImmunizationEntity
}
