import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type PackageRolesAttributes = {
  id?: number
  package_role_name: string
  package_role_key: string
  status?: string
  created_at: Date
  updated_at: Date
}

export type PackageRolesCreationAttributes = Optional<PackageRolesAttributes, "id" | "status">

export class PackageRolesEntity
  extends Model<PackageRolesAttributes, PackageRolesCreationAttributes>
  implements PackageRolesAttributes
{
  declare id: number
  declare package_role_name: string
  declare package_role_key: string
  declare status: string
  declare created_at: Date
  declare updated_at: Date
}

export function initPackageRolesEntity(sequelize: Sequelize): typeof PackageRolesEntity {
  PackageRolesEntity.init(
    {
      id: {
        type: DataTypes.INTEGER,
        field: 'id',
        allowNull: false,
        primaryKey: true ,
        autoIncrement: true,
      },
      package_role_name: {
        type: DataTypes.STRING(30),
        field: 'package_role_name',
        allowNull: false,
      },
      package_role_key: {
        type: DataTypes.STRING(30),
        field: 'package_role_key',
        allowNull: false,
        unique: true,
      },
      status: {
        type: DataTypes.ENUM('active','inactive'),
        field: 'status',
        allowNull: false,
        defaultValue: "Active",
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
      tableName: 'package_roles',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: true
    }
  )
  return PackageRolesEntity
}
