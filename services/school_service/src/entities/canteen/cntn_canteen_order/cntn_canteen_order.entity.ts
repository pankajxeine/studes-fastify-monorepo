import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type CntnCanteenOrderAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  canteenOrderId?: string
  orderNo: string
  canteenOutletId: string
  personId: string
  dailyMenuId?: string | null
  channel?: string
  paymentMode: string
  walletId?: string | null
  mealSubscriptionId?: string | null
  paymentReference?: string | null
  status?: string
  pickupDate?: string
  totalAmount?: string
  orderedAt?: Date
  preparingAt?: Date | null
  readyAt?: Date | null
  servedAt?: Date | null
  servedByStaffId?: string | null
  cancelledAt?: Date | null
  cancelReason?: string | null
  placedByUserId?: string | null
  notes?: string | null
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type CntnCanteenOrderCreationAttributes = Optional<CntnCanteenOrderAttributes, "id" | "publicId" | "recordCode" | "canteenOrderId" | "dailyMenuId" | "channel" | "walletId" | "mealSubscriptionId" | "paymentReference" | "status" | "pickupDate" | "totalAmount" | "orderedAt" | "preparingAt" | "readyAt" | "servedAt" | "servedByStaffId" | "cancelledAt" | "cancelReason" | "placedByUserId" | "notes" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class CntnCanteenOrderEntity
  extends Model<CntnCanteenOrderAttributes, CntnCanteenOrderCreationAttributes>
  implements CntnCanteenOrderAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare canteenOrderId: string
  declare orderNo: string
  declare canteenOutletId: string
  declare personId: string
  declare dailyMenuId: string | null
  declare channel: string
  declare paymentMode: string
  declare walletId: string | null
  declare mealSubscriptionId: string | null
  declare paymentReference: string | null
  declare status: string
  declare pickupDate: string
  declare totalAmount: string
  declare orderedAt: Date
  declare preparingAt: Date | null
  declare readyAt: Date | null
  declare servedAt: Date | null
  declare servedByStaffId: string | null
  declare cancelledAt: Date | null
  declare cancelReason: string | null
  declare placedByUserId: string | null
  declare notes: string | null
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initCntnCanteenOrderEntity(sequelize: Sequelize): typeof CntnCanteenOrderEntity {
  CntnCanteenOrderEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('cntn_canteen_order')"),
      },
      canteenOrderId: {
        type: DataTypes.TEXT,
        field: 'canteen_order_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      orderNo: {
        type: DataTypes.STRING(30),
        field: 'order_no',
        allowNull: false,
      },
      canteenOutletId: {
        type: DataTypes.TEXT,
        field: 'canteen_outlet_id',
        allowNull: false,
        references: { model: 'cntn_canteen_outlet', key: 'canteen_outlet_id' },
      },
      personId: {
        type: DataTypes.TEXT,
        field: 'person_id',
        allowNull: false,
        references: { model: 'ppl_person', key: 'person_id' },
      },
      dailyMenuId: {
        type: DataTypes.UUID,
        field: 'daily_menu_id',
        allowNull: true,
        references: { model: 'cntn_daily_menu', key: 'daily_menu_id' },
      },
      channel: {
        type: DataTypes.TEXT,
        field: 'channel',
        allowNull: false,
        defaultValue: "pos",
      },
      paymentMode: {
        type: DataTypes.TEXT,
        field: 'payment_mode',
        allowNull: false,
      },
      walletId: {
        type: DataTypes.UUID,
        field: 'wallet_id',
        allowNull: true,
        references: { model: 'cntn_wallet', key: 'wallet_id' },
      },
      mealSubscriptionId: {
        type: DataTypes.UUID,
        field: 'meal_subscription_id',
        allowNull: true,
        references: { model: 'cntn_meal_subscription', key: 'meal_subscription_id' },
      },
      paymentReference: {
        type: DataTypes.STRING(60),
        field: 'payment_reference',
        allowNull: true,
      },
      status: {
        type: DataTypes.TEXT,
        field: 'status',
        allowNull: false,
        defaultValue: "placed",
      },
      pickupDate: {
        type: DataTypes.TEXT,
        field: 'pickup_date',
        allowNull: false,
        defaultValue: Sequelize.literal("current_date"),
      },
      totalAmount: {
        type: DataTypes.TEXT,
        field: 'total_amount',
        allowNull: false,
        defaultValue: 0,
      },
      orderedAt: {
        type: DataTypes.DATE,
        field: 'ordered_at',
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      preparingAt: {
        type: DataTypes.DATE,
        field: 'preparing_at',
        allowNull: true,
      },
      readyAt: {
        type: DataTypes.DATE,
        field: 'ready_at',
        allowNull: true,
      },
      servedAt: {
        type: DataTypes.DATE,
        field: 'served_at',
        allowNull: true,
      },
      servedByStaffId: {
        type: DataTypes.TEXT,
        field: 'served_by_staff_id',
        allowNull: true,
        references: { model: 'hr_staff', key: 'staff_id' },
      },
      cancelledAt: {
        type: DataTypes.DATE,
        field: 'cancelled_at',
        allowNull: true,
      },
      cancelReason: {
        type: DataTypes.TEXT,
        field: 'cancel_reason',
        allowNull: true,
      },
      placedByUserId: {
        type: DataTypes.TEXT,
        field: 'placed_by_user_id',
        allowNull: true,
        references: { model: 'iam_app_user', key: 'app_user_id' },
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
      tableName: 'cntn_canteen_order',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['order_no'] },
      { unique: true, fields: ['canteen_order_id', 'wallet_id'] }
      ]
    }
  )
  return CntnCanteenOrderEntity
}
