import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type ServiceTicketUserContentsAttributes = {
  id?: string | number | null
  serviceTicketId?: number | null
  customerId?: number | null
  subId?: number | null
  userId?: number | null
  content?: string | null
  createdAt?: Date
  updatedAt?: Date
}

export type ServiceTicketUserContentsCreationAttributes = Optional<ServiceTicketUserContentsAttributes, "id" | "serviceTicketId" | "customerId" | "subId" | "userId" | "content" | "createdAt" | "updatedAt">

export class ServiceTicketUserContentsEntity
  extends Model<ServiceTicketUserContentsAttributes, ServiceTicketUserContentsCreationAttributes>
  implements ServiceTicketUserContentsAttributes
{
  declare id: string | number | null
  declare serviceTicketId: number | null
  declare customerId: number | null
  declare subId: number | null
  declare userId: number | null
  declare content: string | null
  declare createdAt: Date
  declare updatedAt: Date
}

export function initServiceTicketUserContentsEntity(sequelize: Sequelize): typeof ServiceTicketUserContentsEntity {
  ServiceTicketUserContentsEntity.init(
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
      customerId: {
        type: DataTypes.TEXT,
        field: 'customer_id',
        allowNull: true,
        references: { model: 'customers', key: 'id' },
      },
      subId: {
        type: DataTypes.TEXT,
        field: 'sub_id',
        allowNull: true,
        references: { model: 'subs', key: 'id' },
      },
      userId: {
        type: DataTypes.TEXT,
        field: 'user_id',
        allowNull: true,
        references: { model: 'users', key: 'id' },
      },
      content: {
        type: DataTypes.TEXT,
        field: 'content',
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
      tableName: 'service_ticket_user_contents',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['id'] }
      ]
    }
  )
  return ServiceTicketUserContentsEntity
}
