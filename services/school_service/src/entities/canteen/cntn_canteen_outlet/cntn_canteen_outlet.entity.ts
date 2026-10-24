import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type CntnCanteenOutletAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  canteenOutletId?: string
  campusId: string
  roomId: string
  code: string
  name: string
  outletType?: string
  managerStaffId?: string | null
  operatorVendorId?: string | null
  openingTime: Date
  closingTime: Date
  preOrderCutoffTime?: Date | null
  seatingCapacity?: number | null
  contactPhone?: string | null
  isCashAccepted?: string
  isCardAccepted?: string
  isWalletAccepted?: string
  isPreOrderEnabled?: string
  isActive?: string
  notes?: string | null
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type CntnCanteenOutletCreationAttributes = Optional<CntnCanteenOutletAttributes, "id" | "publicId" | "recordCode" | "canteenOutletId" | "outletType" | "managerStaffId" | "operatorVendorId" | "preOrderCutoffTime" | "seatingCapacity" | "contactPhone" | "isCashAccepted" | "isCardAccepted" | "isWalletAccepted" | "isPreOrderEnabled" | "isActive" | "notes" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class CntnCanteenOutletEntity
  extends Model<CntnCanteenOutletAttributes, CntnCanteenOutletCreationAttributes>
  implements CntnCanteenOutletAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare canteenOutletId: string
  declare campusId: string
  declare roomId: string
  declare code: string
  declare name: string
  declare outletType: string
  declare managerStaffId: string | null
  declare operatorVendorId: string | null
  declare openingTime: Date
  declare closingTime: Date
  declare preOrderCutoffTime: Date | null
  declare seatingCapacity: number | null
  declare contactPhone: string | null
  declare isCashAccepted: string
  declare isCardAccepted: string
  declare isWalletAccepted: string
  declare isPreOrderEnabled: string
  declare isActive: string
  declare notes: string | null
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initCntnCanteenOutletEntity(sequelize: Sequelize): typeof CntnCanteenOutletEntity {
  CntnCanteenOutletEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('cntn_canteen_outlet')"),
      },
      canteenOutletId: {
        type: DataTypes.TEXT,
        field: 'canteen_outlet_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
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
      code: {
        type: DataTypes.STRING(20),
        field: 'code',
        allowNull: false,
      },
      name: {
        type: DataTypes.TEXT,
        field: 'name',
        allowNull: false,
      },
      outletType: {
        type: DataTypes.STRING(20),
        field: 'outlet_type',
        allowNull: false,
        defaultValue: "cafeteria",
      },
      managerStaffId: {
        type: DataTypes.TEXT,
        field: 'manager_staff_id',
        allowNull: true,
        references: { model: 'hr_staff', key: 'staff_id' },
      },
      operatorVendorId: {
        type: DataTypes.TEXT,
        field: 'operator_vendor_id',
        allowNull: true,
        references: { model: 'org_vendor', key: 'vendor_id' },
      },
      openingTime: {
        type: DataTypes.TIME,
        field: 'opening_time',
        allowNull: false,
      },
      closingTime: {
        type: DataTypes.TIME,
        field: 'closing_time',
        allowNull: false,
      },
      preOrderCutoffTime: {
        type: DataTypes.TIME,
        field: 'pre_order_cutoff_time',
        allowNull: true,
      },
      seatingCapacity: {
        type: DataTypes.SMALLINT,
        field: 'seating_capacity',
        allowNull: true,
      },
      contactPhone: {
        type: DataTypes.TEXT,
        field: 'contact_phone',
        allowNull: true,
      },
      isCashAccepted: {
        type: DataTypes.TEXT,
        field: 'is_cash_accepted',
        allowNull: false,
        defaultValue: true,
      },
      isCardAccepted: {
        type: DataTypes.TEXT,
        field: 'is_card_accepted',
        allowNull: false,
        defaultValue: true,
      },
      isWalletAccepted: {
        type: DataTypes.TEXT,
        field: 'is_wallet_accepted',
        allowNull: false,
        defaultValue: true,
      },
      isPreOrderEnabled: {
        type: DataTypes.TEXT,
        field: 'is_pre_order_enabled',
        allowNull: false,
        defaultValue: false,
      },
      isActive: {
        type: DataTypes.TEXT,
        field: 'is_active',
        allowNull: false,
        defaultValue: true,
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
      tableName: 'cntn_canteen_outlet',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['code'] }
      ]
    }
  )
  return CntnCanteenOutletEntity
}
