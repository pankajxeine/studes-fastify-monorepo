import type { Sequelize } from 'sequelize'
import { initDocsFileEntity } from './docs_file/docs_file.entity'
import { initDocsDocumentTypeEntity } from './docs_document_type/docs_document_type.entity'
import { initDocsPersonDocumentEntity } from './docs_person_document/docs_person_document.entity'
import { initDocsCertificateTemplateEntity } from './docs_certificate_template/docs_certificate_template.entity'
import { initDocsIssuedCertificateEntity } from './docs_issued_certificate/docs_issued_certificate.entity'

export type GeneratedModels = {
  docs_file: ReturnType<typeof initDocsFileEntity>;
  docs_document_type: ReturnType<typeof initDocsDocumentTypeEntity>;
  docs_person_document: ReturnType<typeof initDocsPersonDocumentEntity>;
  docs_certificate_template: ReturnType<typeof initDocsCertificateTemplateEntity>;
  docs_issued_certificate: ReturnType<typeof initDocsIssuedCertificateEntity>;
}

export function createGeneratedModels(sequelize: Sequelize): GeneratedModels {
  const models: GeneratedModels = {
      docs_file: initDocsFileEntity(sequelize),
      docs_document_type: initDocsDocumentTypeEntity(sequelize),
      docs_person_document: initDocsPersonDocumentEntity(sequelize),
      docs_certificate_template: initDocsCertificateTemplateEntity(sequelize),
      docs_issued_certificate: initDocsIssuedCertificateEntity(sequelize)
  }
  return models
}

export function associateGeneratedModels(models: GeneratedModels): void {
  models.docs_person_document.belongsTo(models.docs_document_type, { as: 'documentTypeCode', foreignKey: 'documentTypeCode', targetKey: 'documentTypeCode', onUpdate: 'CASCADE' })
  models.docs_document_type.hasMany(models.docs_person_document, { as: 'docsPersonDocument', foreignKey: 'documentTypeCode', sourceKey: 'documentTypeCode', onUpdate: 'CASCADE' })
  models.docs_person_document.belongsTo(models.docs_file, { as: 'file', foreignKey: 'fileId', targetKey: 'fileId' })
  models.docs_file.hasMany(models.docs_person_document, { as: 'docsPersonDocument', foreignKey: 'fileId', sourceKey: 'fileId' })
  models.docs_certificate_template.belongsTo(models.docs_file, { as: 'templateFile', foreignKey: 'templateFileId', targetKey: 'fileId' })
  models.docs_file.hasMany(models.docs_certificate_template, { as: 'docsCertificateTemplate', foreignKey: 'templateFileId', sourceKey: 'fileId' })
  models.docs_issued_certificate.belongsTo(models.docs_certificate_template, { as: 'certificateTemplate', foreignKey: 'certificateTemplateId', targetKey: 'certificateTemplateId' })
  models.docs_certificate_template.hasMany(models.docs_issued_certificate, { as: 'docsIssuedCertificate', foreignKey: 'certificateTemplateId', sourceKey: 'certificateTemplateId' })
  models.docs_issued_certificate.belongsTo(models.docs_file, { as: 'file', foreignKey: 'fileId', targetKey: 'fileId' })
  models.docs_file.hasMany(models.docs_issued_certificate, { as: 'docsIssuedCertificate', foreignKey: 'fileId', sourceKey: 'fileId' })
}
