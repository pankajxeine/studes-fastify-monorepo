import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type PackageFeatureBlocksAttributes = {
  id?: number | null
  packageFeatureId?: number | null
  blockId?: number | null
  createdAt?: Date | null
  updatedAt?: Date | null
}

export type PackageFeatureBlocksCreationAttributes = Optional<PackageFeatureBlocksAttributes, "id" | "packageFeatureId" | "blockId" | "createdAt" | "updatedAt">

export class PackageFeatureBlocksEntity
  extends Model<PackageFeatureBlocksAttributes, PackageFeatureBlocksCreationAttributes>
  implements PackageFeatureBlocksAttributes
{
  declare id: number | null
  declare packageFeatureId: number | null
  declare blockId: number | null
  declare createdAt: Date | null
  declare updatedAt: Date | null
}

export function initPackageFeatureBlocksEntity(sequelize: Sequelize): typeof PackageFeatureBlocksEntity {
  PackageFeatureBlocksEntity.init(
    {
      id: {
        type: DataTypes.INTEGER,
        field: 'id',
        allowNull: true,
        primaryKey: true,
      },
      packageFeatureId: {
        type: DataTypes.INTEGER,
        field: 'package_feature_id',
        allowNull: true,
      },
      blockId: {
        type: DataTypes.TEXT,
        field: 'block_id',
        allowNull: true,
      },
      createdAt: {
        type: DataTypes.DATE,
        field: 'created_at',
        allowNull: true,
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: 'updated_at',
        allowNull: true,
      }
    },
    {
      sequelize,
      tableName: 'package_feature_blocks',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: false,
      indexes: [
      { unique: true, fields: ['id'] }
      ]
    }
  )
  return PackageFeatureBlocksEntity
}
