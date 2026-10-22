import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type UserCustomerStatusAttributes = {
  id?: string | number | null
  userId: string | number
  customerStatusId: string | number
  createdAt?: Date
  updatedAt?: Date
}

export type UserCustomerStatusCreationAttributes = Optional<UserCustomerStatusAttributes, "id" | "createdAt" | "updatedAt">

export class UserCustomerStatusEntity
  extends Model<UserCustomerStatusAttributes, UserCustomerStatusCreationAttributes>
  implements UserCustomerStatusAttributes
{
  declare id: string | number | null
  declare userId: string | number
  declare customerStatusId: string | number
  declare createdAt: Date
  declare updatedAt: Date
}

export function initUserCustomerStatusEntity(sequelize: Sequelize): typeof UserCustomerStatusEntity {
  UserCustomerStatusEntity.init(
    {
      id: {
        type: DataTypes.BIGINT,
        field: 'id',
        allowNull: true,
        primaryKey: true,
        autoIncrement: true,
        defaultValue: "AS IDENTITY",
      },
      userId: {
        type: DataTypes.BIGINT,
        field: 'user_id',
        allowNull: false,
        references: { model: 'users', key: 'id' },
      },
      customerStatusId: {
        type: DataTypes.BIGINT,
        field: 'customer_status_id',
        allowNull: false,
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
      tableName: 'user_customer_status',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['id'] },
      { unique: true, fields: ['user_id', 'customer_status_id'] }
      ]
    }
  )
  return UserCustomerStatusEntity
}
