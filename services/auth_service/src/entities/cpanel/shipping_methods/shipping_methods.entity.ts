import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type ShippingMethodsAttributes = {
  id?: number
  name?: string | null
  createdAt?: Date | null
  updatedAt?: Date | null
}

export type ShippingMethodsCreationAttributes = Optional<ShippingMethodsAttributes, "id" | "name" | "createdAt" | "updatedAt">

export class ShippingMethodsEntity
  extends Model<ShippingMethodsAttributes, ShippingMethodsCreationAttributes>
  implements ShippingMethodsAttributes
{
  declare id: number
  declare name: string | null
  declare createdAt: Date | null
  declare updatedAt: Date | null
}

export function initShippingMethodsEntity(sequelize: Sequelize): typeof ShippingMethodsEntity {
  ShippingMethodsEntity.init(
    {
      id: {
        type: DataTypes.INTEGER,
        field: 'id',
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING(50),
        field: 'name',
        allowNull: true,
      },
      createdAt: {
        type: DataTypes.DATE,
        field: 'created_at',
        allowNull: true,
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: 'updated_at',
        allowNull: true,
      }
    },
    {
      sequelize,
      tableName: 'shipping_methods',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: false,
      indexes: [
      { unique: true, fields: ['id'] }
      ]
    }
  )
  return ShippingMethodsEntity
}
