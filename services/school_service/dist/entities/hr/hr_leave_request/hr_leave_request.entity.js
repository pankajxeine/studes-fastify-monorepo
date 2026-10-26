"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HrLeaveRequestEntity = void 0;
exports.initHrLeaveRequestEntity = initHrLeaveRequestEntity;
const sequelize_1 = require("sequelize");
class HrLeaveRequestEntity extends sequelize_1.Model {
}
exports.HrLeaveRequestEntity = HrLeaveRequestEntity;
function initHrLeaveRequestEntity(sequelize) {
    HrLeaveRequestEntity.init({
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
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table ('hr_leave_request')"),
        },
        leaveRequestId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'leave_request_id',
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
        leaveTypeCode: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'leave_type_code',
            allowNull: false,
            references: { model: 'hr_leave_type', key: 'leave_type_code' },
            onUpdate: 'CASCADE',
        },
        startDate: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'start_date',
            allowNull: false,
        },
        endDate: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'end_date',
            allowNull: false,
        },
        isHalfDay: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'is_half_day',
            allowNull: false,
            defaultValue: false,
        },
        halfDaySession: {
            type: sequelize_1.DataTypes.STRING(2),
            field: 'half_day_session',
            allowNull: true,
        },
        leaveDays: {
            type: sequelize_1.DataTypes.DECIMAL(5, 1),
            field: 'leave_days',
            allowNull: false,
        },
        reason: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'reason',
            allowNull: false,
        },
        contactDuringLeave: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'contact_during_leave',
            allowNull: true,
        },
        substituteStaffId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'substitute_staff_id',
            allowNull: true,
            references: { model: 'hr_staff', key: 'staff_id' },
        },
        fileId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'file_id',
            allowNull: true,
            references: { model: 'docs_file', key: 'file_id' },
        },
        status: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'status',
            allowNull: false,
            defaultValue: "pending",
        },
        appliedAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'applied_at',
            allowNull: false,
            defaultValue: sequelize_1.DataTypes.NOW,
        },
        approvedByUserId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'approved_by_user_id',
            allowNull: true,
            references: { model: 'iam_app_user', key: 'app_user_id' },
        },
        decidedAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'decided_at',
            allowNull: true,
        },
        decisionNote: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'decision_note',
            allowNull: true,
        },
        cancelledAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'cancelled_at',
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
        },
        leavePeriod: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'leave_period',
            allowNull: true,
            autoIncrement: true,
        }
    }, {
        sequelize,
        tableName: 'hr_leave_request',
        timestamps: true,
        underscored: true,
        freezeTableName: true
    });
    return HrLeaveRequestEntity;
}
