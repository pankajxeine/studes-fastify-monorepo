import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type DateFormatsAttributes = {
  id?: string | number | null
  dateFormat?: string | null
}

export type DateFormatsCreationAttributes = Optional<DateFormatsAttributes, "id" | "dateFormat">

export class DateFormatsEntity
  extends Model<DateFormatsAttributes, DateFormatsCreationAttributes>
  implements DateFormatsAttributes
{
  declare id: string | number | null
  declare dateFormat: string | null
}

export function initDateFormatsEntity(sequelize: Sequelize): typeof DateFormatsEntity {
  DateFormatsEntity.init(
    {
      id: {
        type: DataTypes.BIGINT,
        field: 'id',
        allowNull: true,
        primaryKey: true,
        autoIncrement: true,
        defaultValue: "AS IDENTITY",
      },
      dateFormat: {
        type: DataTypes.STRING(255),
        field: 'date_format',
        allowNull: true,
      }
    },
    {
      sequelize,
      tableName: 'date_formats',
      timestamps: false,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['id'] },
      { unique: true, fields: ['date_format'] }
      ]
    }
  )
  return DateFormatsEntity
}
