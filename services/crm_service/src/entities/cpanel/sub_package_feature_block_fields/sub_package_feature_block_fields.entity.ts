import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type SubPackageFeatureBlockFieldsAttributes = {
  id?: string | number | null
  subPackageFeatureBlockId?: number | null
  fieldId?: number | null
  isSelected?: string
  createdAt?: Date
  updatedAt?: Date
}

export type SubPackageFeatureBlockFieldsCreationAttributes = Optional<SubPackageFeatureBlockFieldsAttributes, "id" | "subPackageFeatureBlockId" | "fieldId" | "isSelected" | "createdAt" | "updatedAt">

export class SubPackageFeatureBlockFieldsEntity
  extends Model<SubPackageFeatureBlockFieldsAttributes, SubPackageFeatureBlockFieldsCreationAttributes>
  implements SubPackageFeatureBlockFieldsAttributes
{
  declare id: string | number | null
  declare subPackageFeatureBlockId: number | null
  declare fieldId: number | null
  declare isSelected: string
  declare createdAt: Date
  declare updatedAt: Date
}

export function initSubPackageFeatureBlockFieldsEntity(sequelize: Sequelize): typeof SubPackageFeatureBlockFieldsEntity {
  SubPackageFeatureBlockFieldsEntity.init(
    {
      id: {
        type: DataTypes.BIGINT,
        field: 'id',
        allowNull: true,
        primaryKey: true,
        autoIncrement: true,
        defaultValue: "AS IDENTITY",
      },
      subPackageFeatureBlockId: {
        type: DataTypes.TEXT,
        field: 'sub_package_feature_block_id',
        allowNull: true,
        references: { model: 'sub_package_feature_blocks', key: 'id' },
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
        defaultValue: "FALSE",
      },
      createdAt: {
        type: DataTypes.DATE,
        field: 'created_at',
        allowNull: false,
        defaultValue: "DataTypes.NOW",
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: 'updated_at',
        allowNull: false,
        defaultValue: "DataTypes.NOW",
      }
    },
    {
      sequelize,
      tableName: 'sub_package_feature_block_fields',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['id'] }
      ]
    }
  )
  return SubPackageFeatureBlockFieldsEntity
}
