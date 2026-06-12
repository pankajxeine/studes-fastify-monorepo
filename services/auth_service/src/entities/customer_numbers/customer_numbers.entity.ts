import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type CustomerNumbersAttributes = {
  id?: number
  module?: string | null
  prefix?: string | null
  next_no?: number | null
}

export type CustomerNumbersCreationAttributes = Optional<CustomerNumbersAttributes, "id" | "module" | "prefix" | "next_no">

export class CustomerNumbersEntity
  extends Model<CustomerNumbersAttributes, CustomerNumbersCreationAttributes>
  implements CustomerNumbersAttributes
{
  declare id: number
  declare module: string | null
  declare prefix: string | null
  declare next_no: number | null
}

export function initCustomerNumbersEntity(sequelize: Sequelize): typeof CustomerNumbersEntity {
  CustomerNumbersEntity.init(
    {
      id: {
        type: DataTypes.INTEGER,
        field: 'id',
        allowNull: false,
        primaryKey: true ,
        autoIncrement: true,
      },
      module: {
        type: DataTypes.STRING(150),
        field: 'module',
        allowNull: true,
        defaultValue: null,
      },
      prefix: {
        type: DataTypes.STRING(50),
        field: 'prefix',
        allowNull: true,
        defaultValue: null,
      },
      next_no: {
        type: DataTypes.INTEGER,
        field: 'next_no',
        allowNull: true,
        defaultValue: null,
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
