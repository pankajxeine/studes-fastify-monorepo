import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type SubsAttributes = {
  id?: number
  customer_id: number
  subdomain: string
  protocol?: string
  shortname: string
  database_name: string
  name: string
  logo: string
  cloud_print_logo?: string | null
  logo_zpl?: string | null
  site_logo: string
  favicon_icon: string
  mobile_logo: string
  industry_id: number
  package_id?: number
  environment_id?: number
  industry_environment_id?: number
  auth_key: string
  decimal_value?: number
  s3_folder?: string | null
  status?: string
  site_created?: string
  allow_package_upgrade?: string | null
  permission_based_on?: string
  source_of_creation?: string
  default_role?: number | null
  is_role_synced?: string
  language_id?: number
  currency_id?: number
  bundle_retail_price?: number
  billing_frequency?: string
  signup_date: Date
  order_count?: number | null
  product_count?: number | null
  created_at: Date
  updated_at: Date
  last_access?: Date | null
}

export type SubsCreationAttributes = Optional<SubsAttributes, "id" | "protocol" | "cloud_print_logo" | "logo_zpl" | "package_id" | "environment_id" | "industry_environment_id" | "decimal_value" | "s3_folder" | "status" | "site_created" | "allow_package_upgrade" | "permission_based_on" | "source_of_creation" | "default_role" | "is_role_synced" | "language_id" | "currency_id" | "bundle_retail_price" | "billing_frequency" | "order_count" | "product_count" | "last_access">

export class SubsEntity
  extends Model<SubsAttributes, SubsCreationAttributes>
  implements SubsAttributes
{
  declare id: number
  declare customer_id: number
  declare subdomain: string
  declare protocol: string
  declare shortname: string
  declare database_name: string
  declare name: string
  declare logo: string
  declare cloud_print_logo: string | null
  declare logo_zpl: string | null
  declare site_logo: string
  declare favicon_icon: string
  declare mobile_logo: string
  declare industry_id: number
  declare package_id: number
  declare environment_id: number
  declare industry_environment_id: number
  declare auth_key: string
  declare decimal_value: number
  declare s3_folder: string | null
  declare status: string
  declare site_created: string
  declare allow_package_upgrade: string | null
  declare permission_based_on: string
  declare source_of_creation: string
  declare default_role: number | null
  declare is_role_synced: string
  declare language_id: number
  declare currency_id: number
  declare bundle_retail_price: number
  declare billing_frequency: string
  declare signup_date: Date
  declare order_count: number | null
  declare product_count: number | null
  declare created_at: Date
  declare updated_at: Date
  declare last_access: Date | null
}

