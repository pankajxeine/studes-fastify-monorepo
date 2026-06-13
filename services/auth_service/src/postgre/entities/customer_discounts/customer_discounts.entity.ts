import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type CustomerDiscountsAttributes = {
  id?: string | null
  customer_id?: string | null
  package_id?: string | null
  sub_id?: string | null
  discount_percentage?: string | null
  discount_duration?: string | null
  discount_used?: string | null
  created_at?: string | null
  updated_at?: string | null
}

export type CustomerDiscountsCreationAttributes = Optional<CustomerDiscountsAttributes, "id" | "customer_id" | "package_id" | "sub_id" | "discount_percentage" | "discount_duration" | "discount_used" | "created_at" | "updated_at">

export class CustomerDiscountsEntity
  extends Model<CustomerDiscountsAttributes, CustomerDiscountsCreationAttributes>
  implements CustomerDiscountsAttributes
{
  declare id: string | null
  declare customer_id: string | null
  declare package_id: string | null
  declare sub_id: string | null
  declare discount_percentage: string | null
  declare discount_duration: string | null
  declare discount_used: string | null
  declare created_at: string | null
  declare updated_at: string | null
}

export function initCustomerDiscountsEntity(sequelize: Sequelize): typeof CustomerDiscountsEntity {
  CustomerDiscountsEntity.init(
    {
      id: {
        type: DataTypes.CHAR,
        field: 'id',
        allowNull: true,
        defaultValue: null,
      },
      customer_id: {
        type: DataTypes.CHAR,
        field: 'customer_id',
        allowNull: true,
        defaultValue: null,
      },
      package_id: {
        type: DataTypes.CHAR,
        field: 'package_id',
        allowNull: true,
        defaultValue: null,
      },
      sub_id: {
        type: DataTypes.CHAR,
        field: 'sub_id',
        allowNull: true,
        defaultValue: null,
      },
      discount_percentage: {
        type: DataTypes.CHAR,
        field: 'discount_percentage',
        allowNull: true,
        defaultValue: null,
      },
      discount_duration: {
        type: DataTypes.CHAR,
        field: 'discount_duration',
        allowNull: true,
        defaultValue: null,
      },
      discount_used: {
        type: DataTypes.CHAR,
        field: 'discount_used',
        allowNull: true,
        defaultValue: null,
      },
      created_at: {
        type: DataTypes.CHAR,
        field: 'created_at',
        allowNull: true,
        defaultValue: null,
      },
      updated_at: {
        type: DataTypes.CHAR,
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
