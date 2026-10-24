import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type CommsNotificationAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  notificationId?: string
  appUserId: string
  notificationTemplateCode?: string | null
  channel: string
  title: string
  body: string
  payload?: unknown
  status?: string
  scheduledAt?: Date
  sentAt?: Date | null
  deliveredAt?: Date | null
  readAt?: Date | null
  retryCount?: number
  failureReason?: string | null
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type CommsNotificationCreationAttributes = Optional<CommsNotificationAttributes, "id" | "publicId" | "recordCode" | "notificationId" | "notificationTemplateCode" | "payload" | "status" | "scheduledAt" | "sentAt" | "deliveredAt" | "readAt" | "retryCount" | "failureReason" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class CommsNotificationEntity
  extends Model<CommsNotificationAttributes, CommsNotificationCreationAttributes>
  implements CommsNotificationAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare notificationId: string
  declare appUserId: string
  declare notificationTemplateCode: string | null
  declare channel: string
  declare title: string
  declare body: string
  declare payload: unknown
  declare status: string
  declare scheduledAt: Date
  declare sentAt: Date | null
  declare deliveredAt: Date | null
  declare readAt: Date | null
  declare retryCount: number
  declare failureReason: string | null
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initCommsNotificationEntity(sequelize: Sequelize): typeof CommsNotificationEntity {
  CommsNotificationEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('comms_notification')"),
      },
      notificationId: {
        type: DataTypes.TEXT,
        field: 'notification_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      appUserId: {
        type: DataTypes.TEXT,
        field: 'app_user_id',
        allowNull: false,
        references: { model: 'iam_app_user', key: 'app_user_id' },
      },
      notificationTemplateCode: {
        type: DataTypes.TEXT,
        field: 'notification_template_code',
        allowNull: true,
        references: { model: 'comms_notification_template', key: 'notification_template_code' },
        onUpdate: 'CASCADE',
      },
      channel: {
        type: DataTypes.TEXT,
        field: 'channel',
        allowNull: false,
      },
      title: {
        type: DataTypes.TEXT,
        field: 'title',
        allowNull: false,
      },
      body: {
        type: DataTypes.TEXT,
        field: 'body',
        allowNull: false,
      },
      payload: {
        type: DataTypes.JSONB,
        field: 'payload',
        allowNull: false,
        defaultValue: "{}",
      },
      status: {
        type: DataTypes.TEXT,
        field: 'status',
        allowNull: false,
        defaultValue: "queued",
      },
      scheduledAt: {
        type: DataTypes.DATE,
        field: 'scheduled_at',
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      sentAt: {
        type: DataTypes.DATE,
        field: 'sent_at',
        allowNull: true,
      },
      deliveredAt: {
        type: DataTypes.DATE,
        field: 'delivered_at',
        allowNull: true,
      },
      readAt: {
        type: DataTypes.DATE,
        field: 'read_at',
        allowNull: true,
      },
      retryCount: {
        type: DataTypes.SMALLINT,
        field: 'retry_count',
        allowNull: false,
        defaultValue: 0,
      },
      failureReason: {
        type: DataTypes.TEXT,
        field: 'failure_reason',
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
      tableName: 'comms_notification',
      timestamps: true,
      underscored: true,
      freezeTableName: true
    }
  )
  return CommsNotificationEntity
}
