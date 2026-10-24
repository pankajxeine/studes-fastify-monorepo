import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type HrLeaveRequestAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  leaveRequestId?: string
  staffId: string
  leaveTypeCode: string
  startDate: string
  endDate: string
  isHalfDay?: string
  halfDaySession?: string | null
  leaveDays: number
  reason: string
  contactDuringLeave?: string | null
  substituteStaffId?: string | null
  fileId?: string | null
  status?: string
  appliedAt?: Date
  approvedByUserId?: string | null
  decidedAt?: Date | null
  decisionNote?: string | null
  cancelledAt?: Date | null
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
  leavePeriod?: string | null
}

export type HrLeaveRequestCreationAttributes = Optional<HrLeaveRequestAttributes, "id" | "publicId" | "recordCode" | "leaveRequestId" | "isHalfDay" | "halfDaySession" | "contactDuringLeave" | "substituteStaffId" | "fileId" | "status" | "appliedAt" | "approvedByUserId" | "decidedAt" | "decisionNote" | "cancelledAt" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy" | "leavePeriod">

export class HrLeaveRequestEntity
  extends Model<HrLeaveRequestAttributes, HrLeaveRequestCreationAttributes>
  implements HrLeaveRequestAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare leaveRequestId: string
  declare staffId: string
  declare leaveTypeCode: string
  declare startDate: string
  declare endDate: string
  declare isHalfDay: string
  declare halfDaySession: string | null
  declare leaveDays: number
  declare reason: string
  declare contactDuringLeave: string | null
  declare substituteStaffId: string | null
  declare fileId: string | null
  declare status: string
  declare appliedAt: Date
  declare approvedByUserId: string | null
  declare decidedAt: Date | null
  declare decisionNote: string | null
  declare cancelledAt: Date | null
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
  declare leavePeriod: string | null
}

export function initHrLeaveRequestEntity(sequelize: Sequelize): typeof HrLeaveRequestEntity {
  HrLeaveRequestEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('hr_leave_request')"),
      },
      leaveRequestId: {
        type: DataTypes.TEXT,
        field: 'leave_request_id',
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
      startDate: {
        type: DataTypes.TEXT,
        field: 'start_date',
        allowNull: false,
      },
      endDate: {
        type: DataTypes.TEXT,
        field: 'end_date',
        allowNull: false,
      },
      isHalfDay: {
        type: DataTypes.TEXT,
        field: 'is_half_day',
        allowNull: false,
        defaultValue: false,
      },
      halfDaySession: {
        type: DataTypes.STRING(2),
        field: 'half_day_session',
        allowNull: true,
      },
      leaveDays: {
        type: DataTypes.DECIMAL(5, 1),
        field: 'leave_days',
        allowNull: false,
      },
      reason: {
        type: DataTypes.TEXT,
        field: 'reason',
        allowNull: false,
      },
      contactDuringLeave: {
        type: DataTypes.TEXT,
        field: 'contact_during_leave',
        allowNull: true,
      },
      substituteStaffId: {
        type: DataTypes.TEXT,
        field: 'substitute_staff_id',
        allowNull: true,
        references: { model: 'hr_staff', key: 'staff_id' },
      },
      fileId: {
        type: DataTypes.TEXT,
        field: 'file_id',
        allowNull: true,
        references: { model: 'docs_file', key: 'file_id' },
      },
      status: {
        type: DataTypes.TEXT,
        field: 'status',
        allowNull: false,
        defaultValue: "pending",
      },
      appliedAt: {
        type: DataTypes.DATE,
        field: 'applied_at',
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      approvedByUserId: {
        type: DataTypes.TEXT,
        field: 'approved_by_user_id',
        allowNull: true,
        references: { model: 'iam_app_user', key: 'app_user_id' },
      },
      decidedAt: {
        type: DataTypes.DATE,
        field: 'decided_at',
        allowNull: true,
      },
      decisionNote: {
        type: DataTypes.TEXT,
        field: 'decision_note',
        allowNull: true,
      },
      cancelledAt: {
        type: DataTypes.DATE,
        field: 'cancelled_at',
        allowNull: true,
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
      leavePeriod: {
        type: DataTypes.TEXT,
        field: 'leave_period',
        allowNull: true,
        autoIncrement: true,
      }
    },
    {
      sequelize,
      tableName: 'hr_leave_request',
      timestamps: true,
      underscored: true,
      freezeTableName: true
    }
  )
  return HrLeaveRequestEntity
}
