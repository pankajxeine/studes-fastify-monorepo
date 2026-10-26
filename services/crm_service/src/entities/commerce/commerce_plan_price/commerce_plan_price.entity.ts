import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type CommercePlanPriceAttributes = {
  recordCode?: string
  planPriceId: string | null
  planVersionId: string
  priceBookId: string
  billingPeriod: string
  pricingModel: string
  unitAmount: string
  tiers?: unknown | null
  setupFee?: string
  isActive?: string
  createdAt?: Date
  createdBy?: string | null
}

export type CommercePlanPriceCreationAttributes = Optional<CommercePlanPriceAttributes, "recordCode" | "tiers" | "setupFee" | "isActive" | "createdAt" | "createdBy">

export class CommercePlanPriceEntity
  extends Model<CommercePlanPriceAttributes, CommercePlanPriceCreationAttributes>
  implements CommercePlanPriceAttributes
{
  declare recordCode: string
  declare planPriceId: string | null
  declare planVersionId: string
  declare priceBookId: string
  declare billingPeriod: string
  declare pricingModel: string
  declare unitAmount: string
  declare tiers: unknown | null
  declare setupFee: string
  declare isActive: string
  declare createdAt: Date
  declare createdBy: string | null
}

export function initCommercePlanPriceEntity(sequelize: Sequelize): typeof CommercePlanPriceEntity {
  CommercePlanPriceEntity.init(
    {
      recordCode: {
        type: DataTypes.TEXT,
        field: 'record_code',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('commerce_plan_price')"),
      },
      planPriceId: {
        type: DataTypes.TEXT,
        field: 'plan_price_id',
        allowNull: true,
        primaryKey: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      planVersionId: {
        type: DataTypes.TEXT,
        field: 'plan_version_id',
        allowNull: false,
        references: { model: 'commerce_plan_version', key: 'plan_version_id' },
        onDelete: 'CASCADE',
      },
      priceBookId: {
        type: DataTypes.TEXT,
        field: 'price_book_id',
        allowNull: false,
        references: { model: 'commerce_price_book', key: 'price_book_id' },
      },
      billingPeriod: {
        type: DataTypes.STRING(10),
        field: 'billing_period',
        allowNull: false,
      },
      pricingModel: {
        type: DataTypes.STRING(10),
        field: 'pricing_model',
        allowNull: false,
      },
      unitAmount: {
        type: DataTypes.TEXT,
        field: 'unit_amount',
        allowNull: false,
      },
      tiers: {
        type: DataTypes.JSONB,
        field: 'tiers',
        allowNull: true,
      },
      setupFee: {
        type: DataTypes.TEXT,
        field: 'setup_fee',
        allowNull: false,
        defaultValue: 0,
      },
      isActive: {
        type: DataTypes.TEXT,
        field: 'is_active',
        allowNull: false,
        defaultValue: true,
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
      }
    },
    {
      sequelize,
      tableName: 'commerce_plan_price',
      timestamps: false,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['plan_version_id', 'price_book_id', 'billing_period'] }
      ]
    }
  )
  return CommercePlanPriceEntity
}
