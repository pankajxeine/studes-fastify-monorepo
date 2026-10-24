import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type EvntPtmSlotAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  ptmSlotId?: string
  eventId: string
  staffId: string
  roomId?: string | null
  startsAt: Date
  endsAt: Date
  slot?: string | null
  meetingMode?: string
  studentId?: string | null
  bookedByGuardianId?: string | null
  bookedAt?: Date | null
  status?: string
  meetingNotes?: string | null
  cancelledReason?: string | null
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type EvntPtmSlotCreationAttributes = Optional<EvntPtmSlotAttributes, "id" | "publicId" | "recordCode" | "ptmSlotId" | "roomId" | "slot" | "meetingMode" | "studentId" | "bookedByGuardianId" | "bookedAt" | "status" | "meetingNotes" | "cancelledReason" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class EvntPtmSlotEntity
  extends Model<EvntPtmSlotAttributes, EvntPtmSlotCreationAttributes>
  implements EvntPtmSlotAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare ptmSlotId: string
  declare eventId: string
  declare staffId: string
  declare roomId: string | null
  declare startsAt: Date
  declare endsAt: Date
  declare slot: string | null
  declare meetingMode: string
  declare studentId: string | null
  declare bookedByGuardianId: string | null
  declare bookedAt: Date | null
  declare status: string
  declare meetingNotes: string | null
  declare cancelledReason: string | null
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initEvntPtmSlotEntity(sequelize: Sequelize): typeof EvntPtmSlotEntity {
  EvntPtmSlotEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('evnt_ptm_slot')"),
      },
      ptmSlotId: {
        type: DataTypes.TEXT,
        field: 'ptm_slot_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      eventId: {
        type: DataTypes.TEXT,
        field: 'event_id',
        allowNull: false,
        references: { model: 'evnt_event', key: 'event_id' },
        onDelete: 'CASCADE',
      },
      staffId: {
        type: DataTypes.TEXT,
        field: 'staff_id',
        allowNull: false,
        references: { model: 'hr_staff', key: 'staff_id' },
      },
      roomId: {
        type: DataTypes.TEXT,
        field: 'room_id',
        allowNull: true,
        references: { model: 'org_room', key: 'room_id' },
      },
      startsAt: {
        type: DataTypes.DATE,
        field: 'starts_at',
        allowNull: false,
      },
      endsAt: {
        type: DataTypes.DATE,
        field: 'ends_at',
        allowNull: false,
      },
      slot: {
        type: DataTypes.TEXT,
        field: 'slot',
        allowNull: true,
        autoIncrement: true,
      },
      meetingMode: {
        type: DataTypes.STRING(10),
        field: 'meeting_mode',
        allowNull: false,
        defaultValue: "in_person",
      },
      studentId: {
        type: DataTypes.TEXT,
        field: 'student_id',
        allowNull: true,
        references: { model: 'sis_student', key: 'student_id' },
      },
      bookedByGuardianId: {
        type: DataTypes.TEXT,
        field: 'booked_by_guardian_id',
        allowNull: true,
        references: { model: 'ppl_guardian', key: 'guardian_id' },
      },
      bookedAt: {
        type: DataTypes.DATE,
        field: 'booked_at',
        allowNull: true,
      },
      status: {
        type: DataTypes.TEXT,
        field: 'status',
        allowNull: false,
        defaultValue: "available",
      },
      meetingNotes: {
        type: DataTypes.TEXT,
        field: 'meeting_notes',
        allowNull: true,
      },
      cancelledReason: {
        type: DataTypes.TEXT,
        field: 'cancelled_reason',
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
      tableName: 'evnt_ptm_slot',
      timestamps: true,
      underscored: true,
      freezeTableName: true
    }
  )
  return EvntPtmSlotEntity
}
