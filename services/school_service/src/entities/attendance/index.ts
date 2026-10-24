import type { Sequelize } from 'sequelize'
import { initAtndAttendanceTypeEntity } from './atnd_attendance_type/atnd_attendance_type.entity'
import { initAtndStudentAttendanceSessionEntity } from './atnd_student_attendance_session/atnd_student_attendance_session.entity'
import { initAtndStudentLeaveRequestEntity } from './atnd_student_leave_request/atnd_student_leave_request.entity'
import { initAtndStudentAttendanceEntity } from './atnd_student_attendance/atnd_student_attendance.entity'
import { initAtndStaffAttendanceEntity } from './atnd_staff_attendance/atnd_staff_attendance.entity'

export type GeneratedModels = {
  atnd_attendance_type: ReturnType<typeof initAtndAttendanceTypeEntity>;
  atnd_student_attendance_session: ReturnType<typeof initAtndStudentAttendanceSessionEntity>;
  atnd_student_leave_request: ReturnType<typeof initAtndStudentLeaveRequestEntity>;
  atnd_student_attendance: ReturnType<typeof initAtndStudentAttendanceEntity>;
  atnd_staff_attendance: ReturnType<typeof initAtndStaffAttendanceEntity>;
}

export function createGeneratedModels(sequelize: Sequelize): GeneratedModels {
  const models: GeneratedModels = {
      atnd_attendance_type: initAtndAttendanceTypeEntity(sequelize),
      atnd_student_attendance_session: initAtndStudentAttendanceSessionEntity(sequelize),
      atnd_student_leave_request: initAtndStudentLeaveRequestEntity(sequelize),
      atnd_student_attendance: initAtndStudentAttendanceEntity(sequelize),
      atnd_staff_attendance: initAtndStaffAttendanceEntity(sequelize)
  }
  return models
}

export function associateGeneratedModels(models: GeneratedModels): void {
  models.atnd_student_attendance.belongsTo(models.atnd_student_attendance_session, { as: 'studentAttendanceSession', foreignKey: 'studentAttendanceSessionId', targetKey: 'studentAttendanceSessionId', onDelete: 'CASCADE' })
  models.atnd_student_attendance_session.hasMany(models.atnd_student_attendance, { as: 'atndStudentAttendance', foreignKey: 'studentAttendanceSessionId', sourceKey: 'studentAttendanceSessionId', onDelete: 'CASCADE' })
  models.atnd_student_attendance.belongsTo(models.atnd_attendance_type, { as: 'attendanceTypeCode', foreignKey: 'attendanceTypeCode', targetKey: 'attendanceTypeCode', onUpdate: 'CASCADE' })
  models.atnd_attendance_type.hasMany(models.atnd_student_attendance, { as: 'atndStudentAttendance', foreignKey: 'attendanceTypeCode', sourceKey: 'attendanceTypeCode', onUpdate: 'CASCADE' })
  models.atnd_student_attendance.belongsTo(models.atnd_student_leave_request, { as: 'studentLeaveRequest', foreignKey: 'studentLeaveRequestId', targetKey: 'studentLeaveRequestId' })
  models.atnd_student_leave_request.hasMany(models.atnd_student_attendance, { as: 'atndStudentAttendance', foreignKey: 'studentLeaveRequestId', sourceKey: 'studentLeaveRequestId' })
  models.atnd_staff_attendance.belongsTo(models.atnd_attendance_type, { as: 'attendanceTypeCode', foreignKey: 'attendanceTypeCode', targetKey: 'attendanceTypeCode', onUpdate: 'CASCADE' })
  models.atnd_attendance_type.hasMany(models.atnd_staff_attendance, { as: 'atndStaffAttendance', foreignKey: 'attendanceTypeCode', sourceKey: 'attendanceTypeCode', onUpdate: 'CASCADE' })
}
