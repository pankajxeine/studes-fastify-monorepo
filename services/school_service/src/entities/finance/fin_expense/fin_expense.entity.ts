import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type FinExpenseAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  expenseId?: string
  expenseNo: string
  campusId: string
  expenseCategoryCode: string
  vendorId?: string | null
  fileId?: string | null
  description: string
  vendorInvoiceNo?: string | null
  expenseDate: string
  amount: string
  taxAmount?: string
  totalAmount?: number | null
  status?: string
  submittedByUserId: string
  submittedAt?: Date
  approvedByUserId?: string | null
  approvedAt?: Date | null
  rejectionReason?: string | null
  paymentMethod?: string | null
  paidOn?: Date | null
  paymentReferenceNo?: string | null
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type FinExpenseCreationAttributes = Optional<FinExpenseAttributes, "id" | "publicId" | "recordCode" | "expenseId" | "vendorId" | "fileId" | "vendorInvoiceNo" | "taxAmount" | "totalAmount" | "status" | "submittedAt" | "approvedByUserId" | "approvedAt" | "rejectionReason" | "paymentMethod" | "paidOn" | "paymentReferenceNo" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class FinExpenseEntity
  extends Model<FinExpenseAttributes, FinExpenseCreationAttributes>
  implements FinExpenseAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare expenseId: string
  declare expenseNo: string
  declare campusId: string
  declare expenseCategoryCode: string
  declare vendorId: string | null
  declare fileId: string | null
  declare description: string
  declare vendorInvoiceNo: string | null
  declare expenseDate: string
  declare amount: string
  declare taxAmount: string
  declare totalAmount: number | null
  declare status: string
  declare submittedByUserId: string
  declare submittedAt: Date
  declare approvedByUserId: string | null
  declare approvedAt: Date | null
  declare rejectionReason: string | null
  declare paymentMethod: string | null
  declare paidOn: Date | null
  declare paymentReferenceNo: string | null
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initFinExpenseEntity(sequelize: Sequelize): typeof FinExpenseEntity {
  FinExpenseEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('fin_expense')"),
      },
      expenseId: {
        type: DataTypes.TEXT,
        field: 'expense_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      expenseNo: {
        type: DataTypes.STRING(30),
        field: 'expense_no',
        allowNull: false,
      },
      campusId: {
        type: DataTypes.TEXT,
        field: 'campus_id',
        allowNull: false,
        references: { model: 'org_campus', key: 'campus_id' },
      },
      expenseCategoryCode: {
        type: DataTypes.TEXT,
        field: 'expense_category_code',
        allowNull: false,
        references: { model: 'fin_expense_category', key: 'expense_category_code' },
        onUpdate: 'CASCADE',
      },
      vendorId: {
        type: DataTypes.TEXT,
        field: 'vendor_id',
        allowNull: true,
        references: { model: 'org_vendor', key: 'vendor_id' },
      },
      fileId: {
        type: DataTypes.TEXT,
        field: 'file_id',
        allowNull: true,
        references: { model: 'docs_file', key: 'file_id' },
      },
      description: {
        type: DataTypes.TEXT,
        field: 'description',
        allowNull: false,
      },
      vendorInvoiceNo: {
        type: DataTypes.STRING(40),
        field: 'vendor_invoice_no',
        allowNull: true,
      },
      expenseDate: {
        type: DataTypes.TEXT,
        field: 'expense_date',
        allowNull: false,
      },
      amount: {
        type: DataTypes.TEXT,
        field: 'amount',
        allowNull: false,
      },
      taxAmount: {
        type: DataTypes.TEXT,
        field: 'tax_amount',
        allowNull: false,
        defaultValue: 0,
      },
      totalAmount: {
        type: DataTypes.DECIMAL(12, 2),
        field: 'total_amount',
        allowNull: true,
        autoIncrement: true,
      },
      status: {
        type: DataTypes.TEXT,
        field: 'status',
        allowNull: false,
        defaultValue: "pending",
      },
      submittedByUserId: {
        type: DataTypes.TEXT,
        field: 'submitted_by_user_id',
        allowNull: false,
        references: { model: 'iam_app_user', key: 'app_user_id' },
      },
      submittedAt: {
        type: DataTypes.DATE,
        field: 'submitted_at',
        allowNull: false,
        defaultValue: DataTypes.NOW,
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
      rejectionReason: {
        type: DataTypes.TEXT,
        field: 'rejection_reason',
        allowNull: true,
      },
      paymentMethod: {
        type: DataTypes.TEXT,
        field: 'payment_method',
        allowNull: true,
      },
      paidOn: {
        type: DataTypes.DATEONLY,
        field: 'paid_on',
        allowNull: true,
      },
      paymentReferenceNo: {
        type: DataTypes.STRING(80),
        field: 'payment_reference_no',
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
      tableName: 'fin_expense',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['expense_no'] },
      { unique: true, fields: ['vendor_id', 'vendor_invoice_no'] }
      ]
    }
  )
  return FinExpenseEntity
}
