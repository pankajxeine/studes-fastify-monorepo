import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type SubscriptionPlansAttributes = {
  id?: number | null
  planName?: string | null
  instituteType?: string | null
  monthlyPrice?: number | null
  yearlyPrice?: number | null
  maxUsers?: number | null
  maxStudents?: number | null
  features?: unknown | null
  description?: string | null
  status?: string
  createdAt?: Date | null
  updatedAt?: Date | null
  deletedAt?: Date | null
}

export type SubscriptionPlansCreationAttributes = Optional<SubscriptionPlansAttributes, "id" | "planName" | "instituteType" | "monthlyPrice" | "yearlyPrice" | "maxUsers" | "maxStudents" | "features" | "description" | "status" | "createdAt" | "updatedAt" | "deletedAt">

export class SubscriptionPlansEntity
  extends Model<SubscriptionPlansAttributes, SubscriptionPlansCreationAttributes>
  implements SubscriptionPlansAttributes
{
  declare id: number | null
  declare planName: string | null
  declare instituteType: string | null
  declare monthlyPrice: number | null
  declare yearlyPrice: number | null
  declare maxUsers: number | null
  declare maxStudents: number | null
  declare features: unknown | null
  declare description: string | null
  declare status: string
  declare createdAt: Date | null
  declare updatedAt: Date | null
  declare deletedAt: Date | null
}

export function initSubscriptionPlansEntity(sequelize: Sequelize): typeof SubscriptionPlansEntity {
  SubscriptionPlansEntity.init(
    {
      id: {
        type: DataTypes.TEXT,
        field: 'id',
        allowNull: true,
        primaryKey: true,
      },
      planName: {
        type: DataTypes.CHAR(30),
        field: 'plan_name',
        allowNull: true,
      },
      instituteType: {
        type: DataTypes.CHAR(7),
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
        allowNull: true,
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: 'updated_at',
        allowNull: true,
      },
      deletedAt: {
        type: DataTypes.DATE,
        field: 'deleted_at',
        allowNull: true,
      }
    },
    {
      sequelize,
      tableName: 'subscription_plans',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: true,
      indexes: [
      { unique: true, fields: ['id'] }
      ]
    }
  )
  return SubscriptionPlansEntity
}
