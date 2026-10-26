import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type CatalogModuleDependencyAttributes = {
  recordCode?: string
  moduleDependencyId: string | null
  moduleId: string
  requiresModuleId: string
}

export type CatalogModuleDependencyCreationAttributes = Optional<CatalogModuleDependencyAttributes, "recordCode">

export class CatalogModuleDependencyEntity
  extends Model<CatalogModuleDependencyAttributes, CatalogModuleDependencyCreationAttributes>
  implements CatalogModuleDependencyAttributes
{
  declare recordCode: string
  declare moduleDependencyId: string | null
  declare moduleId: string
  declare requiresModuleId: string
}

export function initCatalogModuleDependencyEntity(sequelize: Sequelize): typeof CatalogModuleDependencyEntity {
  CatalogModuleDependencyEntity.init(
    {
      recordCode: {
        type: DataTypes.TEXT,
        field: 'record_code',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('catalog_module_dependency')"),
      },
      moduleDependencyId: {
        type: DataTypes.TEXT,
        field: 'module_dependency_id',
        allowNull: true,
        primaryKey: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      moduleId: {
        type: DataTypes.TEXT,
        field: 'module_id',
        allowNull: false,
        references: { model: 'catalog_module', key: 'module_id' },
        onDelete: 'CASCADE',
      },
      requiresModuleId: {
        type: DataTypes.TEXT,
        field: 'requires_module_id',
        allowNull: false,
        references: { model: 'catalog_module', key: 'module_id' },
      }
    },
    {
      sequelize,
      tableName: 'catalog_module_dependency',
      timestamps: false,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['module_id', 'requires_module_id'] }
      ]
    }
  )
  return CatalogModuleDependencyEntity
}
