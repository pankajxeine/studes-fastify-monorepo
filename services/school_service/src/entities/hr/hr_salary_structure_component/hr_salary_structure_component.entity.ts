import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type HrSalaryStructureComponentAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  salaryStructureComponentId?: string
  salaryStructureId: string
  salaryComponentCode: string
  calculationType: string
  fixedAmount?: string | null
  percentage?: string | null
  sortOrder?: number
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type HrSalaryStructureComponentCreationAttributes = Optional<HrSalaryStructureComponentAttributes, "id" | "publicId" | "recordCode" | "salaryStructureComponentId" | "fixedAmount" | "percentage" | "sortOrder" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class HrSalaryStructureComponentEntity
  extends Model<HrSalaryStructureComponentAttributes, HrSalaryStructureComponentCreationAttributes>
  implements HrSalaryStructureComponentAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare salaryStructureComponentId: string
  declare salaryStructureId: string
  declare salaryComponentCode: string
  declare calculationType: string
  declare fixedAmount: string | null
  declare percentage: string | null
  declare sortOrder: number
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initHrSalaryStructureComponentEntity(sequelize: Sequelize): typeof HrSalaryStructureComponentEntity {
  HrSalaryStructureComponentEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table (\r\n        'hr_salary_structure_component'\r\n    )"),
      },
      salaryStructureComponentId: {
        type: DataTypes.TEXT,
        field: 'salary_structure_component_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      salaryStructureId: {
        type: DataTypes.TEXT,
        field: 'salary_structure_id',
        allowNull: false,
        references: { model: 'hr_salary_structure', key: 'salary_structure_id' },
        onDelete: 'CASCADE',
      },
      salaryComponentCode: {
        type: DataTypes.TEXT,
        field: 'salary_component_code',
        allowNull: false,
        references: { model: 'hr_salary_component', key: 'salary_component_code' },
        onUpdate: 'CASCADE',
      },
      calculationType: {
        type: DataTypes.STRING(20),
        field: 'calculation_type',
        allowNull: false,
      },
      fixedAmount: {
        type: DataTypes.TEXT,
        field: 'fixed_amount',
        allowNull: true,
      },
      percentage: {
        type: DataTypes.TEXT,
        field: 'percentage',
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
      tableName: 'hr_salary_structure_component',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['salary_structure_id', 'salary_component_code'] }
      ]
    }
  )
  return HrSalaryStructureComponentEntity
}
