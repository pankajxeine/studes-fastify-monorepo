import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type ServiceTicketTypeLogsAttributes = {
  id?: string | number | null
  serviceTicketId?: number | null
  serviceTicketTypeId?: number | null
  hoursLapsed?: string | null
  minutesLapsed?: string | null
  isActive?: string
  createdBy?: number | null
  ticketStartTime?: Date | null
  cronLastUpdatedAt?: Date | null
  createdAt?: Date
  updatedAt?: Date
}

export type ServiceTicketTypeLogsCreationAttributes = Optional<ServiceTicketTypeLogsAttributes, "id" | "serviceTicketId" | "serviceTicketTypeId" | "hoursLapsed" | "minutesLapsed" | "isActive" | "createdBy" | "ticketStartTime" | "cronLastUpdatedAt" | "createdAt" | "updatedAt">

export class ServiceTicketTypeLogsEntity
  extends Model<ServiceTicketTypeLogsAttributes, ServiceTicketTypeLogsCreationAttributes>
  implements ServiceTicketTypeLogsAttributes
{
  declare id: string | number | null
  declare serviceTicketId: number | null
  declare serviceTicketTypeId: number | null
  declare hoursLapsed: string | null
  declare minutesLapsed: string | null
  declare isActive: string
  declare createdBy: number | null
  declare ticketStartTime: Date | null
  declare cronLastUpdatedAt: Date | null
  declare createdAt: Date
  declare updatedAt: Date
}

export function initServiceTicketTypeLogsEntity(sequelize: Sequelize): typeof ServiceTicketTypeLogsEntity {
  ServiceTicketTypeLogsEntity.init(
    {
      id: {
        type: DataTypes.BIGINT,
        field: 'id',
        allowNull: true,
        primaryKey: true,
        autoIncrement: true,
        defaultValue: "AS IDENTITY",
      },
      serviceTicketId: {
        type: DataTypes.TEXT,
        field: 'service_ticket_id',
        allowNull: true,
        references: { model: 'service_tickets', key: 'id' },
      },
      serviceTicketTypeId: {
        type: DataTypes.TEXT,
        field: 'service_ticket_type_id',
        allowNull: true,
        references: { model: 'service_ticket_types', key: 'id' },
      },
      hoursLapsed: {
        type: DataTypes.STRING(1),
        field: 'hours_lapsed',
        allowNull: true,
      },
      minutesLapsed: {
        type: DataTypes.STRING(1),
        field: 'minutes_lapsed',
        allowNull: true,
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
      ticketStartTime: {
        type: DataTypes.DATE,
        field: 'ticket_start_time',
        allowNull: true,
      },
      cronLastUpdatedAt: {
        type: DataTypes.DATE,
        field: 'cron_last_updated_at',
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
      tableName: 'service_ticket_type_logs',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['id'] }
      ]
    }
  )
  return ServiceTicketTypeLogsEntity
}
