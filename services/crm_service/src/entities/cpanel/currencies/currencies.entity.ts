import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type CurrenciesAttributes = {
  id?: string | number | null
  name: string
  code: string
  symbolRight: string
  symbolLeft: string
  value: number
  status?: string
}

export type CurrenciesCreationAttributes = Optional<CurrenciesAttributes, "id" | "status">

export class CurrenciesEntity
  extends Model<CurrenciesAttributes, CurrenciesCreationAttributes>
  implements CurrenciesAttributes
{
  declare id: string | number | null
  declare name: string
  declare code: string
  declare symbolRight: string
  declare symbolLeft: string
  declare value: number
  declare status: string
}

export function initCurrenciesEntity(sequelize: Sequelize): typeof CurrenciesEntity {
  CurrenciesEntity.init(
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
      code: {
        type: DataTypes.STRING(5),
        field: 'code',
        allowNull: false,
      },
      symbolRight: {
        type: DataTypes.STRING(10),
        field: 'symbol_right',
        allowNull: false,
      },
      symbolLeft: {
        type: DataTypes.STRING(10),
        field: 'symbol_left',
        allowNull: false,
      },
      value: {
        type: DataTypes.DOUBLE,
        field: 'value',
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
      tableName: 'currencies',
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
  return CurrenciesEntity
}
