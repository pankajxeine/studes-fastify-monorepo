import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type RoleModulePermissionsAttributes = {
  id?: number
  role_id: number
  module_id: number
  permission?: string
  created_by: number
  updated_by: number
  created_at: Date
  updated_at: Date
}

export type RoleModulePermissionsCreationAttributes = Optional<RoleModulePermissionsAttributes, "id" | "permission">

export class RoleModulePermissionsEntity
  extends Model<RoleModulePermissionsAttributes, RoleModulePermissionsCreationAttributes>
  implements RoleModulePermissionsAttributes
{
  declare id: number
  declare role_id: number
  declare module_id: number
  declare permission: string
  declare created_by: number
  declare updated_by: number
  declare created_at: Date
  declare updated_at: Date
}

export function initRoleModulePermissionsEntity(sequelize: Sequelize): typeof RoleModulePermissionsEntity {
  RoleModulePermissionsEntity.init(
    {
      id: {
        type: DataTypes.INTEGER,
        field: 'id',
        allowNull: false,
        primaryKey: true ,
        autoIncrement: true,
      },
      role_id: {
        type: DataTypes.INTEGER,
        field: 'role_id',
        allowNull: false,
        unique: true,
      },
      module_id: {
        type: DataTypes.INTEGER,
        field: 'module_id',
        allowNull: false,
        unique: true,
      },
      permission: {
        type: DataTypes.ENUM('full','add & update only','view only','none'),
        field: 'permission',
        allowNull: false,
        unique: true,
        defaultValue: "None",
      },
      created_by: {
        type: DataTypes.INTEGER,
        field: 'created_by',
        allowNull: false,
      },
      updated_by: {
        type: DataTypes.INTEGER,
        field: 'updated_by',
        allowNull: false,
      },
      created_at: {
        type: DataTypes.DATE,
        field: 'created_at',
        allowNull: false,
      },
      updated_at: {
        type: DataTypes.DATE,
        field: 'updated_at',
        allowNull: false,
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
