import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type EntitlementEntitlementSnapshotAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  tenantApplicationId: string
  version: string | number
  accessMode: string
  reason: string
  validUntil: Date
  payload: unknown
  payloadHash: string
  computedAt?: Date
}

export type EntitlementEntitlementSnapshotCreationAttributes = Optional<EntitlementEntitlementSnapshotAttributes, "id" | "publicId" | "recordCode" | "computedAt">

export class EntitlementEntitlementSnapshotEntity
  extends Model<EntitlementEntitlementSnapshotAttributes, EntitlementEntitlementSnapshotCreationAttributes>
  implements EntitlementEntitlementSnapshotAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare tenantApplicationId: string
  declare version: string | number
  declare accessMode: string
  declare reason: string
  declare validUntil: Date
  declare payload: unknown
  declare payloadHash: string
  declare computedAt: Date
}

export function initEntitlementEntitlementSnapshotEntity(sequelize: Sequelize): typeof EntitlementEntitlementSnapshotEntity {
  EntitlementEntitlementSnapshotEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table (\r\n        'entitlement_entitlement_snapshot'\r\n    )"),
      },
      tenantApplicationId: {
        type: DataTypes.TEXT,
        field: 'tenant_application_id',
        allowNull: false,
        unique: true,
        references: { model: 'tenancy_tenant_application', key: 'tenant_application_id' },
        onDelete: 'CASCADE',
      },
      version: {
        type: DataTypes.BIGINT,
        field: 'version',
        allowNull: false,
      },
      accessMode: {
        type: DataTypes.TEXT,
        field: 'access_mode',
        allowNull: false,
      },
      reason: {
        type: DataTypes.TEXT,
        field: 'reason',
        allowNull: false,
      },
      validUntil: {
        type: DataTypes.DATE,
        field: 'valid_until',
        allowNull: false,
      },
      payload: {
        type: DataTypes.JSONB,
        field: 'payload',
        allowNull: false,
      },
      payloadHash: {
        type: DataTypes.TEXT,
        field: 'payload_hash',
        allowNull: false,
      },
      computedAt: {
        type: DataTypes.DATE,
        field: 'computed_at',
        allowNull: false,
        defaultValue: DataTypes.NOW,
      }
    },
    {
      sequelize,
      tableName: 'entitlement_entitlement_snapshot',
      timestamps: false,
      underscored: true,
      freezeTableName: true
    }
  )
  return EntitlementEntitlementSnapshotEntity
}
