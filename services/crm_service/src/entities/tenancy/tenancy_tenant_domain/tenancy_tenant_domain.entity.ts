import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type TenancyTenantDomainAttributes = {
  recordCode?: string
  tenantDomainId: string | null
  tenantApplicationId: string
  hostname: string
  applicationType?: string
  kind?: string
  isPrimary?: string
  verificationToken?: string | null
  verifiedAt?: Date | null
  tlsStatus?: string
  name?: string | null
  title?: string | null
  description?: string | null
  apiEndpoint?: string | null
  webEndpoint?: string | null
  logoUrl?: string | null
  faviconUrl?: string | null
  images?: unknown
  config?: unknown
  isActive?: string
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type TenancyTenantDomainCreationAttributes = Optional<TenancyTenantDomainAttributes, "recordCode" | "applicationType" | "kind" | "isPrimary" | "verificationToken" | "verifiedAt" | "tlsStatus" | "name" | "title" | "description" | "apiEndpoint" | "webEndpoint" | "logoUrl" | "faviconUrl" | "images" | "config" | "isActive" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class TenancyTenantDomainEntity
  extends Model<TenancyTenantDomainAttributes, TenancyTenantDomainCreationAttributes>
  implements TenancyTenantDomainAttributes
{
  declare recordCode: string
  declare tenantDomainId: string | null
  declare tenantApplicationId: string
  declare hostname: string
  declare applicationType: string
  declare kind: string
  declare isPrimary: string
  declare verificationToken: string | null
  declare verifiedAt: Date | null
  declare tlsStatus: string
  declare name: string | null
  declare title: string | null
  declare description: string | null
  declare apiEndpoint: string | null
  declare webEndpoint: string | null
  declare logoUrl: string | null
  declare faviconUrl: string | null
  declare images: unknown
  declare config: unknown
  declare isActive: string
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initTenancyTenantDomainEntity(sequelize: Sequelize): typeof TenancyTenantDomainEntity {
  TenancyTenantDomainEntity.init(
    {
      recordCode: {
        type: DataTypes.TEXT,
        field: 'record_code',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('tenancy_tenant_domain')"),
      },
      tenantDomainId: {
        type: DataTypes.TEXT,
        field: 'tenant_domain_id',
        allowNull: true,
        primaryKey: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      tenantApplicationId: {
        type: DataTypes.TEXT,
        field: 'tenant_application_id',
        allowNull: false,
        references: { model: 'tenancy_tenant_application', key: 'tenant_application_id' },
        onDelete: 'CASCADE',
      },
      hostname: {
        type: DataTypes.TEXT,
        field: 'hostname',
        allowNull: false,
      },
      applicationType: {
        type: DataTypes.STRING(12),
        field: 'application_type',
        allowNull: false,
        defaultValue: "tenant",
      },
      kind: {
        type: DataTypes.STRING(10),
        field: 'kind',
        allowNull: false,
        defaultValue: "subdomain",
      },
      isPrimary: {
        type: DataTypes.TEXT,
        field: 'is_primary',
        allowNull: false,
        defaultValue: false,
      },
      verificationToken: {
        type: DataTypes.TEXT,
        field: 'verification_token',
        allowNull: true,
      },
      verifiedAt: {
        type: DataTypes.DATE,
        field: 'verified_at',
        allowNull: true,
      },
      tlsStatus: {
        type: DataTypes.STRING(10),
        field: 'tls_status',
        allowNull: false,
        defaultValue: "pending",
      },
      name: {
        type: DataTypes.TEXT,
        field: 'name',
        allowNull: true,
      },
      title: {
        type: DataTypes.TEXT,
        field: 'title',
        allowNull: true,
      },
      description: {
        type: DataTypes.TEXT,
        field: 'description',
        allowNull: true,
      },
      apiEndpoint: {
        type: DataTypes.TEXT,
        field: 'api_endpoint',
        allowNull: true,
      },
      webEndpoint: {
        type: DataTypes.TEXT,
        field: 'web_endpoint',
        allowNull: true,
      },
      logoUrl: {
        type: DataTypes.TEXT,
        field: 'logo_url',
        allowNull: true,
      },
      faviconUrl: {
        type: DataTypes.TEXT,
        field: 'favicon_url',
        allowNull: true,
      },
      images: {
        type: DataTypes.JSONB,
        field: 'images',
        allowNull: false,
        defaultValue: "[]",
      },
      config: {
        type: DataTypes.JSONB,
        field: 'config',
        allowNull: false,
        defaultValue: "{}",
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
      tableName: 'tenancy_tenant_domain',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['hostname'] }
      ]
    }
  )
  return TenancyTenantDomainEntity
}
