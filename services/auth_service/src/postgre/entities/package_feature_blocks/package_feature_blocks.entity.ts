import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type PackageFeatureBlocksAttributes = {
  id?: number | null
  package_feature_id?: number | null
  block_id?: number | null
  created_at?: string | null
  updated_at?: string | null
}

export type PackageFeatureBlocksCreationAttributes = Optional<PackageFeatureBlocksAttributes, "id" | "package_feature_id" | "block_id" | "created_at" | "updated_at">

export class PackageFeatureBlocksEntity
  extends Model<PackageFeatureBlocksAttributes, PackageFeatureBlocksCreationAttributes>
  implements PackageFeatureBlocksAttributes
{
  declare id: number | null
  declare package_feature_id: number | null
  declare block_id: number | null
  declare created_at: string | null
  declare updated_at: string | null
}

export function initPackageFeatureBlocksEntity(sequelize: Sequelize): typeof PackageFeatureBlocksEntity {
  PackageFeatureBlocksEntity.init(
    {
      id: {
        type: DataTypes.INTEGER,
        field: 'id',
        allowNull: true,
      },
      package_feature_id: {
        type: DataTypes.INTEGER,
        field: 'package_feature_id',
        allowNull: true,
      },
      block_id: {
        type: DataTypes.TEXT,
        field: 'block_id',
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
      tableName: 'package_feature_blocks',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: true
    }
  )
  return PackageFeatureBlocksEntity
}
