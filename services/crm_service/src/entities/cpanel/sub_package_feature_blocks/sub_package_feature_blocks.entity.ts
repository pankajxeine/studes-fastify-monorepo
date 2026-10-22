import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type SubPackageFeatureBlocksAttributes = {
  id?: string | number | null
  subPackageFeatureId?: number | null
  blockId?: number | null
  isSelected?: string
  createdAt?: Date
  updatedAt?: Date
}

export type SubPackageFeatureBlocksCreationAttributes = Optional<SubPackageFeatureBlocksAttributes, "id" | "subPackageFeatureId" | "blockId" | "isSelected" | "createdAt" | "updatedAt">

export class SubPackageFeatureBlocksEntity
  extends Model<SubPackageFeatureBlocksAttributes, SubPackageFeatureBlocksCreationAttributes>
  implements SubPackageFeatureBlocksAttributes
{
  declare id: string | number | null
  declare subPackageFeatureId: number | null
  declare blockId: number | null
  declare isSelected: string
  declare createdAt: Date
  declare updatedAt: Date
}

export function initSubPackageFeatureBlocksEntity(sequelize: Sequelize): typeof SubPackageFeatureBlocksEntity {
  SubPackageFeatureBlocksEntity.init(
    {
      id: {
        type: DataTypes.BIGINT,
        field: 'id',
        allowNull: true,
        primaryKey: true,
        autoIncrement: true,
        defaultValue: "AS IDENTITY",
      },
      subPackageFeatureId: {
        type: DataTypes.TEXT,
        field: 'sub_package_feature_id',
        allowNull: true,
        references: { model: 'sub_package_features', key: 'id' },
      },
      blockId: {
        type: DataTypes.TEXT,
        field: 'block_id',
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
      tableName: 'sub_package_feature_blocks',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['id'] }
      ]
    }
  )
  return SubPackageFeatureBlocksEntity
}
