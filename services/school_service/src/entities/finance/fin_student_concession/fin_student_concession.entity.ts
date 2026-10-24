import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type FinStudentConcessionAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  studentConcessionId?: string
  studentId: string
  academicYearId: string
  concessionTypeCode?: string | null
  scholarshipId?: string | null
  feeHeadCode?: string | null
  discountKind?: string
  discountValue: number
  maxAmount?: string | null
  reason: string
  fileId?: string | null
  status?: string
  requestedByUserId?: string | null
  requestedAt?: Date
  approvedByUserId?: string | null
  approvedAt?: Date | null
  rejectionReason?: string | null
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type FinStudentConcessionCreationAttributes = Optional<FinStudentConcessionAttributes, "id" | "publicId" | "recordCode" | "studentConcessionId" | "concessionTypeCode" | "scholarshipId" | "feeHeadCode" | "discountKind" | "maxAmount" | "fileId" | "status" | "requestedByUserId" | "requestedAt" | "approvedByUserId" | "approvedAt" | "rejectionReason" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class FinStudentConcessionEntity
  extends Model<FinStudentConcessionAttributes, FinStudentConcessionCreationAttributes>
  implements FinStudentConcessionAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare studentConcessionId: string
  declare studentId: string
  declare academicYearId: string
  declare concessionTypeCode: string | null
  declare scholarshipId: string | null
  declare feeHeadCode: string | null
  declare discountKind: string
  declare discountValue: number
  declare maxAmount: string | null
  declare reason: string
  declare fileId: string | null
  declare status: string
  declare requestedByUserId: string | null
  declare requestedAt: Date
  declare approvedByUserId: string | null
  declare approvedAt: Date | null
  declare rejectionReason: string | null
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initFinStudentConcessionEntity(sequelize: Sequelize): typeof FinStudentConcessionEntity {
  FinStudentConcessionEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('fin_student_concession')"),
      },
      studentConcessionId: {
        type: DataTypes.TEXT,
        field: 'student_concession_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      studentId: {
        type: DataTypes.TEXT,
        field: 'student_id',
        allowNull: false,
        references: { model: 'sis_student', key: 'student_id' },
      },
      academicYearId: {
        type: DataTypes.TEXT,
        field: 'academic_year_id',
        allowNull: false,
        references: { model: 'acad_academic_year', key: 'academic_year_id' },
      },
      concessionTypeCode: {
        type: DataTypes.TEXT,
        field: 'concession_type_code',
        allowNull: true,
        references: { model: 'fin_concession_type', key: 'concession_type_code' },
        onUpdate: 'CASCADE',
      },
      scholarshipId: {
        type: DataTypes.TEXT,
        field: 'scholarship_id',
        allowNull: true,
        references: { model: 'fin_scholarship', key: 'scholarship_id' },
      },
      feeHeadCode: {
        type: DataTypes.TEXT,
        field: 'fee_head_code',
        allowNull: true,
        references: { model: 'fin_fee_head', key: 'fee_head_code' },
        onUpdate: 'CASCADE',
      },
      discountKind: {
        type: DataTypes.TEXT,
        field: 'discount_kind',
        allowNull: false,
        defaultValue: "percent",
      },
      discountValue: {
        type: DataTypes.DECIMAL(12, 2),
        field: 'discount_value',
        allowNull: false,
      },
      maxAmount: {
        type: DataTypes.TEXT,
        field: 'max_amount',
        allowNull: true,
      },
      reason: {
        type: DataTypes.TEXT,
        field: 'reason',
        allowNull: false,
      },
      fileId: {
        type: DataTypes.TEXT,
        field: 'file_id',
        allowNull: true,
        references: { model: 'docs_file', key: 'file_id' },
      },
      status: {
        type: DataTypes.TEXT,
        field: 'status',
        allowNull: false,
        defaultValue: "pending",
      },
      requestedByUserId: {
        type: DataTypes.TEXT,
        field: 'requested_by_user_id',
        allowNull: true,
        references: { model: 'iam_app_user', key: 'app_user_id' },
      },
      requestedAt: {
        type: DataTypes.DATE,
        field: 'requested_at',
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      approvedByUserId: {
        type: DataTypes.TEXT,
        field: 'approved_by_user_id',
        allowNull: true,
        references: { model: 'iam_app_user', key: 'app_user_id' },
      },
      approvedAt: {
        type: DataTypes.DATE,
        field: 'approved_at',
        allowNull: true,
      },
      rejectionReason: {
        type: DataTypes.TEXT,
        field: 'rejection_reason',
        allowNull: true,
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
      tableName: 'fin_student_concession',
      timestamps: true,
      underscored: true,
      freezeTableName: true
    }
  )
  return FinStudentConcessionEntity
}
