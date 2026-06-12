import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type ServiceTicketUserContentsAttributes = {
  id?: number
  service_ticket_id?: number
  customer_id?: number
  sub_id?: number
  user_id?: number
  content?: string | null
  created_at?: Date
  updated_at?: Date
}

export type ServiceTicketUserContentsCreationAttributes = Optional<ServiceTicketUserContentsAttributes, "id" | "service_ticket_id" | "customer_id" | "sub_id" | "user_id" | "content" | "created_at" | "updated_at">

export class ServiceTicketUserContentsEntity
  extends Model<ServiceTicketUserContentsAttributes, ServiceTicketUserContentsCreationAttributes>
  implements ServiceTicketUserContentsAttributes
{
  declare id: number
  declare service_ticket_id: number
  declare customer_id: number
  declare sub_id: number
  declare user_id: number
  declare content: string | null
  declare created_at: Date
  declare updated_at: Date
}

export function initServiceTicketUserContentsEntity(sequelize: Sequelize): typeof ServiceTicketUserContentsEntity {
  ServiceTicketUserContentsEntity.init(
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
        allowNull: false,
        defaultValue: "0",
      },
      customer_id: {
        type: DataTypes.INTEGER,
        field: 'customer_id',
        allowNull: false,
        defaultValue: "0",
      },
      sub_id: {
        type: DataTypes.INTEGER,
        field: 'sub_id',
        allowNull: false,
        defaultValue: "0",
      },
      user_id: {
        type: DataTypes.INTEGER,
        field: 'user_id',
        allowNull: false,
        defaultValue: "0",
      },
      content: {
        type: DataTypes.TEXT,
        field: 'content',
        allowNull: true,
      },
      created_at: {
        type: DataTypes.DATE,
        field: 'created_at',
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      updated_at: {
        type: DataTypes.DATE,
        field: 'updated_at',
        allowNull: false,
        defaultValue: DataTypes.NOW,
      }
    },
    {
      sequelize,
      tableName: 'service_ticket_user_contents',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: true
    }
  )
  return ServiceTicketUserContentsEntity
}
