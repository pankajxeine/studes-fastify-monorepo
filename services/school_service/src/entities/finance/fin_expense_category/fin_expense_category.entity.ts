import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type FinExpenseCategoryAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  expenseCategoryCode?: string | null
  name: string
  description?: string | null
  glAccountCode?: string | null
  approvalLimitAmount?: string | null
  sortOrder?: number
  isActive?: string
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type FinExpenseCategoryCreationAttributes = Optional<FinExpenseCategoryAttributes, "id" | "publicId" | "recordCode" | "expenseCategoryCode" | "description" | "glAccountCode" | "approvalLimitAmount" | "sortOrder" | "isActive" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class FinExpenseCategoryEntity
  extends Model<FinExpenseCategoryAttributes, FinExpenseCategoryCreationAttributes>
  implements FinExpenseCategoryAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare expenseCategoryCode: string | null
  declare name: string
  declare description: string | null
  declare glAccountCode: string | null
  declare approvalLimitAmount: string | null
  declare sortOrder: number
  declare isActive: string
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initFinExpenseCategoryEntity(sequelize: Sequelize): typeof FinExpenseCategoryEntity {
  FinExpenseCategoryEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('fin_expense_category')"),
      },
      expenseCategoryCode: {
        type: DataTypes.TEXT,
        field: 'expense_category_code',
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
      glAccountCode: {
        type: DataTypes.STRING(20),
        field: 'gl_account_code',
        allowNull: true,
      },
      approvalLimitAmount: {
        type: DataTypes.TEXT,
        field: 'approval_limit_amount',
        allowNull: true,
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
      tableName: 'fin_expense_category',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['name'] }
      ]
    }
  )
  return FinExpenseCategoryEntity
}
