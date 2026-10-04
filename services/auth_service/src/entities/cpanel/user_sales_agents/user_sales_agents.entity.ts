import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type UserSalesAgentsAttributes = {
  id: number
  userId: string | number
  salesAgentId: string | number
  createdAt: Date
  updatedAt: Date
}

export type UserSalesAgentsCreationAttributes = Optional<UserSalesAgentsAttributes, never>

export class UserSalesAgentsEntity
  extends Model<UserSalesAgentsAttributes, UserSalesAgentsCreationAttributes>
  implements UserSalesAgentsAttributes
{
  declare id: number
  declare userId: string | number
  declare salesAgentId: string | number
  declare createdAt: Date
  declare updatedAt: Date
}

export function initUserSalesAgentsEntity(sequelize: Sequelize): typeof UserSalesAgentsEntity {
  UserSalesAgentsEntity.init(
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
      salesAgentId: {
        type: DataTypes.BIGINT,
        field: 'sales_agent_id',
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
      tableName: 'user_sales_agents',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: false,
      indexes: [
      { unique: true, fields: ['id'] },
      { unique: true, fields: ['uq_user_sales_agents_user_id_sales_agent_id', 'user_id', 'sales_agent_id'] }
      ]
    }
  )
  return UserSalesAgentsEntity
}
