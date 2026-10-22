import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type FilterModuleFieldsAttributes = {
  id?: string | number | null
  filterModuleId?: number | null
  fieldName?: string | null
  fieldKey?: string | null
  createdAt?: Date
  updatedAt?: Date
}

export type FilterModuleFieldsCreationAttributes = Optional<FilterModuleFieldsAttributes, "id" | "filterModuleId" | "fieldName" | "fieldKey" | "createdAt" | "updatedAt">

export class FilterModuleFieldsEntity
  extends Model<FilterModuleFieldsAttributes, FilterModuleFieldsCreationAttributes>
  implements FilterModuleFieldsAttributes
{
  declare id: string | number | null
  declare filterModuleId: number | null
  declare fieldName: string | null
  declare fieldKey: string | null
  declare createdAt: Date
  declare updatedAt: Date
}

export function initFilterModuleFieldsEntity(sequelize: Sequelize): typeof FilterModuleFieldsEntity {
  FilterModuleFieldsEntity.init(
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
      fieldName: {
        type: DataTypes.STRING(100),
        field: 'field_name',
        allowNull: true,
      },
      fieldKey: {
        type: DataTypes.STRING(100),
        field: 'field_key',
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
      tableName: 'filter_module_fields',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['id'] }
      ]
    }
  )
  return FilterModuleFieldsEntity
}
