import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type InvntItemCategoryAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  itemCategoryCode?: string | null
  name: string
  description?: string | null
  isConsumable?: string
  sortOrder?: number
  isActive?: string
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type InvntItemCategoryCreationAttributes = Optional<InvntItemCategoryAttributes, "id" | "publicId" | "recordCode" | "itemCategoryCode" | "description" | "isConsumable" | "sortOrder" | "isActive" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class InvntItemCategoryEntity
  extends Model<InvntItemCategoryAttributes, InvntItemCategoryCreationAttributes>
  implements InvntItemCategoryAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare itemCategoryCode: string | null
  declare name: string
  declare description: string | null
  declare isConsumable: string
  declare sortOrder: number
  declare isActive: string
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initInvntItemCategoryEntity(sequelize: Sequelize): typeof InvntItemCategoryEntity {
  InvntItemCategoryEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('invnt_item_category')"),
      },
      itemCategoryCode: {
        type: DataTypes.TEXT,
        field: 'item_category_code',
        allowNull: true,
        unique: true,
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
      isConsumable: {
        type: DataTypes.TEXT,
        field: 'is_consumable',
        allowNull: false,
        defaultValue: true,
      },
      sortOrder: {
        type: DataTypes.SMALLINT,
        field: 'sort_order',
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
      }
    },
    {
      sequelize,
      tableName: 'invnt_item_category',
      timestamps: true,
      underscored: true,
      freezeTableName: true
    }
  )
  return InvntItemCategoryEntity
}
