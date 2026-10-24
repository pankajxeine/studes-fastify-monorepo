import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type CntnMenuItemAllergenAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  menuItemId: string
  allergenCode: string
  createdAt?: Date
  createdBy?: string | null
  UNIQUE?: string | null
}

export type CntnMenuItemAllergenCreationAttributes = Optional<CntnMenuItemAllergenAttributes, "id" | "publicId" | "recordCode" | "createdAt" | "createdBy" | "UNIQUE">

export class CntnMenuItemAllergenEntity
  extends Model<CntnMenuItemAllergenAttributes, CntnMenuItemAllergenCreationAttributes>
  implements CntnMenuItemAllergenAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare menuItemId: string
  declare allergenCode: string
  declare createdAt: Date
  declare createdBy: string | null
  declare UNIQUE: string | null
}

export function initCntnMenuItemAllergenEntity(sequelize: Sequelize): typeof CntnMenuItemAllergenEntity {
  CntnMenuItemAllergenEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('cntn_menu_item_allergen')"),
      },
      menuItemId: {
        type: DataTypes.TEXT,
        field: 'menu_item_id',
        allowNull: false,
        references: { model: 'cntn_menu_item', key: 'menu_item_id' },
        onDelete: 'CASCADE',
      },
      allergenCode: {
        type: DataTypes.TEXT,
        field: 'allergen_code',
        allowNull: false,
        references: { model: 'cntn_allergen', key: 'allergen_code' },
        onUpdate: 'CASCADE',
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
      UNIQUE: {
        type: DataTypes.TEXT,
        field: 'UNIQUE',
        allowNull: true,
      }
    },
    {
      sequelize,
      tableName: 'cntn_menu_item_allergen',
      timestamps: false,
      underscored: true,
      freezeTableName: true
    }
  )
  return CntnMenuItemAllergenEntity
}
