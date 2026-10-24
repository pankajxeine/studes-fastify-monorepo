import type { Sequelize } from 'sequelize'
import { initOnboardingOnboardingRequestEntity } from './onboarding_onboarding_request/onboarding_onboarding_request.entity'
import { initOnboardingChecklistItemEntity } from './onboarding_checklist_item/onboarding_checklist_item.entity'
import { initOnboardingKycDocumentEntity } from './onboarding_kyc_document/onboarding_kyc_document.entity'
import { initOnboardingApprovalRuleEntity } from './onboarding_approval_rule/onboarding_approval_rule.entity'
import { initOnboardingApprovalEntity } from './onboarding_approval/onboarding_approval.entity'

export type GeneratedModels = {
  onboarding_onboarding_request: ReturnType<typeof initOnboardingOnboardingRequestEntity>;
  onboarding_checklist_item: ReturnType<typeof initOnboardingChecklistItemEntity>;
  onboarding_kyc_document: ReturnType<typeof initOnboardingKycDocumentEntity>;
  onboarding_approval_rule: ReturnType<typeof initOnboardingApprovalRuleEntity>;
  onboarding_approval: ReturnType<typeof initOnboardingApprovalEntity>;
}

export function createGeneratedModels(sequelize: Sequelize): GeneratedModels {
  const models: GeneratedModels = {
      onboarding_onboarding_request: initOnboardingOnboardingRequestEntity(sequelize),
      onboarding_checklist_item: initOnboardingChecklistItemEntity(sequelize),
      onboarding_kyc_document: initOnboardingKycDocumentEntity(sequelize),
      onboarding_approval_rule: initOnboardingApprovalRuleEntity(sequelize),
      onboarding_approval: initOnboardingApprovalEntity(sequelize)
  }
  return models
}

export function associateGeneratedModels(models: GeneratedModels): void {
  models.onboarding_checklist_item.belongsTo(models.onboarding_onboarding_request, { as: 'request', foreignKey: 'requestId', targetKey: 'requestId', onDelete: 'CASCADE' })
  models.onboarding_onboarding_request.hasMany(models.onboarding_checklist_item, { as: 'onboardingChecklistItem', foreignKey: 'requestId', sourceKey: 'requestId', onDelete: 'CASCADE' })
  models.onboarding_kyc_document.belongsTo(models.onboarding_onboarding_request, { as: 'request', foreignKey: 'requestId', targetKey: 'requestId' })
  models.onboarding_onboarding_request.hasMany(models.onboarding_kyc_document, { as: 'onboardingKycDocument', foreignKey: 'requestId', sourceKey: 'requestId' })
  models.onboarding_approval.belongsTo(models.onboarding_onboarding_request, { as: 'request', foreignKey: 'requestId', targetKey: 'requestId', onDelete: 'CASCADE' })
  models.onboarding_onboarding_request.hasMany(models.onboarding_approval, { as: 'onboardingApproval', foreignKey: 'requestId', sourceKey: 'requestId', onDelete: 'CASCADE' })
}
