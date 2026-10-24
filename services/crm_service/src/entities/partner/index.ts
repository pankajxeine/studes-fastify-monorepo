import type { Sequelize } from 'sequelize'
import { initPartnerSalesAgentEntity } from './partner_sales_agent/partner_sales_agent.entity'
import { initPartnerAgentHierarchyEntity } from './partner_agent_hierarchy/partner_agent_hierarchy.entity'

export type GeneratedModels = {
  partner_sales_agent: ReturnType<typeof initPartnerSalesAgentEntity>;
  partner_agent_hierarchy: ReturnType<typeof initPartnerAgentHierarchyEntity>;
}

export function createGeneratedModels(sequelize: Sequelize): GeneratedModels {
  const models: GeneratedModels = {
      partner_sales_agent: initPartnerSalesAgentEntity(sequelize),
      partner_agent_hierarchy: initPartnerAgentHierarchyEntity(sequelize)
  }
  return models
}

export function associateGeneratedModels(models: GeneratedModels): void {
  models.partner_sales_agent.belongsTo(models.partner_sales_agent, { as: 'parentAgent', foreignKey: 'parentAgentId', targetKey: 'salesAgentId' })
  models.partner_sales_agent.hasMany(models.partner_sales_agent, { as: 'partnerSalesAgent', foreignKey: 'parentAgentId', sourceKey: 'salesAgentId' })
  models.partner_agent_hierarchy.belongsTo(models.partner_sales_agent, { as: 'ancestor', foreignKey: 'ancestorId', targetKey: 'salesAgentId', onDelete: 'CASCADE' })
  models.partner_sales_agent.hasMany(models.partner_agent_hierarchy, { as: 'partnerAgentHierarchy', foreignKey: 'ancestorId', sourceKey: 'salesAgentId', onDelete: 'CASCADE' })
  models.partner_agent_hierarchy.belongsTo(models.partner_sales_agent, { as: 'descendant', foreignKey: 'descendantId', targetKey: 'salesAgentId', onDelete: 'CASCADE' })
  models.partner_sales_agent.hasMany(models.partner_agent_hierarchy, { as: 'partnerAgentHierarchyByDescendantId', foreignKey: 'descendantId', sourceKey: 'salesAgentId', onDelete: 'CASCADE' })
}
