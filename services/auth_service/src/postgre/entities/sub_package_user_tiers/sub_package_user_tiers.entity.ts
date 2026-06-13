import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type SubPackageUserTiersAttributes = {
  id?: number | null
  sub_package_id?: number | null
  user_tier_id?: number | null
  additional_users?: number | null
  additional_user_price?: number | null
  purchased_terms?: string | null
  cancel_date?: string | null
  cancel_terms?: string | null
  created_at?: string | null
  updated_at?: string | null
}

export type SubPackageUserTiersCreationAttributes = Optional<SubPackageUserTiersAttributes, "id" | "sub_package_id" | "user_tier_id" | "additional_users" | "additional_user_price" | "purchased_terms" | "cancel_date" | "cancel_terms" | "created_at" | "updated_at">

export class SubPackageUserTiersEntity
  extends Model<SubPackageUserTiersAttributes, SubPackageUserTiersCreationAttributes>
  implements SubPackageUserTiersAttributes
{
  declare id: number | null
  declare sub_package_id: number | null
  declare user_tier_id: number | null
  declare additional_users: number | null
  declare additional_user_price: number | null
  declare purchased_terms: string | null
  declare cancel_date: string | null
  declare cancel_terms: string | null
  declare created_at: string | null
  declare updated_at: string | null
}

export function initSubPackageUserTiersEntity(sequelize: Sequelize): typeof SubPackageUserTiersEntity {
  SubPackageUserTiersEntity.init(
    {
      id: {
        type: DataTypes.TEXT,
        field: 'id',
        allowNull: true,
      },
      sub_package_id: {
        type: DataTypes.TEXT,
        field: 'sub_package_id',
        allowNull: true,
      },
      user_tier_id: {
        type: DataTypes.TEXT,
        field: 'user_tier_id',
        allowNull: true,
      },
      additional_users: {
        type: DataTypes.TEXT,
        field: 'additional_users',
        allowNull: true,
      },
      additional_user_price: {
        type: DataTypes.DECIMAL(4, 3),
        field: 'additional_user_price',
        allowNull: true,
        defaultValue: null,
      },
      purchased_terms: {
        type: DataTypes.CHAR,
        field: 'purchased_terms',
        allowNull: true,
        defaultValue: null,
      },
      cancel_date: {
        type: DataTypes.CHAR,
        field: 'cancel_date',
        allowNull: true,
        defaultValue: null,
      },
      cancel_terms: {
        type: DataTypes.CHAR,
        field: 'cancel_terms',
        allowNull: true,
        defaultValue: null,
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
      tableName: 'sub_package_user_tiers',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: true
    }
  )
  return SubPackageUserTiersEntity
}
