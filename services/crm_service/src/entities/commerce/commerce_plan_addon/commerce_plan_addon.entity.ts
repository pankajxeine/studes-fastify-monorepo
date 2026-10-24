import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type CommercePlanAddonAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  planVersionId: string
  addonId: string
  UNIQUE?: string | null
}

export type CommercePlanAddonCreationAttributes = Optional<CommercePlanAddonAttributes, "id" | "publicId" | "recordCode" | "UNIQUE">

export class CommercePlanAddonEntity
  extends Model<CommercePlanAddonAttributes, CommercePlanAddonCreationAttributes>
  implements CommercePlanAddonAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare planVersionId: string
  declare addonId: string
  declare UNIQUE: string | null
}

export function initCommercePlanAddonEntity(sequelize: Sequelize): typeof CommercePlanAddonEntity {
  CommercePlanAddonEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('commerce_plan_addon')"),
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
      },
      UNIQUE: {
        type: DataTypes.TEXT,
        field: 'UNIQUE',
        allowNull: true,
      }
    },
    {
      sequelize,
      tableName: 'commerce_plan_addon',
      timestamps: false,
      underscored: true,
      freezeTableName: true
    }
  )
  return CommercePlanAddonEntity
}
