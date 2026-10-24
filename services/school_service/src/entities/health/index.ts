import type { Sequelize } from 'sequelize'
import { initHealthMedicalProfileEntity } from './health_medical_profile/health_medical_profile.entity'
import { initHealthImmunizationEntity } from './health_immunization/health_immunization.entity'
import { initHealthClinicVisitEntity } from './health_clinic_visit/health_clinic_visit.entity'
import { initHealthHealthCheckupEntity } from './health_health_checkup/health_health_checkup.entity'

export type GeneratedModels = {
  health_medical_profile: ReturnType<typeof initHealthMedicalProfileEntity>;
  health_immunization: ReturnType<typeof initHealthImmunizationEntity>;
  health_clinic_visit: ReturnType<typeof initHealthClinicVisitEntity>;
  health_health_checkup: ReturnType<typeof initHealthHealthCheckupEntity>;
}

export function createGeneratedModels(sequelize: Sequelize): GeneratedModels {
  const models: GeneratedModels = {
      health_medical_profile: initHealthMedicalProfileEntity(sequelize),
      health_immunization: initHealthImmunizationEntity(sequelize),
      health_clinic_visit: initHealthClinicVisitEntity(sequelize),
      health_health_checkup: initHealthHealthCheckupEntity(sequelize)
  }
  return models
}

export function associateGeneratedModels(models: GeneratedModels): void {

}
