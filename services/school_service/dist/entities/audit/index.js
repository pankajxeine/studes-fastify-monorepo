"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createGeneratedModels = createGeneratedModels;
exports.associateGeneratedModels = associateGeneratedModels;
const audit_row_change_log_entity_1 = require("./audit_row_change_log/audit_row_change_log.entity");
const audit_activity_log_entity_1 = require("./audit_activity_log/audit_activity_log.entity");
function createGeneratedModels(sequelize) {
    const models = {
        audit_row_change_log: (0, audit_row_change_log_entity_1.initAuditRowChangeLogEntity)(sequelize),
        audit_activity_log: (0, audit_activity_log_entity_1.initAuditActivityLogEntity)(sequelize)
    };
    return models;
}
function associateGeneratedModels(models) {
}
