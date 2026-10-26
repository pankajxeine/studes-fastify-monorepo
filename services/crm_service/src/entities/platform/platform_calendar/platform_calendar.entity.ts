import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type PlatformCalendarAttributes = {
  recordCode?: string
  calendarId: string | null
  calendarCode: string
  name: string
  timezone: string
  is_24x7?: string
  businessHours?: unknown | null
  createdAt?: Date
  updatedAt?: Date
}

export type PlatformCalendarCreationAttributes = Optional<PlatformCalendarAttributes, "recordCode" | "is_24x7" | "businessHours" | "createdAt" | "updatedAt">

export class PlatformCalendarEntity
  extends Model<PlatformCalendarAttributes, PlatformCalendarCreationAttributes>
  implements PlatformCalendarAttributes
{
  declare recordCode: string
  declare calendarId: string | null
  declare calendarCode: string
  declare name: string
  declare timezone: string
  declare is_24x7: string
  declare businessHours: unknown | null
  declare createdAt: Date
  declare updatedAt: Date
}

export function initPlatformCalendarEntity(sequelize: Sequelize): typeof PlatformCalendarEntity {
  PlatformCalendarEntity.init(
    {
      recordCode: {
        type: DataTypes.TEXT,
        field: 'record_code',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('platform_calendar')"),
      },
      calendarId: {
        type: DataTypes.TEXT,
        field: 'calendar_id',
        allowNull: true,
        primaryKey: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      calendarCode: {
        type: DataTypes.TEXT,
        field: 'calendar_code',
        allowNull: false,
      },
      name: {
        type: DataTypes.TEXT,
        field: 'name',
        allowNull: false,
      },
      timezone: {
        type: DataTypes.TEXT,
        field: 'timezone',
        allowNull: false,
      },
      is_24x7: {
        type: DataTypes.TEXT,
        field: 'is_24x7',
        allowNull: false,
        defaultValue: false,
      },
      businessHours: {
        type: DataTypes.JSONB,
        field: 'business_hours',
        allowNull: true,
      },
      createdAt: {
        type: DataTypes.DATE,
        field: 'created_at',
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: 'updated_at',
        allowNull: false,
        defaultValue: DataTypes.NOW,
      }
    },
    {
      sequelize,
      tableName: 'platform_calendar',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['calendar_code'] }
      ]
    }
  )
  return PlatformCalendarEntity
}
