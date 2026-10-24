import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type TtblPeriodAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  periodId?: string
  bellScheduleId: string
  code: string
  name: string
  sequenceNo: number
  startTime: Date
  endTime: Date
  isBreak?: string
  durationMinutes?: number | null
  timeSpan?: number | null
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type TtblPeriodCreationAttributes = Optional<TtblPeriodAttributes, "id" | "publicId" | "recordCode" | "periodId" | "isBreak" | "durationMinutes" | "timeSpan" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class TtblPeriodEntity
  extends Model<TtblPeriodAttributes, TtblPeriodCreationAttributes>
  implements TtblPeriodAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare periodId: string
  declare bellScheduleId: string
  declare code: string
  declare name: string
  declare sequenceNo: number
  declare startTime: Date
  declare endTime: Date
  declare isBreak: string
  declare durationMinutes: number | null
  declare timeSpan: number | null
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initTtblPeriodEntity(sequelize: Sequelize): typeof TtblPeriodEntity {
  TtblPeriodEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('ttbl_period')"),
      },
      periodId: {
        type: DataTypes.TEXT,
        field: 'period_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      bellScheduleId: {
        type: DataTypes.TEXT,
        field: 'bell_schedule_id',
        allowNull: false,
        references: { model: 'ttbl_bell_schedule', key: 'bell_schedule_id' },
        onDelete: 'CASCADE',
      },
      code: {
        type: DataTypes.TEXT,
        field: 'code',
        allowNull: false,
      },
      name: {
        type: DataTypes.TEXT,
        field: 'name',
        allowNull: false,
      },
      sequenceNo: {
        type: DataTypes.SMALLINT,
        field: 'sequence_no',
        allowNull: false,
      },
      startTime: {
        type: DataTypes.TIME,
        field: 'start_time',
        allowNull: false,
      },
      endTime: {
        type: DataTypes.TIME,
        field: 'end_time',
        allowNull: false,
      },
      isBreak: {
        type: DataTypes.TEXT,
        field: 'is_break',
        allowNull: false,
        defaultValue: false,
      },
      durationMinutes: {
        type: DataTypes.INTEGER,
        field: 'duration_minutes',
        allowNull: true,
        autoIncrement: true,
      },
      timeSpan: {
        type: DataTypes.INTEGER,
        field: 'time_span',
        allowNull: true,
        autoIncrement: true,
      },
      createdAt: {
        type: DataTypes.DATE,
        field: 'created_at',
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      createdBy: {
        type: DataTypes.UUID,
        field: 'created_by',
        allowNull: true,
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: 'updated_at',
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      updatedBy: {
        type: DataTypes.UUID,
        field: 'updated_by',
        allowNull: true,
      }
    },
    {
      sequelize,
      tableName: 'ttbl_period',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['bell_schedule_id', 'code'] },
      { unique: true, fields: ['bell_schedule_id', 'sequence_no'] }
      ]
    }
  )
  return TtblPeriodEntity
}
