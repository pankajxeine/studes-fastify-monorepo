import type { Sequelize } from 'sequelize'
import { initPrtnPartnerTypeEntity } from './prtn_partner_type/prtn_partner_type.entity'
import { initPrtnPartnerOrganizationEntity } from './prtn_partner_organization/prtn_partner_organization.entity'
import { initPrtnPartnerContactEntity } from './prtn_partner_contact/prtn_partner_contact.entity'
import { initPrtnPartnerAgreementEntity } from './prtn_partner_agreement/prtn_partner_agreement.entity'
import { initPrtnPlacementDriveEntity } from './prtn_placement_drive/prtn_placement_drive.entity'
import { initPrtnPlacementDriveEligibilityEntity } from './prtn_placement_drive_eligibility/prtn_placement_drive_eligibility.entity'
import { initPrtnPlacementApplicationEntity } from './prtn_placement_application/prtn_placement_application.entity'
import { initPrtnPlacementInterviewRoundEntity } from './prtn_placement_interview_round/prtn_placement_interview_round.entity'
import { initPrtnPlacementRoundResultEntity } from './prtn_placement_round_result/prtn_placement_round_result.entity'
import { initPrtnJobOfferEntity } from './prtn_job_offer/prtn_job_offer.entity'
import { initPrtnInternshipEntity } from './prtn_internship/prtn_internship.entity'
import { initPrtnSponsorshipEntity } from './prtn_sponsorship/prtn_sponsorship.entity'

export type GeneratedModels = {
  prtn_partner_type: ReturnType<typeof initPrtnPartnerTypeEntity>;
  prtn_partner_organization: ReturnType<typeof initPrtnPartnerOrganizationEntity>;
  prtn_partner_contact: ReturnType<typeof initPrtnPartnerContactEntity>;
  prtn_partner_agreement: ReturnType<typeof initPrtnPartnerAgreementEntity>;
  prtn_placement_drive: ReturnType<typeof initPrtnPlacementDriveEntity>;
  prtn_placement_drive_eligibility: ReturnType<typeof initPrtnPlacementDriveEligibilityEntity>;
  prtn_placement_application: ReturnType<typeof initPrtnPlacementApplicationEntity>;
  prtn_placement_interview_round: ReturnType<typeof initPrtnPlacementInterviewRoundEntity>;
  prtn_placement_round_result: ReturnType<typeof initPrtnPlacementRoundResultEntity>;
  prtn_job_offer: ReturnType<typeof initPrtnJobOfferEntity>;
  prtn_internship: ReturnType<typeof initPrtnInternshipEntity>;
  prtn_sponsorship: ReturnType<typeof initPrtnSponsorshipEntity>;
}

export function createGeneratedModels(sequelize: Sequelize): GeneratedModels {
  const models: GeneratedModels = {
      prtn_partner_type: initPrtnPartnerTypeEntity(sequelize),
      prtn_partner_organization: initPrtnPartnerOrganizationEntity(sequelize),
      prtn_partner_contact: initPrtnPartnerContactEntity(sequelize),
      prtn_partner_agreement: initPrtnPartnerAgreementEntity(sequelize),
      prtn_placement_drive: initPrtnPlacementDriveEntity(sequelize),
      prtn_placement_drive_eligibility: initPrtnPlacementDriveEligibilityEntity(sequelize),
      prtn_placement_application: initPrtnPlacementApplicationEntity(sequelize),
      prtn_placement_interview_round: initPrtnPlacementInterviewRoundEntity(sequelize),
      prtn_placement_round_result: initPrtnPlacementRoundResultEntity(sequelize),
      prtn_job_offer: initPrtnJobOfferEntity(sequelize),
      prtn_internship: initPrtnInternshipEntity(sequelize),
      prtn_sponsorship: initPrtnSponsorshipEntity(sequelize)
  }
  return models
}

