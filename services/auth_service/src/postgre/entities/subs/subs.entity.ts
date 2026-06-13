import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type SubsAttributes = {
  id?: number | null
  customer_id?: number | null
  subdomain?: string | null
  protocol?: string | null
  shortname?: string | null
  database_name?: string | null
  name?: string | null
  logo?: string | null
  cloud_print_logo?: string | null
  logo_zpl?: string | null
  site_logo?: string | null
  favicon_icon?: string | null
  mobile_logo?: string | null
  industry_id?: number | null
  package_id?: number | null
  environment_id?: number | null
  industry_environment_id?: number | null
  auth_key?: string | null
  decimal_value?: number | null
  s3_folder?: string | null
  status?: string | null
  site_created?: string | null
  allow_package_upgrade?: string | null
  permission_based_on?: string | null
  source_of_creation?: string | null
  default_role?: number | null
  is_role_synced?: number | null
  language_id?: number | null
  currency_id?: number | null
  bundle_retail_price?: number | null
  billing_frequency?: string | null
  signup_date?: string | null
  order_count?: number | null
  product_count?: number | null
  created_at?: string | null
  updated_at?: string | null
  last_access?: string | null
}

export type SubsCreationAttributes = Optional<SubsAttributes, "id" | "customer_id" | "subdomain" | "protocol" | "shortname" | "database_name" | "name" | "logo" | "cloud_print_logo" | "logo_zpl" | "site_logo" | "favicon_icon" | "mobile_logo" | "industry_id" | "package_id" | "environment_id" | "industry_environment_id" | "auth_key" | "decimal_value" | "s3_folder" | "status" | "site_created" | "allow_package_upgrade" | "permission_based_on" | "source_of_creation" | "default_role" | "is_role_synced" | "language_id" | "currency_id" | "bundle_retail_price" | "billing_frequency" | "signup_date" | "order_count" | "product_count" | "created_at" | "updated_at" | "last_access">

export class SubsEntity
  extends Model<SubsAttributes, SubsCreationAttributes>
  implements SubsAttributes
{
  declare id: number | null
  declare customer_id: number | null
  declare subdomain: string | null
  declare protocol: string | null
  declare shortname: string | null
  declare database_name: string | null
  declare name: string | null
  declare logo: string | null
  declare cloud_print_logo: string | null
  declare logo_zpl: string | null
  declare site_logo: string | null
  declare favicon_icon: string | null
  declare mobile_logo: string | null
  declare industry_id: number | null
  declare package_id: number | null
  declare environment_id: number | null
  declare industry_environment_id: number | null
  declare auth_key: string | null
  declare decimal_value: number | null
  declare s3_folder: string | null
  declare status: string | null
  declare site_created: string | null
  declare allow_package_upgrade: string | null
  declare permission_based_on: string | null
  declare source_of_creation: string | null
  declare default_role: number | null
  declare is_role_synced: number | null
  declare language_id: number | null
  declare currency_id: number | null
  declare bundle_retail_price: number | null
  declare billing_frequency: string | null
  declare signup_date: string | null
  declare order_count: number | null
  declare product_count: number | null
  declare created_at: string | null
  declare updated_at: string | null
  declare last_access: string | null
}

