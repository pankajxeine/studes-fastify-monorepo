import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type PackageRolesAttributes = {
  id?: number | null
  package_role_name?: string | null
  package_role_key?: string | null
  status?: string | null
  created_at?: string | null
  updated_at?: string | null
}

export type PackageRolesCreationAttributes = Optional<PackageRolesAttributes, "id" | "package_role_name" | "package_role_key" | "status" | "created_at" | "updated_at">

export class PackageRolesEntity
  extends Model<PackageRolesAttributes, PackageRolesCreationAttributes>
  implements PackageRolesAttributes
{
  declare id: number | null
  declare package_role_name: string | null
  declare package_role_key: string | null
  declare status: string | null
  declare created_at: string | null
  declare updated_at: string | null
}

export function initPackageRolesEntity(sequelize: Sequelize): typeof PackageRolesEntity {
  PackageRolesEntity.init(
    {
      id: {
        type: DataTypes.TEXT,
        field: 'id',
        allowNull: true,
      },
      package_role_name: {
        type: DataTypes.CHAR,
        field: 'package_role_name',
        allowNull: true,
        defaultValue: null,
      },
      package_role_key: {
        type: DataTypes.CHAR,
        field: 'package_role_key',
        allowNull: true,
        defaultValue: null,
      },
      status: {
        type: DataTypes.CHAR,
        field: 'status',
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
      tableName: 'package_roles',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: true
    }
  )
  return PackageRolesEntity
}
