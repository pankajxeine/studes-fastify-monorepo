import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type CurrenciesAttributes = {
  id: number
  name: string
  code: string
  symbolRight: string
  symbolLeft: string
  value: number
  status?: string
  createdAt: Date
  updatedAt: Date
}

export type CurrenciesCreationAttributes = Optional<CurrenciesAttributes, "status">

export class CurrenciesEntity
  extends Model<CurrenciesAttributes, CurrenciesCreationAttributes>
  implements CurrenciesAttributes
{
  declare id: number
  declare name: string
  declare code: string
  declare symbolRight: string
  declare symbolLeft: string
  declare value: number
  declare status: string
  declare createdAt: Date
  declare updatedAt: Date
}

export function initCurrenciesEntity(sequelize: Sequelize): typeof CurrenciesEntity {
  CurrenciesEntity.init(
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
      tableName: 'currencies',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: false,
      indexes: [
      { unique: true, fields: ['id'] },
      { unique: true, fields: ['uq_currencies_code', 'code'] },
      { unique: true, fields: ['uq_currencies_name', 'name'] }
      ]
    }
  )
  return CurrenciesEntity
}
