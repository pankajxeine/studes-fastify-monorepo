import type { Sequelize } from 'sequelize'
import { initProvisioningJobStepTemplateEntity } from './provisioning_job_step_template/provisioning_job_step_template.entity'
import { initProvisioningProvisioningJobEntity } from './provisioning_provisioning_job/provisioning_provisioning_job.entity'
import { initProvisioningProvisioningStepEntity } from './provisioning_provisioning_step/provisioning_provisioning_step.entity'
import { initProvisioningDeprovisionRequestEntity } from './provisioning_deprovision_request/provisioning_deprovision_request.entity'

export type GeneratedModels = {
  provisioning_job_step_template: ReturnType<typeof initProvisioningJobStepTemplateEntity>;
  provisioning_provisioning_job: ReturnType<typeof initProvisioningProvisioningJobEntity>;
  provisioning_provisioning_step: ReturnType<typeof initProvisioningProvisioningStepEntity>;
  provisioning_deprovision_request: ReturnType<typeof initProvisioningDeprovisionRequestEntity>;
}

export function createGeneratedModels(sequelize: Sequelize): GeneratedModels {
  const models: GeneratedModels = {
      provisioning_job_step_template: initProvisioningJobStepTemplateEntity(sequelize),
      provisioning_provisioning_job: initProvisioningProvisioningJobEntity(sequelize),
      provisioning_provisioning_step: initProvisioningProvisioningStepEntity(sequelize),
      provisioning_deprovision_request: initProvisioningDeprovisionRequestEntity(sequelize)
  }
  return models
}

export function associateGeneratedModels(models: GeneratedModels): void {
  models.provisioning_provisioning_step.belongsTo(models.provisioning_provisioning_job, { as: 'job', foreignKey: 'jobId', targetKey: 'jobId', onDelete: 'CASCADE' })
  models.provisioning_provisioning_job.hasMany(models.provisioning_provisioning_step, { as: 'provisioningProvisioningStep', foreignKey: 'jobId', sourceKey: 'jobId', onDelete: 'CASCADE' })
}
