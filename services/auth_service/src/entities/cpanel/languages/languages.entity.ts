import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type LanguagesAttributes = {
  id: number
  name: string
  nativeName: string
  code: string
  iso1Code: string
  iso2Code: string
  iso3Code: string
  status?: string
  createdAt: Date
  updatedAt: Date
}

export type LanguagesCreationAttributes = Optional<LanguagesAttributes, "status">

export class LanguagesEntity
  extends Model<LanguagesAttributes, LanguagesCreationAttributes>
  implements LanguagesAttributes
{
  declare id: number
  declare name: string
  declare nativeName: string
  declare code: string
  declare iso1Code: string
  declare iso2Code: string
  declare iso3Code: string
  declare status: string
  declare createdAt: Date
  declare updatedAt: Date
}

export function initLanguagesEntity(sequelize: Sequelize): typeof LanguagesEntity {
  LanguagesEntity.init(
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
      nativeName: {
        type: DataTypes.STRING(30),
        field: 'native_name',
        allowNull: false,
      },
      code: {
        type: DataTypes.STRING(30),
        field: 'code',
        allowNull: false,
      },
      iso1Code: {
        type: DataTypes.STRING(5),
        field: 'iso1_code',
        allowNull: false,
      },
      iso2Code: {
        type: DataTypes.STRING(5),
        field: 'iso2_code',
        allowNull: false,
      },
      iso3Code: {
        type: DataTypes.STRING(5),
        field: 'iso3_code',
        allowNull: false,
      },
      status: {
        type: DataTypes.TEXT,
        field: 'status',
        allowNull: false,
        defaultValue: "'Active' CHECK (\n        \"status\" IN ('Active'",
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
      tableName: 'languages',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: false,
      indexes: [
      { unique: true, fields: ['id'] },
      { unique: true, fields: ['uq_languages_code', 'code'] },
      { unique: true, fields: ['uq_languages_name', 'name'] }
      ]
    }
  )
  return LanguagesEntity
}
