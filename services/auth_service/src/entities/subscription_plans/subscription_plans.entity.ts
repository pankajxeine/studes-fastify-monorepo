import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type SubscriptionPlansAttributes = {
  id?: number
  plan_name: string
  institute_type: string
  monthly_price: number
  yearly_price?: number | null
  max_users: number
  max_students: number
  features?: unknown | null
  description?: string | null
  status?: string
  created_at?: Date
  updated_at?: Date
}

export type SubscriptionPlansCreationAttributes = Optional<SubscriptionPlansAttributes, "id" | "yearly_price" | "features" | "description" | "status" | "created_at" | "updated_at">

export class SubscriptionPlansEntity
  extends Model<SubscriptionPlansAttributes, SubscriptionPlansCreationAttributes>
  implements SubscriptionPlansAttributes
{
  declare id: number
  declare plan_name: string
  declare institute_type: string
  declare monthly_price: number
  declare yearly_price: number | null
  declare max_users: number
  declare max_students: number
  declare features: unknown | null
  declare description: string | null
  declare status: string
  declare created_at: Date
  declare updated_at: Date
}

export function initSubscriptionPlansEntity(sequelize: Sequelize): typeof SubscriptionPlansEntity {
  SubscriptionPlansEntity.init(
    {
      id: {
        type: DataTypes.INTEGER,
        field: 'id',
        allowNull: false,
        primaryKey: true ,
        autoIncrement: true,
      },
      plan_name: {
        type: DataTypes.STRING(100),
        field: 'plan_name',
        allowNull: false,
        unique: true,
      },
      institute_type: {
        type: DataTypes.ENUM('school','college','university','coaching center'),
        field: 'institute_type',
        allowNull: false,
        unique: true,
      },
      monthly_price: {
        type: DataTypes.DECIMAL(10,2),
        field: 'monthly_price',
        allowNull: false,
      },
      yearly_price: {
        type: DataTypes.DECIMAL(10,2),
        field: 'yearly_price',
        allowNull: true,
        defaultValue: null,
      },
      max_users: {
        type: DataTypes.INTEGER,
        field: 'max_users',
        allowNull: false,
      },
      max_students: {
        type: DataTypes.INTEGER,
        field: 'max_students',
        allowNull: false,
      },
      features: {
        type: DataTypes.JSON,
        field: 'features',
        allowNull: true,
        defaultValue: null,
      },
      description: {
        type: DataTypes.TEXT,
        field: 'description',
        allowNull: true,
      },
      status: {
        type: DataTypes.ENUM('active','inactive'),
        field: 'status',
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
      tableName: 'subscription_plans',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: true
    }
  )
  return SubscriptionPlansEntity
}
