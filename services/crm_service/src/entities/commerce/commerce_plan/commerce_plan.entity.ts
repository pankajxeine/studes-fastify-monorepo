import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type CommercePlanAttributes = {
  recordCode?: string
  planId: string | null
  applicationId: string
  planCode: string
  name: string
  description?: string | null
  tier: number
  isPublic?: string
  isActive?: string
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type CommercePlanCreationAttributes = Optional<CommercePlanAttributes, "recordCode" | "description" | "isPublic" | "isActive" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class CommercePlanEntity
  extends Model<CommercePlanAttributes, CommercePlanCreationAttributes>
  implements CommercePlanAttributes
{
  declare recordCode: string
  declare planId: string | null
  declare applicationId: string
  declare planCode: string
  declare name: string
  declare description: string | null
  declare tier: number
  declare isPublic: string
  declare isActive: string
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initCommercePlanEntity(sequelize: Sequelize): typeof CommercePlanEntity {
  CommercePlanEntity.init(
    {
      recordCode: {
        type: DataTypes.TEXT,
        field: 'record_code',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('commerce_plan')"),
      },
      planId: {
        type: DataTypes.TEXT,
        field: 'plan_id',
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
      planCode: {
        type: DataTypes.TEXT,
        field: 'plan_code',
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
      tier: {
        type: DataTypes.SMALLINT,
        field: 'tier',
        allowNull: false,
      },
      isPublic: {
        type: DataTypes.TEXT,
        field: 'is_public',
        allowNull: false,
        defaultValue: true,
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
      tableName: 'commerce_plan',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['application_id', 'plan_code'] }
      ]
    }
  )
  return CommercePlanEntity
}
