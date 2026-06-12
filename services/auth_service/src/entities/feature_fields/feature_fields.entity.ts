import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type FeatureFieldsAttributes = {
  id?: number
  module_block_id?: number | null
  field_name?: string | null
  field_key?: string | null
  is_required?: string | null
  created_at?: Date | null
  updated_at?: Date | null
}

export type FeatureFieldsCreationAttributes = Optional<FeatureFieldsAttributes, "id" | "module_block_id" | "field_name" | "field_key" | "is_required" | "created_at" | "updated_at">

export class FeatureFieldsEntity
  extends Model<FeatureFieldsAttributes, FeatureFieldsCreationAttributes>
  implements FeatureFieldsAttributes
{
  declare id: number
  declare module_block_id: number | null
  declare field_name: string | null
  declare field_key: string | null
  declare is_required: string | null
  declare created_at: Date | null
  declare updated_at: Date | null
}

export function initFeatureFieldsEntity(sequelize: Sequelize): typeof FeatureFieldsEntity {
  FeatureFieldsEntity.init(
    {
      id: {
        type: DataTypes.INTEGER,
        field: 'id',
        allowNull: false,
        primaryKey: true ,
        autoIncrement: true,
      },
      module_block_id: {
        type: DataTypes.INTEGER,
        field: 'module_block_id',
        allowNull: true,
        defaultValue: null,
      },
      field_name: {
        type: DataTypes.STRING(50),
        field: 'field_name',
        allowNull: true,
        defaultValue: null,
      },
      field_key: {
        type: DataTypes.STRING(50),
        field: 'field_key',
        allowNull: true,
        defaultValue: null,
      },
      is_required: {
        type: DataTypes.ENUM('1','0'),
        field: 'is_required',
        allowNull: true,
        defaultValue: "0",
      },
      created_at: {
        type: DataTypes.DATE,
        field: 'created_at',
        allowNull: true,
        defaultValue: null,
      },
      updated_at: {
        type: DataTypes.DATE,
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
