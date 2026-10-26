"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HrPayrollRunEntity = void 0;
exports.initHrPayrollRunEntity = initHrPayrollRunEntity;
const sequelize_1 = require("sequelize");
class HrPayrollRunEntity extends sequelize_1.Model {
}
exports.HrPayrollRunEntity = HrPayrollRunEntity;
function initHrPayrollRunEntity(sequelize) {
    HrPayrollRunEntity.init({
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
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table ('hr_payroll_run')"),
        },
        payrollRunId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'payroll_run_id',
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
        runCode: {
            type: sequelize_1.DataTypes.STRING(20),
            field: 'run_code',
            allowNull: false,
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
        payDate: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'pay_date',
            allowNull: false,
        },
        workingDays: {
            type: sequelize_1.DataTypes.DECIMAL(4, 1),
            field: 'working_days',
            allowNull: false,
        },
        status: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'status',
            allowNull: false,
            defaultValue: "draft",
        },
        staffCount: {
            type: sequelize_1.DataTypes.INTEGER,
            field: 'staff_count',
            allowNull: false,
            defaultValue: 0,
        },
        grossAmount: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'gross_amount',
            allowNull: false,
            defaultValue: 0,
        },
        deductionAmount: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'deduction_amount',
            allowNull: false,
            defaultValue: 0,
        },
        netAmount: {
            type: sequelize_1.DataTypes.DECIMAL(12, 2),
            field: 'net_amount',
            allowNull: true,
            autoIncrement: true,
        },
        processedByUserId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'processed_by_user_id',
            allowNull: true,
            references: { model: 'iam_app_user', key: 'app_user_id' },
        },
        processedAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'processed_at',
            allowNull: true,
        },
        approvedByUserId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'approved_by_user_id',
            allowNull: true,
            references: { model: 'iam_app_user', key: 'app_user_id' },
        },
        approvedAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'approved_at',
            allowNull: true,
        },
        paidAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'paid_at',
            allowNull: true,
        },
        cancelledAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'cancelled_at',
            allowNull: true,
        },
        notes: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'notes',
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
        tableName: 'hr_payroll_run',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        indexes: [
            { unique: true, fields: ['run_code'] }
        ]
    });
    return HrPayrollRunEntity;
}
