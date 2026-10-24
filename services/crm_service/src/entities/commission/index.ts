import type { Sequelize } from 'sequelize'
import { initCommissionCommissionPlanEntity } from './commission_commission_plan/commission_commission_plan.entity'
import { initCommissionCommissionRuleEntity } from './commission_commission_rule/commission_commission_rule.entity'
import { initCommissionAgentPlanAssignmentEntity } from './commission_agent_plan_assignment/commission_agent_plan_assignment.entity'
import { initCommissionPayoutEntity } from './commission_payout/commission_payout.entity'
import { initCommissionCommissionLedgerEntity } from './commission_commission_ledger/commission_commission_ledger.entity'

export type GeneratedModels = {
  commission_commission_plan: ReturnType<typeof initCommissionCommissionPlanEntity>;
  commission_commission_rule: ReturnType<typeof initCommissionCommissionRuleEntity>;
  commission_agent_plan_assignment: ReturnType<typeof initCommissionAgentPlanAssignmentEntity>;
  commission_payout: ReturnType<typeof initCommissionPayoutEntity>;
  commission_commission_ledger: ReturnType<typeof initCommissionCommissionLedgerEntity>;
}

export function createGeneratedModels(sequelize: Sequelize): GeneratedModels {
  const models: GeneratedModels = {
      commission_commission_plan: initCommissionCommissionPlanEntity(sequelize),
      commission_commission_rule: initCommissionCommissionRuleEntity(sequelize),
      commission_agent_plan_assignment: initCommissionAgentPlanAssignmentEntity(sequelize),
      commission_payout: initCommissionPayoutEntity(sequelize),
      commission_commission_ledger: initCommissionCommissionLedgerEntity(sequelize)
  }
  return models
}

export function associateGeneratedModels(models: GeneratedModels): void {
  models.commission_commission_rule.belongsTo(models.commission_commission_plan, { as: 'commissionPlan', foreignKey: 'commissionPlanId', targetKey: 'commissionPlanId', onDelete: 'CASCADE' })
  models.commission_commission_plan.hasMany(models.commission_commission_rule, { as: 'commissionCommissionRule', foreignKey: 'commissionPlanId', sourceKey: 'commissionPlanId', onDelete: 'CASCADE' })
  models.commission_agent_plan_assignment.belongsTo(models.commission_commission_plan, { as: 'commissionPlan', foreignKey: 'commissionPlanId', targetKey: 'commissionPlanId' })
  models.commission_commission_plan.hasMany(models.commission_agent_plan_assignment, { as: 'commissionAgentPlanAssignment', foreignKey: 'commissionPlanId', sourceKey: 'commissionPlanId' })
  models.commission_commission_ledger.belongsTo(models.commission_commission_rule, { as: 'commissionRule', foreignKey: 'commissionRuleId', targetKey: 'commissionRuleId' })
  models.commission_commission_rule.hasMany(models.commission_commission_ledger, { as: 'commissionCommissionLedger', foreignKey: 'commissionRuleId', sourceKey: 'commissionRuleId' })
  models.commission_commission_ledger.belongsTo(models.commission_commission_ledger, { as: 'reversesEntry', foreignKey: 'reversesEntryId', targetKey: 'entryId' })
  models.commission_commission_ledger.hasMany(models.commission_commission_ledger, { as: 'commissionCommissionLedger', foreignKey: 'reversesEntryId', sourceKey: 'entryId' })
  models.commission_commission_ledger.belongsTo(models.commission_payout, { as: 'payout', foreignKey: 'payoutId', targetKey: 'payoutId' })
  models.commission_payout.hasMany(models.commission_commission_ledger, { as: 'commissionCommissionLedger', foreignKey: 'payoutId', sourceKey: 'payoutId' })
}
