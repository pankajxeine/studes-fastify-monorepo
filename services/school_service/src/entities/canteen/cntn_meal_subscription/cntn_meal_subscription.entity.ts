import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type CntnMealSubscriptionAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  mealSubscriptionId?: string
  mealPlanId: string
  personId: string
  invoiceId?: string | null
  status?: string
  startDate: string
  endDate: string
  validity?: string | null
  cancelledAt?: Date | null
  cancelReason?: string | null
  notes?: string | null
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type CntnMealSubscriptionCreationAttributes = Optional<CntnMealSubscriptionAttributes, "id" | "publicId" | "recordCode" | "mealSubscriptionId" | "invoiceId" | "status" | "validity" | "cancelledAt" | "cancelReason" | "notes" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class CntnMealSubscriptionEntity
  extends Model<CntnMealSubscriptionAttributes, CntnMealSubscriptionCreationAttributes>
  implements CntnMealSubscriptionAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare mealSubscriptionId: string
  declare mealPlanId: string
  declare personId: string
  declare invoiceId: string | null
  declare status: string
  declare startDate: string
  declare endDate: string
  declare validity: string | null
  declare cancelledAt: Date | null
  declare cancelReason: string | null
  declare notes: string | null
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initCntnMealSubscriptionEntity(sequelize: Sequelize): typeof CntnMealSubscriptionEntity {
  CntnMealSubscriptionEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('cntn_meal_subscription')"),
      },
      mealSubscriptionId: {
        type: DataTypes.TEXT,
        field: 'meal_subscription_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      mealPlanId: {
        type: DataTypes.TEXT,
        field: 'meal_plan_id',
        allowNull: false,
        references: { model: 'cntn_meal_plan', key: 'meal_plan_id' },
      },
      personId: {
        type: DataTypes.TEXT,
        field: 'person_id',
        allowNull: false,
        references: { model: 'ppl_person', key: 'person_id' },
      },
      invoiceId: {
        type: DataTypes.TEXT,
        field: 'invoice_id',
        allowNull: true,
        references: { model: 'fin_invoice', key: 'invoice_id' },
      },
      status: {
        type: DataTypes.TEXT,
        field: 'status',
        allowNull: false,
        defaultValue: "active",
      },
      startDate: {
        type: DataTypes.TEXT,
        field: 'start_date',
        allowNull: false,
      },
      endDate: {
        type: DataTypes.TEXT,
        field: 'end_date',
        allowNull: false,
      },
      validity: {
        type: DataTypes.TEXT,
        field: 'validity',
        allowNull: true,
        autoIncrement: true,
      },
      cancelledAt: {
        type: DataTypes.DATE,
        field: 'cancelled_at',
        allowNull: true,
      },
      cancelReason: {
        type: DataTypes.TEXT,
        field: 'cancel_reason',
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
      tableName: 'cntn_meal_subscription',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['meal_subscription_id', 'person_id'] }
      ]
    }
  )
  return CntnMealSubscriptionEntity
}
