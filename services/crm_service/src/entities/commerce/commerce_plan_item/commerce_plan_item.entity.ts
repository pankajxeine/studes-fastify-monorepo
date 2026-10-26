import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type CommercePlanItemAttributes = {
  recordCode?: string
  planItemId: string | null
  planVersionId: string
  moduleId: string
  featureId?: string | null
  value?: unknown | null
}

export type CommercePlanItemCreationAttributes = Optional<CommercePlanItemAttributes, "recordCode" | "featureId" | "value">

export class CommercePlanItemEntity
  extends Model<CommercePlanItemAttributes, CommercePlanItemCreationAttributes>
  implements CommercePlanItemAttributes
{
  declare recordCode: string
  declare planItemId: string | null
  declare planVersionId: string
  declare moduleId: string
  declare featureId: string | null
  declare value: unknown | null
}

export function initCommercePlanItemEntity(sequelize: Sequelize): typeof CommercePlanItemEntity {
  CommercePlanItemEntity.init(
    {
      recordCode: {
        type: DataTypes.TEXT,
        field: 'record_code',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('commerce_plan_item')"),
      },
      planItemId: {
        type: DataTypes.TEXT,
        field: 'plan_item_id',
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
      tableName: 'commerce_plan_item',
      timestamps: false,
      underscored: true,
      freezeTableName: true
    }
  )
  return CommercePlanItemEntity
}
