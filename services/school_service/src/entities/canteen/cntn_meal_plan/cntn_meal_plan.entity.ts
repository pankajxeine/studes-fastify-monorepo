import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type CntnMealPlanAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  mealPlanId?: string
  canteenOutletId: string
  termId: string
  feeHeadCode?: string
  code: string
  name: string
  description?: string | null
  priceAmount: string
  mealsPerDay?: number
  validFrom: string
  validTo: string
  isActive?: string
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type CntnMealPlanCreationAttributes = Optional<CntnMealPlanAttributes, "id" | "publicId" | "recordCode" | "mealPlanId" | "feeHeadCode" | "description" | "mealsPerDay" | "isActive" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class CntnMealPlanEntity
  extends Model<CntnMealPlanAttributes, CntnMealPlanCreationAttributes>
  implements CntnMealPlanAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare mealPlanId: string
  declare canteenOutletId: string
  declare termId: string
  declare feeHeadCode: string
  declare code: string
  declare name: string
  declare description: string | null
  declare priceAmount: string
  declare mealsPerDay: number
  declare validFrom: string
  declare validTo: string
  declare isActive: string
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initCntnMealPlanEntity(sequelize: Sequelize): typeof CntnMealPlanEntity {
  CntnMealPlanEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('cntn_meal_plan')"),
      },
      mealPlanId: {
        type: DataTypes.TEXT,
        field: 'meal_plan_id',
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
      termId: {
        type: DataTypes.TEXT,
        field: 'term_id',
        allowNull: false,
        references: { model: 'acad_term', key: 'term_id' },
      },
      feeHeadCode: {
        type: DataTypes.TEXT,
        field: 'fee_head_code',
        allowNull: false,
        defaultValue: "meal_plan",
        references: { model: 'fin_fee_head', key: 'fee_head_code' },
        onUpdate: 'CASCADE',
      },
      code: {
        type: DataTypes.STRING(30),
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
      priceAmount: {
        type: DataTypes.TEXT,
        field: 'price_amount',
        allowNull: false,
      },
      mealsPerDay: {
        type: DataTypes.SMALLINT,
        field: 'meals_per_day',
        allowNull: false,
        defaultValue: 1,
      },
      validFrom: {
        type: DataTypes.TEXT,
        field: 'valid_from',
        allowNull: false,
      },
      validTo: {
        type: DataTypes.TEXT,
        field: 'valid_to',
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
      tableName: 'cntn_meal_plan',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['term_id', 'code'] }
      ]
    }
  )
  return CntnMealPlanEntity
}
