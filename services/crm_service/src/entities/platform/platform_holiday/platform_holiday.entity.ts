import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type PlatformHolidayAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  calendarId: string
  holidayDate: string
  name: string
  UNIQUE?: string | null
}

export type PlatformHolidayCreationAttributes = Optional<PlatformHolidayAttributes, "id" | "publicId" | "recordCode" | "UNIQUE">

export class PlatformHolidayEntity
  extends Model<PlatformHolidayAttributes, PlatformHolidayCreationAttributes>
  implements PlatformHolidayAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare calendarId: string
  declare holidayDate: string
  declare name: string
  declare UNIQUE: string | null
}

export function initPlatformHolidayEntity(sequelize: Sequelize): typeof PlatformHolidayEntity {
  PlatformHolidayEntity.init(
    {
      id: {
        type: DataTypes.BIGINT,
        field: 'id',
        allowNull: true,
        primaryKey: true,
        autoIncrement: true,
      },
      publicId: {
        type: DataTypes.TEXT,
        field: 'public_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      recordCode: {
        type: DataTypes.TEXT,
        field: 'record_code',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('platform_holiday')"),
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
      },
      UNIQUE: {
        type: DataTypes.TEXT,
        field: 'UNIQUE',
        allowNull: true,
      }
    },
    {
      sequelize,
      tableName: 'platform_holiday',
      timestamps: false,
      underscored: true,
      freezeTableName: true
    }
  )
  return PlatformHolidayEntity
}
