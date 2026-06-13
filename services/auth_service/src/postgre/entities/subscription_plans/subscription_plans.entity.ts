import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type SubscriptionPlansAttributes = {
  id?: number | null
  plan_name?: string | null
  institute_type?: string | null
  monthly_price?: number | null
  yearly_price?: number | null
  max_users?: number | null
  max_students?: number | null
  features?: string | null
  description?: string | null
  status?: string | null
  created_at?: string | null
  updated_at?: string | null
}

export type SubscriptionPlansCreationAttributes = Optional<SubscriptionPlansAttributes, "id" | "plan_name" | "institute_type" | "monthly_price" | "yearly_price" | "max_users" | "max_students" | "features" | "description" | "status" | "created_at" | "updated_at">

export class SubscriptionPlansEntity
  extends Model<SubscriptionPlansAttributes, SubscriptionPlansCreationAttributes>
  implements SubscriptionPlansAttributes
{
  declare id: number | null
  declare plan_name: string | null
  declare institute_type: string | null
  declare monthly_price: number | null
  declare yearly_price: number | null
  declare max_users: number | null
  declare max_students: number | null
  declare features: string | null
  declare description: string | null
  declare status: string | null
  declare created_at: string | null
  declare updated_at: string | null
}

export function initSubscriptionPlansEntity(sequelize: Sequelize): typeof SubscriptionPlansEntity {
  SubscriptionPlansEntity.init(
    {
      id: {
        type: DataTypes.TEXT,
        field: 'id',
        allowNull: true,
      },
      plan_name: {
        type: DataTypes.CHAR,
        field: 'plan_name',
        allowNull: true,
        defaultValue: null,
      },
      institute_type: {
        type: DataTypes.CHAR,
        field: 'institute_type',
        allowNull: true,
        defaultValue: null,
      },
      monthly_price: {
        type: DataTypes.DECIMAL(5, 2),
        field: 'monthly_price',
        allowNull: true,
        defaultValue: null,
      },
      yearly_price: {
        type: DataTypes.DECIMAL(6, 2),
        field: 'yearly_price',
        allowNull: true,
        defaultValue: null,
      },
      max_users: {
        type: DataTypes.TEXT,
        field: 'max_users',
        allowNull: true,
      },
      max_students: {
        type: DataTypes.TEXT,
        field: 'max_students',
        allowNull: true,
      },
      features: {
        type: DataTypes.CHAR,
        field: 'features',
        allowNull: true,
        defaultValue: null,
      },
      description: {
        type: DataTypes.CHAR,
        field: 'description',
        allowNull: true,
        defaultValue: null,
      },
      status: {
        type: DataTypes.CHAR,
        field: 'status',
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
      tableName: 'subscription_plans',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: true
    }
  )
  return SubscriptionPlansEntity
}
