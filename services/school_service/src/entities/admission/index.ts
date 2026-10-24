import type { Sequelize } from 'sequelize'
import { initAdmisInquirySourceEntity } from './admis_inquiry_source/admis_inquiry_source.entity'
import { initAdmisInquiryEntity } from './admis_inquiry/admis_inquiry.entity'
import { initAdmisInquiryFollowUpEntity } from './admis_inquiry_follow_up/admis_inquiry_follow_up.entity'
import { initAdmisAdmissionCycleEntity } from './admis_admission_cycle/admis_admission_cycle.entity'
import { initAdmisAdmissionCycleSeatEntity } from './admis_admission_cycle_seat/admis_admission_cycle_seat.entity'
import { initAdmisApplicationEntity } from './admis_application/admis_application.entity'
import { initAdmisApplicationGuardianEntity } from './admis_application_guardian/admis_application_guardian.entity'
import { initAdmisApplicationDocumentEntity } from './admis_application_document/admis_application_document.entity'
import { initAdmisApplicationAssessmentEntity } from './admis_application_assessment/admis_application_assessment.entity'
import { initAdmisApplicationStatusHistoryEntity } from './admis_application_status_history/admis_application_status_history.entity'

export type GeneratedModels = {
  admis_inquiry_source: ReturnType<typeof initAdmisInquirySourceEntity>;
  admis_inquiry: ReturnType<typeof initAdmisInquiryEntity>;
  admis_inquiry_follow_up: ReturnType<typeof initAdmisInquiryFollowUpEntity>;
  admis_admission_cycle: ReturnType<typeof initAdmisAdmissionCycleEntity>;
  admis_admission_cycle_seat: ReturnType<typeof initAdmisAdmissionCycleSeatEntity>;
  admis_application: ReturnType<typeof initAdmisApplicationEntity>;
  admis_application_guardian: ReturnType<typeof initAdmisApplicationGuardianEntity>;
  admis_application_document: ReturnType<typeof initAdmisApplicationDocumentEntity>;
  admis_application_assessment: ReturnType<typeof initAdmisApplicationAssessmentEntity>;
  admis_application_status_history: ReturnType<typeof initAdmisApplicationStatusHistoryEntity>;
}

export function createGeneratedModels(sequelize: Sequelize): GeneratedModels {
  const models: GeneratedModels = {
      admis_inquiry_source: initAdmisInquirySourceEntity(sequelize),
      admis_inquiry: initAdmisInquiryEntity(sequelize),
      admis_inquiry_follow_up: initAdmisInquiryFollowUpEntity(sequelize),
      admis_admission_cycle: initAdmisAdmissionCycleEntity(sequelize),
      admis_admission_cycle_seat: initAdmisAdmissionCycleSeatEntity(sequelize),
      admis_application: initAdmisApplicationEntity(sequelize),
      admis_application_guardian: initAdmisApplicationGuardianEntity(sequelize),
      admis_application_document: initAdmisApplicationDocumentEntity(sequelize),
      admis_application_assessment: initAdmisApplicationAssessmentEntity(sequelize),
      admis_application_status_history: initAdmisApplicationStatusHistoryEntity(sequelize)
  }
  return models
}

export function associateGeneratedModels(models: GeneratedModels): void {
  models.admis_inquiry.belongsTo(models.admis_inquiry_source, { as: 'inquirySourceCode', foreignKey: 'inquirySourceCode', targetKey: 'inquirySourceCode', onUpdate: 'CASCADE' })
  models.admis_inquiry_source.hasMany(models.admis_inquiry, { as: 'admisInquiry', foreignKey: 'inquirySourceCode', sourceKey: 'inquirySourceCode', onUpdate: 'CASCADE' })
  models.admis_inquiry_follow_up.belongsTo(models.admis_inquiry, { as: 'inquiry', foreignKey: 'inquiryId', targetKey: 'inquiryId', onDelete: 'CASCADE' })
  models.admis_inquiry.hasMany(models.admis_inquiry_follow_up, { as: 'admisInquiryFollowUp', foreignKey: 'inquiryId', sourceKey: 'inquiryId', onDelete: 'CASCADE' })
  models.admis_admission_cycle_seat.belongsTo(models.admis_admission_cycle, { as: 'admissionCycle', foreignKey: 'admissionCycleId', targetKey: 'admissionCycleId', onDelete: 'CASCADE' })
  models.admis_admission_cycle.hasMany(models.admis_admission_cycle_seat, { as: 'admisAdmissionCycleSeat', foreignKey: 'admissionCycleId', sourceKey: 'admissionCycleId', onDelete: 'CASCADE' })
  models.admis_application.belongsTo(models.admis_admission_cycle, { as: 'admissionCycle', foreignKey: 'admissionCycleId', targetKey: 'admissionCycleId' })
  models.admis_admission_cycle.hasMany(models.admis_application, { as: 'admisApplication', foreignKey: 'admissionCycleId', sourceKey: 'admissionCycleId' })
  models.admis_application.belongsTo(models.admis_inquiry, { as: 'inquiry', foreignKey: 'inquiryId', targetKey: 'inquiryId' })
  models.admis_inquiry.hasMany(models.admis_application, { as: 'admisApplication', foreignKey: 'inquiryId', sourceKey: 'inquiryId' })
  models.admis_application_guardian.belongsTo(models.admis_application, { as: 'application', foreignKey: 'applicationId', targetKey: 'applicationId', onDelete: 'CASCADE' })
  models.admis_application.hasMany(models.admis_application_guardian, { as: 'admisApplicationGuardian', foreignKey: 'applicationId', sourceKey: 'applicationId', onDelete: 'CASCADE' })
  models.admis_application_document.belongsTo(models.admis_application, { as: 'application', foreignKey: 'applicationId', targetKey: 'applicationId', onDelete: 'CASCADE' })
  models.admis_application.hasMany(models.admis_application_document, { as: 'admisApplicationDocument', foreignKey: 'applicationId', sourceKey: 'applicationId', onDelete: 'CASCADE' })
  models.admis_application_assessment.belongsTo(models.admis_application, { as: 'application', foreignKey: 'applicationId', targetKey: 'applicationId', onDelete: 'CASCADE' })
  models.admis_application.hasMany(models.admis_application_assessment, { as: 'admisApplicationAssessment', foreignKey: 'applicationId', sourceKey: 'applicationId', onDelete: 'CASCADE' })
  models.admis_application_status_history.belongsTo(models.admis_application, { as: 'application', foreignKey: 'applicationId', targetKey: 'applicationId', onDelete: 'CASCADE' })
  models.admis_application.hasMany(models.admis_application_status_history, { as: 'admisApplicationStatusHistory', foreignKey: 'applicationId', sourceKey: 'applicationId', onDelete: 'CASCADE' })
}
