import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type ServiceTicketLogsAttributes = {
  id?: string | null
  ticket_id?: string | null
  ticket_type_id?: string | null
  created_by?: string | null
  created_at?: string | null
  updated_at?: string | null
}

export type ServiceTicketLogsCreationAttributes = Optional<ServiceTicketLogsAttributes, "id" | "ticket_id" | "ticket_type_id" | "created_by" | "created_at" | "updated_at">

export class ServiceTicketLogsEntity
  extends Model<ServiceTicketLogsAttributes, ServiceTicketLogsCreationAttributes>
  implements ServiceTicketLogsAttributes
{
  declare id: string | null
  declare ticket_id: string | null
  declare ticket_type_id: string | null
  declare created_by: string | null
  declare created_at: string | null
  declare updated_at: string | null
}

export function initServiceTicketLogsEntity(sequelize: Sequelize): typeof ServiceTicketLogsEntity {
  ServiceTicketLogsEntity.init(
    {
      id: {
        type: DataTypes.CHAR,
        field: 'id',
        allowNull: true,
        defaultValue: null,
      },
      ticket_id: {
        type: DataTypes.CHAR,
        field: 'ticket_id',
        allowNull: true,
        defaultValue: null,
      },
      ticket_type_id: {
        type: DataTypes.CHAR,
        field: 'ticket_type_id',
        allowNull: true,
        defaultValue: null,
      },
      created_by: {
        type: DataTypes.CHAR,
        field: 'created_by',
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
      }
    },
    {
      sequelize,
      tableName: 'service_ticket_logs',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: true
    }
  )
  return ServiceTicketLogsEntity
}
