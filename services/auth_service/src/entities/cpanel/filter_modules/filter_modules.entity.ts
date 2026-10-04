import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type FilterModulesAttributes = {
  id?: number
  name?: string
}

export type FilterModulesCreationAttributes = Optional<FilterModulesAttributes, "id" | "name">

export class FilterModulesEntity
  extends Model<FilterModulesAttributes, FilterModulesCreationAttributes>
  implements FilterModulesAttributes
{
  declare id: number
  declare name: string
}

export function initFilterModulesEntity(sequelize: Sequelize): typeof FilterModulesEntity {
  FilterModulesEntity.init(
    {
      id: {
        type: DataTypes.INTEGER,
        field: 'id',
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING(100),
        field: 'name',
        allowNull: false,
        defaultValue: "",
      }
    },
    {
      sequelize,
      tableName: 'filter_modules',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: false,
      indexes: [
      { unique: true, fields: ['id'] }
      ]
    }
  )
  return FilterModulesEntity
}
