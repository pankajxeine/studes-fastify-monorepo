import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type SubscriptionPlansAttributes = {
  id?: string | number | null
  planName?: string | null
  instituteType?: string | null
  monthlyPrice?: number | null
  yearlyPrice?: number | null
  maxUsers?: number | null
  maxStudents?: number | null
  features?: unknown | null
  description?: string | null
  status?: string
  createdAt?: Date
  updatedAt?: Date
}

export type SubscriptionPlansCreationAttributes = Optional<SubscriptionPlansAttributes, "id" | "planName" | "instituteType" | "monthlyPrice" | "yearlyPrice" | "maxUsers" | "maxStudents" | "features" | "description" | "status" | "createdAt" | "updatedAt">

export class SubscriptionPlansEntity
  extends Model<SubscriptionPlansAttributes, SubscriptionPlansCreationAttributes>
  implements SubscriptionPlansAttributes
{
  declare id: string | number | null
  declare planName: string | null
  declare instituteType: string | null
  declare monthlyPrice: number | null
  declare yearlyPrice: number | null
  declare maxUsers: number | null
  declare maxStudents: number | null
  declare features: unknown | null
  declare description: string | null
  declare status: string
  declare createdAt: Date
  declare updatedAt: Date
}

export function initSubscriptionPlansEntity(sequelize: Sequelize): typeof SubscriptionPlansEntity {
  SubscriptionPlansEntity.init(
    {
      id: {
        type: DataTypes.BIGINT,
        field: 'id',
        allowNull: true,
        primaryKey: true,
        autoIncrement: true,
        defaultValue: "AS IDENTITY",
      },
      planName: {
        type: DataTypes.STRING(30),
        field: 'plan_name',
        allowNull: true,
      },
      instituteType: {
        type: DataTypes.STRING(7),
        field: 'institute_type',
        allowNull: true,
      },
      monthlyPrice: {
        type: DataTypes.DECIMAL(5, 2),
        field: 'monthly_price',
        allowNull: true,
      },
      yearlyPrice: {
        type: DataTypes.DECIMAL(6, 2),
        field: 'yearly_price',
        allowNull: true,
      },
      maxUsers: {
        type: DataTypes.TEXT,
        field: 'max_users',
        allowNull: true,
      },
      maxStudents: {
        type: DataTypes.TEXT,
        field: 'max_students',
        allowNull: true,
      },
      features: {
        type: DataTypes.JSONB,
        field: 'features',
        allowNull: true,
      },
      description: {
        type: DataTypes.TEXT,
        field: 'description',
        allowNull: true,
      },
      status: {
        type: DataTypes.TEXT,
        field: 'status',
        allowNull: false,
        defaultValue: "Active",
      },
      createdAt: {
        type: DataTypes.DATE,
        field: 'created_at',
        allowNull: false,
        defaultValue: "DataTypes.NOW",
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: 'updated_at',
        allowNull: false,
        defaultValue: "DataTypes.NOW",
      }
    },
    {
      sequelize,
      tableName: 'subscription_plans',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['id'] }
      ]
    }
  )
  return SubscriptionPlansEntity
}
