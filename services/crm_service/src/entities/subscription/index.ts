import type { Sequelize } from 'sequelize'
import { initSubscriptionSubscriptionEntity } from './subscription_subscription/subscription_subscription.entity'
import { initSubscriptionSubscriptionItemEntity } from './subscription_subscription_item/subscription_subscription_item.entity'
import { initSubscriptionSubscriptionChangeEntity } from './subscription_subscription_change/subscription_subscription_change.entity'
import { initSubscriptionSubscriptionDiscountEntity } from './subscription_subscription_discount/subscription_subscription_discount.entity'

export type GeneratedModels = {
  subscription_subscription: ReturnType<typeof initSubscriptionSubscriptionEntity>;
  subscription_subscription_item: ReturnType<typeof initSubscriptionSubscriptionItemEntity>;
  subscription_subscription_change: ReturnType<typeof initSubscriptionSubscriptionChangeEntity>;
  subscription_subscription_discount: ReturnType<typeof initSubscriptionSubscriptionDiscountEntity>;
}

export function createGeneratedModels(sequelize: Sequelize): GeneratedModels {
  const models: GeneratedModels = {
      subscription_subscription: initSubscriptionSubscriptionEntity(sequelize),
      subscription_subscription_item: initSubscriptionSubscriptionItemEntity(sequelize),
      subscription_subscription_change: initSubscriptionSubscriptionChangeEntity(sequelize),
      subscription_subscription_discount: initSubscriptionSubscriptionDiscountEntity(sequelize)
  }
  return models
}

export function associateGeneratedModels(models: GeneratedModels): void {
  models.subscription_subscription_item.belongsTo(models.subscription_subscription, { as: 'subscription', foreignKey: 'subscriptionId', targetKey: 'subscriptionId', onDelete: 'CASCADE' })
  models.subscription_subscription.hasMany(models.subscription_subscription_item, { as: 'subscriptionSubscriptionItem', foreignKey: 'subscriptionId', sourceKey: 'subscriptionId', onDelete: 'CASCADE' })
  models.subscription_subscription_change.belongsTo(models.subscription_subscription, { as: 'subscription', foreignKey: 'subscriptionId', targetKey: 'subscriptionId' })
  models.subscription_subscription.hasMany(models.subscription_subscription_change, { as: 'subscriptionSubscriptionChange', foreignKey: 'subscriptionId', sourceKey: 'subscriptionId' })
  models.subscription_subscription_discount.belongsTo(models.subscription_subscription, { as: 'subscription', foreignKey: 'subscriptionId', targetKey: 'subscriptionId', onDelete: 'CASCADE' })
  models.subscription_subscription.hasMany(models.subscription_subscription_discount, { as: 'subscriptionSubscriptionDiscount', foreignKey: 'subscriptionId', sourceKey: 'subscriptionId', onDelete: 'CASCADE' })
}
