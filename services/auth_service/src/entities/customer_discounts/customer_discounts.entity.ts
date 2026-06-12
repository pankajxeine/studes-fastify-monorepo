import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type CustomerDiscountsAttributes = {
  id?: number
  customer_id?: number | null
  package_id?: number | null
  sub_id?: number | null
  discount_percentage?: number | null
  discount_duration?: number | null
  discount_used?: number | null
  created_at?: Date | null
  updated_at?: Date | null
}

export type CustomerDiscountsCreationAttributes = Optional<CustomerDiscountsAttributes, "id" | "customer_id" | "package_id" | "sub_id" | "discount_percentage" | "discount_duration" | "discount_used" | "created_at" | "updated_at">

export class CustomerDiscountsEntity
  extends Model<CustomerDiscountsAttributes, CustomerDiscountsCreationAttributes>
  implements CustomerDiscountsAttributes
{
  declare id: number
  declare customer_id: number | null
  declare package_id: number | null
  declare sub_id: number | null
  declare discount_percentage: number | null
  declare discount_duration: number | null
  declare discount_used: number | null
  declare created_at: Date | null
  declare updated_at: Date | null
}

export function initCustomerDiscountsEntity(sequelize: Sequelize): typeof CustomerDiscountsEntity {
  CustomerDiscountsEntity.init(
    {
      id: {
        type: DataTypes.INTEGER,
        field: 'id',
        allowNull: false,
        primaryKey: true ,
        autoIncrement: true,
      },
      customer_id: {
        type: DataTypes.INTEGER,
        field: 'customer_id',
        allowNull: true,
        unique: true,
        defaultValue: null,
      },
      package_id: {
        type: DataTypes.INTEGER,
        field: 'package_id',
        allowNull: true,
        defaultValue: null,
      },
      sub_id: {
        type: DataTypes.INTEGER,
        field: 'sub_id',
        allowNull: true,
        unique: true,
        defaultValue: null,
      },
      discount_percentage: {
        type: DataTypes.DECIMAL(10,2),
        field: 'discount_percentage',
        allowNull: true,
        defaultValue: null,
      },
      discount_duration: {
        type: DataTypes.INTEGER,
        field: 'discount_duration',
        allowNull: true,
        defaultValue: null,
      },
      discount_used: {
        type: DataTypes.INTEGER,
        field: 'discount_used',
        allowNull: true,
        defaultValue: null,
      },
      created_at: {
        type: DataTypes.DATE,
        field: 'created_at',
        allowNull: true,
        defaultValue: null,
      },
      updated_at: {
        type: DataTypes.DATE,
        field: 'updated_at',
        allowNull: true,
        defaultValue: null,
      }
    },
    {
      sequelize,
      tableName: 'customer_discounts',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: true
    }
  )
  return CustomerDiscountsEntity
}
