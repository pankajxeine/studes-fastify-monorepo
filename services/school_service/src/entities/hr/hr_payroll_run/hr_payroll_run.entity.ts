import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type HrPayrollRunAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  payrollRunId?: string
  campusId: string
  runCode: string
  periodStartOn: string
  periodEndOn: string
  payDate: string
  workingDays: number
  status?: string
  staffCount?: number
  grossAmount?: string
  deductionAmount?: string
  netAmount?: number | null
  processedByUserId?: string | null
  processedAt?: Date | null
  approvedByUserId?: string | null
  approvedAt?: Date | null
  paidAt?: Date | null
  cancelledAt?: Date | null
  notes?: string | null
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type HrPayrollRunCreationAttributes = Optional<HrPayrollRunAttributes, "id" | "publicId" | "recordCode" | "payrollRunId" | "status" | "staffCount" | "grossAmount" | "deductionAmount" | "netAmount" | "processedByUserId" | "processedAt" | "approvedByUserId" | "approvedAt" | "paidAt" | "cancelledAt" | "notes" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class HrPayrollRunEntity
  extends Model<HrPayrollRunAttributes, HrPayrollRunCreationAttributes>
  implements HrPayrollRunAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare payrollRunId: string
  declare campusId: string
  declare runCode: string
  declare periodStartOn: string
  declare periodEndOn: string
  declare payDate: string
  declare workingDays: number
  declare status: string
  declare staffCount: number
  declare grossAmount: string
  declare deductionAmount: string
  declare netAmount: number | null
  declare processedByUserId: string | null
  declare processedAt: Date | null
  declare approvedByUserId: string | null
  declare approvedAt: Date | null
  declare paidAt: Date | null
  declare cancelledAt: Date | null
  declare notes: string | null
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initHrPayrollRunEntity(sequelize: Sequelize): typeof HrPayrollRunEntity {
  HrPayrollRunEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('hr_payroll_run')"),
      },
      payrollRunId: {
        type: DataTypes.TEXT,
        field: 'payroll_run_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      campusId: {
        type: DataTypes.TEXT,
        field: 'campus_id',
        allowNull: false,
        references: { model: 'org_campus', key: 'campus_id' },
      },
      runCode: {
        type: DataTypes.STRING(20),
        field: 'run_code',
        allowNull: false,
      },
      periodStartOn: {
        type: DataTypes.TEXT,
        field: 'period_start_on',
        allowNull: false,
      },
      periodEndOn: {
        type: DataTypes.TEXT,
        field: 'period_end_on',
        allowNull: false,
      },
      payDate: {
        type: DataTypes.TEXT,
        field: 'pay_date',
        allowNull: false,
      },
      workingDays: {
        type: DataTypes.DECIMAL(4, 1),
        field: 'working_days',
        allowNull: false,
      },
      status: {
        type: DataTypes.TEXT,
        field: 'status',
        allowNull: false,
        defaultValue: "draft",
      },
      staffCount: {
        type: DataTypes.INTEGER,
        field: 'staff_count',
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
      processedByUserId: {
        type: DataTypes.TEXT,
        field: 'processed_by_user_id',
        allowNull: true,
        references: { model: 'iam_app_user', key: 'app_user_id' },
      },
      processedAt: {
        type: DataTypes.DATE,
        field: 'processed_at',
        allowNull: true,
      },
      approvedByUserId: {
        type: DataTypes.TEXT,
        field: 'approved_by_user_id',
        allowNull: true,
        references: { model: 'iam_app_user', key: 'app_user_id' },
      },
      approvedAt: {
        type: DataTypes.DATE,
        field: 'approved_at',
        allowNull: true,
      },
      paidAt: {
        type: DataTypes.DATE,
        field: 'paid_at',
        allowNull: true,
      },
      cancelledAt: {
        type: DataTypes.DATE,
        field: 'cancelled_at',
        allowNull: true,
      },
      notes: {
        type: DataTypes.TEXT,
        field: 'notes',
        allowNull: true,
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
      tableName: 'hr_payroll_run',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['run_code'] }
      ]
    }
  )
  return HrPayrollRunEntity
}
