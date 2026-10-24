import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type CommsThreadParticipantAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  threadParticipantId?: string
  messageThreadId: string
  appUserId: string
  joinedAt?: Date
  leftAt?: Date | null
  lastReadAt?: Date | null
  isMuted?: string
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type CommsThreadParticipantCreationAttributes = Optional<CommsThreadParticipantAttributes, "id" | "publicId" | "recordCode" | "threadParticipantId" | "joinedAt" | "leftAt" | "lastReadAt" | "isMuted" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class CommsThreadParticipantEntity
  extends Model<CommsThreadParticipantAttributes, CommsThreadParticipantCreationAttributes>
  implements CommsThreadParticipantAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare threadParticipantId: string
  declare messageThreadId: string
  declare appUserId: string
  declare joinedAt: Date
  declare leftAt: Date | null
  declare lastReadAt: Date | null
  declare isMuted: string
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initCommsThreadParticipantEntity(sequelize: Sequelize): typeof CommsThreadParticipantEntity {
  CommsThreadParticipantEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('comms_thread_participant')"),
      },
      threadParticipantId: {
        type: DataTypes.TEXT,
        field: 'thread_participant_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      messageThreadId: {
        type: DataTypes.TEXT,
        field: 'message_thread_id',
        allowNull: false,
        references: { model: 'comms_message_thread', key: 'message_thread_id' },
        onDelete: 'CASCADE',
      },
      appUserId: {
        type: DataTypes.TEXT,
        field: 'app_user_id',
        allowNull: false,
        references: { model: 'iam_app_user', key: 'app_user_id' },
      },
      joinedAt: {
        type: DataTypes.DATE,
        field: 'joined_at',
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      leftAt: {
        type: DataTypes.DATE,
        field: 'left_at',
        allowNull: true,
      },
      lastReadAt: {
        type: DataTypes.DATE,
        field: 'last_read_at',
        allowNull: true,
      },
      isMuted: {
        type: DataTypes.TEXT,
        field: 'is_muted',
        allowNull: false,
        defaultValue: false,
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
      tableName: 'comms_thread_participant',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['message_thread_id', 'app_user_id'] }
      ]
    }
  )
  return CommsThreadParticipantEntity
}
