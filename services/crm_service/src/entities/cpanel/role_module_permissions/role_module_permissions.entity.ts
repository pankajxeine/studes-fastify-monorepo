import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type RoleModulePermissionsAttributes = {
  id?: string | number | null
  roleId?: number | null
  moduleId?: number | null
  permission?: string
  createdBy?: number | null
  updatedBy?: number | null
  createdAt?: Date
  updatedAt?: Date
}

export type RoleModulePermissionsCreationAttributes = Optional<RoleModulePermissionsAttributes, "id" | "roleId" | "moduleId" | "permission" | "createdBy" | "updatedBy" | "createdAt" | "updatedAt">

export class RoleModulePermissionsEntity
  extends Model<RoleModulePermissionsAttributes, RoleModulePermissionsCreationAttributes>
  implements RoleModulePermissionsAttributes
{
  declare id: string | number | null
  declare roleId: number | null
  declare moduleId: number | null
  declare permission: string
  declare createdBy: number | null
  declare updatedBy: number | null
  declare createdAt: Date
  declare updatedAt: Date
}

export function initRoleModulePermissionsEntity(sequelize: Sequelize): typeof RoleModulePermissionsEntity {
  RoleModulePermissionsEntity.init(
    {
      id: {
        type: DataTypes.BIGINT,
        field: 'id',
        allowNull: true,
        primaryKey: true,
        autoIncrement: true,
        defaultValue: "AS IDENTITY",
      },
      roleId: {
        type: DataTypes.TEXT,
        field: 'role_id',
        allowNull: true,
        references: { model: 'roles', key: 'id' },
      },
      moduleId: {
        type: DataTypes.TEXT,
        field: 'module_id',
        allowNull: true,
        references: { model: 'modules', key: 'id' },
      },
      permission: {
        type: DataTypes.TEXT,
        field: 'permission',
        allowNull: false,
        defaultValue: "none",
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
      tableName: 'role_module_permissions',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['id'] },
      { unique: true, fields: ['role_id', 'module_id', 'permission'] }
      ]
    }
  )
  return RoleModulePermissionsEntity
}
