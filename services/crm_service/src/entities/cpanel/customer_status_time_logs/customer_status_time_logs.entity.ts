import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type CustomerStatusTimeLogsAttributes = {
  id?: string | number | null
  customerId?: number | null
  customerStatusId?: number | null
  hoursLapsed?: number | null
  minutesLapsed?: number | null
  isActive?: string
  createdBy?: number | null
  createdAt?: Date
  startTime?: Date | null
  updatedAt?: Date
  cronLastUpdatedAt?: Date | null
}

export type CustomerStatusTimeLogsCreationAttributes = Optional<CustomerStatusTimeLogsAttributes, "id" | "customerId" | "customerStatusId" | "hoursLapsed" | "minutesLapsed" | "isActive" | "createdBy" | "createdAt" | "startTime" | "updatedAt" | "cronLastUpdatedAt">

export class CustomerStatusTimeLogsEntity
  extends Model<CustomerStatusTimeLogsAttributes, CustomerStatusTimeLogsCreationAttributes>
  implements CustomerStatusTimeLogsAttributes
{
  declare id: string | number | null
  declare customerId: number | null
  declare customerStatusId: number | null
  declare hoursLapsed: number | null
  declare minutesLapsed: number | null
  declare isActive: string
  declare createdBy: number | null
  declare createdAt: Date
  declare startTime: Date | null
  declare updatedAt: Date
  declare cronLastUpdatedAt: Date | null
}

export function initCustomerStatusTimeLogsEntity(sequelize: Sequelize): typeof CustomerStatusTimeLogsEntity {
  CustomerStatusTimeLogsEntity.init(
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
      customerStatusId: {
        type: DataTypes.TEXT,
        field: 'customer_status_id',
        allowNull: true,
      },
      hoursLapsed: {
        type: DataTypes.TEXT,
        field: 'hours_lapsed',
        allowNull: true,
        defaultValue: 0,
      },
      minutesLapsed: {
        type: DataTypes.TEXT,
        field: 'minutes_lapsed',
        allowNull: true,
        defaultValue: 0,
      },
      isActive: {
        type: DataTypes.TEXT,
        field: 'is_active',
        allowNull: false,
        defaultValue: "FALSE",
      },
      createdBy: {
        type: DataTypes.TEXT,
        field: 'created_by',
        allowNull: true,
      },
      createdAt: {
        type: DataTypes.DATE,
        field: 'created_at',
        allowNull: false,
        defaultValue: "DataTypes.NOW",
      },
      startTime: {
        type: DataTypes.DATE,
        field: 'start_time',
        allowNull: true,
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: 'updated_at',
        allowNull: false,
        defaultValue: "DataTypes.NOW",
      },
      cronLastUpdatedAt: {
        type: DataTypes.DATE,
        field: 'cron_last_updated_at',
        allowNull: true,
      }
    },
    {
      sequelize,
      tableName: 'customer_status_time_logs',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['id'] }
      ]
    }
  )
  return CustomerStatusTimeLogsEntity
}
