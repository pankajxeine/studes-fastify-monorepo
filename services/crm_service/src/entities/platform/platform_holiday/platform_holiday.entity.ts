import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type PlatformHolidayAttributes = {
  recordCode?: string
  holidayId: string | null
  calendarId: string
  holidayDate: string
  name: string
}

export type PlatformHolidayCreationAttributes = Optional<PlatformHolidayAttributes, "recordCode">

export class PlatformHolidayEntity
  extends Model<PlatformHolidayAttributes, PlatformHolidayCreationAttributes>
  implements PlatformHolidayAttributes
{
  declare recordCode: string
  declare holidayId: string | null
  declare calendarId: string
  declare holidayDate: string
  declare name: string
}

export function initPlatformHolidayEntity(sequelize: Sequelize): typeof PlatformHolidayEntity {
  PlatformHolidayEntity.init(
    {
      recordCode: {
        type: DataTypes.TEXT,
        field: 'record_code',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('platform_holiday')"),
      },
      holidayId: {
        type: DataTypes.TEXT,
        field: 'holiday_id',
        allowNull: true,
        primaryKey: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      calendarId: {
        type: DataTypes.TEXT,
        field: 'calendar_id',
        allowNull: false,
        references: { model: 'platform_calendar', key: 'calendar_id' },
        onDelete: 'CASCADE',
      },
      holidayDate: {
        type: DataTypes.TEXT,
        field: 'holiday_date',
        allowNull: false,
      },
      name: {
        type: DataTypes.TEXT,
        field: 'name',
        allowNull: false,
      }
    },
    {
      sequelize,
      tableName: 'platform_holiday',
      timestamps: false,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['calendar_id', 'holiday_date'] }
      ]
    }
  )
  return PlatformHolidayEntity
}
