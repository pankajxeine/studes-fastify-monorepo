import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type CatalogModuleAttributes = {
  recordCode?: string
  moduleId: string | null
  applicationId: string
  moduleCode: string
  name: string
  description?: string | null
  category?: string | null
  isCore?: string
  isActive?: string
  sortOrder?: number
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type CatalogModuleCreationAttributes = Optional<CatalogModuleAttributes, "recordCode" | "description" | "category" | "isCore" | "isActive" | "sortOrder" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class CatalogModuleEntity
  extends Model<CatalogModuleAttributes, CatalogModuleCreationAttributes>
  implements CatalogModuleAttributes
{
  declare recordCode: string
  declare moduleId: string | null
  declare applicationId: string
  declare moduleCode: string
  declare name: string
  declare description: string | null
  declare category: string | null
  declare isCore: string
  declare isActive: string
  declare sortOrder: number
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initCatalogModuleEntity(sequelize: Sequelize): typeof CatalogModuleEntity {
  CatalogModuleEntity.init(
    {
      recordCode: {
        type: DataTypes.TEXT,
        field: 'record_code',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('catalog_module')"),
      },
      moduleId: {
        type: DataTypes.TEXT,
        field: 'module_id',
        allowNull: true,
        primaryKey: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      applicationId: {
        type: DataTypes.TEXT,
        field: 'application_id',
        allowNull: false,
        references: { model: 'catalog_application', key: 'application_id' },
      },
      moduleCode: {
        type: DataTypes.TEXT,
        field: 'module_code',
        allowNull: false,
      },
      name: {
        type: DataTypes.TEXT,
        field: 'name',
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        field: 'description',
        allowNull: true,
      },
      category: {
        type: DataTypes.STRING(30),
        field: 'category',
        allowNull: true,
      },
      isCore: {
        type: DataTypes.TEXT,
        field: 'is_core',
        allowNull: false,
        defaultValue: false,
      },
      isActive: {
        type: DataTypes.TEXT,
        field: 'is_active',
        allowNull: false,
        defaultValue: true,
      },
      sortOrder: {
        type: DataTypes.SMALLINT,
        field: 'sort_order',
        allowNull: false,
        defaultValue: 0,
      },
      createdAt: {
        type: DataTypes.DATE,
        field: 'created_at',
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      createdBy: {
        type: DataTypes.UUID,
        field: 'created_by',
        allowNull: true,
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: 'updated_at',
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      updatedBy: {
        type: DataTypes.UUID,
        field: 'updated_by',
        allowNull: true,
      }
    },
    {
      sequelize,
      tableName: 'catalog_module',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['application_id', 'module_code'] }
      ]
    }
  )
  return CatalogModuleEntity
}
