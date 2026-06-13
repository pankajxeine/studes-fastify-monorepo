import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type InstituteSubscriptionsAttributes = {
  id?: number | null
  institute_id?: number | null
  subscription_plan_id?: number | null
  subscription_start_date?: string | null
  subscription_end_date?: string | null
  billing_cycle?: string | null
  amount_paid?: number | null
  payment_status?: string | null
  subscription_status?: string | null
  created_at?: string | null
  updated_at?: string | null
}

export type InstituteSubscriptionsCreationAttributes = Optional<InstituteSubscriptionsAttributes, "id" | "institute_id" | "subscription_plan_id" | "subscription_start_date" | "subscription_end_date" | "billing_cycle" | "amount_paid" | "payment_status" | "subscription_status" | "created_at" | "updated_at">

export class InstituteSubscriptionsEntity
  extends Model<InstituteSubscriptionsAttributes, InstituteSubscriptionsCreationAttributes>
  implements InstituteSubscriptionsAttributes
{
  declare id: number | null
  declare institute_id: number | null
  declare subscription_plan_id: number | null
  declare subscription_start_date: string | null
  declare subscription_end_date: string | null
  declare billing_cycle: string | null
  declare amount_paid: number | null
  declare payment_status: string | null
  declare subscription_status: string | null
  declare created_at: string | null
  declare updated_at: string | null
}

export function initInstituteSubscriptionsEntity(sequelize: Sequelize): typeof InstituteSubscriptionsEntity {
  InstituteSubscriptionsEntity.init(
    {
      id: {
        type: DataTypes.TEXT,
        field: 'id',
        allowNull: true,
      },
      institute_id: {
        type: DataTypes.TEXT,
        field: 'institute_id',
        allowNull: true,
      },
      subscription_plan_id: {
        type: DataTypes.TEXT,
        field: 'subscription_plan_id',
        allowNull: true,
      },
      subscription_start_date: {
        type: DataTypes.CHAR,
        field: 'subscription_start_date',
        allowNull: true,
        defaultValue: null,
      },
      subscription_end_date: {
        type: DataTypes.CHAR,
        field: 'subscription_end_date',
        allowNull: true,
        defaultValue: null,
      },
      billing_cycle: {
        type: DataTypes.CHAR,
        field: 'billing_cycle',
        allowNull: true,
        defaultValue: null,
      },
      amount_paid: {
        type: DataTypes.DECIMAL(6, 2),
        field: 'amount_paid',
        allowNull: true,
        defaultValue: null,
      },
      payment_status: {
        type: DataTypes.CHAR,
        field: 'payment_status',
        allowNull: true,
        defaultValue: null,
      },
      subscription_status: {
        type: DataTypes.CHAR,
        field: 'subscription_status',
        allowNull: true,
        defaultValue: null,
      },
      created_at: {
        type: DataTypes.CHAR,
        field: 'created_at',
        allowNull: true,
        defaultValue: null,
      },
      updated_at: {
        type: DataTypes.CHAR,
        field: 'updated_at',
        allowNull: true,
        defaultValue: null,
      }
    },
    {
      sequelize,
      tableName: 'institute_subscriptions',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: true
    }
  )
  return InstituteSubscriptionsEntity
}