export function associateGeneratedModels(models: GeneratedModels): void {
  models.prtn_partner_organization.belongsTo(models.prtn_partner_type, { as: 'partnerTypeCode', foreignKey: 'partnerTypeCode', targetKey: 'partnerTypeCode', onUpdate: 'CASCADE' })
  models.prtn_partner_type.hasMany(models.prtn_partner_organization, { as: 'prtnPartnerOrganization', foreignKey: 'partnerTypeCode', sourceKey: 'partnerTypeCode', onUpdate: 'CASCADE' })
  models.prtn_partner_contact.belongsTo(models.prtn_partner_organization, { as: 'partnerOrganization', foreignKey: 'partnerOrganizationId', targetKey: 'partnerOrganizationId' })
  models.prtn_partner_organization.hasMany(models.prtn_partner_contact, { as: 'prtnPartnerContact', foreignKey: 'partnerOrganizationId', sourceKey: 'partnerOrganizationId' })
  models.prtn_partner_agreement.belongsTo(models.prtn_partner_organization, { as: 'partnerOrganization', foreignKey: 'partnerOrganizationId', targetKey: 'partnerOrganizationId' })
  models.prtn_partner_organization.hasMany(models.prtn_partner_agreement, { as: 'prtnPartnerAgreement', foreignKey: 'partnerOrganizationId', sourceKey: 'partnerOrganizationId' })
  models.prtn_placement_drive.belongsTo(models.prtn_partner_organization, { as: 'partnerOrganization', foreignKey: 'partnerOrganizationId', targetKey: 'partnerOrganizationId' })
  models.prtn_partner_organization.hasMany(models.prtn_placement_drive, { as: 'prtnPlacementDrive', foreignKey: 'partnerOrganizationId', sourceKey: 'partnerOrganizationId' })
  models.prtn_placement_drive.belongsTo(models.prtn_partner_contact, { as: 'postedByPartnerContact', foreignKey: 'postedByPartnerContactId', targetKey: 'partnerContactId' })
  models.prtn_partner_contact.hasMany(models.prtn_placement_drive, { as: 'prtnPlacementDrive', foreignKey: 'postedByPartnerContactId', sourceKey: 'partnerContactId' })
  models.prtn_placement_drive_eligibility.belongsTo(models.prtn_placement_drive, { as: 'placementDrive', foreignKey: 'placementDriveId', targetKey: 'placementDriveId', onDelete: 'CASCADE' })
  models.prtn_placement_drive.hasMany(models.prtn_placement_drive_eligibility, { as: 'prtnPlacementDriveEligibility', foreignKey: 'placementDriveId', sourceKey: 'placementDriveId', onDelete: 'CASCADE' })
  models.prtn_placement_application.belongsTo(models.prtn_placement_drive, { as: 'placementDrive', foreignKey: 'placementDriveId', targetKey: 'placementDriveId' })
  models.prtn_placement_drive.hasMany(models.prtn_placement_application, { as: 'prtnPlacementApplication', foreignKey: 'placementDriveId', sourceKey: 'placementDriveId' })
  models.prtn_placement_interview_round.belongsTo(models.prtn_placement_drive, { as: 'placementDrive', foreignKey: 'placementDriveId', targetKey: 'placementDriveId', onDelete: 'CASCADE' })
  models.prtn_placement_drive.hasMany(models.prtn_placement_interview_round, { as: 'prtnPlacementInterviewRound', foreignKey: 'placementDriveId', sourceKey: 'placementDriveId', onDelete: 'CASCADE' })
  models.prtn_placement_round_result.belongsTo(models.prtn_placement_interview_round, { as: 'placementInterviewRound', foreignKey: 'placementInterviewRoundId', targetKey: 'placementInterviewRoundId', onDelete: 'CASCADE' })
  models.prtn_placement_interview_round.hasMany(models.prtn_placement_round_result, { as: 'prtnPlacementRoundResult', foreignKey: 'placementInterviewRoundId', sourceKey: 'placementInterviewRoundId', onDelete: 'CASCADE' })
  models.prtn_placement_round_result.belongsTo(models.prtn_placement_application, { as: 'placementApplication', foreignKey: 'placementApplicationId', targetKey: 'placementApplicationId' })
  models.prtn_placement_application.hasMany(models.prtn_placement_round_result, { as: 'prtnPlacementRoundResult', foreignKey: 'placementApplicationId', sourceKey: 'placementApplicationId' })
  models.prtn_job_offer.belongsTo(models.prtn_placement_application, { as: 'placementApplication', foreignKey: 'placementApplicationId', targetKey: 'placementApplicationId' })
  models.prtn_placement_application.hasMany(models.prtn_job_offer, { as: 'prtnJobOffer', foreignKey: 'placementApplicationId', sourceKey: 'placementApplicationId' })
  models.prtn_internship.belongsTo(models.prtn_partner_organization, { as: 'partnerOrganization', foreignKey: 'partnerOrganizationId', targetKey: 'partnerOrganizationId' })
  models.prtn_partner_organization.hasMany(models.prtn_internship, { as: 'prtnInternship', foreignKey: 'partnerOrganizationId', sourceKey: 'partnerOrganizationId' })
  models.prtn_internship.belongsTo(models.prtn_partner_contact, { as: 'supervisorPartnerContact', foreignKey: 'supervisorPartnerContactId', targetKey: 'partnerContactId' })
  models.prtn_partner_contact.hasMany(models.prtn_internship, { as: 'prtnInternship', foreignKey: 'supervisorPartnerContactId', sourceKey: 'partnerContactId' })
  models.prtn_internship.belongsTo(models.prtn_job_offer, { as: 'jobOffer', foreignKey: 'jobOfferId', targetKey: 'jobOfferId' })
  models.prtn_job_offer.hasMany(models.prtn_internship, { as: 'prtnInternship', foreignKey: 'jobOfferId', sourceKey: 'jobOfferId' })
  models.prtn_sponsorship.belongsTo(models.prtn_partner_organization, { as: 'partnerOrganization', foreignKey: 'partnerOrganizationId', targetKey: 'partnerOrganizationId' })
  models.prtn_partner_organization.hasMany(models.prtn_sponsorship, { as: 'prtnSponsorship', foreignKey: 'partnerOrganizationId', sourceKey: 'partnerOrganizationId' })
  models.prtn_sponsorship.belongsTo(models.prtn_partner_agreement, { as: 'partnerAgreement', foreignKey: 'partnerAgreementId', targetKey: 'partnerAgreementId' })
  models.prtn_partner_agreement.hasMany(models.prtn_sponsorship, { as: 'prtnSponsorship', foreignKey: 'partnerAgreementId', sourceKey: 'partnerAgreementId' })
}
