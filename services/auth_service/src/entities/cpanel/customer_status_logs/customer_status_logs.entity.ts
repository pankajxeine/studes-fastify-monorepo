import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type CustomerStatusLogsAttributes = {
  id?: number | null
  customerId?: number | null
  statusId?: number | null
  createdAt?: Date | null
  updatedAt?: Date | null
  deletedAt?: Date | null
}

export type CustomerStatusLogsCreationAttributes = Optional<CustomerStatusLogsAttributes, "id" | "customerId" | "statusId" | "createdAt" | "updatedAt" | "deletedAt">

export class CustomerStatusLogsEntity
  extends Model<CustomerStatusLogsAttributes, CustomerStatusLogsCreationAttributes>
  implements CustomerStatusLogsAttributes
{
  declare id: number | null
  declare customerId: number | null
  declare statusId: number | null
  declare createdAt: Date | null
  declare updatedAt: Date | null
  declare deletedAt: Date | null
}

export function initCustomerStatusLogsEntity(sequelize: Sequelize): typeof CustomerStatusLogsEntity {
  CustomerStatusLogsEntity.init(
    {
      id: {
        type: DataTypes.TEXT,
        field: 'id',
        allowNull: true,
        primaryKey: true,
      },
      customerId: {
        type: DataTypes.TEXT,
        field: 'customer_id',
        allowNull: true,
      },
      statusId: {
        type: DataTypes.TEXT,
        field: 'status_id',
        allowNull: true,
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
      tableName: 'customer_status_logs',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: true,
      indexes: [
      { unique: true, fields: ['id'] }
      ]
    }
  )
  return CustomerStatusLogsEntity
}
