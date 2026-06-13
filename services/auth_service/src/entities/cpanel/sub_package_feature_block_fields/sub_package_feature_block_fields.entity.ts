import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type SubPackageFeatureBlockFieldsAttributes = {
  id?: number | null
  subPackageFeatureBlockId?: number | null
  fieldId?: number | null
  isSelected?: string
  createdAt?: Date | null
  updatedAt?: Date | null
  deletedAt?: Date | null
}

export type SubPackageFeatureBlockFieldsCreationAttributes = Optional<SubPackageFeatureBlockFieldsAttributes, "id" | "subPackageFeatureBlockId" | "fieldId" | "isSelected" | "createdAt" | "updatedAt" | "deletedAt">

export class SubPackageFeatureBlockFieldsEntity
  extends Model<SubPackageFeatureBlockFieldsAttributes, SubPackageFeatureBlockFieldsCreationAttributes>
  implements SubPackageFeatureBlockFieldsAttributes
{
  declare id: number | null
  declare subPackageFeatureBlockId: number | null
  declare fieldId: number | null
  declare isSelected: string
  declare createdAt: Date | null
  declare updatedAt: Date | null
  declare deletedAt: Date | null
}

export function initSubPackageFeatureBlockFieldsEntity(sequelize: Sequelize): typeof SubPackageFeatureBlockFieldsEntity {
  SubPackageFeatureBlockFieldsEntity.init(
    {
      id: {
        type: DataTypes.TEXT,
        field: 'id',
        allowNull: true,
        primaryKey: true,
      },
      subPackageFeatureBlockId: {
        type: DataTypes.TEXT,
        field: 'sub_package_feature_block_id',
        allowNull: true,
      },
      fieldId: {
        type: DataTypes.TEXT,
        field: 'field_id',
        allowNull: true,
      },
      isSelected: {
        type: DataTypes.TEXT,
        field: 'is_selected',
        allowNull: false,
        defaultValue: "No",
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
      },
      deletedAt: {
        type: DataTypes.DATE,
        field: 'deleted_at',
        allowNull: true,
      }
    },
    {
      sequelize,
      tableName: 'sub_package_feature_block_fields',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: true,
      indexes: [
      { unique: true, fields: ['id'] }
      ]
    }
  )
  return SubPackageFeatureBlockFieldsEntity
}
