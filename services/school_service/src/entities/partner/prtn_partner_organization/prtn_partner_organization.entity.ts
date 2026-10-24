import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type PrtnPartnerOrganizationAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  partnerOrganizationId?: string
  partnerTypeCode: string
  code: string
  name: string
  legalName?: string | null
  industry?: string | null
  websiteUrl?: string | null
  email?: string | null
  phone?: string | null
  addressLine1?: string | null
  addressLine2?: string | null
  city?: string | null
  stateRegion?: string | null
  postalCode?: string | null
  countryCode?: string | null
  taxRegistrationNo?: string | null
  relationshipManagerStaffId?: string | null
  logoFileId?: string | null
  partnerSinceOn?: Date | null
  isActive?: string
  notes?: string | null
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
  deletedAt?: Date | null
}

export type PrtnPartnerOrganizationCreationAttributes = Optional<PrtnPartnerOrganizationAttributes, "id" | "publicId" | "recordCode" | "partnerOrganizationId" | "legalName" | "industry" | "websiteUrl" | "email" | "phone" | "addressLine1" | "addressLine2" | "city" | "stateRegion" | "postalCode" | "countryCode" | "taxRegistrationNo" | "relationshipManagerStaffId" | "logoFileId" | "partnerSinceOn" | "isActive" | "notes" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy" | "deletedAt">

export class PrtnPartnerOrganizationEntity
  extends Model<PrtnPartnerOrganizationAttributes, PrtnPartnerOrganizationCreationAttributes>
  implements PrtnPartnerOrganizationAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare partnerOrganizationId: string
  declare partnerTypeCode: string
  declare code: string
  declare name: string
  declare legalName: string | null
  declare industry: string | null
  declare websiteUrl: string | null
  declare email: string | null
  declare phone: string | null
  declare addressLine1: string | null
  declare addressLine2: string | null
  declare city: string | null
  declare stateRegion: string | null
  declare postalCode: string | null
  declare countryCode: string | null
  declare taxRegistrationNo: string | null
  declare relationshipManagerStaffId: string | null
  declare logoFileId: string | null
  declare partnerSinceOn: Date | null
  declare isActive: string
  declare notes: string | null
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
  declare deletedAt: Date | null
}

export function initPrtnPartnerOrganizationEntity(sequelize: Sequelize): typeof PrtnPartnerOrganizationEntity {
  PrtnPartnerOrganizationEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('prtn_partner_organization')"),
      },
      partnerOrganizationId: {
        type: DataTypes.TEXT,
        field: 'partner_organization_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      partnerTypeCode: {
        type: DataTypes.TEXT,
        field: 'partner_type_code',
        allowNull: false,
        references: { model: 'prtn_partner_type', key: 'partner_type_code' },
        onUpdate: 'CASCADE',
      },
      code: {
        type: DataTypes.STRING(20),
        field: 'code',
        allowNull: false,
      },
      name: {
        type: DataTypes.TEXT,
        field: 'name',
        allowNull: false,
      },
      legalName: {
        type: DataTypes.TEXT,
        field: 'legal_name',
        allowNull: true,
      },
      industry: {
        type: DataTypes.TEXT,
        field: 'industry',
        allowNull: true,
      },
      websiteUrl: {
        type: DataTypes.TEXT,
        field: 'website_url',
        allowNull: true,
      },
      email: {
        type: DataTypes.TEXT,
        field: 'email',
        allowNull: true,
      },
      phone: {
        type: DataTypes.TEXT,
        field: 'phone',
        allowNull: true,
      },
      addressLine1: {
        type: DataTypes.TEXT,
        field: 'address_line1',
        allowNull: true,
      },
      addressLine2: {
        type: DataTypes.TEXT,
        field: 'address_line2',
        allowNull: true,
      },
      city: {
        type: DataTypes.TEXT,
        field: 'city',
        allowNull: true,
      },
      stateRegion: {
        type: DataTypes.TEXT,
        field: 'state_region',
        allowNull: true,
      },
      postalCode: {
        type: DataTypes.STRING(20),
        field: 'postal_code',
        allowNull: true,
      },
      countryCode: {
        type: DataTypes.CHAR(2),
        field: 'country_code',
        allowNull: true,
      },
      taxRegistrationNo: {
        type: DataTypes.STRING(40),
        field: 'tax_registration_no',
        allowNull: true,
      },
      relationshipManagerStaffId: {
        type: DataTypes.TEXT,
        field: 'relationship_manager_staff_id',
        allowNull: true,
        references: { model: 'hr_staff', key: 'staff_id' },
      },
      logoFileId: {
        type: DataTypes.TEXT,
        field: 'logo_file_id',
        allowNull: true,
        references: { model: 'docs_file', key: 'file_id' },
      },
      partnerSinceOn: {
        type: DataTypes.DATEONLY,
        field: 'partner_since_on',
        allowNull: true,
      },
      isActive: {
        type: DataTypes.TEXT,
        field: 'is_active',
        allowNull: false,
        defaultValue: true,
      },
      notes: {
        type: DataTypes.TEXT,
        field: 'notes',
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
      },
      deletedAt: {
        type: DataTypes.DATE,
        field: 'deleted_at',
        allowNull: true,
      }
    },
    {
      sequelize,
      tableName: 'prtn_partner_organization',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: true,
      deletedAt: 'deletedAt',
      indexes: [
      { unique: true, fields: ['code'] }
      ]
    }
  )
  return PrtnPartnerOrganizationEntity
}
