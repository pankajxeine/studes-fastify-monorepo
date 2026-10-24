import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type PlatformFeatureFlagAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  flagKey: string
  description: string
  isEnabled?: string
  rolloutPercent?: number
  rules?: unknown | null
  createdAt?: Date
  updatedAt?: Date
  updatedBy?: string | null
}

export type PlatformFeatureFlagCreationAttributes = Optional<PlatformFeatureFlagAttributes, "id" | "publicId" | "recordCode" | "isEnabled" | "rolloutPercent" | "rules" | "createdAt" | "updatedAt" | "updatedBy">

export class PlatformFeatureFlagEntity
  extends Model<PlatformFeatureFlagAttributes, PlatformFeatureFlagCreationAttributes>
  implements PlatformFeatureFlagAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare flagKey: string
  declare description: string
  declare isEnabled: string
  declare rolloutPercent: number
  declare rules: unknown | null
  declare createdAt: Date
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initPlatformFeatureFlagEntity(sequelize: Sequelize): typeof PlatformFeatureFlagEntity {
  PlatformFeatureFlagEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('platform_feature_flag')"),
      },
      flagKey: {
        type: DataTypes.TEXT,
        field: 'flag_key',
        allowNull: false,
        unique: true,
      },
      description: {
        type: DataTypes.TEXT,
        field: 'description',
        allowNull: false,
      },
      isEnabled: {
        type: DataTypes.TEXT,
        field: 'is_enabled',
        allowNull: false,
        defaultValue: false,
      },
      rolloutPercent: {
        type: DataTypes.SMALLINT,
        field: 'rollout_percent',
        allowNull: false,
        defaultValue: 0,
      },
      rules: {
        type: DataTypes.JSONB,
        field: 'rules',
        allowNull: true,
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
      },
      updatedBy: {
        type: DataTypes.UUID,
        field: 'updated_by',
        allowNull: true,
      }
    },
    {
      sequelize,
      tableName: 'platform_feature_flag',
      timestamps: true,
      underscored: true,
      freezeTableName: true
    }
  )
  return PlatformFeatureFlagEntity
}
