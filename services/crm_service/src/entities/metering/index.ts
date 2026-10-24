import type { Sequelize } from 'sequelize'
import { initMeteringMeterEntity } from './metering_meter/metering_meter.entity'
import { initMeteringUsageDedupEntity } from './metering_usage_dedup/metering_usage_dedup.entity'
import { initMeteringUsageEventEntity } from './metering_usage_event/metering_usage_event.entity'
import { initMeteringUsageCounterEntity } from './metering_usage_counter/metering_usage_counter.entity'
import { initMeteringQuotaAlertEntity } from './metering_quota_alert/metering_quota_alert.entity'

export type GeneratedModels = {
  metering_meter: ReturnType<typeof initMeteringMeterEntity>;
  metering_usage_dedup: ReturnType<typeof initMeteringUsageDedupEntity>;
  metering_usage_event: ReturnType<typeof initMeteringUsageEventEntity>;
  metering_usage_counter: ReturnType<typeof initMeteringUsageCounterEntity>;
  metering_quota_alert: ReturnType<typeof initMeteringQuotaAlertEntity>;
}

export function createGeneratedModels(sequelize: Sequelize): GeneratedModels {
  const models: GeneratedModels = {
      metering_meter: initMeteringMeterEntity(sequelize),
      metering_usage_dedup: initMeteringUsageDedupEntity(sequelize),
      metering_usage_event: initMeteringUsageEventEntity(sequelize),
      metering_usage_counter: initMeteringUsageCounterEntity(sequelize),
      metering_quota_alert: initMeteringQuotaAlertEntity(sequelize)
  }
  return models
}

export function associateGeneratedModels(models: GeneratedModels): void {
  models.metering_usage_event.belongsTo(models.metering_meter, { as: 'meter', foreignKey: 'meterId', targetKey: 'meterId' })
  models.metering_meter.hasMany(models.metering_usage_event, { as: 'meteringUsageEvent', foreignKey: 'meterId', sourceKey: 'meterId' })
  models.metering_usage_counter.belongsTo(models.metering_meter, { as: 'meter', foreignKey: 'meterId', targetKey: 'meterId' })
  models.metering_meter.hasMany(models.metering_usage_counter, { as: 'meteringUsageCounter', foreignKey: 'meterId', sourceKey: 'meterId' })
  models.metering_quota_alert.belongsTo(models.metering_meter, { as: 'meter', foreignKey: 'meterId', targetKey: 'meterId' })
  models.metering_meter.hasMany(models.metering_quota_alert, { as: 'meteringQuotaAlert', foreignKey: 'meterId', sourceKey: 'meterId' })
}
