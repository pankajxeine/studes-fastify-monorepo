import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type CntnMealPlanPeriodAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  mealPlanId: string
  mealPeriodCode: string
  createdAt?: Date
  createdBy?: string | null
  UNIQUE?: string | null
}

export type CntnMealPlanPeriodCreationAttributes = Optional<CntnMealPlanPeriodAttributes, "id" | "publicId" | "recordCode" | "createdAt" | "createdBy" | "UNIQUE">

export class CntnMealPlanPeriodEntity
  extends Model<CntnMealPlanPeriodAttributes, CntnMealPlanPeriodCreationAttributes>
  implements CntnMealPlanPeriodAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare mealPlanId: string
  declare mealPeriodCode: string
  declare createdAt: Date
  declare createdBy: string | null
  declare UNIQUE: string | null
}

export function initCntnMealPlanPeriodEntity(sequelize: Sequelize): typeof CntnMealPlanPeriodEntity {
  CntnMealPlanPeriodEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('cntn_meal_plan_period')"),
      },
      mealPlanId: {
        type: DataTypes.TEXT,
        field: 'meal_plan_id',
        allowNull: false,
        references: { model: 'cntn_meal_plan', key: 'meal_plan_id' },
        onDelete: 'CASCADE',
      },
      mealPeriodCode: {
        type: DataTypes.TEXT,
        field: 'meal_period_code',
        allowNull: false,
        references: { model: 'cntn_meal_period', key: 'meal_period_code' },
        onUpdate: 'CASCADE',
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
      UNIQUE: {
        type: DataTypes.TEXT,
        field: 'UNIQUE',
        allowNull: true,
      }
    },
    {
      sequelize,
      tableName: 'cntn_meal_plan_period',
      timestamps: false,
      underscored: true,
      freezeTableName: true
    }
  )
  return CntnMealPlanPeriodEntity
}
