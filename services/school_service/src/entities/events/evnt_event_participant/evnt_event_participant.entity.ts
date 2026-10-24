import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type EvntEventParticipantAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  eventParticipantId?: string
  eventId: string
  personId: string
  participantRole?: string
  rsvpStatus?: string
  respondedAt?: Date | null
  guestCount?: number
  checkedInAt?: Date | null
  notes?: string | null
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type EvntEventParticipantCreationAttributes = Optional<EvntEventParticipantAttributes, "id" | "publicId" | "recordCode" | "eventParticipantId" | "participantRole" | "rsvpStatus" | "respondedAt" | "guestCount" | "checkedInAt" | "notes" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class EvntEventParticipantEntity
  extends Model<EvntEventParticipantAttributes, EvntEventParticipantCreationAttributes>
  implements EvntEventParticipantAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare eventParticipantId: string
  declare eventId: string
  declare personId: string
  declare participantRole: string
  declare rsvpStatus: string
  declare respondedAt: Date | null
  declare guestCount: number
  declare checkedInAt: Date | null
  declare notes: string | null
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initEvntEventParticipantEntity(sequelize: Sequelize): typeof EvntEventParticipantEntity {
  EvntEventParticipantEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('evnt_event_participant')"),
      },
      eventParticipantId: {
        type: DataTypes.TEXT,
        field: 'event_participant_id',
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
      personId: {
        type: DataTypes.TEXT,
        field: 'person_id',
        allowNull: false,
        references: { model: 'ppl_person', key: 'person_id' },
      },
      participantRole: {
        type: DataTypes.STRING(20),
        field: 'participant_role',
        allowNull: false,
        defaultValue: "attendee",
      },
      rsvpStatus: {
        type: DataTypes.TEXT,
        field: 'rsvp_status',
        allowNull: false,
        defaultValue: "invited",
      },
      respondedAt: {
        type: DataTypes.DATE,
        field: 'responded_at',
        allowNull: true,
      },
      guestCount: {
        type: DataTypes.SMALLINT,
        field: 'guest_count',
        allowNull: false,
        defaultValue: 0,
      },
      checkedInAt: {
        type: DataTypes.DATE,
        field: 'checked_in_at',
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
      tableName: 'evnt_event_participant',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['event_id', 'person_id'] }
      ]
    }
  )
  return EvntEventParticipantEntity
}
