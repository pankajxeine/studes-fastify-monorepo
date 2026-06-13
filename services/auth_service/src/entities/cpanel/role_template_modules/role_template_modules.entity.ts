import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type RoleTemplateModulesAttributes = {
  id?: number | null
  roleTemplateId?: number | null
  moduleId?: number | null
  moduleKey?: string | null
  createdAt?: Date | null
  updatedAt?: Date | null
}

export type RoleTemplateModulesCreationAttributes = Optional<RoleTemplateModulesAttributes, "id" | "roleTemplateId" | "moduleId" | "moduleKey" | "createdAt" | "updatedAt">

export class RoleTemplateModulesEntity
  extends Model<RoleTemplateModulesAttributes, RoleTemplateModulesCreationAttributes>
  implements RoleTemplateModulesAttributes
{
  declare id: number | null
  declare roleTemplateId: number | null
  declare moduleId: number | null
  declare moduleKey: string | null
  declare createdAt: Date | null
  declare updatedAt: Date | null
}

export function initRoleTemplateModulesEntity(sequelize: Sequelize): typeof RoleTemplateModulesEntity {
  RoleTemplateModulesEntity.init(
    {
      id: {
        type: DataTypes.TEXT,
        field: 'id',
        allowNull: true,
        primaryKey: true,
      },
      roleTemplateId: {
        type: DataTypes.TEXT,
        field: 'role_template_id',
        allowNull: true,
      },
      moduleId: {
        type: DataTypes.TEXT,
        field: 'module_id',
        allowNull: true,
      },
      moduleKey: {
        type: DataTypes.CHAR(50),
        field: 'module_key',
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
      tableName: 'role_template_modules',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: true,
      indexes: [
      { unique: true, fields: ['id'] }
      ]
    }
  )
  return RoleTemplateModulesEntity
}
