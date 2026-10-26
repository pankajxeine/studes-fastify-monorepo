import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type TenancyTenantConfigAttributes = {
  recordCode?: string
  tenantConfigId: string | null
  tenantApplicationId: string
  configKey: string
  value: unknown
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type TenancyTenantConfigCreationAttributes = Optional<TenancyTenantConfigAttributes, "recordCode" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class TenancyTenantConfigEntity
  extends Model<TenancyTenantConfigAttributes, TenancyTenantConfigCreationAttributes>
  implements TenancyTenantConfigAttributes
{
  declare recordCode: string
  declare tenantConfigId: string | null
  declare tenantApplicationId: string
  declare configKey: string
  declare value: unknown
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initTenancyTenantConfigEntity(sequelize: Sequelize): typeof TenancyTenantConfigEntity {
  TenancyTenantConfigEntity.init(
    {
      recordCode: {
        type: DataTypes.TEXT,
        field: 'record_code',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('tenancy_tenant_config')"),
      },
      tenantConfigId: {
        type: DataTypes.TEXT,
        field: 'tenant_config_id',
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
      configKey: {
        type: DataTypes.TEXT,
        field: 'config_key',
        allowNull: false,
        references: { model: 'platform_config_definition', key: 'config_key' },
      },
      value: {
        type: DataTypes.JSONB,
        field: 'value',
        allowNull: false,
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
      tableName: 'tenancy_tenant_config',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['tenant_application_id', 'config_key'] }
      ]
    }
  )
  return TenancyTenantConfigEntity
}
