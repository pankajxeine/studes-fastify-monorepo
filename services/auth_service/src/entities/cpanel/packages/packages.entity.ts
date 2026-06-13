import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type PackagesAttributes = {
  id?: number | null
  name?: string | null
  price?: number | null
  costPrice?: number | null
  industryId?: number | null
  maxUsers?: number | null
  packageType?: string
  status?: string
  allowedMultipleStores?: string
  additionalPrice?: number | null
  additionalCostPrice?: number | null
  permissionBasedOn?: string
  testPackage?: string
  createdAt?: Date | null
  updatedAt?: Date | null
}

export type PackagesCreationAttributes = Optional<PackagesAttributes, "id" | "name" | "price" | "costPrice" | "industryId" | "maxUsers" | "packageType" | "status" | "allowedMultipleStores" | "additionalPrice" | "additionalCostPrice" | "permissionBasedOn" | "testPackage" | "createdAt" | "updatedAt">

export class PackagesEntity
  extends Model<PackagesAttributes, PackagesCreationAttributes>
  implements PackagesAttributes
{
  declare id: number | null
  declare name: string | null
  declare price: number | null
  declare costPrice: number | null
  declare industryId: number | null
  declare maxUsers: number | null
  declare packageType: string
  declare status: string
  declare allowedMultipleStores: string
  declare additionalPrice: number | null
  declare additionalCostPrice: number | null
  declare permissionBasedOn: string
  declare testPackage: string
  declare createdAt: Date | null
  declare updatedAt: Date | null
}

export function initPackagesEntity(sequelize: Sequelize): typeof PackagesEntity {
  PackagesEntity.init(
    {
      id: {
        type: DataTypes.TEXT,
        field: 'id',
        allowNull: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.CHAR(200),
        field: 'name',
        allowNull: true,
      },
      price: {
        type: DataTypes.DECIMAL(15, 2),
        field: 'price',
        allowNull: true,
      },
      costPrice: {
        type: DataTypes.DECIMAL(15, 2),
        field: 'cost_price',
        allowNull: true,
      },
      industryId: {
        type: DataTypes.TEXT,
        field: 'industry_id',
        allowNull: true,
      },
      maxUsers: {
        type: DataTypes.TEXT,
        field: 'max_users',
        allowNull: true,
        defaultValue: 0,
      },
      packageType: {
        type: DataTypes.TEXT,
        field: 'package_type',
        allowNull: false,
        defaultValue: "Lite",
      },
      status: {
        type: DataTypes.TEXT,
        field: 'status',
        allowNull: false,
        defaultValue: "Active",
      },
      allowedMultipleStores: {
        type: DataTypes.TEXT,
        field: 'allowed_multiple_stores',
        allowNull: false,
        defaultValue: "No",
      },
      additionalPrice: {
        type: DataTypes.DECIMAL(15, 1),
        field: 'additional_price',
        allowNull: true,
      },
      additionalCostPrice: {
        type: DataTypes.DECIMAL(15, 1),
        field: 'additional_cost_price',
        allowNull: true,
      },
      permissionBasedOn: {
        type: DataTypes.TEXT,
        field: 'permission_based_on',
        allowNull: false,
        defaultValue: "Role",
      },
      testPackage: {
        type: DataTypes.TEXT,
        field: 'test_package',
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
      }
    },
    {
      sequelize,
      tableName: 'packages',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: true,
      indexes: [
      { unique: true, fields: ['id'] }
      ]
    }
  )
  return PackagesEntity
}
