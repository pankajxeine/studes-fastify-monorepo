import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type CustomerStatusTimeLogsAttributes = {
  id?: number
  customer_id?: number | null
  customer_status_id?: number | null
  hours_lapsed?: number | null
  minutes_lapsed?: number | null
  is_active?: string | null
  created_by?: number | null
  created_at?: Date | null
  start_time?: Date | null
  updated_at?: Date | null
  cron_last_updated_at?: Date | null
}

export type CustomerStatusTimeLogsCreationAttributes = Optional<CustomerStatusTimeLogsAttributes, "id" | "customer_id" | "customer_status_id" | "hours_lapsed" | "minutes_lapsed" | "is_active" | "created_by" | "created_at" | "start_time" | "updated_at" | "cron_last_updated_at">

export class CustomerStatusTimeLogsEntity
  extends Model<CustomerStatusTimeLogsAttributes, CustomerStatusTimeLogsCreationAttributes>
  implements CustomerStatusTimeLogsAttributes
{
  declare id: number
  declare customer_id: number | null
  declare customer_status_id: number | null
  declare hours_lapsed: number | null
  declare minutes_lapsed: number | null
  declare is_active: string | null
  declare created_by: number | null
  declare created_at: Date | null
  declare start_time: Date | null
  declare updated_at: Date | null
  declare cron_last_updated_at: Date | null
}

export function initCustomerStatusTimeLogsEntity(sequelize: Sequelize): typeof CustomerStatusTimeLogsEntity {
  CustomerStatusTimeLogsEntity.init(
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
      customer_status_id: {
        type: DataTypes.INTEGER,
        field: 'customer_status_id',
        allowNull: true,
        defaultValue: null,
      },
      hours_lapsed: {
        type: DataTypes.INTEGER,
        field: 'hours_lapsed',
        allowNull: true,
        defaultValue: "0",
      },
      minutes_lapsed: {
        type: DataTypes.INTEGER,
        field: 'minutes_lapsed',
        allowNull: true,
        defaultValue: "0",
      },
      is_active: {
        type: DataTypes.ENUM('true','false'),
        field: 'is_active',
        allowNull: true,
        defaultValue: null,
      },
      created_by: {
        type: DataTypes.INTEGER,
        field: 'created_by',
        allowNull: true,
        defaultValue: "0",
      },
      created_at: {
        type: DataTypes.DATE,
        field: 'created_at',
        allowNull: true,
        defaultValue: null,
      },
      start_time: {
        type: DataTypes.DATE,
        field: 'start_time',
        allowNull: true,
        defaultValue: null,
      },
      updated_at: {
        type: DataTypes.DATE,
        field: 'updated_at',
        allowNull: true,
        defaultValue: null,
      },
      cron_last_updated_at: {
        type: DataTypes.DATE,
        field: 'cron_last_updated_at',
        allowNull: true,
        defaultValue: null,
      }
    },
    {
      sequelize,
      tableName: 'customer_status_time_logs',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: true
    }
  )
  return CustomerStatusTimeLogsEntity
}
