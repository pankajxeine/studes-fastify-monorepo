import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type PackageRolesAttributes = {
  id?: number | null
  packageRoleName?: string | null
  packageRoleKey?: string | null
  status?: string
  createdAt?: Date | null
  updatedAt?: Date | null
}

export type PackageRolesCreationAttributes = Optional<PackageRolesAttributes, "id" | "packageRoleName" | "packageRoleKey" | "status" | "createdAt" | "updatedAt">

export class PackageRolesEntity
  extends Model<PackageRolesAttributes, PackageRolesCreationAttributes>
  implements PackageRolesAttributes
{
  declare id: number | null
  declare packageRoleName: string | null
  declare packageRoleKey: string | null
  declare status: string
  declare createdAt: Date | null
  declare updatedAt: Date | null
}

export function initPackageRolesEntity(sequelize: Sequelize): typeof PackageRolesEntity {
  PackageRolesEntity.init(
    {
      id: {
        type: DataTypes.TEXT,
        field: 'id',
        allowNull: true,
        primaryKey: true,
      },
      packageRoleName: {
        type: DataTypes.STRING(30),
        field: 'package_role_name',
        allowNull: true,
      },
      packageRoleKey: {
        type: DataTypes.STRING(30),
        field: 'package_role_key',
        allowNull: true,
      },
      status: {
        type: DataTypes.TEXT,
        field: 'status',
        allowNull: false,
        defaultValue: "Active",
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
      tableName: 'package_roles',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: false,
      indexes: [
      { unique: true, fields: ['id'] },
      { unique: true, fields: ['package_role_key'] }
      ]
    }
  )
  return PackageRolesEntity
}
