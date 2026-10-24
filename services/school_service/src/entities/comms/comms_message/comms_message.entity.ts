import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type CommsMessageAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  messageId?: string
  messageThreadId: string
  senderUserId: string
  body: string
  fileId?: string | null
  sentAt?: Date
  editedAt?: Date | null
  deletedAt?: Date | null
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type CommsMessageCreationAttributes = Optional<CommsMessageAttributes, "id" | "publicId" | "recordCode" | "messageId" | "fileId" | "sentAt" | "editedAt" | "deletedAt" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class CommsMessageEntity
  extends Model<CommsMessageAttributes, CommsMessageCreationAttributes>
  implements CommsMessageAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare messageId: string
  declare messageThreadId: string
  declare senderUserId: string
  declare body: string
  declare fileId: string | null
  declare sentAt: Date
  declare editedAt: Date | null
  declare deletedAt: Date | null
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initCommsMessageEntity(sequelize: Sequelize): typeof CommsMessageEntity {
  CommsMessageEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('comms_message')"),
      },
      messageId: {
        type: DataTypes.TEXT,
        field: 'message_id',
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
      senderUserId: {
        type: DataTypes.TEXT,
        field: 'sender_user_id',
        allowNull: false,
        references: { model: 'iam_app_user', key: 'app_user_id' },
      },
      body: {
        type: DataTypes.TEXT,
        field: 'body',
        allowNull: false,
      },
      fileId: {
        type: DataTypes.TEXT,
        field: 'file_id',
        allowNull: true,
        references: { model: 'docs_file', key: 'file_id' },
      },
      sentAt: {
        type: DataTypes.DATE,
        field: 'sent_at',
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      editedAt: {
        type: DataTypes.DATE,
        field: 'edited_at',
        allowNull: true,
      },
      deletedAt: {
        type: DataTypes.DATE,
        field: 'deleted_at',
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
      tableName: 'comms_message',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: true,
      deletedAt: 'deletedAt'
    }
  )
  return CommsMessageEntity
}
