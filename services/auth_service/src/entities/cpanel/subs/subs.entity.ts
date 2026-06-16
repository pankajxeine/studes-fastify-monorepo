import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type SubsAttributes = {
  id?: number | null
  customerId?: number | null
  subdomain?: string | null
  protocol?: string | null
  shortname?: string | null
  databaseName?: string | null
  name?: string | null
  logo?: string | null
  cloudPrintLogo?: string | null
  logoZpl?: string | null
  siteLogo?: string | null
  faviconIcon?: string | null
  mobileLogo?: string | null
  industryId?: number | null
  packageId?: number | null
  environmentId?: number | null
  industryEnvironmentId?: number | null
  authKey?: string | null
  decimalValue?: number | null
  s3Folder?: string | null
  status?: string
  siteCreated?: string
  allowPackageUpgrade?: string
  permissionBasedOn?: string | null
  sourceOfCreation?: string | null
  defaultRole?: number | null
  isRoleSynced?: string
  languageId?: number | null
  currencyId?: number | null
  bundleRetailPrice?: number | null
  billingFrequency?: string
  signupDate?: Date | null
  lastAccess?: Date | null
  createdAt?: Date | null
  updatedAt?: Date | null
  deletedAt?: Date | null
}

export type SubsCreationAttributes = Optional<SubsAttributes, "id" | "customerId" | "subdomain" | "protocol" | "shortname" | "databaseName" | "name" | "logo" | "cloudPrintLogo" | "logoZpl" | "siteLogo" | "faviconIcon" | "mobileLogo" | "industryId" | "packageId" | "environmentId" | "industryEnvironmentId" | "authKey" | "decimalValue" | "s3Folder" | "status" | "siteCreated" | "allowPackageUpgrade" | "permissionBasedOn" | "sourceOfCreation" | "defaultRole" | "isRoleSynced" | "languageId" | "currencyId" | "bundleRetailPrice" | "billingFrequency" | "signupDate" | "lastAccess" | "createdAt" | "updatedAt" | "deletedAt">

export class SubsEntity
  extends Model<SubsAttributes, SubsCreationAttributes>
  implements SubsAttributes
{
  declare id: number | null
  declare customerId: number | null
  declare subdomain: string | null
  declare protocol: string | null
  declare shortname: string | null
  declare databaseName: string | null
  declare name: string | null
  declare logo: string | null
  declare cloudPrintLogo: string | null
  declare logoZpl: string | null
  declare siteLogo: string | null
  declare faviconIcon: string | null
  declare mobileLogo: string | null
  declare industryId: number | null
  declare packageId: number | null
  declare environmentId: number | null
  declare industryEnvironmentId: number | null
  declare authKey: string | null
  declare decimalValue: number | null
  declare s3Folder: string | null
  declare status: string
  declare siteCreated: string
  declare allowPackageUpgrade: string
  declare permissionBasedOn: string | null
  declare sourceOfCreation: string | null
  declare defaultRole: number | null
  declare isRoleSynced: string
  declare languageId: number | null
  declare currencyId: number | null
  declare bundleRetailPrice: number | null
  declare billingFrequency: string
  declare signupDate: Date | null
  declare lastAccess: Date | null
  declare createdAt: Date | null
  declare updatedAt: Date | null
  declare deletedAt: Date | null
}

