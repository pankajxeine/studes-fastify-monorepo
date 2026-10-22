import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type UserFiltersAttributes = {
  id?: string | number | null
  filterModuleId?: number | null
  filterName?: string | null
  filterFields?: unknown | null
  createdBy?: number | null
  updatedBy?: number | null
  createdAt?: Date
  updatedAt?: Date
}

export type UserFiltersCreationAttributes = Optional<UserFiltersAttributes, "id" | "filterModuleId" | "filterName" | "filterFields" | "createdBy" | "updatedBy" | "createdAt" | "updatedAt">

export class UserFiltersEntity
  extends Model<UserFiltersAttributes, UserFiltersCreationAttributes>
  implements UserFiltersAttributes
{
  declare id: string | number | null
  declare filterModuleId: number | null
  declare filterName: string | null
  declare filterFields: unknown | null
  declare createdBy: number | null
  declare updatedBy: number | null
  declare createdAt: Date
  declare updatedAt: Date
}

export function initUserFiltersEntity(sequelize: Sequelize): typeof UserFiltersEntity {
  UserFiltersEntity.init(
    {
      id: {
        type: DataTypes.BIGINT,
        field: 'id',
        allowNull: true,
        primaryKey: true,
        autoIncrement: true,
        defaultValue: "AS IDENTITY",
      },
      filterModuleId: {
        type: DataTypes.INTEGER,
        field: 'filter_module_id',
        allowNull: true,
        references: { model: 'filter_modules', key: 'id' },
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
      tableName: 'user_filters',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['id'] }
      ]
    }
  )
  return UserFiltersEntity
}
