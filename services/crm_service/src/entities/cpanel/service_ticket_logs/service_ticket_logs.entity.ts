import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type ServiceTicketLogsAttributes = {
  id?: string | number | null
  ticketId?: number | null
  ticketTypeId?: number | null
  createdBy?: number | null
  createdAt?: Date
  updatedAt?: Date
}

export type ServiceTicketLogsCreationAttributes = Optional<ServiceTicketLogsAttributes, "id" | "ticketId" | "ticketTypeId" | "createdBy" | "createdAt" | "updatedAt">

export class ServiceTicketLogsEntity
  extends Model<ServiceTicketLogsAttributes, ServiceTicketLogsCreationAttributes>
  implements ServiceTicketLogsAttributes
{
  declare id: string | number | null
  declare ticketId: number | null
  declare ticketTypeId: number | null
  declare createdBy: number | null
  declare createdAt: Date
  declare updatedAt: Date
}

export function initServiceTicketLogsEntity(sequelize: Sequelize): typeof ServiceTicketLogsEntity {
  ServiceTicketLogsEntity.init(
    {
      id: {
        type: DataTypes.BIGINT,
        field: 'id',
        allowNull: true,
        primaryKey: true,
        autoIncrement: true,
        defaultValue: "AS IDENTITY",
      },
      ticketId: {
        type: DataTypes.TEXT,
        field: 'ticket_id',
        allowNull: true,
      },
      ticketTypeId: {
        type: DataTypes.TEXT,
        field: 'ticket_type_id',
        allowNull: true,
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
      updatedAt: {
        type: DataTypes.DATE,
        field: 'updated_at',
        allowNull: false,
        defaultValue: "DataTypes.NOW",
      }
    },
    {
      sequelize,
      tableName: 'service_ticket_logs',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['id'] }
      ]
    }
  )
  return ServiceTicketLogsEntity
}
