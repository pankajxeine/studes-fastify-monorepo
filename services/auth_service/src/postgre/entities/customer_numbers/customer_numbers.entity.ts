import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type CustomerNumbersAttributes = {
  id?: number | null
  module?: string | null
  prefix?: string | null
  next_no?: number | null
}

export type CustomerNumbersCreationAttributes = Optional<CustomerNumbersAttributes, "id" | "module" | "prefix" | "next_no">

export class CustomerNumbersEntity
  extends Model<CustomerNumbersAttributes, CustomerNumbersCreationAttributes>
  implements CustomerNumbersAttributes
{
  declare id: number | null
  declare module: string | null
  declare prefix: string | null
  declare next_no: number | null
}

export function initCustomerNumbersEntity(sequelize: Sequelize): typeof CustomerNumbersEntity {
  CustomerNumbersEntity.init(
    {
      id: {
        type: DataTypes.TEXT,
        field: 'id',
        allowNull: true,
      },
      module: {
        type: DataTypes.CHAR,
        field: 'module',
        allowNull: true,
        defaultValue: null,
      },
      prefix: {
        type: DataTypes.CHAR,
        field: 'prefix',
        allowNull: true,
        defaultValue: null,
      },
      next_no: {
        type: DataTypes.TEXT,
        field: 'next_no',
        allowNull: true,
      }
    },
    {
      sequelize,
      tableName: 'customer_numbers',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: true
    }
  )
  return CustomerNumbersEntity
}
