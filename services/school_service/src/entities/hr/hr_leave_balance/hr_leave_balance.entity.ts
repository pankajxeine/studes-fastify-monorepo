import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type HrLeaveBalanceAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  leaveBalanceId?: string
  staffId: string
  leaveTypeCode: string
  periodStartOn: string
  periodEndOn: string
  openingDays?: number
  accruedDays?: number
  adjustedDays?: number
  usedDays?: number
  availableDays?: number | null
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
  period?: string | null
}

export type HrLeaveBalanceCreationAttributes = Optional<HrLeaveBalanceAttributes, "id" | "publicId" | "recordCode" | "leaveBalanceId" | "openingDays" | "accruedDays" | "adjustedDays" | "usedDays" | "availableDays" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy" | "period">

export class HrLeaveBalanceEntity
  extends Model<HrLeaveBalanceAttributes, HrLeaveBalanceCreationAttributes>
  implements HrLeaveBalanceAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare leaveBalanceId: string
  declare staffId: string
  declare leaveTypeCode: string
  declare periodStartOn: string
  declare periodEndOn: string
  declare openingDays: number
  declare accruedDays: number
  declare adjustedDays: number
  declare usedDays: number
  declare availableDays: number | null
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
  declare period: string | null
}

export function initHrLeaveBalanceEntity(sequelize: Sequelize): typeof HrLeaveBalanceEntity {
  HrLeaveBalanceEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('hr_leave_balance')"),
      },
      leaveBalanceId: {
        type: DataTypes.TEXT,
        field: 'leave_balance_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      staffId: {
        type: DataTypes.TEXT,
        field: 'staff_id',
        allowNull: false,
        references: { model: 'hr_staff', key: 'staff_id' },
      },
      leaveTypeCode: {
        type: DataTypes.TEXT,
        field: 'leave_type_code',
        allowNull: false,
        references: { model: 'hr_leave_type', key: 'leave_type_code' },
        onUpdate: 'CASCADE',
      },
      periodStartOn: {
        type: DataTypes.TEXT,
        field: 'period_start_on',
        allowNull: false,
      },
      periodEndOn: {
        type: DataTypes.TEXT,
        field: 'period_end_on',
        allowNull: false,
      },
      openingDays: {
        type: DataTypes.DECIMAL(5, 1),
        field: 'opening_days',
        allowNull: false,
        defaultValue: 0,
      },
      accruedDays: {
        type: DataTypes.DECIMAL(5, 1),
        field: 'accrued_days',
        allowNull: false,
        defaultValue: 0,
      },
      adjustedDays: {
        type: DataTypes.DECIMAL(5, 1),
        field: 'adjusted_days',
        allowNull: false,
        defaultValue: 0,
      },
      usedDays: {
        type: DataTypes.DECIMAL(5, 1),
        field: 'used_days',
        allowNull: false,
        defaultValue: 0,
      },
      availableDays: {
        type: DataTypes.DECIMAL(5, 1),
        field: 'available_days',
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
      },
      period: {
        type: DataTypes.TEXT,
        field: 'period',
        allowNull: true,
        autoIncrement: true,
      }
    },
    {
      sequelize,
      tableName: 'hr_leave_balance',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['staff_id', 'leave_type_code', 'period_start_on'] }
      ]
    }
  )
  return HrLeaveBalanceEntity
}
