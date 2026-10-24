import type { Sequelize } from 'sequelize'
import { initSisHouseEntity } from './sis_house/sis_house.entity'
import { initSisStudentEntity } from './sis_student/sis_student.entity'
import { initSisStudentGuardianEntity } from './sis_student_guardian/sis_student_guardian.entity'
import { initSisStudentEnrollmentEntity } from './sis_student_enrollment/sis_student_enrollment.entity'
import { initSisCourseRegistrationEntity } from './sis_course_registration/sis_course_registration.entity'
import { initSisStudentStatusHistoryEntity } from './sis_student_status_history/sis_student_status_history.entity'
import { initSisStudentTransferEntity } from './sis_student_transfer/sis_student_transfer.entity'
import { initSisPreviousEducationEntity } from './sis_previous_education/sis_previous_education.entity'

export type GeneratedModels = {
  sis_house: ReturnType<typeof initSisHouseEntity>;
  sis_student: ReturnType<typeof initSisStudentEntity>;
  sis_student_guardian: ReturnType<typeof initSisStudentGuardianEntity>;
  sis_student_enrollment: ReturnType<typeof initSisStudentEnrollmentEntity>;
  sis_course_registration: ReturnType<typeof initSisCourseRegistrationEntity>;
  sis_student_status_history: ReturnType<typeof initSisStudentStatusHistoryEntity>;
  sis_student_transfer: ReturnType<typeof initSisStudentTransferEntity>;
  sis_previous_education: ReturnType<typeof initSisPreviousEducationEntity>;
}

export function createGeneratedModels(sequelize: Sequelize): GeneratedModels {
  const models: GeneratedModels = {
      sis_house: initSisHouseEntity(sequelize),
      sis_student: initSisStudentEntity(sequelize),
      sis_student_guardian: initSisStudentGuardianEntity(sequelize),
      sis_student_enrollment: initSisStudentEnrollmentEntity(sequelize),
      sis_course_registration: initSisCourseRegistrationEntity(sequelize),
      sis_student_status_history: initSisStudentStatusHistoryEntity(sequelize),
      sis_student_transfer: initSisStudentTransferEntity(sequelize),
      sis_previous_education: initSisPreviousEducationEntity(sequelize)
  }
  return models
}

export function associateGeneratedModels(models: GeneratedModels): void {
  models.sis_student.belongsTo(models.sis_house, { as: 'house', foreignKey: 'houseId', targetKey: 'houseId' })
  models.sis_house.hasMany(models.sis_student, { as: 'sisStudent', foreignKey: 'houseId', sourceKey: 'houseId' })
  models.sis_student_guardian.belongsTo(models.sis_student, { as: 'student', foreignKey: 'studentId', targetKey: 'studentId', onDelete: 'CASCADE' })
  models.sis_student.hasMany(models.sis_student_guardian, { as: 'sisStudentGuardian', foreignKey: 'studentId', sourceKey: 'studentId', onDelete: 'CASCADE' })
  models.sis_student_enrollment.belongsTo(models.sis_student, { as: 'student', foreignKey: 'studentId', targetKey: 'studentId' })
  models.sis_student.hasMany(models.sis_student_enrollment, { as: 'sisStudentEnrollment', foreignKey: 'studentId', sourceKey: 'studentId' })
  models.sis_student_enrollment.belongsTo(models.sis_student_enrollment, { as: 'promotedFromEnrollment', foreignKey: 'promotedFromEnrollmentId', targetKey: 'studentEnrollmentId' })
  models.sis_student_enrollment.hasMany(models.sis_student_enrollment, { as: 'sisStudentEnrollment', foreignKey: 'promotedFromEnrollmentId', sourceKey: 'studentEnrollmentId' })
  models.sis_student_enrollment.belongsTo(models.sis_student, { as: 'studentSisStudent', foreignKey: 'studentId', targetKey: 'studentId' })
  models.sis_student.hasMany(models.sis_student_enrollment, { as: 'sisStudentEnrollmentByStudentId', foreignKey: 'studentId', sourceKey: 'studentId' })
  models.sis_course_registration.belongsTo(models.sis_student, { as: 'student', foreignKey: 'studentId', targetKey: 'studentId' })
  models.sis_student.hasMany(models.sis_course_registration, { as: 'sisCourseRegistration', foreignKey: 'studentId', sourceKey: 'studentId' })
  models.sis_course_registration.belongsTo(models.sis_student_enrollment, { as: 'studentEnrollment', foreignKey: 'studentEnrollmentId', targetKey: 'studentEnrollmentId' })
  models.sis_student_enrollment.hasMany(models.sis_course_registration, { as: 'sisCourseRegistration', foreignKey: 'studentEnrollmentId', sourceKey: 'studentEnrollmentId' })
  models.sis_student_status_history.belongsTo(models.sis_student, { as: 'student', foreignKey: 'studentId', targetKey: 'studentId', onDelete: 'CASCADE' })
  models.sis_student.hasMany(models.sis_student_status_history, { as: 'sisStudentStatusHistory', foreignKey: 'studentId', sourceKey: 'studentId', onDelete: 'CASCADE' })
  models.sis_student_transfer.belongsTo(models.sis_student, { as: 'student', foreignKey: 'studentId', targetKey: 'studentId' })
  models.sis_student.hasMany(models.sis_student_transfer, { as: 'sisStudentTransfer', foreignKey: 'studentId', sourceKey: 'studentId' })
  models.sis_previous_education.belongsTo(models.sis_student, { as: 'student', foreignKey: 'studentId', targetKey: 'studentId', onDelete: 'CASCADE' })
  models.sis_student.hasMany(models.sis_previous_education, { as: 'sisPreviousEducation', foreignKey: 'studentId', sourceKey: 'studentId', onDelete: 'CASCADE' })
}
