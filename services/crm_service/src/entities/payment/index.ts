import type { Sequelize } from 'sequelize'
import { initPaymentAcceptanceModeEntity } from './payment_acceptance_mode/payment_acceptance_mode.entity'
import { initPaymentMerchantAccountEntity } from './payment_merchant_account/payment_merchant_account.entity'
import { initPaymentOutletEntity } from './payment_outlet/payment_outlet.entity'
import { initPaymentPosTerminalEntity } from './payment_pos_terminal/payment_pos_terminal.entity'
import { initPaymentAcceptanceConfigurationEntity } from './payment_acceptance_configuration/payment_acceptance_configuration.entity'
import { initPaymentPaymentMethodEntity } from './payment_payment_method/payment_payment_method.entity'
import { initPaymentPaymentEntity } from './payment_payment/payment_payment.entity'
import { initPaymentPaymentAllocationEntity } from './payment_payment_allocation/payment_payment_allocation.entity'
import { initPaymentRefundEntity } from './payment_refund/payment_refund.entity'
import { initPaymentGatewayWebhookEntity } from './payment_gateway_webhook/payment_gateway_webhook.entity'
import { initPaymentReconciliationBatchEntity } from './payment_reconciliation_batch/payment_reconciliation_batch.entity'
import { initPaymentReconciliationItemEntity } from './payment_reconciliation_item/payment_reconciliation_item.entity'

export type GeneratedModels = {
  payment_acceptance_mode: ReturnType<typeof initPaymentAcceptanceModeEntity>;
  payment_merchant_account: ReturnType<typeof initPaymentMerchantAccountEntity>;
  payment_outlet: ReturnType<typeof initPaymentOutletEntity>;
  payment_pos_terminal: ReturnType<typeof initPaymentPosTerminalEntity>;
  payment_acceptance_configuration: ReturnType<typeof initPaymentAcceptanceConfigurationEntity>;
  payment_payment_method: ReturnType<typeof initPaymentPaymentMethodEntity>;
  payment_payment: ReturnType<typeof initPaymentPaymentEntity>;
  payment_payment_allocation: ReturnType<typeof initPaymentPaymentAllocationEntity>;
  payment_refund: ReturnType<typeof initPaymentRefundEntity>;
  payment_gateway_webhook: ReturnType<typeof initPaymentGatewayWebhookEntity>;
  payment_reconciliation_batch: ReturnType<typeof initPaymentReconciliationBatchEntity>;
  payment_reconciliation_item: ReturnType<typeof initPaymentReconciliationItemEntity>;
}

export function createGeneratedModels(sequelize: Sequelize): GeneratedModels {
  const models: GeneratedModels = {
      payment_acceptance_mode: initPaymentAcceptanceModeEntity(sequelize),
      payment_merchant_account: initPaymentMerchantAccountEntity(sequelize),
      payment_outlet: initPaymentOutletEntity(sequelize),
      payment_pos_terminal: initPaymentPosTerminalEntity(sequelize),
      payment_acceptance_configuration: initPaymentAcceptanceConfigurationEntity(sequelize),
      payment_payment_method: initPaymentPaymentMethodEntity(sequelize),
      payment_payment: initPaymentPaymentEntity(sequelize),
      payment_payment_allocation: initPaymentPaymentAllocationEntity(sequelize),
      payment_refund: initPaymentRefundEntity(sequelize),
      payment_gateway_webhook: initPaymentGatewayWebhookEntity(sequelize),
      payment_reconciliation_batch: initPaymentReconciliationBatchEntity(sequelize),
      payment_reconciliation_item: initPaymentReconciliationItemEntity(sequelize)
  }
  return models
}

