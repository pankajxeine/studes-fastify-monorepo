"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createGeneratedModels = createGeneratedModels;
exports.associateGeneratedModels = associateGeneratedModels;
const disp_incident_category_entity_1 = require("./disp_incident_category/disp_incident_category.entity");
const disp_incident_entity_1 = require("./disp_incident/disp_incident.entity");
const disp_incident_party_entity_1 = require("./disp_incident_party/disp_incident_party.entity");
const disp_disciplinary_action_entity_1 = require("./disp_disciplinary_action/disp_disciplinary_action.entity");
const disp_merit_record_entity_1 = require("./disp_merit_record/disp_merit_record.entity");
function createGeneratedModels(sequelize) {
    const models = {
        disp_incident_category: (0, disp_incident_category_entity_1.initDispIncidentCategoryEntity)(sequelize),
        disp_incident: (0, disp_incident_entity_1.initDispIncidentEntity)(sequelize),
        disp_incident_party: (0, disp_incident_party_entity_1.initDispIncidentPartyEntity)(sequelize),
        disp_disciplinary_action: (0, disp_disciplinary_action_entity_1.initDispDisciplinaryActionEntity)(sequelize),
        disp_merit_record: (0, disp_merit_record_entity_1.initDispMeritRecordEntity)(sequelize)
    };
    return models;
}
function associateGeneratedModels(models) {
    models.disp_incident.belongsTo(models.disp_incident_category, { as: 'incidentCategoryCode', foreignKey: 'incidentCategoryCode', targetKey: 'incidentCategoryCode', onUpdate: 'CASCADE' });
    models.disp_incident_category.hasMany(models.disp_incident, { as: 'dispIncident', foreignKey: 'incidentCategoryCode', sourceKey: 'incidentCategoryCode', onUpdate: 'CASCADE' });
    models.disp_incident_party.belongsTo(models.disp_incident, { as: 'incident', foreignKey: 'incidentId', targetKey: 'incidentId', onDelete: 'CASCADE' });
    models.disp_incident.hasMany(models.disp_incident_party, { as: 'dispIncidentParty', foreignKey: 'incidentId', sourceKey: 'incidentId', onDelete: 'CASCADE' });
    models.disp_disciplinary_action.belongsTo(models.disp_incident_party, { as: 'incidentParty', foreignKey: 'incidentPartyId', targetKey: 'incidentPartyId' });
    models.disp_incident_party.hasMany(models.disp_disciplinary_action, { as: 'dispDisciplinaryAction', foreignKey: 'incidentPartyId', sourceKey: 'incidentPartyId' });
    models.disp_merit_record.belongsTo(models.disp_incident, { as: 'incident', foreignKey: 'incidentId', targetKey: 'incidentId' });
    models.disp_incident.hasMany(models.disp_merit_record, { as: 'dispMeritRecord', foreignKey: 'incidentId', sourceKey: 'incidentId' });
}
