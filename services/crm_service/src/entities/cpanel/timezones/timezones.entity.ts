import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type TimezonesAttributes = {
  id?: string | number | null
  countryId: string | number
  countryIsoCode: string
  name: string
  gmtOffset: number
  status?: string
}

export type TimezonesCreationAttributes = Optional<TimezonesAttributes, "id" | "status">

export class TimezonesEntity
  extends Model<TimezonesAttributes, TimezonesCreationAttributes>
  implements TimezonesAttributes
{
  declare id: string | number | null
  declare countryId: string | number
  declare countryIsoCode: string
  declare name: string
  declare gmtOffset: number
  declare status: string
}

export function initTimezonesEntity(sequelize: Sequelize): typeof TimezonesEntity {
  TimezonesEntity.init(
    {
      id: {
        type: DataTypes.BIGINT,
        field: 'id',
        allowNull: true,
        primaryKey: true,
        autoIncrement: true,
        defaultValue: "AS IDENTITY",
      },
      countryId: {
        type: DataTypes.BIGINT,
        field: 'country_id',
        allowNull: false,
      },
      countryIsoCode: {
        type: DataTypes.STRING(3),
        field: 'country_iso_code',
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING(50),
        field: 'name',
        allowNull: false,
      },
      gmtOffset: {
        type: DataTypes.INTEGER,
        field: 'gmt_offset',
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
      tableName: 'timezones',
      timestamps: false,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['id'] },
      { unique: true, fields: ['name'] }
      ]
    }
  )
  return TimezonesEntity
}
