import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type MeteringUsageDedupAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  tenantApplicationId: string
  idempotencyKey: string
  receivedAt?: Date
  UNIQUE?: string | null
}

export type MeteringUsageDedupCreationAttributes = Optional<MeteringUsageDedupAttributes, "id" | "publicId" | "recordCode" | "receivedAt" | "UNIQUE">

export class MeteringUsageDedupEntity
  extends Model<MeteringUsageDedupAttributes, MeteringUsageDedupCreationAttributes>
  implements MeteringUsageDedupAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare tenantApplicationId: string
  declare idempotencyKey: string
  declare receivedAt: Date
  declare UNIQUE: string | null
}

export function initMeteringUsageDedupEntity(sequelize: Sequelize): typeof MeteringUsageDedupEntity {
  MeteringUsageDedupEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('metering_usage_dedup')"),
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
      },
      UNIQUE: {
        type: DataTypes.TEXT,
        field: 'UNIQUE',
        allowNull: true,
      }
    },
    {
      sequelize,
      tableName: 'metering_usage_dedup',
      timestamps: false,
      underscored: true,
      freezeTableName: true
    }
  )
  return MeteringUsageDedupEntity
}
