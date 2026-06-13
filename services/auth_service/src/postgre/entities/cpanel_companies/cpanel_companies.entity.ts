import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type CpanelCompaniesAttributes = {
  id?: number | null
  name?: string | null
  date_format_id?: number | null
  timezone_id?: number | null
  currency_id?: number | null
  address1?: string | null
  address2?: string | null
  city?: string | null
  state_id?: number | null
  country_id?: number | null
  postal_code?: number | null
  phone?: string | number | null
  fax?: string | null
  email?: string | null
  website?: string | null
  title_tag?: string | null
  status?: string | null
  theme_json?: string | null
  application?: string | null
  created_at?: string | null
  updated_at?: string | null
  logo?: string | null
  favicon_icon?: string | null
  loading_icon?: string | null
  bundle_name?: string | null
}

export type CpanelCompaniesCreationAttributes = Optional<CpanelCompaniesAttributes, "id" | "name" | "date_format_id" | "timezone_id" | "currency_id" | "address1" | "address2" | "city" | "state_id" | "country_id" | "postal_code" | "phone" | "fax" | "email" | "website" | "title_tag" | "status" | "theme_json" | "application" | "created_at" | "updated_at" | "logo" | "favicon_icon" | "loading_icon" | "bundle_name">

export class CpanelCompaniesEntity
  extends Model<CpanelCompaniesAttributes, CpanelCompaniesCreationAttributes>
  implements CpanelCompaniesAttributes
{
  declare id: number | null
  declare name: string | null
  declare date_format_id: number | null
  declare timezone_id: number | null
  declare currency_id: number | null
  declare address1: string | null
  declare address2: string | null
  declare city: string | null
  declare state_id: number | null
  declare country_id: number | null
  declare postal_code: number | null
  declare phone: string | number | null
  declare fax: string | null
  declare email: string | null
  declare website: string | null
  declare title_tag: string | null
  declare status: string | null
  declare theme_json: string | null
  declare application: string | null
  declare created_at: string | null
  declare updated_at: string | null
  declare logo: string | null
  declare favicon_icon: string | null
  declare loading_icon: string | null
  declare bundle_name: string | null
}

export function initCpanelCompaniesEntity(sequelize: Sequelize): typeof CpanelCompaniesEntity {
  CpanelCompaniesEntity.init(
    {
      id: {
        type: DataTypes.TEXT,
        field: 'id',
        allowNull: true,
      },
      name: {
        type: DataTypes.CHAR,
        field: 'name',
        allowNull: true,
        defaultValue: null,
      },
      date_format_id: {
        type: DataTypes.TEXT,
        field: 'date_format_id',
        allowNull: true,
      },
      timezone_id: {
        type: DataTypes.TEXT,
        field: 'timezone_id',
        allowNull: true,
      },
      currency_id: {
        type: DataTypes.TEXT,
        field: 'currency_id',
        allowNull: true,
      },
      address1: {
        type: DataTypes.CHAR,
        field: 'address1',
        allowNull: true,
        defaultValue: null,
      },
      address2: {
        type: DataTypes.CHAR,
        field: 'address2',
        allowNull: true,
        defaultValue: null,
      },
      city: {
        type: DataTypes.CHAR,
        field: 'city',
        allowNull: true,
        defaultValue: null,
      },
      state_id: {
        type: DataTypes.TEXT,
        field: 'state_id',
        allowNull: true,
      },
      country_id: {
        type: DataTypes.TEXT,
        field: 'country_id',
        allowNull: true,
      },
      postal_code: {
        type: DataTypes.INTEGER,
        field: 'postal_code',
        allowNull: true,
      },
      phone: {
        type: DataTypes.BIGINT,
        field: 'phone',
        allowNull: true,
      },
      fax: {
        type: DataTypes.CHAR,
        field: 'fax',
        allowNull: true,
        defaultValue: null,
      },
      email: {
        type: DataTypes.CHAR,
        field: 'email',
        allowNull: true,
        defaultValue: null,
      },
      website: {
        type: DataTypes.CHAR,
        field: 'website',
        allowNull: true,
        defaultValue: null,
      },
      title_tag: {
        type: DataTypes.CHAR,
        field: 'title_tag',
        allowNull: true,
        defaultValue: null,
      },
      status: {
        type: DataTypes.CHAR,
        field: 'status',
        allowNull: true,
        defaultValue: null,
      },
      theme_json: {
        type: DataTypes.CHAR,
        field: 'theme_json',
        allowNull: true,
        defaultValue: null,
      },
      application: {
        type: DataTypes.CHAR,
        field: 'application',
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
      logo: {
        type: DataTypes.CHAR,
        field: 'logo',
        allowNull: true,
        defaultValue: null,
      },
      favicon_icon: {
        type: DataTypes.CHAR,
        field: 'favicon_icon',
        allowNull: true,
        defaultValue: null,
      },
      loading_icon: {
        type: DataTypes.CHAR,
        field: 'loading_icon',
        allowNull: true,
        defaultValue: null,
      },
      bundle_name: {
        type: DataTypes.CHAR,
        field: 'bundle_name',
        allowNull: true,
        defaultValue: null,
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
