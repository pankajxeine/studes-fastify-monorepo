import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type AtndStudentAttendanceSessionAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  studentAttendanceSessionId?: string
  campusId: string
  sectionId?: string | null
  courseOfferingId?: string | null
  sessionDate: string
  periodId?: string | null
  timetableEntryId?: string | null
  takenByStaffId: string
  status?: string
  openedAt?: Date
  submittedAt?: Date | null
  lockedAt?: Date | null
  lockedByUserId?: string | null
  markedCount?: number
  presentCount?: number
  absentCount?: number
  lateCount?: number
  excusedCount?: number
  remarks?: string | null
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type AtndStudentAttendanceSessionCreationAttributes = Optional<AtndStudentAttendanceSessionAttributes, "id" | "publicId" | "recordCode" | "studentAttendanceSessionId" | "sectionId" | "courseOfferingId" | "periodId" | "timetableEntryId" | "status" | "openedAt" | "submittedAt" | "lockedAt" | "lockedByUserId" | "markedCount" | "presentCount" | "absentCount" | "lateCount" | "excusedCount" | "remarks" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class AtndStudentAttendanceSessionEntity
  extends Model<AtndStudentAttendanceSessionAttributes, AtndStudentAttendanceSessionCreationAttributes>
  implements AtndStudentAttendanceSessionAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare studentAttendanceSessionId: string
  declare campusId: string
  declare sectionId: string | null
  declare courseOfferingId: string | null
  declare sessionDate: string
  declare periodId: string | null
  declare timetableEntryId: string | null
  declare takenByStaffId: string
  declare status: string
  declare openedAt: Date
  declare submittedAt: Date | null
  declare lockedAt: Date | null
  declare lockedByUserId: string | null
  declare markedCount: number
  declare presentCount: number
  declare absentCount: number
  declare lateCount: number
  declare excusedCount: number
  declare remarks: string | null
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initAtndStudentAttendanceSessionEntity(sequelize: Sequelize): typeof AtndStudentAttendanceSessionEntity {
  AtndStudentAttendanceSessionEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table (\r\n        'atnd_student_attendance_session'\r\n    )"),
      },
      studentAttendanceSessionId: {
        type: DataTypes.TEXT,
        field: 'student_attendance_session_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      campusId: {
        type: DataTypes.TEXT,
        field: 'campus_id',
        allowNull: false,
        references: { model: 'org_campus', key: 'campus_id' },
      },
      sectionId: {
        type: DataTypes.TEXT,
        field: 'section_id',
        allowNull: true,
        references: { model: 'acad_section', key: 'section_id' },
      },
      courseOfferingId: {
        type: DataTypes.TEXT,
        field: 'course_offering_id',
        allowNull: true,
        references: { model: 'acad_course_offering', key: 'course_offering_id' },
      },
      sessionDate: {
        type: DataTypes.TEXT,
        field: 'session_date',
        allowNull: false,
      },
      periodId: {
        type: DataTypes.TEXT,
        field: 'period_id',
        allowNull: true,
        references: { model: 'ttbl_period', key: 'period_id' },
      },
      timetableEntryId: {
        type: DataTypes.TEXT,
        field: 'timetable_entry_id',
        allowNull: true,
        references: { model: 'ttbl_timetable_entry', key: 'timetable_entry_id' },
      },
      takenByStaffId: {
        type: DataTypes.TEXT,
        field: 'taken_by_staff_id',
        allowNull: false,
        references: { model: 'hr_staff', key: 'staff_id' },
      },
      status: {
        type: DataTypes.TEXT,
        field: 'status',
        allowNull: false,
        defaultValue: "open",
      },
      openedAt: {
        type: DataTypes.DATE,
        field: 'opened_at',
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      submittedAt: {
        type: DataTypes.DATE,
        field: 'submitted_at',
        allowNull: true,
      },
      lockedAt: {
        type: DataTypes.DATE,
        field: 'locked_at',
        allowNull: true,
      },
      lockedByUserId: {
        type: DataTypes.TEXT,
        field: 'locked_by_user_id',
        allowNull: true,
        references: { model: 'iam_app_user', key: 'app_user_id' },
      },
      markedCount: {
        type: DataTypes.SMALLINT,
        field: 'marked_count',
        allowNull: false,
        defaultValue: 0,
      },
      presentCount: {
        type: DataTypes.SMALLINT,
        field: 'present_count',
        allowNull: false,
        defaultValue: 0,
      },
      absentCount: {
        type: DataTypes.SMALLINT,
        field: 'absent_count',
        allowNull: false,
        defaultValue: 0,
      },
      lateCount: {
        type: DataTypes.SMALLINT,
        field: 'late_count',
        allowNull: false,
        defaultValue: 0,
      },
      excusedCount: {
        type: DataTypes.SMALLINT,
        field: 'excused_count',
        allowNull: false,
        defaultValue: 0,
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
      tableName: 'atnd_student_attendance_session',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['section_id', 'course_offering_id', 'session_date', 'period_id'] }
      ]
    }
  )
  return AtndStudentAttendanceSessionEntity
}
