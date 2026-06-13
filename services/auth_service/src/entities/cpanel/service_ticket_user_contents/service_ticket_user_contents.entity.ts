import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type ServiceTicketUserContentsAttributes = {
  id?: number | null
  serviceTicketId?: number | null
  customerId?: number | null
  subId?: number | null
  userId?: number | null
  content?: string | null
  createdAt?: Date | null
  updatedAt?: Date | null
  deletedAt?: Date | null
}

export type ServiceTicketUserContentsCreationAttributes = Optional<ServiceTicketUserContentsAttributes, "id" | "serviceTicketId" | "customerId" | "subId" | "userId" | "content" | "createdAt" | "updatedAt" | "deletedAt">

export class ServiceTicketUserContentsEntity
  extends Model<ServiceTicketUserContentsAttributes, ServiceTicketUserContentsCreationAttributes>
  implements ServiceTicketUserContentsAttributes
{
  declare id: number | null
  declare serviceTicketId: number | null
  declare customerId: number | null
  declare subId: number | null
  declare userId: number | null
  declare content: string | null
  declare createdAt: Date | null
  declare updatedAt: Date | null
  declare deletedAt: Date | null
}

export function initServiceTicketUserContentsEntity(sequelize: Sequelize): typeof ServiceTicketUserContentsEntity {
  ServiceTicketUserContentsEntity.init(
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
      customerId: {
        type: DataTypes.TEXT,
        field: 'customer_id',
        allowNull: true,
      },
      subId: {
        type: DataTypes.TEXT,
        field: 'sub_id',
        allowNull: true,
      },
      userId: {
        type: DataTypes.TEXT,
        field: 'user_id',
        allowNull: true,
      },
      content: {
        type: DataTypes.TEXT,
        field: 'content',
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
      tableName: 'service_ticket_user_contents',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: true,
      indexes: [
      { unique: true, fields: ['id'] }
      ]
    }
  )
  return ServiceTicketUserContentsEntity
}
