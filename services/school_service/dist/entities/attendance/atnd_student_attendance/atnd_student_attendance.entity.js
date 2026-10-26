"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AtndStudentAttendanceEntity = void 0;
exports.initAtndStudentAttendanceEntity = initAtndStudentAttendanceEntity;
const sequelize_1 = require("sequelize");
class AtndStudentAttendanceEntity extends sequelize_1.Model {
}
exports.AtndStudentAttendanceEntity = AtndStudentAttendanceEntity;
function initAtndStudentAttendanceEntity(sequelize) {
    AtndStudentAttendanceEntity.init({
        id: {
            type: sequelize_1.DataTypes.BIGINT,
            field: 'id',
            allowNull: true,
            primaryKey: true,
            autoIncrement: true,
        },
        publicId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'public_id',
            allowNull: false,
            unique: true,
            defaultValue: sequelize_1.Sequelize.literal("gen_random_uuid ()"),
        },
        recordCode: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'record_code',
            allowNull: false,
            unique: true,
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table ('atnd_student_attendance')"),
        },
        studentAttendanceId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'student_attendance_id',
            allowNull: false,
            unique: true,
            defaultValue: sequelize_1.Sequelize.literal("gen_random_uuid ()"),
        },
        studentAttendanceSessionId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'student_attendance_session_id',
            allowNull: false,
            references: { model: 'atnd_student_attendance_session', key: 'student_attendance_session_id' },
            onDelete: 'CASCADE',
        },
        studentId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'student_id',
            allowNull: false,
            references: { model: 'sis_student', key: 'student_id' },
        },
        attendanceTypeCode: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'attendance_type_code',
            allowNull: false,
            references: { model: 'atnd_attendance_type', key: 'attendance_type_code' },
            onUpdate: 'CASCADE',
        },
        minutesLate: {
            type: sequelize_1.DataTypes.SMALLINT,
            field: 'minutes_late',
            allowNull: true,
        },
        studentLeaveRequestId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'student_leave_request_id',
            allowNull: true,
            references: { model: 'atnd_student_leave_request', key: 'student_leave_request_id' },
        },
        remarks: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'remarks',
            allowNull: true,
        },
        markedByUserId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'marked_by_user_id',
            allowNull: true,
            references: { model: 'iam_app_user', key: 'app_user_id' },
        },
        markedAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'marked_at',
            allowNull: false,
            defaultValue: sequelize_1.DataTypes.NOW,
        },
        correctionReason: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'correction_reason',
            allowNull: true,
        },
        correctedAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'corrected_at',
            allowNull: true,
        },
        createdAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'created_at',
            allowNull: false,
            defaultValue: sequelize_1.DataTypes.NOW,
        },
        createdBy: {
            type: sequelize_1.DataTypes.UUID,
            field: 'created_by',
            allowNull: true,
        },
        updatedAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'updated_at',
            allowNull: false,
            defaultValue: sequelize_1.DataTypes.NOW,
        },
        updatedBy: {
            type: sequelize_1.DataTypes.UUID,
            field: 'updated_by',
            allowNull: true,
        }
    }, {
        sequelize,
        tableName: 'atnd_student_attendance',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        indexes: [
            { unique: true, fields: ['student_attendance_session_id', 'student_id'] }
        ]
    });
    return AtndStudentAttendanceEntity;
}
