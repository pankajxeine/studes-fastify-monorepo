import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type EvntRoomBookingAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  roomBookingId?: string
  roomId: string
  eventId?: string | null
  purpose: string
  startsAt: Date
  endsAt: Date
  booking?: string | null
  expectedAttendees?: number | null
  bookedByUserId: string
  status?: string
  decidedByUserId?: string | null
  decidedAt?: Date | null
  decisionNote?: string | null
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type EvntRoomBookingCreationAttributes = Optional<EvntRoomBookingAttributes, "id" | "publicId" | "recordCode" | "roomBookingId" | "eventId" | "booking" | "expectedAttendees" | "status" | "decidedByUserId" | "decidedAt" | "decisionNote" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class EvntRoomBookingEntity
  extends Model<EvntRoomBookingAttributes, EvntRoomBookingCreationAttributes>
  implements EvntRoomBookingAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare roomBookingId: string
  declare roomId: string
  declare eventId: string | null
  declare purpose: string
  declare startsAt: Date
  declare endsAt: Date
  declare booking: string | null
  declare expectedAttendees: number | null
  declare bookedByUserId: string
  declare status: string
  declare decidedByUserId: string | null
  declare decidedAt: Date | null
  declare decisionNote: string | null
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initEvntRoomBookingEntity(sequelize: Sequelize): typeof EvntRoomBookingEntity {
  EvntRoomBookingEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('evnt_room_booking')"),
      },
      roomBookingId: {
        type: DataTypes.TEXT,
        field: 'room_booking_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      roomId: {
        type: DataTypes.TEXT,
        field: 'room_id',
        allowNull: false,
        references: { model: 'org_room', key: 'room_id' },
      },
      eventId: {
        type: DataTypes.TEXT,
        field: 'event_id',
        allowNull: true,
        references: { model: 'evnt_event', key: 'event_id' },
      },
      purpose: {
        type: DataTypes.TEXT,
        field: 'purpose',
        allowNull: false,
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
      booking: {
        type: DataTypes.TEXT,
        field: 'booking',
        allowNull: true,
        autoIncrement: true,
      },
      expectedAttendees: {
        type: DataTypes.INTEGER,
        field: 'expected_attendees',
        allowNull: true,
      },
      bookedByUserId: {
        type: DataTypes.TEXT,
        field: 'booked_by_user_id',
        allowNull: false,
        references: { model: 'iam_app_user', key: 'app_user_id' },
      },
      status: {
        type: DataTypes.TEXT,
        field: 'status',
        allowNull: false,
        defaultValue: "pending",
      },
      decidedByUserId: {
        type: DataTypes.TEXT,
        field: 'decided_by_user_id',
        allowNull: true,
        references: { model: 'iam_app_user', key: 'app_user_id' },
      },
      decidedAt: {
        type: DataTypes.DATE,
        field: 'decided_at',
        allowNull: true,
      },
      decisionNote: {
        type: DataTypes.TEXT,
        field: 'decision_note',
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
      tableName: 'evnt_room_booking',
      timestamps: true,
      underscored: true,
      freezeTableName: true
    }
  )
  return EvntRoomBookingEntity
}
