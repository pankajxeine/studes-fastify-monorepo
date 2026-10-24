import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type CntnMealPeriodAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  mealPeriodCode?: string | null
  name: string
  defaultStartTime?: Date | null
  defaultEndTime?: Date | null
  sortOrder?: number
  isActive?: string
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type CntnMealPeriodCreationAttributes = Optional<CntnMealPeriodAttributes, "id" | "publicId" | "recordCode" | "mealPeriodCode" | "defaultStartTime" | "defaultEndTime" | "sortOrder" | "isActive" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class CntnMealPeriodEntity
  extends Model<CntnMealPeriodAttributes, CntnMealPeriodCreationAttributes>
  implements CntnMealPeriodAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare mealPeriodCode: string | null
  declare name: string
  declare defaultStartTime: Date | null
  declare defaultEndTime: Date | null
  declare sortOrder: number
  declare isActive: string
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initCntnMealPeriodEntity(sequelize: Sequelize): typeof CntnMealPeriodEntity {
  CntnMealPeriodEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('cntn_meal_period')"),
      },
      mealPeriodCode: {
        type: DataTypes.TEXT,
        field: 'meal_period_code',
        allowNull: true,
        unique: true,
      },
      name: {
        type: DataTypes.TEXT,
        field: 'name',
        allowNull: false,
      },
      defaultStartTime: {
        type: DataTypes.TIME,
        field: 'default_start_time',
        allowNull: true,
      },
      defaultEndTime: {
        type: DataTypes.TIME,
        field: 'default_end_time',
        allowNull: true,
      },
      sortOrder: {
        type: DataTypes.SMALLINT,
        field: 'sort_order',
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
      tableName: 'cntn_meal_period',
      timestamps: true,
      underscored: true,
      freezeTableName: true
    }
  )
  return CntnMealPeriodEntity
}
