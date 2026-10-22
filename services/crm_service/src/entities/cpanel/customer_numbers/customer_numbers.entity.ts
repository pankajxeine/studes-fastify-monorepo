import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type CustomerNumbersAttributes = {
  id?: string | number | null
  module?: string | null
  prefix?: string | null
  nextNo?: number | null
  createdAt?: Date
  updatedAt?: Date
}

export type CustomerNumbersCreationAttributes = Optional<CustomerNumbersAttributes, "id" | "module" | "prefix" | "nextNo" | "createdAt" | "updatedAt">

export class CustomerNumbersEntity
  extends Model<CustomerNumbersAttributes, CustomerNumbersCreationAttributes>
  implements CustomerNumbersAttributes
{
  declare id: string | number | null
  declare module: string | null
  declare prefix: string | null
  declare nextNo: number | null
  declare createdAt: Date
  declare updatedAt: Date
}

export function initCustomerNumbersEntity(sequelize: Sequelize): typeof CustomerNumbersEntity {
  CustomerNumbersEntity.init(
    {
      id: {
        type: DataTypes.BIGINT,
        field: 'id',
        allowNull: true,
        primaryKey: true,
        autoIncrement: true,
        defaultValue: "AS IDENTITY",
      },
      module: {
        type: DataTypes.STRING(14),
        field: 'module',
        allowNull: true,
      },
      prefix: {
        type: DataTypes.STRING(4),
        field: 'prefix',
        allowNull: true,
      },
      nextNo: {
        type: DataTypes.TEXT,
        field: 'next_no',
        allowNull: true,
      },
      createdAt: {
        type: DataTypes.DATE,
        field: 'created_at',
        allowNull: false,
        defaultValue: "DataTypes.NOW",
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: 'updated_at',
        allowNull: false,
        defaultValue: "DataTypes.NOW",
      }
    },
    {
      sequelize,
      tableName: 'customer_numbers',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['id'] }
      ]
    }
  )
  return CustomerNumbersEntity
}
