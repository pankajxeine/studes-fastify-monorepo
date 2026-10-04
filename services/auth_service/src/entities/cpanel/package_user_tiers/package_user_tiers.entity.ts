import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type PackageUserTiersAttributes = {
  id?: number
  userTierId?: number | null
  packageId?: number | null
  price?: number | null
  costPrice?: number | null
  status?: string | null
  createdBy?: number | null
  updatedBy?: number | null
  createdAt?: Date | null
  updatedAt?: Date | null
}

export type PackageUserTiersCreationAttributes = Optional<PackageUserTiersAttributes, "id" | "userTierId" | "packageId" | "price" | "costPrice" | "status" | "createdBy" | "updatedBy" | "createdAt" | "updatedAt">

export class PackageUserTiersEntity
  extends Model<PackageUserTiersAttributes, PackageUserTiersCreationAttributes>
  implements PackageUserTiersAttributes
{
  declare id: number
  declare userTierId: number | null
  declare packageId: number | null
  declare price: number | null
  declare costPrice: number | null
  declare status: string | null
  declare createdBy: number | null
  declare updatedBy: number | null
  declare createdAt: Date | null
  declare updatedAt: Date | null
}

export function initPackageUserTiersEntity(sequelize: Sequelize): typeof PackageUserTiersEntity {
  PackageUserTiersEntity.init(
    {
      id: {
        type: DataTypes.INTEGER,
        field: 'id',
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      userTierId: {
        type: DataTypes.INTEGER,
        field: 'user_tier_id',
        allowNull: true,
      },
      packageId: {
        type: DataTypes.INTEGER,
        field: 'package_id',
        allowNull: true,
      },
      price: {
        type: DataTypes.DOUBLE,
        field: 'price',
        allowNull: true,
      },
      costPrice: {
        type: DataTypes.DOUBLE,
        field: 'cost_price',
        allowNull: true,
        defaultValue: "0.000",
      },
      status: {
        type: DataTypes.TEXT,
        field: 'status',
        allowNull: true,
        defaultValue: "'Active' CHECK (\n        \"status\" IN ('Active'",
      },
      createdBy: {
        type: DataTypes.INTEGER,
        field: 'created_by',
        allowNull: true,
      },
      updatedBy: {
        type: DataTypes.INTEGER,
        field: 'updated_by',
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
      }
    },
    {
      sequelize,
      tableName: 'package_user_tiers',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: false,
      indexes: [
      { unique: true, fields: ['id'] }
      ]
    }
  )
  return PackageUserTiersEntity
}
