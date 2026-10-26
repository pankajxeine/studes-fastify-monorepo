import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type PlatformIndustryAttributes = {
  recordCode?: string
  industryId: string | null
  industryCode: string
  name: string
  parentIndustryCode?: string | null
  requiresKyc?: string
  isActive?: string
  sortOrder?: number
  createdAt?: Date
  updatedAt?: Date
}

export type PlatformIndustryCreationAttributes = Optional<PlatformIndustryAttributes, "recordCode" | "parentIndustryCode" | "requiresKyc" | "isActive" | "sortOrder" | "createdAt" | "updatedAt">

export class PlatformIndustryEntity
  extends Model<PlatformIndustryAttributes, PlatformIndustryCreationAttributes>
  implements PlatformIndustryAttributes
{
  declare recordCode: string
  declare industryId: string | null
  declare industryCode: string
  declare name: string
  declare parentIndustryCode: string | null
  declare requiresKyc: string
  declare isActive: string
  declare sortOrder: number
  declare createdAt: Date
  declare updatedAt: Date
}

export function initPlatformIndustryEntity(sequelize: Sequelize): typeof PlatformIndustryEntity {
  PlatformIndustryEntity.init(
    {
      recordCode: {
        type: DataTypes.TEXT,
        field: 'record_code',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('platform_industry')"),
      },
      industryId: {
        type: DataTypes.TEXT,
        field: 'industry_id',
        allowNull: true,
        primaryKey: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      industryCode: {
        type: DataTypes.TEXT,
        field: 'industry_code',
        allowNull: false,
        unique: true,
      },
      name: {
        type: DataTypes.TEXT,
        field: 'name',
        allowNull: false,
      },
      parentIndustryCode: {
        type: DataTypes.TEXT,
        field: 'parent_industry_code',
        allowNull: true,
        references: { model: 'platform_industry', key: 'industry_code' },
      },
      requiresKyc: {
        type: DataTypes.TEXT,
        field: 'requires_kyc',
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
      updatedAt: {
        type: DataTypes.DATE,
        field: 'updated_at',
        allowNull: false,
        defaultValue: DataTypes.NOW,
      }
    },
    {
      sequelize,
      tableName: 'platform_industry',
      timestamps: true,
      underscored: true,
      freezeTableName: true
    }
  )
  return PlatformIndustryEntity
}
