import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type UserTiersAttributes = {
  id?: string | number | null
  numberOfUsers?: number | null
  createdAt?: Date
  updatedAt?: Date
}

export type UserTiersCreationAttributes = Optional<UserTiersAttributes, "id" | "numberOfUsers" | "createdAt" | "updatedAt">

export class UserTiersEntity
  extends Model<UserTiersAttributes, UserTiersCreationAttributes>
  implements UserTiersAttributes
{
  declare id: string | number | null
  declare numberOfUsers: number | null
  declare createdAt: Date
  declare updatedAt: Date
}

export function initUserTiersEntity(sequelize: Sequelize): typeof UserTiersEntity {
  UserTiersEntity.init(
    {
      id: {
        type: DataTypes.BIGINT,
        field: 'id',
        allowNull: true,
        primaryKey: true,
        autoIncrement: true,
        defaultValue: "AS IDENTITY",
      },
      numberOfUsers: {
        type: DataTypes.INTEGER,
        field: 'number_of_users',
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
      tableName: 'user_tiers',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['id'] }
      ]
    }
  )
  return UserTiersEntity
}
