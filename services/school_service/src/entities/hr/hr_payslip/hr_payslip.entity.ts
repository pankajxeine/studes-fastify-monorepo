import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type HrPayslipAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  payslipId?: string
  payrollRunId: string
  staffId: string
  staffSalaryAssignmentId?: string | null
  payslipNo: string
  paidDays: number
  unpaidLeaveDays?: number
  grossAmount?: string
  deductionAmount?: string
  netAmount?: number | null
  paymentReference?: string | null
  fileId?: string | null
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type HrPayslipCreationAttributes = Optional<HrPayslipAttributes, "id" | "publicId" | "recordCode" | "payslipId" | "staffSalaryAssignmentId" | "unpaidLeaveDays" | "grossAmount" | "deductionAmount" | "netAmount" | "paymentReference" | "fileId" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class HrPayslipEntity
  extends Model<HrPayslipAttributes, HrPayslipCreationAttributes>
  implements HrPayslipAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare payslipId: string
  declare payrollRunId: string
  declare staffId: string
  declare staffSalaryAssignmentId: string | null
  declare payslipNo: string
  declare paidDays: number
  declare unpaidLeaveDays: number
  declare grossAmount: string
  declare deductionAmount: string
  declare netAmount: number | null
  declare paymentReference: string | null
  declare fileId: string | null
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initHrPayslipEntity(sequelize: Sequelize): typeof HrPayslipEntity {
  HrPayslipEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('hr_payslip')"),
      },
      payslipId: {
        type: DataTypes.TEXT,
        field: 'payslip_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      payrollRunId: {
        type: DataTypes.TEXT,
        field: 'payroll_run_id',
        allowNull: false,
        references: { model: 'hr_payroll_run', key: 'payroll_run_id' },
      },
      staffId: {
        type: DataTypes.TEXT,
        field: 'staff_id',
        allowNull: false,
        references: { model: 'hr_staff', key: 'staff_id' },
      },
      staffSalaryAssignmentId: {
        type: DataTypes.TEXT,
        field: 'staff_salary_assignment_id',
        allowNull: true,
        references: { model: 'hr_staff_salary_assignment', key: 'staff_salary_assignment_id' },
      },
      payslipNo: {
        type: DataTypes.STRING(30),
        field: 'payslip_no',
        allowNull: false,
      },
      paidDays: {
        type: DataTypes.DECIMAL(4, 1),
        field: 'paid_days',
        allowNull: false,
      },
      unpaidLeaveDays: {
        type: DataTypes.DECIMAL(4, 1),
        field: 'unpaid_leave_days',
        allowNull: false,
        defaultValue: 0,
      },
      grossAmount: {
        type: DataTypes.TEXT,
        field: 'gross_amount',
        allowNull: false,
        defaultValue: 0,
      },
      deductionAmount: {
        type: DataTypes.TEXT,
        field: 'deduction_amount',
        allowNull: false,
        defaultValue: 0,
      },
      netAmount: {
        type: DataTypes.DECIMAL(12, 2),
        field: 'net_amount',
        allowNull: true,
        autoIncrement: true,
      },
      paymentReference: {
        type: DataTypes.STRING(40),
        field: 'payment_reference',
        allowNull: true,
      },
      fileId: {
        type: DataTypes.TEXT,
        field: 'file_id',
        allowNull: true,
        references: { model: 'docs_file', key: 'file_id' },
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
      tableName: 'hr_payslip',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['payslip_no'] },
      { unique: true, fields: ['payroll_run_id', 'staff_id'] }
      ]
    }
  )
  return HrPayslipEntity
}
