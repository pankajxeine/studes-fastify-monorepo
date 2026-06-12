import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type PackagesAttributes = {
  id?: number
  name: string
  price: number
  cost_price?: number | null
  industry_id: number
  max_users: number
  max_products?: number | null
  package_type?: string
  status?: string
  allowed_multiple_stores?: string
  additional_store_price: number
  additional_store_cost_price: number
  permission_based_on?: string
  test_package?: string
  created_at?: Date
  updated_at?: Date
}

export type PackagesCreationAttributes = Optional<PackagesAttributes, "id" | "cost_price" | "max_products" | "package_type" | "status" | "allowed_multiple_stores" | "permission_based_on" | "test_package" | "created_at" | "updated_at">

export class PackagesEntity
  extends Model<PackagesAttributes, PackagesCreationAttributes>
  implements PackagesAttributes
{
  declare id: number
  declare name: string
  declare price: number
  declare cost_price: number | null
  declare industry_id: number
  declare max_users: number
  declare max_products: number | null
  declare package_type: string
  declare status: string
  declare allowed_multiple_stores: string
  declare additional_store_price: number
  declare additional_store_cost_price: number
  declare permission_based_on: string
  declare test_package: string
  declare created_at: Date
  declare updated_at: Date
}

export function initPackagesEntity(sequelize: Sequelize): typeof PackagesEntity {
  PackagesEntity.init(
    {
      id: {
        type: DataTypes.INTEGER,
        field: 'id',
        allowNull: false,
        primaryKey: true ,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING(100),
        field: 'name',
        allowNull: false,
      },
      price: {
        type: DataTypes.DOUBLE(15,3),
        field: 'price',
        allowNull: false,
      },
      cost_price: {
        type: DataTypes.DOUBLE(15,3),
        field: 'cost_price',
        allowNull: true,
        defaultValue: "0.000",
      },
      industry_id: {
        type: DataTypes.INTEGER,
        field: 'industry_id',
        allowNull: false,
      },
      max_users: {
        type: DataTypes.INTEGER,
        field: 'max_users',
        allowNull: false,
      },
      max_products: {
        type: DataTypes.INTEGER,
        field: 'max_products',
        allowNull: true,
        defaultValue: "0",
      },
      package_type: {
        type: DataTypes.ENUM('advanced','enhanced','lite'),
        field: 'package_type',
        allowNull: false,
        defaultValue: "Lite",
      },
      status: {
        type: DataTypes.ENUM('active','inactive'),
        field: 'status',
        allowNull: false,
        defaultValue: "Active",
      },
      allowed_multiple_stores: {
        type: DataTypes.ENUM('yes','no'),
        field: 'allowed_multiple_stores',
        allowNull: false,
        defaultValue: "No",
      },
      additional_store_price: {
        type: DataTypes.DOUBLE(15,3),
        field: 'additional_store_price',
        allowNull: false,
      },
      additional_store_cost_price: {
        type: DataTypes.DOUBLE(15,3),
        field: 'additional_store_cost_price',
        allowNull: false,
      },
      permission_based_on: {
        type: DataTypes.ENUM('role','user'),
        field: 'permission_based_on',
        allowNull: false,
        defaultValue: "Role",
      },
      test_package: {
        type: DataTypes.ENUM('no','yes'),
        field: 'test_package',
        allowNull: false,
        defaultValue: "No",
      },
      created_at: {
        type: DataTypes.DATE,
        field: 'created_at',
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      updated_at: {
        type: DataTypes.DATE,
        field: 'updated_at',
        allowNull: false,
        defaultValue: DataTypes.NOW,
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
