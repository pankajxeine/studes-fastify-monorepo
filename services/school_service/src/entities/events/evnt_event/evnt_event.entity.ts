import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type EvntEventAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  eventId?: string
  campusId?: string | null
  title: string
  description?: string | null
  eventType: string
  startsAt: Date
  endsAt: Date
  isAllDay?: string
  venueRoomId?: string | null
  venueText?: string | null
  organizerStaffId?: string | null
  bannerFileId?: string | null
  isPublic?: string
  requiresRsvp?: string
  rsvpDeadlineAt?: Date | null
  capacity?: number | null
  status?: string
  cancelledReason?: string | null
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type EvntEventCreationAttributes = Optional<EvntEventAttributes, "id" | "publicId" | "recordCode" | "eventId" | "campusId" | "description" | "isAllDay" | "venueRoomId" | "venueText" | "organizerStaffId" | "bannerFileId" | "isPublic" | "requiresRsvp" | "rsvpDeadlineAt" | "capacity" | "status" | "cancelledReason" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class EvntEventEntity
  extends Model<EvntEventAttributes, EvntEventCreationAttributes>
  implements EvntEventAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare eventId: string
  declare campusId: string | null
  declare title: string
  declare description: string | null
  declare eventType: string
  declare startsAt: Date
  declare endsAt: Date
  declare isAllDay: string
  declare venueRoomId: string | null
  declare venueText: string | null
  declare organizerStaffId: string | null
  declare bannerFileId: string | null
  declare isPublic: string
  declare requiresRsvp: string
  declare rsvpDeadlineAt: Date | null
  declare capacity: number | null
  declare status: string
  declare cancelledReason: string | null
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initEvntEventEntity(sequelize: Sequelize): typeof EvntEventEntity {
  EvntEventEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('evnt_event')"),
      },
      eventId: {
        type: DataTypes.TEXT,
        field: 'event_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      campusId: {
        type: DataTypes.TEXT,
        field: 'campus_id',
        allowNull: true,
        references: { model: 'org_campus', key: 'campus_id' },
      },
      title: {
        type: DataTypes.TEXT,
        field: 'title',
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        field: 'description',
        allowNull: true,
      },
      eventType: {
        type: DataTypes.TEXT,
        field: 'event_type',
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
      isAllDay: {
        type: DataTypes.TEXT,
        field: 'is_all_day',
        allowNull: false,
        defaultValue: false,
      },
      venueRoomId: {
        type: DataTypes.TEXT,
        field: 'venue_room_id',
        allowNull: true,
        references: { model: 'org_room', key: 'room_id' },
      },
      venueText: {
        type: DataTypes.TEXT,
        field: 'venue_text',
        allowNull: true,
      },
      organizerStaffId: {
        type: DataTypes.TEXT,
        field: 'organizer_staff_id',
        allowNull: true,
        references: { model: 'hr_staff', key: 'staff_id' },
      },
      bannerFileId: {
        type: DataTypes.TEXT,
        field: 'banner_file_id',
        allowNull: true,
        references: { model: 'docs_file', key: 'file_id' },
      },
      isPublic: {
        type: DataTypes.TEXT,
        field: 'is_public',
        allowNull: false,
        defaultValue: false,
      },
      requiresRsvp: {
        type: DataTypes.TEXT,
        field: 'requires_rsvp',
        allowNull: false,
        defaultValue: false,
      },
      rsvpDeadlineAt: {
        type: DataTypes.DATE,
        field: 'rsvp_deadline_at',
        allowNull: true,
      },
      capacity: {
        type: DataTypes.INTEGER,
        field: 'capacity',
        allowNull: true,
      },
      status: {
        type: DataTypes.TEXT,
        field: 'status',
        allowNull: false,
        defaultValue: "scheduled",
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
      tableName: 'evnt_event',
      timestamps: true,
      underscored: true,
      freezeTableName: true
    }
  )
  return EvntEventEntity
}
