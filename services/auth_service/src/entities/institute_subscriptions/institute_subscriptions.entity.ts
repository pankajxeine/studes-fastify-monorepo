import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type InstituteSubscriptionsAttributes = {
  id?: number
  institute_id: number
  subscription_plan_id: number
  subscription_start_date: Date
  subscription_end_date: Date
  billing_cycle?: string
  amount_paid?: number | null
  payment_status?: string
  subscription_status?: string
  created_at?: Date
  updated_at?: Date
}

export type InstituteSubscriptionsCreationAttributes = Optional<InstituteSubscriptionsAttributes, "id" | "billing_cycle" | "amount_paid" | "payment_status" | "subscription_status" | "created_at" | "updated_at">

export class InstituteSubscriptionsEntity
  extends Model<InstituteSubscriptionsAttributes, InstituteSubscriptionsCreationAttributes>
  implements InstituteSubscriptionsAttributes
{
  declare id: number
  declare institute_id: number
  declare subscription_plan_id: number
  declare subscription_start_date: Date
  declare subscription_end_date: Date
  declare billing_cycle: string
  declare amount_paid: number | null
  declare payment_status: string
  declare subscription_status: string
  declare created_at: Date
  declare updated_at: Date
}

export function initInstituteSubscriptionsEntity(sequelize: Sequelize): typeof InstituteSubscriptionsEntity {
  InstituteSubscriptionsEntity.init(
    {
      id: {
        type: DataTypes.INTEGER,
        field: 'id',
        allowNull: false,
        primaryKey: true ,
        autoIncrement: true,
      },
      institute_id: {
        type: DataTypes.INTEGER,
        field: 'institute_id',
        allowNull: false,
      },
      subscription_plan_id: {
        type: DataTypes.INTEGER,
        field: 'subscription_plan_id',
        allowNull: false,
      },
      subscription_start_date: {
        type: DataTypes.DATE,
        field: 'subscription_start_date',
        allowNull: false,
      },
      subscription_end_date: {
        type: DataTypes.DATE,
        field: 'subscription_end_date',
        allowNull: false,
      },
      billing_cycle: {
        type: DataTypes.ENUM('monthly','yearly'),
        field: 'billing_cycle',
        allowNull: false,
        defaultValue: "Monthly",
      },
      amount_paid: {
        type: DataTypes.DECIMAL(10,2),
        field: 'amount_paid',
        allowNull: true,
        defaultValue: null,
      },
      payment_status: {
        type: DataTypes.ENUM('pending','paid','overdue','cancelled'),
        field: 'payment_status',
        allowNull: false,
        defaultValue: "Pending",
      },
      subscription_status: {
        type: DataTypes.ENUM('active','inactive','suspended','expired'),
        field: 'subscription_status',
        allowNull: false,
        defaultValue: "Active",
      },
      created_at: {
        type: DataTypes.DATE,
        field: 'created_at',
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      updated_at: {
        type: DataTypes.DATE,
        field: 'updated_at',
        allowNull: false,
        defaultValue: DataTypes.NOW,
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
