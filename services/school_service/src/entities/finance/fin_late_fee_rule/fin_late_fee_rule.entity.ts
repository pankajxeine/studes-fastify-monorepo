import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type FinLateFeeRuleAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  lateFeeRuleId?: string
  campusId: string
  feeHeadCode?: string | null
  feeHeadScope?: string | null
  name: string
  calcMethod: string
  graceDays?: number
  amount?: string | null
  percent?: string | null
  maxAmount?: string | null
  validFrom: string
  validTo?: Date | null
  validity?: string | null
  isActive?: string
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type FinLateFeeRuleCreationAttributes = Optional<FinLateFeeRuleAttributes, "id" | "publicId" | "recordCode" | "lateFeeRuleId" | "feeHeadCode" | "feeHeadScope" | "graceDays" | "amount" | "percent" | "maxAmount" | "validTo" | "validity" | "isActive" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class FinLateFeeRuleEntity
  extends Model<FinLateFeeRuleAttributes, FinLateFeeRuleCreationAttributes>
  implements FinLateFeeRuleAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare lateFeeRuleId: string
  declare campusId: string
  declare feeHeadCode: string | null
  declare feeHeadScope: string | null
  declare name: string
  declare calcMethod: string
  declare graceDays: number
  declare amount: string | null
  declare percent: string | null
  declare maxAmount: string | null
  declare validFrom: string
  declare validTo: Date | null
  declare validity: string | null
  declare isActive: string
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initFinLateFeeRuleEntity(sequelize: Sequelize): typeof FinLateFeeRuleEntity {
  FinLateFeeRuleEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('fin_late_fee_rule')"),
      },
      lateFeeRuleId: {
        type: DataTypes.TEXT,
        field: 'late_fee_rule_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      campusId: {
        type: DataTypes.TEXT,
        field: 'campus_id',
        allowNull: false,
        references: { model: 'org_campus', key: 'campus_id' },
      },
      feeHeadCode: {
        type: DataTypes.TEXT,
        field: 'fee_head_code',
        allowNull: true,
        references: { model: 'fin_fee_head', key: 'fee_head_code' },
        onUpdate: 'CASCADE',
      },
      feeHeadScope: {
        type: DataTypes.STRING(40),
        field: 'fee_head_scope',
        allowNull: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.TEXT,
        field: 'name',
        allowNull: false,
      },
      calcMethod: {
        type: DataTypes.STRING(10),
        field: 'calc_method',
        allowNull: false,
      },
      graceDays: {
        type: DataTypes.SMALLINT,
        field: 'grace_days',
        allowNull: false,
        defaultValue: 0,
      },
      amount: {
        type: DataTypes.TEXT,
        field: 'amount',
        allowNull: true,
      },
      percent: {
        type: DataTypes.TEXT,
        field: 'percent',
        allowNull: true,
      },
      maxAmount: {
        type: DataTypes.TEXT,
        field: 'max_amount',
        allowNull: true,
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
      validity: {
        type: DataTypes.TEXT,
        field: 'validity',
        allowNull: true,
        autoIncrement: true,
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
      tableName: 'fin_late_fee_rule',
      timestamps: true,
      underscored: true,
      freezeTableName: true
    }
  )
  return FinLateFeeRuleEntity
}
