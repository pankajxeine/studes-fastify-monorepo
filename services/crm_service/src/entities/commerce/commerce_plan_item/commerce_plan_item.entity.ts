import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type CommercePlanItemAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  planItemId?: string
  planVersionId: string
  moduleId: string
  featureId?: string | null
  value?: unknown | null
}

export type CommercePlanItemCreationAttributes = Optional<CommercePlanItemAttributes, "id" | "publicId" | "recordCode" | "planItemId" | "featureId" | "value">

export class CommercePlanItemEntity
  extends Model<CommercePlanItemAttributes, CommercePlanItemCreationAttributes>
  implements CommercePlanItemAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare planItemId: string
  declare planVersionId: string
  declare moduleId: string
  declare featureId: string | null
  declare value: unknown | null
}

export function initCommercePlanItemEntity(sequelize: Sequelize): typeof CommercePlanItemEntity {
  CommercePlanItemEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('commerce_plan_item')"),
      },
      planItemId: {
        type: DataTypes.TEXT,
        field: 'plan_item_id',
        allowNull: false,
        unique: true,
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
