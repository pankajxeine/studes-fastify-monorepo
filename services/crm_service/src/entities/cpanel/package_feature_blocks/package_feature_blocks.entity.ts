import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type PackageFeatureBlocksAttributes = {
  id?: string | number | null
  packageFeatureId?: number | null
  blockId?: number | null
}

export type PackageFeatureBlocksCreationAttributes = Optional<PackageFeatureBlocksAttributes, "id" | "packageFeatureId" | "blockId">

export class PackageFeatureBlocksEntity
  extends Model<PackageFeatureBlocksAttributes, PackageFeatureBlocksCreationAttributes>
  implements PackageFeatureBlocksAttributes
{
  declare id: string | number | null
  declare packageFeatureId: number | null
  declare blockId: number | null
}

export function initPackageFeatureBlocksEntity(sequelize: Sequelize): typeof PackageFeatureBlocksEntity {
  PackageFeatureBlocksEntity.init(
    {
      id: {
        type: DataTypes.BIGINT,
        field: 'id',
        allowNull: true,
        primaryKey: true,
        autoIncrement: true,
        defaultValue: "AS IDENTITY",
      },
      packageFeatureId: {
        type: DataTypes.INTEGER,
        field: 'package_feature_id',
        allowNull: true,
        references: { model: 'package_features', key: 'id' },
      },
      blockId: {
        type: DataTypes.TEXT,
        field: 'block_id',
        allowNull: true,
      }
    },
    {
      sequelize,
      tableName: 'package_feature_blocks',
      timestamps: false,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['id'] }
      ]
    }
  )
  return PackageFeatureBlocksEntity
}
