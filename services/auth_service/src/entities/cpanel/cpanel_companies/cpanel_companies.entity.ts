import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type CpanelCompaniesAttributes = {
  id?: number | null
  name?: string | null
  dateFormatId?: number | null
  timezoneId?: number | null
  currencyId?: number | null
  address1?: string | null
  address2?: string | null
  city?: string | null
  stateId?: number | null
  countryId?: number | null
  postalCode?: number | null
  phone?: string | number | null
  fax?: string | null
  email?: string | null
  website?: string | null
  titleTag?: string | null
  status?: string | null
  themeJson?: unknown | null
  application?: string | null
  createdAt?: Date | null
  updatedAt?: Date | null
  logo?: string | null
  faviconIcon?: string | null
  loadingIcon?: string | null
  bundleName?: string | null
}

export type CpanelCompaniesCreationAttributes = Optional<CpanelCompaniesAttributes, "id" | "name" | "dateFormatId" | "timezoneId" | "currencyId" | "address1" | "address2" | "city" | "stateId" | "countryId" | "postalCode" | "phone" | "fax" | "email" | "website" | "titleTag" | "status" | "themeJson" | "application" | "createdAt" | "updatedAt" | "logo" | "faviconIcon" | "loadingIcon" | "bundleName">

export class CpanelCompaniesEntity
  extends Model<CpanelCompaniesAttributes, CpanelCompaniesCreationAttributes>
  implements CpanelCompaniesAttributes
{
  declare id: number | null
  declare name: string | null
  declare dateFormatId: number | null
  declare timezoneId: number | null
  declare currencyId: number | null
  declare address1: string | null
  declare address2: string | null
  declare city: string | null
  declare stateId: number | null
  declare countryId: number | null
  declare postalCode: number | null
  declare phone: string | number | null
  declare fax: string | null
  declare email: string | null
  declare website: string | null
  declare titleTag: string | null
  declare status: string | null
  declare themeJson: unknown | null
  declare application: string | null
  declare createdAt: Date | null
  declare updatedAt: Date | null
  declare logo: string | null
  declare faviconIcon: string | null
  declare loadingIcon: string | null
  declare bundleName: string | null
}

export function initCpanelCompaniesEntity(sequelize: Sequelize): typeof CpanelCompaniesEntity {
  CpanelCompaniesEntity.init(
    {
      id: {
        type: DataTypes.TEXT,
        field: 'id',
        allowNull: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING(50),
        field: 'name',
        allowNull: true,
      },
      dateFormatId: {
        type: DataTypes.TEXT,
        field: 'date_format_id',
        allowNull: true,
      },
      timezoneId: {
        type: DataTypes.TEXT,
        field: 'timezone_id',
        allowNull: true,
      },
      currencyId: {
        type: DataTypes.TEXT,
        field: 'currency_id',
        allowNull: true,
      },
      address1: {
        type: DataTypes.STRING(50),
        field: 'address1',
        allowNull: true,
      },
      address2: {
        type: DataTypes.STRING(50),
        field: 'address2',
        allowNull: true,
      },
      city: {
        type: DataTypes.STRING(30),
        field: 'city',
        allowNull: true,
      },
      stateId: {
        type: DataTypes.TEXT,
        field: 'state_id',
        allowNull: true,
      },
      countryId: {
        type: DataTypes.TEXT,
        field: 'country_id',
        allowNull: true,
      },
      postalCode: {
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
        type: DataTypes.STRING(20),
        field: 'fax',
        allowNull: true,
      },
      email: {
        type: DataTypes.STRING(50),
        field: 'email',
        allowNull: true,
      },
      website: {
        type: DataTypes.STRING(30),
        field: 'website',
        allowNull: true,
      },
      titleTag: {
        type: DataTypes.STRING(50),
        field: 'title_tag',
        allowNull: true,
      },
      status: {
        type: DataTypes.TEXT,
        field: 'status',
        allowNull: true,
        defaultValue: "Active",
      },
      themeJson: {
        type: DataTypes.JSONB,
        field: 'theme_json',
        allowNull: true,
      },
      application: {
        type: DataTypes.TEXT,
        field: 'application',
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
      logo: {
        type: DataTypes.STRING(255),
        field: 'logo',
        allowNull: true,
      },
      faviconIcon: {
        type: DataTypes.STRING(255),
        field: 'favicon_icon',
        allowNull: true,
      },
      loadingIcon: {
        type: DataTypes.STRING(255),
        field: 'loading_icon',
        allowNull: true,
      },
      bundleName: {
        type: DataTypes.STRING(30),
        field: 'bundle_name',
        allowNull: true,
      }
    },
    {
      sequelize,
      tableName: 'cpanel_companies',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: false
    }
  )
  return CpanelCompaniesEntity
}
