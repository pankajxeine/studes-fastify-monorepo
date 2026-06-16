import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type SubPackageUserTiersAttributes = {
  id?: number | null
  subPackageId?: number | null
  userTierId?: number | null
  additionalUsers?: number | null
  additionalUserPrice?: number | null
  purchasedTerms?: unknown | null
  cancelDate?: Date | null
  cancelTerms?: unknown | null
  createdAt?: Date | null
  updatedAt?: Date | null
  deletedAt?: Date | null
}

export type SubPackageUserTiersCreationAttributes = Optional<SubPackageUserTiersAttributes, "id" | "subPackageId" | "userTierId" | "additionalUsers" | "additionalUserPrice" | "purchasedTerms" | "cancelDate" | "cancelTerms" | "createdAt" | "updatedAt" | "deletedAt">

export class SubPackageUserTiersEntity
  extends Model<SubPackageUserTiersAttributes, SubPackageUserTiersCreationAttributes>
  implements SubPackageUserTiersAttributes
{
  declare id: number | null
  declare subPackageId: number | null
  declare userTierId: number | null
  declare additionalUsers: number | null
  declare additionalUserPrice: number | null
  declare purchasedTerms: unknown | null
  declare cancelDate: Date | null
  declare cancelTerms: unknown | null
  declare createdAt: Date | null
  declare updatedAt: Date | null
  declare deletedAt: Date | null
}

export function initSubPackageUserTiersEntity(sequelize: Sequelize): typeof SubPackageUserTiersEntity {
  SubPackageUserTiersEntity.init(
    {
      id: {
        type: DataTypes.TEXT,
        field: 'id',
        allowNull: true,
        primaryKey: true,
      },
      subPackageId: {
        type: DataTypes.TEXT,
        field: 'sub_package_id',
        allowNull: true,
      },
      userTierId: {
        type: DataTypes.TEXT,
        field: 'user_tier_id',
        allowNull: true,
      },
      additionalUsers: {
        type: DataTypes.TEXT,
        field: 'additional_users',
        allowNull: true,
      },
      additionalUserPrice: {
        type: DataTypes.DECIMAL(10, 2),
        field: 'additional_user_price',
        allowNull: true,
      },
      purchasedTerms: {
        type: DataTypes.JSONB,
        field: 'purchased_terms',
        allowNull: true,
      },
      cancelDate: {
        type: DataTypes.DATE,
        field: 'cancel_date',
        allowNull: true,
      },
      cancelTerms: {
        type: DataTypes.JSONB,
        field: 'cancel_terms',
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
      },
      deletedAt: {
        type: DataTypes.DATE,
        field: 'deleted_at',
        allowNull: true,
      }
    },
    {
      sequelize,
      tableName: 'sub_package_user_tiers',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: false,
      indexes: [
      { unique: true, fields: ['id'] }
      ]
    }
  )
  return SubPackageUserTiersEntity
}
