import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type LanguagesAttributes = {
  id?: string | number | null
  name: string
  nativeName: string
  code: string
  iso1Code: string
  iso2Code: string
  iso3Code: string
  status?: string
}

export type LanguagesCreationAttributes = Optional<LanguagesAttributes, "id" | "status">

export class LanguagesEntity
  extends Model<LanguagesAttributes, LanguagesCreationAttributes>
  implements LanguagesAttributes
{
  declare id: string | number | null
  declare name: string
  declare nativeName: string
  declare code: string
  declare iso1Code: string
  declare iso2Code: string
  declare iso3Code: string
  declare status: string
}

export function initLanguagesEntity(sequelize: Sequelize): typeof LanguagesEntity {
  LanguagesEntity.init(
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
        defaultValue: "Active",
      }
    },
    {
      sequelize,
      tableName: 'languages',
      timestamps: false,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['id'] },
      { unique: true, fields: ['code'] },
      { unique: true, fields: ['name'] }
      ]
    }
  )
  return LanguagesEntity
}
