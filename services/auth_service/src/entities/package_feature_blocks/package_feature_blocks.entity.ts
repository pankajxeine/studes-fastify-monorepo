import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type PackageFeatureBlocksAttributes = {
  id?: number
  package_feature_id?: number | null
  block_id?: number | null
  created_at?: Date | null
  updated_at?: Date | null
}

export type PackageFeatureBlocksCreationAttributes = Optional<PackageFeatureBlocksAttributes, "id" | "package_feature_id" | "block_id" | "created_at" | "updated_at">

export class PackageFeatureBlocksEntity
  extends Model<PackageFeatureBlocksAttributes, PackageFeatureBlocksCreationAttributes>
  implements PackageFeatureBlocksAttributes
{
  declare id: number
  declare package_feature_id: number | null
  declare block_id: number | null
  declare created_at: Date | null
  declare updated_at: Date | null
}

export function initPackageFeatureBlocksEntity(sequelize: Sequelize): typeof PackageFeatureBlocksEntity {
  PackageFeatureBlocksEntity.init(
    {
      id: {
        type: DataTypes.INTEGER,
        field: 'id',
        allowNull: false,
        primaryKey: true ,
        autoIncrement: true,
      },
      package_feature_id: {
        type: DataTypes.INTEGER,
        field: 'package_feature_id',
        allowNull: true,
        unique: true,
        defaultValue: null,
      },
      block_id: {
        type: DataTypes.INTEGER,
        field: 'block_id',
        allowNull: true,
        unique: true,
        defaultValue: null,
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
      tableName: 'package_feature_blocks',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: true
    }
  )
  return PackageFeatureBlocksEntity
}
