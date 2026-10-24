import type { Sequelize } from 'sequelize'
import { initAuditSensitiveColumnEntity } from './audit_sensitive_column/audit_sensitive_column.entity'
import { initAuditEventEntity } from './audit_event/audit_event.entity'
import { initAuditDataAccessLogEntity } from './audit_data_access_log/audit_data_access_log.entity'
import { initAuditConsentEntity } from './audit_consent/audit_consent.entity'
import { initAuditRetentionPolicyEntity } from './audit_retention_policy/audit_retention_policy.entity'

export type GeneratedModels = {
  audit_sensitive_column: ReturnType<typeof initAuditSensitiveColumnEntity>;
  audit_event: ReturnType<typeof initAuditEventEntity>;
  audit_data_access_log: ReturnType<typeof initAuditDataAccessLogEntity>;
  audit_consent: ReturnType<typeof initAuditConsentEntity>;
  audit_retention_policy: ReturnType<typeof initAuditRetentionPolicyEntity>;
}

export function createGeneratedModels(sequelize: Sequelize): GeneratedModels {
  const models: GeneratedModels = {
      audit_sensitive_column: initAuditSensitiveColumnEntity(sequelize),
      audit_event: initAuditEventEntity(sequelize),
      audit_data_access_log: initAuditDataAccessLogEntity(sequelize),
      audit_consent: initAuditConsentEntity(sequelize),
      audit_retention_policy: initAuditRetentionPolicyEntity(sequelize)
  }
  return models
}

export function associateGeneratedModels(models: GeneratedModels): void {

}
