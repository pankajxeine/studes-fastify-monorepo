import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type CatalogModuleDependencyAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  moduleId: string
  requiresModuleId: string
  UNIQUE?: string | null
}

export type CatalogModuleDependencyCreationAttributes = Optional<CatalogModuleDependencyAttributes, "id" | "publicId" | "recordCode" | "UNIQUE">

export class CatalogModuleDependencyEntity
  extends Model<CatalogModuleDependencyAttributes, CatalogModuleDependencyCreationAttributes>
  implements CatalogModuleDependencyAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare moduleId: string
  declare requiresModuleId: string
  declare UNIQUE: string | null
}

export function initCatalogModuleDependencyEntity(sequelize: Sequelize): typeof CatalogModuleDependencyEntity {
  CatalogModuleDependencyEntity.init(
    {
      id: {
        type: DataTypes.BIGINT,
        field: 'id',
        allowNull: true,
        primaryKey: true,
        autoIncrement: true,
      },
      publicId: {
        type: DataTypes.TEXT,
        field: 'public_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      recordCode: {
        type: DataTypes.TEXT,
        field: 'record_code',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('catalog_module_dependency')"),
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
      },
      UNIQUE: {
        type: DataTypes.TEXT,
        field: 'UNIQUE',
        allowNull: true,
      }
    },
    {
      sequelize,
      tableName: 'catalog_module_dependency',
      timestamps: false,
      underscored: true,
      freezeTableName: true
    }
  )
  return CatalogModuleDependencyEntity
}
