import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type PackageRoleMappingsAttributes = {
  id?: string | number | null
  packageRoleId?: number | null
  packageId?: number | null
  createdAt?: Date
  updatedAt?: Date
}

export type PackageRoleMappingsCreationAttributes = Optional<PackageRoleMappingsAttributes, "id" | "packageRoleId" | "packageId" | "createdAt" | "updatedAt">

export class PackageRoleMappingsEntity
  extends Model<PackageRoleMappingsAttributes, PackageRoleMappingsCreationAttributes>
  implements PackageRoleMappingsAttributes
{
  declare id: string | number | null
  declare packageRoleId: number | null
  declare packageId: number | null
  declare createdAt: Date
  declare updatedAt: Date
}

export function initPackageRoleMappingsEntity(sequelize: Sequelize): typeof PackageRoleMappingsEntity {
  PackageRoleMappingsEntity.init(
    {
      id: {
        type: DataTypes.BIGINT,
        field: 'id',
        allowNull: true,
        primaryKey: true,
        autoIncrement: true,
        defaultValue: "AS IDENTITY",
      },
      packageRoleId: {
        type: DataTypes.TEXT,
        field: 'package_role_id',
        allowNull: true,
        references: { model: 'package_roles', key: 'id' },
      },
      packageId: {
        type: DataTypes.TEXT,
        field: 'package_id',
        allowNull: true,
        references: { model: 'packages', key: 'id' },
      },
      createdAt: {
        type: DataTypes.DATE,
        field: 'created_at',
        allowNull: false,
        defaultValue: "DataTypes.NOW",
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: 'updated_at',
        allowNull: false,
        defaultValue: "DataTypes.NOW",
      }
    },
    {
      sequelize,
      tableName: 'package_role_mappings',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['id'] },
      { unique: true, fields: ['package_role_id', 'package_id'] }
      ]
    }
  )
  return PackageRoleMappingsEntity
}
