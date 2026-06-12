import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type ServiceTicketLogsAttributes = {
  id?: number
  ticket_id?: number | null
  ticket_type_id?: number | null
  created_by?: number | null
  created_at?: Date | null
  updated_at?: Date | null
}

export type ServiceTicketLogsCreationAttributes = Optional<ServiceTicketLogsAttributes, "id" | "ticket_id" | "ticket_type_id" | "created_by" | "created_at" | "updated_at">

export class ServiceTicketLogsEntity
  extends Model<ServiceTicketLogsAttributes, ServiceTicketLogsCreationAttributes>
  implements ServiceTicketLogsAttributes
{
  declare id: number
  declare ticket_id: number | null
  declare ticket_type_id: number | null
  declare created_by: number | null
  declare created_at: Date | null
  declare updated_at: Date | null
}

export function initServiceTicketLogsEntity(sequelize: Sequelize): typeof ServiceTicketLogsEntity {
  ServiceTicketLogsEntity.init(
    {
      id: {
        type: DataTypes.INTEGER,
        field: 'id',
        allowNull: false,
        primaryKey: true ,
        autoIncrement: true,
      },
      ticket_id: {
        type: DataTypes.INTEGER,
        field: 'ticket_id',
        allowNull: true,
        defaultValue: null,
      },
      ticket_type_id: {
        type: DataTypes.INTEGER,
        field: 'ticket_type_id',
        allowNull: true,
        defaultValue: null,
      },
      created_by: {
        type: DataTypes.INTEGER,
        field: 'created_by',
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
