import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type ShippingMethodsAttributes = {
  id?: string | number | null
  name?: string | null
}

export type ShippingMethodsCreationAttributes = Optional<ShippingMethodsAttributes, "id" | "name">

export class ShippingMethodsEntity
  extends Model<ShippingMethodsAttributes, ShippingMethodsCreationAttributes>
  implements ShippingMethodsAttributes
{
  declare id: string | number | null
  declare name: string | null
}

export function initShippingMethodsEntity(sequelize: Sequelize): typeof ShippingMethodsEntity {
  ShippingMethodsEntity.init(
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
        type: DataTypes.STRING(50),
        field: 'name',
        allowNull: true,
      }
    },
    {
      sequelize,
      tableName: 'shipping_methods',
      timestamps: false,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['id'] }
      ]
    }
  )
  return ShippingMethodsEntity
}