export function initSubsEntity(sequelize: Sequelize): typeof SubsEntity {
  SubsEntity.init(
    {
      id: {
        type: DataTypes.TEXT,
        field: 'id',
        allowNull: true,
        primaryKey: true,
      },
      customerId: {
        type: DataTypes.TEXT,
        field: 'customer_id',
        allowNull: true,
        references: { model: 'customers', key: 'id' },
        onDelete: 'CASCADE',
      },
      subdomain: {
        type: DataTypes.STRING(50),
        field: 'subdomain',
        allowNull: true,
      },
      protocol: {
        type: DataTypes.STRING(5),
        field: 'protocol',
        allowNull: true,
      },
      shortname: {
        type: DataTypes.STRING(30),
        field: 'shortname',
        allowNull: true,
      },
      databaseName: {
        type: DataTypes.STRING(30),
        field: 'database_name',
        allowNull: true,
      },
      name: {
        type: DataTypes.STRING(50),
        field: 'name',
        allowNull: true,
      },
      logo: {
        type: DataTypes.STRING(255),
        field: 'logo',
        allowNull: true,
      },
      cloudPrintLogo: {
        type: DataTypes.STRING(255),
        field: 'cloud_print_logo',
        allowNull: true,
      },
      logoZpl: {
        type: DataTypes.TEXT,
        field: 'logo_zpl',
        allowNull: true,
      },
      siteLogo: {
        type: DataTypes.STRING(255),
        field: 'site_logo',
        allowNull: true,
      },
      faviconIcon: {
        type: DataTypes.STRING(255),
        field: 'favicon_icon',
        allowNull: true,
      },
      mobileLogo: {
        type: DataTypes.STRING(255),
        field: 'mobile_logo',
        allowNull: true,
      },
      industryId: {
        type: DataTypes.TEXT,
        field: 'industry_id',
        allowNull: true,
        references: { model: 'industries', key: 'id' },
        onDelete: 'CASCADE',
      },
      packageId: {
        type: DataTypes.TEXT,
        field: 'package_id',
        allowNull: true,
        references: { model: 'sub_packages', key: 'id' },
        onDelete: 'CASCADE',
      },
      environmentId: {
        type: DataTypes.TEXT,
        field: 'environment_id',
        allowNull: true,
      },
      industryEnvironmentId: {
        type: DataTypes.TEXT,
        field: 'industry_environment_id',
        allowNull: true,
      },
      authKey: {
        type: DataTypes.STRING(50),
        field: 'auth_key',
        allowNull: true,
      },
      decimalValue: {
        type: DataTypes.TEXT,
        field: 'decimal_value',
        allowNull: true,
        defaultValue: 2,
      },
      s3Folder: {
        type: DataTypes.STRING(100),
        field: 's3_folder',
        allowNull: true,
      },
      status: {
        type: DataTypes.TEXT,
        field: 'status',
        allowNull: false,
        defaultValue: "Active",
      },
      siteCreated: {
        type: DataTypes.TEXT,
        field: 'site_created',
        allowNull: false,
        defaultValue: "No",
      },
      allowPackageUpgrade: {
        type: DataTypes.TEXT,
        field: 'allow_package_upgrade',
        allowNull: false,
        defaultValue: "No",
      },
      permissionBasedOn: {
        type: DataTypes.TEXT,
        field: 'permission_based_on',
        allowNull: true,
        defaultValue: "Role",
      },
      sourceOfCreation: {
        type: DataTypes.TEXT,
        field: 'source_of_creation',
        allowNull: true,
      },
      defaultRole: {
        type: DataTypes.TEXT,
        field: 'default_role',
        allowNull: true,
      },
      isRoleSynced: {
        type: DataTypes.TEXT,
        field: 'is_role_synced',
        allowNull: false,
        defaultValue: "No",
      },
      languageId: {
        type: DataTypes.TEXT,
        field: 'language_id',
        allowNull: true,
      },
      currencyId: {
        type: DataTypes.TEXT,
        field: 'currency_id',
        allowNull: true,
      },
      bundleRetailPrice: {
        type: DataTypes.DECIMAL(15, 2),
        field: 'bundle_retail_price',
        allowNull: true,
      },
      billingFrequency: {
        type: DataTypes.TEXT,
        field: 'billing_frequency',
        allowNull: false,
        defaultValue: "Monthly",
      },
      signupDate: {
        type: DataTypes.DATE,
        field: 'signup_date',
        allowNull: true,
      },
      lastAccess: {
        type: DataTypes.DATE,
        field: 'last_access',
        allowNull: true,
      },
      createdAt: {
        type: DataTypes.DATE,
        field: 'created_at',
        allowNull: true,
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: 'updated_at',
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
      tableName: 'subs',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: false,
      indexes: [
      { unique: true, fields: ['subdomain'] },
      { unique: true, fields: ['shortname'] }
      ]
    }
  )
  return SubsEntity
}
