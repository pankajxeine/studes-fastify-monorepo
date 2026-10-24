import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type FinInvoiceAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  invoiceId?: string
  invoiceNo: string
  studentId: string
  academicYearId: string
  campusId: string
  feeInstallmentId?: string | null
  termId?: string | null
  invoiceDate: string
  dueOn: string
  status?: string
  subtotalAmount?: string
  discountAmount?: string
  totalAmount?: string
  paidAmount?: string
  balanceAmount?: number | null
  notes?: string | null
  issuedAt?: Date | null
  issuedByUserId?: string | null
  cancelledAt?: Date | null
  cancelledByUserId?: string | null
  cancellationReason?: string | null
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type FinInvoiceCreationAttributes = Optional<FinInvoiceAttributes, "id" | "publicId" | "recordCode" | "invoiceId" | "feeInstallmentId" | "termId" | "status" | "subtotalAmount" | "discountAmount" | "totalAmount" | "paidAmount" | "balanceAmount" | "notes" | "issuedAt" | "issuedByUserId" | "cancelledAt" | "cancelledByUserId" | "cancellationReason" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class FinInvoiceEntity
  extends Model<FinInvoiceAttributes, FinInvoiceCreationAttributes>
  implements FinInvoiceAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare invoiceId: string
  declare invoiceNo: string
  declare studentId: string
  declare academicYearId: string
  declare campusId: string
  declare feeInstallmentId: string | null
  declare termId: string | null
  declare invoiceDate: string
  declare dueOn: string
  declare status: string
  declare subtotalAmount: string
  declare discountAmount: string
  declare totalAmount: string
  declare paidAmount: string
  declare balanceAmount: number | null
  declare notes: string | null
  declare issuedAt: Date | null
  declare issuedByUserId: string | null
  declare cancelledAt: Date | null
  declare cancelledByUserId: string | null
  declare cancellationReason: string | null
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initFinInvoiceEntity(sequelize: Sequelize): typeof FinInvoiceEntity {
  FinInvoiceEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('fin_invoice')"),
      },
      invoiceId: {
        type: DataTypes.TEXT,
        field: 'invoice_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      invoiceNo: {
        type: DataTypes.STRING(30),
        field: 'invoice_no',
        allowNull: false,
      },
      studentId: {
        type: DataTypes.TEXT,
        field: 'student_id',
        allowNull: false,
        references: { model: 'sis_student', key: 'student_id' },
      },
      academicYearId: {
        type: DataTypes.TEXT,
        field: 'academic_year_id',
        allowNull: false,
        references: { model: 'acad_academic_year', key: 'academic_year_id' },
      },
      campusId: {
        type: DataTypes.TEXT,
        field: 'campus_id',
        allowNull: false,
        references: { model: 'org_campus', key: 'campus_id' },
      },
      feeInstallmentId: {
        type: DataTypes.TEXT,
        field: 'fee_installment_id',
        allowNull: true,
        references: { model: 'fin_fee_installment', key: 'fee_installment_id' },
      },
      termId: {
        type: DataTypes.UUID,
        field: 'term_id',
        allowNull: true,
        references: { model: 'acad_term', key: 'term_id' },
      },
      invoiceDate: {
        type: DataTypes.TEXT,
        field: 'invoice_date',
        allowNull: false,
      },
      dueOn: {
        type: DataTypes.TEXT,
        field: 'due_on',
        allowNull: false,
      },
      status: {
        type: DataTypes.TEXT,
        field: 'status',
        allowNull: false,
        defaultValue: "draft",
      },
      subtotalAmount: {
        type: DataTypes.TEXT,
        field: 'subtotal_amount',
        allowNull: false,
        defaultValue: 0,
      },
      discountAmount: {
        type: DataTypes.TEXT,
        field: 'discount_amount',
        allowNull: false,
        defaultValue: 0,
      },
      totalAmount: {
        type: DataTypes.TEXT,
        field: 'total_amount',
        allowNull: false,
        defaultValue: 0,
      },
      paidAmount: {
        type: DataTypes.TEXT,
        field: 'paid_amount',
        allowNull: false,
        defaultValue: 0,
      },
      balanceAmount: {
        type: DataTypes.DECIMAL(12, 2),
        field: 'balance_amount',
        allowNull: true,
        autoIncrement: true,
      },
      notes: {
        type: DataTypes.TEXT,
        field: 'notes',
        allowNull: true,
      },
      issuedAt: {
        type: DataTypes.DATE,
        field: 'issued_at',
        allowNull: true,
      },
      issuedByUserId: {
        type: DataTypes.TEXT,
        field: 'issued_by_user_id',
        allowNull: true,
        references: { model: 'iam_app_user', key: 'app_user_id' },
      },
      cancelledAt: {
        type: DataTypes.DATE,
        field: 'cancelled_at',
        allowNull: true,
      },
      cancelledByUserId: {
        type: DataTypes.TEXT,
        field: 'cancelled_by_user_id',
        allowNull: true,
        references: { model: 'iam_app_user', key: 'app_user_id' },
      },
      cancellationReason: {
        type: DataTypes.TEXT,
        field: 'cancellation_reason',
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
      tableName: 'fin_invoice',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['invoice_no'] }
      ]
    }
  )
  return FinInvoiceEntity
}
