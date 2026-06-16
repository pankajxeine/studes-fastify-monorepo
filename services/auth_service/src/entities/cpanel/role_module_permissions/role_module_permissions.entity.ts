import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type RoleModulePermissionsAttributes = {
  id?: number | null
  roleId?: number | null
  moduleId?: number | null
  permission?: string
  createdBy?: number | null
  updatedBy?: number | null
  createdAt?: Date | null
  updatedAt?: Date | null
}

export type RoleModulePermissionsCreationAttributes = Optional<RoleModulePermissionsAttributes, "id" | "roleId" | "moduleId" | "permission" | "createdBy" | "updatedBy" | "createdAt" | "updatedAt">

export class RoleModulePermissionsEntity
  extends Model<RoleModulePermissionsAttributes, RoleModulePermissionsCreationAttributes>
  implements RoleModulePermissionsAttributes
{
  declare id: number | null
  declare roleId: number | null
  declare moduleId: number | null
  declare permission: string
  declare createdBy: number | null
  declare updatedBy: number | null
  declare createdAt: Date | null
  declare updatedAt: Date | null
}

export function initRoleModulePermissionsEntity(sequelize: Sequelize): typeof RoleModulePermissionsEntity {
  RoleModulePermissionsEntity.init(
    {
      id: {
        type: DataTypes.TEXT,
        field: 'id',
        allowNull: true,
        primaryKey: true,
      },
      roleId: {
        type: DataTypes.TEXT,
        field: 'role_id',
        allowNull: true,
      },
      moduleId: {
        type: DataTypes.TEXT,
        field: 'module_id',
        allowNull: true,
      },
      permission: {
        type: DataTypes.TEXT,
        field: 'permission',
        allowNull: false,
        defaultValue: "None",
      },
      createdBy: {
        type: DataTypes.TEXT,
        field: 'created_by',
        allowNull: true,
      },
      updatedBy: {
        type: DataTypes.TEXT,
        field: 'updated_by',
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
      tableName: 'role_module_permissions',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: false,
      indexes: [
      { unique: true, fields: ['id'] },
      { unique: true, fields: ['role_id', 'module_id', 'permission'] }
      ]
    }
  )
  return RoleModulePermissionsEntity
}
