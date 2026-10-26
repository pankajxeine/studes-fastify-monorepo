import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type CommissionCommissionPlanAttributes = {
  recordCode?: string
  commissionPlanId: string | null
  planCode: string
  name: string
  currencyCode: string
  clawbackDays?: number
  validFrom: string
  validTo?: Date | null
  isActive?: string
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type CommissionCommissionPlanCreationAttributes = Optional<CommissionCommissionPlanAttributes, "recordCode" | "clawbackDays" | "validTo" | "isActive" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class CommissionCommissionPlanEntity
  extends Model<CommissionCommissionPlanAttributes, CommissionCommissionPlanCreationAttributes>
  implements CommissionCommissionPlanAttributes
{
  declare recordCode: string
  declare commissionPlanId: string | null
  declare planCode: string
  declare name: string
  declare currencyCode: string
  declare clawbackDays: number
  declare validFrom: string
  declare validTo: Date | null
  declare isActive: string
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initCommissionCommissionPlanEntity(sequelize: Sequelize): typeof CommissionCommissionPlanEntity {
  CommissionCommissionPlanEntity.init(
    {
      recordCode: {
        type: DataTypes.TEXT,
        field: 'record_code',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('commission_commission_plan')"),
      },
      commissionPlanId: {
        type: DataTypes.TEXT,
        field: 'commission_plan_id',
        allowNull: true,
        primaryKey: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
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
      currencyCode: {
        type: DataTypes.TEXT,
        field: 'currency_code',
        allowNull: false,
        references: { model: 'platform_currency', key: 'currency_code' },
      },
      clawbackDays: {
        type: DataTypes.SMALLINT,
        field: 'clawback_days',
        allowNull: false,
        defaultValue: 90,
      },
      validFrom: {
        type: DataTypes.TEXT,
        field: 'valid_from',
        allowNull: false,
      },
      validTo: {
        type: DataTypes.DATEONLY,
        field: 'valid_to',
        allowNull: true,
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
      tableName: 'commission_commission_plan',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['plan_code'] }
      ]
    }
  )
  return CommissionCommissionPlanEntity
}
