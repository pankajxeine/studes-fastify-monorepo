import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type NotifyNotificationAttributes = {
  recordCode?: string
  notificationId: string | null
  templateVersionId: string
  locale: string
  channel: string
  recipientAddress: string
  tenantId?: string | null
  relatedType?: string | null
  relatedId?: string | null
  payload: unknown
  status?: string
  priority?: number
  idempotencyKey: string
  scheduledAt?: Date
  sentAt?: Date | null
  deliveredAt?: Date | null
  createdAt?: Date
  updatedAt?: Date
}

export type NotifyNotificationCreationAttributes = Optional<NotifyNotificationAttributes, "recordCode" | "tenantId" | "relatedType" | "relatedId" | "status" | "priority" | "scheduledAt" | "sentAt" | "deliveredAt" | "createdAt" | "updatedAt">

export class NotifyNotificationEntity
  extends Model<NotifyNotificationAttributes, NotifyNotificationCreationAttributes>
  implements NotifyNotificationAttributes
{
  declare recordCode: string
  declare notificationId: string | null
  declare templateVersionId: string
  declare locale: string
  declare channel: string
  declare recipientAddress: string
  declare tenantId: string | null
  declare relatedType: string | null
  declare relatedId: string | null
  declare payload: unknown
  declare status: string
  declare priority: number
  declare idempotencyKey: string
  declare scheduledAt: Date
  declare sentAt: Date | null
  declare deliveredAt: Date | null
  declare createdAt: Date
  declare updatedAt: Date
}

export function initNotifyNotificationEntity(sequelize: Sequelize): typeof NotifyNotificationEntity {
  NotifyNotificationEntity.init(
    {
      recordCode: {
        type: DataTypes.TEXT,
        field: 'record_code',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('notify_notification')"),
      },
      notificationId: {
        type: DataTypes.TEXT,
        field: 'notification_id',
        allowNull: true,
        primaryKey: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      templateVersionId: {
        type: DataTypes.TEXT,
        field: 'template_version_id',
        allowNull: false,
        references: { model: 'notify_template_version', key: 'template_version_id' },
      },
      locale: {
        type: DataTypes.TEXT,
        field: 'locale',
        allowNull: false,
      },
      channel: {
        type: DataTypes.STRING(8),
        field: 'channel',
        allowNull: false,
      },
      recipientAddress: {
        type: DataTypes.TEXT,
        field: 'recipient_address',
        allowNull: false,
      },
      tenantId: {
        type: DataTypes.TEXT,
        field: 'tenant_id',
        allowNull: true,
        references: { model: 'tenancy_tenant', key: 'tenant_id' },
      },
      relatedType: {
        type: DataTypes.STRING(30),
        field: 'related_type',
        allowNull: true,
      },
      relatedId: {
        type: DataTypes.UUID,
        field: 'related_id',
        allowNull: true,
      },
      payload: {
        type: DataTypes.JSONB,
        field: 'payload',
        allowNull: false,
      },
      status: {
        type: DataTypes.STRING(10),
        field: 'status',
        allowNull: false,
        defaultValue: "queued",
      },
      priority: {
        type: DataTypes.SMALLINT,
        field: 'priority',
        allowNull: false,
        defaultValue: 5,
      },
      idempotencyKey: {
        type: DataTypes.STRING(150),
        field: 'idempotency_key',
        allowNull: false,
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
      createdAt: {
        type: DataTypes.DATE,
        field: 'created_at',
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: 'updated_at',
        allowNull: false,
        defaultValue: DataTypes.NOW,
      }
    },
    {
      sequelize,
      tableName: 'notify_notification',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['idempotency_key'] }
      ]
    }
  )
  return NotifyNotificationEntity
}
