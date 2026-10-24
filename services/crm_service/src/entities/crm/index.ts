import type { Sequelize } from 'sequelize'
import { initCrmAccountEntity } from './crm_account/crm_account.entity'
import { initCrmContactEntity } from './crm_contact/crm_contact.entity'
import { initCrmCampaignEntity } from './crm_campaign/crm_campaign.entity'
import { initCrmLeadEntity } from './crm_lead/crm_lead.entity'
import { initCrmOpportunityEntity } from './crm_opportunity/crm_opportunity.entity'
import { initCrmQuoteEntity } from './crm_quote/crm_quote.entity'
import { initCrmQuoteLineEntity } from './crm_quote_line/crm_quote_line.entity'
import { initCrmActivityEntity } from './crm_activity/crm_activity.entity'

export type GeneratedModels = {
  crm_account: ReturnType<typeof initCrmAccountEntity>;
  crm_contact: ReturnType<typeof initCrmContactEntity>;
  crm_campaign: ReturnType<typeof initCrmCampaignEntity>;
  crm_lead: ReturnType<typeof initCrmLeadEntity>;
  crm_opportunity: ReturnType<typeof initCrmOpportunityEntity>;
  crm_quote: ReturnType<typeof initCrmQuoteEntity>;
  crm_quote_line: ReturnType<typeof initCrmQuoteLineEntity>;
  crm_activity: ReturnType<typeof initCrmActivityEntity>;
}

export function createGeneratedModels(sequelize: Sequelize): GeneratedModels {
  const models: GeneratedModels = {
      crm_account: initCrmAccountEntity(sequelize),
      crm_contact: initCrmContactEntity(sequelize),
      crm_campaign: initCrmCampaignEntity(sequelize),
      crm_lead: initCrmLeadEntity(sequelize),
      crm_opportunity: initCrmOpportunityEntity(sequelize),
      crm_quote: initCrmQuoteEntity(sequelize),
      crm_quote_line: initCrmQuoteLineEntity(sequelize),
      crm_activity: initCrmActivityEntity(sequelize)
  }
  return models
}

export function associateGeneratedModels(models: GeneratedModels): void {
  models.crm_account.belongsTo(models.crm_account, { as: 'parentAccount', foreignKey: 'parentAccountId', targetKey: 'accountId' })
  models.crm_account.hasMany(models.crm_account, { as: 'crmAccount', foreignKey: 'parentAccountId', sourceKey: 'accountId' })
  models.crm_contact.belongsTo(models.crm_account, { as: 'account', foreignKey: 'accountId', targetKey: 'accountId' })
  models.crm_account.hasMany(models.crm_contact, { as: 'crmContact', foreignKey: 'accountId', sourceKey: 'accountId' })
  models.crm_lead.belongsTo(models.crm_campaign, { as: 'campaign', foreignKey: 'campaignId', targetKey: 'campaignId' })
  models.crm_campaign.hasMany(models.crm_lead, { as: 'crmLead', foreignKey: 'campaignId', sourceKey: 'campaignId' })
  models.crm_lead.belongsTo(models.crm_account, { as: 'convertedAccount', foreignKey: 'convertedAccountId', targetKey: 'accountId' })
  models.crm_account.hasMany(models.crm_lead, { as: 'crmLead', foreignKey: 'convertedAccountId', sourceKey: 'accountId' })
  models.crm_opportunity.belongsTo(models.crm_account, { as: 'account', foreignKey: 'accountId', targetKey: 'accountId' })
  models.crm_account.hasMany(models.crm_opportunity, { as: 'crmOpportunity', foreignKey: 'accountId', sourceKey: 'accountId' })
  models.crm_opportunity.belongsTo(models.crm_lead, { as: 'lead', foreignKey: 'leadId', targetKey: 'leadId' })
  models.crm_lead.hasMany(models.crm_opportunity, { as: 'crmOpportunity', foreignKey: 'leadId', sourceKey: 'leadId' })
  models.crm_quote.belongsTo(models.crm_opportunity, { as: 'opportunity', foreignKey: 'opportunityId', targetKey: 'opportunityId' })
  models.crm_opportunity.hasMany(models.crm_quote, { as: 'crmQuote', foreignKey: 'opportunityId', sourceKey: 'opportunityId' })
  models.crm_quote.belongsTo(models.crm_account, { as: 'account', foreignKey: 'accountId', targetKey: 'accountId' })
  models.crm_account.hasMany(models.crm_quote, { as: 'crmQuote', foreignKey: 'accountId', sourceKey: 'accountId' })
  models.crm_quote.belongsTo(models.crm_contact, { as: 'acceptedByContact', foreignKey: 'acceptedByContactId', targetKey: 'contactId' })
  models.crm_contact.hasMany(models.crm_quote, { as: 'crmQuote', foreignKey: 'acceptedByContactId', sourceKey: 'contactId' })
  models.crm_quote_line.belongsTo(models.crm_quote, { as: 'quote', foreignKey: 'quoteId', targetKey: 'quoteId', onDelete: 'CASCADE' })
  models.crm_quote.hasMany(models.crm_quote_line, { as: 'crmQuoteLine', foreignKey: 'quoteId', sourceKey: 'quoteId', onDelete: 'CASCADE' })
}
