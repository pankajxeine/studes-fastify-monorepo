"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AtndStudentAttendanceSessionEntity = void 0;
exports.initAtndStudentAttendanceSessionEntity = initAtndStudentAttendanceSessionEntity;
const sequelize_1 = require("sequelize");
class AtndStudentAttendanceSessionEntity extends sequelize_1.Model {
}
exports.AtndStudentAttendanceSessionEntity = AtndStudentAttendanceSessionEntity;
function initAtndStudentAttendanceSessionEntity(sequelize) {
    AtndStudentAttendanceSessionEntity.init({
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
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table (\r\n        'atnd_student_attendance_session'\r\n    )"),
        },
        studentAttendanceSessionId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'student_attendance_session_id',
            allowNull: false,
            unique: true,
            defaultValue: sequelize_1.Sequelize.literal("gen_random_uuid ()"),
        },
        campusId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'campus_id',
            allowNull: false,
            references: { model: 'org_campus', key: 'campus_id' },
        },
        sectionId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'section_id',
            allowNull: true,
            references: { model: 'acad_section', key: 'section_id' },
        },
        courseOfferingId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'course_offering_id',
            allowNull: true,
            references: { model: 'acad_course_offering', key: 'course_offering_id' },
        },
        sessionDate: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'session_date',
            allowNull: false,
        },
        periodId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'period_id',
            allowNull: true,
            references: { model: 'ttbl_period', key: 'period_id' },
        },
        timetableEntryId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'timetable_entry_id',
            allowNull: true,
            references: { model: 'ttbl_timetable_entry', key: 'timetable_entry_id' },
        },
        takenByStaffId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'taken_by_staff_id',
            allowNull: false,
            references: { model: 'hr_staff', key: 'staff_id' },
        },
        status: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'status',
            allowNull: false,
            defaultValue: "open",
        },
        openedAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'opened_at',
            allowNull: false,
            defaultValue: sequelize_1.DataTypes.NOW,
        },
        submittedAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'submitted_at',
            allowNull: true,
        },
        lockedAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'locked_at',
            allowNull: true,
        },
        lockedByUserId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'locked_by_user_id',
            allowNull: true,
            references: { model: 'iam_app_user', key: 'app_user_id' },
        },
        markedCount: {
            type: sequelize_1.DataTypes.SMALLINT,
            field: 'marked_count',
            allowNull: false,
            defaultValue: 0,
        },
        presentCount: {
            type: sequelize_1.DataTypes.SMALLINT,
            field: 'present_count',
            allowNull: false,
            defaultValue: 0,
        },
        absentCount: {
            type: sequelize_1.DataTypes.SMALLINT,
            field: 'absent_count',
            allowNull: false,
            defaultValue: 0,
        },
        lateCount: {
            type: sequelize_1.DataTypes.SMALLINT,
            field: 'late_count',
            allowNull: false,
            defaultValue: 0,
        },
        excusedCount: {
            type: sequelize_1.DataTypes.SMALLINT,
            field: 'excused_count',
            allowNull: false,
            defaultValue: 0,
        },
        remarks: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'remarks',
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
        tableName: 'atnd_student_attendance_session',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        indexes: [
            { unique: true, fields: ['section_id', 'course_offering_id', 'session_date', 'period_id'] }
        ]
    });
    return AtndStudentAttendanceSessionEntity;
}
