import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type PackageRoleFeaturePermissionsAttributes = {
  id?: number | null
  package_role_mapping_id?: number | null
  feature_id?: number | null
  permission?: string | null
  created_at?: string | null
  updated_at?: string | null
}

export type PackageRoleFeaturePermissionsCreationAttributes = Optional<PackageRoleFeaturePermissionsAttributes, "id" | "package_role_mapping_id" | "feature_id" | "permission" | "created_at" | "updated_at">

export class PackageRoleFeaturePermissionsEntity
  extends Model<PackageRoleFeaturePermissionsAttributes, PackageRoleFeaturePermissionsCreationAttributes>
  implements PackageRoleFeaturePermissionsAttributes
{
  declare id: number | null
  declare package_role_mapping_id: number | null
  declare feature_id: number | null
  declare permission: string | null
  declare created_at: string | null
  declare updated_at: string | null
}

export function initPackageRoleFeaturePermissionsEntity(sequelize: Sequelize): typeof PackageRoleFeaturePermissionsEntity {
  PackageRoleFeaturePermissionsEntity.init(
    {
      id: {
        type: DataTypes.INTEGER,
        field: 'id',
        allowNull: true,
      },
      package_role_mapping_id: {
        type: DataTypes.TEXT,
        field: 'package_role_mapping_id',
        allowNull: true,
      },
      feature_id: {
        type: DataTypes.TEXT,
        field: 'feature_id',
        allowNull: true,
      },
      permission: {
        type: DataTypes.CHAR,
        field: 'permission',
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
      tableName: 'package_role_feature_permissions',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: true
    }
  )
  return PackageRoleFeaturePermissionsEntity
}
