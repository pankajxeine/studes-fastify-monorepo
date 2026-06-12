import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type SubPackageUserTiersAttributes = {
  id?: number
  sub_package_id?: number | null
  user_tier_id?: number | null
  additional_users?: number | null
  additional_user_price?: number | null
  purchased_terms?: unknown | null
  cancel_date?: Date | null
  cancel_terms?: unknown | null
  created_at: Date
  updated_at: Date
}

export type SubPackageUserTiersCreationAttributes = Optional<SubPackageUserTiersAttributes, "id" | "sub_package_id" | "user_tier_id" | "additional_users" | "additional_user_price" | "purchased_terms" | "cancel_date" | "cancel_terms">

export class SubPackageUserTiersEntity
  extends Model<SubPackageUserTiersAttributes, SubPackageUserTiersCreationAttributes>
  implements SubPackageUserTiersAttributes
{
  declare id: number
  declare sub_package_id: number | null
  declare user_tier_id: number | null
  declare additional_users: number | null
  declare additional_user_price: number | null
  declare purchased_terms: unknown | null
  declare cancel_date: Date | null
  declare cancel_terms: unknown | null
  declare created_at: Date
  declare updated_at: Date
}

export function initSubPackageUserTiersEntity(sequelize: Sequelize): typeof SubPackageUserTiersEntity {
  SubPackageUserTiersEntity.init(
    {
      id: {
        type: DataTypes.INTEGER,
        field: 'id',
        allowNull: false,
        primaryKey: true ,
        autoIncrement: true,
      },
      sub_package_id: {
        type: DataTypes.INTEGER,
        field: 'sub_package_id',
        allowNull: true,
        defaultValue: null,
      },
      user_tier_id: {
        type: DataTypes.INTEGER,
        field: 'user_tier_id',
        allowNull: true,
        defaultValue: "0",
      },
      additional_users: {
        type: DataTypes.INTEGER,
        field: 'additional_users',
        allowNull: true,
        defaultValue: null,
      },
      additional_user_price: {
        type: DataTypes.DECIMAL(15,3),
        field: 'additional_user_price',
        allowNull: true,
        defaultValue: null,
      },
      purchased_terms: {
        type: DataTypes.JSON,
        field: 'purchased_terms',
        allowNull: true,
        defaultValue: null,
      },
      cancel_date: {
        type: DataTypes.DATE,
        field: 'cancel_date',
        allowNull: true,
        defaultValue: null,
      },
      cancel_terms: {
        type: DataTypes.JSON,
        field: 'cancel_terms',
        allowNull: true,
        defaultValue: null,
      },
      created_at: {
        type: DataTypes.DATE,
        field: 'created_at',
        allowNull: false,
      },
      updated_at: {
        type: DataTypes.DATE,
        field: 'updated_at',
        allowNull: false,
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
