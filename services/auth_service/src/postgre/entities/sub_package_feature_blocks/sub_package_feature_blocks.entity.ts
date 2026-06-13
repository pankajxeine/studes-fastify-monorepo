import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type SubPackageFeatureBlocksAttributes = {
  id?: number | null
  sub_package_feature_id?: number | null
  block_id?: number | null
  is_selected?: number | null
  created_at?: string | null
  updated_at?: string | null
}

export type SubPackageFeatureBlocksCreationAttributes = Optional<SubPackageFeatureBlocksAttributes, "id" | "sub_package_feature_id" | "block_id" | "is_selected" | "created_at" | "updated_at">

export class SubPackageFeatureBlocksEntity
  extends Model<SubPackageFeatureBlocksAttributes, SubPackageFeatureBlocksCreationAttributes>
  implements SubPackageFeatureBlocksAttributes
{
  declare id: number | null
  declare sub_package_feature_id: number | null
  declare block_id: number | null
  declare is_selected: number | null
  declare created_at: string | null
  declare updated_at: string | null
}

export function initSubPackageFeatureBlocksEntity(sequelize: Sequelize): typeof SubPackageFeatureBlocksEntity {
  SubPackageFeatureBlocksEntity.init(
    {
      id: {
        type: DataTypes.TEXT,
        field: 'id',
        allowNull: true,
      },
      sub_package_feature_id: {
        type: DataTypes.TEXT,
        field: 'sub_package_feature_id',
        allowNull: true,
      },
      block_id: {
        type: DataTypes.TEXT,
        field: 'block_id',
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
      tableName: 'sub_package_feature_blocks',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: true
    }
  )
  return SubPackageFeatureBlocksEntity
}
