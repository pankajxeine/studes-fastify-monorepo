import type { Sequelize } from 'sequelize'
import { initTenancyTenantEntity } from './tenancy_tenant/tenancy_tenant.entity'
import { initTenancyTenantApplicationEntity } from './tenancy_tenant_application/tenancy_tenant_application.entity'
import { initTenancyTenantDomainEntity } from './tenancy_tenant_domain/tenancy_tenant_domain.entity'
import { initTenancyTenantContactEntity } from './tenancy_tenant_contact/tenancy_tenant_contact.entity'
import { initTenancyTenantConfigEntity } from './tenancy_tenant_config/tenancy_tenant_config.entity'
import { initTenancyApiClientEntity } from './tenancy_api_client/tenancy_api_client.entity'
import { initTenancyLifecycleEventEntity } from './tenancy_lifecycle_event/tenancy_lifecycle_event.entity'

export type GeneratedModels = {
  tenancy_tenant: ReturnType<typeof initTenancyTenantEntity>;
  tenancy_tenant_application: ReturnType<typeof initTenancyTenantApplicationEntity>;
  tenancy_tenant_domain: ReturnType<typeof initTenancyTenantDomainEntity>;
  tenancy_tenant_contact: ReturnType<typeof initTenancyTenantContactEntity>;
  tenancy_tenant_config: ReturnType<typeof initTenancyTenantConfigEntity>;
  tenancy_api_client: ReturnType<typeof initTenancyApiClientEntity>;
  tenancy_lifecycle_event: ReturnType<typeof initTenancyLifecycleEventEntity>;
}

export function createGeneratedModels(sequelize: Sequelize): GeneratedModels {
  const models: GeneratedModels = {
      tenancy_tenant: initTenancyTenantEntity(sequelize),
      tenancy_tenant_application: initTenancyTenantApplicationEntity(sequelize),
      tenancy_tenant_domain: initTenancyTenantDomainEntity(sequelize),
      tenancy_tenant_contact: initTenancyTenantContactEntity(sequelize),
      tenancy_tenant_config: initTenancyTenantConfigEntity(sequelize),
      tenancy_api_client: initTenancyApiClientEntity(sequelize),
      tenancy_lifecycle_event: initTenancyLifecycleEventEntity(sequelize)
  }
  return models
}

export function associateGeneratedModels(models: GeneratedModels): void {
  models.tenancy_tenant.belongsTo(models.tenancy_tenant, { as: 'parentTenant', foreignKey: 'parentTenantId', targetKey: 'tenantId' })
  models.tenancy_tenant.hasMany(models.tenancy_tenant, { as: 'tenancyTenant', foreignKey: 'parentTenantId', sourceKey: 'tenantId' })
  models.tenancy_tenant_application.belongsTo(models.tenancy_tenant, { as: 'tenant', foreignKey: 'tenantId', targetKey: 'tenantId' })
  models.tenancy_tenant.hasMany(models.tenancy_tenant_application, { as: 'tenancyTenantApplication', foreignKey: 'tenantId', sourceKey: 'tenantId' })
  models.tenancy_tenant_domain.belongsTo(models.tenancy_tenant_application, { as: 'tenantApplication', foreignKey: 'tenantApplicationId', targetKey: 'tenantApplicationId', onDelete: 'CASCADE' })
  models.tenancy_tenant_application.hasMany(models.tenancy_tenant_domain, { as: 'tenancyTenantDomain', foreignKey: 'tenantApplicationId', sourceKey: 'tenantApplicationId', onDelete: 'CASCADE' })
  models.tenancy_tenant_contact.belongsTo(models.tenancy_tenant, { as: 'tenant', foreignKey: 'tenantId', targetKey: 'tenantId', onDelete: 'CASCADE' })
  models.tenancy_tenant.hasMany(models.tenancy_tenant_contact, { as: 'tenancyTenantContact', foreignKey: 'tenantId', sourceKey: 'tenantId', onDelete: 'CASCADE' })
  models.tenancy_tenant_config.belongsTo(models.tenancy_tenant_application, { as: 'tenantApplication', foreignKey: 'tenantApplicationId', targetKey: 'tenantApplicationId', onDelete: 'CASCADE' })
  models.tenancy_tenant_application.hasMany(models.tenancy_tenant_config, { as: 'tenancyTenantConfig', foreignKey: 'tenantApplicationId', sourceKey: 'tenantApplicationId', onDelete: 'CASCADE' })
  models.tenancy_api_client.belongsTo(models.tenancy_tenant_application, { as: 'tenantApplication', foreignKey: 'tenantApplicationId', targetKey: 'tenantApplicationId' })
  models.tenancy_tenant_application.hasMany(models.tenancy_api_client, { as: 'tenancyApiClient', foreignKey: 'tenantApplicationId', sourceKey: 'tenantApplicationId' })
  models.tenancy_lifecycle_event.belongsTo(models.tenancy_tenant, { as: 'tenant', foreignKey: 'tenantId', targetKey: 'tenantId' })
  models.tenancy_tenant.hasMany(models.tenancy_lifecycle_event, { as: 'tenancyLifecycleEvent', foreignKey: 'tenantId', sourceKey: 'tenantId' })
  models.tenancy_lifecycle_event.belongsTo(models.tenancy_tenant_application, { as: 'tenantApplication', foreignKey: 'tenantApplicationId', targetKey: 'tenantApplicationId' })
  models.tenancy_tenant_application.hasMany(models.tenancy_lifecycle_event, { as: 'tenancyLifecycleEvent', foreignKey: 'tenantApplicationId', sourceKey: 'tenantApplicationId' })
}
