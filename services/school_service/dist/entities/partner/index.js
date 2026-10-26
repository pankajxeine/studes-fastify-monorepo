"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createGeneratedModels = createGeneratedModels;
exports.associateGeneratedModels = associateGeneratedModels;
const prtn_partner_type_entity_1 = require("./prtn_partner_type/prtn_partner_type.entity");
const prtn_partner_organization_entity_1 = require("./prtn_partner_organization/prtn_partner_organization.entity");
const prtn_partner_contact_entity_1 = require("./prtn_partner_contact/prtn_partner_contact.entity");
const prtn_partner_agreement_entity_1 = require("./prtn_partner_agreement/prtn_partner_agreement.entity");
const prtn_placement_drive_entity_1 = require("./prtn_placement_drive/prtn_placement_drive.entity");
const prtn_placement_drive_eligibility_entity_1 = require("./prtn_placement_drive_eligibility/prtn_placement_drive_eligibility.entity");
const prtn_placement_application_entity_1 = require("./prtn_placement_application/prtn_placement_application.entity");
const prtn_placement_interview_round_entity_1 = require("./prtn_placement_interview_round/prtn_placement_interview_round.entity");
const prtn_placement_round_result_entity_1 = require("./prtn_placement_round_result/prtn_placement_round_result.entity");
const prtn_job_offer_entity_1 = require("./prtn_job_offer/prtn_job_offer.entity");
const prtn_internship_entity_1 = require("./prtn_internship/prtn_internship.entity");
const prtn_sponsorship_entity_1 = require("./prtn_sponsorship/prtn_sponsorship.entity");
function createGeneratedModels(sequelize) {
    const models = {
        prtn_partner_type: (0, prtn_partner_type_entity_1.initPrtnPartnerTypeEntity)(sequelize),
        prtn_partner_organization: (0, prtn_partner_organization_entity_1.initPrtnPartnerOrganizationEntity)(sequelize),
        prtn_partner_contact: (0, prtn_partner_contact_entity_1.initPrtnPartnerContactEntity)(sequelize),
        prtn_partner_agreement: (0, prtn_partner_agreement_entity_1.initPrtnPartnerAgreementEntity)(sequelize),
        prtn_placement_drive: (0, prtn_placement_drive_entity_1.initPrtnPlacementDriveEntity)(sequelize),
        prtn_placement_drive_eligibility: (0, prtn_placement_drive_eligibility_entity_1.initPrtnPlacementDriveEligibilityEntity)(sequelize),
        prtn_placement_application: (0, prtn_placement_application_entity_1.initPrtnPlacementApplicationEntity)(sequelize),
        prtn_placement_interview_round: (0, prtn_placement_interview_round_entity_1.initPrtnPlacementInterviewRoundEntity)(sequelize),
        prtn_placement_round_result: (0, prtn_placement_round_result_entity_1.initPrtnPlacementRoundResultEntity)(sequelize),
        prtn_job_offer: (0, prtn_job_offer_entity_1.initPrtnJobOfferEntity)(sequelize),
        prtn_internship: (0, prtn_internship_entity_1.initPrtnInternshipEntity)(sequelize),
        prtn_sponsorship: (0, prtn_sponsorship_entity_1.initPrtnSponsorshipEntity)(sequelize)
    };
    return models;
}
function associateGeneratedModels(models) {
    models.prtn_partner_organization.belongsTo(models.prtn_partner_type, { as: 'partnerTypeCode', foreignKey: 'partnerTypeCode', targetKey: 'partnerTypeCode', onUpdate: 'CASCADE' });
    models.prtn_partner_type.hasMany(models.prtn_partner_organization, { as: 'prtnPartnerOrganization', foreignKey: 'partnerTypeCode', sourceKey: 'partnerTypeCode', onUpdate: 'CASCADE' });
    models.prtn_partner_contact.belongsTo(models.prtn_partner_organization, { as: 'partnerOrganization', foreignKey: 'partnerOrganizationId', targetKey: 'partnerOrganizationId' });
    models.prtn_partner_organization.hasMany(models.prtn_partner_contact, { as: 'prtnPartnerContact', foreignKey: 'partnerOrganizationId', sourceKey: 'partnerOrganizationId' });
    models.prtn_partner_agreement.belongsTo(models.prtn_partner_organization, { as: 'partnerOrganization', foreignKey: 'partnerOrganizationId', targetKey: 'partnerOrganizationId' });
    models.prtn_partner_organization.hasMany(models.prtn_partner_agreement, { as: 'prtnPartnerAgreement', foreignKey: 'partnerOrganizationId', sourceKey: 'partnerOrganizationId' });
    models.prtn_placement_drive.belongsTo(models.prtn_partner_organization, { as: 'partnerOrganization', foreignKey: 'partnerOrganizationId', targetKey: 'partnerOrganizationId' });
    models.prtn_partner_organization.hasMany(models.prtn_placement_drive, { as: 'prtnPlacementDrive', foreignKey: 'partnerOrganizationId', sourceKey: 'partnerOrganizationId' });
    models.prtn_placement_drive.belongsTo(models.prtn_partner_contact, { as: 'postedByPartnerContact', foreignKey: 'postedByPartnerContactId', targetKey: 'partnerContactId' });
    models.prtn_partner_contact.hasMany(models.prtn_placement_drive, { as: 'prtnPlacementDrive', foreignKey: 'postedByPartnerContactId', sourceKey: 'partnerContactId' });
    models.prtn_placement_drive_eligibility.belongsTo(models.prtn_placement_drive, { as: 'placementDrive', foreignKey: 'placementDriveId', targetKey: 'placementDriveId', onDelete: 'CASCADE' });
    models.prtn_placement_drive.hasMany(models.prtn_placement_drive_eligibility, { as: 'prtnPlacementDriveEligibility', foreignKey: 'placementDriveId', sourceKey: 'placementDriveId', onDelete: 'CASCADE' });
    models.prtn_placement_application.belongsTo(models.prtn_placement_drive, { as: 'placementDrive', foreignKey: 'placementDriveId', targetKey: 'placementDriveId' });
    models.prtn_placement_drive.hasMany(models.prtn_placement_application, { as: 'prtnPlacementApplication', foreignKey: 'placementDriveId', sourceKey: 'placementDriveId' });
    models.prtn_placement_interview_round.belongsTo(models.prtn_placement_drive, { as: 'placementDrive', foreignKey: 'placementDriveId', targetKey: 'placementDriveId', onDelete: 'CASCADE' });
    models.prtn_placement_drive.hasMany(models.prtn_placement_interview_round, { as: 'prtnPlacementInterviewRound', foreignKey: 'placementDriveId', sourceKey: 'placementDriveId', onDelete: 'CASCADE' });
    models.prtn_placement_round_result.belongsTo(models.prtn_placement_interview_round, { as: 'placementInterviewRound', foreignKey: 'placementInterviewRoundId', targetKey: 'placementInterviewRoundId', onDelete: 'CASCADE' });
    models.prtn_placement_interview_round.hasMany(models.prtn_placement_round_result, { as: 'prtnPlacementRoundResult', foreignKey: 'placementInterviewRoundId', sourceKey: 'placementInterviewRoundId', onDelete: 'CASCADE' });
    models.prtn_placement_round_result.belongsTo(models.prtn_placement_application, { as: 'placementApplication', foreignKey: 'placementApplicationId', targetKey: 'placementApplicationId' });
    models.prtn_placement_application.hasMany(models.prtn_placement_round_result, { as: 'prtnPlacementRoundResult', foreignKey: 'placementApplicationId', sourceKey: 'placementApplicationId' });
    models.prtn_job_offer.belongsTo(models.prtn_placement_application, { as: 'placementApplication', foreignKey: 'placementApplicationId', targetKey: 'placementApplicationId' });
    models.prtn_placement_application.hasMany(models.prtn_job_offer, { as: 'prtnJobOffer', foreignKey: 'placementApplicationId', sourceKey: 'placementApplicationId' });
    models.prtn_internship.belongsTo(models.prtn_partner_organization, { as: 'partnerOrganization', foreignKey: 'partnerOrganizationId', targetKey: 'partnerOrganizationId' });
    models.prtn_partner_organization.hasMany(models.prtn_internship, { as: 'prtnInternship', foreignKey: 'partnerOrganizationId', sourceKey: 'partnerOrganizationId' });
    models.prtn_internship.belongsTo(models.prtn_partner_contact, { as: 'supervisorPartnerContact', foreignKey: 'supervisorPartnerContactId', targetKey: 'partnerContactId' });
    models.prtn_partner_contact.hasMany(models.prtn_internship, { as: 'prtnInternship', foreignKey: 'supervisorPartnerContactId', sourceKey: 'partnerContactId' });
    models.prtn_internship.belongsTo(models.prtn_job_offer, { as: 'jobOffer', foreignKey: 'jobOfferId', targetKey: 'jobOfferId' });
    models.prtn_job_offer.hasMany(models.prtn_internship, { as: 'prtnInternship', foreignKey: 'jobOfferId', sourceKey: 'jobOfferId' });
    models.prtn_sponsorship.belongsTo(models.prtn_partner_organization, { as: 'partnerOrganization', foreignKey: 'partnerOrganizationId', targetKey: 'partnerOrganizationId' });
    models.prtn_partner_organization.hasMany(models.prtn_sponsorship, { as: 'prtnSponsorship', foreignKey: 'partnerOrganizationId', sourceKey: 'partnerOrganizationId' });
    models.prtn_sponsorship.belongsTo(models.prtn_partner_agreement, { as: 'partnerAgreement', foreignKey: 'partnerAgreementId', targetKey: 'partnerAgreementId' });
    models.prtn_partner_agreement.hasMany(models.prtn_sponsorship, { as: 'prtnSponsorship', foreignKey: 'partnerAgreementId', sourceKey: 'partnerAgreementId' });
}
