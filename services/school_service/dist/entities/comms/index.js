"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createGeneratedModels = createGeneratedModels;
exports.associateGeneratedModels = associateGeneratedModels;
const comms_notice_entity_1 = require("./comms_notice/comms_notice.entity");
const comms_notice_audience_entity_1 = require("./comms_notice_audience/comms_notice_audience.entity");
const comms_notice_read_entity_1 = require("./comms_notice_read/comms_notice_read.entity");
const comms_message_thread_entity_1 = require("./comms_message_thread/comms_message_thread.entity");
const comms_thread_participant_entity_1 = require("./comms_thread_participant/comms_thread_participant.entity");
const comms_message_entity_1 = require("./comms_message/comms_message.entity");
const comms_notification_template_entity_1 = require("./comms_notification_template/comms_notification_template.entity");
const comms_notification_entity_1 = require("./comms_notification/comms_notification.entity");
const comms_notification_preference_entity_1 = require("./comms_notification_preference/comms_notification_preference.entity");
function createGeneratedModels(sequelize) {
    const models = {
        comms_notice: (0, comms_notice_entity_1.initCommsNoticeEntity)(sequelize),
        comms_notice_audience: (0, comms_notice_audience_entity_1.initCommsNoticeAudienceEntity)(sequelize),
        comms_notice_read: (0, comms_notice_read_entity_1.initCommsNoticeReadEntity)(sequelize),
        comms_message_thread: (0, comms_message_thread_entity_1.initCommsMessageThreadEntity)(sequelize),
        comms_thread_participant: (0, comms_thread_participant_entity_1.initCommsThreadParticipantEntity)(sequelize),
        comms_message: (0, comms_message_entity_1.initCommsMessageEntity)(sequelize),
        comms_notification_template: (0, comms_notification_template_entity_1.initCommsNotificationTemplateEntity)(sequelize),
        comms_notification: (0, comms_notification_entity_1.initCommsNotificationEntity)(sequelize),
        comms_notification_preference: (0, comms_notification_preference_entity_1.initCommsNotificationPreferenceEntity)(sequelize)
    };
    return models;
}
function associateGeneratedModels(models) {
    models.comms_notice_audience.belongsTo(models.comms_notice, { as: 'notice', foreignKey: 'noticeId', targetKey: 'noticeId', onDelete: 'CASCADE' });
    models.comms_notice.hasMany(models.comms_notice_audience, { as: 'commsNoticeAudience', foreignKey: 'noticeId', sourceKey: 'noticeId', onDelete: 'CASCADE' });
    models.comms_notice_read.belongsTo(models.comms_notice, { as: 'notice', foreignKey: 'noticeId', targetKey: 'noticeId', onDelete: 'CASCADE' });
    models.comms_notice.hasMany(models.comms_notice_read, { as: 'commsNoticeRead', foreignKey: 'noticeId', sourceKey: 'noticeId', onDelete: 'CASCADE' });
    models.comms_thread_participant.belongsTo(models.comms_message_thread, { as: 'messageThread', foreignKey: 'messageThreadId', targetKey: 'messageThreadId', onDelete: 'CASCADE' });
    models.comms_message_thread.hasMany(models.comms_thread_participant, { as: 'commsThreadParticipant', foreignKey: 'messageThreadId', sourceKey: 'messageThreadId', onDelete: 'CASCADE' });
    models.comms_message.belongsTo(models.comms_message_thread, { as: 'messageThread', foreignKey: 'messageThreadId', targetKey: 'messageThreadId', onDelete: 'CASCADE' });
    models.comms_message_thread.hasMany(models.comms_message, { as: 'commsMessage', foreignKey: 'messageThreadId', sourceKey: 'messageThreadId', onDelete: 'CASCADE' });
    models.comms_notification.belongsTo(models.comms_notification_template, { as: 'notificationTemplateCode', foreignKey: 'notificationTemplateCode', targetKey: 'notificationTemplateCode', onUpdate: 'CASCADE' });
    models.comms_notification_template.hasMany(models.comms_notification, { as: 'commsNotification', foreignKey: 'notificationTemplateCode', sourceKey: 'notificationTemplateCode', onUpdate: 'CASCADE' });
    models.comms_notification_preference.belongsTo(models.comms_notification_template, { as: 'notificationTemplateCode', foreignKey: 'notificationTemplateCode', targetKey: 'notificationTemplateCode', onUpdate: 'CASCADE' });
    models.comms_notification_template.hasMany(models.comms_notification_preference, { as: 'commsNotificationPreference', foreignKey: 'notificationTemplateCode', sourceKey: 'notificationTemplateCode', onUpdate: 'CASCADE' });
}
