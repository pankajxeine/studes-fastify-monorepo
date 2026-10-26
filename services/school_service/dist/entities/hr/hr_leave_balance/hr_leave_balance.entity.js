"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HrLeaveBalanceEntity = void 0;
exports.initHrLeaveBalanceEntity = initHrLeaveBalanceEntity;
const sequelize_1 = require("sequelize");
class HrLeaveBalanceEntity extends sequelize_1.Model {
}
exports.HrLeaveBalanceEntity = HrLeaveBalanceEntity;
function initHrLeaveBalanceEntity(sequelize) {
    HrLeaveBalanceEntity.init({
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
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table ('hr_leave_balance')"),
        },
        leaveBalanceId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'leave_balance_id',
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
        periodStartOn: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'period_start_on',
            allowNull: false,
        },
        periodEndOn: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'period_end_on',
            allowNull: false,
        },
        openingDays: {
            type: sequelize_1.DataTypes.DECIMAL(5, 1),
            field: 'opening_days',
            allowNull: false,
            defaultValue: 0,
        },
        accruedDays: {
            type: sequelize_1.DataTypes.DECIMAL(5, 1),
            field: 'accrued_days',
            allowNull: false,
            defaultValue: 0,
        },
        adjustedDays: {
            type: sequelize_1.DataTypes.DECIMAL(5, 1),
            field: 'adjusted_days',
            allowNull: false,
            defaultValue: 0,
        },
        usedDays: {
            type: sequelize_1.DataTypes.DECIMAL(5, 1),
            field: 'used_days',
            allowNull: false,
            defaultValue: 0,
        },
        availableDays: {
            type: sequelize_1.DataTypes.DECIMAL(5, 1),
            field: 'available_days',
            allowNull: true,
            autoIncrement: true,
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
        period: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'period',
            allowNull: true,
            autoIncrement: true,
        }
    }, {
        sequelize,
        tableName: 'hr_leave_balance',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        indexes: [
            { unique: true, fields: ['staff_id', 'leave_type_code', 'period_start_on'] }
        ]
    });
    return HrLeaveBalanceEntity;
}
