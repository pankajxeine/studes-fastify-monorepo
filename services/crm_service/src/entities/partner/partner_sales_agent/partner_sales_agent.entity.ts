import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type PartnerSalesAgentAttributes = {
  recordCode?: string
  salesAgentId: string | null
  agentCode: string
  agentType: string
  appUserId?: string | null
  legalName: string
  displayName: string
  email: string
  phone?: string | null
  countryCode: string
  territoryId?: string | null
  branchId?: string | null
  parentAgentId?: string | null
  tier?: string
  status?: string
  taxId?: string | null
  payoutCurrencyCode: string
  payoutAccountRef?: string | null
  kycVerifiedAt?: Date | null
  contractStart?: Date | null
  contractEnd?: Date | null
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type PartnerSalesAgentCreationAttributes = Optional<PartnerSalesAgentAttributes, "recordCode" | "appUserId" | "phone" | "territoryId" | "branchId" | "parentAgentId" | "tier" | "status" | "taxId" | "payoutAccountRef" | "kycVerifiedAt" | "contractStart" | "contractEnd" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class PartnerSalesAgentEntity
  extends Model<PartnerSalesAgentAttributes, PartnerSalesAgentCreationAttributes>
  implements PartnerSalesAgentAttributes
{
  declare recordCode: string
  declare salesAgentId: string | null
  declare agentCode: string
  declare agentType: string
  declare appUserId: string | null
  declare legalName: string
  declare displayName: string
  declare email: string
  declare phone: string | null
  declare countryCode: string
  declare territoryId: string | null
  declare branchId: string | null
  declare parentAgentId: string | null
  declare tier: string
  declare status: string
  declare taxId: string | null
  declare payoutCurrencyCode: string
  declare payoutAccountRef: string | null
  declare kycVerifiedAt: Date | null
  declare contractStart: Date | null
  declare contractEnd: Date | null
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initPartnerSalesAgentEntity(sequelize: Sequelize): typeof PartnerSalesAgentEntity {
  PartnerSalesAgentEntity.init(
    {
      recordCode: {
        type: DataTypes.TEXT,
        field: 'record_code',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('partner_sales_agent')"),
      },
      salesAgentId: {
        type: DataTypes.TEXT,
        field: 'sales_agent_id',
        allowNull: true,
        primaryKey: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      agentCode: {
        type: DataTypes.STRING(20),
        field: 'agent_code',
        allowNull: false,
      },
      agentType: {
        type: DataTypes.STRING(10),
        field: 'agent_type',
        allowNull: false,
      },
      appUserId: {
        type: DataTypes.TEXT,
        field: 'app_user_id',
        allowNull: true,
        references: { model: 'iam_app_user', key: 'app_user_id' },
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
      email: {
        type: DataTypes.TEXT,
        field: 'email',
        allowNull: false,
      },
      phone: {
        type: DataTypes.TEXT,
        field: 'phone',
        allowNull: true,
      },
      countryCode: {
        type: DataTypes.TEXT,
        field: 'country_code',
        allowNull: false,
        references: { model: 'platform_country', key: 'country_code' },
      },
      territoryId: {
        type: DataTypes.TEXT,
        field: 'territory_id',
        allowNull: true,
        references: { model: 'org_territory', key: 'territory_id' },
      },
      branchId: {
        type: DataTypes.TEXT,
        field: 'branch_id',
        allowNull: true,
        references: { model: 'org_branch', key: 'branch_id' },
      },
      parentAgentId: {
        type: DataTypes.TEXT,
        field: 'parent_agent_id',
        allowNull: true,
        references: { model: 'partner_sales_agent', key: 'sales_agent_id' },
      },
      tier: {
        type: DataTypes.STRING(10),
        field: 'tier',
        allowNull: false,
        defaultValue: "standard",
      },
      status: {
        type: DataTypes.STRING(12),
        field: 'status',
        allowNull: false,
        defaultValue: "onboarding",
      },
      taxId: {
        type: DataTypes.STRING(40),
        field: 'tax_id',
        allowNull: true,
      },
      payoutCurrencyCode: {
        type: DataTypes.TEXT,
        field: 'payout_currency_code',
        allowNull: false,
        references: { model: 'platform_currency', key: 'currency_code' },
      },
      payoutAccountRef: {
        type: DataTypes.TEXT,
        field: 'payout_account_ref',
        allowNull: true,
      },
      kycVerifiedAt: {
        type: DataTypes.DATE,
        field: 'kyc_verified_at',
        allowNull: true,
      },
      contractStart: {
        type: DataTypes.DATEONLY,
        field: 'contract_start',
        allowNull: true,
      },
      contractEnd: {
        type: DataTypes.DATEONLY,
        field: 'contract_end',
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
      tableName: 'partner_sales_agent',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['agent_code'] },
      { unique: true, fields: ['app_user_id'] }
      ]
    }
  )
  return PartnerSalesAgentEntity
}
