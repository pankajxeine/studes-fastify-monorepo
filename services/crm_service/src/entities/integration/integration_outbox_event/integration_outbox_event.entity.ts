import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type IntegrationOutboxEventAttributes = {
  recordCode?: string
  eventId: string | null
  aggregateType: string
  aggregateId: string
  eventType: string
  eventVersion?: number
  tenantId?: string | null
  payload: unknown
  headers?: unknown
  occurredAt?: Date
  publishedAt?: Date | null
  attempts?: number
  lastError?: string | null
}

export type IntegrationOutboxEventCreationAttributes = Optional<IntegrationOutboxEventAttributes, "recordCode" | "eventVersion" | "tenantId" | "headers" | "occurredAt" | "publishedAt" | "attempts" | "lastError">

export class IntegrationOutboxEventEntity
  extends Model<IntegrationOutboxEventAttributes, IntegrationOutboxEventCreationAttributes>
  implements IntegrationOutboxEventAttributes
{
  declare recordCode: string
  declare eventId: string | null
  declare aggregateType: string
  declare aggregateId: string
  declare eventType: string
  declare eventVersion: number
  declare tenantId: string | null
  declare payload: unknown
  declare headers: unknown
  declare occurredAt: Date
  declare publishedAt: Date | null
  declare attempts: number
  declare lastError: string | null
}

export function initIntegrationOutboxEventEntity(sequelize: Sequelize): typeof IntegrationOutboxEventEntity {
  IntegrationOutboxEventEntity.init(
    {
      recordCode: {
        type: DataTypes.TEXT,
        field: 'record_code',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('integration_outbox_event')"),
      },
      eventId: {
        type: DataTypes.TEXT,
        field: 'event_id',
        allowNull: true,
        primaryKey: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      aggregateType: {
        type: DataTypes.STRING(30),
        field: 'aggregate_type',
        allowNull: false,
      },
      aggregateId: {
        type: DataTypes.TEXT,
        field: 'aggregate_id',
        allowNull: false,
      },
      eventType: {
        type: DataTypes.STRING(80),
        field: 'event_type',
        allowNull: false,
      },
      eventVersion: {
        type: DataTypes.SMALLINT,
        field: 'event_version',
        allowNull: false,
        defaultValue: 1,
      },
      tenantId: {
        type: DataTypes.UUID,
        field: 'tenant_id',
        allowNull: true,
      },
      payload: {
        type: DataTypes.JSONB,
        field: 'payload',
        allowNull: false,
      },
      headers: {
        type: DataTypes.JSONB,
        field: 'headers',
        allowNull: false,
        defaultValue: "{}",
      },
      occurredAt: {
        type: DataTypes.DATE,
        field: 'occurred_at',
        allowNull: false,
        defaultValue: Sequelize.literal("clock_timestamp()"),
      },
      publishedAt: {
        type: DataTypes.DATE,
        field: 'published_at',
        allowNull: true,
      },
      attempts: {
        type: DataTypes.SMALLINT,
        field: 'attempts',
        allowNull: false,
        defaultValue: 0,
      },
      lastError: {
        type: DataTypes.TEXT,
        field: 'last_error',
        allowNull: true,
      }
    },
    {
      sequelize,
      tableName: 'integration_outbox_event',
      timestamps: false,
      underscored: true,
      freezeTableName: true
    }
  )
  return IntegrationOutboxEventEntity
}
