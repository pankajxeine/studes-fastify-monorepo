import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type CntnDailyMenuAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  dailyMenuId?: string
  canteenOutletId: string
  mealPeriodCode: string
  menuDate: string
  weeklyMenuId?: string | null
  status?: string
  preOrderCutoffAt?: Date | null
  publishedAt?: Date | null
  closedAt?: Date | null
  notes?: string | null
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type CntnDailyMenuCreationAttributes = Optional<CntnDailyMenuAttributes, "id" | "publicId" | "recordCode" | "dailyMenuId" | "weeklyMenuId" | "status" | "preOrderCutoffAt" | "publishedAt" | "closedAt" | "notes" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class CntnDailyMenuEntity
  extends Model<CntnDailyMenuAttributes, CntnDailyMenuCreationAttributes>
  implements CntnDailyMenuAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare dailyMenuId: string
  declare canteenOutletId: string
  declare mealPeriodCode: string
  declare menuDate: string
  declare weeklyMenuId: string | null
  declare status: string
  declare preOrderCutoffAt: Date | null
  declare publishedAt: Date | null
  declare closedAt: Date | null
  declare notes: string | null
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initCntnDailyMenuEntity(sequelize: Sequelize): typeof CntnDailyMenuEntity {
  CntnDailyMenuEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('cntn_daily_menu')"),
      },
      dailyMenuId: {
        type: DataTypes.TEXT,
        field: 'daily_menu_id',
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
      mealPeriodCode: {
        type: DataTypes.TEXT,
        field: 'meal_period_code',
        allowNull: false,
        references: { model: 'cntn_meal_period', key: 'meal_period_code' },
        onUpdate: 'CASCADE',
      },
      menuDate: {
        type: DataTypes.TEXT,
        field: 'menu_date',
        allowNull: false,
      },
      weeklyMenuId: {
        type: DataTypes.UUID,
        field: 'weekly_menu_id',
        allowNull: true,
        references: { model: 'cntn_weekly_menu', key: 'weekly_menu_id' },
      },
      status: {
        type: DataTypes.TEXT,
        field: 'status',
        allowNull: false,
        defaultValue: "draft",
      },
      preOrderCutoffAt: {
        type: DataTypes.DATE,
        field: 'pre_order_cutoff_at',
        allowNull: true,
      },
      publishedAt: {
        type: DataTypes.DATE,
        field: 'published_at',
        allowNull: true,
      },
      closedAt: {
        type: DataTypes.DATE,
        field: 'closed_at',
        allowNull: true,
      },
      notes: {
        type: DataTypes.TEXT,
        field: 'notes',
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
      tableName: 'cntn_daily_menu',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['canteen_outlet_id', 'menu_date', 'meal_period_code'] },
      { unique: true, fields: ['daily_menu_id', 'canteen_outlet_id'] }
      ]
    }
  )
  return CntnDailyMenuEntity
}
