import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type CustomerStatusLogsAttributes = {
  id?: number
  customer_id?: number | null
  status_id?: number | null
  created_by?: number | null
  created_at?: Date | null
  updated_at?: Date | null
}

export type CustomerStatusLogsCreationAttributes = Optional<CustomerStatusLogsAttributes, "id" | "customer_id" | "status_id" | "created_by" | "created_at" | "updated_at">

export class CustomerStatusLogsEntity
  extends Model<CustomerStatusLogsAttributes, CustomerStatusLogsCreationAttributes>
  implements CustomerStatusLogsAttributes
{
  declare id: number
  declare customer_id: number | null
  declare status_id: number | null
  declare created_by: number | null
  declare created_at: Date | null
  declare updated_at: Date | null
}

export function initCustomerStatusLogsEntity(sequelize: Sequelize): typeof CustomerStatusLogsEntity {
  CustomerStatusLogsEntity.init(
    {
      id: {
        type: DataTypes.INTEGER,
        field: 'id',
        allowNull: false,
        primaryKey: true ,
        autoIncrement: true,
      },
      customer_id: {
        type: DataTypes.INTEGER,
        field: 'customer_id',
        allowNull: true,
        defaultValue: null,
      },
      status_id: {
        type: DataTypes.INTEGER,
        field: 'status_id',
        allowNull: true,
        defaultValue: null,
      },
      created_by: {
        type: DataTypes.INTEGER,
        field: 'created_by',
        allowNull: true,
        defaultValue: null,
      },
      created_at: {
        type: DataTypes.DATE,
        field: 'created_at',
        allowNull: true,
        defaultValue: null,
      },
      updated_at: {
        type: DataTypes.DATE,
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
