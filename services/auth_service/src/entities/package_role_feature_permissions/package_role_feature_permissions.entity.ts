import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type PackageRoleFeaturePermissionsAttributes = {
  id?: number
  package_role_mapping_id?: number | null
  feature_id?: number | null
  permission?: string | null
  created_at?: Date | null
  updated_at?: Date | null
}

export type PackageRoleFeaturePermissionsCreationAttributes = Optional<PackageRoleFeaturePermissionsAttributes, "id" | "package_role_mapping_id" | "feature_id" | "permission" | "created_at" | "updated_at">

export class PackageRoleFeaturePermissionsEntity
  extends Model<PackageRoleFeaturePermissionsAttributes, PackageRoleFeaturePermissionsCreationAttributes>
  implements PackageRoleFeaturePermissionsAttributes
{
  declare id: number
  declare package_role_mapping_id: number | null
  declare feature_id: number | null
  declare permission: string | null
  declare created_at: Date | null
  declare updated_at: Date | null
}

export function initPackageRoleFeaturePermissionsEntity(sequelize: Sequelize): typeof PackageRoleFeaturePermissionsEntity {
  PackageRoleFeaturePermissionsEntity.init(
    {
      id: {
        type: DataTypes.INTEGER,
        field: 'id',
        allowNull: false,
        primaryKey: true ,
        autoIncrement: true,
      },
      package_role_mapping_id: {
        type: DataTypes.INTEGER,
        field: 'package_role_mapping_id',
        allowNull: true,
        unique: true,
        defaultValue: null,
      },
      feature_id: {
        type: DataTypes.INTEGER,
        field: 'feature_id',
        allowNull: true,
        unique: true,
        defaultValue: null,
      },
      permission: {
        type: DataTypes.ENUM('full','view_only','add_update_only','none'),
        field: 'permission',
        allowNull: true,
        defaultValue: "full",
      },
      created_at: {
        type: DataTypes.DATE,
        field: 'created_at',
        allowNull: true,
        defaultValue: null,
      },
      updated_at: {
        type: DataTypes.DATE,
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
