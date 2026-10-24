import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type HrPayslipLineAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  payslipLineId?: string
  payslipId: string
  salaryComponentCode: string
  kind: string
  amount: string
  calculationNote?: string | null
  sortOrder?: number
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type HrPayslipLineCreationAttributes = Optional<HrPayslipLineAttributes, "id" | "publicId" | "recordCode" | "payslipLineId" | "calculationNote" | "sortOrder" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class HrPayslipLineEntity
  extends Model<HrPayslipLineAttributes, HrPayslipLineCreationAttributes>
  implements HrPayslipLineAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare payslipLineId: string
  declare payslipId: string
  declare salaryComponentCode: string
  declare kind: string
  declare amount: string
  declare calculationNote: string | null
  declare sortOrder: number
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initHrPayslipLineEntity(sequelize: Sequelize): typeof HrPayslipLineEntity {
  HrPayslipLineEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('hr_payslip_line')"),
      },
      payslipLineId: {
        type: DataTypes.TEXT,
        field: 'payslip_line_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      payslipId: {
        type: DataTypes.TEXT,
        field: 'payslip_id',
        allowNull: false,
        references: { model: 'hr_payslip', key: 'payslip_id' },
        onDelete: 'CASCADE',
      },
      salaryComponentCode: {
        type: DataTypes.TEXT,
        field: 'salary_component_code',
        allowNull: false,
        references: { model: 'hr_salary_component', key: 'salary_component_code' },
        onUpdate: 'CASCADE',
      },
      kind: {
        type: DataTypes.TEXT,
        field: 'kind',
        allowNull: false,
      },
      amount: {
        type: DataTypes.TEXT,
        field: 'amount',
        allowNull: false,
      },
      calculationNote: {
        type: DataTypes.TEXT,
        field: 'calculation_note',
        allowNull: true,
      },
      sortOrder: {
        type: DataTypes.SMALLINT,
        field: 'sort_order',
        allowNull: false,
        defaultValue: 0,
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
      tableName: 'hr_payslip_line',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['payslip_id', 'salary_component_code'] }
      ]
    }
  )
  return HrPayslipLineEntity
}
