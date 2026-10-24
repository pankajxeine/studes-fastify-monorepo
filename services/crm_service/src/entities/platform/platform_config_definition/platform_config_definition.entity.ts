import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type PlatformConfigDefinitionAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  configKey: string
  applicationId?: string | null
  valueType: string
  jsonSchema?: unknown | null
  defaultValue?: unknown | null
  isTenantOverridable?: string
  isSecret?: string
  description: string
  isActive?: string
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type PlatformConfigDefinitionCreationAttributes = Optional<PlatformConfigDefinitionAttributes, "id" | "publicId" | "recordCode" | "applicationId" | "jsonSchema" | "defaultValue" | "isTenantOverridable" | "isSecret" | "isActive" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class PlatformConfigDefinitionEntity
  extends Model<PlatformConfigDefinitionAttributes, PlatformConfigDefinitionCreationAttributes>
  implements PlatformConfigDefinitionAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare configKey: string
  declare applicationId: string | null
  declare valueType: string
  declare jsonSchema: unknown | null
  declare defaultValue: unknown | null
  declare isTenantOverridable: string
  declare isSecret: string
  declare description: string
  declare isActive: string
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initPlatformConfigDefinitionEntity(sequelize: Sequelize): typeof PlatformConfigDefinitionEntity {
  PlatformConfigDefinitionEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('platform_config_definition')"),
      },
      configKey: {
        type: DataTypes.TEXT,
        field: 'config_key',
        allowNull: false,
        unique: true,
      },
      applicationId: {
        type: DataTypes.UUID,
        field: 'application_id',
        allowNull: true,
      },
      valueType: {
        type: DataTypes.STRING(10),
        field: 'value_type',
        allowNull: false,
      },
      jsonSchema: {
        type: DataTypes.JSONB,
        field: 'json_schema',
        allowNull: true,
      },
      defaultValue: {
        type: DataTypes.JSONB,
        field: 'default_value',
        allowNull: true,
      },
      isTenantOverridable: {
        type: DataTypes.TEXT,
        field: 'is_tenant_overridable',
        allowNull: false,
        defaultValue: true,
      },
      isSecret: {
        type: DataTypes.TEXT,
        field: 'is_secret',
        allowNull: false,
        defaultValue: false,
      },
      description: {
        type: DataTypes.TEXT,
        field: 'description',
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
      tableName: 'platform_config_definition',
      timestamps: true,
      underscored: true,
      freezeTableName: true
    }
  )
  return PlatformConfigDefinitionEntity
}
