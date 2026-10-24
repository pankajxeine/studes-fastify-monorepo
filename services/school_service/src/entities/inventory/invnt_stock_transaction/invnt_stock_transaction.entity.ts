import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type InvntStockTransactionAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  stockTransactionId?: string
  txnNo: string
  itemId: string
  campusId: string
  roomId: string
  toRoomId?: string | null
  txnType: string
  quantity: number
  quantityDelta?: number | null
  unitCostAmount?: string
  totalCostAmount?: number | null
  balanceAfter?: number
  purchaseOrderLineId?: string | null
  issuedToPersonId?: string | null
  referenceNo?: string | null
  reason?: string | null
  txnAt?: Date
  performedByUserId?: string | null
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type InvntStockTransactionCreationAttributes = Optional<InvntStockTransactionAttributes, "id" | "publicId" | "recordCode" | "stockTransactionId" | "toRoomId" | "quantityDelta" | "unitCostAmount" | "totalCostAmount" | "balanceAfter" | "purchaseOrderLineId" | "issuedToPersonId" | "referenceNo" | "reason" | "txnAt" | "performedByUserId" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class InvntStockTransactionEntity
  extends Model<InvntStockTransactionAttributes, InvntStockTransactionCreationAttributes>
  implements InvntStockTransactionAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare stockTransactionId: string
  declare txnNo: string
  declare itemId: string
  declare campusId: string
  declare roomId: string
  declare toRoomId: string | null
  declare txnType: string
  declare quantity: number
  declare quantityDelta: number | null
  declare unitCostAmount: string
  declare totalCostAmount: number | null
  declare balanceAfter: number
  declare purchaseOrderLineId: string | null
  declare issuedToPersonId: string | null
  declare referenceNo: string | null
  declare reason: string | null
  declare txnAt: Date
  declare performedByUserId: string | null
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initInvntStockTransactionEntity(sequelize: Sequelize): typeof InvntStockTransactionEntity {
  InvntStockTransactionEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('invnt_stock_transaction')"),
      },
      stockTransactionId: {
        type: DataTypes.TEXT,
        field: 'stock_transaction_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      txnNo: {
        type: DataTypes.STRING(20),
        field: 'txn_no',
        allowNull: false,
      },
      itemId: {
        type: DataTypes.TEXT,
        field: 'item_id',
        allowNull: false,
        references: { model: 'invnt_item', key: 'item_id' },
      },
      campusId: {
        type: DataTypes.TEXT,
        field: 'campus_id',
        allowNull: false,
        references: { model: 'org_campus', key: 'campus_id' },
      },
      roomId: {
        type: DataTypes.TEXT,
        field: 'room_id',
        allowNull: false,
        references: { model: 'org_room', key: 'room_id' },
      },
      toRoomId: {
        type: DataTypes.TEXT,
        field: 'to_room_id',
        allowNull: true,
        references: { model: 'org_room', key: 'room_id' },
      },
      txnType: {
        type: DataTypes.TEXT,
        field: 'txn_type',
        allowNull: false,
      },
      quantity: {
        type: DataTypes.DECIMAL(12, 2),
        field: 'quantity',
        allowNull: false,
      },
      quantityDelta: {
        type: DataTypes.DECIMAL(12, 2),
        field: 'quantity_delta',
        allowNull: true,
        autoIncrement: true,
      },
      unitCostAmount: {
        type: DataTypes.TEXT,
        field: 'unit_cost_amount',
        allowNull: false,
        defaultValue: 0,
      },
      totalCostAmount: {
        type: DataTypes.DECIMAL(12, 2),
        field: 'total_cost_amount',
        allowNull: true,
        autoIncrement: true,
      },
      balanceAfter: {
        type: DataTypes.DECIMAL(12, 2),
        field: 'balance_after',
        allowNull: false,
        defaultValue: 0,
      },
      purchaseOrderLineId: {
        type: DataTypes.TEXT,
        field: 'purchase_order_line_id',
        allowNull: true,
        references: { model: 'invnt_purchase_order_line', key: 'purchase_order_line_id' },
      },
      issuedToPersonId: {
        type: DataTypes.TEXT,
        field: 'issued_to_person_id',
        allowNull: true,
        references: { model: 'ppl_person', key: 'person_id' },
      },
      referenceNo: {
        type: DataTypes.STRING(40),
        field: 'reference_no',
        allowNull: true,
      },
      reason: {
        type: DataTypes.TEXT,
        field: 'reason',
        allowNull: true,
      },
      txnAt: {
        type: DataTypes.DATE,
        field: 'txn_at',
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      performedByUserId: {
        type: DataTypes.TEXT,
        field: 'performed_by_user_id',
        allowNull: true,
        references: { model: 'iam_app_user', key: 'app_user_id' },
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
      tableName: 'invnt_stock_transaction',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['txn_no'] }
      ]
    }
  )
  return InvntStockTransactionEntity
}
