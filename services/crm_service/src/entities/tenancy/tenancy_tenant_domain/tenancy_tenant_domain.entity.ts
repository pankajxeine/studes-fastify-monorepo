import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type TenancyTenantDomainAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  tenantDomainId?: string
  tenantApplicationId: string
  hostname: string
  kind?: string
  isPrimary?: string
  verificationToken?: string | null
  verifiedAt?: Date | null
  tlsStatus?: string
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type TenancyTenantDomainCreationAttributes = Optional<TenancyTenantDomainAttributes, "id" | "publicId" | "recordCode" | "tenantDomainId" | "kind" | "isPrimary" | "verificationToken" | "verifiedAt" | "tlsStatus" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class TenancyTenantDomainEntity
  extends Model<TenancyTenantDomainAttributes, TenancyTenantDomainCreationAttributes>
  implements TenancyTenantDomainAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare tenantDomainId: string
  declare tenantApplicationId: string
  declare hostname: string
  declare kind: string
  declare isPrimary: string
  declare verificationToken: string | null
  declare verifiedAt: Date | null
  declare tlsStatus: string
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initTenancyTenantDomainEntity(sequelize: Sequelize): typeof TenancyTenantDomainEntity {
  TenancyTenantDomainEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('tenancy_tenant_domain')"),
      },
      tenantDomainId: {
        type: DataTypes.TEXT,
        field: 'tenant_domain_id',
        allowNull: false,
        unique: true,
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
