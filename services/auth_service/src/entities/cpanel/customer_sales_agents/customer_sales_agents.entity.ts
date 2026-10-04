import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type CustomerSalesAgentsAttributes = {
  id: number
  customerId: string | number
  salesAgentId: string | number
  createdAt: Date
  updatedAt: Date
}

export type CustomerSalesAgentsCreationAttributes = Optional<CustomerSalesAgentsAttributes, never>

export class CustomerSalesAgentsEntity
  extends Model<CustomerSalesAgentsAttributes, CustomerSalesAgentsCreationAttributes>
  implements CustomerSalesAgentsAttributes
{
  declare id: number
  declare customerId: string | number
  declare salesAgentId: string | number
  declare createdAt: Date
  declare updatedAt: Date
}

export function initCustomerSalesAgentsEntity(sequelize: Sequelize): typeof CustomerSalesAgentsEntity {
  CustomerSalesAgentsEntity.init(
    {
      id: {
        type: DataTypes.INTEGER,
        field: 'id',
        allowNull: false,
        primaryKey: true,
      },
      customerId: {
        type: DataTypes.BIGINT,
        field: 'customer_id',
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
      tableName: 'customer_sales_agents',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: false,
      indexes: [
      { unique: true, fields: ['id'] },
      { unique: true, fields: ['uq_customer_sales_agents_customer_id_sales_agent_id', 'customer_id', 'sales_agent_id'] }
      ]
    }
  )
  return CustomerSalesAgentsEntity
}
