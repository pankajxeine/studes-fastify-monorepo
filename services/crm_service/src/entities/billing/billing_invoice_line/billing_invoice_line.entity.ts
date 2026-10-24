import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type BillingInvoiceLineAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  invoiceLineId?: string
  invoiceId: string
  lineNo: number
  lineType: string
  description: string
  planPriceId?: string | null
  addonPriceId?: string | null
  subscriptionItemId?: string | null
  featureId?: string | null
  couponId?: string | null
  periodStart?: Date | null
  periodEnd?: Date | null
  quantity?: number
  unitAmount: string
  discountAmount?: string
  taxRateId?: string | null
  taxRate?: string
  taxAmount?: string
  netAmount?: string | null
}

export type BillingInvoiceLineCreationAttributes = Optional<BillingInvoiceLineAttributes, "id" | "publicId" | "recordCode" | "invoiceLineId" | "planPriceId" | "addonPriceId" | "subscriptionItemId" | "featureId" | "couponId" | "periodStart" | "periodEnd" | "quantity" | "discountAmount" | "taxRateId" | "taxRate" | "taxAmount" | "netAmount">

export class BillingInvoiceLineEntity
  extends Model<BillingInvoiceLineAttributes, BillingInvoiceLineCreationAttributes>
  implements BillingInvoiceLineAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare invoiceLineId: string
  declare invoiceId: string
  declare lineNo: number
  declare lineType: string
  declare description: string
  declare planPriceId: string | null
  declare addonPriceId: string | null
  declare subscriptionItemId: string | null
  declare featureId: string | null
  declare couponId: string | null
  declare periodStart: Date | null
  declare periodEnd: Date | null
  declare quantity: number
  declare unitAmount: string
  declare discountAmount: string
  declare taxRateId: string | null
  declare taxRate: string
  declare taxAmount: string
  declare netAmount: string | null
}

export function initBillingInvoiceLineEntity(sequelize: Sequelize): typeof BillingInvoiceLineEntity {
  BillingInvoiceLineEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('billing_invoice_line')"),
      },
      invoiceLineId: {
        type: DataTypes.TEXT,
        field: 'invoice_line_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      invoiceId: {
        type: DataTypes.TEXT,
        field: 'invoice_id',
        allowNull: false,
        references: { model: 'billing_invoice', key: 'invoice_id' },
        onDelete: 'CASCADE',
      },
      lineNo: {
        type: DataTypes.SMALLINT,
        field: 'line_no',
        allowNull: false,
      },
      lineType: {
        type: DataTypes.STRING(12),
        field: 'line_type',
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        field: 'description',
        allowNull: false,
      },
      planPriceId: {
        type: DataTypes.TEXT,
        field: 'plan_price_id',
        allowNull: true,
        references: { model: 'commerce_plan_price', key: 'plan_price_id' },
      },
      addonPriceId: {
        type: DataTypes.TEXT,
        field: 'addon_price_id',
        allowNull: true,
        references: { model: 'commerce_addon_price', key: 'addon_price_id' },
      },
      subscriptionItemId: {
        type: DataTypes.TEXT,
        field: 'subscription_item_id',
        allowNull: true,
        references: { model: 'subscription_subscription_item', key: 'subscription_item_id' },
      },
      featureId: {
        type: DataTypes.TEXT,
        field: 'feature_id',
        allowNull: true,
        references: { model: 'catalog_feature', key: 'feature_id' },
      },
      couponId: {
        type: DataTypes.TEXT,
        field: 'coupon_id',
        allowNull: true,
        references: { model: 'commerce_coupon', key: 'coupon_id' },
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
      quantity: {
        type: DataTypes.DECIMAL(18, 4),
        field: 'quantity',
        allowNull: false,
        defaultValue: 1,
      },
      unitAmount: {
        type: DataTypes.TEXT,
        field: 'unit_amount',
        allowNull: false,
      },
      discountAmount: {
        type: DataTypes.TEXT,
        field: 'discount_amount',
        allowNull: false,
        defaultValue: 0,
      },
      taxRateId: {
        type: DataTypes.TEXT,
        field: 'tax_rate_id',
        allowNull: true,
        references: { model: 'platform_tax_rate', key: 'tax_rate_id' },
      },
      taxRate: {
        type: DataTypes.TEXT,
        field: 'tax_rate',
        allowNull: false,
        defaultValue: 0,
      },
      taxAmount: {
        type: DataTypes.TEXT,
        field: 'tax_amount',
        allowNull: false,
        defaultValue: 0,
      },
      netAmount: {
        type: DataTypes.TEXT,
        field: 'net_amount',
        allowNull: true,
        autoIncrement: true,
      }
    },
    {
      sequelize,
      tableName: 'billing_invoice_line',
      timestamps: false,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['invoice_id', 'line_no'] }
      ]
    }
  )
  return BillingInvoiceLineEntity
}
