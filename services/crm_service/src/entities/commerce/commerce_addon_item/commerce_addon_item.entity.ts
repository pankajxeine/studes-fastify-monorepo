import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type CommerceAddonItemAttributes = {
  recordCode?: string
  addonItemId: string | null
  addonVersionId: string
  moduleId: string
  featureId?: string | null
  value?: unknown | null
}

export type CommerceAddonItemCreationAttributes = Optional<CommerceAddonItemAttributes, "recordCode" | "featureId" | "value">

export class CommerceAddonItemEntity
  extends Model<CommerceAddonItemAttributes, CommerceAddonItemCreationAttributes>
  implements CommerceAddonItemAttributes
{
  declare recordCode: string
  declare addonItemId: string | null
  declare addonVersionId: string
  declare moduleId: string
  declare featureId: string | null
  declare value: unknown | null
}

export function initCommerceAddonItemEntity(sequelize: Sequelize): typeof CommerceAddonItemEntity {
  CommerceAddonItemEntity.init(
    {
      recordCode: {
        type: DataTypes.TEXT,
        field: 'record_code',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('commerce_addon_item')"),
      },
      addonItemId: {
        type: DataTypes.TEXT,
        field: 'addon_item_id',
        allowNull: true,
        primaryKey: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      addonVersionId: {
        type: DataTypes.TEXT,
        field: 'addon_version_id',
        allowNull: false,
        references: { model: 'commerce_addon_version', key: 'addon_version_id' },
        onDelete: 'CASCADE',
      },
      moduleId: {
        type: DataTypes.TEXT,
        field: 'module_id',
        allowNull: false,
        references: { model: 'catalog_feature', key: 'module_id' },
      },
      featureId: {
        type: DataTypes.UUID,
        field: 'feature_id',
        allowNull: true,
      },
      value: {
        type: DataTypes.JSONB,
        field: 'value',
        allowNull: true,
      }
    },
    {
      sequelize,
      tableName: 'commerce_addon_item',
      timestamps: false,
      underscored: true,
      freezeTableName: true
    }
  )
  return CommerceAddonItemEntity
}
