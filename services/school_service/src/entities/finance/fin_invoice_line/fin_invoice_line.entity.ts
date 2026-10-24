import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type FinInvoiceLineAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  invoiceLineId?: string
  invoiceId: string
  lineNo: number
  feeHeadCode: string
  description: string
  quantity?: number
  unitAmount: string
  grossAmount?: number | null
  discountAmount?: string
  netAmount?: number | null
  studentConcessionId?: string | null
  feeStructureItemId?: string | null
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type FinInvoiceLineCreationAttributes = Optional<FinInvoiceLineAttributes, "id" | "publicId" | "recordCode" | "invoiceLineId" | "quantity" | "grossAmount" | "discountAmount" | "netAmount" | "studentConcessionId" | "feeStructureItemId" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class FinInvoiceLineEntity
  extends Model<FinInvoiceLineAttributes, FinInvoiceLineCreationAttributes>
  implements FinInvoiceLineAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare invoiceLineId: string
  declare invoiceId: string
  declare lineNo: number
  declare feeHeadCode: string
  declare description: string
  declare quantity: number
  declare unitAmount: string
  declare grossAmount: number | null
  declare discountAmount: string
  declare netAmount: number | null
  declare studentConcessionId: string | null
  declare feeStructureItemId: string | null
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initFinInvoiceLineEntity(sequelize: Sequelize): typeof FinInvoiceLineEntity {
  FinInvoiceLineEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('fin_invoice_line')"),
      },
      invoiceLineId: {
        type: DataTypes.TEXT,
        field: 'invoice_line_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      invoiceId: {
        type: DataTypes.TEXT,
        field: 'invoice_id',
        allowNull: false,
        references: { model: 'fin_invoice', key: 'invoice_id' },
        onDelete: 'CASCADE',
      },
      lineNo: {
        type: DataTypes.SMALLINT,
        field: 'line_no',
        allowNull: false,
      },
      feeHeadCode: {
        type: DataTypes.TEXT,
        field: 'fee_head_code',
        allowNull: false,
        references: { model: 'fin_fee_head', key: 'fee_head_code' },
        onUpdate: 'CASCADE',
      },
      description: {
        type: DataTypes.TEXT,
        field: 'description',
        allowNull: false,
      },
      quantity: {
        type: DataTypes.DECIMAL(8, 2),
        field: 'quantity',
        allowNull: false,
        defaultValue: 1,
      },
      unitAmount: {
        type: DataTypes.TEXT,
        field: 'unit_amount',
        allowNull: false,
      },
      grossAmount: {
        type: DataTypes.DECIMAL(12, 2),
        field: 'gross_amount',
        allowNull: true,
        autoIncrement: true,
      },
      discountAmount: {
        type: DataTypes.TEXT,
        field: 'discount_amount',
        allowNull: false,
        defaultValue: 0,
      },
      netAmount: {
        type: DataTypes.DECIMAL(12, 2),
        field: 'net_amount',
        allowNull: true,
        autoIncrement: true,
      },
      studentConcessionId: {
        type: DataTypes.TEXT,
        field: 'student_concession_id',
        allowNull: true,
        references: { model: 'fin_student_concession', key: 'student_concession_id' },
      },
      feeStructureItemId: {
        type: DataTypes.TEXT,
        field: 'fee_structure_item_id',
        allowNull: true,
        references: { model: 'fin_fee_structure_item', key: 'fee_structure_item_id' },
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
      tableName: 'fin_invoice_line',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['invoice_id', 'line_no'] }
      ]
    }
  )
  return FinInvoiceLineEntity
}
