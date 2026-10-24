import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type InvntPurchaseOrderLineAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  purchaseOrderLineId?: string
  purchaseOrderId: string
  lineNo: number
  itemId: string
  description?: string | null
  quantity: number
  unitPriceAmount: string
  taxRate?: string
  lineAmount?: number | null
  receivedQuantity?: number
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type InvntPurchaseOrderLineCreationAttributes = Optional<InvntPurchaseOrderLineAttributes, "id" | "publicId" | "recordCode" | "purchaseOrderLineId" | "description" | "taxRate" | "lineAmount" | "receivedQuantity" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class InvntPurchaseOrderLineEntity
  extends Model<InvntPurchaseOrderLineAttributes, InvntPurchaseOrderLineCreationAttributes>
  implements InvntPurchaseOrderLineAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare purchaseOrderLineId: string
  declare purchaseOrderId: string
  declare lineNo: number
  declare itemId: string
  declare description: string | null
  declare quantity: number
  declare unitPriceAmount: string
  declare taxRate: string
  declare lineAmount: number | null
  declare receivedQuantity: number
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initInvntPurchaseOrderLineEntity(sequelize: Sequelize): typeof InvntPurchaseOrderLineEntity {
  InvntPurchaseOrderLineEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('invnt_purchase_order_line')"),
      },
      purchaseOrderLineId: {
        type: DataTypes.TEXT,
        field: 'purchase_order_line_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      purchaseOrderId: {
        type: DataTypes.TEXT,
        field: 'purchase_order_id',
        allowNull: false,
        references: { model: 'invnt_purchase_order', key: 'purchase_order_id' },
        onDelete: 'CASCADE',
      },
      lineNo: {
        type: DataTypes.SMALLINT,
        field: 'line_no',
        allowNull: false,
      },
      itemId: {
        type: DataTypes.TEXT,
        field: 'item_id',
        allowNull: false,
        references: { model: 'invnt_item', key: 'item_id' },
      },
      description: {
        type: DataTypes.TEXT,
        field: 'description',
        allowNull: true,
      },
      quantity: {
        type: DataTypes.DECIMAL(12, 2),
        field: 'quantity',
        allowNull: false,
      },
      unitPriceAmount: {
        type: DataTypes.TEXT,
        field: 'unit_price_amount',
        allowNull: false,
      },
      taxRate: {
        type: DataTypes.TEXT,
        field: 'tax_rate',
        allowNull: false,
        defaultValue: 0,
      },
      lineAmount: {
        type: DataTypes.DECIMAL(12, 2),
        field: 'line_amount',
        allowNull: true,
        autoIncrement: true,
      },
      receivedQuantity: {
        type: DataTypes.DECIMAL(12, 2),
        field: 'received_quantity',
        allowNull: false,
        defaultValue: 0,
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
      tableName: 'invnt_purchase_order_line',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['purchase_order_id', 'line_no'] },
      { unique: true, fields: ['purchase_order_id', 'item_id'] }
      ]
    }
  )
  return InvntPurchaseOrderLineEntity
}
