"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HrPayslipEntity = void 0;
exports.initHrPayslipEntity = initHrPayslipEntity;
const sequelize_1 = require("sequelize");
class HrPayslipEntity extends sequelize_1.Model {
}
exports.HrPayslipEntity = HrPayslipEntity;
function initHrPayslipEntity(sequelize) {
    HrPayslipEntity.init({
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
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table ('hr_payslip')"),
        },
        payslipId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'payslip_id',
            allowNull: false,
            unique: true,
            defaultValue: sequelize_1.Sequelize.literal("gen_random_uuid ()"),
        },
        payrollRunId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'payroll_run_id',
            allowNull: false,
            references: { model: 'hr_payroll_run', key: 'payroll_run_id' },
        },
        staffId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'staff_id',
            allowNull: false,
            references: { model: 'hr_staff', key: 'staff_id' },
        },
        staffSalaryAssignmentId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'staff_salary_assignment_id',
            allowNull: true,
            references: { model: 'hr_staff_salary_assignment', key: 'staff_salary_assignment_id' },
        },
        payslipNo: {
            type: sequelize_1.DataTypes.STRING(30),
            field: 'payslip_no',
            allowNull: false,
        },
        paidDays: {
            type: sequelize_1.DataTypes.DECIMAL(4, 1),
            field: 'paid_days',
            allowNull: false,
        },
        unpaidLeaveDays: {
            type: sequelize_1.DataTypes.DECIMAL(4, 1),
            field: 'unpaid_leave_days',
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
        paymentReference: {
            type: sequelize_1.DataTypes.STRING(40),
            field: 'payment_reference',
            allowNull: true,
        },
        fileId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'file_id',
            allowNull: true,
            references: { model: 'docs_file', key: 'file_id' },
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
        tableName: 'hr_payslip',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        indexes: [
            { unique: true, fields: ['payslip_no'] },
            { unique: true, fields: ['payroll_run_id', 'staff_id'] }
        ]
    });
    return HrPayslipEntity;
}
