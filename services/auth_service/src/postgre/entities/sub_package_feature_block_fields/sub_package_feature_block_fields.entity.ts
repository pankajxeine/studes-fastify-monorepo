import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type SubPackageFeatureBlockFieldsAttributes = {
  id?: number | null
  sub_package_feature_block_id?: number | null
  field_id?: number | null
  is_selected?: number | null
  created_at?: string | null
  updated_at?: string | null
}

export type SubPackageFeatureBlockFieldsCreationAttributes = Optional<SubPackageFeatureBlockFieldsAttributes, "id" | "sub_package_feature_block_id" | "field_id" | "is_selected" | "created_at" | "updated_at">

export class SubPackageFeatureBlockFieldsEntity
  extends Model<SubPackageFeatureBlockFieldsAttributes, SubPackageFeatureBlockFieldsCreationAttributes>
  implements SubPackageFeatureBlockFieldsAttributes
{
  declare id: number | null
  declare sub_package_feature_block_id: number | null
  declare field_id: number | null
  declare is_selected: number | null
  declare created_at: string | null
  declare updated_at: string | null
}

export function initSubPackageFeatureBlockFieldsEntity(sequelize: Sequelize): typeof SubPackageFeatureBlockFieldsEntity {
  SubPackageFeatureBlockFieldsEntity.init(
    {
      id: {
        type: DataTypes.TEXT,
        field: 'id',
        allowNull: true,
      },
      sub_package_feature_block_id: {
        type: DataTypes.TEXT,
        field: 'sub_package_feature_block_id',
        allowNull: true,
      },
      field_id: {
        type: DataTypes.TEXT,
        field: 'field_id',
        allowNull: true,
      },
      is_selected: {
        type: DataTypes.TEXT,
        field: 'is_selected',
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
      tableName: 'sub_package_feature_block_fields',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: true
    }
  )
  return SubPackageFeatureBlockFieldsEntity
}
