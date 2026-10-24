import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type FinPaymentAllocationAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  paymentAllocationId?: string
  paymentId: string
  invoiceId: string
  amount: string
  allocatedAt?: Date
  allocatedByUserId?: string | null
  reversedAt?: Date | null
  reversedByUserId?: string | null
  reversalReason?: string | null
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type FinPaymentAllocationCreationAttributes = Optional<FinPaymentAllocationAttributes, "id" | "publicId" | "recordCode" | "paymentAllocationId" | "allocatedAt" | "allocatedByUserId" | "reversedAt" | "reversedByUserId" | "reversalReason" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class FinPaymentAllocationEntity
  extends Model<FinPaymentAllocationAttributes, FinPaymentAllocationCreationAttributes>
  implements FinPaymentAllocationAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare paymentAllocationId: string
  declare paymentId: string
  declare invoiceId: string
  declare amount: string
  declare allocatedAt: Date
  declare allocatedByUserId: string | null
  declare reversedAt: Date | null
  declare reversedByUserId: string | null
  declare reversalReason: string | null
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initFinPaymentAllocationEntity(sequelize: Sequelize): typeof FinPaymentAllocationEntity {
  FinPaymentAllocationEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('fin_payment_allocation')"),
      },
      paymentAllocationId: {
        type: DataTypes.TEXT,
        field: 'payment_allocation_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      paymentId: {
        type: DataTypes.TEXT,
        field: 'payment_id',
        allowNull: false,
        references: { model: 'fin_payment', key: 'payment_id' },
      },
      invoiceId: {
        type: DataTypes.TEXT,
        field: 'invoice_id',
        allowNull: false,
        references: { model: 'fin_invoice', key: 'invoice_id' },
      },
      amount: {
        type: DataTypes.TEXT,
        field: 'amount',
        allowNull: false,
      },
      allocatedAt: {
        type: DataTypes.DATE,
        field: 'allocated_at',
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      allocatedByUserId: {
        type: DataTypes.TEXT,
        field: 'allocated_by_user_id',
        allowNull: true,
        references: { model: 'iam_app_user', key: 'app_user_id' },
      },
      reversedAt: {
        type: DataTypes.DATE,
        field: 'reversed_at',
        allowNull: true,
      },
      reversedByUserId: {
        type: DataTypes.TEXT,
        field: 'reversed_by_user_id',
        allowNull: true,
        references: { model: 'iam_app_user', key: 'app_user_id' },
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
      tableName: 'fin_payment_allocation',
      timestamps: true,
      underscored: true,
      freezeTableName: true
    }
  )
  return FinPaymentAllocationEntity
}
