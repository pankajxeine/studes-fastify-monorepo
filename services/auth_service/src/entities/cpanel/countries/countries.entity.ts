import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type CountriesAttributes = {
  id: number
  name: string
  isoCode: string
  iso3Code: string
  status?: string
  languageId?: number
  currencyId?: number
  createdAt: Date
  updatedAt: Date
}

export type CountriesCreationAttributes = Optional<CountriesAttributes, "status" | "languageId" | "currencyId">

export class CountriesEntity
  extends Model<CountriesAttributes, CountriesCreationAttributes>
  implements CountriesAttributes
{
  declare id: number
  declare name: string
  declare isoCode: string
  declare iso3Code: string
  declare status: string
  declare languageId: number
  declare currencyId: number
  declare createdAt: Date
  declare updatedAt: Date
}

export function initCountriesEntity(sequelize: Sequelize): typeof CountriesEntity {
  CountriesEntity.init(
    {
      id: {
        type: DataTypes.INTEGER,
        field: 'id',
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING(30),
        field: 'name',
        allowNull: false,
      },
      isoCode: {
        type: DataTypes.STRING(3),
        field: 'iso_code',
        allowNull: false,
      },
      iso3Code: {
        type: DataTypes.STRING(3),
        field: 'iso3_code',
        allowNull: false,
      },
      status: {
        type: DataTypes.TEXT,
        field: 'status',
        allowNull: false,
        defaultValue: "'Active' CHECK (\n        \"status\" IN ('Active'",
      },
      languageId: {
        type: DataTypes.INTEGER,
        field: 'language_id',
        allowNull: false,
        defaultValue: "0",
      },
      currencyId: {
        type: DataTypes.INTEGER,
        field: 'currency_id',
        allowNull: false,
        defaultValue: "0",
      },
      createdAt: {
        type: DataTypes.DATE,
        field: 'created_at',
        allowNull: false,
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: 'updated_at',
        allowNull: false,
      }
    },
    {
      sequelize,
      tableName: 'countries',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: false,
      indexes: [
      { unique: true, fields: ['id'] },
      { unique: true, fields: ['uq_countries_iso_code', 'iso_code'] },
      { unique: true, fields: ['uq_countries_name', 'name'] },
      { unique: true, fields: ['uq_countries_iso3_code', 'iso3_code'] }
      ]
    }
  )
  return CountriesEntity
}
