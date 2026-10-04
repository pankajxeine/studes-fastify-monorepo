import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type PackageDiscountsAttributes = {
  id?: number
  packageId?: number | null
  startDate?: Date | null
  endDate?: Date | null
  discount?: number | null
  duration?: number | null
  createdAt?: Date | null
  updatedAt?: Date | null
}

export type PackageDiscountsCreationAttributes = Optional<PackageDiscountsAttributes, "id" | "packageId" | "startDate" | "endDate" | "discount" | "duration" | "createdAt" | "updatedAt">

export class PackageDiscountsEntity
  extends Model<PackageDiscountsAttributes, PackageDiscountsCreationAttributes>
  implements PackageDiscountsAttributes
{
  declare id: number
  declare packageId: number | null
  declare startDate: Date | null
  declare endDate: Date | null
  declare discount: number | null
  declare duration: number | null
  declare createdAt: Date | null
  declare updatedAt: Date | null
}

export function initPackageDiscountsEntity(sequelize: Sequelize): typeof PackageDiscountsEntity {
  PackageDiscountsEntity.init(
    {
      id: {
        type: DataTypes.INTEGER,
        field: 'id',
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      packageId: {
        type: DataTypes.INTEGER,
        field: 'package_id',
        allowNull: true,
      },
      startDate: {
        type: DataTypes.DATEONLY,
        field: 'start_date',
        allowNull: true,
      },
      endDate: {
        type: DataTypes.DATEONLY,
        field: 'end_date',
        allowNull: true,
      },
      discount: {
        type: DataTypes.DOUBLE,
        field: 'discount',
        allowNull: true,
      },
      duration: {
        type: DataTypes.INTEGER,
        field: 'duration',
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
      tableName: 'package_discounts',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: false,
      indexes: [
      { unique: true, fields: ['id'] }
      ]
    }
  )
  return PackageDiscountsEntity
}
