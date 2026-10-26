import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type PlatformCountryAttributes = {
  recordCode?: string
  countryId: string | null
  countryCode: string
  iso3: string
  name: string
  phonePrefix?: string | null
  defaultCurrencyCode?: string | null
  isActive?: string
  createdAt?: Date
  updatedAt?: Date
}

export type PlatformCountryCreationAttributes = Optional<PlatformCountryAttributes, "recordCode" | "phonePrefix" | "defaultCurrencyCode" | "isActive" | "createdAt" | "updatedAt">

export class PlatformCountryEntity
  extends Model<PlatformCountryAttributes, PlatformCountryCreationAttributes>
  implements PlatformCountryAttributes
{
  declare recordCode: string
  declare countryId: string | null
  declare countryCode: string
  declare iso3: string
  declare name: string
  declare phonePrefix: string | null
  declare defaultCurrencyCode: string | null
  declare isActive: string
  declare createdAt: Date
  declare updatedAt: Date
}

export function initPlatformCountryEntity(sequelize: Sequelize): typeof PlatformCountryEntity {
  PlatformCountryEntity.init(
    {
      recordCode: {
        type: DataTypes.TEXT,
        field: 'record_code',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('platform_country')"),
      },
      countryId: {
        type: DataTypes.TEXT,
        field: 'country_id',
        allowNull: true,
        primaryKey: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      countryCode: {
        type: DataTypes.TEXT,
        field: 'country_code',
        allowNull: false,
        unique: true,
      },
      iso3: {
        type: DataTypes.CHAR(3),
        field: 'iso3',
        allowNull: false,
      },
      name: {
        type: DataTypes.TEXT,
        field: 'name',
        allowNull: false,
      },
      phonePrefix: {
        type: DataTypes.STRING(5),
        field: 'phone_prefix',
        allowNull: true,
      },
      defaultCurrencyCode: {
        type: DataTypes.TEXT,
        field: 'default_currency_code',
        allowNull: true,
        references: { model: 'platform_currency', key: 'currency_code' },
      },
      isActive: {
        type: DataTypes.TEXT,
        field: 'is_active',
        allowNull: false,
        defaultValue: true,
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
      }
    },
    {
      sequelize,
      tableName: 'platform_country',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['iso3'] }
      ]
    }
  )
  return PlatformCountryEntity
}
