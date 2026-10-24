import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type CntnCanteenOrderLineAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  canteenOrderLineId?: string
  canteenOrderId: string
  lineNo: number
  menuItemId: string
  quantity?: number
  unitPriceAmount: string
  lineAmount?: number | null
  specialInstructions?: string | null
  allergenWarning?: string | null
  allergenOverrideByUserId?: string | null
  allergenOverrideReason?: string | null
  allergenOverrideAt?: Date | null
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type CntnCanteenOrderLineCreationAttributes = Optional<CntnCanteenOrderLineAttributes, "id" | "publicId" | "recordCode" | "canteenOrderLineId" | "quantity" | "lineAmount" | "specialInstructions" | "allergenWarning" | "allergenOverrideByUserId" | "allergenOverrideReason" | "allergenOverrideAt" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class CntnCanteenOrderLineEntity
  extends Model<CntnCanteenOrderLineAttributes, CntnCanteenOrderLineCreationAttributes>
  implements CntnCanteenOrderLineAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare canteenOrderLineId: string
  declare canteenOrderId: string
  declare lineNo: number
  declare menuItemId: string
  declare quantity: number
  declare unitPriceAmount: string
  declare lineAmount: number | null
  declare specialInstructions: string | null
  declare allergenWarning: string | null
  declare allergenOverrideByUserId: string | null
  declare allergenOverrideReason: string | null
  declare allergenOverrideAt: Date | null
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initCntnCanteenOrderLineEntity(sequelize: Sequelize): typeof CntnCanteenOrderLineEntity {
  CntnCanteenOrderLineEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('cntn_canteen_order_line')"),
      },
      canteenOrderLineId: {
        type: DataTypes.TEXT,
        field: 'canteen_order_line_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      canteenOrderId: {
        type: DataTypes.TEXT,
        field: 'canteen_order_id',
        allowNull: false,
        references: { model: 'cntn_canteen_order', key: 'canteen_order_id' },
        onDelete: 'CASCADE',
      },
      lineNo: {
        type: DataTypes.SMALLINT,
        field: 'line_no',
        allowNull: false,
      },
      menuItemId: {
        type: DataTypes.TEXT,
        field: 'menu_item_id',
        allowNull: false,
        references: { model: 'cntn_menu_item', key: 'menu_item_id' },
      },
      quantity: {
        type: DataTypes.SMALLINT,
        field: 'quantity',
        allowNull: false,
        defaultValue: 1,
      },
      unitPriceAmount: {
        type: DataTypes.TEXT,
        field: 'unit_price_amount',
        allowNull: false,
      },
      lineAmount: {
        type: DataTypes.DECIMAL(12, 2),
        field: 'line_amount',
        allowNull: true,
        autoIncrement: true,
      },
      specialInstructions: {
        type: DataTypes.TEXT,
        field: 'special_instructions',
        allowNull: true,
      },
      allergenWarning: {
        type: DataTypes.TEXT,
        field: 'allergen_warning',
        allowNull: true,
      },
      allergenOverrideByUserId: {
        type: DataTypes.TEXT,
        field: 'allergen_override_by_user_id',
        allowNull: true,
        references: { model: 'iam_app_user', key: 'app_user_id' },
      },
      allergenOverrideReason: {
        type: DataTypes.TEXT,
        field: 'allergen_override_reason',
        allowNull: true,
      },
      allergenOverrideAt: {
        type: DataTypes.DATE,
        field: 'allergen_override_at',
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
      tableName: 'cntn_canteen_order_line',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['canteen_order_id', 'line_no'] }
      ]
    }
  )
  return CntnCanteenOrderLineEntity
}
