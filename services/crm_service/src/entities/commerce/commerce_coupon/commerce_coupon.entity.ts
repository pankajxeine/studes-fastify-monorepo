import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type CommerceCouponAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  couponId?: string
  couponCode: string
  name: string
  discountType: string
  discountValue: number
  currencyCode?: string | null
  duration: string
  durationMonths?: number | null
  maxRedemptions?: number | null
  redeemedCount?: number
  validFrom?: Date
  validTo?: Date | null
  appliesToPlanIds?: string | null
  isActive?: string
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type CommerceCouponCreationAttributes = Optional<CommerceCouponAttributes, "id" | "publicId" | "recordCode" | "couponId" | "currencyCode" | "durationMonths" | "maxRedemptions" | "redeemedCount" | "validFrom" | "validTo" | "appliesToPlanIds" | "isActive" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class CommerceCouponEntity
  extends Model<CommerceCouponAttributes, CommerceCouponCreationAttributes>
  implements CommerceCouponAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare couponId: string
  declare couponCode: string
  declare name: string
  declare discountType: string
  declare discountValue: number
  declare currencyCode: string | null
  declare duration: string
  declare durationMonths: number | null
  declare maxRedemptions: number | null
  declare redeemedCount: number
  declare validFrom: Date
  declare validTo: Date | null
  declare appliesToPlanIds: string | null
  declare isActive: string
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initCommerceCouponEntity(sequelize: Sequelize): typeof CommerceCouponEntity {
  CommerceCouponEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('commerce_coupon')"),
      },
      couponId: {
        type: DataTypes.TEXT,
        field: 'coupon_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      couponCode: {
        type: DataTypes.STRING(40),
        field: 'coupon_code',
        allowNull: false,
      },
      name: {
        type: DataTypes.TEXT,
        field: 'name',
        allowNull: false,
      },
      discountType: {
        type: DataTypes.STRING(10),
        field: 'discount_type',
        allowNull: false,
      },
      discountValue: {
        type: DataTypes.DECIMAL(18, 4),
        field: 'discount_value',
        allowNull: false,
      },
      currencyCode: {
        type: DataTypes.TEXT,
        field: 'currency_code',
        allowNull: true,
        references: { model: 'platform_currency', key: 'currency_code' },
      },
      duration: {
        type: DataTypes.STRING(10),
        field: 'duration',
        allowNull: false,
      },
      durationMonths: {
        type: DataTypes.SMALLINT,
        field: 'duration_months',
        allowNull: true,
      },
      maxRedemptions: {
        type: DataTypes.INTEGER,
        field: 'max_redemptions',
        allowNull: true,
      },
      redeemedCount: {
        type: DataTypes.INTEGER,
        field: 'redeemed_count',
        allowNull: false,
        defaultValue: 0,
      },
      validFrom: {
        type: DataTypes.DATE,
        field: 'valid_from',
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      validTo: {
        type: DataTypes.DATE,
        field: 'valid_to',
        allowNull: true,
      },
      appliesToPlanIds: {
        type: DataTypes.UUID,
        field: 'applies_to_plan_ids',
        allowNull: true,
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
      tableName: 'commerce_coupon',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['coupon_code'] }
      ]
    }
  )
  return CommerceCouponEntity
}
