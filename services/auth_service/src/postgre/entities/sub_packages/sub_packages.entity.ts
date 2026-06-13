import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type SubPackagesAttributes = {
  id?: number | null
  sub_id?: number | null
  package_id?: number | null
  package_name?: string | null
  package_price?: number | null
  package_max_user?: number | null
  package_max_product?: number | null
  permission_based_on?: string | null
  additional_users?: number | null
  additional_store_price?: number | null
  additional_user_price?: number | null
  discount?: number | null
  billing_date?: string | null
  expiry_date?: string | null
  created_at?: string | null
  updated_at?: string | null
}

export type SubPackagesCreationAttributes = Optional<SubPackagesAttributes, "id" | "sub_id" | "package_id" | "package_name" | "package_price" | "package_max_user" | "package_max_product" | "permission_based_on" | "additional_users" | "additional_store_price" | "additional_user_price" | "discount" | "billing_date" | "expiry_date" | "created_at" | "updated_at">

export class SubPackagesEntity
  extends Model<SubPackagesAttributes, SubPackagesCreationAttributes>
  implements SubPackagesAttributes
{
  declare id: number | null
  declare sub_id: number | null
  declare package_id: number | null
  declare package_name: string | null
  declare package_price: number | null
  declare package_max_user: number | null
  declare package_max_product: number | null
  declare permission_based_on: string | null
  declare additional_users: number | null
  declare additional_store_price: number | null
  declare additional_user_price: number | null
  declare discount: number | null
  declare billing_date: string | null
  declare expiry_date: string | null
  declare created_at: string | null
  declare updated_at: string | null
}

export function initSubPackagesEntity(sequelize: Sequelize): typeof SubPackagesEntity {
  SubPackagesEntity.init(
    {
      id: {
        type: DataTypes.TEXT,
        field: 'id',
        allowNull: true,
      },
      sub_id: {
        type: DataTypes.TEXT,
        field: 'sub_id',
        allowNull: true,
      },
      package_id: {
        type: DataTypes.TEXT,
        field: 'package_id',
        allowNull: true,
      },
      package_name: {
        type: DataTypes.CHAR,
        field: 'package_name',
        allowNull: true,
        defaultValue: null,
      },
      package_price: {
        type: DataTypes.TEXT,
        field: 'package_price',
        allowNull: true,
      },
      package_max_user: {
        type: DataTypes.TEXT,
        field: 'package_max_user',
        allowNull: true,
      },
      package_max_product: {
        type: DataTypes.TEXT,
        field: 'package_max_product',
        allowNull: true,
      },
      permission_based_on: {
        type: DataTypes.CHAR,
        field: 'permission_based_on',
        allowNull: true,
        defaultValue: null,
      },
      additional_users: {
        type: DataTypes.TEXT,
        field: 'additional_users',
        allowNull: true,
      },
      additional_store_price: {
        type: DataTypes.DECIMAL(3, 1),
        field: 'additional_store_price',
        allowNull: true,
        defaultValue: null,
      },
      additional_user_price: {
        type: DataTypes.DECIMAL(2, 1),
        field: 'additional_user_price',
        allowNull: true,
        defaultValue: null,
      },
      discount: {
        type: DataTypes.DECIMAL(2, 1),
        field: 'discount',
        allowNull: true,
        defaultValue: null,
      },
      billing_date: {
        type: DataTypes.CHAR,
        field: 'billing_date',
        allowNull: true,
        defaultValue: null,
      },
      expiry_date: {
        type: DataTypes.CHAR,
        field: 'expiry_date',
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
      tableName: 'sub_packages',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: true
    }
  )
  return SubPackagesEntity
}
