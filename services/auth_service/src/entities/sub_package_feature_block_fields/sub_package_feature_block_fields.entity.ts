import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type SubPackageFeatureBlockFieldsAttributes = {
  id?: number
  sub_package_feature_block_id?: number | null
  field_id?: number | null
  is_selected?: string | null
  created_at?: Date | null
  updated_at?: Date | null
}

export type SubPackageFeatureBlockFieldsCreationAttributes = Optional<SubPackageFeatureBlockFieldsAttributes, "id" | "sub_package_feature_block_id" | "field_id" | "is_selected" | "created_at" | "updated_at">

export class SubPackageFeatureBlockFieldsEntity
  extends Model<SubPackageFeatureBlockFieldsAttributes, SubPackageFeatureBlockFieldsCreationAttributes>
  implements SubPackageFeatureBlockFieldsAttributes
{
  declare id: number
  declare sub_package_feature_block_id: number | null
  declare field_id: number | null
  declare is_selected: string | null
  declare created_at: Date | null
  declare updated_at: Date | null
}

export function initSubPackageFeatureBlockFieldsEntity(sequelize: Sequelize): typeof SubPackageFeatureBlockFieldsEntity {
  SubPackageFeatureBlockFieldsEntity.init(
    {
      id: {
        type: DataTypes.INTEGER,
        field: 'id',
        allowNull: false,
        primaryKey: true ,
        autoIncrement: true,
      },
      sub_package_feature_block_id: {
        type: DataTypes.INTEGER,
        field: 'sub_package_feature_block_id',
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
      is_selected: {
        type: DataTypes.ENUM('0','1'),
        field: 'is_selected',
        allowNull: true,
        defaultValue: "0",
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
      tableName: 'sub_package_feature_block_fields',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: true
    }
  )
  return SubPackageFeatureBlockFieldsEntity
}
