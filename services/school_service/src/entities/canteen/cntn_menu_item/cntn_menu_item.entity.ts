import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type CntnMenuItemAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  menuItemId?: string
  canteenOutletId: string
  menuCategoryCode: string
  code: string
  name: string
  description?: string | null
  ingredients?: string | null
  portionSize?: string | null
  priceAmount: string
  caloriesKcal?: number | null
  spiceLevel?: number
  isVegetarian?: string
  isVegan?: string
  isHalal?: string
  isActive?: string
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type CntnMenuItemCreationAttributes = Optional<CntnMenuItemAttributes, "id" | "publicId" | "recordCode" | "menuItemId" | "description" | "ingredients" | "portionSize" | "caloriesKcal" | "spiceLevel" | "isVegetarian" | "isVegan" | "isHalal" | "isActive" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class CntnMenuItemEntity
  extends Model<CntnMenuItemAttributes, CntnMenuItemCreationAttributes>
  implements CntnMenuItemAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare menuItemId: string
  declare canteenOutletId: string
  declare menuCategoryCode: string
  declare code: string
  declare name: string
  declare description: string | null
  declare ingredients: string | null
  declare portionSize: string | null
  declare priceAmount: string
  declare caloriesKcal: number | null
  declare spiceLevel: number
  declare isVegetarian: string
  declare isVegan: string
  declare isHalal: string
  declare isActive: string
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initCntnMenuItemEntity(sequelize: Sequelize): typeof CntnMenuItemEntity {
  CntnMenuItemEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('cntn_menu_item')"),
      },
      menuItemId: {
        type: DataTypes.TEXT,
        field: 'menu_item_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      canteenOutletId: {
        type: DataTypes.TEXT,
        field: 'canteen_outlet_id',
        allowNull: false,
        references: { model: 'cntn_canteen_outlet', key: 'canteen_outlet_id' },
      },
      menuCategoryCode: {
        type: DataTypes.TEXT,
        field: 'menu_category_code',
        allowNull: false,
        references: { model: 'cntn_menu_category', key: 'menu_category_code' },
        onUpdate: 'CASCADE',
      },
      code: {
        type: DataTypes.STRING(20),
        field: 'code',
        allowNull: false,
      },
      name: {
        type: DataTypes.TEXT,
        field: 'name',
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        field: 'description',
        allowNull: true,
      },
      ingredients: {
        type: DataTypes.TEXT,
        field: 'ingredients',
        allowNull: true,
      },
      portionSize: {
        type: DataTypes.STRING(40),
        field: 'portion_size',
        allowNull: true,
      },
      priceAmount: {
        type: DataTypes.TEXT,
        field: 'price_amount',
        allowNull: false,
      },
      caloriesKcal: {
        type: DataTypes.SMALLINT,
        field: 'calories_kcal',
        allowNull: true,
      },
      spiceLevel: {
        type: DataTypes.SMALLINT,
        field: 'spice_level',
        allowNull: false,
        defaultValue: 0,
      },
      isVegetarian: {
        type: DataTypes.TEXT,
        field: 'is_vegetarian',
        allowNull: false,
        defaultValue: false,
      },
      isVegan: {
        type: DataTypes.TEXT,
        field: 'is_vegan',
        allowNull: false,
        defaultValue: false,
      },
      isHalal: {
        type: DataTypes.TEXT,
        field: 'is_halal',
        allowNull: false,
        defaultValue: false,
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
      tableName: 'cntn_menu_item',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['canteen_outlet_id', 'code'] },
      { unique: true, fields: ['menu_item_id', 'canteen_outlet_id'] }
      ]
    }
  )
  return CntnMenuItemEntity
}
