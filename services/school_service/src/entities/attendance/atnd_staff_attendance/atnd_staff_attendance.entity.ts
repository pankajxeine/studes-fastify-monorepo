import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type AtndStaffAttendanceAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  staffAttendanceId?: string
  staffId: string
  campusId: string
  attendanceDate: string
  attendanceTypeCode: string
  checkInAt?: Date | null
  checkOutAt?: Date | null
  workedMinutes?: number | null
  captureMethod?: string
  leaveRequestId?: string | null
  markedByUserId?: string | null
  remarks?: string | null
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type AtndStaffAttendanceCreationAttributes = Optional<AtndStaffAttendanceAttributes, "id" | "publicId" | "recordCode" | "staffAttendanceId" | "checkInAt" | "checkOutAt" | "workedMinutes" | "captureMethod" | "leaveRequestId" | "markedByUserId" | "remarks" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class AtndStaffAttendanceEntity
  extends Model<AtndStaffAttendanceAttributes, AtndStaffAttendanceCreationAttributes>
  implements AtndStaffAttendanceAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare staffAttendanceId: string
  declare staffId: string
  declare campusId: string
  declare attendanceDate: string
  declare attendanceTypeCode: string
  declare checkInAt: Date | null
  declare checkOutAt: Date | null
  declare workedMinutes: number | null
  declare captureMethod: string
  declare leaveRequestId: string | null
  declare markedByUserId: string | null
  declare remarks: string | null
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initAtndStaffAttendanceEntity(sequelize: Sequelize): typeof AtndStaffAttendanceEntity {
  AtndStaffAttendanceEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('atnd_staff_attendance')"),
      },
      staffAttendanceId: {
        type: DataTypes.TEXT,
        field: 'staff_attendance_id',
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
      campusId: {
        type: DataTypes.TEXT,
        field: 'campus_id',
        allowNull: false,
        references: { model: 'org_campus', key: 'campus_id' },
      },
      attendanceDate: {
        type: DataTypes.TEXT,
        field: 'attendance_date',
        allowNull: false,
      },
      attendanceTypeCode: {
        type: DataTypes.TEXT,
        field: 'attendance_type_code',
        allowNull: false,
        references: { model: 'atnd_attendance_type', key: 'attendance_type_code' },
        onUpdate: 'CASCADE',
      },
      checkInAt: {
        type: DataTypes.DATE,
        field: 'check_in_at',
        allowNull: true,
      },
      checkOutAt: {
        type: DataTypes.DATE,
        field: 'check_out_at',
        allowNull: true,
      },
      workedMinutes: {
        type: DataTypes.INTEGER,
        field: 'worked_minutes',
        allowNull: true,
        autoIncrement: true,
      },
      captureMethod: {
        type: DataTypes.TEXT,
        field: 'capture_method',
        allowNull: false,
        defaultValue: "manual",
      },
      leaveRequestId: {
        type: DataTypes.TEXT,
        field: 'leave_request_id',
        allowNull: true,
        references: { model: 'hr_leave_request', key: 'leave_request_id' },
      },
      markedByUserId: {
        type: DataTypes.TEXT,
        field: 'marked_by_user_id',
        allowNull: true,
        references: { model: 'iam_app_user', key: 'app_user_id' },
      },
      remarks: {
        type: DataTypes.TEXT,
        field: 'remarks',
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
      }
    },
    {
      sequelize,
      tableName: 'atnd_staff_attendance',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['staff_id', 'attendance_date'] }
      ]
    }
  )
  return AtndStaffAttendanceEntity
}
