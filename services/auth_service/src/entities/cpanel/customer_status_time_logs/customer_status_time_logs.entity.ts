import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type CustomerStatusTimeLogsAttributes = {
  id?: number | null
  customerId?: number | null
  customerStatusId?: number | null
  hoursLapsed?: number | null
  minutesLapsed?: number | null
  isActive?: string | null
  createdBy?: number | null
  createdAt?: Date | null
  startTime?: Date | null
  updatedAt?: Date | null
  cronLastUpdatedAt?: Date | null
}

export type CustomerStatusTimeLogsCreationAttributes = Optional<CustomerStatusTimeLogsAttributes, "id" | "customerId" | "customerStatusId" | "hoursLapsed" | "minutesLapsed" | "isActive" | "createdBy" | "createdAt" | "startTime" | "updatedAt" | "cronLastUpdatedAt">

export class CustomerStatusTimeLogsEntity
  extends Model<CustomerStatusTimeLogsAttributes, CustomerStatusTimeLogsCreationAttributes>
  implements CustomerStatusTimeLogsAttributes
{
  declare id: number | null
  declare customerId: number | null
  declare customerStatusId: number | null
  declare hoursLapsed: number | null
  declare minutesLapsed: number | null
  declare isActive: string | null
  declare createdBy: number | null
  declare createdAt: Date | null
  declare startTime: Date | null
  declare updatedAt: Date | null
  declare cronLastUpdatedAt: Date | null
}

export function initCustomerStatusTimeLogsEntity(sequelize: Sequelize): typeof CustomerStatusTimeLogsEntity {
  CustomerStatusTimeLogsEntity.init(
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
        allowNull: true,
        defaultValue: "False",
      },
      createdBy: {
        type: DataTypes.TEXT,
        field: 'created_by',
        allowNull: true,
      },
      createdAt: {
        type: DataTypes.DATE,
        field: 'created_at',
        allowNull: true,
      },
      startTime: {
        type: DataTypes.DATE,
        field: 'start_time',
        allowNull: true,
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: 'updated_at',
        allowNull: true,
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
      paranoid: false,
      indexes: [
      { unique: true, fields: ['id'] }
      ]
    }
  )
  return CustomerStatusTimeLogsEntity
}
