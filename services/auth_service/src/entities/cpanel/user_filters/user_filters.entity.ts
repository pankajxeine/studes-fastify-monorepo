import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type UserFiltersAttributes = {
  id?: number
  filterModuleId?: number | null
  filterName?: string | null
  filterFields?: unknown | null
  createdBy?: number | null
  updatedBy?: number | null
  createdAt?: Date | null
  updatedAt?: Date | null
  deletedAt?: Date | null
}

export type UserFiltersCreationAttributes = Optional<UserFiltersAttributes, "id" | "filterModuleId" | "filterName" | "filterFields" | "createdBy" | "updatedBy" | "createdAt" | "updatedAt" | "deletedAt">

export class UserFiltersEntity
  extends Model<UserFiltersAttributes, UserFiltersCreationAttributes>
  implements UserFiltersAttributes
{
  declare id: number
  declare filterModuleId: number | null
  declare filterName: string | null
  declare filterFields: unknown | null
  declare createdBy: number | null
  declare updatedBy: number | null
  declare createdAt: Date | null
  declare updatedAt: Date | null
  declare deletedAt: Date | null
}

export function initUserFiltersEntity(sequelize: Sequelize): typeof UserFiltersEntity {
  UserFiltersEntity.init(
    {
      id: {
        type: DataTypes.INTEGER,
        field: 'id',
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      filterModuleId: {
        type: DataTypes.INTEGER,
        field: 'filter_module_id',
        allowNull: true,
      },
      filterName: {
        type: DataTypes.STRING(100),
        field: 'filter_name',
        allowNull: true,
      },
      filterFields: {
        type: DataTypes.JSONB,
        field: 'filter_fields',
        allowNull: true,
      },
      createdBy: {
        type: DataTypes.INTEGER,
        field: 'created_by',
        allowNull: true,
      },
      updatedBy: {
        type: DataTypes.INTEGER,
        field: 'updated_by',
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
      tableName: 'user_filters',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: false,
      indexes: [
      { unique: true, fields: ['id'] }
      ]
    }
  )
  return UserFiltersEntity
}
