import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type BusinessHoursAttributes = {
  id?: string | number | null
  day?: string | null
  openingTime?: string | null
  closingTime?: string | null
  updatedBy?: number | null
  updatedAt?: Date
  createdAt?: Date
}

export type BusinessHoursCreationAttributes = Optional<BusinessHoursAttributes, "id" | "day" | "openingTime" | "closingTime" | "updatedBy" | "updatedAt" | "createdAt">

export class BusinessHoursEntity
  extends Model<BusinessHoursAttributes, BusinessHoursCreationAttributes>
  implements BusinessHoursAttributes
{
  declare id: string | number | null
  declare day: string | null
  declare openingTime: string | null
  declare closingTime: string | null
  declare updatedBy: number | null
  declare updatedAt: Date
  declare createdAt: Date
}

export function initBusinessHoursEntity(sequelize: Sequelize): typeof BusinessHoursEntity {
  BusinessHoursEntity.init(
    {
      id: {
        type: DataTypes.BIGINT,
        field: 'id',
        allowNull: true,
        primaryKey: true,
        autoIncrement: true,
        defaultValue: "AS IDENTITY",
      },
      day: {
        type: DataTypes.STRING(10),
        field: 'day',
        allowNull: true,
      },
      openingTime: {
        type: DataTypes.STRING(50),
        field: 'opening_time',
        allowNull: true,
      },
      closingTime: {
        type: DataTypes.STRING(50),
        field: 'closing_time',
        allowNull: true,
      },
      updatedBy: {
        type: DataTypes.INTEGER,
        field: 'updated_by',
        allowNull: true,
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: 'updated_at',
        allowNull: false,
        defaultValue: "DataTypes.NOW",
      },
      createdAt: {
        type: DataTypes.DATE,
        field: 'created_at',
        allowNull: false,
        defaultValue: "DataTypes.NOW",
      }
    },
    {
      sequelize,
      tableName: 'business_hours',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['id'] }
      ]
    }
  )
  return BusinessHoursEntity
}
