import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type InvntItemAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  itemId?: string
  itemCategoryCode: string
  sku: string
  name: string
  description?: string | null
  unitOfMeasure?: string
  isConsumable?: string
  isAsset?: string
  reorderLevel?: number
  reorderQuantity?: number
  standardCostAmount?: string
  preferredVendorId?: string | null
  quantityOnHand?: number
  isActive?: string
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
  deletedAt?: Date | null
}

export type InvntItemCreationAttributes = Optional<InvntItemAttributes, "id" | "publicId" | "recordCode" | "itemId" | "description" | "unitOfMeasure" | "isConsumable" | "isAsset" | "reorderLevel" | "reorderQuantity" | "standardCostAmount" | "preferredVendorId" | "quantityOnHand" | "isActive" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy" | "deletedAt">

export class InvntItemEntity
  extends Model<InvntItemAttributes, InvntItemCreationAttributes>
  implements InvntItemAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare itemId: string
  declare itemCategoryCode: string
  declare sku: string
  declare name: string
  declare description: string | null
  declare unitOfMeasure: string
  declare isConsumable: string
  declare isAsset: string
  declare reorderLevel: number
  declare reorderQuantity: number
  declare standardCostAmount: string
  declare preferredVendorId: string | null
  declare quantityOnHand: number
  declare isActive: string
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
  declare deletedAt: Date | null
}

export function initInvntItemEntity(sequelize: Sequelize): typeof InvntItemEntity {
  InvntItemEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('invnt_item')"),
      },
      itemId: {
        type: DataTypes.TEXT,
        field: 'item_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      itemCategoryCode: {
        type: DataTypes.TEXT,
        field: 'item_category_code',
        allowNull: false,
        references: { model: 'invnt_item_category', key: 'item_category_code' },
        onUpdate: 'CASCADE',
      },
      sku: {
        type: DataTypes.STRING(30),
        field: 'sku',
        allowNull: false,
      },
      name: {
        type: DataTypes.TEXT,
        field: 'name',
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        field: 'description',
        allowNull: true,
      },
      unitOfMeasure: {
        type: DataTypes.STRING(20),
        field: 'unit_of_measure',
        allowNull: false,
        defaultValue: "each",
      },
      isConsumable: {
        type: DataTypes.TEXT,
        field: 'is_consumable',
        allowNull: false,
        defaultValue: true,
      },
      isAsset: {
        type: DataTypes.TEXT,
        field: 'is_asset',
        allowNull: false,
        defaultValue: false,
      },
      reorderLevel: {
        type: DataTypes.DECIMAL(12, 2),
        field: 'reorder_level',
        allowNull: false,
        defaultValue: 0,
      },
      reorderQuantity: {
        type: DataTypes.DECIMAL(12, 2),
        field: 'reorder_quantity',
        allowNull: false,
        defaultValue: 0,
      },
      standardCostAmount: {
        type: DataTypes.TEXT,
        field: 'standard_cost_amount',
        allowNull: false,
        defaultValue: 0,
      },
      preferredVendorId: {
        type: DataTypes.TEXT,
        field: 'preferred_vendor_id',
        allowNull: true,
        references: { model: 'org_vendor', key: 'vendor_id' },
      },
      quantityOnHand: {
        type: DataTypes.DECIMAL(12, 2),
        field: 'quantity_on_hand',
        allowNull: false,
        defaultValue: 0,
      },
      isActive: {
        type: DataTypes.TEXT,
        field: 'is_active',
        allowNull: false,
        defaultValue: true,
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
      },
      deletedAt: {
        type: DataTypes.DATE,
        field: 'deleted_at',
        allowNull: true,
      }
    },
    {
      sequelize,
      tableName: 'invnt_item',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: true,
      deletedAt: 'deletedAt',
      indexes: [
      { unique: true, fields: ['sku'] }
      ]
    }
  )
  return InvntItemEntity
}
