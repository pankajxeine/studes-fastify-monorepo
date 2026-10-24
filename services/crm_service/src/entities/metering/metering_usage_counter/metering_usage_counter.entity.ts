import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type MeteringUsageCounterAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  tenantApplicationId: string
  meterId: string
  periodStart: Date
  periodEnd: Date
  quantity?: number
  lastEventAt: Date
  updatedAt?: Date
  UNIQUE?: string | null
}

export type MeteringUsageCounterCreationAttributes = Optional<MeteringUsageCounterAttributes, "id" | "publicId" | "recordCode" | "quantity" | "updatedAt" | "UNIQUE">

export class MeteringUsageCounterEntity
  extends Model<MeteringUsageCounterAttributes, MeteringUsageCounterCreationAttributes>
  implements MeteringUsageCounterAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare tenantApplicationId: string
  declare meterId: string
  declare periodStart: Date
  declare periodEnd: Date
  declare quantity: number
  declare lastEventAt: Date
  declare updatedAt: Date
  declare UNIQUE: string | null
}

export function initMeteringUsageCounterEntity(sequelize: Sequelize): typeof MeteringUsageCounterEntity {
  MeteringUsageCounterEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('metering_usage_counter')"),
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
      },
      UNIQUE: {
        type: DataTypes.TEXT,
        field: 'UNIQUE',
        allowNull: true,
      }
    },
    {
      sequelize,
      tableName: 'metering_usage_counter',
      timestamps: false,
      underscored: true,
      freezeTableName: true
    }
  )
  return MeteringUsageCounterEntity
}
