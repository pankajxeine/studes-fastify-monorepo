import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type ServiceTicketsAttributes = {
  id?: string | null
  customer_id?: string | null
  service_ticket_type_id?: string | null
  service_ticket_number?: string | null
  subject?: string | null
  st_status?: string | null
  user_id?: string | null
  litepos_users?: string | null
  industry?: string | null
  sub_id?: string | null
  priority?: string | null
  followup_time?: string | null
  followup_date?: string | null
  email_followup?: string | null
  caller_name?: string | null
  call_direction?: string | null
  primary_service_request_id?: string | null
  notes?: string | null
  description?: string | null
  status?: string | null
  hours_elapsed?: string | null
  minutes_elapsed?: string | null
  is_new_client?: string | null
  created_by?: string | null
  updated_by?: string | null
  created_at?: string | null
  updated_at?: string | null
  deleted_at?: string | null
}

export type ServiceTicketsCreationAttributes = Optional<ServiceTicketsAttributes, "id" | "customer_id" | "service_ticket_type_id" | "service_ticket_number" | "subject" | "st_status" | "user_id" | "litepos_users" | "industry" | "sub_id" | "priority" | "followup_time" | "followup_date" | "email_followup" | "caller_name" | "call_direction" | "primary_service_request_id" | "notes" | "description" | "status" | "hours_elapsed" | "minutes_elapsed" | "is_new_client" | "created_by" | "updated_by" | "created_at" | "updated_at" | "deleted_at">

export class ServiceTicketsEntity
  extends Model<ServiceTicketsAttributes, ServiceTicketsCreationAttributes>
  implements ServiceTicketsAttributes
{
  declare id: string | null
  declare customer_id: string | null
  declare service_ticket_type_id: string | null
  declare service_ticket_number: string | null
  declare subject: string | null
  declare st_status: string | null
  declare user_id: string | null
  declare litepos_users: string | null
  declare industry: string | null
  declare sub_id: string | null
  declare priority: string | null
  declare followup_time: string | null
  declare followup_date: string | null
  declare email_followup: string | null
  declare caller_name: string | null
  declare call_direction: string | null
  declare primary_service_request_id: string | null
  declare notes: string | null
  declare description: string | null
  declare status: string | null
  declare hours_elapsed: string | null
  declare minutes_elapsed: string | null
  declare is_new_client: string | null
  declare created_by: string | null
  declare updated_by: string | null
  declare created_at: string | null
  declare updated_at: string | null
  declare deleted_at: string | null
}

export function initServiceTicketsEntity(sequelize: Sequelize): typeof ServiceTicketsEntity {
  ServiceTicketsEntity.init(
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
      service_ticket_type_id: {
        type: DataTypes.CHAR,
        field: 'service_ticket_type_id',
        allowNull: true,
        defaultValue: null,
      },
      service_ticket_number: {
        type: DataTypes.CHAR,
        field: 'service_ticket_number',
        allowNull: true,
        defaultValue: null,
      },
      subject: {
        type: DataTypes.CHAR,
        field: 'subject',
        allowNull: true,
        defaultValue: null,
      },
      st_status: {
        type: DataTypes.CHAR,
        field: 'st_status',
        allowNull: true,
        defaultValue: null,
      },
      user_id: {
        type: DataTypes.CHAR,
        field: 'user_id',
        allowNull: true,
        defaultValue: null,
      },
      litepos_users: {
        type: DataTypes.CHAR,
        field: 'litepos_users',
        allowNull: true,
        defaultValue: null,
      },
      industry: {
        type: DataTypes.CHAR,
        field: 'industry',
        allowNull: true,
        defaultValue: null,
      },
      sub_id: {
        type: DataTypes.CHAR,
        field: 'sub_id',
        allowNull: true,
        defaultValue: null,
      },
      priority: {
        type: DataTypes.CHAR,
        field: 'priority',
        allowNull: true,
        defaultValue: null,
      },
      followup_time: {
        type: DataTypes.CHAR,
        field: 'followup_time',
        allowNull: true,
        defaultValue: null,
      },
      followup_date: {
        type: DataTypes.CHAR,
        field: 'followup_date',
        allowNull: true,
        defaultValue: null,
      },
      email_followup: {
        type: DataTypes.CHAR,
        field: 'email_followup',
        allowNull: true,
        defaultValue: null,
      },
      caller_name: {
        type: DataTypes.CHAR,
        field: 'caller_name',
        allowNull: true,
        defaultValue: null,
      },
      call_direction: {
        type: DataTypes.CHAR,
        field: 'call_direction',
        allowNull: true,
        defaultValue: null,
      },
      primary_service_request_id: {
        type: DataTypes.CHAR,
        field: 'primary_service_request_id',
        allowNull: true,
        defaultValue: null,
      },
      notes: {
        type: DataTypes.CHAR,
        field: 'notes',
        allowNull: true,
        defaultValue: null,
      },
      description: {
        type: DataTypes.CHAR,
        field: 'description',
        allowNull: true,
        defaultValue: null,
      },
      status: {
        type: DataTypes.CHAR,
        field: 'status',
        allowNull: true,
        defaultValue: null,
      },
      hours_elapsed: {
        type: DataTypes.CHAR,
        field: 'hours_elapsed',
        allowNull: true,
        defaultValue: null,
      },
      minutes_elapsed: {
        type: DataTypes.CHAR,
        field: 'minutes_elapsed',
        allowNull: true,
        defaultValue: null,
      },
      is_new_client: {
        type: DataTypes.CHAR,
        field: 'is_new_client',
        allowNull: true,
        defaultValue: null,
      },
      created_by: {
        type: DataTypes.CHAR,
        field: 'created_by',
        allowNull: true,
        defaultValue: null,
      },
      updated_by: {
        type: DataTypes.CHAR,
        field: 'updated_by',
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
      deleted_at: {
        type: DataTypes.CHAR,
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
