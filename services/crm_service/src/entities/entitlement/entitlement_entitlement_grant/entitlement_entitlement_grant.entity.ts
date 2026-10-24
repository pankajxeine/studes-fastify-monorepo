import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type EntitlementEntitlementGrantAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  entitlementGrantId?: string
  tenantApplicationId: string
  moduleId: string
  featureId?: string | null
  source: string
  sourceRefId: string
  value?: unknown | null
  validFrom: Date
  validTo?: Date | null
}

export type EntitlementEntitlementGrantCreationAttributes = Optional<EntitlementEntitlementGrantAttributes, "id" | "publicId" | "recordCode" | "entitlementGrantId" | "featureId" | "value" | "validTo">

export class EntitlementEntitlementGrantEntity
  extends Model<EntitlementEntitlementGrantAttributes, EntitlementEntitlementGrantCreationAttributes>
  implements EntitlementEntitlementGrantAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare entitlementGrantId: string
  declare tenantApplicationId: string
  declare moduleId: string
  declare featureId: string | null
  declare source: string
  declare sourceRefId: string
  declare value: unknown | null
  declare validFrom: Date
  declare validTo: Date | null
}

export function initEntitlementEntitlementGrantEntity(sequelize: Sequelize): typeof EntitlementEntitlementGrantEntity {
  EntitlementEntitlementGrantEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table (\r\n        'entitlement_entitlement_grant'\r\n    )"),
      },
      entitlementGrantId: {
        type: DataTypes.TEXT,
        field: 'entitlement_grant_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      tenantApplicationId: {
        type: DataTypes.TEXT,
        field: 'tenant_application_id',
        allowNull: false,
        references: { model: 'tenancy_tenant_application', key: 'tenant_application_id' },
        onDelete: 'CASCADE',
      },
      moduleId: {
        type: DataTypes.TEXT,
        field: 'module_id',
        allowNull: false,
        references: { model: 'catalog_module', key: 'module_id' },
      },
      featureId: {
        type: DataTypes.TEXT,
        field: 'feature_id',
        allowNull: true,
        references: { model: 'catalog_feature', key: 'feature_id' },
      },
      source: {
        type: DataTypes.TEXT,
        field: 'source',
        allowNull: false,
      },
      sourceRefId: {
        type: DataTypes.TEXT,
        field: 'source_ref_id',
        allowNull: false,
      },
      value: {
        type: DataTypes.JSONB,
        field: 'value',
        allowNull: true,
      },
      validFrom: {
        type: DataTypes.DATE,
        field: 'valid_from',
        allowNull: false,
      },
      validTo: {
        type: DataTypes.DATE,
        field: 'valid_to',
        allowNull: true,
      }
    },
    {
      sequelize,
      tableName: 'entitlement_entitlement_grant',
      timestamps: false,
      underscored: true,
      freezeTableName: true
    }
  )
  return EntitlementEntitlementGrantEntity
}
