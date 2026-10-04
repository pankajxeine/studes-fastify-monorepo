import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type TimezonesAttributes = {
  id: number
  countryId: string | number
  countryIsoCode: string
  name: string
  gmtOffset: number
  status?: string
  createdAt: Date
  updatedAt: Date
}

export type TimezonesCreationAttributes = Optional<TimezonesAttributes, "status">

export class TimezonesEntity
  extends Model<TimezonesAttributes, TimezonesCreationAttributes>
  implements TimezonesAttributes
{
  declare id: number
  declare countryId: string | number
  declare countryIsoCode: string
  declare name: string
  declare gmtOffset: number
  declare status: string
  declare createdAt: Date
  declare updatedAt: Date
}

export function initTimezonesEntity(sequelize: Sequelize): typeof TimezonesEntity {
  TimezonesEntity.init(
    {
      id: {
        type: DataTypes.INTEGER,
        field: 'id',
        allowNull: false,
        primaryKey: true,
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
      tableName: 'timezones',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: false,
      indexes: [
      { unique: true, fields: ['id'] },
      { unique: true, fields: ['uq_timezones_name', 'name'] }
      ]
    }
  )
  return TimezonesEntity
}
