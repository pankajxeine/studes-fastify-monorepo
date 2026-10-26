import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type CommercePlanAddonAttributes = {
  recordCode?: string
  planAddonId: string | null
  planVersionId: string
  addonId: string
}

export type CommercePlanAddonCreationAttributes = Optional<CommercePlanAddonAttributes, "recordCode">

export class CommercePlanAddonEntity
  extends Model<CommercePlanAddonAttributes, CommercePlanAddonCreationAttributes>
  implements CommercePlanAddonAttributes
{
  declare recordCode: string
  declare planAddonId: string | null
  declare planVersionId: string
  declare addonId: string
}

export function initCommercePlanAddonEntity(sequelize: Sequelize): typeof CommercePlanAddonEntity {
  CommercePlanAddonEntity.init(
    {
      recordCode: {
        type: DataTypes.TEXT,
        field: 'record_code',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('commerce_plan_addon')"),
      },
      planAddonId: {
        type: DataTypes.TEXT,
        field: 'plan_addon_id',
        allowNull: true,
        primaryKey: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      planVersionId: {
        type: DataTypes.TEXT,
        field: 'plan_version_id',
        allowNull: false,
        references: { model: 'commerce_plan_version', key: 'plan_version_id' },
        onDelete: 'CASCADE',
      },
      addonId: {
        type: DataTypes.TEXT,
        field: 'addon_id',
        allowNull: false,
        references: { model: 'commerce_addon', key: 'addon_id' },
      }
    },
    {
      sequelize,
      tableName: 'commerce_plan_addon',
      timestamps: false,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['plan_version_id', 'addon_id'] }
      ]
    }
  )
  return CommercePlanAddonEntity
}
