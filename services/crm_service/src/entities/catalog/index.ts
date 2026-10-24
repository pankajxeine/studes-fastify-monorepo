import type { Sequelize } from 'sequelize'
import { initCatalogApplicationEntity } from './catalog_application/catalog_application.entity'
import { initCatalogModuleEntity } from './catalog_module/catalog_module.entity'
import { initCatalogModuleDependencyEntity } from './catalog_module_dependency/catalog_module_dependency.entity'
import { initCatalogFeatureEntity } from './catalog_feature/catalog_feature.entity'
import { initCatalogTenantRoleTemplateEntity } from './catalog_tenant_role_template/catalog_tenant_role_template.entity'

export type GeneratedModels = {
  catalog_application: ReturnType<typeof initCatalogApplicationEntity>;
  catalog_module: ReturnType<typeof initCatalogModuleEntity>;
  catalog_module_dependency: ReturnType<typeof initCatalogModuleDependencyEntity>;
  catalog_feature: ReturnType<typeof initCatalogFeatureEntity>;
  catalog_tenant_role_template: ReturnType<typeof initCatalogTenantRoleTemplateEntity>;
}

export function createGeneratedModels(sequelize: Sequelize): GeneratedModels {
  const models: GeneratedModels = {
      catalog_application: initCatalogApplicationEntity(sequelize),
      catalog_module: initCatalogModuleEntity(sequelize),
      catalog_module_dependency: initCatalogModuleDependencyEntity(sequelize),
      catalog_feature: initCatalogFeatureEntity(sequelize),
      catalog_tenant_role_template: initCatalogTenantRoleTemplateEntity(sequelize)
  }
  return models
}

export function associateGeneratedModels(models: GeneratedModels): void {
  models.catalog_module.belongsTo(models.catalog_application, { as: 'application', foreignKey: 'applicationId', targetKey: 'applicationId' })
  models.catalog_application.hasMany(models.catalog_module, { as: 'catalogModule', foreignKey: 'applicationId', sourceKey: 'applicationId' })
  models.catalog_module_dependency.belongsTo(models.catalog_module, { as: 'module', foreignKey: 'moduleId', targetKey: 'moduleId', onDelete: 'CASCADE' })
  models.catalog_module.hasMany(models.catalog_module_dependency, { as: 'catalogModuleDependency', foreignKey: 'moduleId', sourceKey: 'moduleId', onDelete: 'CASCADE' })
  models.catalog_module_dependency.belongsTo(models.catalog_module, { as: 'requiresModule', foreignKey: 'requiresModuleId', targetKey: 'moduleId' })
  models.catalog_module.hasMany(models.catalog_module_dependency, { as: 'catalogModuleDependencyByRequiresModuleId', foreignKey: 'requiresModuleId', sourceKey: 'moduleId' })
  models.catalog_feature.belongsTo(models.catalog_module, { as: 'module', foreignKey: 'moduleId', targetKey: 'moduleId' })
  models.catalog_module.hasMany(models.catalog_feature, { as: 'catalogFeature', foreignKey: 'moduleId', sourceKey: 'moduleId' })
  models.catalog_tenant_role_template.belongsTo(models.catalog_application, { as: 'application', foreignKey: 'applicationId', targetKey: 'applicationId', onDelete: 'CASCADE' })
  models.catalog_application.hasMany(models.catalog_tenant_role_template, { as: 'catalogTenantRoleTemplate', foreignKey: 'applicationId', sourceKey: 'applicationId', onDelete: 'CASCADE' })
}
