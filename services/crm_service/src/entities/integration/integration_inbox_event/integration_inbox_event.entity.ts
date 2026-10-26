import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type IntegrationInboxEventAttributes = {
  recordCode?: string
  inboxEventId: string | null
  source: string
  messageId: string
  eventType?: string | null
  receivedAt?: Date
  processedAt?: Date | null
}

export type IntegrationInboxEventCreationAttributes = Optional<IntegrationInboxEventAttributes, "recordCode" | "eventType" | "receivedAt" | "processedAt">

export class IntegrationInboxEventEntity
  extends Model<IntegrationInboxEventAttributes, IntegrationInboxEventCreationAttributes>
  implements IntegrationInboxEventAttributes
{
  declare recordCode: string
  declare inboxEventId: string | null
  declare source: string
  declare messageId: string
  declare eventType: string | null
  declare receivedAt: Date
  declare processedAt: Date | null
}

export function initIntegrationInboxEventEntity(sequelize: Sequelize): typeof IntegrationInboxEventEntity {
  IntegrationInboxEventEntity.init(
    {
      recordCode: {
        type: DataTypes.TEXT,
        field: 'record_code',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('integration_inbox_event')"),
      },
      inboxEventId: {
        type: DataTypes.TEXT,
        field: 'inbox_event_id',
        allowNull: true,
        primaryKey: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      source: {
        type: DataTypes.STRING(40),
        field: 'source',
        allowNull: false,
      },
      messageId: {
        type: DataTypes.STRING(120),
        field: 'message_id',
        allowNull: false,
      },
      eventType: {
        type: DataTypes.STRING(80),
        field: 'event_type',
        allowNull: true,
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
      }
    },
    {
      sequelize,
      tableName: 'integration_inbox_event',
      timestamps: false,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['source', 'message_id'] }
      ]
    }
  )
  return IntegrationInboxEventEntity
}
