import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type RoleTemplateModulesAttributes = {
  id?: number | null
  role_template_id?: number | null
  module_id?: number | null
  module_key?: string | null
  created_at?: string | null
  updated_at?: string | null
}

export type RoleTemplateModulesCreationAttributes = Optional<RoleTemplateModulesAttributes, "id" | "role_template_id" | "module_id" | "module_key" | "created_at" | "updated_at">

export class RoleTemplateModulesEntity
  extends Model<RoleTemplateModulesAttributes, RoleTemplateModulesCreationAttributes>
  implements RoleTemplateModulesAttributes
{
  declare id: number | null
  declare role_template_id: number | null
  declare module_id: number | null
  declare module_key: string | null
  declare created_at: string | null
  declare updated_at: string | null
}

export function initRoleTemplateModulesEntity(sequelize: Sequelize): typeof RoleTemplateModulesEntity {
  RoleTemplateModulesEntity.init(
    {
      id: {
        type: DataTypes.TEXT,
        field: 'id',
        allowNull: true,
      },
      role_template_id: {
        type: DataTypes.TEXT,
        field: 'role_template_id',
        allowNull: true,
      },
      module_id: {
        type: DataTypes.TEXT,
        field: 'module_id',
        allowNull: true,
      },
      module_key: {
        type: DataTypes.CHAR,
        field: 'module_key',
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
      tableName: 'role_template_modules',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: true
    }
  )
  return RoleTemplateModulesEntity
}
