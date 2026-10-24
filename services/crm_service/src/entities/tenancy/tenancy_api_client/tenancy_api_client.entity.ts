import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type TenancyApiClientAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  apiClientId?: string
  name: string
  tenantApplicationId?: string | null
  applicationId?: string | null
  clientKey: string
  secretHash: string
  scopes?: string
  ipAllowlist?: string | null
  expiresAt?: Date | null
  lastUsedAt?: Date | null
  revokedAt?: Date | null
  createdAt?: Date
  createdBy?: string | null
}

export type TenancyApiClientCreationAttributes = Optional<TenancyApiClientAttributes, "id" | "publicId" | "recordCode" | "apiClientId" | "tenantApplicationId" | "applicationId" | "scopes" | "ipAllowlist" | "expiresAt" | "lastUsedAt" | "revokedAt" | "createdAt" | "createdBy">

export class TenancyApiClientEntity
  extends Model<TenancyApiClientAttributes, TenancyApiClientCreationAttributes>
  implements TenancyApiClientAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare apiClientId: string
  declare name: string
  declare tenantApplicationId: string | null
  declare applicationId: string | null
  declare clientKey: string
  declare secretHash: string
  declare scopes: string
  declare ipAllowlist: string | null
  declare expiresAt: Date | null
  declare lastUsedAt: Date | null
  declare revokedAt: Date | null
  declare createdAt: Date
  declare createdBy: string | null
}

export function initTenancyApiClientEntity(sequelize: Sequelize): typeof TenancyApiClientEntity {
  TenancyApiClientEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('tenancy_api_client')"),
      },
      apiClientId: {
        type: DataTypes.TEXT,
        field: 'api_client_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      name: {
        type: DataTypes.STRING(60),
        field: 'name',
        allowNull: false,
      },
      tenantApplicationId: {
        type: DataTypes.TEXT,
        field: 'tenant_application_id',
        allowNull: true,
        references: { model: 'tenancy_tenant_application', key: 'tenant_application_id' },
      },
      applicationId: {
        type: DataTypes.TEXT,
        field: 'application_id',
        allowNull: true,
        references: { model: 'catalog_application', key: 'application_id' },
      },
      clientKey: {
        type: DataTypes.STRING(40),
        field: 'client_key',
        allowNull: false,
      },
      secretHash: {
        type: DataTypes.TEXT,
        field: 'secret_hash',
        allowNull: false,
      },
      scopes: {
        type: DataTypes.TEXT,
        field: 'scopes',
        allowNull: false,
        defaultValue: "{access:read}",
      },
      ipAllowlist: {
        type: DataTypes.TEXT,
        field: 'ip_allowlist',
        allowNull: true,
      },
      expiresAt: {
        type: DataTypes.DATE,
        field: 'expires_at',
        allowNull: true,
      },
      lastUsedAt: {
        type: DataTypes.DATE,
        field: 'last_used_at',
        allowNull: true,
      },
      revokedAt: {
        type: DataTypes.DATE,
        field: 'revoked_at',
        allowNull: true,
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
      }
    },
    {
      sequelize,
      tableName: 'tenancy_api_client',
      timestamps: false,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['client_key'] }
      ]
    }
  )
  return TenancyApiClientEntity
}
