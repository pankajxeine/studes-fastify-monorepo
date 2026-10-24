import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type LibLoanAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  loanId?: string
  bookCopyId: string
  libraryMembershipId: string
  issuedAt?: Date
  dueOn: string
  returnedAt?: Date | null
  status?: string
  renewalCount?: number
  finePerDayAmount?: string
  fineAmount?: string
  fineWaivedAmount?: string
  fineInvoiceId?: string | null
  issuedByUserId: string
  receivedByUserId?: string | null
  returnCondition?: string | null
  notes?: string | null
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type LibLoanCreationAttributes = Optional<LibLoanAttributes, "id" | "publicId" | "recordCode" | "loanId" | "issuedAt" | "returnedAt" | "status" | "renewalCount" | "finePerDayAmount" | "fineAmount" | "fineWaivedAmount" | "fineInvoiceId" | "receivedByUserId" | "returnCondition" | "notes" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class LibLoanEntity
  extends Model<LibLoanAttributes, LibLoanCreationAttributes>
  implements LibLoanAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare loanId: string
  declare bookCopyId: string
  declare libraryMembershipId: string
  declare issuedAt: Date
  declare dueOn: string
  declare returnedAt: Date | null
  declare status: string
  declare renewalCount: number
  declare finePerDayAmount: string
  declare fineAmount: string
  declare fineWaivedAmount: string
  declare fineInvoiceId: string | null
  declare issuedByUserId: string
  declare receivedByUserId: string | null
  declare returnCondition: string | null
  declare notes: string | null
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initLibLoanEntity(sequelize: Sequelize): typeof LibLoanEntity {
  LibLoanEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('lib_loan')"),
      },
      loanId: {
        type: DataTypes.TEXT,
        field: 'loan_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      bookCopyId: {
        type: DataTypes.TEXT,
        field: 'book_copy_id',
        allowNull: false,
        references: { model: 'lib_book_copy', key: 'book_copy_id' },
      },
      libraryMembershipId: {
        type: DataTypes.TEXT,
        field: 'library_membership_id',
        allowNull: false,
        references: { model: 'lib_library_membership', key: 'library_membership_id' },
      },
      issuedAt: {
        type: DataTypes.DATE,
        field: 'issued_at',
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      dueOn: {
        type: DataTypes.TEXT,
        field: 'due_on',
        allowNull: false,
      },
      returnedAt: {
        type: DataTypes.DATE,
        field: 'returned_at',
        allowNull: true,
      },
      status: {
        type: DataTypes.STRING(10),
        field: 'status',
        allowNull: false,
        defaultValue: "open",
      },
      renewalCount: {
        type: DataTypes.SMALLINT,
        field: 'renewal_count',
        allowNull: false,
        defaultValue: 0,
      },
      finePerDayAmount: {
        type: DataTypes.TEXT,
        field: 'fine_per_day_amount',
        allowNull: false,
        defaultValue: 0.25,
      },
      fineAmount: {
        type: DataTypes.TEXT,
        field: 'fine_amount',
        allowNull: false,
        defaultValue: 0,
      },
      fineWaivedAmount: {
        type: DataTypes.TEXT,
        field: 'fine_waived_amount',
        allowNull: false,
        defaultValue: 0,
      },
      fineInvoiceId: {
        type: DataTypes.TEXT,
        field: 'fine_invoice_id',
        allowNull: true,
        references: { model: 'fin_invoice', key: 'invoice_id' },
      },
      issuedByUserId: {
        type: DataTypes.TEXT,
        field: 'issued_by_user_id',
        allowNull: false,
        references: { model: 'iam_app_user', key: 'app_user_id' },
      },
      receivedByUserId: {
        type: DataTypes.TEXT,
        field: 'received_by_user_id',
        allowNull: true,
        references: { model: 'iam_app_user', key: 'app_user_id' },
      },
      returnCondition: {
        type: DataTypes.STRING(10),
        field: 'return_condition',
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
      tableName: 'lib_loan',
      timestamps: true,
      underscored: true,
      freezeTableName: true
    }
  )
  return LibLoanEntity
}
