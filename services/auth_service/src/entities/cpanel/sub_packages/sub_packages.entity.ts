import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type SubPackagesAttributes = {
  id?: number | null
  subId?: number | null
  packageId?: number | null
  packageName?: string | null
  packagePrice?: number | null
  packageMaxUser?: number | null
  packageMaxProduct?: number | null
  permissionBasedOn?: string | null
  additionalUsers?: number | null
  additionalStorePrice?: number | null
  additionalUserPrice?: number | null
  discount?: number | null
  billingDate?: Date | null
  expiryDate?: Date | null
  createdAt?: Date | null
  updatedAt?: Date | null
  deletedAt?: Date | null
}

export type SubPackagesCreationAttributes = Optional<SubPackagesAttributes, "id" | "subId" | "packageId" | "packageName" | "packagePrice" | "packageMaxUser" | "packageMaxProduct" | "permissionBasedOn" | "additionalUsers" | "additionalStorePrice" | "additionalUserPrice" | "discount" | "billingDate" | "expiryDate" | "createdAt" | "updatedAt" | "deletedAt">

export class SubPackagesEntity
  extends Model<SubPackagesAttributes, SubPackagesCreationAttributes>
  implements SubPackagesAttributes
{
  declare id: number | null
  declare subId: number | null
  declare packageId: number | null
  declare packageName: string | null
  declare packagePrice: number | null
  declare packageMaxUser: number | null
  declare packageMaxProduct: number | null
  declare permissionBasedOn: string | null
  declare additionalUsers: number | null
  declare additionalStorePrice: number | null
  declare additionalUserPrice: number | null
  declare discount: number | null
  declare billingDate: Date | null
  declare expiryDate: Date | null
  declare createdAt: Date | null
  declare updatedAt: Date | null
  declare deletedAt: Date | null
}

export function initSubPackagesEntity(sequelize: Sequelize): typeof SubPackagesEntity {
  SubPackagesEntity.init(
    {
      id: {
        type: DataTypes.TEXT,
        field: 'id',
        allowNull: true,
        primaryKey: true,
      },
      subId: {
        type: DataTypes.TEXT,
        field: 'sub_id',
        allowNull: true,
      },
      packageId: {
        type: DataTypes.TEXT,
        field: 'package_id',
        allowNull: true,
      },
      packageName: {
        type: DataTypes.STRING(200),
        field: 'package_name',
        allowNull: true,
      },
      packagePrice: {
        type: DataTypes.TEXT,
        field: 'package_price',
        allowNull: true,
      },
      packageMaxUser: {
        type: DataTypes.TEXT,
        field: 'package_max_user',
        allowNull: true,
        defaultValue: 0,
      },
      packageMaxProduct: {
        type: DataTypes.TEXT,
        field: 'package_max_product',
        allowNull: true,
        defaultValue: 0,
      },
      permissionBasedOn: {
        type: DataTypes.TEXT,
        field: 'permission_based_on',
        allowNull: true,
        defaultValue: "Role",
      },
      additionalUsers: {
        type: DataTypes.TEXT,
        field: 'additional_users',
        allowNull: true,
        defaultValue: 0,
      },
      additionalStorePrice: {
        type: DataTypes.DECIMAL(10, 2),
        field: 'additional_store_price',
        allowNull: true,
      },
      additionalUserPrice: {
        type: DataTypes.DECIMAL(10, 2),
        field: 'additional_user_price',
        allowNull: true,
      },
      discount: {
        type: DataTypes.DECIMAL(10, 2),
        field: 'discount',
        allowNull: true,
      },
      billingDate: {
        type: DataTypes.DATE,
        field: 'billing_date',
        allowNull: true,
      },
      expiryDate: {
        type: DataTypes.DATE,
        field: 'expiry_date',
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
      tableName: 'sub_packages',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: false,
      indexes: [
      { unique: true, fields: ['id'] }
      ]
    }
  )
  return SubPackagesEntity
}
