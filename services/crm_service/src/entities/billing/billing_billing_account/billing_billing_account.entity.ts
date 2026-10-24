import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type BillingBillingAccountAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  billingAccountId?: string
  accountId: string
  legalEntityId: string
  currencyCode: string
  taxJurisdictionCode?: string | null
  taxId?: string | null
  isTaxExempt?: string
  billToContactId?: string | null
  invoiceEmail?: string | null
  billingAddress?: unknown | null
  paymentTermsDays?: number
  autoCollect?: string
  dunningPolicyId?: string | null
  status?: string
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type BillingBillingAccountCreationAttributes = Optional<BillingBillingAccountAttributes, "id" | "publicId" | "recordCode" | "billingAccountId" | "taxJurisdictionCode" | "taxId" | "isTaxExempt" | "billToContactId" | "invoiceEmail" | "billingAddress" | "paymentTermsDays" | "autoCollect" | "dunningPolicyId" | "status" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class BillingBillingAccountEntity
  extends Model<BillingBillingAccountAttributes, BillingBillingAccountCreationAttributes>
  implements BillingBillingAccountAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare billingAccountId: string
  declare accountId: string
  declare legalEntityId: string
  declare currencyCode: string
  declare taxJurisdictionCode: string | null
  declare taxId: string | null
  declare isTaxExempt: string
  declare billToContactId: string | null
  declare invoiceEmail: string | null
  declare billingAddress: unknown | null
  declare paymentTermsDays: number
  declare autoCollect: string
  declare dunningPolicyId: string | null
  declare status: string
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initBillingBillingAccountEntity(sequelize: Sequelize): typeof BillingBillingAccountEntity {
  BillingBillingAccountEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('billing_billing_account')"),
      },
      billingAccountId: {
        type: DataTypes.TEXT,
        field: 'billing_account_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      accountId: {
        type: DataTypes.TEXT,
        field: 'account_id',
        allowNull: false,
        references: { model: 'crm_account', key: 'account_id' },
      },
      legalEntityId: {
        type: DataTypes.TEXT,
        field: 'legal_entity_id',
        allowNull: false,
        references: { model: 'org_legal_entity', key: 'legal_entity_id' },
      },
      currencyCode: {
        type: DataTypes.TEXT,
        field: 'currency_code',
        allowNull: false,
        references: { model: 'platform_currency', key: 'currency_code' },
      },
      taxJurisdictionCode: {
        type: DataTypes.TEXT,
        field: 'tax_jurisdiction_code',
        allowNull: true,
        references: { model: 'platform_tax_jurisdiction', key: 'jurisdiction_code' },
      },
      taxId: {
        type: DataTypes.STRING(40),
        field: 'tax_id',
        allowNull: true,
      },
      isTaxExempt: {
        type: DataTypes.TEXT,
        field: 'is_tax_exempt',
        allowNull: false,
        defaultValue: false,
      },
      billToContactId: {
        type: DataTypes.TEXT,
        field: 'bill_to_contact_id',
        allowNull: true,
        references: { model: 'crm_contact', key: 'contact_id' },
      },
      invoiceEmail: {
        type: DataTypes.TEXT,
        field: 'invoice_email',
        allowNull: true,
      },
      billingAddress: {
        type: DataTypes.JSONB,
        field: 'billing_address',
        allowNull: true,
      },
      paymentTermsDays: {
        type: DataTypes.SMALLINT,
        field: 'payment_terms_days',
        allowNull: false,
        defaultValue: 15,
      },
      autoCollect: {
        type: DataTypes.TEXT,
        field: 'auto_collect',
        allowNull: false,
        defaultValue: true,
      },
      dunningPolicyId: {
        type: DataTypes.TEXT,
        field: 'dunning_policy_id',
        allowNull: true,
        references: { model: 'billing_dunning_policy', key: 'dunning_policy_id' },
      },
      status: {
        type: DataTypes.STRING(8),
        field: 'status',
        allowNull: false,
        defaultValue: "active",
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
      tableName: 'billing_billing_account',
      timestamps: true,
      underscored: true,
      freezeTableName: true
    }
  )
  return BillingBillingAccountEntity
}
