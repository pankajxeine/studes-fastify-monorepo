"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createGeneratedModels = createGeneratedModels;
exports.associateGeneratedModels = associateGeneratedModels;
const admis_inquiry_source_entity_1 = require("./admis_inquiry_source/admis_inquiry_source.entity");
const admis_inquiry_entity_1 = require("./admis_inquiry/admis_inquiry.entity");
const admis_inquiry_follow_up_entity_1 = require("./admis_inquiry_follow_up/admis_inquiry_follow_up.entity");
const admis_admission_cycle_entity_1 = require("./admis_admission_cycle/admis_admission_cycle.entity");
const admis_admission_cycle_seat_entity_1 = require("./admis_admission_cycle_seat/admis_admission_cycle_seat.entity");
const admis_application_entity_1 = require("./admis_application/admis_application.entity");
const admis_application_guardian_entity_1 = require("./admis_application_guardian/admis_application_guardian.entity");
const admis_application_document_entity_1 = require("./admis_application_document/admis_application_document.entity");
const admis_application_assessment_entity_1 = require("./admis_application_assessment/admis_application_assessment.entity");
const admis_application_status_history_entity_1 = require("./admis_application_status_history/admis_application_status_history.entity");
function createGeneratedModels(sequelize) {
    const models = {
        admis_inquiry_source: (0, admis_inquiry_source_entity_1.initAdmisInquirySourceEntity)(sequelize),
        admis_inquiry: (0, admis_inquiry_entity_1.initAdmisInquiryEntity)(sequelize),
        admis_inquiry_follow_up: (0, admis_inquiry_follow_up_entity_1.initAdmisInquiryFollowUpEntity)(sequelize),
        admis_admission_cycle: (0, admis_admission_cycle_entity_1.initAdmisAdmissionCycleEntity)(sequelize),
        admis_admission_cycle_seat: (0, admis_admission_cycle_seat_entity_1.initAdmisAdmissionCycleSeatEntity)(sequelize),
        admis_application: (0, admis_application_entity_1.initAdmisApplicationEntity)(sequelize),
        admis_application_guardian: (0, admis_application_guardian_entity_1.initAdmisApplicationGuardianEntity)(sequelize),
        admis_application_document: (0, admis_application_document_entity_1.initAdmisApplicationDocumentEntity)(sequelize),
        admis_application_assessment: (0, admis_application_assessment_entity_1.initAdmisApplicationAssessmentEntity)(sequelize),
        admis_application_status_history: (0, admis_application_status_history_entity_1.initAdmisApplicationStatusHistoryEntity)(sequelize)
    };
    return models;
}
function associateGeneratedModels(models) {
    models.admis_inquiry.belongsTo(models.admis_inquiry_source, { as: 'inquirySourceCode', foreignKey: 'inquirySourceCode', targetKey: 'inquirySourceCode', onUpdate: 'CASCADE' });
    models.admis_inquiry_source.hasMany(models.admis_inquiry, { as: 'admisInquiry', foreignKey: 'inquirySourceCode', sourceKey: 'inquirySourceCode', onUpdate: 'CASCADE' });
    models.admis_inquiry_follow_up.belongsTo(models.admis_inquiry, { as: 'inquiry', foreignKey: 'inquiryId', targetKey: 'inquiryId', onDelete: 'CASCADE' });
    models.admis_inquiry.hasMany(models.admis_inquiry_follow_up, { as: 'admisInquiryFollowUp', foreignKey: 'inquiryId', sourceKey: 'inquiryId', onDelete: 'CASCADE' });
    models.admis_admission_cycle_seat.belongsTo(models.admis_admission_cycle, { as: 'admissionCycle', foreignKey: 'admissionCycleId', targetKey: 'admissionCycleId', onDelete: 'CASCADE' });
    models.admis_admission_cycle.hasMany(models.admis_admission_cycle_seat, { as: 'admisAdmissionCycleSeat', foreignKey: 'admissionCycleId', sourceKey: 'admissionCycleId', onDelete: 'CASCADE' });
    models.admis_application.belongsTo(models.admis_admission_cycle, { as: 'admissionCycle', foreignKey: 'admissionCycleId', targetKey: 'admissionCycleId' });
    models.admis_admission_cycle.hasMany(models.admis_application, { as: 'admisApplication', foreignKey: 'admissionCycleId', sourceKey: 'admissionCycleId' });
    models.admis_application.belongsTo(models.admis_inquiry, { as: 'inquiry', foreignKey: 'inquiryId', targetKey: 'inquiryId' });
    models.admis_inquiry.hasMany(models.admis_application, { as: 'admisApplication', foreignKey: 'inquiryId', sourceKey: 'inquiryId' });
    models.admis_application_guardian.belongsTo(models.admis_application, { as: 'application', foreignKey: 'applicationId', targetKey: 'applicationId', onDelete: 'CASCADE' });
    models.admis_application.hasMany(models.admis_application_guardian, { as: 'admisApplicationGuardian', foreignKey: 'applicationId', sourceKey: 'applicationId', onDelete: 'CASCADE' });
    models.admis_application_document.belongsTo(models.admis_application, { as: 'application', foreignKey: 'applicationId', targetKey: 'applicationId', onDelete: 'CASCADE' });
    models.admis_application.hasMany(models.admis_application_document, { as: 'admisApplicationDocument', foreignKey: 'applicationId', sourceKey: 'applicationId', onDelete: 'CASCADE' });
    models.admis_application_assessment.belongsTo(models.admis_application, { as: 'application', foreignKey: 'applicationId', targetKey: 'applicationId', onDelete: 'CASCADE' });
    models.admis_application.hasMany(models.admis_application_assessment, { as: 'admisApplicationAssessment', foreignKey: 'applicationId', sourceKey: 'applicationId', onDelete: 'CASCADE' });
    models.admis_application_status_history.belongsTo(models.admis_application, { as: 'application', foreignKey: 'applicationId', targetKey: 'applicationId', onDelete: 'CASCADE' });
    models.admis_application.hasMany(models.admis_application_status_history, { as: 'admisApplicationStatusHistory', foreignKey: 'applicationId', sourceKey: 'applicationId', onDelete: 'CASCADE' });
}
