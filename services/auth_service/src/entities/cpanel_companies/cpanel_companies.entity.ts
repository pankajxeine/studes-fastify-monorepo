import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type CpanelCompaniesAttributes = {
  id?: number
  name: string
  date_format_id?: number
  timezone_id: number
  currency_id: number
  address1: string
  address2: string
  city: string
  state_id: number
  country_id: number
  postal_code: string
  phone: string
  fax: string
  email: string
  website?: string | null
  title_tag: string
  status?: string
  theme_json?: unknown | null
  application?: string | null
  created_at: Date
  updated_at: Date
  logo?: string | null
  favicon_icon?: string | null
  loading_icon?: string | null
  bundle_name?: string | null
}

export type CpanelCompaniesCreationAttributes = Optional<CpanelCompaniesAttributes, "id" | "date_format_id" | "website" | "status" | "theme_json" | "application" | "logo" | "favicon_icon" | "loading_icon" | "bundle_name">

export class CpanelCompaniesEntity
  extends Model<CpanelCompaniesAttributes, CpanelCompaniesCreationAttributes>
  implements CpanelCompaniesAttributes
{
  declare id: number
  declare name: string
  declare date_format_id: number
  declare timezone_id: number
  declare currency_id: number
  declare address1: string
  declare address2: string
  declare city: string
  declare state_id: number
  declare country_id: number
  declare postal_code: string
  declare phone: string
  declare fax: string
  declare email: string
  declare website: string | null
  declare title_tag: string
  declare status: string
  declare theme_json: unknown | null
  declare application: string | null
  declare created_at: Date
  declare updated_at: Date
  declare logo: string | null
  declare favicon_icon: string | null
  declare loading_icon: string | null
  declare bundle_name: string | null
}

export function initCpanelCompaniesEntity(sequelize: Sequelize): typeof CpanelCompaniesEntity {
  CpanelCompaniesEntity.init(
    {
      id: {
        type: DataTypes.INTEGER,
        field: 'id',
        allowNull: false,
        primaryKey: true ,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING(100),
        field: 'name',
        allowNull: false,
      },
      date_format_id: {
        type: DataTypes.INTEGER,
        field: 'date_format_id',
        allowNull: false,
        defaultValue: "1",
      },
      timezone_id: {
        type: DataTypes.INTEGER,
        field: 'timezone_id',
        allowNull: false,
      },
      currency_id: {
        type: DataTypes.INTEGER,
        field: 'currency_id',
        allowNull: false,
      },
      address1: {
        type: DataTypes.STRING(50),
        field: 'address1',
        allowNull: false,
      },
      address2: {
        type: DataTypes.STRING(50),
        field: 'address2',
        allowNull: false,
      },
      city: {
        type: DataTypes.STRING(30),
        field: 'city',
        allowNull: false,
      },
      state_id: {
        type: DataTypes.INTEGER,
        field: 'state_id',
        allowNull: false,
      },
      country_id: {
        type: DataTypes.INTEGER,
        field: 'country_id',
        allowNull: false,
      },
      postal_code: {
        type: DataTypes.STRING(10),
        field: 'postal_code',
        allowNull: false,
      },
      phone: {
        type: DataTypes.STRING(20),
        field: 'phone',
        allowNull: false,
      },
      fax: {
        type: DataTypes.STRING(20),
        field: 'fax',
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING(50),
        field: 'email',
        allowNull: false,
      },
      website: {
        type: DataTypes.STRING(50),
        field: 'website',
        allowNull: true,
        defaultValue: null,
      },
      title_tag: {
        type: DataTypes.STRING(30),
        field: 'title_tag',
        allowNull: false,
      },
      status: {
        type: DataTypes.ENUM('active','inactive'),
        field: 'status',
        allowNull: false,
        defaultValue: "Active",
      },
      theme_json: {
        type: DataTypes.JSON,
        field: 'theme_json',
        allowNull: true,
        defaultValue: null,
      },
      application: {
        type: DataTypes.ENUM('crm','cpanel'),
        field: 'application',
        allowNull: true,
        defaultValue: null,
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
      logo: {
        type: DataTypes.STRING(100),
        field: 'logo',
        allowNull: true,
        defaultValue: null,
      },
      favicon_icon: {
        type: DataTypes.STRING(100),
        field: 'favicon_icon',
        allowNull: true,
        defaultValue: null,
      },
      loading_icon: {
        type: DataTypes.STRING(100),
        field: 'loading_icon',
        allowNull: true,
        defaultValue: null,
      },
      bundle_name: {
        type: DataTypes.ENUM('bundle','delta 1st'),
        field: 'bundle_name',
        allowNull: true,
        defaultValue: "Bundle",
      }
    },
    {
      sequelize,
      tableName: 'cpanel_companies',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: true
    }
  )
  return CpanelCompaniesEntity
}
