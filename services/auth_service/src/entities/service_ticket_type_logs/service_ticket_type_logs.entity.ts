import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type ServiceTicketTypeLogsAttributes = {
  id?: number
  service_ticket_id?: number | null
  service_ticket_type_id?: number | null
  hours_lapsed?: number | null
  minutes_lapsed?: number | null
  is_active?: string | null
  created_by?: number | null
  ticket_start_time?: Date | null
  created_at?: Date | null
  updated_at?: Date | null
  cron_last_updated_at?: Date | null
}

export type ServiceTicketTypeLogsCreationAttributes = Optional<ServiceTicketTypeLogsAttributes, "id" | "service_ticket_id" | "service_ticket_type_id" | "hours_lapsed" | "minutes_lapsed" | "is_active" | "created_by" | "ticket_start_time" | "created_at" | "updated_at" | "cron_last_updated_at">

export class ServiceTicketTypeLogsEntity
  extends Model<ServiceTicketTypeLogsAttributes, ServiceTicketTypeLogsCreationAttributes>
  implements ServiceTicketTypeLogsAttributes
{
  declare id: number
  declare service_ticket_id: number | null
  declare service_ticket_type_id: number | null
  declare hours_lapsed: number | null
  declare minutes_lapsed: number | null
  declare is_active: string | null
  declare created_by: number | null
  declare ticket_start_time: Date | null
  declare created_at: Date | null
  declare updated_at: Date | null
  declare cron_last_updated_at: Date | null
}

export function initServiceTicketTypeLogsEntity(sequelize: Sequelize): typeof ServiceTicketTypeLogsEntity {
  ServiceTicketTypeLogsEntity.init(
    {
      id: {
        type: DataTypes.INTEGER,
        field: 'id',
        allowNull: false,
        primaryKey: true ,
        autoIncrement: true,
      },
      service_ticket_id: {
        type: DataTypes.INTEGER,
        field: 'service_ticket_id',
        allowNull: true,
        defaultValue: null,
      },
      service_ticket_type_id: {
        type: DataTypes.INTEGER,
        field: 'service_ticket_type_id',
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
      ticket_start_time: {
        type: DataTypes.DATE,
        field: 'ticket_start_time',
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
      tableName: 'service_ticket_type_logs',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: true
    }
  )
  return ServiceTicketTypeLogsEntity
}
