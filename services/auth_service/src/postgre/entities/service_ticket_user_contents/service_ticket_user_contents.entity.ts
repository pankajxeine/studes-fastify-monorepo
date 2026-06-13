import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type ServiceTicketUserContentsAttributes = {
  id?: string | null
  service_ticket_id?: string | null
  customer_id?: string | null
  sub_id?: string | null
  user_id?: string | null
  content?: string | null
  created_at?: string | null
  updated_at?: string | null
}

export type ServiceTicketUserContentsCreationAttributes = Optional<ServiceTicketUserContentsAttributes, "id" | "service_ticket_id" | "customer_id" | "sub_id" | "user_id" | "content" | "created_at" | "updated_at">

export class ServiceTicketUserContentsEntity
  extends Model<ServiceTicketUserContentsAttributes, ServiceTicketUserContentsCreationAttributes>
  implements ServiceTicketUserContentsAttributes
{
  declare id: string | null
  declare service_ticket_id: string | null
  declare customer_id: string | null
  declare sub_id: string | null
  declare user_id: string | null
  declare content: string | null
  declare created_at: string | null
  declare updated_at: string | null
}

export function initServiceTicketUserContentsEntity(sequelize: Sequelize): typeof ServiceTicketUserContentsEntity {
  ServiceTicketUserContentsEntity.init(
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
      customer_id: {
        type: DataTypes.CHAR,
        field: 'customer_id',
        allowNull: true,
        defaultValue: null,
      },
      sub_id: {
        type: DataTypes.CHAR,
        field: 'sub_id',
        allowNull: true,
        defaultValue: null,
      },
      user_id: {
        type: DataTypes.CHAR,
        field: 'user_id',
        allowNull: true,
        defaultValue: null,
      },
      content: {
        type: DataTypes.CHAR,
        field: 'content',
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
      tableName: 'service_ticket_user_contents',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: true
    }
  )
  return ServiceTicketUserContentsEntity
}
