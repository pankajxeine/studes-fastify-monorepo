import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type DateFormatsAttributes = {
  id: number
  dateFormat?: string | null
  createdAt?: Date | null
  updatedAt?: Date | null
}

export type DateFormatsCreationAttributes = Optional<DateFormatsAttributes, "dateFormat" | "createdAt" | "updatedAt">

export class DateFormatsEntity
  extends Model<DateFormatsAttributes, DateFormatsCreationAttributes>
  implements DateFormatsAttributes
{
  declare id: number
  declare dateFormat: string | null
  declare createdAt: Date | null
  declare updatedAt: Date | null
}

export function initDateFormatsEntity(sequelize: Sequelize): typeof DateFormatsEntity {
  DateFormatsEntity.init(
    {
      id: {
        type: DataTypes.INTEGER,
        field: 'id',
        allowNull: false,
        primaryKey: true,
      },
      dateFormat: {
        type: DataTypes.STRING(255),
        field: 'date_format',
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
      tableName: 'date_formats',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: false,
      indexes: [
      { unique: true, fields: ['id'] },
      { unique: true, fields: ['uq_date_formats_date_format', 'date_format'] }
      ]
    }
  )
  return DateFormatsEntity
}
