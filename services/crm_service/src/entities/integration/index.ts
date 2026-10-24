import type { Sequelize } from 'sequelize'
import { initIntegrationOutboxEventEntity } from './integration_outbox_event/integration_outbox_event.entity'
import { initIntegrationInboxEventEntity } from './integration_inbox_event/integration_inbox_event.entity'
import { initIntegrationIdempotencyKeyEntity } from './integration_idempotency_key/integration_idempotency_key.entity'
import { initIntegrationWebhookSubscriptionEntity } from './integration_webhook_subscription/integration_webhook_subscription.entity'
import { initIntegrationWebhookDeliveryEntity } from './integration_webhook_delivery/integration_webhook_delivery.entity'

export type GeneratedModels = {
  integration_outbox_event: ReturnType<typeof initIntegrationOutboxEventEntity>;
  integration_inbox_event: ReturnType<typeof initIntegrationInboxEventEntity>;
  integration_idempotency_key: ReturnType<typeof initIntegrationIdempotencyKeyEntity>;
  integration_webhook_subscription: ReturnType<typeof initIntegrationWebhookSubscriptionEntity>;
  integration_webhook_delivery: ReturnType<typeof initIntegrationWebhookDeliveryEntity>;
}

export function createGeneratedModels(sequelize: Sequelize): GeneratedModels {
  const models: GeneratedModels = {
      integration_outbox_event: initIntegrationOutboxEventEntity(sequelize),
      integration_inbox_event: initIntegrationInboxEventEntity(sequelize),
      integration_idempotency_key: initIntegrationIdempotencyKeyEntity(sequelize),
      integration_webhook_subscription: initIntegrationWebhookSubscriptionEntity(sequelize),
      integration_webhook_delivery: initIntegrationWebhookDeliveryEntity(sequelize)
  }
  return models
}

export function associateGeneratedModels(models: GeneratedModels): void {
  models.integration_webhook_delivery.belongsTo(models.integration_webhook_subscription, { as: 'webhookSubscription', foreignKey: 'webhookSubscriptionId', targetKey: 'webhookSubscriptionId', onDelete: 'CASCADE' })
  models.integration_webhook_subscription.hasMany(models.integration_webhook_delivery, { as: 'integrationWebhookDelivery', foreignKey: 'webhookSubscriptionId', sourceKey: 'webhookSubscriptionId', onDelete: 'CASCADE' })
  models.integration_webhook_delivery.belongsTo(models.integration_outbox_event, { as: 'event', foreignKey: 'eventId', targetKey: 'eventId', onDelete: 'CASCADE' })
  models.integration_outbox_event.hasMany(models.integration_webhook_delivery, { as: 'integrationWebhookDelivery', foreignKey: 'eventId', sourceKey: 'eventId', onDelete: 'CASCADE' })
}
