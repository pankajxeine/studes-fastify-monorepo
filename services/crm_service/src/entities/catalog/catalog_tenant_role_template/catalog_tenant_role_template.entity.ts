import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type CatalogTenantRoleTemplateAttributes = {
  recordCode?: string
  tenantRoleTemplateId: string | null
  applicationId: string
  roleCode: string
  name: string
  description?: string | null
  permissionCodes?: string
  isTenantAdmin?: string
  sortOrder?: number
  createdAt?: Date
  updatedAt?: Date
}

export type CatalogTenantRoleTemplateCreationAttributes = Optional<CatalogTenantRoleTemplateAttributes, "recordCode" | "description" | "permissionCodes" | "isTenantAdmin" | "sortOrder" | "createdAt" | "updatedAt">

export class CatalogTenantRoleTemplateEntity
  extends Model<CatalogTenantRoleTemplateAttributes, CatalogTenantRoleTemplateCreationAttributes>
  implements CatalogTenantRoleTemplateAttributes
{
  declare recordCode: string
  declare tenantRoleTemplateId: string | null
  declare applicationId: string
  declare roleCode: string
  declare name: string
  declare description: string | null
  declare permissionCodes: string
  declare isTenantAdmin: string
  declare sortOrder: number
  declare createdAt: Date
  declare updatedAt: Date
}

export function initCatalogTenantRoleTemplateEntity(sequelize: Sequelize): typeof CatalogTenantRoleTemplateEntity {
  CatalogTenantRoleTemplateEntity.init(
    {
      recordCode: {
        type: DataTypes.TEXT,
        field: 'record_code',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table (\r\n        'catalog_tenant_role_template'\r\n    )"),
      },
      tenantRoleTemplateId: {
        type: DataTypes.TEXT,
        field: 'tenant_role_template_id',
        allowNull: true,
        primaryKey: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      applicationId: {
        type: DataTypes.TEXT,
        field: 'application_id',
        allowNull: false,
        references: { model: 'catalog_application', key: 'application_id' },
        onDelete: 'CASCADE',
      },
      roleCode: {
        type: DataTypes.TEXT,
        field: 'role_code',
        allowNull: false,
      },
      name: {
        type: DataTypes.TEXT,
        field: 'name',
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        field: 'description',
        allowNull: true,
      },
      permissionCodes: {
        type: DataTypes.TEXT,
        field: 'permission_codes',
        allowNull: false,
        defaultValue: "{}",
      },
      isTenantAdmin: {
        type: DataTypes.TEXT,
        field: 'is_tenant_admin',
        allowNull: false,
        defaultValue: false,
      },
      sortOrder: {
        type: DataTypes.SMALLINT,
        field: 'sort_order',
        allowNull: false,
        defaultValue: 0,
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
      }
    },
    {
      sequelize,
      tableName: 'catalog_tenant_role_template',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['application_id', 'role_code'] }
      ]
    }
  )
  return CatalogTenantRoleTemplateEntity
}
