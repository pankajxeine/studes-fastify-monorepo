import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type CommsMessageThreadAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  messageThreadId?: string
  subject: string
  contextType?: string | null
  contextId?: string | null
  campusId?: string | null
  createdByUserId: string
  isClosed?: string
  closedAt?: Date | null
  lastMessageAt?: Date | null
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type CommsMessageThreadCreationAttributes = Optional<CommsMessageThreadAttributes, "id" | "publicId" | "recordCode" | "messageThreadId" | "contextType" | "contextId" | "campusId" | "isClosed" | "closedAt" | "lastMessageAt" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class CommsMessageThreadEntity
  extends Model<CommsMessageThreadAttributes, CommsMessageThreadCreationAttributes>
  implements CommsMessageThreadAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare messageThreadId: string
  declare subject: string
  declare contextType: string | null
  declare contextId: string | null
  declare campusId: string | null
  declare createdByUserId: string
  declare isClosed: string
  declare closedAt: Date | null
  declare lastMessageAt: Date | null
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initCommsMessageThreadEntity(sequelize: Sequelize): typeof CommsMessageThreadEntity {
  CommsMessageThreadEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('comms_message_thread')"),
      },
      messageThreadId: {
        type: DataTypes.TEXT,
        field: 'message_thread_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      subject: {
        type: DataTypes.TEXT,
        field: 'subject',
        allowNull: false,
      },
      contextType: {
        type: DataTypes.STRING(30),
        field: 'context_type',
        allowNull: true,
      },
      contextId: {
        type: DataTypes.UUID,
        field: 'context_id',
        allowNull: true,
      },
      campusId: {
        type: DataTypes.TEXT,
        field: 'campus_id',
        allowNull: true,
        references: { model: 'org_campus', key: 'campus_id' },
      },
      createdByUserId: {
        type: DataTypes.TEXT,
        field: 'created_by_user_id',
        allowNull: false,
        references: { model: 'iam_app_user', key: 'app_user_id' },
      },
      isClosed: {
        type: DataTypes.TEXT,
        field: 'is_closed',
        allowNull: false,
        defaultValue: false,
      },
      closedAt: {
        type: DataTypes.DATE,
        field: 'closed_at',
        allowNull: true,
      },
      lastMessageAt: {
        type: DataTypes.DATE,
        field: 'last_message_at',
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
      tableName: 'comms_message_thread',
      timestamps: true,
      underscored: true,
      freezeTableName: true
    }
  )
  return CommsMessageThreadEntity
}
