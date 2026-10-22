import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type RoleTemplateModulesAttributes = {
  id?: string | number | null
  roleTemplateId?: number | null
  moduleId?: number | null
  moduleKey?: string | null
  createdAt?: Date
  updatedAt?: Date
}

export type RoleTemplateModulesCreationAttributes = Optional<RoleTemplateModulesAttributes, "id" | "roleTemplateId" | "moduleId" | "moduleKey" | "createdAt" | "updatedAt">

export class RoleTemplateModulesEntity
  extends Model<RoleTemplateModulesAttributes, RoleTemplateModulesCreationAttributes>
  implements RoleTemplateModulesAttributes
{
  declare id: string | number | null
  declare roleTemplateId: number | null
  declare moduleId: number | null
  declare moduleKey: string | null
  declare createdAt: Date
  declare updatedAt: Date
}

export function initRoleTemplateModulesEntity(sequelize: Sequelize): typeof RoleTemplateModulesEntity {
  RoleTemplateModulesEntity.init(
    {
      id: {
        type: DataTypes.BIGINT,
        field: 'id',
        allowNull: true,
        primaryKey: true,
        autoIncrement: true,
        defaultValue: "AS IDENTITY",
      },
      roleTemplateId: {
        type: DataTypes.TEXT,
        field: 'role_template_id',
        allowNull: true,
        references: { model: 'role_templates', key: 'id' },
      },
      moduleId: {
        type: DataTypes.TEXT,
        field: 'module_id',
        allowNull: true,
        references: { model: 'modules', key: 'id' },
      },
      moduleKey: {
        type: DataTypes.STRING(50),
        field: 'module_key',
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
      tableName: 'role_template_modules',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['id'] }
      ]
    }
  )
  return RoleTemplateModulesEntity
}
