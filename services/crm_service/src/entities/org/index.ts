import type { Sequelize } from 'sequelize'
import { initOrgLegalEntityEntity } from './org_legal_entity/org_legal_entity.entity'
import { initOrgTerritoryEntity } from './org_territory/org_territory.entity'
import { initOrgBranchEntity } from './org_branch/org_branch.entity'
import { initOrgTeamEntity } from './org_team/org_team.entity'
import { initOrgTeamMemberEntity } from './org_team_member/org_team_member.entity'

export type GeneratedModels = {
  org_legal_entity: ReturnType<typeof initOrgLegalEntityEntity>;
  org_territory: ReturnType<typeof initOrgTerritoryEntity>;
  org_branch: ReturnType<typeof initOrgBranchEntity>;
  org_team: ReturnType<typeof initOrgTeamEntity>;
  org_team_member: ReturnType<typeof initOrgTeamMemberEntity>;
}

export function createGeneratedModels(sequelize: Sequelize): GeneratedModels {
  const models: GeneratedModels = {
      org_legal_entity: initOrgLegalEntityEntity(sequelize),
      org_territory: initOrgTerritoryEntity(sequelize),
      org_branch: initOrgBranchEntity(sequelize),
      org_team: initOrgTeamEntity(sequelize),
      org_team_member: initOrgTeamMemberEntity(sequelize)
  }
  return models
}

export function associateGeneratedModels(models: GeneratedModels): void {
  models.org_territory.belongsTo(models.org_territory, { as: 'parentTerritory', foreignKey: 'parentTerritoryId', targetKey: 'territoryId' })
  models.org_territory.hasMany(models.org_territory, { as: 'orgTerritory', foreignKey: 'parentTerritoryId', sourceKey: 'territoryId' })
  models.org_branch.belongsTo(models.org_legal_entity, { as: 'legalEntity', foreignKey: 'legalEntityId', targetKey: 'legalEntityId' })
  models.org_legal_entity.hasMany(models.org_branch, { as: 'orgBranch', foreignKey: 'legalEntityId', sourceKey: 'legalEntityId' })
  models.org_branch.belongsTo(models.org_territory, { as: 'territory', foreignKey: 'territoryId', targetKey: 'territoryId' })
  models.org_territory.hasMany(models.org_branch, { as: 'orgBranch', foreignKey: 'territoryId', sourceKey: 'territoryId' })
  models.org_team.belongsTo(models.org_branch, { as: 'branch', foreignKey: 'branchId', targetKey: 'branchId' })
  models.org_branch.hasMany(models.org_team, { as: 'orgTeam', foreignKey: 'branchId', sourceKey: 'branchId' })
  models.org_team_member.belongsTo(models.org_team, { as: 'team', foreignKey: 'teamId', targetKey: 'teamId', onDelete: 'CASCADE' })
  models.org_team.hasMany(models.org_team_member, { as: 'orgTeamMember', foreignKey: 'teamId', sourceKey: 'teamId', onDelete: 'CASCADE' })
}
