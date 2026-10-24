import type { Sequelize } from 'sequelize'
import { initCommsNoticeEntity } from './comms_notice/comms_notice.entity'
import { initCommsNoticeAudienceEntity } from './comms_notice_audience/comms_notice_audience.entity'
import { initCommsNoticeReadEntity } from './comms_notice_read/comms_notice_read.entity'
import { initCommsMessageThreadEntity } from './comms_message_thread/comms_message_thread.entity'
import { initCommsThreadParticipantEntity } from './comms_thread_participant/comms_thread_participant.entity'
import { initCommsMessageEntity } from './comms_message/comms_message.entity'
import { initCommsNotificationTemplateEntity } from './comms_notification_template/comms_notification_template.entity'
import { initCommsNotificationEntity } from './comms_notification/comms_notification.entity'
import { initCommsNotificationPreferenceEntity } from './comms_notification_preference/comms_notification_preference.entity'

export type GeneratedModels = {
  comms_notice: ReturnType<typeof initCommsNoticeEntity>;
  comms_notice_audience: ReturnType<typeof initCommsNoticeAudienceEntity>;
  comms_notice_read: ReturnType<typeof initCommsNoticeReadEntity>;
  comms_message_thread: ReturnType<typeof initCommsMessageThreadEntity>;
  comms_thread_participant: ReturnType<typeof initCommsThreadParticipantEntity>;
  comms_message: ReturnType<typeof initCommsMessageEntity>;
  comms_notification_template: ReturnType<typeof initCommsNotificationTemplateEntity>;
  comms_notification: ReturnType<typeof initCommsNotificationEntity>;
  comms_notification_preference: ReturnType<typeof initCommsNotificationPreferenceEntity>;
}

export function createGeneratedModels(sequelize: Sequelize): GeneratedModels {
  const models: GeneratedModels = {
      comms_notice: initCommsNoticeEntity(sequelize),
      comms_notice_audience: initCommsNoticeAudienceEntity(sequelize),
      comms_notice_read: initCommsNoticeReadEntity(sequelize),
      comms_message_thread: initCommsMessageThreadEntity(sequelize),
      comms_thread_participant: initCommsThreadParticipantEntity(sequelize),
      comms_message: initCommsMessageEntity(sequelize),
      comms_notification_template: initCommsNotificationTemplateEntity(sequelize),
      comms_notification: initCommsNotificationEntity(sequelize),
      comms_notification_preference: initCommsNotificationPreferenceEntity(sequelize)
  }
  return models
}

export function associateGeneratedModels(models: GeneratedModels): void {
  models.comms_notice_audience.belongsTo(models.comms_notice, { as: 'notice', foreignKey: 'noticeId', targetKey: 'noticeId', onDelete: 'CASCADE' })
  models.comms_notice.hasMany(models.comms_notice_audience, { as: 'commsNoticeAudience', foreignKey: 'noticeId', sourceKey: 'noticeId', onDelete: 'CASCADE' })
  models.comms_notice_read.belongsTo(models.comms_notice, { as: 'notice', foreignKey: 'noticeId', targetKey: 'noticeId', onDelete: 'CASCADE' })
  models.comms_notice.hasMany(models.comms_notice_read, { as: 'commsNoticeRead', foreignKey: 'noticeId', sourceKey: 'noticeId', onDelete: 'CASCADE' })
  models.comms_thread_participant.belongsTo(models.comms_message_thread, { as: 'messageThread', foreignKey: 'messageThreadId', targetKey: 'messageThreadId', onDelete: 'CASCADE' })
  models.comms_message_thread.hasMany(models.comms_thread_participant, { as: 'commsThreadParticipant', foreignKey: 'messageThreadId', sourceKey: 'messageThreadId', onDelete: 'CASCADE' })
  models.comms_message.belongsTo(models.comms_message_thread, { as: 'messageThread', foreignKey: 'messageThreadId', targetKey: 'messageThreadId', onDelete: 'CASCADE' })
  models.comms_message_thread.hasMany(models.comms_message, { as: 'commsMessage', foreignKey: 'messageThreadId', sourceKey: 'messageThreadId', onDelete: 'CASCADE' })
  models.comms_notification.belongsTo(models.comms_notification_template, { as: 'notificationTemplateCode', foreignKey: 'notificationTemplateCode', targetKey: 'notificationTemplateCode', onUpdate: 'CASCADE' })
  models.comms_notification_template.hasMany(models.comms_notification, { as: 'commsNotification', foreignKey: 'notificationTemplateCode', sourceKey: 'notificationTemplateCode', onUpdate: 'CASCADE' })
  models.comms_notification_preference.belongsTo(models.comms_notification_template, { as: 'notificationTemplateCode', foreignKey: 'notificationTemplateCode', targetKey: 'notificationTemplateCode', onUpdate: 'CASCADE' })
  models.comms_notification_template.hasMany(models.comms_notification_preference, { as: 'commsNotificationPreference', foreignKey: 'notificationTemplateCode', sourceKey: 'notificationTemplateCode', onUpdate: 'CASCADE' })
}
