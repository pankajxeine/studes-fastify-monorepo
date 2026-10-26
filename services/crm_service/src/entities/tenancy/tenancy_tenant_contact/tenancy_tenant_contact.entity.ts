import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type TenancyTenantContactAttributes = {
  recordCode?: string
  tenantContactId: string | null
  tenantId: string
  contactId: string
  contactRole: string
  createdAt?: Date
  createdBy?: string | null
}

export type TenancyTenantContactCreationAttributes = Optional<TenancyTenantContactAttributes, "recordCode" | "createdAt" | "createdBy">

export class TenancyTenantContactEntity
  extends Model<TenancyTenantContactAttributes, TenancyTenantContactCreationAttributes>
  implements TenancyTenantContactAttributes
{
  declare recordCode: string
  declare tenantContactId: string | null
  declare tenantId: string
  declare contactId: string
  declare contactRole: string
  declare createdAt: Date
  declare createdBy: string | null
}

export function initTenancyTenantContactEntity(sequelize: Sequelize): typeof TenancyTenantContactEntity {
  TenancyTenantContactEntity.init(
    {
      recordCode: {
        type: DataTypes.TEXT,
        field: 'record_code',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('tenancy_tenant_contact')"),
      },
      tenantContactId: {
        type: DataTypes.TEXT,
        field: 'tenant_contact_id',
        allowNull: true,
        primaryKey: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
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
      }
    },
    {
      sequelize,
      tableName: 'tenancy_tenant_contact',
      timestamps: false,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['tenant_id', 'contact_id', 'contact_role'] }
      ]
    }
  )
  return TenancyTenantContactEntity
}
