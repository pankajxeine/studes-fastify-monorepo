import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type OrgVendorAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  vendorId?: string
  code: string
  name: string
  legalName?: string | null
  serviceCategory: string
  taxId?: string | null
  contactName?: string | null
  email?: string | null
  phone?: string | null
  website?: string | null
  addressLine1?: string | null
  addressLine2?: string | null
  city?: string | null
  stateRegion?: string | null
  postalCode?: string | null
  countryCode?: string | null
  paymentTermsDays?: number
  bankAccountName?: string | null
  bankAccountNo?: string | null
  bankRoutingCode?: string | null
  rating?: number | null
  isActive?: string
  notes?: string | null
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
  deletedAt?: Date | null
}

export type OrgVendorCreationAttributes = Optional<OrgVendorAttributes, "id" | "publicId" | "recordCode" | "vendorId" | "legalName" | "taxId" | "contactName" | "email" | "phone" | "website" | "addressLine1" | "addressLine2" | "city" | "stateRegion" | "postalCode" | "countryCode" | "paymentTermsDays" | "bankAccountName" | "bankAccountNo" | "bankRoutingCode" | "rating" | "isActive" | "notes" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy" | "deletedAt">

export class OrgVendorEntity
  extends Model<OrgVendorAttributes, OrgVendorCreationAttributes>
  implements OrgVendorAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare vendorId: string
  declare code: string
  declare name: string
  declare legalName: string | null
  declare serviceCategory: string
  declare taxId: string | null
  declare contactName: string | null
  declare email: string | null
  declare phone: string | null
  declare website: string | null
  declare addressLine1: string | null
  declare addressLine2: string | null
  declare city: string | null
  declare stateRegion: string | null
  declare postalCode: string | null
  declare countryCode: string | null
  declare paymentTermsDays: number
  declare bankAccountName: string | null
  declare bankAccountNo: string | null
  declare bankRoutingCode: string | null
  declare rating: number | null
  declare isActive: string
  declare notes: string | null
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
  declare deletedAt: Date | null
}

export function initOrgVendorEntity(sequelize: Sequelize): typeof OrgVendorEntity {
  OrgVendorEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('org_vendor')"),
      },
      vendorId: {
        type: DataTypes.TEXT,
        field: 'vendor_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
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
      serviceCategory: {
        type: DataTypes.STRING(30),
        field: 'service_category',
        allowNull: false,
      },
      taxId: {
        type: DataTypes.STRING(40),
        field: 'tax_id',
        allowNull: true,
      },
      contactName: {
        type: DataTypes.TEXT,
        field: 'contact_name',
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
        allowNull: true,
      },
      paymentTermsDays: {
        type: DataTypes.SMALLINT,
        field: 'payment_terms_days',
        allowNull: false,
        defaultValue: 30,
      },
      bankAccountName: {
        type: DataTypes.TEXT,
        field: 'bank_account_name',
        allowNull: true,
      },
      bankAccountNo: {
        type: DataTypes.STRING(40),
        field: 'bank_account_no',
        allowNull: true,
      },
      bankRoutingCode: {
        type: DataTypes.STRING(20),
        field: 'bank_routing_code',
        allowNull: true,
      },
      rating: {
        type: DataTypes.SMALLINT,
        field: 'rating',
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
      tableName: 'org_vendor',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: true,
      deletedAt: 'deletedAt'
    }
  )
  return OrgVendorEntity
}
