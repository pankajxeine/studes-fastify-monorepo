import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type PackageRoleFeaturePermissionsAttributes = {
  id?: number | null
  packageRoleMappingId?: number | null
  featureId?: number | null
  permission?: string | null
  createdAt?: Date | null
  updatedAt?: Date | null
}

export type PackageRoleFeaturePermissionsCreationAttributes = Optional<PackageRoleFeaturePermissionsAttributes, "id" | "packageRoleMappingId" | "featureId" | "permission" | "createdAt" | "updatedAt">

export class PackageRoleFeaturePermissionsEntity
  extends Model<PackageRoleFeaturePermissionsAttributes, PackageRoleFeaturePermissionsCreationAttributes>
  implements PackageRoleFeaturePermissionsAttributes
{
  declare id: number | null
  declare packageRoleMappingId: number | null
  declare featureId: number | null
  declare permission: string | null
  declare createdAt: Date | null
  declare updatedAt: Date | null
}

export function initPackageRoleFeaturePermissionsEntity(sequelize: Sequelize): typeof PackageRoleFeaturePermissionsEntity {
  PackageRoleFeaturePermissionsEntity.init(
    {
      id: {
        type: DataTypes.INTEGER,
        field: 'id',
        allowNull: true,
        primaryKey: true,
      },
      packageRoleMappingId: {
        type: DataTypes.TEXT,
        field: 'package_role_mapping_id',
        allowNull: true,
      },
      featureId: {
        type: DataTypes.TEXT,
        field: 'feature_id',
        allowNull: true,
      },
      permission: {
        type: DataTypes.TEXT,
        field: 'permission',
        allowNull: true,
        defaultValue: "full",
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
      tableName: 'package_role_feature_permissions',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: false,
      indexes: [
      { unique: true, fields: ['id'] },
      { unique: true, fields: ['package_role_mapping_id', 'feature_id'] }
      ]
    }
  )
  return PackageRoleFeaturePermissionsEntity
}
