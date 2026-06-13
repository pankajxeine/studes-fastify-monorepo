import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type PackageRoleMappingsAttributes = {
  id?: number | null
  package_role_id?: number | null
  package_id?: number | null
  created_at?: string | null
  updated_at?: string | null
}

export type PackageRoleMappingsCreationAttributes = Optional<PackageRoleMappingsAttributes, "id" | "package_role_id" | "package_id" | "created_at" | "updated_at">

export class PackageRoleMappingsEntity
  extends Model<PackageRoleMappingsAttributes, PackageRoleMappingsCreationAttributes>
  implements PackageRoleMappingsAttributes
{
  declare id: number | null
  declare package_role_id: number | null
  declare package_id: number | null
  declare created_at: string | null
  declare updated_at: string | null
}

export function initPackageRoleMappingsEntity(sequelize: Sequelize): typeof PackageRoleMappingsEntity {
  PackageRoleMappingsEntity.init(
    {
      id: {
        type: DataTypes.TEXT,
        field: 'id',
        allowNull: true,
      },
      package_role_id: {
        type: DataTypes.TEXT,
        field: 'package_role_id',
        allowNull: true,
      },
      package_id: {
        type: DataTypes.TEXT,
        field: 'package_id',
        allowNull: true,
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
      tableName: 'package_role_mappings',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: true
    }
  )
  return PackageRoleMappingsEntity
}
