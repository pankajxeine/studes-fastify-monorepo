import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type HrSalaryComponentAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  salaryComponentCode?: string | null
  name: string
  kind: string
  description?: string | null
  isTaxable?: string
  isStatutory?: string
  payslipLabel?: string | null
  sortOrder?: number
  isActive?: string
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type HrSalaryComponentCreationAttributes = Optional<HrSalaryComponentAttributes, "id" | "publicId" | "recordCode" | "salaryComponentCode" | "description" | "isTaxable" | "isStatutory" | "payslipLabel" | "sortOrder" | "isActive" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class HrSalaryComponentEntity
  extends Model<HrSalaryComponentAttributes, HrSalaryComponentCreationAttributes>
  implements HrSalaryComponentAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare salaryComponentCode: string | null
  declare name: string
  declare kind: string
  declare description: string | null
  declare isTaxable: string
  declare isStatutory: string
  declare payslipLabel: string | null
  declare sortOrder: number
  declare isActive: string
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initHrSalaryComponentEntity(sequelize: Sequelize): typeof HrSalaryComponentEntity {
  HrSalaryComponentEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('hr_salary_component')"),
      },
      salaryComponentCode: {
        type: DataTypes.TEXT,
        field: 'salary_component_code',
        allowNull: true,
        unique: true,
      },
      name: {
        type: DataTypes.TEXT,
        field: 'name',
        allowNull: false,
      },
      kind: {
        type: DataTypes.TEXT,
        field: 'kind',
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        field: 'description',
        allowNull: true,
      },
      isTaxable: {
        type: DataTypes.TEXT,
        field: 'is_taxable',
        allowNull: false,
        defaultValue: true,
      },
      isStatutory: {
        type: DataTypes.TEXT,
        field: 'is_statutory',
        allowNull: false,
        defaultValue: false,
      },
      payslipLabel: {
        type: DataTypes.STRING(40),
        field: 'payslip_label',
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
      tableName: 'hr_salary_component',
      timestamps: true,
      underscored: true,
      freezeTableName: true
    }
  )
  return HrSalaryComponentEntity
}
