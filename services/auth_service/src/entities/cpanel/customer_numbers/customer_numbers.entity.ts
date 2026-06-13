import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type CustomerNumbersAttributes = {
  id?: number | null
  module?: string | null
  prefix?: string | null
  nextNo?: number | null
}

export type CustomerNumbersCreationAttributes = Optional<CustomerNumbersAttributes, "id" | "module" | "prefix" | "nextNo">

export class CustomerNumbersEntity
  extends Model<CustomerNumbersAttributes, CustomerNumbersCreationAttributes>
  implements CustomerNumbersAttributes
{
  declare id: number | null
  declare module: string | null
  declare prefix: string | null
  declare nextNo: number | null
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
        type: DataTypes.CHAR(14),
        field: 'module',
        allowNull: true,
      },
      prefix: {
        type: DataTypes.CHAR(2),
        field: 'prefix',
        allowNull: true,
      },
      nextNo: {
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
