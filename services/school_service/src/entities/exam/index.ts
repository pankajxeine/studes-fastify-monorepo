import type { Sequelize } from 'sequelize'
import { initExamAssessmentTypeEntity } from './exam_assessment_type/exam_assessment_type.entity'
import { initExamAssessmentWeightEntity } from './exam_assessment_weight/exam_assessment_weight.entity'
import { initExamExamEntity } from './exam_exam/exam_exam.entity'
import { initExamExamScheduleEntity } from './exam_exam_schedule/exam_exam_schedule.entity'
import { initExamStudentMarkEntity } from './exam_student_mark/exam_student_mark.entity'
import { initExamCourseResultEntity } from './exam_course_result/exam_course_result.entity'
import { initExamReportCardEntity } from './exam_report_card/exam_report_card.entity'
import { initExamReportCardRemarkEntity } from './exam_report_card_remark/exam_report_card_remark.entity'

export type GeneratedModels = {
  exam_assessment_type: ReturnType<typeof initExamAssessmentTypeEntity>;
  exam_assessment_weight: ReturnType<typeof initExamAssessmentWeightEntity>;
  exam_exam: ReturnType<typeof initExamExamEntity>;
  exam_exam_schedule: ReturnType<typeof initExamExamScheduleEntity>;
  exam_student_mark: ReturnType<typeof initExamStudentMarkEntity>;
  exam_course_result: ReturnType<typeof initExamCourseResultEntity>;
  exam_report_card: ReturnType<typeof initExamReportCardEntity>;
  exam_report_card_remark: ReturnType<typeof initExamReportCardRemarkEntity>;
}

export function createGeneratedModels(sequelize: Sequelize): GeneratedModels {
  const models: GeneratedModels = {
      exam_assessment_type: initExamAssessmentTypeEntity(sequelize),
      exam_assessment_weight: initExamAssessmentWeightEntity(sequelize),
      exam_exam: initExamExamEntity(sequelize),
      exam_exam_schedule: initExamExamScheduleEntity(sequelize),
      exam_student_mark: initExamStudentMarkEntity(sequelize),
      exam_course_result: initExamCourseResultEntity(sequelize),
      exam_report_card: initExamReportCardEntity(sequelize),
      exam_report_card_remark: initExamReportCardRemarkEntity(sequelize)
  }
  return models
}

export function associateGeneratedModels(models: GeneratedModels): void {
  models.exam_assessment_weight.belongsTo(models.exam_assessment_type, { as: 'assessmentTypeCode', foreignKey: 'assessmentTypeCode', targetKey: 'assessmentTypeCode', onUpdate: 'CASCADE' })
  models.exam_assessment_type.hasMany(models.exam_assessment_weight, { as: 'examAssessmentWeight', foreignKey: 'assessmentTypeCode', sourceKey: 'assessmentTypeCode', onUpdate: 'CASCADE' })
  models.exam_exam.belongsTo(models.exam_assessment_type, { as: 'assessmentTypeCode', foreignKey: 'assessmentTypeCode', targetKey: 'assessmentTypeCode', onUpdate: 'CASCADE' })
  models.exam_assessment_type.hasMany(models.exam_exam, { as: 'examExam', foreignKey: 'assessmentTypeCode', sourceKey: 'assessmentTypeCode', onUpdate: 'CASCADE' })
  models.exam_exam_schedule.belongsTo(models.exam_exam, { as: 'exam', foreignKey: 'examId', targetKey: 'examId', onDelete: 'CASCADE' })
  models.exam_exam.hasMany(models.exam_exam_schedule, { as: 'examExamSchedule', foreignKey: 'examId', sourceKey: 'examId', onDelete: 'CASCADE' })
  models.exam_student_mark.belongsTo(models.exam_exam_schedule, { as: 'examSchedule', foreignKey: 'examScheduleId', targetKey: 'examScheduleId' })
  models.exam_exam_schedule.hasMany(models.exam_student_mark, { as: 'examStudentMark', foreignKey: 'examScheduleId', sourceKey: 'examScheduleId' })
  models.exam_report_card.belongsTo(models.exam_exam, { as: 'exam', foreignKey: 'examId', targetKey: 'examId' })
  models.exam_exam.hasMany(models.exam_report_card, { as: 'examReportCard', foreignKey: 'examId', sourceKey: 'examId' })
  models.exam_report_card_remark.belongsTo(models.exam_report_card, { as: 'reportCard', foreignKey: 'reportCardId', targetKey: 'reportCardId', onDelete: 'CASCADE' })
  models.exam_report_card.hasMany(models.exam_report_card_remark, { as: 'examReportCardRemark', foreignKey: 'reportCardId', sourceKey: 'reportCardId', onDelete: 'CASCADE' })
}