export function initSubsEntity(sequelize: Sequelize): typeof SubsEntity {
  SubsEntity.init(
    {
      id: {
        type: DataTypes.TEXT,
        field: 'id',
        allowNull: true,
      },
      customer_id: {
        type: DataTypes.TEXT,
        field: 'customer_id',
        allowNull: true,
      },
      subdomain: {
        type: DataTypes.CHAR,
        field: 'subdomain',
        allowNull: true,
        defaultValue: null,
      },
      protocol: {
        type: DataTypes.CHAR,
        field: 'protocol',
        allowNull: true,
        defaultValue: null,
      },
      shortname: {
        type: DataTypes.CHAR,
        field: 'shortname',
        allowNull: true,
        defaultValue: null,
      },
      database_name: {
        type: DataTypes.CHAR,
        field: 'database_name',
        allowNull: true,
        defaultValue: null,
      },
      name: {
        type: DataTypes.CHAR,
        field: 'name',
        allowNull: true,
        defaultValue: null,
      },
      logo: {
        type: DataTypes.CHAR,
        field: 'logo',
        allowNull: true,
        defaultValue: null,
      },
      cloud_print_logo: {
        type: DataTypes.CHAR,
        field: 'cloud_print_logo',
        allowNull: true,
        defaultValue: null,
      },
      logo_zpl: {
        type: DataTypes.CHAR,
        field: 'logo_zpl',
        allowNull: true,
        defaultValue: null,
      },
      site_logo: {
        type: DataTypes.CHAR,
        field: 'site_logo',
        allowNull: true,
        defaultValue: null,
      },
      favicon_icon: {
        type: DataTypes.CHAR,
        field: 'favicon_icon',
        allowNull: true,
        defaultValue: null,
      },
      mobile_logo: {
        type: DataTypes.CHAR,
        field: 'mobile_logo',
        allowNull: true,
        defaultValue: null,
      },
      industry_id: {
        type: DataTypes.TEXT,
        field: 'industry_id',
        allowNull: true,
      },
      package_id: {
        type: DataTypes.TEXT,
        field: 'package_id',
        allowNull: true,
      },
      environment_id: {
        type: DataTypes.TEXT,
        field: 'environment_id',
        allowNull: true,
      },
      industry_environment_id: {
        type: DataTypes.TEXT,
        field: 'industry_environment_id',
        allowNull: true,
      },
      auth_key: {
        type: DataTypes.CHAR,
        field: 'auth_key',
        allowNull: true,
        defaultValue: null,
      },
      decimal_value: {
        type: DataTypes.TEXT,
        field: 'decimal_value',
        allowNull: true,
      },
      s3_folder: {
        type: DataTypes.CHAR,
        field: 's3_folder',
        allowNull: true,
        defaultValue: null,
      },
      status: {
        type: DataTypes.CHAR,
        field: 'status',
        allowNull: true,
        defaultValue: null,
      },
      site_created: {
        type: DataTypes.CHAR,
        field: 'site_created',
        allowNull: true,
        defaultValue: null,
      },
      allow_package_upgrade: {
        type: DataTypes.CHAR,
        field: 'allow_package_upgrade',
        allowNull: true,
        defaultValue: null,
      },
      permission_based_on: {
        type: DataTypes.CHAR,
        field: 'permission_based_on',
        allowNull: true,
        defaultValue: null,
      },
      source_of_creation: {
        type: DataTypes.CHAR,
        field: 'source_of_creation',
        allowNull: true,
        defaultValue: null,
      },
      default_role: {
        type: DataTypes.TEXT,
        field: 'default_role',
        allowNull: true,
      },
      is_role_synced: {
        type: DataTypes.TEXT,
        field: 'is_role_synced',
        allowNull: true,
      },
      language_id: {
        type: DataTypes.TEXT,
        field: 'language_id',
        allowNull: true,
      },
      currency_id: {
        type: DataTypes.TEXT,
        field: 'currency_id',
        allowNull: true,
      },
      bundle_retail_price: {
        type: DataTypes.DECIMAL(4, 1),
        field: 'bundle_retail_price',
        allowNull: true,
        defaultValue: null,
      },
      billing_frequency: {
        type: DataTypes.CHAR,
        field: 'billing_frequency',
        allowNull: true,
        defaultValue: null,
      },
      signup_date: {
        type: DataTypes.CHAR,
        field: 'signup_date',
        allowNull: true,
        defaultValue: null,
      },
      order_count: {
        type: DataTypes.DECIMAL(6, 3),
        field: 'order_count',
        allowNull: true,
        defaultValue: null,
      },
      product_count: {
        type: DataTypes.DECIMAL(4, 3),
        field: 'product_count',
        allowNull: true,
        defaultValue: null,
      },
      created_at: {
        type: DataTypes.CHAR,
        field: 'created_at',
        allowNull: true,
        defaultValue: null,
      },
      updated_at: {
        type: DataTypes.CHAR,
        field: 'updated_at',
        allowNull: true,
        defaultValue: null,
      },
      last_access: {
        type: DataTypes.CHAR,
        field: 'last_access',
        allowNull: true,
        defaultValue: null,
      }
    },
    {
      sequelize,
      tableName: 'subs',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: true
    }
  )
  return SubsEntity
}
