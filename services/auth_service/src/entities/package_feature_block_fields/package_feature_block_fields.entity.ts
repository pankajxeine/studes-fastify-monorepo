import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type PackageFeatureBlockFieldsAttributes = {
  id?: number
  package_feature_block_id?: number | null
  field_id?: number | null
  created_at?: Date | null
  updated_at?: Date | null
}

export type PackageFeatureBlockFieldsCreationAttributes = Optional<PackageFeatureBlockFieldsAttributes, "id" | "package_feature_block_id" | "field_id" | "created_at" | "updated_at">

export class PackageFeatureBlockFieldsEntity
  extends Model<PackageFeatureBlockFieldsAttributes, PackageFeatureBlockFieldsCreationAttributes>
  implements PackageFeatureBlockFieldsAttributes
{
  declare id: number
  declare package_feature_block_id: number | null
  declare field_id: number | null
  declare created_at: Date | null
  declare updated_at: Date | null
}

export function initPackageFeatureBlockFieldsEntity(sequelize: Sequelize): typeof PackageFeatureBlockFieldsEntity {
  PackageFeatureBlockFieldsEntity.init(
    {
      id: {
        type: DataTypes.INTEGER,
        field: 'id',
        allowNull: false,
        primaryKey: true ,
        autoIncrement: true,
      },
      package_feature_block_id: {
        type: DataTypes.INTEGER,
        field: 'package_feature_block_id',
        allowNull: true,
        unique: true,
        defaultValue: null,
      },
      field_id: {
        type: DataTypes.INTEGER,
        field: 'field_id',
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
      tableName: 'package_feature_block_fields',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: true
    }
  )
  return PackageFeatureBlockFieldsEntity
}
