import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type CustomerStatusLogsAttributes = {
  id?: string | number | null
  customerId?: number | null
  statusId?: number | null
  createdAt?: Date
  updatedAt?: Date
}

export type CustomerStatusLogsCreationAttributes = Optional<CustomerStatusLogsAttributes, "id" | "customerId" | "statusId" | "createdAt" | "updatedAt">

export class CustomerStatusLogsEntity
  extends Model<CustomerStatusLogsAttributes, CustomerStatusLogsCreationAttributes>
  implements CustomerStatusLogsAttributes
{
  declare id: string | number | null
  declare customerId: number | null
  declare statusId: number | null
  declare createdAt: Date
  declare updatedAt: Date
}

export function initCustomerStatusLogsEntity(sequelize: Sequelize): typeof CustomerStatusLogsEntity {
  CustomerStatusLogsEntity.init(
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
        type: DataTypes.TEXT,
        field: 'customer_id',
        allowNull: true,
        references: { model: 'customers', key: 'id' },
      },
      statusId: {
        type: DataTypes.TEXT,
        field: 'status_id',
        allowNull: true,
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
      tableName: 'customer_status_logs',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['id'] }
      ]
    }
  )
  return CustomerStatusLogsEntity
}
