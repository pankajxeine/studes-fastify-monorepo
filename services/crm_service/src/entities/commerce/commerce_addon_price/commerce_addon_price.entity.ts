import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type CommerceAddonPriceAttributes = {
  recordCode?: string
  addonPriceId: string | null
  addonVersionId: string
  priceBookId: string
  billingPeriod: string
  unitAmount: string
  isActive?: string
  createdAt?: Date
  createdBy?: string | null
}

export type CommerceAddonPriceCreationAttributes = Optional<CommerceAddonPriceAttributes, "recordCode" | "isActive" | "createdAt" | "createdBy">

export class CommerceAddonPriceEntity
  extends Model<CommerceAddonPriceAttributes, CommerceAddonPriceCreationAttributes>
  implements CommerceAddonPriceAttributes
{
  declare recordCode: string
  declare addonPriceId: string | null
  declare addonVersionId: string
  declare priceBookId: string
  declare billingPeriod: string
  declare unitAmount: string
  declare isActive: string
  declare createdAt: Date
  declare createdBy: string | null
}

export function initCommerceAddonPriceEntity(sequelize: Sequelize): typeof CommerceAddonPriceEntity {
  CommerceAddonPriceEntity.init(
    {
      recordCode: {
        type: DataTypes.TEXT,
        field: 'record_code',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('commerce_addon_price')"),
      },
      addonPriceId: {
        type: DataTypes.TEXT,
        field: 'addon_price_id',
        allowNull: true,
        primaryKey: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      addonVersionId: {
        type: DataTypes.TEXT,
        field: 'addon_version_id',
        allowNull: false,
        references: { model: 'commerce_addon_version', key: 'addon_version_id' },
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
      unitAmount: {
        type: DataTypes.TEXT,
        field: 'unit_amount',
        allowNull: false,
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
      tableName: 'commerce_addon_price',
      timestamps: false,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['addon_version_id', 'price_book_id', 'billing_period'] }
      ]
    }
  )
  return CommerceAddonPriceEntity
}
