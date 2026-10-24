import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type SubscriptionSubscriptionItemAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  subscriptionItemId?: string
  subscriptionId: string
  addonPriceId: string
  quantity?: number
  validFrom?: Date
  validTo?: Date | null
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type SubscriptionSubscriptionItemCreationAttributes = Optional<SubscriptionSubscriptionItemAttributes, "id" | "publicId" | "recordCode" | "subscriptionItemId" | "quantity" | "validFrom" | "validTo" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class SubscriptionSubscriptionItemEntity
  extends Model<SubscriptionSubscriptionItemAttributes, SubscriptionSubscriptionItemCreationAttributes>
  implements SubscriptionSubscriptionItemAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare subscriptionItemId: string
  declare subscriptionId: string
  declare addonPriceId: string
  declare quantity: number
  declare validFrom: Date
  declare validTo: Date | null
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initSubscriptionSubscriptionItemEntity(sequelize: Sequelize): typeof SubscriptionSubscriptionItemEntity {
  SubscriptionSubscriptionItemEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('subscription_subscription_item')"),
      },
      subscriptionItemId: {
        type: DataTypes.TEXT,
        field: 'subscription_item_id',
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
      addonPriceId: {
        type: DataTypes.TEXT,
        field: 'addon_price_id',
        allowNull: false,
        references: { model: 'commerce_addon_price', key: 'addon_price_id' },
      },
      quantity: {
        type: DataTypes.INTEGER,
        field: 'quantity',
        allowNull: false,
        defaultValue: 1,
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
      tableName: 'subscription_subscription_item',
      timestamps: true,
      underscored: true,
      freezeTableName: true
    }
  )
  return SubscriptionSubscriptionItemEntity
}
