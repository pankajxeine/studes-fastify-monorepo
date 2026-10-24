import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type FinFeeInstallmentAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  feeInstallmentId?: string
  feeStructureId: string
  installmentNo: number
  name: string
  termId?: string | null
  issueOn: string
  dueOn: string
  amount: string
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type FinFeeInstallmentCreationAttributes = Optional<FinFeeInstallmentAttributes, "id" | "publicId" | "recordCode" | "feeInstallmentId" | "termId" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class FinFeeInstallmentEntity
  extends Model<FinFeeInstallmentAttributes, FinFeeInstallmentCreationAttributes>
  implements FinFeeInstallmentAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare feeInstallmentId: string
  declare feeStructureId: string
  declare installmentNo: number
  declare name: string
  declare termId: string | null
  declare issueOn: string
  declare dueOn: string
  declare amount: string
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initFinFeeInstallmentEntity(sequelize: Sequelize): typeof FinFeeInstallmentEntity {
  FinFeeInstallmentEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('fin_fee_installment')"),
      },
      feeInstallmentId: {
        type: DataTypes.TEXT,
        field: 'fee_installment_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      feeStructureId: {
        type: DataTypes.TEXT,
        field: 'fee_structure_id',
        allowNull: false,
        references: { model: 'fin_fee_structure', key: 'fee_structure_id' },
        onDelete: 'CASCADE',
      },
      installmentNo: {
        type: DataTypes.SMALLINT,
        field: 'installment_no',
        allowNull: false,
      },
      name: {
        type: DataTypes.TEXT,
        field: 'name',
        allowNull: false,
      },
      termId: {
        type: DataTypes.TEXT,
        field: 'term_id',
        allowNull: true,
        references: { model: 'acad_term', key: 'term_id' },
      },
      issueOn: {
        type: DataTypes.TEXT,
        field: 'issue_on',
        allowNull: false,
      },
      dueOn: {
        type: DataTypes.TEXT,
        field: 'due_on',
        allowNull: false,
      },
      amount: {
        type: DataTypes.TEXT,
        field: 'amount',
        allowNull: false,
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
      tableName: 'fin_fee_installment',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['fee_structure_id', 'installment_no'] }
      ]
    }
  )
  return FinFeeInstallmentEntity
}
