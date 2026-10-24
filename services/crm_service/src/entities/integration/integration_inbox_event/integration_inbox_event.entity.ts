import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type IntegrationInboxEventAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  source: string
  messageId: string
  eventType?: string | null
  receivedAt?: Date
  processedAt?: Date | null
  UNIQUE?: string | null
}

export type IntegrationInboxEventCreationAttributes = Optional<IntegrationInboxEventAttributes, "id" | "publicId" | "recordCode" | "eventType" | "receivedAt" | "processedAt" | "UNIQUE">

export class IntegrationInboxEventEntity
  extends Model<IntegrationInboxEventAttributes, IntegrationInboxEventCreationAttributes>
  implements IntegrationInboxEventAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare source: string
  declare messageId: string
  declare eventType: string | null
  declare receivedAt: Date
  declare processedAt: Date | null
  declare UNIQUE: string | null
}

export function initIntegrationInboxEventEntity(sequelize: Sequelize): typeof IntegrationInboxEventEntity {
  IntegrationInboxEventEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('integration_inbox_event')"),
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
      },
      UNIQUE: {
        type: DataTypes.TEXT,
        field: 'UNIQUE',
        allowNull: true,
      }
    },
    {
      sequelize,
      tableName: 'integration_inbox_event',
      timestamps: false,
      underscored: true,
      freezeTableName: true
    }
  )
  return IntegrationInboxEventEntity
}
