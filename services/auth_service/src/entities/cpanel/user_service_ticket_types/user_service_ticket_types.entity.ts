import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type UserServiceTicketTypesAttributes = {
  id: number
  userId: string | number
  serviceTicketTypeId: string | number
  createdAt: Date
  updatedAt: Date
}

export type UserServiceTicketTypesCreationAttributes = Optional<UserServiceTicketTypesAttributes, never>

export class UserServiceTicketTypesEntity
  extends Model<UserServiceTicketTypesAttributes, UserServiceTicketTypesCreationAttributes>
  implements UserServiceTicketTypesAttributes
{
  declare id: number
  declare userId: string | number
  declare serviceTicketTypeId: string | number
  declare createdAt: Date
  declare updatedAt: Date
}

export function initUserServiceTicketTypesEntity(sequelize: Sequelize): typeof UserServiceTicketTypesEntity {
  UserServiceTicketTypesEntity.init(
    {
      id: {
        type: DataTypes.INTEGER,
        field: 'id',
        allowNull: false,
        primaryKey: true,
      },
      userId: {
        type: DataTypes.BIGINT,
        field: 'user_id',
        allowNull: false,
      },
      serviceTicketTypeId: {
        type: DataTypes.BIGINT,
        field: 'service_ticket_type_id',
        allowNull: false,
      },
      createdAt: {
        type: DataTypes.DATE,
        field: 'created_at',
        allowNull: false,
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: 'updated_at',
        allowNull: false,
      }
    },
    {
      sequelize,
      tableName: 'user_service_ticket_types',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: false,
      indexes: [
      { unique: true, fields: ['id'] },
      { unique: true, fields: ['uq_user_service_ticket_types_user_id_service_ticket_type_id', 'user_id', 'service_ticket_type_id'] }
      ]
    }
  )
  return UserServiceTicketTypesEntity
}
