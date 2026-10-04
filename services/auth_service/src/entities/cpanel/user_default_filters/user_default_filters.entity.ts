import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type UserDefaultFiltersAttributes = {
  id?: number
  moduleId?: number | null
  filterId?: number | null
  userId?: number | null
}

export type UserDefaultFiltersCreationAttributes = Optional<UserDefaultFiltersAttributes, "id" | "moduleId" | "filterId" | "userId">

export class UserDefaultFiltersEntity
  extends Model<UserDefaultFiltersAttributes, UserDefaultFiltersCreationAttributes>
  implements UserDefaultFiltersAttributes
{
  declare id: number
  declare moduleId: number | null
  declare filterId: number | null
  declare userId: number | null
}

export function initUserDefaultFiltersEntity(sequelize: Sequelize): typeof UserDefaultFiltersEntity {
  UserDefaultFiltersEntity.init(
    {
      id: {
        type: DataTypes.INTEGER,
        field: 'id',
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      moduleId: {
        type: DataTypes.INTEGER,
        field: 'module_id',
        allowNull: true,
      },
      filterId: {
        type: DataTypes.INTEGER,
        field: 'filter_id',
        allowNull: true,
      },
      userId: {
        type: DataTypes.INTEGER,
        field: 'user_id',
        allowNull: true,
      }
    },
    {
      sequelize,
      tableName: 'user_default_filters',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: false,
      indexes: [
      { unique: true, fields: ['id'] }
      ]
    }
  )
  return UserDefaultFiltersEntity
}
