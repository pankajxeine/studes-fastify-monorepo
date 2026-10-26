import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type PlatformFeatureFlagAttributes = {
  recordCode?: string
  featureFlagId: string | null
  flagKey: string
  description: string
  isEnabled?: string
  rolloutPercent?: number
  rules?: unknown | null
  createdAt?: Date
  updatedAt?: Date
  updatedBy?: string | null
}

export type PlatformFeatureFlagCreationAttributes = Optional<PlatformFeatureFlagAttributes, "recordCode" | "isEnabled" | "rolloutPercent" | "rules" | "createdAt" | "updatedAt" | "updatedBy">

export class PlatformFeatureFlagEntity
  extends Model<PlatformFeatureFlagAttributes, PlatformFeatureFlagCreationAttributes>
  implements PlatformFeatureFlagAttributes
{
  declare recordCode: string
  declare featureFlagId: string | null
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
      recordCode: {
        type: DataTypes.TEXT,
        field: 'record_code',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('platform_feature_flag')"),
      },
      featureFlagId: {
        type: DataTypes.TEXT,
        field: 'feature_flag_id',
        allowNull: true,
        primaryKey: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
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
