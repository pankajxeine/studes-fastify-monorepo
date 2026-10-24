import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type FinPaymentAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  paymentId?: string
  receiptNo: string
  campusId: string
  payerPersonId: string
  studentId?: string | null
  purpose?: string
  paymentMethod: string
  status?: string
  amount: string
  allocatedAmount?: string
  refundedAmount?: string
  unallocatedAmount?: number | null
  paidAt?: Date | null
  referenceNo?: string | null
  bankName?: string | null
  gatewayName?: string | null
  receivedByUserId?: string | null
  receiptFileId?: string | null
  notes?: string | null
  reversedAt?: Date | null
  reversalReason?: string | null
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type FinPaymentCreationAttributes = Optional<FinPaymentAttributes, "id" | "publicId" | "recordCode" | "paymentId" | "studentId" | "purpose" | "status" | "allocatedAmount" | "refundedAmount" | "unallocatedAmount" | "paidAt" | "referenceNo" | "bankName" | "gatewayName" | "receivedByUserId" | "receiptFileId" | "notes" | "reversedAt" | "reversalReason" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class FinPaymentEntity
  extends Model<FinPaymentAttributes, FinPaymentCreationAttributes>
  implements FinPaymentAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare paymentId: string
  declare receiptNo: string
  declare campusId: string
  declare payerPersonId: string
  declare studentId: string | null
  declare purpose: string
  declare paymentMethod: string
  declare status: string
  declare amount: string
  declare allocatedAmount: string
  declare refundedAmount: string
  declare unallocatedAmount: number | null
  declare paidAt: Date | null
  declare referenceNo: string | null
  declare bankName: string | null
  declare gatewayName: string | null
  declare receivedByUserId: string | null
  declare receiptFileId: string | null
  declare notes: string | null
  declare reversedAt: Date | null
  declare reversalReason: string | null
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initFinPaymentEntity(sequelize: Sequelize): typeof FinPaymentEntity {
  FinPaymentEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('fin_payment')"),
      },
      paymentId: {
        type: DataTypes.TEXT,
        field: 'payment_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      receiptNo: {
        type: DataTypes.STRING(30),
        field: 'receipt_no',
        allowNull: false,
      },
      campusId: {
        type: DataTypes.TEXT,
        field: 'campus_id',
        allowNull: false,
        references: { model: 'org_campus', key: 'campus_id' },
      },
      payerPersonId: {
        type: DataTypes.TEXT,
        field: 'payer_person_id',
        allowNull: false,
        references: { model: 'ppl_person', key: 'person_id' },
      },
      studentId: {
        type: DataTypes.TEXT,
        field: 'student_id',
        allowNull: true,
        references: { model: 'sis_student', key: 'student_id' },
      },
      purpose: {
        type: DataTypes.TEXT,
        field: 'purpose',
        allowNull: false,
        defaultValue: "fees",
      },
      paymentMethod: {
        type: DataTypes.TEXT,
        field: 'payment_method',
        allowNull: false,
      },
      status: {
        type: DataTypes.TEXT,
        field: 'status',
        allowNull: false,
        defaultValue: "pending",
      },
      amount: {
        type: DataTypes.TEXT,
        field: 'amount',
        allowNull: false,
      },
      allocatedAmount: {
        type: DataTypes.TEXT,
        field: 'allocated_amount',
        allowNull: false,
        defaultValue: 0,
      },
      refundedAmount: {
        type: DataTypes.TEXT,
        field: 'refunded_amount',
        allowNull: false,
        defaultValue: 0,
      },
      unallocatedAmount: {
        type: DataTypes.DECIMAL(12, 2),
        field: 'unallocated_amount',
        allowNull: true,
        autoIncrement: true,
      },
      paidAt: {
        type: DataTypes.DATE,
        field: 'paid_at',
        allowNull: true,
      },
      referenceNo: {
        type: DataTypes.STRING(80),
        field: 'reference_no',
        allowNull: true,
      },
      bankName: {
        type: DataTypes.TEXT,
        field: 'bank_name',
        allowNull: true,
      },
      gatewayName: {
        type: DataTypes.STRING(40),
        field: 'gateway_name',
        allowNull: true,
      },
      receivedByUserId: {
        type: DataTypes.TEXT,
        field: 'received_by_user_id',
        allowNull: true,
        references: { model: 'iam_app_user', key: 'app_user_id' },
      },
      receiptFileId: {
        type: DataTypes.TEXT,
        field: 'receipt_file_id',
        allowNull: true,
        references: { model: 'docs_file', key: 'file_id' },
      },
      notes: {
        type: DataTypes.TEXT,
        field: 'notes',
        allowNull: true,
      },
      reversedAt: {
        type: DataTypes.DATE,
        field: 'reversed_at',
        allowNull: true,
      },
      reversalReason: {
        type: DataTypes.TEXT,
        field: 'reversal_reason',
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
      tableName: 'fin_payment',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['receipt_no'] }
      ]
    }
  )
  return FinPaymentEntity
}
