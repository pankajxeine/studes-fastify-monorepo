import type { Sequelize } from 'sequelize'
import { initNotifyTemplateEntity } from './notify_template/notify_template.entity'
import { initNotifyTemplateVersionEntity } from './notify_template_version/notify_template_version.entity'
import { initNotifyTemplateLocaleEntity } from './notify_template_locale/notify_template_locale.entity'
import { initNotifyChannelProviderEntity } from './notify_channel_provider/notify_channel_provider.entity'
import { initNotifyNotificationEntity } from './notify_notification/notify_notification.entity'
import { initNotifyDeliveryAttemptEntity } from './notify_delivery_attempt/notify_delivery_attempt.entity'
import { initNotifySuppressionEntity } from './notify_suppression/notify_suppression.entity'

export type GeneratedModels = {
  notify_template: ReturnType<typeof initNotifyTemplateEntity>;
  notify_template_version: ReturnType<typeof initNotifyTemplateVersionEntity>;
  notify_template_locale: ReturnType<typeof initNotifyTemplateLocaleEntity>;
  notify_channel_provider: ReturnType<typeof initNotifyChannelProviderEntity>;
  notify_notification: ReturnType<typeof initNotifyNotificationEntity>;
  notify_delivery_attempt: ReturnType<typeof initNotifyDeliveryAttemptEntity>;
  notify_suppression: ReturnType<typeof initNotifySuppressionEntity>;
}

export function createGeneratedModels(sequelize: Sequelize): GeneratedModels {
  const models: GeneratedModels = {
      notify_template: initNotifyTemplateEntity(sequelize),
      notify_template_version: initNotifyTemplateVersionEntity(sequelize),
      notify_template_locale: initNotifyTemplateLocaleEntity(sequelize),
      notify_channel_provider: initNotifyChannelProviderEntity(sequelize),
      notify_notification: initNotifyNotificationEntity(sequelize),
      notify_delivery_attempt: initNotifyDeliveryAttemptEntity(sequelize),
      notify_suppression: initNotifySuppressionEntity(sequelize)
  }
  return models
}

export function associateGeneratedModels(models: GeneratedModels): void {
  models.notify_template_version.belongsTo(models.notify_template, { as: 'template', foreignKey: 'templateId', targetKey: 'templateId', onDelete: 'CASCADE' })
  models.notify_template.hasMany(models.notify_template_version, { as: 'notifyTemplateVersion', foreignKey: 'templateId', sourceKey: 'templateId', onDelete: 'CASCADE' })
  models.notify_template_locale.belongsTo(models.notify_template_version, { as: 'templateVersion', foreignKey: 'templateVersionId', targetKey: 'templateVersionId', onDelete: 'CASCADE' })
  models.notify_template_version.hasMany(models.notify_template_locale, { as: 'notifyTemplateLocale', foreignKey: 'templateVersionId', sourceKey: 'templateVersionId', onDelete: 'CASCADE' })
  models.notify_notification.belongsTo(models.notify_template_version, { as: 'templateVersion', foreignKey: 'templateVersionId', targetKey: 'templateVersionId' })
  models.notify_template_version.hasMany(models.notify_notification, { as: 'notifyNotification', foreignKey: 'templateVersionId', sourceKey: 'templateVersionId' })
  models.notify_delivery_attempt.belongsTo(models.notify_notification, { as: 'notification', foreignKey: 'notificationId', targetKey: 'notificationId', onDelete: 'CASCADE' })
  models.notify_notification.hasMany(models.notify_delivery_attempt, { as: 'notifyDeliveryAttempt', foreignKey: 'notificationId', sourceKey: 'notificationId', onDelete: 'CASCADE' })
  models.notify_delivery_attempt.belongsTo(models.notify_channel_provider, { as: 'provider', foreignKey: 'providerCode', targetKey: 'providerCode' })
  models.notify_channel_provider.hasMany(models.notify_delivery_attempt, { as: 'notifyDeliveryAttempt', foreignKey: 'providerCode', sourceKey: 'providerCode' })
}
