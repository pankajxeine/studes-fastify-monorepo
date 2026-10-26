"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createGeneratedModels = createGeneratedModels;
exports.associateGeneratedModels = associateGeneratedModels;
const health_medical_profile_entity_1 = require("./health_medical_profile/health_medical_profile.entity");
const health_immunization_entity_1 = require("./health_immunization/health_immunization.entity");
const health_clinic_visit_entity_1 = require("./health_clinic_visit/health_clinic_visit.entity");
const health_health_checkup_entity_1 = require("./health_health_checkup/health_health_checkup.entity");
function createGeneratedModels(sequelize) {
    const models = {
        health_medical_profile: (0, health_medical_profile_entity_1.initHealthMedicalProfileEntity)(sequelize),
        health_immunization: (0, health_immunization_entity_1.initHealthImmunizationEntity)(sequelize),
        health_clinic_visit: (0, health_clinic_visit_entity_1.initHealthClinicVisitEntity)(sequelize),
        health_health_checkup: (0, health_health_checkup_entity_1.initHealthHealthCheckupEntity)(sequelize)
    };
    return models;
}
function associateGeneratedModels(models) {
}
