import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type HrLeaveTypeAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  leaveTypeCode?: string | null
  name: string
  description?: string | null
  isPaid?: string
  isBalanceTracked?: string
  annualQuotaDays?: number | null
  carryForwardMaxDays?: number
  maxConsecutiveDays?: number | null
  allowsHalfDay?: string
  requiresDocumentAfterDays?: number | null
  applicableCategory?: string | null
  applicableGenderCode?: string | null
  sortOrder?: number
  isActive?: string
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type HrLeaveTypeCreationAttributes = Optional<HrLeaveTypeAttributes, "id" | "publicId" | "recordCode" | "leaveTypeCode" | "description" | "isPaid" | "isBalanceTracked" | "annualQuotaDays" | "carryForwardMaxDays" | "maxConsecutiveDays" | "allowsHalfDay" | "requiresDocumentAfterDays" | "applicableCategory" | "applicableGenderCode" | "sortOrder" | "isActive" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class HrLeaveTypeEntity
  extends Model<HrLeaveTypeAttributes, HrLeaveTypeCreationAttributes>
  implements HrLeaveTypeAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare leaveTypeCode: string | null
  declare name: string
  declare description: string | null
  declare isPaid: string
  declare isBalanceTracked: string
  declare annualQuotaDays: number | null
  declare carryForwardMaxDays: number
  declare maxConsecutiveDays: number | null
  declare allowsHalfDay: string
  declare requiresDocumentAfterDays: number | null
  declare applicableCategory: string | null
  declare applicableGenderCode: string | null
  declare sortOrder: number
  declare isActive: string
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initHrLeaveTypeEntity(sequelize: Sequelize): typeof HrLeaveTypeEntity {
  HrLeaveTypeEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('hr_leave_type')"),
      },
      leaveTypeCode: {
        type: DataTypes.TEXT,
        field: 'leave_type_code',
        allowNull: true,
        unique: true,
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
      isPaid: {
        type: DataTypes.TEXT,
        field: 'is_paid',
        allowNull: false,
        defaultValue: true,
      },
      isBalanceTracked: {
        type: DataTypes.TEXT,
        field: 'is_balance_tracked',
        allowNull: false,
        defaultValue: true,
      },
      annualQuotaDays: {
        type: DataTypes.DECIMAL(5, 1),
        field: 'annual_quota_days',
        allowNull: true,
      },
      carryForwardMaxDays: {
        type: DataTypes.DECIMAL(5, 1),
        field: 'carry_forward_max_days',
        allowNull: false,
        defaultValue: 0,
      },
      maxConsecutiveDays: {
        type: DataTypes.SMALLINT,
        field: 'max_consecutive_days',
        allowNull: true,
      },
      allowsHalfDay: {
        type: DataTypes.TEXT,
        field: 'allows_half_day',
        allowNull: false,
        defaultValue: true,
      },
      requiresDocumentAfterDays: {
        type: DataTypes.SMALLINT,
        field: 'requires_document_after_days',
        allowNull: true,
      },
      applicableCategory: {
        type: DataTypes.TEXT,
        field: 'applicable_category',
        allowNull: true,
      },
      applicableGenderCode: {
        type: DataTypes.TEXT,
        field: 'applicable_gender_code',
        allowNull: true,
        references: { model: 'ppl_gender', key: 'gender_code' },
        onUpdate: 'CASCADE',
      },
      sortOrder: {
        type: DataTypes.SMALLINT,
        field: 'sort_order',
        allowNull: false,
        defaultValue: 0,
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
      tableName: 'hr_leave_type',
      timestamps: true,
      underscored: true,
      freezeTableName: true
    }
  )
  return HrLeaveTypeEntity
}
