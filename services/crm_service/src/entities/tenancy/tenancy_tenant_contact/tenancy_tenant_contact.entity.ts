import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type TenancyTenantContactAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  tenantId: string
  contactId: string
  contactRole: string
  createdAt?: Date
  createdBy?: string | null
  UNIQUE?: string | null
}

export type TenancyTenantContactCreationAttributes = Optional<TenancyTenantContactAttributes, "id" | "publicId" | "recordCode" | "createdAt" | "createdBy" | "UNIQUE">

export class TenancyTenantContactEntity
  extends Model<TenancyTenantContactAttributes, TenancyTenantContactCreationAttributes>
  implements TenancyTenantContactAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare tenantId: string
  declare contactId: string
  declare contactRole: string
  declare createdAt: Date
  declare createdBy: string | null
  declare UNIQUE: string | null
}

export function initTenancyTenantContactEntity(sequelize: Sequelize): typeof TenancyTenantContactEntity {
  TenancyTenantContactEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('tenancy_tenant_contact')"),
      },
      tenantId: {
        type: DataTypes.TEXT,
        field: 'tenant_id',
        allowNull: false,
        references: { model: 'tenancy_tenant', key: 'tenant_id' },
        onDelete: 'CASCADE',
      },
      contactId: {
        type: DataTypes.TEXT,
        field: 'contact_id',
        allowNull: false,
        references: { model: 'crm_contact', key: 'contact_id' },
      },
      contactRole: {
        type: DataTypes.STRING(12),
        field: 'contact_role',
        allowNull: false,
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
      UNIQUE: {
        type: DataTypes.TEXT,
        field: 'UNIQUE',
        allowNull: true,
      }
    },
    {
      sequelize,
      tableName: 'tenancy_tenant_contact',
      timestamps: false,
      underscored: true,
      freezeTableName: true
    }
  )
  return TenancyTenantContactEntity
}
