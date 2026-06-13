import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type CustomerStatusLogsAttributes = {
  id?: string | null
  customer_id?: string | null
  status_id?: string | null
  created_by?: string | null
  created_at?: string | null
  updated_at?: string | null
}

export type CustomerStatusLogsCreationAttributes = Optional<CustomerStatusLogsAttributes, "id" | "customer_id" | "status_id" | "created_by" | "created_at" | "updated_at">

export class CustomerStatusLogsEntity
  extends Model<CustomerStatusLogsAttributes, CustomerStatusLogsCreationAttributes>
  implements CustomerStatusLogsAttributes
{
  declare id: string | null
  declare customer_id: string | null
  declare status_id: string | null
  declare created_by: string | null
  declare created_at: string | null
  declare updated_at: string | null
}

export function initCustomerStatusLogsEntity(sequelize: Sequelize): typeof CustomerStatusLogsEntity {
  CustomerStatusLogsEntity.init(
    {
      id: {
        type: DataTypes.CHAR,
        field: 'id',
        allowNull: true,
        defaultValue: null,
      },
      customer_id: {
        type: DataTypes.CHAR,
        field: 'customer_id',
        allowNull: true,
        defaultValue: null,
      },
      status_id: {
        type: DataTypes.CHAR,
        field: 'status_id',
        allowNull: true,
        defaultValue: null,
      },
      created_by: {
        type: DataTypes.CHAR,
        field: 'created_by',
        allowNull: true,
        defaultValue: null,
      },
      created_at: {
        type: DataTypes.CHAR,
        field: 'created_at',
        allowNull: true,
        defaultValue: null,
      },
      updated_at: {
        type: DataTypes.CHAR,
        field: 'updated_at',
        allowNull: true,
        defaultValue: null,
      }
    },
    {
      sequelize,
      tableName: 'customer_status_logs',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: true
    }
  )
  return CustomerStatusLogsEntity
}
