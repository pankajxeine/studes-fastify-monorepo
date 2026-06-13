import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type FeatureFieldsAttributes = {
  id?: number | null
  module_block_id?: number | null
  field_name?: string | null
  field_key?: string | null
  is_required?: number | null
  created_at?: string | null
  updated_at?: string | null
}

export type FeatureFieldsCreationAttributes = Optional<FeatureFieldsAttributes, "id" | "module_block_id" | "field_name" | "field_key" | "is_required" | "created_at" | "updated_at">

export class FeatureFieldsEntity
  extends Model<FeatureFieldsAttributes, FeatureFieldsCreationAttributes>
  implements FeatureFieldsAttributes
{
  declare id: number | null
  declare module_block_id: number | null
  declare field_name: string | null
  declare field_key: string | null
  declare is_required: number | null
  declare created_at: string | null
  declare updated_at: string | null
}

export function initFeatureFieldsEntity(sequelize: Sequelize): typeof FeatureFieldsEntity {
  FeatureFieldsEntity.init(
    {
      id: {
        type: DataTypes.TEXT,
        field: 'id',
        allowNull: true,
      },
      module_block_id: {
        type: DataTypes.TEXT,
        field: 'module_block_id',
        allowNull: true,
      },
      field_name: {
        type: DataTypes.CHAR,
        field: 'field_name',
        allowNull: true,
        defaultValue: null,
      },
      field_key: {
        type: DataTypes.CHAR,
        field: 'field_key',
        allowNull: true,
        defaultValue: null,
      },
      is_required: {
        type: DataTypes.TEXT,
        field: 'is_required',
        allowNull: true,
      },
      created_at: {
        type: DataTypes.CHAR,
        field: 'created_at',
        allowNull: true,
        defaultValue: null,
      },
      updated_at: {
        type: DataTypes.CHAR,
        field: 'updated_at',
        allowNull: true,
        defaultValue: null,
      }
    },
    {
      sequelize,
      tableName: 'feature_fields',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: true
    }
  )
  return FeatureFieldsEntity
}
