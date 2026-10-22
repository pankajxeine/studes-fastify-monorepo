import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type UserDefaultFiltersAttributes = {
  id?: string | number | null
  moduleId?: number | null
  filterId?: number | null
  userId?: number | null
  createdAt?: Date
  updatedAt?: Date
}

export type UserDefaultFiltersCreationAttributes = Optional<UserDefaultFiltersAttributes, "id" | "moduleId" | "filterId" | "userId" | "createdAt" | "updatedAt">

export class UserDefaultFiltersEntity
  extends Model<UserDefaultFiltersAttributes, UserDefaultFiltersCreationAttributes>
  implements UserDefaultFiltersAttributes
{
  declare id: string | number | null
  declare moduleId: number | null
  declare filterId: number | null
  declare userId: number | null
  declare createdAt: Date
  declare updatedAt: Date
}

export function initUserDefaultFiltersEntity(sequelize: Sequelize): typeof UserDefaultFiltersEntity {
  UserDefaultFiltersEntity.init(
    {
      id: {
        type: DataTypes.BIGINT,
        field: 'id',
        allowNull: true,
        primaryKey: true,
        autoIncrement: true,
        defaultValue: "AS IDENTITY",
      },
      moduleId: {
        type: DataTypes.INTEGER,
        field: 'module_id',
        allowNull: true,
        references: { model: 'modules', key: 'id' },
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
        references: { model: 'users', key: 'id' },
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
      tableName: 'user_default_filters',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['id'] }
      ]
    }
  )
  return UserDefaultFiltersEntity
}
