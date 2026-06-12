import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type ServiceTicketsAttributes = {
  id?: number
  customer_id?: number | null
  service_ticket_type_id: number
  service_ticket_number?: string | null
  subject: string
  st_status?: string
  user_id: number
  litepos_users?: unknown | null
  industry?: string | null
  sub_id?: number | null
  priority?: string
  followup_time?: string | null
  followup_date?: Date | null
  email_followup?: string
  caller_name?: string | null
  call_direction?: string
  primary_service_request_id: number
  notes: string
  description: string
  status?: string
  hours_elapsed?: number
  minutes_elapsed?: number
  is_new_client?: string
  created_by: number
  updated_by: number
  created_at: Date
  updated_at: Date
  deleted_at?: Date | null
}

export type ServiceTicketsCreationAttributes = Optional<ServiceTicketsAttributes, "id" | "customer_id" | "service_ticket_number" | "st_status" | "litepos_users" | "industry" | "sub_id" | "priority" | "followup_time" | "followup_date" | "email_followup" | "caller_name" | "call_direction" | "status" | "hours_elapsed" | "minutes_elapsed" | "is_new_client" | "deleted_at">

export class ServiceTicketsEntity
  extends Model<ServiceTicketsAttributes, ServiceTicketsCreationAttributes>
  implements ServiceTicketsAttributes
{
  declare id: number
  declare customer_id: number | null
  declare service_ticket_type_id: number
  declare service_ticket_number: string | null
  declare subject: string
  declare st_status: string
  declare user_id: number
  declare litepos_users: unknown | null
  declare industry: string | null
  declare sub_id: number | null
  declare priority: string
  declare followup_time: string | null
  declare followup_date: Date | null
  declare email_followup: string
  declare caller_name: string | null
  declare call_direction: string
  declare primary_service_request_id: number
  declare notes: string
  declare description: string
  declare status: string
  declare hours_elapsed: number
  declare minutes_elapsed: number
  declare is_new_client: string
  declare created_by: number
  declare updated_by: number
  declare created_at: Date
  declare updated_at: Date
  declare deleted_at: Date | null
}

export function initServiceTicketsEntity(sequelize: Sequelize): typeof ServiceTicketsEntity {
  ServiceTicketsEntity.init(
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
        defaultValue: "0",
      },
      service_ticket_type_id: {
        type: DataTypes.INTEGER,
        field: 'service_ticket_type_id',
        allowNull: false,
      },
      service_ticket_number: {
        type: DataTypes.STRING(100),
        field: 'service_ticket_number',
        allowNull: true,
        defaultValue: "",
      },
      subject: {
        type: DataTypes.STRING(50),
        field: 'subject',
        allowNull: false,
      },
      st_status: {
        type: DataTypes.ENUM('open','in-progress','closed'),
        field: 'st_status',
        allowNull: false,
        defaultValue: "Open",
      },
      user_id: {
        type: DataTypes.INTEGER,
        field: 'user_id',
        allowNull: false,
      },
      litepos_users: {
        type: DataTypes.JSON,
        field: 'litepos_users',
        allowNull: true,
        defaultValue: null,
      },
      industry: {
        type: DataTypes.STRING(50),
        field: 'industry',
        allowNull: true,
        defaultValue: null,
      },
      sub_id: {
        type: DataTypes.INTEGER,
        field: 'sub_id',
        allowNull: true,
        defaultValue: null,
      },
      priority: {
        type: DataTypes.ENUM('high','medium','low','blocker','critical'),
        field: 'priority',
        allowNull: false,
        defaultValue: "Low",
      },
      followup_time: {
        type: DataTypes.TIME,
        field: 'followup_time',
        allowNull: true,
        defaultValue: null,
      },
      followup_date: {
        type: DataTypes.DATEONLY,
        field: 'followup_date',
        allowNull: true,
        defaultValue: null,
      },
      email_followup: {
        type: DataTypes.ENUM('yes','no'),
        field: 'email_followup',
        allowNull: false,
        defaultValue: "No",
      },
      caller_name: {
        type: DataTypes.STRING(100),
        field: 'caller_name',
        allowNull: true,
        defaultValue: null,
      },
      call_direction: {
        type: DataTypes.ENUM('inbound','outbound'),
        field: 'call_direction',
        allowNull: false,
        defaultValue: "Inbound",
      },
      primary_service_request_id: {
        type: DataTypes.INTEGER,
        field: 'primary_service_request_id',
        allowNull: false,
      },
      notes: {
        type: DataTypes.TEXT,
        field: 'notes',
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        field: 'description',
        allowNull: false,
      },
      status: {
        type: DataTypes.ENUM('active','inactive'),
        field: 'status',
        allowNull: false,
        defaultValue: "Active",
      },
      hours_elapsed: {
        type: DataTypes.INTEGER,
        field: 'hours_elapsed',
        allowNull: false,
        defaultValue: "0",
      },
      minutes_elapsed: {
        type: DataTypes.INTEGER,
        field: 'minutes_elapsed',
        allowNull: false,
        defaultValue: "0",
      },
      is_new_client: {
        type: DataTypes.ENUM('yes','no'),
        field: 'is_new_client',
        allowNull: false,
        defaultValue: "No",
      },
      created_by: {
        type: DataTypes.INTEGER,
        field: 'created_by',
        allowNull: false,
      },
      updated_by: {
        type: DataTypes.INTEGER,
        field: 'updated_by',
        allowNull: false,
      },
      created_at: {
        type: DataTypes.DATE,
        field: 'created_at',
        allowNull: false,
      },
      updated_at: {
        type: DataTypes.DATE,
        field: 'updated_at',
        allowNull: false,
      },
      deleted_at: {
        type: DataTypes.DATE,
        field: 'deleted_at',
        allowNull: true,
        defaultValue: null,
      }
    },
    {
      sequelize,
      tableName: 'service_tickets',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: true
    }
  )
  return ServiceTicketsEntity
}
