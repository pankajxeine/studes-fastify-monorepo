import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type CntnWeeklyMenuItemAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  weeklyMenuItemId?: string
  weeklyMenuId: string
  canteenOutletId: string
  menuItemId: string
  mealPeriodCode: string
  dayOfWeek: string
  plannedQty?: number | null
  sortOrder?: number
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type CntnWeeklyMenuItemCreationAttributes = Optional<CntnWeeklyMenuItemAttributes, "id" | "publicId" | "recordCode" | "weeklyMenuItemId" | "plannedQty" | "sortOrder" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class CntnWeeklyMenuItemEntity
  extends Model<CntnWeeklyMenuItemAttributes, CntnWeeklyMenuItemCreationAttributes>
  implements CntnWeeklyMenuItemAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare weeklyMenuItemId: string
  declare weeklyMenuId: string
  declare canteenOutletId: string
  declare menuItemId: string
  declare mealPeriodCode: string
  declare dayOfWeek: string
  declare plannedQty: number | null
  declare sortOrder: number
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initCntnWeeklyMenuItemEntity(sequelize: Sequelize): typeof CntnWeeklyMenuItemEntity {
  CntnWeeklyMenuItemEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('cntn_weekly_menu_item')"),
      },
      weeklyMenuItemId: {
        type: DataTypes.TEXT,
        field: 'weekly_menu_item_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      weeklyMenuId: {
        type: DataTypes.TEXT,
        field: 'weekly_menu_id',
        allowNull: false,
        references: { model: 'cntn_weekly_menu', key: 'weekly_menu_id' },
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
      mealPeriodCode: {
        type: DataTypes.TEXT,
        field: 'meal_period_code',
        allowNull: false,
        references: { model: 'cntn_meal_period', key: 'meal_period_code' },
        onUpdate: 'CASCADE',
      },
      dayOfWeek: {
        type: DataTypes.TEXT,
        field: 'day_of_week',
        allowNull: false,
      },
      plannedQty: {
        type: DataTypes.SMALLINT,
        field: 'planned_qty',
        allowNull: true,
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
      tableName: 'cntn_weekly_menu_item',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['weekly_menu_id', 'day_of_week', 'meal_period_code', 'menu_item_id'] }
      ]
    }
  )
  return CntnWeeklyMenuItemEntity
}
