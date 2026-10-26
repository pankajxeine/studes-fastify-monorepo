import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type PlatformEnvironmentAttributes = {
  recordCode?: string
  environmentId: string | null
  environmentCode: string
  regionCode: string
  kind?: string
  tenancyModel?: string
  endpointUrl?: string | null
  maxTenants?: number | null
  status?: string
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type PlatformEnvironmentCreationAttributes = Optional<PlatformEnvironmentAttributes, "recordCode" | "kind" | "tenancyModel" | "endpointUrl" | "maxTenants" | "status" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class PlatformEnvironmentEntity
  extends Model<PlatformEnvironmentAttributes, PlatformEnvironmentCreationAttributes>
  implements PlatformEnvironmentAttributes
{
  declare recordCode: string
  declare environmentId: string | null
  declare environmentCode: string
  declare regionCode: string
  declare kind: string
  declare tenancyModel: string
  declare endpointUrl: string | null
  declare maxTenants: number | null
  declare status: string
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initPlatformEnvironmentEntity(sequelize: Sequelize): typeof PlatformEnvironmentEntity {
  PlatformEnvironmentEntity.init(
    {
      recordCode: {
        type: DataTypes.TEXT,
        field: 'record_code',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('platform_environment')"),
      },
      environmentId: {
        type: DataTypes.TEXT,
        field: 'environment_id',
        allowNull: true,
        primaryKey: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      environmentCode: {
        type: DataTypes.TEXT,
        field: 'environment_code',
        allowNull: false,
      },
      regionCode: {
        type: DataTypes.TEXT,
        field: 'region_code',
        allowNull: false,
        references: { model: 'platform_region', key: 'region_code' },
      },
      kind: {
        type: DataTypes.STRING(12),
        field: 'kind',
        allowNull: false,
        defaultValue: "production",
      },
      tenancyModel: {
        type: DataTypes.STRING(12),
        field: 'tenancy_model',
        allowNull: false,
        defaultValue: "pooled",
      },
      endpointUrl: {
        type: DataTypes.TEXT,
        field: 'endpoint_url',
        allowNull: true,
      },
      maxTenants: {
        type: DataTypes.INTEGER,
        field: 'max_tenants',
        allowNull: true,
      },
      status: {
        type: DataTypes.STRING(10),
        field: 'status',
        allowNull: false,
        defaultValue: "active",
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
      tableName: 'platform_environment',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['environment_code'] }
      ]
    }
  )
  return PlatformEnvironmentEntity
}
