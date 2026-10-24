import type { Sequelize } from 'sequelize'
import { initDispIncidentCategoryEntity } from './disp_incident_category/disp_incident_category.entity'
import { initDispIncidentEntity } from './disp_incident/disp_incident.entity'
import { initDispIncidentPartyEntity } from './disp_incident_party/disp_incident_party.entity'
import { initDispDisciplinaryActionEntity } from './disp_disciplinary_action/disp_disciplinary_action.entity'
import { initDispMeritRecordEntity } from './disp_merit_record/disp_merit_record.entity'

export type GeneratedModels = {
  disp_incident_category: ReturnType<typeof initDispIncidentCategoryEntity>;
  disp_incident: ReturnType<typeof initDispIncidentEntity>;
  disp_incident_party: ReturnType<typeof initDispIncidentPartyEntity>;
  disp_disciplinary_action: ReturnType<typeof initDispDisciplinaryActionEntity>;
  disp_merit_record: ReturnType<typeof initDispMeritRecordEntity>;
}

export function createGeneratedModels(sequelize: Sequelize): GeneratedModels {
  const models: GeneratedModels = {
      disp_incident_category: initDispIncidentCategoryEntity(sequelize),
      disp_incident: initDispIncidentEntity(sequelize),
      disp_incident_party: initDispIncidentPartyEntity(sequelize),
      disp_disciplinary_action: initDispDisciplinaryActionEntity(sequelize),
      disp_merit_record: initDispMeritRecordEntity(sequelize)
  }
  return models
}

export function associateGeneratedModels(models: GeneratedModels): void {
  models.disp_incident.belongsTo(models.disp_incident_category, { as: 'incidentCategoryCode', foreignKey: 'incidentCategoryCode', targetKey: 'incidentCategoryCode', onUpdate: 'CASCADE' })
  models.disp_incident_category.hasMany(models.disp_incident, { as: 'dispIncident', foreignKey: 'incidentCategoryCode', sourceKey: 'incidentCategoryCode', onUpdate: 'CASCADE' })
  models.disp_incident_party.belongsTo(models.disp_incident, { as: 'incident', foreignKey: 'incidentId', targetKey: 'incidentId', onDelete: 'CASCADE' })
  models.disp_incident.hasMany(models.disp_incident_party, { as: 'dispIncidentParty', foreignKey: 'incidentId', sourceKey: 'incidentId', onDelete: 'CASCADE' })
  models.disp_disciplinary_action.belongsTo(models.disp_incident_party, { as: 'incidentParty', foreignKey: 'incidentPartyId', targetKey: 'incidentPartyId' })
  models.disp_incident_party.hasMany(models.disp_disciplinary_action, { as: 'dispDisciplinaryAction', foreignKey: 'incidentPartyId', sourceKey: 'incidentPartyId' })
  models.disp_merit_record.belongsTo(models.disp_incident, { as: 'incident', foreignKey: 'incidentId', targetKey: 'incidentId' })
  models.disp_incident.hasMany(models.disp_merit_record, { as: 'dispMeritRecord', foreignKey: 'incidentId', sourceKey: 'incidentId' })
}
