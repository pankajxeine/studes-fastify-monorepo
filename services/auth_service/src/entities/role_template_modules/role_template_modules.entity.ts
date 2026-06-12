import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type RoleTemplateModulesAttributes = {
  id?: number
  role_template_id: number
  module_id: number
  module_key: string
  created_at: Date
  updated_at: Date
}

export type RoleTemplateModulesCreationAttributes = Optional<RoleTemplateModulesAttributes, "id">

export class RoleTemplateModulesEntity
  extends Model<RoleTemplateModulesAttributes, RoleTemplateModulesCreationAttributes>
  implements RoleTemplateModulesAttributes
{
  declare id: number
  declare role_template_id: number
  declare module_id: number
  declare module_key: string
  declare created_at: Date
  declare updated_at: Date
}

export function initRoleTemplateModulesEntity(sequelize: Sequelize): typeof RoleTemplateModulesEntity {
  RoleTemplateModulesEntity.init(
    {
      id: {
        type: DataTypes.INTEGER,
        field: 'id',
        allowNull: false,
        primaryKey: true ,
        autoIncrement: true,
      },
      role_template_id: {
        type: DataTypes.INTEGER,
        field: 'role_template_id',
        allowNull: false,
      },
      module_id: {
        type: DataTypes.INTEGER,
        field: 'module_id',
        allowNull: false,
      },
      module_key: {
        type: DataTypes.STRING(50),
        field: 'module_key',
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
      tableName: 'role_template_modules',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: true,
      comment: 'role template modules'
    }
  )
  return RoleTemplateModulesEntity
}
