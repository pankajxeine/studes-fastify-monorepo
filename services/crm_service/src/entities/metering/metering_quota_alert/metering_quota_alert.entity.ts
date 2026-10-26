import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type MeteringQuotaAlertAttributes = {
  recordCode?: string
  quotaAlertId: string | null
  tenantApplicationId: string
  meterId: string
  periodStart: Date
  thresholdPercent: number
  usedQuantity: number
  limitQuantity: number
  triggeredAt?: Date
  acknowledgedAt?: Date | null
}

export type MeteringQuotaAlertCreationAttributes = Optional<MeteringQuotaAlertAttributes, "recordCode" | "triggeredAt" | "acknowledgedAt">

export class MeteringQuotaAlertEntity
  extends Model<MeteringQuotaAlertAttributes, MeteringQuotaAlertCreationAttributes>
  implements MeteringQuotaAlertAttributes
{
  declare recordCode: string
  declare quotaAlertId: string | null
  declare tenantApplicationId: string
  declare meterId: string
  declare periodStart: Date
  declare thresholdPercent: number
  declare usedQuantity: number
  declare limitQuantity: number
  declare triggeredAt: Date
  declare acknowledgedAt: Date | null
}

export function initMeteringQuotaAlertEntity(sequelize: Sequelize): typeof MeteringQuotaAlertEntity {
  MeteringQuotaAlertEntity.init(
    {
      recordCode: {
        type: DataTypes.TEXT,
        field: 'record_code',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('metering_quota_alert')"),
      },
      quotaAlertId: {
        type: DataTypes.TEXT,
        field: 'quota_alert_id',
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
      thresholdPercent: {
        type: DataTypes.SMALLINT,
        field: 'threshold_percent',
        allowNull: false,
      },
      usedQuantity: {
        type: DataTypes.DECIMAL(20, 4),
        field: 'used_quantity',
        allowNull: false,
      },
      limitQuantity: {
        type: DataTypes.DECIMAL(20, 4),
        field: 'limit_quantity',
        allowNull: false,
      },
      triggeredAt: {
        type: DataTypes.DATE,
        field: 'triggered_at',
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      acknowledgedAt: {
        type: DataTypes.DATE,
        field: 'acknowledged_at',
        allowNull: true,
      }
    },
    {
      sequelize,
      tableName: 'metering_quota_alert',
      timestamps: false,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['tenant_application_id', 'meter_id', 'period_start', 'threshold_percent'] }
      ]
    }
  )
  return MeteringQuotaAlertEntity
}
