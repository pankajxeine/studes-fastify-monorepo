import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type SubPackagesAttributes = {
  id?: number
  sub_id: number
  package_id: number
  package_name: string
  package_price: number
  package_max_user: number
  package_max_product?: number | null
  permission_based_on?: string
  additional_users?: number
  additional_store_price?: number
  additional_user_price?: number
  discount?: number
  billing_date?: Date | null
  expiry_date?: Date | null
  created_at: Date
  updated_at: Date
}

export type SubPackagesCreationAttributes = Optional<SubPackagesAttributes, "id" | "package_max_product" | "permission_based_on" | "additional_users" | "additional_store_price" | "additional_user_price" | "discount" | "billing_date" | "expiry_date">

export class SubPackagesEntity
  extends Model<SubPackagesAttributes, SubPackagesCreationAttributes>
  implements SubPackagesAttributes
{
  declare id: number
  declare sub_id: number
  declare package_id: number
  declare package_name: string
  declare package_price: number
  declare package_max_user: number
  declare package_max_product: number | null
  declare permission_based_on: string
  declare additional_users: number
  declare additional_store_price: number
  declare additional_user_price: number
  declare discount: number
  declare billing_date: Date | null
  declare expiry_date: Date | null
  declare created_at: Date
  declare updated_at: Date
}

export function initSubPackagesEntity(sequelize: Sequelize): typeof SubPackagesEntity {
  SubPackagesEntity.init(
    {
      id: {
        type: DataTypes.INTEGER,
        field: 'id',
        allowNull: false,
        primaryKey: true ,
        autoIncrement: true,
      },
      sub_id: {
        type: DataTypes.INTEGER,
        field: 'sub_id',
        allowNull: false,
        unique: true,
      },
      package_id: {
        type: DataTypes.INTEGER,
        field: 'package_id',
        allowNull: false,
        unique: true,
      },
      package_name: {
        type: DataTypes.STRING(200),
        field: 'package_name',
        allowNull: false,
      },
      package_price: {
        type: DataTypes.INTEGER,
        field: 'package_price',
        allowNull: false,
      },
      package_max_user: {
        type: DataTypes.INTEGER,
        field: 'package_max_user',
        allowNull: false,
      },
      package_max_product: {
        type: DataTypes.INTEGER,
        field: 'package_max_product',
        allowNull: true,
        defaultValue: "0",
      },
      permission_based_on: {
        type: DataTypes.ENUM('role','user'),
        field: 'permission_based_on',
        allowNull: false,
        defaultValue: "Role",
      },
      additional_users: {
        type: DataTypes.INTEGER,
        field: 'additional_users',
        allowNull: false,
        defaultValue: "0",
      },
      additional_store_price: {
        type: DataTypes.DOUBLE(15,3),
        field: 'additional_store_price',
        allowNull: false,
        defaultValue: "0.000",
      },
      additional_user_price: {
        type: DataTypes.DOUBLE(15,3),
        field: 'additional_user_price',
        allowNull: false,
        defaultValue: "0.000",
      },
      discount: {
        type: DataTypes.DOUBLE(15,2),
        field: 'discount',
        allowNull: false,
        defaultValue: "0.00",
      },
      billing_date: {
        type: DataTypes.DATE,
        field: 'billing_date',
        allowNull: true,
        defaultValue: null,
      },
      expiry_date: {
        type: DataTypes.DATE,
        field: 'expiry_date',
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
      tableName: 'sub_packages',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: true
    }
  )
  return SubPackagesEntity
}
