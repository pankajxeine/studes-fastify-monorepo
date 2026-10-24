import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type ExamAssessmentWeightAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  assessmentWeightId?: string
  courseOfferingId: string
  assessmentTypeCode: string
  weightPct: string
  bestOfCount?: number | null
  isMandatory?: string
  remarks?: string | null
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type ExamAssessmentWeightCreationAttributes = Optional<ExamAssessmentWeightAttributes, "id" | "publicId" | "recordCode" | "assessmentWeightId" | "bestOfCount" | "isMandatory" | "remarks" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class ExamAssessmentWeightEntity
  extends Model<ExamAssessmentWeightAttributes, ExamAssessmentWeightCreationAttributes>
  implements ExamAssessmentWeightAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare assessmentWeightId: string
  declare courseOfferingId: string
  declare assessmentTypeCode: string
  declare weightPct: string
  declare bestOfCount: number | null
  declare isMandatory: string
  declare remarks: string | null
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initExamAssessmentWeightEntity(sequelize: Sequelize): typeof ExamAssessmentWeightEntity {
  ExamAssessmentWeightEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('exam_assessment_weight')"),
      },
      assessmentWeightId: {
        type: DataTypes.TEXT,
        field: 'assessment_weight_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      courseOfferingId: {
        type: DataTypes.TEXT,
        field: 'course_offering_id',
        allowNull: false,
        references: { model: 'acad_course_offering', key: 'course_offering_id' },
      },
      assessmentTypeCode: {
        type: DataTypes.TEXT,
        field: 'assessment_type_code',
        allowNull: false,
        references: { model: 'exam_assessment_type', key: 'assessment_type_code' },
        onUpdate: 'CASCADE',
      },
      weightPct: {
        type: DataTypes.TEXT,
        field: 'weight_pct',
        allowNull: false,
      },
      bestOfCount: {
        type: DataTypes.SMALLINT,
        field: 'best_of_count',
        allowNull: true,
      },
      isMandatory: {
        type: DataTypes.TEXT,
        field: 'is_mandatory',
        allowNull: false,
        defaultValue: true,
      },
      remarks: {
        type: DataTypes.TEXT,
        field: 'remarks',
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
      tableName: 'exam_assessment_weight',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['course_offering_id', 'assessment_type_code'] }
      ]
    }
  )
  return ExamAssessmentWeightEntity
}
