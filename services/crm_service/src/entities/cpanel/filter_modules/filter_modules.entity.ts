import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type FilterModulesAttributes = {
  id?: string | number | null
  name?: string
  createdAt?: Date
  updatedAt?: Date
}

export type FilterModulesCreationAttributes = Optional<FilterModulesAttributes, "id" | "name" | "createdAt" | "updatedAt">

export class FilterModulesEntity
  extends Model<FilterModulesAttributes, FilterModulesCreationAttributes>
  implements FilterModulesAttributes
{
  declare id: string | number | null
  declare name: string
  declare createdAt: Date
  declare updatedAt: Date
}

export function initFilterModulesEntity(sequelize: Sequelize): typeof FilterModulesEntity {
  FilterModulesEntity.init(
    {
      id: {
        type: DataTypes.BIGINT,
        field: 'id',
        allowNull: true,
        primaryKey: true,
        autoIncrement: true,
        defaultValue: "AS IDENTITY",
      },
      name: {
        type: DataTypes.STRING(100),
        field: 'name',
        allowNull: false,
        defaultValue: "",
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
      tableName: 'filter_modules',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['id'] }
      ]
    }
  )
  return FilterModulesEntity
}
