import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type CntnDailyMenuItemAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  dailyMenuItemId?: string
  dailyMenuId: string
  canteenOutletId: string
  menuItemId: string
  priceAmount: string
  plannedQty?: number | null
  soldQty?: number
  isSoldOut?: string
  sortOrder?: number
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type CntnDailyMenuItemCreationAttributes = Optional<CntnDailyMenuItemAttributes, "id" | "publicId" | "recordCode" | "dailyMenuItemId" | "plannedQty" | "soldQty" | "isSoldOut" | "sortOrder" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class CntnDailyMenuItemEntity
  extends Model<CntnDailyMenuItemAttributes, CntnDailyMenuItemCreationAttributes>
  implements CntnDailyMenuItemAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare dailyMenuItemId: string
  declare dailyMenuId: string
  declare canteenOutletId: string
  declare menuItemId: string
  declare priceAmount: string
  declare plannedQty: number | null
  declare soldQty: number
  declare isSoldOut: string
  declare sortOrder: number
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initCntnDailyMenuItemEntity(sequelize: Sequelize): typeof CntnDailyMenuItemEntity {
  CntnDailyMenuItemEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('cntn_daily_menu_item')"),
      },
      dailyMenuItemId: {
        type: DataTypes.TEXT,
        field: 'daily_menu_item_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      dailyMenuId: {
        type: DataTypes.TEXT,
        field: 'daily_menu_id',
        allowNull: false,
        references: { model: 'cntn_daily_menu', key: 'daily_menu_id' },
        onDelete: 'CASCADE',
      },
      canteenOutletId: {
        type: DataTypes.TEXT,
        field: 'canteen_outlet_id',
        allowNull: false,
      },
      menuItemId: {
        type: DataTypes.TEXT,
        field: 'menu_item_id',
        allowNull: false,
        references: { model: 'cntn_menu_item', key: 'menu_item_id' },
      },
      priceAmount: {
        type: DataTypes.TEXT,
        field: 'price_amount',
        allowNull: false,
      },
      plannedQty: {
        type: DataTypes.INTEGER,
        field: 'planned_qty',
        allowNull: true,
      },
      soldQty: {
        type: DataTypes.INTEGER,
        field: 'sold_qty',
        allowNull: false,
        defaultValue: 0,
      },
      isSoldOut: {
        type: DataTypes.TEXT,
        field: 'is_sold_out',
        allowNull: false,
        defaultValue: false,
      },
      sortOrder: {
        type: DataTypes.SMALLINT,
        field: 'sort_order',
        allowNull: false,
        defaultValue: 0,
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
      tableName: 'cntn_daily_menu_item',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['daily_menu_id', 'menu_item_id'] }
      ]
    }
  )
  return CntnDailyMenuItemEntity
}
