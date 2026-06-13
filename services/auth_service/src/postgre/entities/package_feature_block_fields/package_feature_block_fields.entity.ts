import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type PackageFeatureBlockFieldsAttributes = {
  id?: number | null
  package_feature_block_id?: number | null
  field_id?: number | null
  created_at?: string | null
  updated_at?: string | null
}

export type PackageFeatureBlockFieldsCreationAttributes = Optional<PackageFeatureBlockFieldsAttributes, "id" | "package_feature_block_id" | "field_id" | "created_at" | "updated_at">

export class PackageFeatureBlockFieldsEntity
  extends Model<PackageFeatureBlockFieldsAttributes, PackageFeatureBlockFieldsCreationAttributes>
  implements PackageFeatureBlockFieldsAttributes
{
  declare id: number | null
  declare package_feature_block_id: number | null
  declare field_id: number | null
  declare created_at: string | null
  declare updated_at: string | null
}

export function initPackageFeatureBlockFieldsEntity(sequelize: Sequelize): typeof PackageFeatureBlockFieldsEntity {
  PackageFeatureBlockFieldsEntity.init(
    {
      id: {
        type: DataTypes.INTEGER,
        field: 'id',
        allowNull: true,
      },
      package_feature_block_id: {
        type: DataTypes.INTEGER,
        field: 'package_feature_block_id',
        allowNull: true,
      },
      field_id: {
        type: DataTypes.TEXT,
        field: 'field_id',
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
      tableName: 'package_feature_block_fields',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: true
    }
  )
  return PackageFeatureBlockFieldsEntity
}
