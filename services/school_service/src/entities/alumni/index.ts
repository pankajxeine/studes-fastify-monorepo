import type { Sequelize } from 'sequelize'
import { initAlumniAlumnusEntity } from './alumni_alumnus/alumni_alumnus.entity'
import { initAlumniAlumniEmploymentEntity } from './alumni_alumni_employment/alumni_alumni_employment.entity'
import { initAlumniAlumniHigherEducationEntity } from './alumni_alumni_higher_education/alumni_alumni_higher_education.entity'
import { initAlumniDonationCampaignEntity } from './alumni_donation_campaign/alumni_donation_campaign.entity'
import { initAlumniDonationEntity } from './alumni_donation/alumni_donation.entity'
import { initAlumniMentorshipEntity } from './alumni_mentorship/alumni_mentorship.entity'

export type GeneratedModels = {
  alumni_alumnus: ReturnType<typeof initAlumniAlumnusEntity>;
  alumni_alumni_employment: ReturnType<typeof initAlumniAlumniEmploymentEntity>;
  alumni_alumni_higher_education: ReturnType<typeof initAlumniAlumniHigherEducationEntity>;
  alumni_donation_campaign: ReturnType<typeof initAlumniDonationCampaignEntity>;
  alumni_donation: ReturnType<typeof initAlumniDonationEntity>;
  alumni_mentorship: ReturnType<typeof initAlumniMentorshipEntity>;
}

export function createGeneratedModels(sequelize: Sequelize): GeneratedModels {
  const models: GeneratedModels = {
      alumni_alumnus: initAlumniAlumnusEntity(sequelize),
      alumni_alumni_employment: initAlumniAlumniEmploymentEntity(sequelize),
      alumni_alumni_higher_education: initAlumniAlumniHigherEducationEntity(sequelize),
      alumni_donation_campaign: initAlumniDonationCampaignEntity(sequelize),
      alumni_donation: initAlumniDonationEntity(sequelize),
      alumni_mentorship: initAlumniMentorshipEntity(sequelize)
  }
  return models
}

export function associateGeneratedModels(models: GeneratedModels): void {
  models.alumni_alumni_employment.belongsTo(models.alumni_alumnus, { as: 'alumnus', foreignKey: 'alumnusId', targetKey: 'alumnusId', onDelete: 'CASCADE' })
  models.alumni_alumnus.hasMany(models.alumni_alumni_employment, { as: 'alumniAlumniEmployment', foreignKey: 'alumnusId', sourceKey: 'alumnusId', onDelete: 'CASCADE' })
  models.alumni_alumni_higher_education.belongsTo(models.alumni_alumnus, { as: 'alumnus', foreignKey: 'alumnusId', targetKey: 'alumnusId', onDelete: 'CASCADE' })
  models.alumni_alumnus.hasMany(models.alumni_alumni_higher_education, { as: 'alumniAlumniHigherEducation', foreignKey: 'alumnusId', sourceKey: 'alumnusId', onDelete: 'CASCADE' })
  models.alumni_donation.belongsTo(models.alumni_donation_campaign, { as: 'donationCampaign', foreignKey: 'donationCampaignId', targetKey: 'donationCampaignId' })
  models.alumni_donation_campaign.hasMany(models.alumni_donation, { as: 'alumniDonation', foreignKey: 'donationCampaignId', sourceKey: 'donationCampaignId' })
  models.alumni_mentorship.belongsTo(models.alumni_alumnus, { as: 'mentorAlumnus', foreignKey: 'mentorAlumnusId', targetKey: 'alumnusId' })
  models.alumni_alumnus.hasMany(models.alumni_mentorship, { as: 'alumniMentorship', foreignKey: 'mentorAlumnusId', sourceKey: 'alumnusId' })
}
