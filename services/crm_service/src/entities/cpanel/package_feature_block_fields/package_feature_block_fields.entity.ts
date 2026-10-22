import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type PackageFeatureBlockFieldsAttributes = {
  id?: string | number | null
  packageFeatureBlockId?: number | null
  fieldId?: number | null
}

export type PackageFeatureBlockFieldsCreationAttributes = Optional<PackageFeatureBlockFieldsAttributes, "id" | "packageFeatureBlockId" | "fieldId">

export class PackageFeatureBlockFieldsEntity
  extends Model<PackageFeatureBlockFieldsAttributes, PackageFeatureBlockFieldsCreationAttributes>
  implements PackageFeatureBlockFieldsAttributes
{
  declare id: string | number | null
  declare packageFeatureBlockId: number | null
  declare fieldId: number | null
}

export function initPackageFeatureBlockFieldsEntity(sequelize: Sequelize): typeof PackageFeatureBlockFieldsEntity {
  PackageFeatureBlockFieldsEntity.init(
    {
      id: {
        type: DataTypes.BIGINT,
        field: 'id',
        allowNull: true,
        primaryKey: true,
        autoIncrement: true,
        defaultValue: "AS IDENTITY",
      },
      packageFeatureBlockId: {
        type: DataTypes.INTEGER,
        field: 'package_feature_block_id',
        allowNull: true,
        references: { model: 'package_feature_blocks', key: 'id' },
      },
      fieldId: {
        type: DataTypes.TEXT,
        field: 'field_id',
        allowNull: true,
      }
    },
    {
      sequelize,
      tableName: 'package_feature_block_fields',
      timestamps: false,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['id'] }
      ]
    }
  )
  return PackageFeatureBlockFieldsEntity
}
