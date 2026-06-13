import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type ServiceTicketCommentsAttributes = {
  id?: string | null
  service_ticket_id?: string | null
  user_id?: string | null
  user_comment?: string | null
  created_at?: string | null
  updated_at?: string | null
  deleted_at?: string | null
}

export type ServiceTicketCommentsCreationAttributes = Optional<ServiceTicketCommentsAttributes, "id" | "service_ticket_id" | "user_id" | "user_comment" | "created_at" | "updated_at" | "deleted_at">

export class ServiceTicketCommentsEntity
  extends Model<ServiceTicketCommentsAttributes, ServiceTicketCommentsCreationAttributes>
  implements ServiceTicketCommentsAttributes
{
  declare id: string | null
  declare service_ticket_id: string | null
  declare user_id: string | null
  declare user_comment: string | null
  declare created_at: string | null
  declare updated_at: string | null
  declare deleted_at: string | null
}

export function initServiceTicketCommentsEntity(sequelize: Sequelize): typeof ServiceTicketCommentsEntity {
  ServiceTicketCommentsEntity.init(
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
      user_id: {
        type: DataTypes.CHAR,
        field: 'user_id',
        allowNull: true,
        defaultValue: null,
      },
      user_comment: {
        type: DataTypes.CHAR,
        field: 'user_comment',
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
      tableName: 'service_ticket_comments',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: true
    }
  )
  return ServiceTicketCommentsEntity
}
