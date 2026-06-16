import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type InstituteSubscriptionsAttributes = {
  id?: number | null
  instituteId?: number | null
  subscriptionPlanId?: number | null
  subscriptionStartDate?: Date | null
  subscriptionEndDate?: Date | null
  billingCycle?: string | null
  amountPaid?: number | null
  paymentStatus?: string | null
  subscriptionStatus?: string | null
  createdAt?: Date | null
  updatedAt?: Date | null
}

export type InstituteSubscriptionsCreationAttributes = Optional<InstituteSubscriptionsAttributes, "id" | "instituteId" | "subscriptionPlanId" | "subscriptionStartDate" | "subscriptionEndDate" | "billingCycle" | "amountPaid" | "paymentStatus" | "subscriptionStatus" | "createdAt" | "updatedAt">

export class InstituteSubscriptionsEntity
  extends Model<InstituteSubscriptionsAttributes, InstituteSubscriptionsCreationAttributes>
  implements InstituteSubscriptionsAttributes
{
  declare id: number | null
  declare instituteId: number | null
  declare subscriptionPlanId: number | null
  declare subscriptionStartDate: Date | null
  declare subscriptionEndDate: Date | null
  declare billingCycle: string | null
  declare amountPaid: number | null
  declare paymentStatus: string | null
  declare subscriptionStatus: string | null
  declare createdAt: Date | null
  declare updatedAt: Date | null
}

export function initInstituteSubscriptionsEntity(sequelize: Sequelize): typeof InstituteSubscriptionsEntity {
  InstituteSubscriptionsEntity.init(
    {
      id: {
        type: DataTypes.TEXT,
        field: 'id',
        allowNull: true,
        primaryKey: true,
      },
      instituteId: {
        type: DataTypes.TEXT,
        field: 'institute_id',
        allowNull: true,
      },
      subscriptionPlanId: {
        type: DataTypes.TEXT,
        field: 'subscription_plan_id',
        allowNull: true,
        references: { model: 'subscription_plans', key: 'id' },
        onDelete: 'CASCADE',
      },
      subscriptionStartDate: {
        type: DataTypes.DATE,
        field: 'subscription_start_date',
        allowNull: true,
      },
      subscriptionEndDate: {
        type: DataTypes.DATE,
        field: 'subscription_end_date',
        allowNull: true,
      },
      billingCycle: {
        type: DataTypes.TEXT,
        field: 'billing_cycle',
        allowNull: true,
        defaultValue: "Monthly",
      },
      amountPaid: {
        type: DataTypes.DECIMAL(6, 2),
        field: 'amount_paid',
        allowNull: true,
      },
      paymentStatus: {
        type: DataTypes.TEXT,
        field: 'payment_status',
        allowNull: true,
        defaultValue: "Pending",
      },
      subscriptionStatus: {
        type: DataTypes.TEXT,
        field: 'subscription_status',
        allowNull: true,
        defaultValue: "Active",
      },
      createdAt: {
        type: DataTypes.DATE,
        field: 'created_at',
        allowNull: true,
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: 'updated_at',
        allowNull: true,
      }
    },
    {
      sequelize,
      tableName: 'institute_subscriptions',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: false,
      indexes: [
      { unique: true, fields: ['id'] }
      ]
    }
  )
  return InstituteSubscriptionsEntity
}
