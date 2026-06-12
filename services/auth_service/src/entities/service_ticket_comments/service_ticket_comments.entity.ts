import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type ServiceTicketCommentsAttributes = {
  id?: number
  service_ticket_id?: number | null
  user_id?: number | null
  user_comment?: string | null
  created_at?: Date | null
  updated_at?: Date | null
  deleted_at?: Date | null
}

export type ServiceTicketCommentsCreationAttributes = Optional<ServiceTicketCommentsAttributes, "id" | "service_ticket_id" | "user_id" | "user_comment" | "created_at" | "updated_at" | "deleted_at">

export class ServiceTicketCommentsEntity
  extends Model<ServiceTicketCommentsAttributes, ServiceTicketCommentsCreationAttributes>
  implements ServiceTicketCommentsAttributes
{
  declare id: number
  declare service_ticket_id: number | null
  declare user_id: number | null
  declare user_comment: string | null
  declare created_at: Date | null
  declare updated_at: Date | null
  declare deleted_at: Date | null
}

export function initServiceTicketCommentsEntity(sequelize: Sequelize): typeof ServiceTicketCommentsEntity {
  ServiceTicketCommentsEntity.init(
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
      user_id: {
        type: DataTypes.INTEGER,
        field: 'user_id',
        allowNull: true,
        defaultValue: null,
      },
      user_comment: {
        type: DataTypes.TEXT,
        field: 'user_comment',
        allowNull: true,
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
      deleted_at: {
        type: DataTypes.DATE,
        field: 'deleted_at',
        allowNull: true,
        defaultValue: null,
      }
    },
    {
      sequelize,
      tableName: 'service_ticket_comments',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: true
    }
  )
  return ServiceTicketCommentsEntity
}
