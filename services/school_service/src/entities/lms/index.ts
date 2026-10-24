import type { Sequelize } from 'sequelize'
import { initLmsLessonPlanEntity } from './lms_lesson_plan/lms_lesson_plan.entity'
import { initLmsStudyMaterialEntity } from './lms_study_material/lms_study_material.entity'
import { initLmsAssignmentEntity } from './lms_assignment/lms_assignment.entity'
import { initLmsAssignmentSubmissionEntity } from './lms_assignment_submission/lms_assignment_submission.entity'

export type GeneratedModels = {
  lms_lesson_plan: ReturnType<typeof initLmsLessonPlanEntity>;
  lms_study_material: ReturnType<typeof initLmsStudyMaterialEntity>;
  lms_assignment: ReturnType<typeof initLmsAssignmentEntity>;
  lms_assignment_submission: ReturnType<typeof initLmsAssignmentSubmissionEntity>;
}

export function createGeneratedModels(sequelize: Sequelize): GeneratedModels {
  const models: GeneratedModels = {
      lms_lesson_plan: initLmsLessonPlanEntity(sequelize),
      lms_study_material: initLmsStudyMaterialEntity(sequelize),
      lms_assignment: initLmsAssignmentEntity(sequelize),
      lms_assignment_submission: initLmsAssignmentSubmissionEntity(sequelize)
  }
  return models
}

export function associateGeneratedModels(models: GeneratedModels): void {
  models.lms_study_material.belongsTo(models.lms_lesson_plan, { as: 'lessonPlan', foreignKey: 'lessonPlanId', targetKey: 'lessonPlanId' })
  models.lms_lesson_plan.hasMany(models.lms_study_material, { as: 'lmsStudyMaterial', foreignKey: 'lessonPlanId', sourceKey: 'lessonPlanId' })
  models.lms_assignment_submission.belongsTo(models.lms_assignment, { as: 'assignment', foreignKey: 'assignmentId', targetKey: 'assignmentId' })
  models.lms_assignment.hasMany(models.lms_assignment_submission, { as: 'lmsAssignmentSubmission', foreignKey: 'assignmentId', sourceKey: 'assignmentId' })
}
