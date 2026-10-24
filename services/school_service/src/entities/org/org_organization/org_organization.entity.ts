import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type OrgOrganizationAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  organizationId?: string
  isSingleton?: string
  name: string
  shortName?: string | null
  legalName?: string | null
  registrationNo?: string | null
  taxId?: string | null
  email?: string | null
  phone?: string | null
  website?: string | null
  addressLine1?: string | null
  addressLine2?: string | null
  city?: string | null
  stateRegion?: string | null
  postalCode?: string | null
  countryCode: string
  currencyCode: string
  timezone: string
  locale?: string
  academicYearStartMonth?: number
  logoFileId?: string | null
  motto?: string | null
  foundedYear?: number | null
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type OrgOrganizationCreationAttributes = Optional<OrgOrganizationAttributes, "id" | "publicId" | "recordCode" | "organizationId" | "isSingleton" | "shortName" | "legalName" | "registrationNo" | "taxId" | "email" | "phone" | "website" | "addressLine1" | "addressLine2" | "city" | "stateRegion" | "postalCode" | "locale" | "academicYearStartMonth" | "logoFileId" | "motto" | "foundedYear" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class OrgOrganizationEntity
  extends Model<OrgOrganizationAttributes, OrgOrganizationCreationAttributes>
  implements OrgOrganizationAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare organizationId: string
  declare isSingleton: string
  declare name: string
  declare shortName: string | null
  declare legalName: string | null
  declare registrationNo: string | null
  declare taxId: string | null
  declare email: string | null
  declare phone: string | null
  declare website: string | null
  declare addressLine1: string | null
  declare addressLine2: string | null
  declare city: string | null
  declare stateRegion: string | null
  declare postalCode: string | null
  declare countryCode: string
  declare currencyCode: string
  declare timezone: string
  declare locale: string
  declare academicYearStartMonth: number
  declare logoFileId: string | null
  declare motto: string | null
  declare foundedYear: number | null
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initOrgOrganizationEntity(sequelize: Sequelize): typeof OrgOrganizationEntity {
  OrgOrganizationEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('org_organization')"),
      },
      organizationId: {
        type: DataTypes.TEXT,
        field: 'organization_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      isSingleton: {
        type: DataTypes.TEXT,
        field: 'is_singleton',
        allowNull: false,
        defaultValue: true,
      },
      name: {
        type: DataTypes.TEXT,
        field: 'name',
        allowNull: false,
      },
      shortName: {
        type: DataTypes.STRING(30),
        field: 'short_name',
        allowNull: true,
      },
      legalName: {
        type: DataTypes.TEXT,
        field: 'legal_name',
        allowNull: true,
      },
      registrationNo: {
        type: DataTypes.STRING(60),
        field: 'registration_no',
        allowNull: true,
      },
      taxId: {
        type: DataTypes.STRING(40),
        field: 'tax_id',
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
      website: {
        type: DataTypes.TEXT,
        field: 'website',
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
        allowNull: false,
      },
      currencyCode: {
        type: DataTypes.CHAR(3),
        field: 'currency_code',
        allowNull: false,
      },
      timezone: {
        type: DataTypes.TEXT,
        field: 'timezone',
        allowNull: false,
      },
      locale: {
        type: DataTypes.STRING(10),
        field: 'locale',
        allowNull: false,
        defaultValue: "en-US",
      },
      academicYearStartMonth: {
        type: DataTypes.SMALLINT,
        field: 'academic_year_start_month',
        allowNull: false,
        defaultValue: 8,
      },
      logoFileId: {
        type: DataTypes.UUID,
        field: 'logo_file_id',
        allowNull: true,
      },
      motto: {
        type: DataTypes.TEXT,
        field: 'motto',
        allowNull: true,
      },
      foundedYear: {
        type: DataTypes.SMALLINT,
        field: 'founded_year',
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
      }
    },
    {
      sequelize,
      tableName: 'org_organization',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['is_singleton'] }
      ]
    }
  )
  return OrgOrganizationEntity
}
