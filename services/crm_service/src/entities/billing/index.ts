import type { Sequelize } from 'sequelize'
import { initBillingDunningPolicyEntity } from './billing_dunning_policy/billing_dunning_policy.entity'
import { initBillingDunningStepEntity } from './billing_dunning_step/billing_dunning_step.entity'
import { initBillingBillingAccountEntity } from './billing_billing_account/billing_billing_account.entity'
import { initBillingNumberSeriesEntity } from './billing_number_series/billing_number_series.entity'
import { initBillingInvoiceEntity } from './billing_invoice/billing_invoice.entity'
import { initBillingInvoiceLineEntity } from './billing_invoice_line/billing_invoice_line.entity'
import { initBillingCreditNoteEntity } from './billing_credit_note/billing_credit_note.entity'
import { initBillingDunningRunEntity } from './billing_dunning_run/billing_dunning_run.entity'

export type GeneratedModels = {
  billing_dunning_policy: ReturnType<typeof initBillingDunningPolicyEntity>;
  billing_dunning_step: ReturnType<typeof initBillingDunningStepEntity>;
  billing_billing_account: ReturnType<typeof initBillingBillingAccountEntity>;
  billing_number_series: ReturnType<typeof initBillingNumberSeriesEntity>;
  billing_invoice: ReturnType<typeof initBillingInvoiceEntity>;
  billing_invoice_line: ReturnType<typeof initBillingInvoiceLineEntity>;
  billing_credit_note: ReturnType<typeof initBillingCreditNoteEntity>;
  billing_dunning_run: ReturnType<typeof initBillingDunningRunEntity>;
}

export function createGeneratedModels(sequelize: Sequelize): GeneratedModels {
  const models: GeneratedModels = {
      billing_dunning_policy: initBillingDunningPolicyEntity(sequelize),
      billing_dunning_step: initBillingDunningStepEntity(sequelize),
      billing_billing_account: initBillingBillingAccountEntity(sequelize),
      billing_number_series: initBillingNumberSeriesEntity(sequelize),
      billing_invoice: initBillingInvoiceEntity(sequelize),
      billing_invoice_line: initBillingInvoiceLineEntity(sequelize),
      billing_credit_note: initBillingCreditNoteEntity(sequelize),
      billing_dunning_run: initBillingDunningRunEntity(sequelize)
  }
  return models
}

export function associateGeneratedModels(models: GeneratedModels): void {
  models.billing_dunning_step.belongsTo(models.billing_dunning_policy, { as: 'dunningPolicy', foreignKey: 'dunningPolicyId', targetKey: 'dunningPolicyId', onDelete: 'CASCADE' })
  models.billing_dunning_policy.hasMany(models.billing_dunning_step, { as: 'billingDunningStep', foreignKey: 'dunningPolicyId', sourceKey: 'dunningPolicyId', onDelete: 'CASCADE' })
  models.billing_billing_account.belongsTo(models.billing_dunning_policy, { as: 'dunningPolicy', foreignKey: 'dunningPolicyId', targetKey: 'dunningPolicyId' })
  models.billing_dunning_policy.hasMany(models.billing_billing_account, { as: 'billingBillingAccount', foreignKey: 'dunningPolicyId', sourceKey: 'dunningPolicyId' })
  models.billing_invoice.belongsTo(models.billing_billing_account, { as: 'billingAccount', foreignKey: 'billingAccountId', targetKey: 'billingAccountId' })
  models.billing_billing_account.hasMany(models.billing_invoice, { as: 'billingInvoice', foreignKey: 'billingAccountId', sourceKey: 'billingAccountId' })
  models.billing_invoice_line.belongsTo(models.billing_invoice, { as: 'invoice', foreignKey: 'invoiceId', targetKey: 'invoiceId', onDelete: 'CASCADE' })
  models.billing_invoice.hasMany(models.billing_invoice_line, { as: 'billingInvoiceLine', foreignKey: 'invoiceId', sourceKey: 'invoiceId', onDelete: 'CASCADE' })
  models.billing_credit_note.belongsTo(models.billing_invoice, { as: 'invoice', foreignKey: 'invoiceId', targetKey: 'invoiceId' })
  models.billing_invoice.hasMany(models.billing_credit_note, { as: 'billingCreditNote', foreignKey: 'invoiceId', sourceKey: 'invoiceId' })
  models.billing_dunning_run.belongsTo(models.billing_invoice, { as: 'invoice', foreignKey: 'invoiceId', targetKey: 'invoiceId' })
  models.billing_invoice.hasMany(models.billing_dunning_run, { as: 'billingDunningRun', foreignKey: 'invoiceId', sourceKey: 'invoiceId' })
}
