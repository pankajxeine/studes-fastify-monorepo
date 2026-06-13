import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type SubPackageFeatureBlocksAttributes = {
  id?: number | null
  subPackageFeatureId?: number | null
  blockId?: number | null
  isSelected?: string
  createdAt?: Date | null
  updatedAt?: Date | null
  deletedAt?: Date | null
}

export type SubPackageFeatureBlocksCreationAttributes = Optional<SubPackageFeatureBlocksAttributes, "id" | "subPackageFeatureId" | "blockId" | "isSelected" | "createdAt" | "updatedAt" | "deletedAt">

export class SubPackageFeatureBlocksEntity
  extends Model<SubPackageFeatureBlocksAttributes, SubPackageFeatureBlocksCreationAttributes>
  implements SubPackageFeatureBlocksAttributes
{
  declare id: number | null
  declare subPackageFeatureId: number | null
  declare blockId: number | null
  declare isSelected: string
  declare createdAt: Date | null
  declare updatedAt: Date | null
  declare deletedAt: Date | null
}

export function initSubPackageFeatureBlocksEntity(sequelize: Sequelize): typeof SubPackageFeatureBlocksEntity {
  SubPackageFeatureBlocksEntity.init(
    {
      id: {
        type: DataTypes.TEXT,
        field: 'id',
        allowNull: true,
        primaryKey: true,
      },
      subPackageFeatureId: {
        type: DataTypes.TEXT,
        field: 'sub_package_feature_id',
        allowNull: true,
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
      tableName: 'sub_package_feature_blocks',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: true,
      indexes: [
      { unique: true, fields: ['id'] }
      ]
    }
  )
  return SubPackageFeatureBlocksEntity
}
