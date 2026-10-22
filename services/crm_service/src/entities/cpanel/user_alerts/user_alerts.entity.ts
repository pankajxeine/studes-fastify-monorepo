import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type UserAlertsAttributes = {
  id?: string | number | null
  serviceTicketId?: number | null
  customerId?: number | null
  alertTypeId?: number | null
  summary?: string | null
  alertPriority?: string | null
  primaryServiceRequestId?: number | null
  alertStatus?: string | null
  createdBy?: number | null
  updatedBy?: number | null
  createdAt?: Date
  updatedAt?: Date
}

export type UserAlertsCreationAttributes = Optional<UserAlertsAttributes, "id" | "serviceTicketId" | "customerId" | "alertTypeId" | "summary" | "alertPriority" | "primaryServiceRequestId" | "alertStatus" | "createdBy" | "updatedBy" | "createdAt" | "updatedAt">

export class UserAlertsEntity
  extends Model<UserAlertsAttributes, UserAlertsCreationAttributes>
  implements UserAlertsAttributes
{
  declare id: string | number | null
  declare serviceTicketId: number | null
  declare customerId: number | null
  declare alertTypeId: number | null
  declare summary: string | null
  declare alertPriority: string | null
  declare primaryServiceRequestId: number | null
  declare alertStatus: string | null
  declare createdBy: number | null
  declare updatedBy: number | null
  declare createdAt: Date
  declare updatedAt: Date
}

export function initUserAlertsEntity(sequelize: Sequelize): typeof UserAlertsEntity {
  UserAlertsEntity.init(
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
        type: DataTypes.INTEGER,
        field: 'service_ticket_id',
        allowNull: true,
        references: { model: 'service_tickets', key: 'id' },
      },
      customerId: {
        type: DataTypes.INTEGER,
        field: 'customer_id',
        allowNull: true,
        references: { model: 'customers', key: 'id' },
      },
      alertTypeId: {
        type: DataTypes.INTEGER,
        field: 'alert_type_id',
        allowNull: true,
      },
      summary: {
        type: DataTypes.STRING(500),
        field: 'summary',
        allowNull: true,
      },
      alertPriority: {
        type: DataTypes.TEXT,
        field: 'alert_priority',
        allowNull: true,
      },
      primaryServiceRequestId: {
        type: DataTypes.INTEGER,
        field: 'primary_service_request_id',
        allowNull: true,
        references: { model: 'primary_service_requests', key: 'id' },
      },
      alertStatus: {
        type: DataTypes.TEXT,
        field: 'alert_status',
        allowNull: true,
      },
      createdBy: {
        type: DataTypes.INTEGER,
        field: 'created_by',
        allowNull: true,
      },
      updatedBy: {
        type: DataTypes.INTEGER,
        field: 'updated_by',
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
      tableName: 'user_alerts',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['id'] }
      ]
    }
  )
  return UserAlertsEntity
}