export function initSubsEntity(sequelize: Sequelize): typeof SubsEntity {
  SubsEntity.init(
    {
      id: {
        type: DataTypes.INTEGER,
        field: 'id',
        allowNull: false,
        primaryKey: true ,
        autoIncrement: true,
      },
      customer_id: {
        type: DataTypes.INTEGER,
        field: 'customer_id',
        allowNull: false,
      },
      subdomain: {
        type: DataTypes.STRING(50),
        field: 'subdomain',
        allowNull: false,
        unique: true,
      },
      protocol: {
        type: DataTypes.ENUM('http','https'),
        field: 'protocol',
        allowNull: false,
        defaultValue: "https",
      },
      shortname: {
        type: DataTypes.STRING(50),
        field: 'shortname',
        allowNull: false,
        unique: true,
      },
      database_name: {
        type: DataTypes.STRING(50),
        field: 'database_name',
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING(50),
        field: 'name',
        allowNull: false,
      },
      logo: {
        type: DataTypes.STRING(255),
        field: 'logo',
        allowNull: false,
      },
      cloud_print_logo: {
        type: DataTypes.STRING(255),
        field: 'cloud_print_logo',
        allowNull: true,
        defaultValue: null,
      },
      logo_zpl: {
        type: DataTypes.TEXT("long"),
        field: 'logo_zpl',
        allowNull: true,
      },
      site_logo: {
        type: DataTypes.STRING(255),
        field: 'site_logo',
        allowNull: false,
      },
      favicon_icon: {
        type: DataTypes.STRING(255),
        field: 'favicon_icon',
        allowNull: false,
      },
      mobile_logo: {
        type: DataTypes.STRING(255),
        field: 'mobile_logo',
        allowNull: false,
      },
      industry_id: {
        type: DataTypes.INTEGER,
        field: 'industry_id',
        allowNull: false,
      },
      package_id: {
        type: DataTypes.INTEGER,
        field: 'package_id',
        allowNull: false,
        defaultValue: "0",
      },
      environment_id: {
        type: DataTypes.INTEGER,
        field: 'environment_id',
        allowNull: false,
        defaultValue: "0",
      },
      industry_environment_id: {
        type: DataTypes.INTEGER,
        field: 'industry_environment_id',
        allowNull: false,
        defaultValue: "0",
      },
      auth_key: {
        type: DataTypes.STRING(50),
        field: 'auth_key',
        allowNull: false,
      },
      decimal_value: {
        type: DataTypes.INTEGER,
        field: 'decimal_value',
        allowNull: false,
        defaultValue: "2",
      },
      s3_folder: {
        type: DataTypes.STRING(80),
        field: 's3_folder',
        allowNull: true,
        defaultValue: null,
      },
      status: {
        type: DataTypes.ENUM('active','inactive'),
        field: 'status',
        allowNull: false,
        defaultValue: "Active",
      },
      site_created: {
        type: DataTypes.ENUM('yes','no'),
        field: 'site_created',
        allowNull: false,
        defaultValue: "No",
      },
      allow_package_upgrade: {
        type: DataTypes.ENUM('no','yes'),
        field: 'allow_package_upgrade',
        allowNull: true,
        defaultValue: "No",
      },
      permission_based_on: {
        type: DataTypes.ENUM('role','user'),
        field: 'permission_based_on',
        allowNull: false,
        defaultValue: "Role",
      },
      source_of_creation: {
        type: DataTypes.ENUM('cpanel','crm'),
        field: 'source_of_creation',
        allowNull: false,
        defaultValue: "cpanel",
      },
      default_role: {
        type: DataTypes.INTEGER,
        field: 'default_role',
        allowNull: true,
        defaultValue: null,
      },
      is_role_synced: {
        type: DataTypes.ENUM('0','1'),
        field: 'is_role_synced',
        allowNull: false,
        defaultValue: "0",
      },
      language_id: {
        type: DataTypes.INTEGER,
        field: 'language_id',
        allowNull: false,
        defaultValue: "0",
      },
      currency_id: {
        type: DataTypes.INTEGER,
        field: 'currency_id',
        allowNull: false,
        defaultValue: "0",
      },
      bundle_retail_price: {
        type: DataTypes.DOUBLE(15,3),
        field: 'bundle_retail_price',
        allowNull: false,
        defaultValue: "0.000",
      },
      billing_frequency: {
        type: DataTypes.ENUM('monthly','annually'),
        field: 'billing_frequency',
        allowNull: false,
        defaultValue: "Monthly",
      },
      signup_date: {
        type: DataTypes.DATE,
        field: 'signup_date',
        allowNull: false,
      },
      order_count: {
        type: DataTypes.DECIMAL(15,3),
        field: 'order_count',
        allowNull: true,
        defaultValue: "0.000",
      },
      product_count: {
        type: DataTypes.DECIMAL(15,3),
        field: 'product_count',
        allowNull: true,
        defaultValue: "0.000",
      },
      created_at: {
        type: DataTypes.DATE,
        field: 'created_at',
        allowNull: false,
      },
      updated_at: {
        type: DataTypes.DATE,
        field: 'updated_at',
        allowNull: false,
      },
      last_access: {
        type: DataTypes.DATE,
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
      paranoid: true,
      comment: 'Master entries for subs'
    }
  )
  return SubsEntity
}
