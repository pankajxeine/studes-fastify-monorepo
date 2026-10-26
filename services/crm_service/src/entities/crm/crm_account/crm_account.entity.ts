import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type CrmAccountAttributes = {
  recordCode?: string
  accountId: string | null
  accountNumber?: string
  accountType?: string
  legalName: string
  displayName: string
  industryCode?: string | null
  countryCode: string
  taxId?: string | null
  website?: string | null
  employeeBand?: string | null
  billingAddress?: unknown | null
  ownerUserId?: string | null
  branchId?: string | null
  territoryId?: string | null
  salesAgentId?: string | null
  parentAccountId?: string | null
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
  deletedAt?: Date | null
}

export type CrmAccountCreationAttributes = Optional<CrmAccountAttributes, "recordCode" | "accountNumber" | "accountType" | "industryCode" | "taxId" | "website" | "employeeBand" | "billingAddress" | "ownerUserId" | "branchId" | "territoryId" | "salesAgentId" | "parentAccountId" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy" | "deletedAt">

export class CrmAccountEntity
  extends Model<CrmAccountAttributes, CrmAccountCreationAttributes>
  implements CrmAccountAttributes
{
  declare recordCode: string
  declare accountId: string | null
  declare accountNumber: string
  declare accountType: string
  declare legalName: string
  declare displayName: string
  declare industryCode: string | null
  declare countryCode: string
  declare taxId: string | null
  declare website: string | null
  declare employeeBand: string | null
  declare billingAddress: unknown | null
  declare ownerUserId: string | null
  declare branchId: string | null
  declare territoryId: string | null
  declare salesAgentId: string | null
  declare parentAccountId: string | null
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
  declare deletedAt: Date | null
}

export function initCrmAccountEntity(sequelize: Sequelize): typeof CrmAccountEntity {
  CrmAccountEntity.init(
    {
      recordCode: {
        type: DataTypes.TEXT,
        field: 'record_code',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('crm_account')"),
      },
      accountId: {
        type: DataTypes.TEXT,
        field: 'account_id',
        allowNull: true,
        primaryKey: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      accountNumber: {
        type: DataTypes.STRING(20),
        field: 'account_number',
        allowNull: false,
        defaultValue: Sequelize.literal("'ACC-' || lpad(\r\n        nextval('crm_account_number_seq')::text,\r\n        7,\r\n        '0'\r\n    )"),
      },
      accountType: {
        type: DataTypes.STRING(20),
        field: 'account_type',
        allowNull: false,
        defaultValue: "prospect",
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
      industryCode: {
        type: DataTypes.TEXT,
        field: 'industry_code',
        allowNull: true,
        references: { model: 'platform_industry', key: 'industry_code' },
      },
      countryCode: {
        type: DataTypes.TEXT,
        field: 'country_code',
        allowNull: false,
        references: { model: 'platform_country', key: 'country_code' },
      },
      taxId: {
        type: DataTypes.STRING(40),
        field: 'tax_id',
        allowNull: true,
      },
      website: {
        type: DataTypes.TEXT,
        field: 'website',
        allowNull: true,
      },
      employeeBand: {
        type: DataTypes.TEXT,
        field: 'employee_band',
        allowNull: true,
      },
      billingAddress: {
        type: DataTypes.JSONB,
        field: 'billing_address',
        allowNull: true,
      },
      ownerUserId: {
        type: DataTypes.TEXT,
        field: 'owner_user_id',
        allowNull: true,
        references: { model: 'iam_app_user', key: 'app_user_id' },
      },
      branchId: {
        type: DataTypes.TEXT,
        field: 'branch_id',
        allowNull: true,
        references: { model: 'org_branch', key: 'branch_id' },
      },
      territoryId: {
        type: DataTypes.TEXT,
        field: 'territory_id',
        allowNull: true,
        references: { model: 'org_territory', key: 'territory_id' },
      },
      salesAgentId: {
        type: DataTypes.UUID,
        field: 'sales_agent_id',
        allowNull: true,
      },
      parentAccountId: {
        type: DataTypes.TEXT,
        field: 'parent_account_id',
        allowNull: true,
        references: { model: 'crm_account', key: 'account_id' },
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
      },
      deletedAt: {
        type: DataTypes.DATE,
        field: 'deleted_at',
        allowNull: true,
      }
    },
    {
      sequelize,
      tableName: 'crm_account',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: true,
      deletedAt: 'deletedAt',
      indexes: [
      { unique: true, fields: ['account_number'] }
      ]
    }
  )
  return CrmAccountEntity
}
