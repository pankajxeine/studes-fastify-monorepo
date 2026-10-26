"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createGeneratedModels = createGeneratedModels;
exports.associateGeneratedModels = associateGeneratedModels;
const atnd_attendance_type_entity_1 = require("./atnd_attendance_type/atnd_attendance_type.entity");
const atnd_student_attendance_session_entity_1 = require("./atnd_student_attendance_session/atnd_student_attendance_session.entity");
const atnd_student_leave_request_entity_1 = require("./atnd_student_leave_request/atnd_student_leave_request.entity");
const atnd_student_attendance_entity_1 = require("./atnd_student_attendance/atnd_student_attendance.entity");
const atnd_staff_attendance_entity_1 = require("./atnd_staff_attendance/atnd_staff_attendance.entity");
function createGeneratedModels(sequelize) {
    const models = {
        atnd_attendance_type: (0, atnd_attendance_type_entity_1.initAtndAttendanceTypeEntity)(sequelize),
        atnd_student_attendance_session: (0, atnd_student_attendance_session_entity_1.initAtndStudentAttendanceSessionEntity)(sequelize),
        atnd_student_leave_request: (0, atnd_student_leave_request_entity_1.initAtndStudentLeaveRequestEntity)(sequelize),
        atnd_student_attendance: (0, atnd_student_attendance_entity_1.initAtndStudentAttendanceEntity)(sequelize),
        atnd_staff_attendance: (0, atnd_staff_attendance_entity_1.initAtndStaffAttendanceEntity)(sequelize)
    };
    return models;
}
function associateGeneratedModels(models) {
    models.atnd_student_attendance.belongsTo(models.atnd_student_attendance_session, { as: 'studentAttendanceSession', foreignKey: 'studentAttendanceSessionId', targetKey: 'studentAttendanceSessionId', onDelete: 'CASCADE' });
    models.atnd_student_attendance_session.hasMany(models.atnd_student_attendance, { as: 'atndStudentAttendance', foreignKey: 'studentAttendanceSessionId', sourceKey: 'studentAttendanceSessionId', onDelete: 'CASCADE' });
    models.atnd_student_attendance.belongsTo(models.atnd_attendance_type, { as: 'attendanceTypeCode', foreignKey: 'attendanceTypeCode', targetKey: 'attendanceTypeCode', onUpdate: 'CASCADE' });
    models.atnd_attendance_type.hasMany(models.atnd_student_attendance, { as: 'atndStudentAttendance', foreignKey: 'attendanceTypeCode', sourceKey: 'attendanceTypeCode', onUpdate: 'CASCADE' });
    models.atnd_student_attendance.belongsTo(models.atnd_student_leave_request, { as: 'studentLeaveRequest', foreignKey: 'studentLeaveRequestId', targetKey: 'studentLeaveRequestId' });
    models.atnd_student_leave_request.hasMany(models.atnd_student_attendance, { as: 'atndStudentAttendance', foreignKey: 'studentLeaveRequestId', sourceKey: 'studentLeaveRequestId' });
    models.atnd_staff_attendance.belongsTo(models.atnd_attendance_type, { as: 'attendanceTypeCode', foreignKey: 'attendanceTypeCode', targetKey: 'attendanceTypeCode', onUpdate: 'CASCADE' });
    models.atnd_attendance_type.hasMany(models.atnd_staff_attendance, { as: 'atndStaffAttendance', foreignKey: 'attendanceTypeCode', sourceKey: 'attendanceTypeCode', onUpdate: 'CASCADE' });
}
