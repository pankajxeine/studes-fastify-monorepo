import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type InvntPurchaseOrderAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  purchaseOrderId?: string
  poNo: string
  vendorId: string
  campusId: string
  deliveryRoomId?: string | null
  status?: string
  orderDate?: string
  expectedDeliveryOn?: Date | null
  requestedByUserId?: string | null
  approvedByUserId?: string | null
  approvedAt?: Date | null
  orderedAt?: Date | null
  subtotalAmount?: string
  taxAmount?: string
  totalAmount?: number | null
  paymentTerms?: string | null
  cancelledReason?: string | null
  notes?: string | null
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type InvntPurchaseOrderCreationAttributes = Optional<InvntPurchaseOrderAttributes, "id" | "publicId" | "recordCode" | "purchaseOrderId" | "deliveryRoomId" | "status" | "orderDate" | "expectedDeliveryOn" | "requestedByUserId" | "approvedByUserId" | "approvedAt" | "orderedAt" | "subtotalAmount" | "taxAmount" | "totalAmount" | "paymentTerms" | "cancelledReason" | "notes" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class InvntPurchaseOrderEntity
  extends Model<InvntPurchaseOrderAttributes, InvntPurchaseOrderCreationAttributes>
  implements InvntPurchaseOrderAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare purchaseOrderId: string
  declare poNo: string
  declare vendorId: string
  declare campusId: string
  declare deliveryRoomId: string | null
  declare status: string
  declare orderDate: string
  declare expectedDeliveryOn: Date | null
  declare requestedByUserId: string | null
  declare approvedByUserId: string | null
  declare approvedAt: Date | null
  declare orderedAt: Date | null
  declare subtotalAmount: string
  declare taxAmount: string
  declare totalAmount: number | null
  declare paymentTerms: string | null
  declare cancelledReason: string | null
  declare notes: string | null
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initInvntPurchaseOrderEntity(sequelize: Sequelize): typeof InvntPurchaseOrderEntity {
  InvntPurchaseOrderEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('invnt_purchase_order')"),
      },
      purchaseOrderId: {
        type: DataTypes.TEXT,
        field: 'purchase_order_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      poNo: {
        type: DataTypes.STRING(20),
        field: 'po_no',
        allowNull: false,
      },
      vendorId: {
        type: DataTypes.TEXT,
        field: 'vendor_id',
        allowNull: false,
        references: { model: 'org_vendor', key: 'vendor_id' },
      },
      campusId: {
        type: DataTypes.TEXT,
        field: 'campus_id',
        allowNull: false,
        references: { model: 'org_campus', key: 'campus_id' },
      },
      deliveryRoomId: {
        type: DataTypes.TEXT,
        field: 'delivery_room_id',
        allowNull: true,
        references: { model: 'org_room', key: 'room_id' },
      },
      status: {
        type: DataTypes.TEXT,
        field: 'status',
        allowNull: false,
        defaultValue: "draft",
      },
      orderDate: {
        type: DataTypes.TEXT,
        field: 'order_date',
        allowNull: false,
        defaultValue: Sequelize.literal("current_date"),
      },
      expectedDeliveryOn: {
        type: DataTypes.DATEONLY,
        field: 'expected_delivery_on',
        allowNull: true,
      },
      requestedByUserId: {
        type: DataTypes.TEXT,
        field: 'requested_by_user_id',
        allowNull: true,
        references: { model: 'iam_app_user', key: 'app_user_id' },
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
      orderedAt: {
        type: DataTypes.DATE,
        field: 'ordered_at',
        allowNull: true,
      },
      subtotalAmount: {
        type: DataTypes.TEXT,
        field: 'subtotal_amount',
        allowNull: false,
        defaultValue: 0,
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
      paymentTerms: {
        type: DataTypes.TEXT,
        field: 'payment_terms',
        allowNull: true,
      },
      cancelledReason: {
        type: DataTypes.TEXT,
        field: 'cancelled_reason',
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
      tableName: 'invnt_purchase_order',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['po_no'] }
      ]
    }
  )
  return InvntPurchaseOrderEntity
}
