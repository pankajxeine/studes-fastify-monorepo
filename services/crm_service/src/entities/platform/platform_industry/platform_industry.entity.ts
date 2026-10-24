import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type PlatformIndustryAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  industryCode: string
  name: string
  parentIndustryCode?: string | null
  requiresKyc?: string
  isActive?: string
  sortOrder?: number
  createdAt?: Date
  updatedAt?: Date
}

export type PlatformIndustryCreationAttributes = Optional<PlatformIndustryAttributes, "id" | "publicId" | "recordCode" | "parentIndustryCode" | "requiresKyc" | "isActive" | "sortOrder" | "createdAt" | "updatedAt">

export class PlatformIndustryEntity
  extends Model<PlatformIndustryAttributes, PlatformIndustryCreationAttributes>
  implements PlatformIndustryAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('platform_industry')"),
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
