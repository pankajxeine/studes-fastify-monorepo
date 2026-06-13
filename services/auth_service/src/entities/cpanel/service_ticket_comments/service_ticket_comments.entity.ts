import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type ServiceTicketCommentsAttributes = {
  id?: number | null
  serviceTicketId?: number | null
  userId?: number | null
  userComment?: string | null
  createdAt?: Date | null
  updatedAt?: Date | null
}

export type ServiceTicketCommentsCreationAttributes = Optional<ServiceTicketCommentsAttributes, "id" | "serviceTicketId" | "userId" | "userComment" | "createdAt" | "updatedAt">

export class ServiceTicketCommentsEntity
  extends Model<ServiceTicketCommentsAttributes, ServiceTicketCommentsCreationAttributes>
  implements ServiceTicketCommentsAttributes
{
  declare id: number | null
  declare serviceTicketId: number | null
  declare userId: number | null
  declare userComment: string | null
  declare createdAt: Date | null
  declare updatedAt: Date | null
}

export function initServiceTicketCommentsEntity(sequelize: Sequelize): typeof ServiceTicketCommentsEntity {
  ServiceTicketCommentsEntity.init(
    {
      id: {
        type: DataTypes.TEXT,
        field: 'id',
        allowNull: true,
        primaryKey: true,
      },
      serviceTicketId: {
        type: DataTypes.TEXT,
        field: 'service_ticket_id',
        allowNull: true,
      },
      userId: {
        type: DataTypes.TEXT,
        field: 'user_id',
        allowNull: true,
      },
      userComment: {
        type: DataTypes.TEXT,
        field: 'user_comment',
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
      }
    },
    {
      sequelize,
      tableName: 'service_ticket_comments',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: true,
      indexes: [
      { unique: true, fields: ['id'] }
      ]
    }
  )
  return ServiceTicketCommentsEntity
}
