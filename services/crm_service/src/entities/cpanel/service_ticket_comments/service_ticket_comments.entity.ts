import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type ServiceTicketCommentsAttributes = {
  id?: string | number | null
  serviceTicketId?: number | null
  userId?: number | null
  userComment?: string | null
  createdAt?: Date
  updatedAt?: Date
}

export type ServiceTicketCommentsCreationAttributes = Optional<ServiceTicketCommentsAttributes, "id" | "serviceTicketId" | "userId" | "userComment" | "createdAt" | "updatedAt">

export class ServiceTicketCommentsEntity
  extends Model<ServiceTicketCommentsAttributes, ServiceTicketCommentsCreationAttributes>
  implements ServiceTicketCommentsAttributes
{
  declare id: string | number | null
  declare serviceTicketId: number | null
  declare userId: number | null
  declare userComment: string | null
  declare createdAt: Date
  declare updatedAt: Date
}

export function initServiceTicketCommentsEntity(sequelize: Sequelize): typeof ServiceTicketCommentsEntity {
  ServiceTicketCommentsEntity.init(
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
        type: DataTypes.TEXT,
        field: 'service_ticket_id',
        allowNull: true,
        references: { model: 'service_tickets', key: 'id' },
      },
      userId: {
        type: DataTypes.TEXT,
        field: 'user_id',
        allowNull: true,
        references: { model: 'users', key: 'id' },
      },
      userComment: {
        type: DataTypes.TEXT,
        field: 'user_comment',
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
      tableName: 'service_ticket_comments',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['id'] }
      ]
    }
  )
  return ServiceTicketCommentsEntity
}
