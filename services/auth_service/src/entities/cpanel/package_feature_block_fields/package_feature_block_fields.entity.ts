import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type PackageFeatureBlockFieldsAttributes = {
  id?: number | null
  packageFeatureBlockId?: number | null
  fieldId?: number | null
  createdAt?: Date | null
  updatedAt?: Date | null
}

export type PackageFeatureBlockFieldsCreationAttributes = Optional<PackageFeatureBlockFieldsAttributes, "id" | "packageFeatureBlockId" | "fieldId" | "createdAt" | "updatedAt">

export class PackageFeatureBlockFieldsEntity
  extends Model<PackageFeatureBlockFieldsAttributes, PackageFeatureBlockFieldsCreationAttributes>
  implements PackageFeatureBlockFieldsAttributes
{
  declare id: number | null
  declare packageFeatureBlockId: number | null
  declare fieldId: number | null
  declare createdAt: Date | null
  declare updatedAt: Date | null
}

export function initPackageFeatureBlockFieldsEntity(sequelize: Sequelize): typeof PackageFeatureBlockFieldsEntity {
  PackageFeatureBlockFieldsEntity.init(
    {
      id: {
        type: DataTypes.INTEGER,
        field: 'id',
        allowNull: true,
        primaryKey: true,
      },
      packageFeatureBlockId: {
        type: DataTypes.INTEGER,
        field: 'package_feature_block_id',
        allowNull: true,
      },
      fieldId: {
        type: DataTypes.TEXT,
        field: 'field_id',
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
      tableName: 'package_feature_block_fields',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: false,
      indexes: [
      { unique: true, fields: ['id'] }
      ]
    }
  )
  return PackageFeatureBlockFieldsEntity
}
