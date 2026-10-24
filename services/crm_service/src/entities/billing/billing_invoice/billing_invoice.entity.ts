import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type BillingInvoiceAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  invoiceId?: string
  invoiceNumber?: string | null
  billingAccountId: string
  legalEntityId: string
  subscriptionId?: string | null
  invoiceType?: string
  currencyCode: string
  status?: string
  periodStart?: Date | null
  periodEnd?: Date | null
  issueDate?: Date | null
  dueDate?: Date | null
  subtotal?: string
  discountTotal?: string
  taxTotal?: string
  total?: string
  amountPaid?: string
  amountCredited?: string
  balanceDue?: string | null
  fxRateToFunctional?: number | null
  finalizedAt?: Date | null
  paidAt?: Date | null
  voidedAt?: Date | null
  voidReason?: string | null
  writtenOffAt?: Date | null
  pdfRef?: string | null
  notes?: string | null
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type BillingInvoiceCreationAttributes = Optional<BillingInvoiceAttributes, "id" | "publicId" | "recordCode" | "invoiceId" | "invoiceNumber" | "subscriptionId" | "invoiceType" | "status" | "periodStart" | "periodEnd" | "issueDate" | "dueDate" | "subtotal" | "discountTotal" | "taxTotal" | "total" | "amountPaid" | "amountCredited" | "balanceDue" | "fxRateToFunctional" | "finalizedAt" | "paidAt" | "voidedAt" | "voidReason" | "writtenOffAt" | "pdfRef" | "notes" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class BillingInvoiceEntity
  extends Model<BillingInvoiceAttributes, BillingInvoiceCreationAttributes>
  implements BillingInvoiceAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare invoiceId: string
  declare invoiceNumber: string | null
  declare billingAccountId: string
  declare legalEntityId: string
  declare subscriptionId: string | null
  declare invoiceType: string
  declare currencyCode: string
  declare status: string
  declare periodStart: Date | null
  declare periodEnd: Date | null
  declare issueDate: Date | null
  declare dueDate: Date | null
  declare subtotal: string
  declare discountTotal: string
  declare taxTotal: string
  declare total: string
  declare amountPaid: string
  declare amountCredited: string
  declare balanceDue: string | null
  declare fxRateToFunctional: number | null
  declare finalizedAt: Date | null
  declare paidAt: Date | null
  declare voidedAt: Date | null
  declare voidReason: string | null
  declare writtenOffAt: Date | null
  declare pdfRef: string | null
  declare notes: string | null
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initBillingInvoiceEntity(sequelize: Sequelize): typeof BillingInvoiceEntity {
  BillingInvoiceEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('billing_invoice')"),
      },
      invoiceId: {
        type: DataTypes.TEXT,
        field: 'invoice_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      invoiceNumber: {
        type: DataTypes.STRING(40),
        field: 'invoice_number',
        allowNull: true,
      },
      billingAccountId: {
        type: DataTypes.TEXT,
        field: 'billing_account_id',
        allowNull: false,
        references: { model: 'billing_billing_account', key: 'billing_account_id' },
      },
      legalEntityId: {
        type: DataTypes.TEXT,
        field: 'legal_entity_id',
        allowNull: false,
        references: { model: 'org_legal_entity', key: 'legal_entity_id' },
      },
      subscriptionId: {
        type: DataTypes.TEXT,
        field: 'subscription_id',
        allowNull: true,
        references: { model: 'subscription_subscription', key: 'subscription_id' },
      },
      invoiceType: {
        type: DataTypes.STRING(12),
        field: 'invoice_type',
        allowNull: false,
        defaultValue: "subscription",
      },
      currencyCode: {
        type: DataTypes.TEXT,
        field: 'currency_code',
        allowNull: false,
        references: { model: 'platform_currency', key: 'currency_code' },
      },
      status: {
        type: DataTypes.TEXT,
        field: 'status',
        allowNull: false,
        defaultValue: "draft",
      },
      periodStart: {
        type: DataTypes.DATE,
        field: 'period_start',
        allowNull: true,
      },
      periodEnd: {
        type: DataTypes.DATE,
        field: 'period_end',
        allowNull: true,
      },
      issueDate: {
        type: DataTypes.DATEONLY,
        field: 'issue_date',
        allowNull: true,
      },
      dueDate: {
        type: DataTypes.DATEONLY,
        field: 'due_date',
        allowNull: true,
      },
      subtotal: {
        type: DataTypes.TEXT,
        field: 'subtotal',
        allowNull: false,
        defaultValue: 0,
      },
      discountTotal: {
        type: DataTypes.TEXT,
        field: 'discount_total',
        allowNull: false,
        defaultValue: 0,
      },
      taxTotal: {
        type: DataTypes.TEXT,
        field: 'tax_total',
        allowNull: false,
        defaultValue: 0,
      },
      total: {
        type: DataTypes.TEXT,
        field: 'total',
        allowNull: false,
        defaultValue: 0,
      },
      amountPaid: {
        type: DataTypes.TEXT,
        field: 'amount_paid',
        allowNull: false,
        defaultValue: 0,
      },
      amountCredited: {
        type: DataTypes.TEXT,
        field: 'amount_credited',
        allowNull: false,
        defaultValue: 0,
      },
      balanceDue: {
        type: DataTypes.TEXT,
        field: 'balance_due',
        allowNull: true,
        autoIncrement: true,
      },
      fxRateToFunctional: {
        type: DataTypes.DECIMAL(20, 10),
        field: 'fx_rate_to_functional',
        allowNull: true,
      },
      finalizedAt: {
        type: DataTypes.DATE,
        field: 'finalized_at',
        allowNull: true,
      },
      paidAt: {
        type: DataTypes.DATE,
        field: 'paid_at',
        allowNull: true,
      },
      voidedAt: {
        type: DataTypes.DATE,
        field: 'voided_at',
        allowNull: true,
      },
      voidReason: {
        type: DataTypes.TEXT,
        field: 'void_reason',
        allowNull: true,
      },
      writtenOffAt: {
        type: DataTypes.DATE,
        field: 'written_off_at',
        allowNull: true,
      },
      pdfRef: {
        type: DataTypes.TEXT,
        field: 'pdf_ref',
        allowNull: true,
      },
      notes: {
        type: DataTypes.TEXT,
        field: 'notes',
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
      tableName: 'billing_invoice',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['invoice_number'] }
      ]
    }
  )
  return BillingInvoiceEntity
}
