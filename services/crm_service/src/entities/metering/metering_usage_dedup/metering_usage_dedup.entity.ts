import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type MeteringUsageDedupAttributes = {
  recordCode?: string
  usageDedupId: string | null
  tenantApplicationId: string
  idempotencyKey: string
  receivedAt?: Date
}

export type MeteringUsageDedupCreationAttributes = Optional<MeteringUsageDedupAttributes, "recordCode" | "receivedAt">

export class MeteringUsageDedupEntity
  extends Model<MeteringUsageDedupAttributes, MeteringUsageDedupCreationAttributes>
  implements MeteringUsageDedupAttributes
{
  declare recordCode: string
  declare usageDedupId: string | null
  declare tenantApplicationId: string
  declare idempotencyKey: string
  declare receivedAt: Date
}

export function initMeteringUsageDedupEntity(sequelize: Sequelize): typeof MeteringUsageDedupEntity {
  MeteringUsageDedupEntity.init(
    {
      recordCode: {
        type: DataTypes.TEXT,
        field: 'record_code',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('metering_usage_dedup')"),
      },
      usageDedupId: {
        type: DataTypes.TEXT,
        field: 'usage_dedup_id',
        allowNull: true,
        primaryKey: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      tenantApplicationId: {
        type: DataTypes.TEXT,
        field: 'tenant_application_id',
        allowNull: false,
      },
      idempotencyKey: {
        type: DataTypes.STRING(100),
        field: 'idempotency_key',
        allowNull: false,
      },
      receivedAt: {
        type: DataTypes.DATE,
        field: 'received_at',
        allowNull: false,
        defaultValue: DataTypes.NOW,
      }
    },
    {
      sequelize,
      tableName: 'metering_usage_dedup',
      timestamps: false,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['tenant_application_id', 'idempotency_key'] }
      ]
    }
  )
  return MeteringUsageDedupEntity
}
