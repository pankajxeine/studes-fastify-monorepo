import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type MeteringUsageEventAttributes = {
  recordCode?: string
  usageEventId: string
  tenantApplicationId: string
  meterId: string
  quantity: number
  occurredAt: Date
  receivedAt?: Date
  idempotencyKey: string
  source?: string | null
  attributes?: unknown | null
}

export type MeteringUsageEventCreationAttributes = Optional<MeteringUsageEventAttributes, "recordCode" | "receivedAt" | "source" | "attributes">

export class MeteringUsageEventEntity
  extends Model<MeteringUsageEventAttributes, MeteringUsageEventCreationAttributes>
  implements MeteringUsageEventAttributes
{
  declare recordCode: string
  declare usageEventId: string
  declare tenantApplicationId: string
  declare meterId: string
  declare quantity: number
  declare occurredAt: Date
  declare receivedAt: Date
  declare idempotencyKey: string
  declare source: string | null
  declare attributes: unknown | null
}

export function initMeteringUsageEventEntity(sequelize: Sequelize): typeof MeteringUsageEventEntity {
  MeteringUsageEventEntity.init(
    {
      recordCode: {
        type: DataTypes.TEXT,
        field: 'record_code',
        allowNull: false,
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('metering_usage_event')"),
      },
      usageEventId: {
        type: DataTypes.TEXT,
        field: 'usage_event_id',
        allowNull: false,
        primaryKey: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      tenantApplicationId: {
        type: DataTypes.TEXT,
        field: 'tenant_application_id',
        allowNull: false,
        references: { model: 'tenancy_tenant_application', key: 'tenant_application_id' },
      },
      meterId: {
        type: DataTypes.TEXT,
        field: 'meter_id',
        allowNull: false,
        references: { model: 'metering_meter', key: 'meter_id' },
      },
      quantity: {
        type: DataTypes.DECIMAL(20, 4),
        field: 'quantity',
        allowNull: false,
      },
      occurredAt: {
        type: DataTypes.DATE,
        field: 'occurred_at',
        allowNull: false,
        primaryKey: true,
      },
      receivedAt: {
        type: DataTypes.DATE,
        field: 'received_at',
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      idempotencyKey: {
        type: DataTypes.STRING(100),
        field: 'idempotency_key',
        allowNull: false,
      },
      source: {
        type: DataTypes.STRING(40),
        field: 'source',
        allowNull: true,
      },
      attributes: {
        type: DataTypes.JSONB,
        field: 'attributes',
        allowNull: true,
      }
    },
    {
      sequelize,
      tableName: 'metering_usage_event',
      timestamps: false,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['usage_event_id', 'occurred_at'] },
      { unique: true, fields: ['usage_event_id', 'occurred_at'] },
      { unique: true, fields: ['record_code', 'occurred_at'] }
      ]
    }
  )
  return MeteringUsageEventEntity
}
