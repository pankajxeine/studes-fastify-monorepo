import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type PlatformRegionAttributes = {
  recordCode?: string
  regionId: string | null
  regionCode: string
  name: string
  cloudProvider: string
  cloudRegion: string
  allowedResidency: string
  isActive?: string
  createdAt?: Date
  updatedAt?: Date
}

export type PlatformRegionCreationAttributes = Optional<PlatformRegionAttributes, "recordCode" | "isActive" | "createdAt" | "updatedAt">

export class PlatformRegionEntity
  extends Model<PlatformRegionAttributes, PlatformRegionCreationAttributes>
  implements PlatformRegionAttributes
{
  declare recordCode: string
  declare regionId: string | null
  declare regionCode: string
  declare name: string
  declare cloudProvider: string
  declare cloudRegion: string
  declare allowedResidency: string
  declare isActive: string
  declare createdAt: Date
  declare updatedAt: Date
}

export function initPlatformRegionEntity(sequelize: Sequelize): typeof PlatformRegionEntity {
  PlatformRegionEntity.init(
    {
      recordCode: {
        type: DataTypes.TEXT,
        field: 'record_code',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('platform_region')"),
      },
      regionId: {
        type: DataTypes.TEXT,
        field: 'region_id',
        allowNull: true,
        primaryKey: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      regionCode: {
        type: DataTypes.TEXT,
        field: 'region_code',
        allowNull: false,
        unique: true,
      },
      name: {
        type: DataTypes.TEXT,
        field: 'name',
        allowNull: false,
      },
      cloudProvider: {
        type: DataTypes.STRING(20),
        field: 'cloud_provider',
        allowNull: false,
      },
      cloudRegion: {
        type: DataTypes.STRING(40),
        field: 'cloud_region',
        allowNull: false,
      },
      allowedResidency: {
        type: DataTypes.CHAR(2),
        field: 'allowed_residency',
        allowNull: false,
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
      updatedAt: {
        type: DataTypes.DATE,
        field: 'updated_at',
        allowNull: false,
        defaultValue: DataTypes.NOW,
      }
    },
    {
      sequelize,
      tableName: 'platform_region',
      timestamps: true,
      underscored: true,
      freezeTableName: true
    }
  )
  return PlatformRegionEntity
}
