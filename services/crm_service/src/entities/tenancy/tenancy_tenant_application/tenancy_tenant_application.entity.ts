import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type TenancyTenantApplicationAttributes = {
  recordCode?: string
  tenantApplicationId: string | null
  tenantId: string
  applicationId: string
  environmentId: string
  status?: string
  dbLocator?: string | null
  schemaSlug?: string | null
  provisionedAt?: Date | null
  deprovisionedAt?: Date | null
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type TenancyTenantApplicationCreationAttributes = Optional<TenancyTenantApplicationAttributes, "recordCode" | "status" | "dbLocator" | "schemaSlug" | "provisionedAt" | "deprovisionedAt" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class TenancyTenantApplicationEntity
  extends Model<TenancyTenantApplicationAttributes, TenancyTenantApplicationCreationAttributes>
  implements TenancyTenantApplicationAttributes
{
  declare recordCode: string
  declare tenantApplicationId: string | null
  declare tenantId: string
  declare applicationId: string
  declare environmentId: string
  declare status: string
  declare dbLocator: string | null
  declare schemaSlug: string | null
  declare provisionedAt: Date | null
  declare deprovisionedAt: Date | null
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initTenancyTenantApplicationEntity(sequelize: Sequelize): typeof TenancyTenantApplicationEntity {
  TenancyTenantApplicationEntity.init(
    {
      recordCode: {
        type: DataTypes.TEXT,
        field: 'record_code',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('tenancy_tenant_application')"),
      },
      tenantApplicationId: {
        type: DataTypes.TEXT,
        field: 'tenant_application_id',
        allowNull: true,
        primaryKey: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      tenantId: {
        type: DataTypes.TEXT,
        field: 'tenant_id',
        allowNull: false,
        references: { model: 'tenancy_tenant', key: 'tenant_id' },
      },
      applicationId: {
        type: DataTypes.TEXT,
        field: 'application_id',
        allowNull: false,
        references: { model: 'catalog_application', key: 'application_id' },
      },
      environmentId: {
        type: DataTypes.TEXT,
        field: 'environment_id',
        allowNull: false,
        references: { model: 'platform_environment', key: 'environment_id' },
      },
      status: {
        type: DataTypes.STRING(16),
        field: 'status',
        allowNull: false,
        defaultValue: "provisioning",
      },
      dbLocator: {
        type: DataTypes.TEXT,
        field: 'db_locator',
        allowNull: true,
      },
      schemaSlug: {
        type: DataTypes.STRING(63),
        field: 'schema_slug',
        allowNull: true,
      },
      provisionedAt: {
        type: DataTypes.DATE,
        field: 'provisioned_at',
        allowNull: true,
      },
      deprovisionedAt: {
        type: DataTypes.DATE,
        field: 'deprovisioned_at',
        allowNull: true,
      },
      createdAt: {
        type: DataTypes.DATE,
        field: 'created_at',
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      createdBy: {
        type: DataTypes.UUID,
        field: 'created_by',
        allowNull: true,
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: 'updated_at',
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      updatedBy: {
        type: DataTypes.UUID,
        field: 'updated_by',
        allowNull: true,
      }
    },
    {
      sequelize,
      tableName: 'tenancy_tenant_application',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['tenant_id', 'application_id'] }
      ]
    }
  )
  return TenancyTenantApplicationEntity
}
