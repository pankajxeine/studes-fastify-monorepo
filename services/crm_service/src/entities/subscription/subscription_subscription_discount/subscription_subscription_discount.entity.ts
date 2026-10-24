import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type SubscriptionSubscriptionDiscountAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  subscriptionDiscountId?: string
  subscriptionId: string
  couponId: string
  appliedAt?: Date
  endsAt?: Date | null
  createdBy?: string | null
}

export type SubscriptionSubscriptionDiscountCreationAttributes = Optional<SubscriptionSubscriptionDiscountAttributes, "id" | "publicId" | "recordCode" | "subscriptionDiscountId" | "appliedAt" | "endsAt" | "createdBy">

export class SubscriptionSubscriptionDiscountEntity
  extends Model<SubscriptionSubscriptionDiscountAttributes, SubscriptionSubscriptionDiscountCreationAttributes>
  implements SubscriptionSubscriptionDiscountAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare subscriptionDiscountId: string
  declare subscriptionId: string
  declare couponId: string
  declare appliedAt: Date
  declare endsAt: Date | null
  declare createdBy: string | null
}

export function initSubscriptionSubscriptionDiscountEntity(sequelize: Sequelize): typeof SubscriptionSubscriptionDiscountEntity {
  SubscriptionSubscriptionDiscountEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('subscription_subscription_discount')"),
      },
      subscriptionDiscountId: {
        type: DataTypes.TEXT,
        field: 'subscription_discount_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      subscriptionId: {
        type: DataTypes.TEXT,
        field: 'subscription_id',
        allowNull: false,
        references: { model: 'subscription_subscription', key: 'subscription_id' },
        onDelete: 'CASCADE',
      },
      couponId: {
        type: DataTypes.TEXT,
        field: 'coupon_id',
        allowNull: false,
        references: { model: 'commerce_coupon', key: 'coupon_id' },
      },
      appliedAt: {
        type: DataTypes.DATE,
        field: 'applied_at',
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      endsAt: {
        type: DataTypes.DATE,
        field: 'ends_at',
        allowNull: true,
      },
      createdBy: {
        type: DataTypes.UUID,
        field: 'created_by',
        allowNull: true,
      }
    },
    {
      sequelize,
      tableName: 'subscription_subscription_discount',
      timestamps: false,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['subscription_id', 'coupon_id'] }
      ]
    }
  )
  return SubscriptionSubscriptionDiscountEntity
}
