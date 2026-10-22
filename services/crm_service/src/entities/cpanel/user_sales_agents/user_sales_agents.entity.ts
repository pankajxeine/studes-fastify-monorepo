import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type UserSalesAgentsAttributes = {
  id?: string | number | null
  userId: string | number
  salesAgentId: string | number
  createdAt?: Date
  updatedAt?: Date
}

export type UserSalesAgentsCreationAttributes = Optional<UserSalesAgentsAttributes, "id" | "createdAt" | "updatedAt">

export class UserSalesAgentsEntity
  extends Model<UserSalesAgentsAttributes, UserSalesAgentsCreationAttributes>
  implements UserSalesAgentsAttributes
{
  declare id: string | number | null
  declare userId: string | number
  declare salesAgentId: string | number
  declare createdAt: Date
  declare updatedAt: Date
}

export function initUserSalesAgentsEntity(sequelize: Sequelize): typeof UserSalesAgentsEntity {
  UserSalesAgentsEntity.init(
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
      salesAgentId: {
        type: DataTypes.BIGINT,
        field: 'sales_agent_id',
        allowNull: false,
        references: { model: 'sales_agents', key: 'id' },
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
      tableName: 'user_sales_agents',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['id'] },
      { unique: true, fields: ['user_id', 'sales_agent_id'] }
      ]
    }
  )
  return UserSalesAgentsEntity
}
