import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type ServiceTicketsAttributes = {
  id?: number | null
  customerId?: number | null
  serviceTicketTypeId?: number | null
  serviceTicketNumber?: number | null
  subject?: string | null
  stStatus?: string
  userId?: number | null
  assignUsers?: number | null
  industry?: number | null
  subId?: number | null
  priority?: string
  followupTime?: Date | null
  followupDate?: string | null
  emailFollowup?: string
  callerName?: string | null
  callDirection?: string
  primaryServiceRequestId?: number | null
  notes?: string | null
  description?: string | null
  status?: string | null
  hoursElapsed?: number | null
  minutesElapsed?: number | null
  isNewClient?: string | null
  createdBy?: number | null
  updatedBy?: number | null
  createdAt?: Date | null
  updatedAt?: Date | null
  deletedAt?: Date | null
}

export type ServiceTicketsCreationAttributes = Optional<ServiceTicketsAttributes, "id" | "customerId" | "serviceTicketTypeId" | "serviceTicketNumber" | "subject" | "stStatus" | "userId" | "assignUsers" | "industry" | "subId" | "priority" | "followupTime" | "followupDate" | "emailFollowup" | "callerName" | "callDirection" | "primaryServiceRequestId" | "notes" | "description" | "status" | "hoursElapsed" | "minutesElapsed" | "isNewClient" | "createdBy" | "updatedBy" | "createdAt" | "updatedAt" | "deletedAt">

export class ServiceTicketsEntity
  extends Model<ServiceTicketsAttributes, ServiceTicketsCreationAttributes>
  implements ServiceTicketsAttributes
{
  declare id: number | null
  declare customerId: number | null
  declare serviceTicketTypeId: number | null
  declare serviceTicketNumber: number | null
  declare subject: string | null
  declare stStatus: string
  declare userId: number | null
  declare assignUsers: number | null
  declare industry: number | null
  declare subId: number | null
  declare priority: string
  declare followupTime: Date | null
  declare followupDate: string | null
  declare emailFollowup: string
  declare callerName: string | null
  declare callDirection: string
  declare primaryServiceRequestId: number | null
  declare notes: string | null
  declare description: string | null
  declare status: string | null
  declare hoursElapsed: number | null
  declare minutesElapsed: number | null
  declare isNewClient: string | null
  declare createdBy: number | null
  declare updatedBy: number | null
  declare createdAt: Date | null
  declare updatedAt: Date | null
  declare deletedAt: Date | null
}

export function initServiceTicketsEntity(sequelize: Sequelize): typeof ServiceTicketsEntity {
  ServiceTicketsEntity.init(
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
      serviceTicketTypeId: {
        type: DataTypes.TEXT,
        field: 'service_ticket_type_id',
        allowNull: true,
      },
      serviceTicketNumber: {
        type: DataTypes.TEXT,
        field: 'service_ticket_number',
        allowNull: true,
      },
      subject: {
        type: DataTypes.CHAR(100),
        field: 'subject',
        allowNull: true,
      },
      stStatus: {
        type: DataTypes.TEXT,
        field: 'st_status',
        allowNull: false,
        defaultValue: "Open",
      },
      userId: {
        type: DataTypes.TEXT,
        field: 'user_id',
        allowNull: true,
      },
      assignUsers: {
        type: DataTypes.TEXT,
        field: 'assign_users',
        allowNull: true,
      },
      industry: {
        type: DataTypes.TEXT,
        field: 'industry',
        allowNull: true,
      },
      subId: {
        type: DataTypes.TEXT,
        field: 'sub_id',
        allowNull: true,
      },
      priority: {
        type: DataTypes.TEXT,
        field: 'priority',
        allowNull: false,
        defaultValue: "Low",
      },
      followupTime: {
        type: DataTypes.TIME,
        field: 'followup_time',
        allowNull: true,
      },
      followupDate: {
        type: DataTypes.TEXT,
        field: 'followup_date',
        allowNull: true,
      },
      emailFollowup: {
        type: DataTypes.TEXT,
        field: 'email_followup',
        allowNull: false,
        defaultValue: "No",
      },
      callerName: {
        type: DataTypes.CHAR(30),
        field: 'caller_name',
        allowNull: true,
      },
      callDirection: {
        type: DataTypes.TEXT,
        field: 'call_direction',
        allowNull: false,
        defaultValue: "Inbound",
      },
      primaryServiceRequestId: {
        type: DataTypes.TEXT,
        field: 'primary_service_request_id',
        allowNull: true,
      },
      notes: {
        type: DataTypes.TEXT,
        field: 'notes',
        allowNull: true,
      },
      description: {
        type: DataTypes.CHAR(1),
        field: 'description',
        allowNull: true,
      },
      status: {
        type: DataTypes.CHAR(1),
        field: 'status',
        allowNull: true,
      },
      hoursElapsed: {
        type: DataTypes.TEXT,
        field: 'hours_elapsed',
        allowNull: true,
        defaultValue: 0,
      },
      minutesElapsed: {
        type: DataTypes.TEXT,
        field: 'minutes_elapsed',
        allowNull: true,
        defaultValue: 0,
      },
      isNewClient: {
        type: DataTypes.CHAR(1),
        field: 'is_new_client',
        allowNull: true,
      },
      createdBy: {
        type: DataTypes.TEXT,
        field: 'created_by',
        allowNull: true,
      },
      updatedBy: {
        type: DataTypes.TEXT,
        field: 'updated_by',
        allowNull: true,
      },
      createdAt: {
        type: DataTypes.DATE,
        field: 'created_at',
        allowNull: true,
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: 'updated_at',
        allowNull: true,
      },
      deletedAt: {
        type: DataTypes.DATE,
        field: 'deleted_at',
        allowNull: true,
      }
    },
    {
      sequelize,
      tableName: 'service_tickets',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: true,
      indexes: [
      { unique: true, fields: ['id'] }
      ]
    }
  )
  return ServiceTicketsEntity
}
