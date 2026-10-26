import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type CommerceAddonAttributes = {
  recordCode?: string
  addonId: string | null
  applicationId: string
  addonCode: string
  name: string
  description?: string | null
  maxQuantity?: number | null
  purchaseMode?: string
  isActive?: string
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type CommerceAddonCreationAttributes = Optional<CommerceAddonAttributes, "recordCode" | "description" | "maxQuantity" | "purchaseMode" | "isActive" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class CommerceAddonEntity
  extends Model<CommerceAddonAttributes, CommerceAddonCreationAttributes>
  implements CommerceAddonAttributes
{
  declare recordCode: string
  declare addonId: string | null
  declare applicationId: string
  declare addonCode: string
  declare name: string
  declare description: string | null
  declare maxQuantity: number | null
  declare purchaseMode: string
  declare isActive: string
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initCommerceAddonEntity(sequelize: Sequelize): typeof CommerceAddonEntity {
  CommerceAddonEntity.init(
    {
      recordCode: {
        type: DataTypes.TEXT,
        field: 'record_code',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('commerce_addon')"),
      },
      addonId: {
        type: DataTypes.TEXT,
        field: 'addon_id',
        allowNull: true,
        primaryKey: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      applicationId: {
        type: DataTypes.TEXT,
        field: 'application_id',
        allowNull: false,
        references: { model: 'catalog_application', key: 'application_id' },
      },
      addonCode: {
        type: DataTypes.TEXT,
        field: 'addon_code',
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
      maxQuantity: {
        type: DataTypes.INTEGER,
        field: 'max_quantity',
        allowNull: true,
      },
      purchaseMode: {
        type: DataTypes.STRING(16),
        field: 'purchase_mode',
        allowNull: false,
        defaultValue: "plan_restricted",
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
      tableName: 'commerce_addon',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['application_id', 'addon_code'] }
      ]
    }
  )
  return CommerceAddonEntity
}
