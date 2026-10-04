import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type ModulesAttributes = {
  id: number
  name: string
  moduleKey: string
  permissionOption: string
  relevantModules?: unknown | null
  hideFromPackageUpgrade?: string
  createdAt: Date
  updatedAt: Date
}

export type ModulesCreationAttributes = Optional<ModulesAttributes, "relevantModules" | "hideFromPackageUpgrade">

export class ModulesEntity
  extends Model<ModulesAttributes, ModulesCreationAttributes>
  implements ModulesAttributes
{
  declare id: number
  declare name: string
  declare moduleKey: string
  declare permissionOption: string
  declare relevantModules: unknown | null
  declare hideFromPackageUpgrade: string
  declare createdAt: Date
  declare updatedAt: Date
}

export function initModulesEntity(sequelize: Sequelize): typeof ModulesEntity {
  ModulesEntity.init(
    {
      id: {
        type: DataTypes.INTEGER,
        field: 'id',
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING(50),
        field: 'name',
        allowNull: false,
      },
      moduleKey: {
        type: DataTypes.STRING(50),
        field: 'module_key',
        allowNull: false,
      },
      permissionOption: {
        type: DataTypes.STRING(500),
        field: 'permission_option',
        allowNull: false,
      },
      relevantModules: {
        type: DataTypes.JSONB,
        field: 'relevant_modules',
        allowNull: true,
      },
      hideFromPackageUpgrade: {
        type: DataTypes.TEXT,
        field: 'hide_from_package_upgrade',
        allowNull: false,
        defaultValue: "'N' CHECK (\n        \"hide_from_package_upgrade\" IN ('N'",
      },
      createdAt: {
        type: DataTypes.DATE,
        field: 'created_at',
        allowNull: false,
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: 'updated_at',
        allowNull: false,
      }
    },
    {
      sequelize,
      tableName: 'modules',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: false,
      indexes: [
      { unique: true, fields: ['id'] },
      { unique: true, fields: ['uq_modules_module_key', 'module_key'] }
      ]
    }
  )
  return ModulesEntity
}
