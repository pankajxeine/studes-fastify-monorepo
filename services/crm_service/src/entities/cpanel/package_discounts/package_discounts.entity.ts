import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type PackageDiscountsAttributes = {
  id?: string | number | null
  packageId?: number | null
  startDate?: Date | null
  endDate?: Date | null
  discount?: number | null
  duration?: number | null
  createdAt?: Date
  updatedAt?: Date
}

export type PackageDiscountsCreationAttributes = Optional<PackageDiscountsAttributes, "id" | "packageId" | "startDate" | "endDate" | "discount" | "duration" | "createdAt" | "updatedAt">

export class PackageDiscountsEntity
  extends Model<PackageDiscountsAttributes, PackageDiscountsCreationAttributes>
  implements PackageDiscountsAttributes
{
  declare id: string | number | null
  declare packageId: number | null
  declare startDate: Date | null
  declare endDate: Date | null
  declare discount: number | null
  declare duration: number | null
  declare createdAt: Date
  declare updatedAt: Date
}

export function initPackageDiscountsEntity(sequelize: Sequelize): typeof PackageDiscountsEntity {
  PackageDiscountsEntity.init(
    {
      id: {
        type: DataTypes.BIGINT,
        field: 'id',
        allowNull: true,
        primaryKey: true,
        autoIncrement: true,
        defaultValue: "AS IDENTITY",
      },
      packageId: {
        type: DataTypes.INTEGER,
        field: 'package_id',
        allowNull: true,
        references: { model: 'packages', key: 'id' },
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
      tableName: 'package_discounts',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['id'] }
      ]
    }
  )
  return PackageDiscountsEntity
}
