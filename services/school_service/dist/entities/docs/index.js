"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createGeneratedModels = createGeneratedModels;
exports.associateGeneratedModels = associateGeneratedModels;
const docs_file_entity_1 = require("./docs_file/docs_file.entity");
const docs_document_type_entity_1 = require("./docs_document_type/docs_document_type.entity");
const docs_person_document_entity_1 = require("./docs_person_document/docs_person_document.entity");
const docs_certificate_template_entity_1 = require("./docs_certificate_template/docs_certificate_template.entity");
const docs_issued_certificate_entity_1 = require("./docs_issued_certificate/docs_issued_certificate.entity");
function createGeneratedModels(sequelize) {
    const models = {
        docs_file: (0, docs_file_entity_1.initDocsFileEntity)(sequelize),
        docs_document_type: (0, docs_document_type_entity_1.initDocsDocumentTypeEntity)(sequelize),
        docs_person_document: (0, docs_person_document_entity_1.initDocsPersonDocumentEntity)(sequelize),
        docs_certificate_template: (0, docs_certificate_template_entity_1.initDocsCertificateTemplateEntity)(sequelize),
        docs_issued_certificate: (0, docs_issued_certificate_entity_1.initDocsIssuedCertificateEntity)(sequelize)
    };
    return models;
}
function associateGeneratedModels(models) {
    models.docs_person_document.belongsTo(models.docs_document_type, { as: 'documentTypeCode', foreignKey: 'documentTypeCode', targetKey: 'documentTypeCode', onUpdate: 'CASCADE' });
    models.docs_document_type.hasMany(models.docs_person_document, { as: 'docsPersonDocument', foreignKey: 'documentTypeCode', sourceKey: 'documentTypeCode', onUpdate: 'CASCADE' });
    models.docs_person_document.belongsTo(models.docs_file, { as: 'file', foreignKey: 'fileId', targetKey: 'fileId' });
    models.docs_file.hasMany(models.docs_person_document, { as: 'docsPersonDocument', foreignKey: 'fileId', sourceKey: 'fileId' });
    models.docs_certificate_template.belongsTo(models.docs_file, { as: 'templateFile', foreignKey: 'templateFileId', targetKey: 'fileId' });
    models.docs_file.hasMany(models.docs_certificate_template, { as: 'docsCertificateTemplate', foreignKey: 'templateFileId', sourceKey: 'fileId' });
    models.docs_issued_certificate.belongsTo(models.docs_certificate_template, { as: 'certificateTemplate', foreignKey: 'certificateTemplateId', targetKey: 'certificateTemplateId' });
    models.docs_certificate_template.hasMany(models.docs_issued_certificate, { as: 'docsIssuedCertificate', foreignKey: 'certificateTemplateId', sourceKey: 'certificateTemplateId' });
    models.docs_issued_certificate.belongsTo(models.docs_file, { as: 'file', foreignKey: 'fileId', targetKey: 'fileId' });
    models.docs_file.hasMany(models.docs_issued_certificate, { as: 'docsIssuedCertificate', foreignKey: 'fileId', sourceKey: 'fileId' });
}
