import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type CrmQuoteAttributes = {
  recordCode?: string
  quoteId: string | null
  quoteNumber?: string
  opportunityId: string
  accountId: string
  priceBookId: string
  status?: string
  validUntil: string
  subtotal?: string
  discountTotal?: string
  total?: string
  maxDiscountPercent?: string
  couponId?: string | null
  terms?: string | null
  approvedByUserId?: string | null
  approvedAt?: Date | null
  sentAt?: Date | null
  acceptedAt?: Date | null
  acceptedByContactId?: string | null
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type CrmQuoteCreationAttributes = Optional<CrmQuoteAttributes, "recordCode" | "quoteNumber" | "status" | "subtotal" | "discountTotal" | "total" | "maxDiscountPercent" | "couponId" | "terms" | "approvedByUserId" | "approvedAt" | "sentAt" | "acceptedAt" | "acceptedByContactId" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class CrmQuoteEntity
  extends Model<CrmQuoteAttributes, CrmQuoteCreationAttributes>
  implements CrmQuoteAttributes
{
  declare recordCode: string
  declare quoteId: string | null
  declare quoteNumber: string
  declare opportunityId: string
  declare accountId: string
  declare priceBookId: string
  declare status: string
  declare validUntil: string
  declare subtotal: string
  declare discountTotal: string
  declare total: string
  declare maxDiscountPercent: string
  declare couponId: string | null
  declare terms: string | null
  declare approvedByUserId: string | null
  declare approvedAt: Date | null
  declare sentAt: Date | null
  declare acceptedAt: Date | null
  declare acceptedByContactId: string | null
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initCrmQuoteEntity(sequelize: Sequelize): typeof CrmQuoteEntity {
  CrmQuoteEntity.init(
    {
      recordCode: {
        type: DataTypes.TEXT,
        field: 'record_code',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('crm_quote')"),
      },
      quoteId: {
        type: DataTypes.TEXT,
        field: 'quote_id',
        allowNull: true,
        primaryKey: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      quoteNumber: {
        type: DataTypes.STRING(20),
        field: 'quote_number',
        allowNull: false,
        defaultValue: Sequelize.literal("'Q-' || lpad(\r\n        nextval('crm_quote_number_seq')::text,\r\n        7,\r\n        '0'\r\n    )"),
      },
      opportunityId: {
        type: DataTypes.TEXT,
        field: 'opportunity_id',
        allowNull: false,
        references: { model: 'crm_opportunity', key: 'opportunity_id' },
      },
      accountId: {
        type: DataTypes.TEXT,
        field: 'account_id',
        allowNull: false,
        references: { model: 'crm_account', key: 'account_id' },
      },
      priceBookId: {
        type: DataTypes.TEXT,
        field: 'price_book_id',
        allowNull: false,
        references: { model: 'commerce_price_book', key: 'price_book_id' },
      },
      status: {
        type: DataTypes.STRING(16),
        field: 'status',
        allowNull: false,
        defaultValue: "draft",
      },
      validUntil: {
        type: DataTypes.TEXT,
        field: 'valid_until',
        allowNull: false,
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
      total: {
        type: DataTypes.TEXT,
        field: 'total',
        allowNull: false,
        defaultValue: 0,
      },
      maxDiscountPercent: {
        type: DataTypes.TEXT,
        field: 'max_discount_percent',
        allowNull: false,
        defaultValue: 0,
      },
      couponId: {
        type: DataTypes.TEXT,
        field: 'coupon_id',
        allowNull: true,
        references: { model: 'commerce_coupon', key: 'coupon_id' },
      },
      terms: {
        type: DataTypes.TEXT,
        field: 'terms',
        allowNull: true,
      },
      approvedByUserId: {
        type: DataTypes.TEXT,
        field: 'approved_by_user_id',
        allowNull: true,
        references: { model: 'iam_app_user', key: 'app_user_id' },
      },
      approvedAt: {
        type: DataTypes.DATE,
        field: 'approved_at',
        allowNull: true,
      },
      sentAt: {
        type: DataTypes.DATE,
        field: 'sent_at',
        allowNull: true,
      },
      acceptedAt: {
        type: DataTypes.DATE,
        field: 'accepted_at',
        allowNull: true,
      },
      acceptedByContactId: {
        type: DataTypes.TEXT,
        field: 'accepted_by_contact_id',
        allowNull: true,
        references: { model: 'crm_contact', key: 'contact_id' },
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
      tableName: 'crm_quote',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['quote_number'] }
      ]
    }
  )
  return CrmQuoteEntity
}
