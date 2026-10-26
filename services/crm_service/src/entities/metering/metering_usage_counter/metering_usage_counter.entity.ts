import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type MeteringUsageCounterAttributes = {
  recordCode?: string
  usageCounterId: string | null
  tenantApplicationId: string
  meterId: string
  periodStart: Date
  periodEnd: Date
  quantity?: number
  lastEventAt: Date
  updatedAt?: Date
}

export type MeteringUsageCounterCreationAttributes = Optional<MeteringUsageCounterAttributes, "recordCode" | "quantity" | "updatedAt">

export class MeteringUsageCounterEntity
  extends Model<MeteringUsageCounterAttributes, MeteringUsageCounterCreationAttributes>
  implements MeteringUsageCounterAttributes
{
  declare recordCode: string
  declare usageCounterId: string | null
  declare tenantApplicationId: string
  declare meterId: string
  declare periodStart: Date
  declare periodEnd: Date
  declare quantity: number
  declare lastEventAt: Date
  declare updatedAt: Date
}

export function initMeteringUsageCounterEntity(sequelize: Sequelize): typeof MeteringUsageCounterEntity {
  MeteringUsageCounterEntity.init(
    {
      recordCode: {
        type: DataTypes.TEXT,
        field: 'record_code',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('metering_usage_counter')"),
      },
      usageCounterId: {
        type: DataTypes.TEXT,
        field: 'usage_counter_id',
        allowNull: true,
        primaryKey: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      tenantApplicationId: {
        type: DataTypes.TEXT,
        field: 'tenant_application_id',
        allowNull: false,
        references: { model: 'tenancy_tenant_application', key: 'tenant_application_id' },
        onDelete: 'CASCADE',
      },
      meterId: {
        type: DataTypes.TEXT,
        field: 'meter_id',
        allowNull: false,
        references: { model: 'metering_meter', key: 'meter_id' },
      },
      periodStart: {
        type: DataTypes.DATE,
        field: 'period_start',
        allowNull: false,
      },
      periodEnd: {
        type: DataTypes.DATE,
        field: 'period_end',
        allowNull: false,
      },
      quantity: {
        type: DataTypes.DECIMAL(20, 4),
        field: 'quantity',
        allowNull: false,
        defaultValue: 0,
      },
      lastEventAt: {
        type: DataTypes.DATE,
        field: 'last_event_at',
        allowNull: false,
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
      tableName: 'metering_usage_counter',
      timestamps: false,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['tenant_application_id', 'meter_id', 'period_start'] }
      ]
    }
  )
  return MeteringUsageCounterEntity
}
