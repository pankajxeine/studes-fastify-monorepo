import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type CountriesAttributes = {
  id?: string | number | null
  name: string
  isoCode: string
  iso3Code: string
  status?: string
  languageId?: number
  currencyId?: number
}

export type CountriesCreationAttributes = Optional<CountriesAttributes, "id" | "status" | "languageId" | "currencyId">

export class CountriesEntity
  extends Model<CountriesAttributes, CountriesCreationAttributes>
  implements CountriesAttributes
{
  declare id: string | number | null
  declare name: string
  declare isoCode: string
  declare iso3Code: string
  declare status: string
  declare languageId: number
  declare currencyId: number
}

export function initCountriesEntity(sequelize: Sequelize): typeof CountriesEntity {
  CountriesEntity.init(
    {
      id: {
        type: DataTypes.BIGINT,
        field: 'id',
        allowNull: true,
        primaryKey: true,
        autoIncrement: true,
        defaultValue: "AS IDENTITY",
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
        defaultValue: "Active",
      },
      languageId: {
        type: DataTypes.INTEGER,
        field: 'language_id',
        allowNull: false,
        defaultValue: "0",
        references: { model: 'languages', key: 'id' },
      },
      currencyId: {
        type: DataTypes.INTEGER,
        field: 'currency_id',
        allowNull: false,
        defaultValue: "0",
      }
    },
    {
      sequelize,
      tableName: 'countries',
      timestamps: false,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['id'] },
      { unique: true, fields: ['iso_code'] },
      { unique: true, fields: ['name'] },
      { unique: true, fields: ['iso3_code'] }
      ]
    }
  )
  return CountriesEntity
}
