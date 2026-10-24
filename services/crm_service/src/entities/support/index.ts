import type { Sequelize } from 'sequelize'
import { initSupportSlaPolicyEntity } from './support_sla_policy/support_sla_policy.entity'
import { initSupportSlaTargetEntity } from './support_sla_target/support_sla_target.entity'
import { initSupportQueueEntity } from './support_queue/support_queue.entity'
import { initSupportTicketEntity } from './support_ticket/support_ticket.entity'
import { initSupportTicketMessageEntity } from './support_ticket_message/support_ticket_message.entity'
import { initSupportEscalationRuleEntity } from './support_escalation_rule/support_escalation_rule.entity'
import { initSupportTicketEscalationEntity } from './support_ticket_escalation/support_ticket_escalation.entity'
import { initSupportKbArticleEntity } from './support_kb_article/support_kb_article.entity'
import { initSupportCsatResponseEntity } from './support_csat_response/support_csat_response.entity'

export type GeneratedModels = {
  support_sla_policy: ReturnType<typeof initSupportSlaPolicyEntity>;
  support_sla_target: ReturnType<typeof initSupportSlaTargetEntity>;
  support_queue: ReturnType<typeof initSupportQueueEntity>;
  support_ticket: ReturnType<typeof initSupportTicketEntity>;
  support_ticket_message: ReturnType<typeof initSupportTicketMessageEntity>;
  support_escalation_rule: ReturnType<typeof initSupportEscalationRuleEntity>;
  support_ticket_escalation: ReturnType<typeof initSupportTicketEscalationEntity>;
  support_kb_article: ReturnType<typeof initSupportKbArticleEntity>;
  support_csat_response: ReturnType<typeof initSupportCsatResponseEntity>;
}

export function createGeneratedModels(sequelize: Sequelize): GeneratedModels {
  const models: GeneratedModels = {
      support_sla_policy: initSupportSlaPolicyEntity(sequelize),
      support_sla_target: initSupportSlaTargetEntity(sequelize),
      support_queue: initSupportQueueEntity(sequelize),
      support_ticket: initSupportTicketEntity(sequelize),
      support_ticket_message: initSupportTicketMessageEntity(sequelize),
      support_escalation_rule: initSupportEscalationRuleEntity(sequelize),
      support_ticket_escalation: initSupportTicketEscalationEntity(sequelize),
      support_kb_article: initSupportKbArticleEntity(sequelize),
      support_csat_response: initSupportCsatResponseEntity(sequelize)
  }
  return models
}

export function associateGeneratedModels(models: GeneratedModels): void {
  models.support_sla_target.belongsTo(models.support_sla_policy, { as: 'slaPolicy', foreignKey: 'slaPolicyId', targetKey: 'slaPolicyId', onDelete: 'CASCADE' })
  models.support_sla_policy.hasMany(models.support_sla_target, { as: 'supportSlaTarget', foreignKey: 'slaPolicyId', sourceKey: 'slaPolicyId', onDelete: 'CASCADE' })
  models.support_ticket.belongsTo(models.support_queue, { as: 'queue', foreignKey: 'queueId', targetKey: 'queueId' })
  models.support_queue.hasMany(models.support_ticket, { as: 'supportTicket', foreignKey: 'queueId', sourceKey: 'queueId' })
  models.support_ticket.belongsTo(models.support_sla_policy, { as: 'slaPolicy', foreignKey: 'slaPolicyId', targetKey: 'slaPolicyId' })
  models.support_sla_policy.hasMany(models.support_ticket, { as: 'supportTicket', foreignKey: 'slaPolicyId', sourceKey: 'slaPolicyId' })
  models.support_ticket.belongsTo(models.support_ticket, { as: 'parentTicket', foreignKey: 'parentTicketId', targetKey: 'ticketId' })
  models.support_ticket.hasMany(models.support_ticket, { as: 'supportTicket', foreignKey: 'parentTicketId', sourceKey: 'ticketId' })
  models.support_ticket_message.belongsTo(models.support_ticket, { as: 'ticket', foreignKey: 'ticketId', targetKey: 'ticketId', onDelete: 'CASCADE' })
  models.support_ticket.hasMany(models.support_ticket_message, { as: 'supportTicketMessage', foreignKey: 'ticketId', sourceKey: 'ticketId', onDelete: 'CASCADE' })
  models.support_escalation_rule.belongsTo(models.support_queue, { as: 'queue', foreignKey: 'queueId', targetKey: 'queueId' })
  models.support_queue.hasMany(models.support_escalation_rule, { as: 'supportEscalationRule', foreignKey: 'queueId', sourceKey: 'queueId' })
  models.support_escalation_rule.belongsTo(models.support_queue, { as: 'targetQueue', foreignKey: 'targetQueueId', targetKey: 'queueId' })
  models.support_queue.hasMany(models.support_escalation_rule, { as: 'supportEscalationRuleByTargetQueueId', foreignKey: 'targetQueueId', sourceKey: 'queueId' })
  models.support_ticket_escalation.belongsTo(models.support_ticket, { as: 'ticket', foreignKey: 'ticketId', targetKey: 'ticketId', onDelete: 'CASCADE' })
  models.support_ticket.hasMany(models.support_ticket_escalation, { as: 'supportTicketEscalation', foreignKey: 'ticketId', sourceKey: 'ticketId', onDelete: 'CASCADE' })
  models.support_ticket_escalation.belongsTo(models.support_escalation_rule, { as: 'escalationRule', foreignKey: 'escalationRuleId', targetKey: 'escalationRuleId' })
  models.support_escalation_rule.hasMany(models.support_ticket_escalation, { as: 'supportTicketEscalation', foreignKey: 'escalationRuleId', sourceKey: 'escalationRuleId' })
  models.support_csat_response.belongsTo(models.support_ticket, { as: 'ticket', foreignKey: 'ticketId', targetKey: 'ticketId', onDelete: 'CASCADE' })
  models.support_ticket.hasMany(models.support_csat_response, { as: 'supportCsatResponse', foreignKey: 'ticketId', sourceKey: 'ticketId', onDelete: 'CASCADE' })
}
