import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type ExamReportCardRemarkAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  reportCardRemarkId?: string
  reportCardId: string
  remarkByStaffId: string
  remarkKind: string
  courseOfferingId?: string | null
  remark: string
  areasToImprove?: string | null
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type ExamReportCardRemarkCreationAttributes = Optional<ExamReportCardRemarkAttributes, "id" | "publicId" | "recordCode" | "reportCardRemarkId" | "courseOfferingId" | "areasToImprove" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class ExamReportCardRemarkEntity
  extends Model<ExamReportCardRemarkAttributes, ExamReportCardRemarkCreationAttributes>
  implements ExamReportCardRemarkAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare reportCardRemarkId: string
  declare reportCardId: string
  declare remarkByStaffId: string
  declare remarkKind: string
  declare courseOfferingId: string | null
  declare remark: string
  declare areasToImprove: string | null
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initExamReportCardRemarkEntity(sequelize: Sequelize): typeof ExamReportCardRemarkEntity {
  ExamReportCardRemarkEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('exam_report_card_remark')"),
      },
      reportCardRemarkId: {
        type: DataTypes.TEXT,
        field: 'report_card_remark_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      reportCardId: {
        type: DataTypes.TEXT,
        field: 'report_card_id',
        allowNull: false,
        references: { model: 'exam_report_card', key: 'report_card_id' },
        onDelete: 'CASCADE',
      },
      remarkByStaffId: {
        type: DataTypes.TEXT,
        field: 'remark_by_staff_id',
        allowNull: false,
        references: { model: 'hr_staff', key: 'staff_id' },
      },
      remarkKind: {
        type: DataTypes.TEXT,
        field: 'remark_kind',
        allowNull: false,
      },
      courseOfferingId: {
        type: DataTypes.TEXT,
        field: 'course_offering_id',
        allowNull: true,
        references: { model: 'acad_course_offering', key: 'course_offering_id' },
      },
      remark: {
        type: DataTypes.TEXT,
        field: 'remark',
        allowNull: false,
      },
      areasToImprove: {
        type: DataTypes.TEXT,
        field: 'areas_to_improve',
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
      tableName: 'exam_report_card_remark',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['report_card_id', 'remark_kind', 'course_offering_id'] }
      ]
    }
  )
  return ExamReportCardRemarkEntity
}
