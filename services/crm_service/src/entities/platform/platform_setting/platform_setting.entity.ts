import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type PlatformSettingAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  settingKey: string
  value: unknown
  description?: string | null
  isSensitive?: string
  createdAt?: Date
  updatedAt?: Date
  updatedBy?: string | null
}

export type PlatformSettingCreationAttributes = Optional<PlatformSettingAttributes, "id" | "publicId" | "recordCode" | "description" | "isSensitive" | "createdAt" | "updatedAt" | "updatedBy">

export class PlatformSettingEntity
  extends Model<PlatformSettingAttributes, PlatformSettingCreationAttributes>
  implements PlatformSettingAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare settingKey: string
  declare value: unknown
  declare description: string | null
  declare isSensitive: string
  declare createdAt: Date
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initPlatformSettingEntity(sequelize: Sequelize): typeof PlatformSettingEntity {
  PlatformSettingEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('platform_setting')"),
      },
      settingKey: {
        type: DataTypes.TEXT,
        field: 'setting_key',
        allowNull: false,
        unique: true,
      },
      value: {
        type: DataTypes.JSONB,
        field: 'value',
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        field: 'description',
        allowNull: true,
      },
      isSensitive: {
        type: DataTypes.TEXT,
        field: 'is_sensitive',
        allowNull: false,
        defaultValue: false,
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
      tableName: 'platform_setting',
      timestamps: true,
      underscored: true,
      freezeTableName: true
    }
  )
  return PlatformSettingEntity
}
