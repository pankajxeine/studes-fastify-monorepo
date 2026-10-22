import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type PackageRoleFeaturePermissionsAttributes = {
  id?: string | number | null
  packageRoleMappingId?: number | null
  featureId?: number | null
  permission?: string | null
  createdAt?: Date
  updatedAt?: Date
}

export type PackageRoleFeaturePermissionsCreationAttributes = Optional<PackageRoleFeaturePermissionsAttributes, "id" | "packageRoleMappingId" | "featureId" | "permission" | "createdAt" | "updatedAt">

export class PackageRoleFeaturePermissionsEntity
  extends Model<PackageRoleFeaturePermissionsAttributes, PackageRoleFeaturePermissionsCreationAttributes>
  implements PackageRoleFeaturePermissionsAttributes
{
  declare id: string | number | null
  declare packageRoleMappingId: number | null
  declare featureId: number | null
  declare permission: string | null
  declare createdAt: Date
  declare updatedAt: Date
}

export function initPackageRoleFeaturePermissionsEntity(sequelize: Sequelize): typeof PackageRoleFeaturePermissionsEntity {
  PackageRoleFeaturePermissionsEntity.init(
    {
      id: {
        type: DataTypes.BIGINT,
        field: 'id',
        allowNull: true,
        primaryKey: true,
        autoIncrement: true,
        defaultValue: "AS IDENTITY",
      },
      packageRoleMappingId: {
        type: DataTypes.TEXT,
        field: 'package_role_mapping_id',
        allowNull: true,
        references: { model: 'package_role_mappings', key: 'id' },
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
      tableName: 'package_role_feature_permissions',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['id'] },
      { unique: true, fields: ['package_role_mapping_id', 'feature_id'] }
      ]
    }
  )
  return PackageRoleFeaturePermissionsEntity
}
