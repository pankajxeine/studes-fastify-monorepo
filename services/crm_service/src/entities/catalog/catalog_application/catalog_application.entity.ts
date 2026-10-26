import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type CatalogApplicationAttributes = {
  recordCode?: string
  applicationId: string | null
  applicationCode: string
  name: string
  description?: string | null
  industryCode: string
  baseDomain: string
  supportsCustomDomain?: string
  tenancyModel?: string
  snapshotTtlSec?: number
  graceDaysDefault?: number
  isActive?: string
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type CatalogApplicationCreationAttributes = Optional<CatalogApplicationAttributes, "recordCode" | "description" | "supportsCustomDomain" | "tenancyModel" | "snapshotTtlSec" | "graceDaysDefault" | "isActive" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class CatalogApplicationEntity
  extends Model<CatalogApplicationAttributes, CatalogApplicationCreationAttributes>
  implements CatalogApplicationAttributes
{
  declare recordCode: string
  declare applicationId: string | null
  declare applicationCode: string
  declare name: string
  declare description: string | null
  declare industryCode: string
  declare baseDomain: string
  declare supportsCustomDomain: string
  declare tenancyModel: string
  declare snapshotTtlSec: number
  declare graceDaysDefault: number
  declare isActive: string
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initCatalogApplicationEntity(sequelize: Sequelize): typeof CatalogApplicationEntity {
  CatalogApplicationEntity.init(
    {
      recordCode: {
        type: DataTypes.TEXT,
        field: 'record_code',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('catalog_application')"),
      },
      applicationId: {
        type: DataTypes.TEXT,
        field: 'application_id',
        allowNull: true,
        primaryKey: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      applicationCode: {
        type: DataTypes.TEXT,
        field: 'application_code',
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
      industryCode: {
        type: DataTypes.TEXT,
        field: 'industry_code',
        allowNull: false,
        references: { model: 'platform_industry', key: 'industry_code' },
      },
      baseDomain: {
        type: DataTypes.TEXT,
        field: 'base_domain',
        allowNull: false,
      },
      supportsCustomDomain: {
        type: DataTypes.TEXT,
        field: 'supports_custom_domain',
        allowNull: false,
        defaultValue: true,
      },
      tenancyModel: {
        type: DataTypes.STRING(12),
        field: 'tenancy_model',
        allowNull: false,
        defaultValue: "pooled",
      },
      snapshotTtlSec: {
        type: DataTypes.INTEGER,
        field: 'snapshot_ttl_sec',
        allowNull: false,
        defaultValue: 300,
      },
      graceDaysDefault: {
        type: DataTypes.SMALLINT,
        field: 'grace_days_default',
        allowNull: false,
        defaultValue: 7,
      },
      isActive: {
        type: DataTypes.TEXT,
        field: 'is_active',
        allowNull: false,
        defaultValue: true,
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
      tableName: 'catalog_application',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['application_code'] }
      ]
    }
  )
  return CatalogApplicationEntity
}
