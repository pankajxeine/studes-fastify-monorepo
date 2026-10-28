import type { Sequelize } from 'sequelize'
import { initPlatformCurrencyEntity } from './platform_currency/platform_currency.entity'
import { initPlatformCountryEntity } from './platform_country/platform_country.entity'
import { initPlatformFxRateEntity } from './platform_fx_rate/platform_fx_rate.entity'
import { initPlatformRegionEntity } from './platform_region/platform_region.entity'
import { initPlatformEnvironmentEntity } from './platform_environment/platform_environment.entity'
import { initPlatformIndustryEntity } from './platform_industry/platform_industry.entity'
import { initPlatformTaxJurisdictionEntity } from './platform_tax_jurisdiction/platform_tax_jurisdiction.entity'
import { initPlatformTaxRateEntity } from './platform_tax_rate/platform_tax_rate.entity'
import { initPlatformLookupTypeEntity } from './platform_lookup_type/platform_lookup_type.entity'
import { initPlatformLookupValueEntity } from './platform_lookup_value/platform_lookup_value.entity'
import { initPlatformSettingEntity } from './platform_setting/platform_setting.entity'
import { initPlatformConfigDefinitionEntity } from './platform_config_definition/platform_config_definition.entity'
import { initPlatformFeatureFlagEntity } from './platform_feature_flag/platform_feature_flag.entity'
import { initPlatformCalendarEntity } from './platform_calendar/platform_calendar.entity'
import { initPlatformHolidayEntity } from './platform_holiday/platform_holiday.entity'

export type GeneratedModels = {
  platform_currency: ReturnType<typeof initPlatformCurrencyEntity>;
  platform_country: ReturnType<typeof initPlatformCountryEntity>;
  platform_fx_rate: ReturnType<typeof initPlatformFxRateEntity>;
  platform_region: ReturnType<typeof initPlatformRegionEntity>;
  platform_environment: ReturnType<typeof initPlatformEnvironmentEntity>;
  platform_industry: ReturnType<typeof initPlatformIndustryEntity>;
  platform_tax_jurisdiction: ReturnType<typeof initPlatformTaxJurisdictionEntity>;
  platform_tax_rate: ReturnType<typeof initPlatformTaxRateEntity>;
  platform_lookup_type: ReturnType<typeof initPlatformLookupTypeEntity>;
  platform_lookup_value: ReturnType<typeof initPlatformLookupValueEntity>;
  platform_setting: ReturnType<typeof initPlatformSettingEntity>;
  platform_config_definition: ReturnType<typeof initPlatformConfigDefinitionEntity>;
  platform_feature_flag: ReturnType<typeof initPlatformFeatureFlagEntity>;
  platform_calendar: ReturnType<typeof initPlatformCalendarEntity>;
  platform_holiday: ReturnType<typeof initPlatformHolidayEntity>;
}

export function createGeneratedModels(sequelize: Sequelize): GeneratedModels {
  const models: GeneratedModels = {
      platform_currency: initPlatformCurrencyEntity(sequelize),
      platform_country: initPlatformCountryEntity(sequelize),
      platform_fx_rate: initPlatformFxRateEntity(sequelize),
      platform_region: initPlatformRegionEntity(sequelize),
      platform_environment: initPlatformEnvironmentEntity(sequelize),
      platform_industry: initPlatformIndustryEntity(sequelize),
      platform_tax_jurisdiction: initPlatformTaxJurisdictionEntity(sequelize),
      platform_tax_rate: initPlatformTaxRateEntity(sequelize),
      platform_lookup_type: initPlatformLookupTypeEntity(sequelize),
      platform_lookup_value: initPlatformLookupValueEntity(sequelize),
      platform_setting: initPlatformSettingEntity(sequelize),
      platform_config_definition: initPlatformConfigDefinitionEntity(sequelize),
      platform_feature_flag: initPlatformFeatureFlagEntity(sequelize),
      platform_calendar: initPlatformCalendarEntity(sequelize),
      platform_holiday: initPlatformHolidayEntity(sequelize)
  }
  return models
}

export function associateGeneratedModels(models: GeneratedModels): void {
  models.platform_country.belongsTo(models.platform_currency, { as: 'defaultCurrency', foreignKey: 'defaultCurrencyCode', targetKey: 'currencyCode' })
  models.platform_currency.hasMany(models.platform_country, { as: 'platformCountry', foreignKey: 'defaultCurrencyCode', sourceKey: 'currencyCode' })
  models.platform_fx_rate.belongsTo(models.platform_currency, { as: 'baseCurrency', foreignKey: 'baseCurrencyCode', targetKey: 'currencyCode' })
  models.platform_currency.hasMany(models.platform_fx_rate, { as: 'platformFxRate', foreignKey: 'baseCurrencyCode', sourceKey: 'currencyCode' })
  models.platform_fx_rate.belongsTo(models.platform_currency, { as: 'quoteCurrency', foreignKey: 'quoteCurrencyCode', targetKey: 'currencyCode' })
  models.platform_currency.hasMany(models.platform_fx_rate, { as: 'platformFxRateByQuoteCurrencyCode', foreignKey: 'quoteCurrencyCode', sourceKey: 'currencyCode' })
  models.platform_environment.belongsTo(models.platform_region, { as: 'region', foreignKey: 'regionCode', targetKey: 'regionCode' })
  models.platform_region.hasMany(models.platform_environment, { as: 'platformEnvironment', foreignKey: 'regionCode', sourceKey: 'regionCode' })
  models.platform_industry.belongsTo(models.platform_industry, { as: 'parentIndustry', foreignKey: 'parentIndustryCode', targetKey: 'industryCode' })
  models.platform_industry.hasMany(models.platform_industry, { as: 'platformIndustry', foreignKey: 'parentIndustryCode', sourceKey: 'industryCode' })
  models.platform_tax_jurisdiction.belongsTo(models.platform_country, { as: 'country', foreignKey: 'countryCode', targetKey: 'countryCode' })
  models.platform_country.hasMany(models.platform_tax_jurisdiction, { as: 'platformTaxJurisdiction', foreignKey: 'countryCode', sourceKey: 'countryCode' })
  models.platform_tax_rate.belongsTo(models.platform_tax_jurisdiction, { as: 'jurisdiction', foreignKey: 'jurisdictionCode', targetKey: 'jurisdictionCode' })
  models.platform_tax_jurisdiction.hasMany(models.platform_tax_rate, { as: 'platformTaxRate', foreignKey: 'jurisdictionCode', sourceKey: 'jurisdictionCode' })
  models.platform_lookup_value.belongsTo(models.platform_lookup_type, { as: 'lookupType', foreignKey: 'lookupTypeCode', targetKey: 'lookupTypeCode', onUpdate: 'CASCADE' })
  models.platform_lookup_type.hasMany(models.platform_lookup_value, { as: 'platformLookupValue', foreignKey: 'lookupTypeCode', sourceKey: 'lookupTypeCode', onUpdate: 'CASCADE' })
  models.platform_holiday.belongsTo(models.platform_calendar, { as: 'calendar', foreignKey: 'calendarId', targetKey: 'calendarId', onDelete: 'CASCADE' })
  models.platform_calendar.hasMany(models.platform_holiday, { as: 'platformHoliday', foreignKey: 'calendarId', sourceKey: 'calendarId', onDelete: 'CASCADE' })
}
