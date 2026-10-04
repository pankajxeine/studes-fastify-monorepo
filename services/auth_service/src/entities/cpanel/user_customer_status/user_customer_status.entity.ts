import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type UserCustomerStatusAttributes = {
  id: number
  userId: string | number
  customerStatusId: string | number
  createdAt: Date
  updatedAt: Date
}

export type UserCustomerStatusCreationAttributes = Optional<UserCustomerStatusAttributes, never>

export class UserCustomerStatusEntity
  extends Model<UserCustomerStatusAttributes, UserCustomerStatusCreationAttributes>
  implements UserCustomerStatusAttributes
{
  declare id: number
  declare userId: string | number
  declare customerStatusId: string | number
  declare createdAt: Date
  declare updatedAt: Date
}

export function initUserCustomerStatusEntity(sequelize: Sequelize): typeof UserCustomerStatusEntity {
  UserCustomerStatusEntity.init(
    {
      id: {
        type: DataTypes.INTEGER,
        field: 'id',
        allowNull: false,
        primaryKey: true,
      },
      userId: {
        type: DataTypes.BIGINT,
        field: 'user_id',
        allowNull: false,
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
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: 'updated_at',
        allowNull: false,
      }
    },
    {
      sequelize,
      tableName: 'user_customer_status',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: false,
      indexes: [
      { unique: true, fields: ['id'] },
      { unique: true, fields: ['uq_user_customer_status_user_id_customer_status_id', 'user_id', 'customer_status_id'] }
      ]
    }
  )
  return UserCustomerStatusEntity
}
