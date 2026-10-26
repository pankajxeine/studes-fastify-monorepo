import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type PaymentGatewayWebhookAttributes = {
  recordCode?: string
  gatewayWebhookId: string | null
  gateway: string
  eventId: string
  eventType: string
  payload: unknown
  signatureValid: string
  receivedAt?: Date
  processedAt?: Date | null
  error?: string | null
}

export type PaymentGatewayWebhookCreationAttributes = Optional<PaymentGatewayWebhookAttributes, "recordCode" | "receivedAt" | "processedAt" | "error">

export class PaymentGatewayWebhookEntity
  extends Model<PaymentGatewayWebhookAttributes, PaymentGatewayWebhookCreationAttributes>
  implements PaymentGatewayWebhookAttributes
{
  declare recordCode: string
  declare gatewayWebhookId: string | null
  declare gateway: string
  declare eventId: string
  declare eventType: string
  declare payload: unknown
  declare signatureValid: string
  declare receivedAt: Date
  declare processedAt: Date | null
  declare error: string | null
}

export function initPaymentGatewayWebhookEntity(sequelize: Sequelize): typeof PaymentGatewayWebhookEntity {
  PaymentGatewayWebhookEntity.init(
    {
      recordCode: {
        type: DataTypes.TEXT,
        field: 'record_code',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('payment_gateway_webhook')"),
      },
      gatewayWebhookId: {
        type: DataTypes.TEXT,
        field: 'gateway_webhook_id',
        allowNull: true,
        primaryKey: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      gateway: {
        type: DataTypes.STRING(20),
        field: 'gateway',
        allowNull: false,
      },
      eventId: {
        type: DataTypes.STRING(100),
        field: 'event_id',
        allowNull: false,
      },
      eventType: {
        type: DataTypes.STRING(80),
        field: 'event_type',
        allowNull: false,
      },
      payload: {
        type: DataTypes.JSONB,
        field: 'payload',
        allowNull: false,
      },
      signatureValid: {
        type: DataTypes.TEXT,
        field: 'signature_valid',
        allowNull: false,
      },
      receivedAt: {
        type: DataTypes.DATE,
        field: 'received_at',
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      processedAt: {
        type: DataTypes.DATE,
        field: 'processed_at',
        allowNull: true,
      },
      error: {
        type: DataTypes.TEXT,
        field: 'error',
        allowNull: true,
      }
    },
    {
      sequelize,
      tableName: 'payment_gateway_webhook',
      timestamps: false,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['gateway', 'event_id'] }
      ]
    }
  )
  return PaymentGatewayWebhookEntity
}
