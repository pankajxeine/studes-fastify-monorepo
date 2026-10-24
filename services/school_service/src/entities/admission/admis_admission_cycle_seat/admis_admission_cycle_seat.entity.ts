import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type AdmisAdmissionCycleSeatAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  admissionCycleSeatId?: string
  admissionCycleId: string
  gradeLevelId: string
  seatsTotal: number
  seatsReserved?: number
  waitlistLimit?: number
  notes?: string | null
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type AdmisAdmissionCycleSeatCreationAttributes = Optional<AdmisAdmissionCycleSeatAttributes, "id" | "publicId" | "recordCode" | "admissionCycleSeatId" | "seatsReserved" | "waitlistLimit" | "notes" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class AdmisAdmissionCycleSeatEntity
  extends Model<AdmisAdmissionCycleSeatAttributes, AdmisAdmissionCycleSeatCreationAttributes>
  implements AdmisAdmissionCycleSeatAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare admissionCycleSeatId: string
  declare admissionCycleId: string
  declare gradeLevelId: string
  declare seatsTotal: number
  declare seatsReserved: number
  declare waitlistLimit: number
  declare notes: string | null
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initAdmisAdmissionCycleSeatEntity(sequelize: Sequelize): typeof AdmisAdmissionCycleSeatEntity {
  AdmisAdmissionCycleSeatEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('admis_admission_cycle_seat')"),
      },
      admissionCycleSeatId: {
        type: DataTypes.TEXT,
        field: 'admission_cycle_seat_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      admissionCycleId: {
        type: DataTypes.TEXT,
        field: 'admission_cycle_id',
        allowNull: false,
        references: { model: 'admis_admission_cycle', key: 'admission_cycle_id' },
        onDelete: 'CASCADE',
      },
      gradeLevelId: {
        type: DataTypes.TEXT,
        field: 'grade_level_id',
        allowNull: false,
        references: { model: 'acad_grade_level', key: 'grade_level_id' },
      },
      seatsTotal: {
        type: DataTypes.SMALLINT,
        field: 'seats_total',
        allowNull: false,
      },
      seatsReserved: {
        type: DataTypes.SMALLINT,
        field: 'seats_reserved',
        allowNull: false,
        defaultValue: 0,
      },
      waitlistLimit: {
        type: DataTypes.SMALLINT,
        field: 'waitlist_limit',
        allowNull: false,
        defaultValue: 0,
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
      tableName: 'admis_admission_cycle_seat',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['admission_cycle_id', 'grade_level_id'] }
      ]
    }
  )
  return AdmisAdmissionCycleSeatEntity
}
