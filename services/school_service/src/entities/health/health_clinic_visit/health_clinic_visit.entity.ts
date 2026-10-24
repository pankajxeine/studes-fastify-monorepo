import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type HealthClinicVisitAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  clinicVisitId?: string
  personId: string
  campusId: string
  clinicRoomId?: string | null
  visitAt?: Date
  complaint: string
  temperatureC?: number | null
  pulseBpm?: number | null
  diagnosis?: string | null
  treatment?: string | null
  medicationGiven?: string | null
  attendedByStaffId?: string | null
  outcome?: string | null
  releasedAt?: Date | null
  guardianNotifiedAt?: Date | null
  followUpOn?: Date | null
  notes?: string | null
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type HealthClinicVisitCreationAttributes = Optional<HealthClinicVisitAttributes, "id" | "publicId" | "recordCode" | "clinicVisitId" | "clinicRoomId" | "visitAt" | "temperatureC" | "pulseBpm" | "diagnosis" | "treatment" | "medicationGiven" | "attendedByStaffId" | "outcome" | "releasedAt" | "guardianNotifiedAt" | "followUpOn" | "notes" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class HealthClinicVisitEntity
  extends Model<HealthClinicVisitAttributes, HealthClinicVisitCreationAttributes>
  implements HealthClinicVisitAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare clinicVisitId: string
  declare personId: string
  declare campusId: string
  declare clinicRoomId: string | null
  declare visitAt: Date
  declare complaint: string
  declare temperatureC: number | null
  declare pulseBpm: number | null
  declare diagnosis: string | null
  declare treatment: string | null
  declare medicationGiven: string | null
  declare attendedByStaffId: string | null
  declare outcome: string | null
  declare releasedAt: Date | null
  declare guardianNotifiedAt: Date | null
  declare followUpOn: Date | null
  declare notes: string | null
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initHealthClinicVisitEntity(sequelize: Sequelize): typeof HealthClinicVisitEntity {
  HealthClinicVisitEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('health_clinic_visit')"),
      },
      clinicVisitId: {
        type: DataTypes.TEXT,
        field: 'clinic_visit_id',
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
        allowNull: false,
        references: { model: 'org_campus', key: 'campus_id' },
      },
      clinicRoomId: {
        type: DataTypes.TEXT,
        field: 'clinic_room_id',
        allowNull: true,
        references: { model: 'org_room', key: 'room_id' },
      },
      visitAt: {
        type: DataTypes.DATE,
        field: 'visit_at',
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      complaint: {
        type: DataTypes.TEXT,
        field: 'complaint',
        allowNull: false,
      },
      temperatureC: {
        type: DataTypes.DECIMAL(4, 1),
        field: 'temperature_c',
        allowNull: true,
      },
      pulseBpm: {
        type: DataTypes.SMALLINT,
        field: 'pulse_bpm',
        allowNull: true,
      },
      diagnosis: {
        type: DataTypes.TEXT,
        field: 'diagnosis',
        allowNull: true,
      },
      treatment: {
        type: DataTypes.TEXT,
        field: 'treatment',
        allowNull: true,
      },
      medicationGiven: {
        type: DataTypes.TEXT,
        field: 'medication_given',
        allowNull: true,
      },
      attendedByStaffId: {
        type: DataTypes.TEXT,
        field: 'attended_by_staff_id',
        allowNull: true,
        references: { model: 'hr_staff', key: 'staff_id' },
      },
      outcome: {
        type: DataTypes.STRING(20),
        field: 'outcome',
        allowNull: true,
      },
      releasedAt: {
        type: DataTypes.DATE,
        field: 'released_at',
        allowNull: true,
      },
      guardianNotifiedAt: {
        type: DataTypes.DATE,
        field: 'guardian_notified_at',
        allowNull: true,
      },
      followUpOn: {
        type: DataTypes.DATEONLY,
        field: 'follow_up_on',
        allowNull: true,
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
      tableName: 'health_clinic_visit',
      timestamps: true,
      underscored: true,
      freezeTableName: true
    }
  )
  return HealthClinicVisitEntity
}
