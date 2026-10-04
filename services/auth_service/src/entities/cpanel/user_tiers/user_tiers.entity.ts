import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type UserTiersAttributes = {
  id?: number
  numberOfUsers?: number | null
}

export type UserTiersCreationAttributes = Optional<UserTiersAttributes, "id" | "numberOfUsers">

export class UserTiersEntity
  extends Model<UserTiersAttributes, UserTiersCreationAttributes>
  implements UserTiersAttributes
{
  declare id: number
  declare numberOfUsers: number | null
}

export function initUserTiersEntity(sequelize: Sequelize): typeof UserTiersEntity {
  UserTiersEntity.init(
    {
      id: {
        type: DataTypes.INTEGER,
        field: 'id',
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      numberOfUsers: {
        type: DataTypes.INTEGER,
        field: 'number_of_users',
        allowNull: true,
      }
    },
    {
      sequelize,
      tableName: 'user_tiers',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: false,
      indexes: [
      { unique: true, fields: ['id'] }
      ]
    }
  )
  return UserTiersEntity
}