export function associateGeneratedModels(models: GeneratedModels): void {
  models.payment_pos_terminal.belongsTo(models.payment_outlet, { as: 'tenantApplication', foreignKey: 'tenantApplicationId', targetKey: 'tenantApplicationId' })
  models.payment_outlet.hasMany(models.payment_pos_terminal, { as: 'paymentPosTerminal', foreignKey: 'tenantApplicationId', sourceKey: 'tenantApplicationId' })
  models.payment_pos_terminal.belongsTo(models.payment_merchant_account, { as: 'tenantApplicationPaymentMerchantAccount', foreignKey: 'tenantApplicationId', targetKey: 'tenantApplicationId' })
  models.payment_merchant_account.hasMany(models.payment_pos_terminal, { as: 'paymentPosTerminal', foreignKey: 'tenantApplicationId', sourceKey: 'tenantApplicationId' })
  models.payment_acceptance_configuration.belongsTo(models.payment_acceptance_mode, { as: 'mode', foreignKey: 'modeCode', targetKey: 'modeCode' })
  models.payment_acceptance_mode.hasMany(models.payment_acceptance_configuration, { as: 'paymentAcceptanceConfiguration', foreignKey: 'modeCode', sourceKey: 'modeCode' })
  models.payment_acceptance_configuration.belongsTo(models.payment_outlet, { as: 'tenantApplication', foreignKey: 'tenantApplicationId', targetKey: 'tenantApplicationId' })
  models.payment_outlet.hasMany(models.payment_acceptance_configuration, { as: 'paymentAcceptanceConfiguration', foreignKey: 'tenantApplicationId', sourceKey: 'tenantApplicationId' })
  models.payment_acceptance_configuration.belongsTo(models.payment_merchant_account, { as: 'tenantApplicationPaymentMerchantAccount', foreignKey: 'tenantApplicationId', targetKey: 'tenantApplicationId' })
  models.payment_merchant_account.hasMany(models.payment_acceptance_configuration, { as: 'paymentAcceptanceConfiguration', foreignKey: 'tenantApplicationId', sourceKey: 'tenantApplicationId' })
  models.payment_acceptance_configuration.belongsTo(models.payment_pos_terminal, { as: 'tenantApplicationPaymentPosTerminal', foreignKey: 'tenantApplicationId', targetKey: 'tenantApplicationId' })
  models.payment_pos_terminal.hasMany(models.payment_acceptance_configuration, { as: 'paymentAcceptanceConfiguration', foreignKey: 'tenantApplicationId', sourceKey: 'tenantApplicationId' })
  models.payment_payment.belongsTo(models.payment_payment_method, { as: 'paymentMethod', foreignKey: 'paymentMethodId', targetKey: 'paymentMethodId' })
  models.payment_payment_method.hasMany(models.payment_payment, { as: 'paymentPayment', foreignKey: 'paymentMethodId', sourceKey: 'paymentMethodId' })
  models.payment_payment_allocation.belongsTo(models.payment_payment, { as: 'payment', foreignKey: 'paymentId', targetKey: 'paymentId' })
  models.payment_payment.hasMany(models.payment_payment_allocation, { as: 'paymentPaymentAllocation', foreignKey: 'paymentId', sourceKey: 'paymentId' })
  models.payment_payment_allocation.belongsTo(models.payment_payment_allocation, { as: 'reversalOf', foreignKey: 'reversalOfId', targetKey: 'paymentAllocationId' })
  models.payment_payment_allocation.hasMany(models.payment_payment_allocation, { as: 'paymentPaymentAllocation', foreignKey: 'reversalOfId', sourceKey: 'paymentAllocationId' })
  models.payment_refund.belongsTo(models.payment_payment, { as: 'payment', foreignKey: 'paymentId', targetKey: 'paymentId' })
  models.payment_payment.hasMany(models.payment_refund, { as: 'paymentRefund', foreignKey: 'paymentId', sourceKey: 'paymentId' })
  models.payment_reconciliation_item.belongsTo(models.payment_reconciliation_batch, { as: 'reconciliationBatch', foreignKey: 'reconciliationBatchId', targetKey: 'reconciliationBatchId', onDelete: 'CASCADE' })
  models.payment_reconciliation_batch.hasMany(models.payment_reconciliation_item, { as: 'paymentReconciliationItem', foreignKey: 'reconciliationBatchId', sourceKey: 'reconciliationBatchId', onDelete: 'CASCADE' })
  models.payment_reconciliation_item.belongsTo(models.payment_payment, { as: 'payment', foreignKey: 'paymentId', targetKey: 'paymentId' })
  models.payment_payment.hasMany(models.payment_reconciliation_item, { as: 'paymentReconciliationItem', foreignKey: 'paymentId', sourceKey: 'paymentId' })
}
