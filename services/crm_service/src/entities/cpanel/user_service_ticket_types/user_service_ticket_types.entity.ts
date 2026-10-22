import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type UserServiceTicketTypesAttributes = {
  id?: string | number | null
  userId: string | number
  serviceTicketTypeId: string | number
  createdAt?: Date
  updatedAt?: Date
}

export type UserServiceTicketTypesCreationAttributes = Optional<UserServiceTicketTypesAttributes, "id" | "createdAt" | "updatedAt">

export class UserServiceTicketTypesEntity
  extends Model<UserServiceTicketTypesAttributes, UserServiceTicketTypesCreationAttributes>
  implements UserServiceTicketTypesAttributes
{
  declare id: string | number | null
  declare userId: string | number
  declare serviceTicketTypeId: string | number
  declare createdAt: Date
  declare updatedAt: Date
}

export function initUserServiceTicketTypesEntity(sequelize: Sequelize): typeof UserServiceTicketTypesEntity {
  UserServiceTicketTypesEntity.init(
    {
      id: {
        type: DataTypes.BIGINT,
        field: 'id',
        allowNull: true,
        primaryKey: true,
        autoIncrement: true,
        defaultValue: "AS IDENTITY",
      },
      userId: {
        type: DataTypes.BIGINT,
        field: 'user_id',
        allowNull: false,
        references: { model: 'users', key: 'id' },
      },
      serviceTicketTypeId: {
        type: DataTypes.BIGINT,
        field: 'service_ticket_type_id',
        allowNull: false,
        references: { model: 'service_ticket_types', key: 'id' },
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
      tableName: 'user_service_ticket_types',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['id'] },
      { unique: true, fields: ['user_id', 'service_ticket_type_id'] }
      ]
    }
  )
  return UserServiceTicketTypesEntity
}
