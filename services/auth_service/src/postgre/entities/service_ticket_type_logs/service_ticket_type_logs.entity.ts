import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type ServiceTicketTypeLogsAttributes = {
  id?: string | null
  service_ticket_id?: string | null
  service_ticket_type_id?: string | null
  hours_lapsed?: string | null
  minutes_lapsed?: string | null
  is_active?: string | null
  created_by?: string | null
  ticket_start_time?: string | null
  created_at?: string | null
  updated_at?: string | null
  cron_last_updated_at?: string | null
}

export type ServiceTicketTypeLogsCreationAttributes = Optional<ServiceTicketTypeLogsAttributes, "id" | "service_ticket_id" | "service_ticket_type_id" | "hours_lapsed" | "minutes_lapsed" | "is_active" | "created_by" | "ticket_start_time" | "created_at" | "updated_at" | "cron_last_updated_at">

export class ServiceTicketTypeLogsEntity
  extends Model<ServiceTicketTypeLogsAttributes, ServiceTicketTypeLogsCreationAttributes>
  implements ServiceTicketTypeLogsAttributes
{
  declare id: string | null
  declare service_ticket_id: string | null
  declare service_ticket_type_id: string | null
  declare hours_lapsed: string | null
  declare minutes_lapsed: string | null
  declare is_active: string | null
  declare created_by: string | null
  declare ticket_start_time: string | null
  declare created_at: string | null
  declare updated_at: string | null
  declare cron_last_updated_at: string | null
}

export function initServiceTicketTypeLogsEntity(sequelize: Sequelize): typeof ServiceTicketTypeLogsEntity {
  ServiceTicketTypeLogsEntity.init(
    {
      id: {
        type: DataTypes.CHAR,
        field: 'id',
        allowNull: true,
        defaultValue: null,
      },
      service_ticket_id: {
        type: DataTypes.CHAR,
        field: 'service_ticket_id',
        allowNull: true,
        defaultValue: null,
      },
      service_ticket_type_id: {
        type: DataTypes.CHAR,
        field: 'service_ticket_type_id',
        allowNull: true,
        defaultValue: null,
      },
      hours_lapsed: {
        type: DataTypes.CHAR,
        field: 'hours_lapsed',
        allowNull: true,
        defaultValue: null,
      },
      minutes_lapsed: {
        type: DataTypes.CHAR,
        field: 'minutes_lapsed',
        allowNull: true,
        defaultValue: null,
      },
      is_active: {
        type: DataTypes.CHAR,
        field: 'is_active',
        allowNull: true,
        defaultValue: null,
      },
      created_by: {
        type: DataTypes.CHAR,
        field: 'created_by',
        allowNull: true,
        defaultValue: null,
      },
      ticket_start_time: {
        type: DataTypes.CHAR,
        field: 'ticket_start_time',
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
      tableName: 'service_ticket_type_logs',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: true
    }
  )
  return ServiceTicketTypeLogsEntity
}
