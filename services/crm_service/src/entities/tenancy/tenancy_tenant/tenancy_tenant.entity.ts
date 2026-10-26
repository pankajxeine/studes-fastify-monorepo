import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type TenancyTenantAttributes = {
  recordCode?: string
  tenantId: string | null
  tenantCode: string
  customerAccountId: string
  legalName: string
  displayName: string
  status?: string
  regionCode: string
  dataResidency: string
  timezone?: string
  defaultLocale?: string
  defaultCurrencyCode: string
  owningBranchId?: string | null
  salesAgentId?: string | null
  isSandbox?: string
  parentTenantId?: string | null
  legalHold?: string
  suspendedReason?: string | null
  activatedAt?: Date | null
  cancelledAt?: Date | null
  purgeAfter?: Date | null
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type TenancyTenantCreationAttributes = Optional<TenancyTenantAttributes, "recordCode" | "status" | "timezone" | "defaultLocale" | "owningBranchId" | "salesAgentId" | "isSandbox" | "parentTenantId" | "legalHold" | "suspendedReason" | "activatedAt" | "cancelledAt" | "purgeAfter" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class TenancyTenantEntity
  extends Model<TenancyTenantAttributes, TenancyTenantCreationAttributes>
  implements TenancyTenantAttributes
{
  declare recordCode: string
  declare tenantId: string | null
  declare tenantCode: string
  declare customerAccountId: string
  declare legalName: string
  declare displayName: string
  declare status: string
  declare regionCode: string
  declare dataResidency: string
  declare timezone: string
  declare defaultLocale: string
  declare defaultCurrencyCode: string
  declare owningBranchId: string | null
  declare salesAgentId: string | null
  declare isSandbox: string
  declare parentTenantId: string | null
  declare legalHold: string
  declare suspendedReason: string | null
  declare activatedAt: Date | null
  declare cancelledAt: Date | null
  declare purgeAfter: Date | null
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initTenancyTenantEntity(sequelize: Sequelize): typeof TenancyTenantEntity {
  TenancyTenantEntity.init(
    {
      recordCode: {
        type: DataTypes.TEXT,
        field: 'record_code',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('tenancy_tenant')"),
      },
      tenantId: {
        type: DataTypes.TEXT,
        field: 'tenant_id',
        allowNull: true,
        primaryKey: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      tenantCode: {
        type: DataTypes.STRING(40),
        field: 'tenant_code',
        allowNull: false,
      },
      customerAccountId: {
        type: DataTypes.TEXT,
        field: 'customer_account_id',
        allowNull: false,
        references: { model: 'crm_account', key: 'account_id' },
      },
      legalName: {
        type: DataTypes.TEXT,
        field: 'legal_name',
        allowNull: false,
      },
      displayName: {
        type: DataTypes.TEXT,
        field: 'display_name',
        allowNull: false,
      },
      status: {
        type: DataTypes.TEXT,
        field: 'status',
        allowNull: false,
        defaultValue: "draft",
      },
      regionCode: {
        type: DataTypes.TEXT,
        field: 'region_code',
        allowNull: false,
        references: { model: 'platform_region', key: 'region_code' },
      },
      dataResidency: {
        type: DataTypes.TEXT,
        field: 'data_residency',
        allowNull: false,
        references: { model: 'platform_country', key: 'country_code' },
      },
      timezone: {
        type: DataTypes.TEXT,
        field: 'timezone',
        allowNull: false,
        defaultValue: "UTC",
      },
      defaultLocale: {
        type: DataTypes.TEXT,
        field: 'default_locale',
        allowNull: false,
        defaultValue: "en-US",
      },
      defaultCurrencyCode: {
        type: DataTypes.TEXT,
        field: 'default_currency_code',
        allowNull: false,
        references: { model: 'platform_currency', key: 'currency_code' },
      },
      owningBranchId: {
        type: DataTypes.TEXT,
        field: 'owning_branch_id',
        allowNull: true,
        references: { model: 'org_branch', key: 'branch_id' },
      },
      salesAgentId: {
        type: DataTypes.TEXT,
        field: 'sales_agent_id',
        allowNull: true,
        references: { model: 'partner_sales_agent', key: 'sales_agent_id' },
      },
      isSandbox: {
        type: DataTypes.TEXT,
        field: 'is_sandbox',
        allowNull: false,
        defaultValue: false,
      },
      parentTenantId: {
        type: DataTypes.TEXT,
        field: 'parent_tenant_id',
        allowNull: true,
        references: { model: 'tenancy_tenant', key: 'tenant_id' },
      },
      legalHold: {
        type: DataTypes.TEXT,
        field: 'legal_hold',
        allowNull: false,
        defaultValue: false,
      },
      suspendedReason: {
        type: DataTypes.STRING(20),
        field: 'suspended_reason',
        allowNull: true,
      },
      activatedAt: {
        type: DataTypes.DATE,
        field: 'activated_at',
        allowNull: true,
      },
      cancelledAt: {
        type: DataTypes.DATE,
        field: 'cancelled_at',
        allowNull: true,
      },
      purgeAfter: {
        type: DataTypes.DATEONLY,
        field: 'purge_after',
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
      tableName: 'tenancy_tenant',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['tenant_code'] }
      ]
    }
  )
  return TenancyTenantEntity
}
