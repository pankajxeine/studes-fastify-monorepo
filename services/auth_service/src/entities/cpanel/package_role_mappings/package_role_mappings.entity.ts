import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type PackageRoleMappingsAttributes = {
  id?: number | null
  packageRoleId?: number | null
  packageId?: number | null
  createdAt?: Date | null
  updatedAt?: Date | null
}

export type PackageRoleMappingsCreationAttributes = Optional<PackageRoleMappingsAttributes, "id" | "packageRoleId" | "packageId" | "createdAt" | "updatedAt">

export class PackageRoleMappingsEntity
  extends Model<PackageRoleMappingsAttributes, PackageRoleMappingsCreationAttributes>
  implements PackageRoleMappingsAttributes
{
  declare id: number | null
  declare packageRoleId: number | null
  declare packageId: number | null
  declare createdAt: Date | null
  declare updatedAt: Date | null
}

export function initPackageRoleMappingsEntity(sequelize: Sequelize): typeof PackageRoleMappingsEntity {
  PackageRoleMappingsEntity.init(
    {
      id: {
        type: DataTypes.TEXT,
        field: 'id',
        allowNull: true,
        primaryKey: true,
      },
      packageRoleId: {
        type: DataTypes.TEXT,
        field: 'package_role_id',
        allowNull: true,
      },
      packageId: {
        type: DataTypes.TEXT,
        field: 'package_id',
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
      tableName: 'package_role_mappings',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: false,
      indexes: [
      { unique: true, fields: ['id'] },
      { unique: true, fields: ['package_role_id', 'package_id'] }
      ]
    }
  )
  return PackageRoleMappingsEntity
}
