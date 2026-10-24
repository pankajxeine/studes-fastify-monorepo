import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type CatalogFeatureAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  featureId?: string
  moduleId: string
  featureCode: string
  name: string
  description?: string | null
  kind: string
  unit?: string | null
  defaultValue?: unknown | null
  resetPeriod?: string
  enforcement?: string
  overageAllowed?: string
  isActive?: string
  sortOrder?: number
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type CatalogFeatureCreationAttributes = Optional<CatalogFeatureAttributes, "id" | "publicId" | "recordCode" | "featureId" | "description" | "unit" | "defaultValue" | "resetPeriod" | "enforcement" | "overageAllowed" | "isActive" | "sortOrder" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class CatalogFeatureEntity
  extends Model<CatalogFeatureAttributes, CatalogFeatureCreationAttributes>
  implements CatalogFeatureAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare featureId: string
  declare moduleId: string
  declare featureCode: string
  declare name: string
  declare description: string | null
  declare kind: string
  declare unit: string | null
  declare defaultValue: unknown | null
  declare resetPeriod: string
  declare enforcement: string
  declare overageAllowed: string
  declare isActive: string
  declare sortOrder: number
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initCatalogFeatureEntity(sequelize: Sequelize): typeof CatalogFeatureEntity {
  CatalogFeatureEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('catalog_feature')"),
      },
      featureId: {
        type: DataTypes.TEXT,
        field: 'feature_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      moduleId: {
        type: DataTypes.TEXT,
        field: 'module_id',
        allowNull: false,
        references: { model: 'catalog_module', key: 'module_id' },
      },
      featureCode: {
        type: DataTypes.TEXT,
        field: 'feature_code',
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
      kind: {
        type: DataTypes.TEXT,
        field: 'kind',
        allowNull: false,
      },
      unit: {
        type: DataTypes.STRING(20),
        field: 'unit',
        allowNull: true,
      },
      defaultValue: {
        type: DataTypes.JSONB,
        field: 'default_value',
        allowNull: true,
      },
      resetPeriod: {
        type: DataTypes.TEXT,
        field: 'reset_period',
        allowNull: false,
        defaultValue: "never",
      },
      enforcement: {
        type: DataTypes.TEXT,
        field: 'enforcement',
        allowNull: false,
        defaultValue: "hard",
      },
      overageAllowed: {
        type: DataTypes.TEXT,
        field: 'overage_allowed',
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
      tableName: 'catalog_feature',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['module_id', 'feature_code'] },
      { unique: true, fields: ['module_id', 'feature_id'] }
      ]
    }
  )
  return CatalogFeatureEntity
}
