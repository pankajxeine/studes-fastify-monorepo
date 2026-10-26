import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type IntegrationWebhookDeliveryAttributes = {
  recordCode?: string
  webhookDeliveryId: string | null
  webhookSubscriptionId: string
  eventId: string
  status?: string
  attempts?: number
  nextAttemptAt?: Date
  responseCode?: number | null
  responseMs?: number | null
  deliveredAt?: Date | null
  lastError?: string | null
}

export type IntegrationWebhookDeliveryCreationAttributes = Optional<IntegrationWebhookDeliveryAttributes, "recordCode" | "status" | "attempts" | "nextAttemptAt" | "responseCode" | "responseMs" | "deliveredAt" | "lastError">

export class IntegrationWebhookDeliveryEntity
  extends Model<IntegrationWebhookDeliveryAttributes, IntegrationWebhookDeliveryCreationAttributes>
  implements IntegrationWebhookDeliveryAttributes
{
  declare recordCode: string
  declare webhookDeliveryId: string | null
  declare webhookSubscriptionId: string
  declare eventId: string
  declare status: string
  declare attempts: number
  declare nextAttemptAt: Date
  declare responseCode: number | null
  declare responseMs: number | null
  declare deliveredAt: Date | null
  declare lastError: string | null
}

export function initIntegrationWebhookDeliveryEntity(sequelize: Sequelize): typeof IntegrationWebhookDeliveryEntity {
  IntegrationWebhookDeliveryEntity.init(
    {
      recordCode: {
        type: DataTypes.TEXT,
        field: 'record_code',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table (\r\n        'integration_webhook_delivery'\r\n    )"),
      },
      webhookDeliveryId: {
        type: DataTypes.TEXT,
        field: 'webhook_delivery_id',
        allowNull: true,
        primaryKey: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      webhookSubscriptionId: {
        type: DataTypes.TEXT,
        field: 'webhook_subscription_id',
        allowNull: false,
        references: { model: 'integration_webhook_subscription', key: 'webhook_subscription_id' },
        onDelete: 'CASCADE',
      },
      eventId: {
        type: DataTypes.TEXT,
        field: 'event_id',
        allowNull: false,
        references: { model: 'integration_outbox_event', key: 'event_id' },
        onDelete: 'CASCADE',
      },
      status: {
        type: DataTypes.STRING(10),
        field: 'status',
        allowNull: false,
        defaultValue: "pending",
      },
      attempts: {
        type: DataTypes.SMALLINT,
        field: 'attempts',
        allowNull: false,
        defaultValue: 0,
      },
      nextAttemptAt: {
        type: DataTypes.DATE,
        field: 'next_attempt_at',
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      responseCode: {
        type: DataTypes.SMALLINT,
        field: 'response_code',
        allowNull: true,
      },
      responseMs: {
        type: DataTypes.INTEGER,
        field: 'response_ms',
        allowNull: true,
      },
      deliveredAt: {
        type: DataTypes.DATE,
        field: 'delivered_at',
        allowNull: true,
      },
      lastError: {
        type: DataTypes.TEXT,
        field: 'last_error',
        allowNull: true,
      }
    },
    {
      sequelize,
      tableName: 'integration_webhook_delivery',
      timestamps: false,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['webhook_subscription_id', 'event_id'] }
      ]
    }
  )
  return IntegrationWebhookDeliveryEntity
}
