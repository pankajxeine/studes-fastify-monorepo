import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type AtndStudentAttendanceAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  studentAttendanceId?: string
  studentAttendanceSessionId: string
  studentId: string
  attendanceTypeCode: string
  minutesLate?: number | null
  studentLeaveRequestId?: string | null
  remarks?: string | null
  markedByUserId?: string | null
  markedAt?: Date
  correctionReason?: string | null
  correctedAt?: Date | null
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type AtndStudentAttendanceCreationAttributes = Optional<AtndStudentAttendanceAttributes, "id" | "publicId" | "recordCode" | "studentAttendanceId" | "minutesLate" | "studentLeaveRequestId" | "remarks" | "markedByUserId" | "markedAt" | "correctionReason" | "correctedAt" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class AtndStudentAttendanceEntity
  extends Model<AtndStudentAttendanceAttributes, AtndStudentAttendanceCreationAttributes>
  implements AtndStudentAttendanceAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare studentAttendanceId: string
  declare studentAttendanceSessionId: string
  declare studentId: string
  declare attendanceTypeCode: string
  declare minutesLate: number | null
  declare studentLeaveRequestId: string | null
  declare remarks: string | null
  declare markedByUserId: string | null
  declare markedAt: Date
  declare correctionReason: string | null
  declare correctedAt: Date | null
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initAtndStudentAttendanceEntity(sequelize: Sequelize): typeof AtndStudentAttendanceEntity {
  AtndStudentAttendanceEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('atnd_student_attendance')"),
      },
      studentAttendanceId: {
        type: DataTypes.TEXT,
        field: 'student_attendance_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      studentAttendanceSessionId: {
        type: DataTypes.TEXT,
        field: 'student_attendance_session_id',
        allowNull: false,
        references: { model: 'atnd_student_attendance_session', key: 'student_attendance_session_id' },
        onDelete: 'CASCADE',
      },
      studentId: {
        type: DataTypes.TEXT,
        field: 'student_id',
        allowNull: false,
        references: { model: 'sis_student', key: 'student_id' },
      },
      attendanceTypeCode: {
        type: DataTypes.TEXT,
        field: 'attendance_type_code',
        allowNull: false,
        references: { model: 'atnd_attendance_type', key: 'attendance_type_code' },
        onUpdate: 'CASCADE',
      },
      minutesLate: {
        type: DataTypes.SMALLINT,
        field: 'minutes_late',
        allowNull: true,
      },
      studentLeaveRequestId: {
        type: DataTypes.TEXT,
        field: 'student_leave_request_id',
        allowNull: true,
        references: { model: 'atnd_student_leave_request', key: 'student_leave_request_id' },
      },
      remarks: {
        type: DataTypes.TEXT,
        field: 'remarks',
        allowNull: true,
      },
      markedByUserId: {
        type: DataTypes.TEXT,
        field: 'marked_by_user_id',
        allowNull: true,
        references: { model: 'iam_app_user', key: 'app_user_id' },
      },
      markedAt: {
        type: DataTypes.DATE,
        field: 'marked_at',
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      correctionReason: {
        type: DataTypes.TEXT,
        field: 'correction_reason',
        allowNull: true,
      },
      correctedAt: {
        type: DataTypes.DATE,
        field: 'corrected_at',
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
      tableName: 'atnd_student_attendance',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['student_attendance_session_id', 'student_id'] }
      ]
    }
  )
  return AtndStudentAttendanceEntity
}
