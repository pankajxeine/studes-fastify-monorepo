"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AtndStaffAttendanceEntity = void 0;
exports.initAtndStaffAttendanceEntity = initAtndStaffAttendanceEntity;
const sequelize_1 = require("sequelize");
class AtndStaffAttendanceEntity extends sequelize_1.Model {
}
exports.AtndStaffAttendanceEntity = AtndStaffAttendanceEntity;
function initAtndStaffAttendanceEntity(sequelize) {
    AtndStaffAttendanceEntity.init({
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
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table ('atnd_staff_attendance')"),
        },
        staffAttendanceId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'staff_attendance_id',
            allowNull: false,
            unique: true,
            defaultValue: sequelize_1.Sequelize.literal("gen_random_uuid ()"),
        },
        staffId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'staff_id',
            allowNull: false,
            references: { model: 'hr_staff', key: 'staff_id' },
        },
        campusId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'campus_id',
            allowNull: false,
            references: { model: 'org_campus', key: 'campus_id' },
        },
        attendanceDate: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'attendance_date',
            allowNull: false,
        },
        attendanceTypeCode: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'attendance_type_code',
            allowNull: false,
            references: { model: 'atnd_attendance_type', key: 'attendance_type_code' },
            onUpdate: 'CASCADE',
        },
        checkInAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'check_in_at',
            allowNull: true,
        },
        checkOutAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'check_out_at',
            allowNull: true,
        },
        workedMinutes: {
            type: sequelize_1.DataTypes.INTEGER,
            field: 'worked_minutes',
            allowNull: true,
            autoIncrement: true,
        },
        captureMethod: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'capture_method',
            allowNull: false,
            defaultValue: "manual",
        },
        leaveRequestId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'leave_request_id',
            allowNull: true,
            references: { model: 'hr_leave_request', key: 'leave_request_id' },
        },
        markedByUserId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'marked_by_user_id',
            allowNull: true,
            references: { model: 'iam_app_user', key: 'app_user_id' },
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
        tableName: 'atnd_staff_attendance',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        indexes: [
            { unique: true, fields: ['staff_id', 'attendance_date'] }
        ]
    });
    return AtndStaffAttendanceEntity;
}
