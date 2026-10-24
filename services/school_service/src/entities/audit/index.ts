import type { Sequelize } from 'sequelize'
import { initAuditRowChangeLogEntity } from './audit_row_change_log/audit_row_change_log.entity'
import { initAuditActivityLogEntity } from './audit_activity_log/audit_activity_log.entity'

export type GeneratedModels = {
  audit_row_change_log: ReturnType<typeof initAuditRowChangeLogEntity>;
  audit_activity_log: ReturnType<typeof initAuditActivityLogEntity>;
}

export function createGeneratedModels(sequelize: Sequelize): GeneratedModels {
  const models: GeneratedModels = {
      audit_row_change_log: initAuditRowChangeLogEntity(sequelize),
      audit_activity_log: initAuditActivityLogEntity(sequelize)
  }
  return models
}

export function associateGeneratedModels(models: GeneratedModels): void {

}
