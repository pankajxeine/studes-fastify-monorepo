import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type FilterModuleFieldsAttributes = {
  id?: number
  filterModuleId?: number | null
  fieldName?: string | null
  fieldKey?: string | null
}

export type FilterModuleFieldsCreationAttributes = Optional<FilterModuleFieldsAttributes, "id" | "filterModuleId" | "fieldName" | "fieldKey">

export class FilterModuleFieldsEntity
  extends Model<FilterModuleFieldsAttributes, FilterModuleFieldsCreationAttributes>
  implements FilterModuleFieldsAttributes
{
  declare id: number
  declare filterModuleId: number | null
  declare fieldName: string | null
  declare fieldKey: string | null
}

export function initFilterModuleFieldsEntity(sequelize: Sequelize): typeof FilterModuleFieldsEntity {
  FilterModuleFieldsEntity.init(
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
      fieldName: {
        type: DataTypes.STRING(100),
        field: 'field_name',
        allowNull: true,
      },
      fieldKey: {
        type: DataTypes.STRING(100),
        field: 'field_key',
        allowNull: true,
      }
    },
    {
      sequelize,
      tableName: 'filter_module_fields',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: false,
      indexes: [
      { unique: true, fields: ['id'] }
      ]
    }
  )
  return FilterModuleFieldsEntity
}
