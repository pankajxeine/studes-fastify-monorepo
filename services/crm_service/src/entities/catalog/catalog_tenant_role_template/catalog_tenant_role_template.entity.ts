import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type CatalogTenantRoleTemplateAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  applicationId: string
  roleCode: string
  name: string
  description?: string | null
  permissionCodes?: string
  isTenantAdmin?: string
  sortOrder?: number
  createdAt?: Date
  updatedAt?: Date
  UNIQUE?: string | null
}

export type CatalogTenantRoleTemplateCreationAttributes = Optional<CatalogTenantRoleTemplateAttributes, "id" | "publicId" | "recordCode" | "description" | "permissionCodes" | "isTenantAdmin" | "sortOrder" | "createdAt" | "updatedAt" | "UNIQUE">

export class CatalogTenantRoleTemplateEntity
  extends Model<CatalogTenantRoleTemplateAttributes, CatalogTenantRoleTemplateCreationAttributes>
  implements CatalogTenantRoleTemplateAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare applicationId: string
  declare roleCode: string
  declare name: string
  declare description: string | null
  declare permissionCodes: string
  declare isTenantAdmin: string
  declare sortOrder: number
  declare createdAt: Date
  declare updatedAt: Date
  declare UNIQUE: string | null
}

export function initCatalogTenantRoleTemplateEntity(sequelize: Sequelize): typeof CatalogTenantRoleTemplateEntity {
  CatalogTenantRoleTemplateEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('catalog_tenant_role_template')"),
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
      },
      UNIQUE: {
        type: DataTypes.TEXT,
        field: 'UNIQUE',
        allowNull: true,
      }
    },
    {
      sequelize,
      tableName: 'catalog_tenant_role_template',
      timestamps: true,
      underscored: true,
      freezeTableName: true
    }
  )
  return CatalogTenantRoleTemplateEntity
}
