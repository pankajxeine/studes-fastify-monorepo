import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type RoleModulePermissionsAttributes = {
  id?: number | null
  role_id?: number | null
  module_id?: number | null
  permission?: string | null
  created_by?: number | null
  updated_by?: number | null
  created_at?: string | null
  updated_at?: string | null
}

export type RoleModulePermissionsCreationAttributes = Optional<RoleModulePermissionsAttributes, "id" | "role_id" | "module_id" | "permission" | "created_by" | "updated_by" | "created_at" | "updated_at">

export class RoleModulePermissionsEntity
  extends Model<RoleModulePermissionsAttributes, RoleModulePermissionsCreationAttributes>
  implements RoleModulePermissionsAttributes
{
  declare id: number | null
  declare role_id: number | null
  declare module_id: number | null
  declare permission: string | null
  declare created_by: number | null
  declare updated_by: number | null
  declare created_at: string | null
  declare updated_at: string | null
}

export function initRoleModulePermissionsEntity(sequelize: Sequelize): typeof RoleModulePermissionsEntity {
  RoleModulePermissionsEntity.init(
    {
      id: {
        type: DataTypes.TEXT,
        field: 'id',
        allowNull: true,
      },
      role_id: {
        type: DataTypes.TEXT,
        field: 'role_id',
        allowNull: true,
      },
      module_id: {
        type: DataTypes.TEXT,
        field: 'module_id',
        allowNull: true,
      },
      permission: {
        type: DataTypes.CHAR,
        field: 'permission',
        allowNull: true,
        defaultValue: null,
      },
      created_by: {
        type: DataTypes.TEXT,
        field: 'created_by',
        allowNull: true,
      },
      updated_by: {
        type: DataTypes.TEXT,
        field: 'updated_by',
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
      tableName: 'role_module_permissions',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: true
    }
  )
  return RoleModulePermissionsEntity
}
