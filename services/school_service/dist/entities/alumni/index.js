"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createGeneratedModels = createGeneratedModels;
exports.associateGeneratedModels = associateGeneratedModels;
const alumni_alumnus_entity_1 = require("./alumni_alumnus/alumni_alumnus.entity");
const alumni_alumni_employment_entity_1 = require("./alumni_alumni_employment/alumni_alumni_employment.entity");
const alumni_alumni_higher_education_entity_1 = require("./alumni_alumni_higher_education/alumni_alumni_higher_education.entity");
const alumni_donation_campaign_entity_1 = require("./alumni_donation_campaign/alumni_donation_campaign.entity");
const alumni_donation_entity_1 = require("./alumni_donation/alumni_donation.entity");
const alumni_mentorship_entity_1 = require("./alumni_mentorship/alumni_mentorship.entity");
function createGeneratedModels(sequelize) {
    const models = {
        alumni_alumnus: (0, alumni_alumnus_entity_1.initAlumniAlumnusEntity)(sequelize),
        alumni_alumni_employment: (0, alumni_alumni_employment_entity_1.initAlumniAlumniEmploymentEntity)(sequelize),
        alumni_alumni_higher_education: (0, alumni_alumni_higher_education_entity_1.initAlumniAlumniHigherEducationEntity)(sequelize),
        alumni_donation_campaign: (0, alumni_donation_campaign_entity_1.initAlumniDonationCampaignEntity)(sequelize),
        alumni_donation: (0, alumni_donation_entity_1.initAlumniDonationEntity)(sequelize),
        alumni_mentorship: (0, alumni_mentorship_entity_1.initAlumniMentorshipEntity)(sequelize)
    };
    return models;
}
function associateGeneratedModels(models) {
    models.alumni_alumni_employment.belongsTo(models.alumni_alumnus, { as: 'alumnus', foreignKey: 'alumnusId', targetKey: 'alumnusId', onDelete: 'CASCADE' });
    models.alumni_alumnus.hasMany(models.alumni_alumni_employment, { as: 'alumniAlumniEmployment', foreignKey: 'alumnusId', sourceKey: 'alumnusId', onDelete: 'CASCADE' });
    models.alumni_alumni_higher_education.belongsTo(models.alumni_alumnus, { as: 'alumnus', foreignKey: 'alumnusId', targetKey: 'alumnusId', onDelete: 'CASCADE' });
    models.alumni_alumnus.hasMany(models.alumni_alumni_higher_education, { as: 'alumniAlumniHigherEducation', foreignKey: 'alumnusId', sourceKey: 'alumnusId', onDelete: 'CASCADE' });
    models.alumni_donation.belongsTo(models.alumni_donation_campaign, { as: 'donationCampaign', foreignKey: 'donationCampaignId', targetKey: 'donationCampaignId' });
    models.alumni_donation_campaign.hasMany(models.alumni_donation, { as: 'alumniDonation', foreignKey: 'donationCampaignId', sourceKey: 'donationCampaignId' });
    models.alumni_mentorship.belongsTo(models.alumni_alumnus, { as: 'mentorAlumnus', foreignKey: 'mentorAlumnusId', targetKey: 'alumnusId' });
    models.alumni_alumnus.hasMany(models.alumni_mentorship, { as: 'alumniMentorship', foreignKey: 'mentorAlumnusId', sourceKey: 'alumnusId' });
}
