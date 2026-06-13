import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type CustomerStatusTimeLogsAttributes = {
  id?: number | null
  customer_id?: number | null
  customer_status_id?: number | null
  hours_lapsed?: number | null
  minutes_lapsed?: number | null
  is_active?: string | null
  created_by?: number | null
  created_at?: string | null
  start_time?: string | null
  updated_at?: string | null
  cron_last_updated_at?: string | null
}

export type CustomerStatusTimeLogsCreationAttributes = Optional<CustomerStatusTimeLogsAttributes, "id" | "customer_id" | "customer_status_id" | "hours_lapsed" | "minutes_lapsed" | "is_active" | "created_by" | "created_at" | "start_time" | "updated_at" | "cron_last_updated_at">

export class CustomerStatusTimeLogsEntity
  extends Model<CustomerStatusTimeLogsAttributes, CustomerStatusTimeLogsCreationAttributes>
  implements CustomerStatusTimeLogsAttributes
{
  declare id: number | null
  declare customer_id: number | null
  declare customer_status_id: number | null
  declare hours_lapsed: number | null
  declare minutes_lapsed: number | null
  declare is_active: string | null
  declare created_by: number | null
  declare created_at: string | null
  declare start_time: string | null
  declare updated_at: string | null
  declare cron_last_updated_at: string | null
}

export function initCustomerStatusTimeLogsEntity(sequelize: Sequelize): typeof CustomerStatusTimeLogsEntity {
  CustomerStatusTimeLogsEntity.init(
    {
      id: {
        type: DataTypes.TEXT,
        field: 'id',
        allowNull: true,
      },
      customer_id: {
        type: DataTypes.TEXT,
        field: 'customer_id',
        allowNull: true,
      },
      customer_status_id: {
        type: DataTypes.TEXT,
        field: 'customer_status_id',
        allowNull: true,
      },
      hours_lapsed: {
        type: DataTypes.TEXT,
        field: 'hours_lapsed',
        allowNull: true,
      },
      minutes_lapsed: {
        type: DataTypes.TEXT,
        field: 'minutes_lapsed',
        allowNull: true,
      },
      is_active: {
        type: DataTypes.CHAR,
        field: 'is_active',
        allowNull: true,
        defaultValue: null,
      },
      created_by: {
        type: DataTypes.TEXT,
        field: 'created_by',
        allowNull: true,
      },
      created_at: {
        type: DataTypes.CHAR,
        field: 'created_at',
        allowNull: true,
        defaultValue: null,
      },
      start_time: {
        type: DataTypes.CHAR,
        field: 'start_time',
        allowNull: true,
        defaultValue: null,
      },
      updated_at: {
        type: DataTypes.CHAR,
        field: 'updated_at',
        allowNull: true,
        defaultValue: null,
      },
      cron_last_updated_at: {
        type: DataTypes.CHAR,
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
