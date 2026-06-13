import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type PackagesAttributes = {
  id?: number | null
  name?: string | null
  price?: number | null
  cost_price?: number | null
  industry_id?: number | null
  max_users?: number | null
  max_products?: number | null
  package_type?: string | null
  status?: string | null
  allowed_multiple_stores?: string | null
  additional_store_price?: number | null
  additional_store_cost_price?: number | null
  permission_based_on?: string | null
  test_package?: string | null
  created_at?: string | null
  updated_at?: string | null
}

export type PackagesCreationAttributes = Optional<PackagesAttributes, "id" | "name" | "price" | "cost_price" | "industry_id" | "max_users" | "max_products" | "package_type" | "status" | "allowed_multiple_stores" | "additional_store_price" | "additional_store_cost_price" | "permission_based_on" | "test_package" | "created_at" | "updated_at">

export class PackagesEntity
  extends Model<PackagesAttributes, PackagesCreationAttributes>
  implements PackagesAttributes
{
  declare id: number | null
  declare name: string | null
  declare price: number | null
  declare cost_price: number | null
  declare industry_id: number | null
  declare max_users: number | null
  declare max_products: number | null
  declare package_type: string | null
  declare status: string | null
  declare allowed_multiple_stores: string | null
  declare additional_store_price: number | null
  declare additional_store_cost_price: number | null
  declare permission_based_on: string | null
  declare test_package: string | null
  declare created_at: string | null
  declare updated_at: string | null
}

export function initPackagesEntity(sequelize: Sequelize): typeof PackagesEntity {
  PackagesEntity.init(
    {
      id: {
        type: DataTypes.TEXT,
        field: 'id',
        allowNull: true,
      },
      name: {
        type: DataTypes.CHAR,
        field: 'name',
        allowNull: true,
        defaultValue: null,
      },
      price: {
        type: DataTypes.DECIMAL(4, 1),
        field: 'price',
        allowNull: true,
        defaultValue: null,
      },
      cost_price: {
        type: DataTypes.DECIMAL(2, 1),
        field: 'cost_price',
        allowNull: true,
        defaultValue: null,
      },
      industry_id: {
        type: DataTypes.TEXT,
        field: 'industry_id',
        allowNull: true,
      },
      max_users: {
        type: DataTypes.TEXT,
        field: 'max_users',
        allowNull: true,
      },
      max_products: {
        type: DataTypes.TEXT,
        field: 'max_products',
        allowNull: true,
      },
      package_type: {
        type: DataTypes.CHAR,
        field: 'package_type',
        allowNull: true,
        defaultValue: null,
      },
      status: {
        type: DataTypes.CHAR,
        field: 'status',
        allowNull: true,
        defaultValue: null,
      },
      allowed_multiple_stores: {
        type: DataTypes.CHAR,
        field: 'allowed_multiple_stores',
        allowNull: true,
        defaultValue: null,
      },
      additional_store_price: {
        type: DataTypes.DECIMAL(3, 1),
        field: 'additional_store_price',
        allowNull: true,
        defaultValue: null,
      },
      additional_store_cost_price: {
        type: DataTypes.DECIMAL(2, 1),
        field: 'additional_store_cost_price',
        allowNull: true,
        defaultValue: null,
      },
      permission_based_on: {
        type: DataTypes.CHAR,
        field: 'permission_based_on',
        allowNull: true,
        defaultValue: null,
      },
      test_package: {
        type: DataTypes.CHAR,
        field: 'test_package',
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
      tableName: 'packages',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: true
    }
  )
  return PackagesEntity
}
