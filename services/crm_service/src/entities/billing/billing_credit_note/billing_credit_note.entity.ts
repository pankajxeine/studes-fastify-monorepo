import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type BillingCreditNoteAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  creditNoteId?: string
  creditNoteNumber?: string | null
  invoiceId: string
  amount: string
  reason: string
  description?: string | null
  status?: string
  issuedAt?: Date
  issuedByUserId: string
  approvedByUserId?: string | null
  voidedAt?: Date | null
}

export type BillingCreditNoteCreationAttributes = Optional<BillingCreditNoteAttributes, "id" | "publicId" | "recordCode" | "creditNoteId" | "creditNoteNumber" | "description" | "status" | "issuedAt" | "approvedByUserId" | "voidedAt">

export class BillingCreditNoteEntity
  extends Model<BillingCreditNoteAttributes, BillingCreditNoteCreationAttributes>
  implements BillingCreditNoteAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare creditNoteId: string
  declare creditNoteNumber: string | null
  declare invoiceId: string
  declare amount: string
  declare reason: string
  declare description: string | null
  declare status: string
  declare issuedAt: Date
  declare issuedByUserId: string
  declare approvedByUserId: string | null
  declare voidedAt: Date | null
}

export function initBillingCreditNoteEntity(sequelize: Sequelize): typeof BillingCreditNoteEntity {
  BillingCreditNoteEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('billing_credit_note')"),
      },
      creditNoteId: {
        type: DataTypes.TEXT,
        field: 'credit_note_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      creditNoteNumber: {
        type: DataTypes.STRING(40),
        field: 'credit_note_number',
        allowNull: true,
      },
      invoiceId: {
        type: DataTypes.TEXT,
        field: 'invoice_id',
        allowNull: false,
        references: { model: 'billing_invoice', key: 'invoice_id' },
      },
      amount: {
        type: DataTypes.TEXT,
        field: 'amount',
        allowNull: false,
      },
      reason: {
        type: DataTypes.TEXT,
        field: 'reason',
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        field: 'description',
        allowNull: true,
      },
      status: {
        type: DataTypes.STRING(8),
        field: 'status',
        allowNull: false,
        defaultValue: "issued",
      },
      issuedAt: {
        type: DataTypes.DATE,
        field: 'issued_at',
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      issuedByUserId: {
        type: DataTypes.TEXT,
        field: 'issued_by_user_id',
        allowNull: false,
        references: { model: 'iam_app_user', key: 'app_user_id' },
      },
      approvedByUserId: {
        type: DataTypes.TEXT,
        field: 'approved_by_user_id',
        allowNull: true,
        references: { model: 'iam_app_user', key: 'app_user_id' },
      },
      voidedAt: {
        type: DataTypes.DATE,
        field: 'voided_at',
        allowNull: true,
      }
    },
    {
      sequelize,
      tableName: 'billing_credit_note',
      timestamps: false,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['credit_note_number'] }
      ]
    }
  )
  return BillingCreditNoteEntity
}
