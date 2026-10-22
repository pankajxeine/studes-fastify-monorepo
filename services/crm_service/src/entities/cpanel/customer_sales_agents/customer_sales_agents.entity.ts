import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type CustomerSalesAgentsAttributes = {
  id?: string | number | null
  customerId: string | number
  salesAgentId: string | number
  createdAt?: Date
  updatedAt?: Date
}

export type CustomerSalesAgentsCreationAttributes = Optional<CustomerSalesAgentsAttributes, "id" | "createdAt" | "updatedAt">

export class CustomerSalesAgentsEntity
  extends Model<CustomerSalesAgentsAttributes, CustomerSalesAgentsCreationAttributes>
  implements CustomerSalesAgentsAttributes
{
  declare id: string | number | null
  declare customerId: string | number
  declare salesAgentId: string | number
  declare createdAt: Date
  declare updatedAt: Date
}

export function initCustomerSalesAgentsEntity(sequelize: Sequelize): typeof CustomerSalesAgentsEntity {
  CustomerSalesAgentsEntity.init(
    {
      id: {
        type: DataTypes.BIGINT,
        field: 'id',
        allowNull: true,
        primaryKey: true,
        autoIncrement: true,
        defaultValue: "AS IDENTITY",
      },
      customerId: {
        type: DataTypes.BIGINT,
        field: 'customer_id',
        allowNull: false,
        references: { model: 'customers', key: 'id' },
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
      tableName: 'customer_sales_agents',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['id'] },
      { unique: true, fields: ['customer_id', 'sales_agent_id'] }
      ]
    }
  )
  return CustomerSalesAgentsEntity
}
