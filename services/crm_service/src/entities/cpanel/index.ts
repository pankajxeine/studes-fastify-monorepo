import type { Sequelize } from 'sequelize'
import { initAdminUsersEntity } from './admin_users/admin_users.entity'
import { initCpanelCompaniesEntity } from './cpanel_companies/cpanel_companies.entity'
import { initCustomerDiscountsEntity } from './customer_discounts/customer_discounts.entity'
import { initCustomerDocumentsEntity } from './customer_documents/customer_documents.entity'
import { initCustomerExportTemplatesEntity } from './customer_export_templates/customer_export_templates.entity'
import { initCustomerExportTemplatesFieldsEntity } from './customer_export_templates_fields/customer_export_templates_fields.entity'
import { initCustomerNotesEntity } from './customer_notes/customer_notes.entity'
import { initCustomerNumbersEntity } from './customer_numbers/customer_numbers.entity'
import { initCustomerStatusEntity } from './customer_status/customer_status.entity'
import { initCustomerStatusLogsEntity } from './customer_status_logs/customer_status_logs.entity'
import { initCustomerStatusTimeLogsEntity } from './customer_status_time_logs/customer_status_time_logs.entity'
import { initCustomersEntity } from './customers/customers.entity'
import { initDocumentTypesEntity } from './document_types/document_types.entity'
import { initEmailTemplateFieldsEntity } from './email_template_fields/email_template_fields.entity'
import { initEmailTemplateModulesEntity } from './email_template_modules/email_template_modules.entity'
import { initEnvironmentsEntity } from './environments/environments.entity'
import { initFeatureFieldsEntity } from './feature_fields/feature_fields.entity'
import { initIndustriesEntity } from './industries/industries.entity'
import { initIndustryEnvironmentsEntity } from './industry_environments/industry_environments.entity'
import { initIndustryModulesEntity } from './industry_modules/industry_modules.entity'
import { initInstituteAuditLogsEntity } from './institute_audit_logs/institute_audit_logs.entity'
import { initInstituteDomainsEntity } from './institute_domains/institute_domains.entity'
import { initInstituteSubscriptionsEntity } from './institute_subscriptions/institute_subscriptions.entity'
import { initInstitutesEntity } from './institutes/institutes.entity'
import { initMasterCredentialsEntity } from './master_credentials/master_credentials.entity'
import { initPackageFeatureBlockFieldsEntity } from './package_feature_block_fields/package_feature_block_fields.entity'
import { initPackageFeatureBlocksEntity } from './package_feature_blocks/package_feature_blocks.entity'
import { initPackageFeaturesEntity } from './package_features/package_features.entity'
import { initPackageRoleFeaturePermissionsEntity } from './package_role_feature_permissions/package_role_feature_permissions.entity'
import { initPackageRoleMappingsEntity } from './package_role_mappings/package_role_mappings.entity'
import { initPackageRolesEntity } from './package_roles/package_roles.entity'
import { initPackagesEntity } from './packages/packages.entity'
import { initRoleModulePermissionsEntity } from './role_module_permissions/role_module_permissions.entity'
import { initRoleTemplateModulesEntity } from './role_template_modules/role_template_modules.entity'
import { initRoleTemplatesEntity } from './role_templates/role_templates.entity'
import { initRolesEntity } from './roles/roles.entity'
import { initSalesAgentsEntity } from './sales_agents/sales_agents.entity'
import { initServiceTicketCommentsEntity } from './service_ticket_comments/service_ticket_comments.entity'
import { initServiceTicketLogsEntity } from './service_ticket_logs/service_ticket_logs.entity'
import { initServiceTicketTypeLogsEntity } from './service_ticket_type_logs/service_ticket_type_logs.entity'
import { initServiceTicketTypesEntity } from './service_ticket_types/service_ticket_types.entity'
import { initServiceTicketUserContentsEntity } from './service_ticket_user_contents/service_ticket_user_contents.entity'
import { initServiceTicketsEntity } from './service_tickets/service_tickets.entity'
import { initSubModulesEntity } from './sub_modules/sub_modules.entity'
import { initSubPackageFeatureBlockFieldsEntity } from './sub_package_feature_block_fields/sub_package_feature_block_fields.entity'
import { initSubPackageFeatureBlocksEntity } from './sub_package_feature_blocks/sub_package_feature_blocks.entity'
import { initSubPackageFeaturesEntity } from './sub_package_features/sub_package_features.entity'
import { initSubPackageUserTiersEntity } from './sub_package_user_tiers/sub_package_user_tiers.entity'
import { initSubPackagesEntity } from './sub_packages/sub_packages.entity'
import { initSubsEntity } from './subs/subs.entity'
import { initSubscriptionPlansEntity } from './subscription_plans/subscription_plans.entity'
import { initAlertSystemDetailsEntity } from './alert_system_details/alert_system_details.entity'
import { initAlertSystemsEntity } from './alert_systems/alert_systems.entity'
import { initAssetsLogsEntity } from './assets_logs/assets_logs.entity'
import { initBillingAddPackageEntity } from './billing_add_package/billing_add_package.entity'
import { initBillingCancelPackageEntity } from './billing_cancel_package/billing_cancel_package.entity'
import { initBillingHistoryEntity } from './billing_history/billing_history.entity'
import { initBranchesEntity } from './branches/branches.entity'
import { initBusinessHoursEntity } from './business_hours/business_hours.entity'
import { initCountriesEntity } from './countries/countries.entity'
import { initCpanelModulesEntity } from './cpanel_modules/cpanel_modules.entity'
import { initCrmCronLogsEntity } from './crm_cron_logs/crm_cron_logs.entity'
import { initCrmCronsEntity } from './crm_crons/crm_crons.entity'
import { initCrmEmailConfigEntity } from './crm_email_config/crm_email_config.entity'
import { initCrmEmailLogsEntity } from './crm_email_logs/crm_email_logs.entity'
import { initCrmEmailTemplatesEntity } from './crm_email_templates/crm_email_templates.entity'
import { initCrmModuleBlocksEntity } from './crm_module_blocks/crm_module_blocks.entity'
import { initCrmModulesEntity } from './crm_modules/crm_modules.entity'
import { initCrmPagesEntity } from './crm_pages/crm_pages.entity'
import { initCrmResourceFilesEntity } from './crm_resource_files/crm_resource_files.entity'
import { initCrmResourceFoldersEntity } from './crm_resource_folders/crm_resource_folders.entity'
import { initCrmSystemUpdatesEntity } from './crm_system_updates/crm_system_updates.entity'
import { initCrmUserModuleBlocksEntity } from './crm_user_module_blocks/crm_user_module_blocks.entity'
import { initCrmUserModulesEntity } from './crm_user_modules/crm_user_modules.entity'
import { initCronsEntity } from './crons/crons.entity'
import { initCurrenciesEntity } from './currencies/currencies.entity'
import { initCustomModulesEntity } from './custom_modules/custom_modules.entity'
import { initCustomerDevicesEntity } from './customer_devices/customer_devices.entity'
import { initCustomerSalesAgentsEntity } from './customer_sales_agents/customer_sales_agents.entity'
import { initDateFormatsEntity } from './date_formats/date_formats.entity'
import { initDevicesEntity } from './devices/devices.entity'
import { initFilterModuleFieldsEntity } from './filter_module_fields/filter_module_fields.entity'
import { initFilterModulesEntity } from './filter_modules/filter_modules.entity'
import { initHardwareShippingAddressEntity } from './hardware_shipping_address/hardware_shipping_address.entity'
import { initHardwaresEntity } from './hardwares/hardwares.entity'
import { initIndustryCronsEntity } from './industry_crons/industry_crons.entity'
import { initLanguagesEntity } from './languages/languages.entity'
import { initMigrationDetailsEntity } from './migration_details/migration_details.entity'
import { initModuleBlocksEntity } from './module_blocks/module_blocks.entity'
import { initModuleFieldsEntity } from './module_fields/module_fields.entity'
import { initModulesEntity } from './modules/modules.entity'
import { initPackageDiscountsEntity } from './package_discounts/package_discounts.entity'
import { initPackageUserTiersEntity } from './package_user_tiers/package_user_tiers.entity'
import { initPaxStoreLinksEntity } from './pax_store_links/pax_store_links.entity'
import { initPrimaryServiceRequestsEntity } from './primary_service_requests/primary_service_requests.entity'
import { initShippingMethodsEntity } from './shipping_methods/shipping_methods.entity'
import { initStatesEntity } from './states/states.entity'
import { initSubCompaniesEntity } from './sub_companies/sub_companies.entity'
import { initSubCronsEntity } from './sub_crons/sub_crons.entity'
import { initSubStoreDetailsEntity } from './sub_store_details/sub_store_details.entity'
import { initTimezonesEntity } from './timezones/timezones.entity'
import { initUserAlertsEntity } from './user_alerts/user_alerts.entity'
import { initUserAlertsTypeEntity } from './user_alerts_type/user_alerts_type.entity'
import { initUserAutogenerateReportsEntity } from './user_autogenerate_reports/user_autogenerate_reports.entity'
import { initUserBranchesEntity } from './user_branches/user_branches.entity'
import { initUserCustomerStatusEntity } from './user_customer_status/user_customer_status.entity'
import { initUserDefaultFiltersEntity } from './user_default_filters/user_default_filters.entity'
import { initUserFiltersEntity } from './user_filters/user_filters.entity'
import { initUserIconSequencesEntity } from './user_icon_sequences/user_icon_sequences.entity'
import { initUserSalesAgentsEntity } from './user_sales_agents/user_sales_agents.entity'
import { initUserServiceTicketTypesEntity } from './user_service_ticket_types/user_service_ticket_types.entity'
import { initUserTiersEntity } from './user_tiers/user_tiers.entity'
import { initUsersEntity } from './users/users.entity'
import { initVerifoneEndpointsEntity } from './verifone_endpoints/verifone_endpoints.entity'
import { initVerifoneLogsEntity } from './verifone_logs/verifone_logs.entity'
import { initWizardContentsEntity } from './wizard_contents/wizard_contents.entity'

export type GeneratedModels = {
  admin_users: ReturnType<typeof initAdminUsersEntity>;
  cpanel_companies: ReturnType<typeof initCpanelCompaniesEntity>;
  customer_discounts: ReturnType<typeof initCustomerDiscountsEntity>;
  customer_documents: ReturnType<typeof initCustomerDocumentsEntity>;
  customer_export_templates: ReturnType<typeof initCustomerExportTemplatesEntity>;
  customer_export_templates_fields: ReturnType<typeof initCustomerExportTemplatesFieldsEntity>;
  customer_notes: ReturnType<typeof initCustomerNotesEntity>;
  customer_numbers: ReturnType<typeof initCustomerNumbersEntity>;
  customer_status: ReturnType<typeof initCustomerStatusEntity>;
  customer_status_logs: ReturnType<typeof initCustomerStatusLogsEntity>;
  customer_status_time_logs: ReturnType<typeof initCustomerStatusTimeLogsEntity>;
  customers: ReturnType<typeof initCustomersEntity>;
  document_types: ReturnType<typeof initDocumentTypesEntity>;
  email_template_fields: ReturnType<typeof initEmailTemplateFieldsEntity>;
  email_template_modules: ReturnType<typeof initEmailTemplateModulesEntity>;
  environments: ReturnType<typeof initEnvironmentsEntity>;
  feature_fields: ReturnType<typeof initFeatureFieldsEntity>;
  industries: ReturnType<typeof initIndustriesEntity>;
  industry_environments: ReturnType<typeof initIndustryEnvironmentsEntity>;
  industry_modules: ReturnType<typeof initIndustryModulesEntity>;
  institute_audit_logs: ReturnType<typeof initInstituteAuditLogsEntity>;
  institute_domains: ReturnType<typeof initInstituteDomainsEntity>;
  institute_subscriptions: ReturnType<typeof initInstituteSubscriptionsEntity>;
  institutes: ReturnType<typeof initInstitutesEntity>;
  master_credentials: ReturnType<typeof initMasterCredentialsEntity>;
  package_feature_block_fields: ReturnType<typeof initPackageFeatureBlockFieldsEntity>;
  package_feature_blocks: ReturnType<typeof initPackageFeatureBlocksEntity>;
  package_features: ReturnType<typeof initPackageFeaturesEntity>;
  package_role_feature_permissions: ReturnType<typeof initPackageRoleFeaturePermissionsEntity>;
  package_role_mappings: ReturnType<typeof initPackageRoleMappingsEntity>;
  package_roles: ReturnType<typeof initPackageRolesEntity>;
  packages: ReturnType<typeof initPackagesEntity>;
  role_module_permissions: ReturnType<typeof initRoleModulePermissionsEntity>;
  role_template_modules: ReturnType<typeof initRoleTemplateModulesEntity>;
  role_templates: ReturnType<typeof initRoleTemplatesEntity>;
  roles: ReturnType<typeof initRolesEntity>;
  sales_agents: ReturnType<typeof initSalesAgentsEntity>;
  service_ticket_comments: ReturnType<typeof initServiceTicketCommentsEntity>;
  service_ticket_logs: ReturnType<typeof initServiceTicketLogsEntity>;
  service_ticket_type_logs: ReturnType<typeof initServiceTicketTypeLogsEntity>;
  service_ticket_types: ReturnType<typeof initServiceTicketTypesEntity>;
  service_ticket_user_contents: ReturnType<typeof initServiceTicketUserContentsEntity>;
  service_tickets: ReturnType<typeof initServiceTicketsEntity>;
  sub_modules: ReturnType<typeof initSubModulesEntity>;
  sub_package_feature_block_fields: ReturnType<typeof initSubPackageFeatureBlockFieldsEntity>;
  sub_package_feature_blocks: ReturnType<typeof initSubPackageFeatureBlocksEntity>;
  sub_package_features: ReturnType<typeof initSubPackageFeaturesEntity>;
  sub_package_user_tiers: ReturnType<typeof initSubPackageUserTiersEntity>;
  sub_packages: ReturnType<typeof initSubPackagesEntity>;
  subs: ReturnType<typeof initSubsEntity>;
  subscription_plans: ReturnType<typeof initSubscriptionPlansEntity>;
  alert_system_details: ReturnType<typeof initAlertSystemDetailsEntity>;
  alert_systems: ReturnType<typeof initAlertSystemsEntity>;
  assets_logs: ReturnType<typeof initAssetsLogsEntity>;
  billing_add_package: ReturnType<typeof initBillingAddPackageEntity>;
  billing_cancel_package: ReturnType<typeof initBillingCancelPackageEntity>;
  billing_history: ReturnType<typeof initBillingHistoryEntity>;
  branches: ReturnType<typeof initBranchesEntity>;
  business_hours: ReturnType<typeof initBusinessHoursEntity>;
  countries: ReturnType<typeof initCountriesEntity>;
  cpanel_modules: ReturnType<typeof initCpanelModulesEntity>;
  crm_cron_logs: ReturnType<typeof initCrmCronLogsEntity>;
  crm_crons: ReturnType<typeof initCrmCronsEntity>;
  crm_email_config: ReturnType<typeof initCrmEmailConfigEntity>;
  crm_email_logs: ReturnType<typeof initCrmEmailLogsEntity>;
  crm_email_templates: ReturnType<typeof initCrmEmailTemplatesEntity>;
  crm_module_blocks: ReturnType<typeof initCrmModuleBlocksEntity>;
  crm_modules: ReturnType<typeof initCrmModulesEntity>;
  crm_pages: ReturnType<typeof initCrmPagesEntity>;
  crm_resource_files: ReturnType<typeof initCrmResourceFilesEntity>;
  crm_resource_folders: ReturnType<typeof initCrmResourceFoldersEntity>;
  crm_system_updates: ReturnType<typeof initCrmSystemUpdatesEntity>;
  crm_user_module_blocks: ReturnType<typeof initCrmUserModuleBlocksEntity>;
  crm_user_modules: ReturnType<typeof initCrmUserModulesEntity>;
  crons: ReturnType<typeof initCronsEntity>;
  currencies: ReturnType<typeof initCurrenciesEntity>;
  custom_modules: ReturnType<typeof initCustomModulesEntity>;
  customer_devices: ReturnType<typeof initCustomerDevicesEntity>;
  customer_sales_agents: ReturnType<typeof initCustomerSalesAgentsEntity>;
  date_formats: ReturnType<typeof initDateFormatsEntity>;
  devices: ReturnType<typeof initDevicesEntity>;
  filter_module_fields: ReturnType<typeof initFilterModuleFieldsEntity>;
  filter_modules: ReturnType<typeof initFilterModulesEntity>;
  hardware_shipping_address: ReturnType<typeof initHardwareShippingAddressEntity>;
  hardwares: ReturnType<typeof initHardwaresEntity>;
  industry_crons: ReturnType<typeof initIndustryCronsEntity>;
  languages: ReturnType<typeof initLanguagesEntity>;
  migration_details: ReturnType<typeof initMigrationDetailsEntity>;
  module_blocks: ReturnType<typeof initModuleBlocksEntity>;
  module_fields: ReturnType<typeof initModuleFieldsEntity>;
  modules: ReturnType<typeof initModulesEntity>;
  package_discounts: ReturnType<typeof initPackageDiscountsEntity>;
  package_user_tiers: ReturnType<typeof initPackageUserTiersEntity>;
  pax_store_links: ReturnType<typeof initPaxStoreLinksEntity>;
  primary_service_requests: ReturnType<typeof initPrimaryServiceRequestsEntity>;
  shipping_methods: ReturnType<typeof initShippingMethodsEntity>;
  states: ReturnType<typeof initStatesEntity>;
  sub_companies: ReturnType<typeof initSubCompaniesEntity>;
  sub_crons: ReturnType<typeof initSubCronsEntity>;
  sub_store_details: ReturnType<typeof initSubStoreDetailsEntity>;
  timezones: ReturnType<typeof initTimezonesEntity>;
  user_alerts: ReturnType<typeof initUserAlertsEntity>;
  user_alerts_type: ReturnType<typeof initUserAlertsTypeEntity>;
  user_autogenerate_reports: ReturnType<typeof initUserAutogenerateReportsEntity>;
  user_branches: ReturnType<typeof initUserBranchesEntity>;
  user_customer_status: ReturnType<typeof initUserCustomerStatusEntity>;
  user_default_filters: ReturnType<typeof initUserDefaultFiltersEntity>;
  user_filters: ReturnType<typeof initUserFiltersEntity>;
  user_icon_sequences: ReturnType<typeof initUserIconSequencesEntity>;
  user_sales_agents: ReturnType<typeof initUserSalesAgentsEntity>;
  user_service_ticket_types: ReturnType<typeof initUserServiceTicketTypesEntity>;
  user_tiers: ReturnType<typeof initUserTiersEntity>;
  users: ReturnType<typeof initUsersEntity>;
  verifone_endpoints: ReturnType<typeof initVerifoneEndpointsEntity>;
  verifone_logs: ReturnType<typeof initVerifoneLogsEntity>;
  wizard_contents: ReturnType<typeof initWizardContentsEntity>;
}

export function initGeneratedEntities(sequelize: Sequelize): { models: GeneratedModels } {
  const models: GeneratedModels = {
      admin_users: initAdminUsersEntity(sequelize),
      cpanel_companies: initCpanelCompaniesEntity(sequelize),
      customer_discounts: initCustomerDiscountsEntity(sequelize),
      customer_documents: initCustomerDocumentsEntity(sequelize),
      customer_export_templates: initCustomerExportTemplatesEntity(sequelize),
      customer_export_templates_fields: initCustomerExportTemplatesFieldsEntity(sequelize),
      customer_notes: initCustomerNotesEntity(sequelize),
      customer_numbers: initCustomerNumbersEntity(sequelize),
      customer_status: initCustomerStatusEntity(sequelize),
      customer_status_logs: initCustomerStatusLogsEntity(sequelize),
      customer_status_time_logs: initCustomerStatusTimeLogsEntity(sequelize),
      customers: initCustomersEntity(sequelize),
      document_types: initDocumentTypesEntity(sequelize),
      email_template_fields: initEmailTemplateFieldsEntity(sequelize),
      email_template_modules: initEmailTemplateModulesEntity(sequelize),
      environments: initEnvironmentsEntity(sequelize),
      feature_fields: initFeatureFieldsEntity(sequelize),
      industries: initIndustriesEntity(sequelize),
      industry_environments: initIndustryEnvironmentsEntity(sequelize),
      industry_modules: initIndustryModulesEntity(sequelize),
      institute_audit_logs: initInstituteAuditLogsEntity(sequelize),
      institute_domains: initInstituteDomainsEntity(sequelize),
      institute_subscriptions: initInstituteSubscriptionsEntity(sequelize),
      institutes: initInstitutesEntity(sequelize),
      master_credentials: initMasterCredentialsEntity(sequelize),
      package_feature_block_fields: initPackageFeatureBlockFieldsEntity(sequelize),
      package_feature_blocks: initPackageFeatureBlocksEntity(sequelize),
      package_features: initPackageFeaturesEntity(sequelize),
      package_role_feature_permissions: initPackageRoleFeaturePermissionsEntity(sequelize),
      package_role_mappings: initPackageRoleMappingsEntity(sequelize),
      package_roles: initPackageRolesEntity(sequelize),
      packages: initPackagesEntity(sequelize),
      role_module_permissions: initRoleModulePermissionsEntity(sequelize),
      role_template_modules: initRoleTemplateModulesEntity(sequelize),
      role_templates: initRoleTemplatesEntity(sequelize),
      roles: initRolesEntity(sequelize),
      sales_agents: initSalesAgentsEntity(sequelize),
      service_ticket_comments: initServiceTicketCommentsEntity(sequelize),
      service_ticket_logs: initServiceTicketLogsEntity(sequelize),
      service_ticket_type_logs: initServiceTicketTypeLogsEntity(sequelize),
      service_ticket_types: initServiceTicketTypesEntity(sequelize),
      service_ticket_user_contents: initServiceTicketUserContentsEntity(sequelize),
      service_tickets: initServiceTicketsEntity(sequelize),
      sub_modules: initSubModulesEntity(sequelize),
      sub_package_feature_block_fields: initSubPackageFeatureBlockFieldsEntity(sequelize),
      sub_package_feature_blocks: initSubPackageFeatureBlocksEntity(sequelize),
      sub_package_features: initSubPackageFeaturesEntity(sequelize),
      sub_package_user_tiers: initSubPackageUserTiersEntity(sequelize),
      sub_packages: initSubPackagesEntity(sequelize),
      subs: initSubsEntity(sequelize),
      subscription_plans: initSubscriptionPlansEntity(sequelize),
      alert_system_details: initAlertSystemDetailsEntity(sequelize),
      alert_systems: initAlertSystemsEntity(sequelize),
      assets_logs: initAssetsLogsEntity(sequelize),
      billing_add_package: initBillingAddPackageEntity(sequelize),
      billing_cancel_package: initBillingCancelPackageEntity(sequelize),
      billing_history: initBillingHistoryEntity(sequelize),
      branches: initBranchesEntity(sequelize),
      business_hours: initBusinessHoursEntity(sequelize),
      countries: initCountriesEntity(sequelize),
      cpanel_modules: initCpanelModulesEntity(sequelize),
      crm_cron_logs: initCrmCronLogsEntity(sequelize),
      crm_crons: initCrmCronsEntity(sequelize),
      crm_email_config: initCrmEmailConfigEntity(sequelize),
      crm_email_logs: initCrmEmailLogsEntity(sequelize),
      crm_email_templates: initCrmEmailTemplatesEntity(sequelize),
      crm_module_blocks: initCrmModuleBlocksEntity(sequelize),
      crm_modules: initCrmModulesEntity(sequelize),
      crm_pages: initCrmPagesEntity(sequelize),
      crm_resource_files: initCrmResourceFilesEntity(sequelize),
      crm_resource_folders: initCrmResourceFoldersEntity(sequelize),
      crm_system_updates: initCrmSystemUpdatesEntity(sequelize),
      crm_user_module_blocks: initCrmUserModuleBlocksEntity(sequelize),
      crm_user_modules: initCrmUserModulesEntity(sequelize),
      crons: initCronsEntity(sequelize),
      currencies: initCurrenciesEntity(sequelize),
      custom_modules: initCustomModulesEntity(sequelize),
      customer_devices: initCustomerDevicesEntity(sequelize),
      customer_sales_agents: initCustomerSalesAgentsEntity(sequelize),
      date_formats: initDateFormatsEntity(sequelize),
      devices: initDevicesEntity(sequelize),
      filter_module_fields: initFilterModuleFieldsEntity(sequelize),
      filter_modules: initFilterModulesEntity(sequelize),
      hardware_shipping_address: initHardwareShippingAddressEntity(sequelize),
      hardwares: initHardwaresEntity(sequelize),
      industry_crons: initIndustryCronsEntity(sequelize),
      languages: initLanguagesEntity(sequelize),
      migration_details: initMigrationDetailsEntity(sequelize),
      module_blocks: initModuleBlocksEntity(sequelize),
      module_fields: initModuleFieldsEntity(sequelize),
      modules: initModulesEntity(sequelize),
      package_discounts: initPackageDiscountsEntity(sequelize),
      package_user_tiers: initPackageUserTiersEntity(sequelize),
      pax_store_links: initPaxStoreLinksEntity(sequelize),
      primary_service_requests: initPrimaryServiceRequestsEntity(sequelize),
      shipping_methods: initShippingMethodsEntity(sequelize),
      states: initStatesEntity(sequelize),
      sub_companies: initSubCompaniesEntity(sequelize),
      sub_crons: initSubCronsEntity(sequelize),
      sub_store_details: initSubStoreDetailsEntity(sequelize),
      timezones: initTimezonesEntity(sequelize),
      user_alerts: initUserAlertsEntity(sequelize),
      user_alerts_type: initUserAlertsTypeEntity(sequelize),
      user_autogenerate_reports: initUserAutogenerateReportsEntity(sequelize),
      user_branches: initUserBranchesEntity(sequelize),
      user_customer_status: initUserCustomerStatusEntity(sequelize),
      user_default_filters: initUserDefaultFiltersEntity(sequelize),
      user_filters: initUserFiltersEntity(sequelize),
      user_icon_sequences: initUserIconSequencesEntity(sequelize),
      user_sales_agents: initUserSalesAgentsEntity(sequelize),
      user_service_ticket_types: initUserServiceTicketTypesEntity(sequelize),
      user_tiers: initUserTiersEntity(sequelize),
      users: initUsersEntity(sequelize),
      verifone_endpoints: initVerifoneEndpointsEntity(sequelize),
      verifone_logs: initVerifoneLogsEntity(sequelize),
      wizard_contents: initWizardContentsEntity(sequelize)
  }
  models.cpanel_companies.belongsTo(models.date_formats, { as: 'dateFormat', foreignKey: 'dateFormatId', targetKey: 'id' })
  models.date_formats.hasMany(models.cpanel_companies, { as: 'cpanelCompanies', foreignKey: 'dateFormatId', sourceKey: 'id' })
  models.cpanel_companies.belongsTo(models.timezones, { as: 'timezone', foreignKey: 'timezoneId', targetKey: 'id' })
  models.timezones.hasMany(models.cpanel_companies, { as: 'cpanelCompanies', foreignKey: 'timezoneId', sourceKey: 'id' })
  models.cpanel_companies.belongsTo(models.states, { as: 'state', foreignKey: 'stateId', targetKey: 'id' })
  models.states.hasMany(models.cpanel_companies, { as: 'cpanelCompanies', foreignKey: 'stateId', sourceKey: 'id' })
  models.cpanel_companies.belongsTo(models.countries, { as: 'country', foreignKey: 'countryId', targetKey: 'id' })
  models.countries.hasMany(models.cpanel_companies, { as: 'cpanelCompanies', foreignKey: 'countryId', sourceKey: 'id' })
  models.customer_discounts.belongsTo(models.customers, { as: 'customer', foreignKey: 'customerId', targetKey: 'id' })
  models.customers.hasMany(models.customer_discounts, { as: 'customerDiscounts', foreignKey: 'customerId', sourceKey: 'id' })
  models.customer_discounts.belongsTo(models.packages, { as: 'package', foreignKey: 'packageId', targetKey: 'id' })
  models.packages.hasMany(models.customer_discounts, { as: 'customerDiscounts', foreignKey: 'packageId', sourceKey: 'id' })
  models.customer_discounts.belongsTo(models.subs, { as: 'sub', foreignKey: 'subId', targetKey: 'id' })
  models.subs.hasMany(models.customer_discounts, { as: 'customerDiscounts', foreignKey: 'subId', sourceKey: 'id' })
  models.customer_documents.belongsTo(models.customers, { as: 'customer', foreignKey: 'customerId', targetKey: 'id' })
  models.customers.hasMany(models.customer_documents, { as: 'customerDocuments', foreignKey: 'customerId', sourceKey: 'id' })
  models.customer_documents.belongsTo(models.document_types, { as: 'documentType', foreignKey: 'documentTypeId', targetKey: 'id' })
  models.document_types.hasMany(models.customer_documents, { as: 'customerDocuments', foreignKey: 'documentTypeId', sourceKey: 'id' })
  models.customer_notes.belongsTo(models.customers, { as: 'customer', foreignKey: 'customerId', targetKey: 'id' })
  models.customers.hasMany(models.customer_notes, { as: 'customerNotes', foreignKey: 'customerId', sourceKey: 'id' })
  models.customer_status_logs.belongsTo(models.customers, { as: 'customer', foreignKey: 'customerId', targetKey: 'id' })
  models.customers.hasMany(models.customer_status_logs, { as: 'customerStatusLogs', foreignKey: 'customerId', sourceKey: 'id' })
  models.customer_status_time_logs.belongsTo(models.customers, { as: 'customer', foreignKey: 'customerId', targetKey: 'id' })
  models.customers.hasMany(models.customer_status_time_logs, { as: 'customerStatusTimeLogs', foreignKey: 'customerId', sourceKey: 'id' })
  models.customers.belongsTo(models.states, { as: 'state', foreignKey: 'stateId', targetKey: 'id' })
  models.states.hasMany(models.customers, { as: 'customers', foreignKey: 'stateId', sourceKey: 'id' })
  models.feature_fields.belongsTo(models.module_blocks, { as: 'moduleBlock', foreignKey: 'moduleBlockId', targetKey: 'id' })
  models.module_blocks.hasMany(models.feature_fields, { as: 'featureFields', foreignKey: 'moduleBlockId', sourceKey: 'id' })
  models.industry_environments.belongsTo(models.environments, { as: 'environment', foreignKey: 'environmentId', targetKey: 'id' })
  models.environments.hasMany(models.industry_environments, { as: 'industryEnvironments', foreignKey: 'environmentId', sourceKey: 'id' })
  models.industry_modules.belongsTo(models.modules, { as: 'module', foreignKey: 'moduleId', targetKey: 'id' })
  models.modules.hasMany(models.industry_modules, { as: 'industryModules', foreignKey: 'moduleId', sourceKey: 'id' })
  models.institute_audit_logs.belongsTo(models.admin_users, { as: 'adminUser', foreignKey: 'adminUserId', targetKey: 'id', onDelete: 'SET NULL' })
  models.admin_users.hasMany(models.institute_audit_logs, { as: 'instituteAuditLogs', foreignKey: 'adminUserId', sourceKey: 'id', onDelete: 'SET NULL' })
  models.institute_audit_logs.belongsTo(models.institutes, { as: 'institute', foreignKey: 'instituteId', targetKey: 'id' })
  models.institutes.hasMany(models.institute_audit_logs, { as: 'instituteAuditLogs', foreignKey: 'instituteId', sourceKey: 'id' })
  models.institute_domains.belongsTo(models.institutes, { as: 'institute', foreignKey: 'instituteId', targetKey: 'id' })
  models.institutes.hasMany(models.institute_domains, { as: 'instituteDomains', foreignKey: 'instituteId', sourceKey: 'id' })
  models.institute_subscriptions.belongsTo(models.subscription_plans, { as: 'subscriptionPlan', foreignKey: 'subscriptionPlanId', targetKey: 'id', onDelete: 'CASCADE' })
  models.subscription_plans.hasMany(models.institute_subscriptions, { as: 'instituteSubscriptions', foreignKey: 'subscriptionPlanId', sourceKey: 'id', onDelete: 'CASCADE' })
  models.institute_subscriptions.belongsTo(models.institutes, { as: 'institute', foreignKey: 'instituteId', targetKey: 'id' })
  models.institutes.hasMany(models.institute_subscriptions, { as: 'instituteSubscriptions', foreignKey: 'instituteId', sourceKey: 'id' })
  models.master_credentials.belongsTo(models.institutes, { as: 'institute', foreignKey: 'instituteId', targetKey: 'id' })
  models.institutes.hasMany(models.master_credentials, { as: 'masterCredentials', foreignKey: 'instituteId', sourceKey: 'id' })
  models.package_feature_block_fields.belongsTo(models.package_feature_blocks, { as: 'packageFeatureBlock', foreignKey: 'packageFeatureBlockId', targetKey: 'id' })
  models.package_feature_blocks.hasMany(models.package_feature_block_fields, { as: 'packageFeatureBlockFields', foreignKey: 'packageFeatureBlockId', sourceKey: 'id' })
  models.package_feature_blocks.belongsTo(models.package_features, { as: 'packageFeature', foreignKey: 'packageFeatureId', targetKey: 'id' })
  models.package_features.hasMany(models.package_feature_blocks, { as: 'packageFeatureBlocks', foreignKey: 'packageFeatureId', sourceKey: 'id' })
  models.package_features.belongsTo(models.packages, { as: 'package', foreignKey: 'packageId', targetKey: 'id' })
  models.packages.hasMany(models.package_features, { as: 'packageFeatures', foreignKey: 'packageId', sourceKey: 'id' })
  models.package_role_feature_permissions.belongsTo(models.package_role_mappings, { as: 'packageRoleMapping', foreignKey: 'packageRoleMappingId', targetKey: 'id' })
  models.package_role_mappings.hasMany(models.package_role_feature_permissions, { as: 'packageRoleFeaturePermissions', foreignKey: 'packageRoleMappingId', sourceKey: 'id' })
  models.package_role_mappings.belongsTo(models.package_roles, { as: 'packageRole', foreignKey: 'packageRoleId', targetKey: 'id' })
  models.package_roles.hasMany(models.package_role_mappings, { as: 'packageRoleMappings', foreignKey: 'packageRoleId', sourceKey: 'id' })
  models.package_role_mappings.belongsTo(models.packages, { as: 'package', foreignKey: 'packageId', targetKey: 'id' })
  models.packages.hasMany(models.package_role_mappings, { as: 'packageRoleMappings', foreignKey: 'packageId', sourceKey: 'id' })
  models.role_module_permissions.belongsTo(models.roles, { as: 'role', foreignKey: 'roleId', targetKey: 'id' })
  models.roles.hasMany(models.role_module_permissions, { as: 'roleModulePermissions', foreignKey: 'roleId', sourceKey: 'id' })
  models.role_module_permissions.belongsTo(models.modules, { as: 'module', foreignKey: 'moduleId', targetKey: 'id' })
  models.modules.hasMany(models.role_module_permissions, { as: 'roleModulePermissions', foreignKey: 'moduleId', sourceKey: 'id' })
  models.role_template_modules.belongsTo(models.role_templates, { as: 'roleTemplate', foreignKey: 'roleTemplateId', targetKey: 'id' })
  models.role_templates.hasMany(models.role_template_modules, { as: 'roleTemplateModules', foreignKey: 'roleTemplateId', sourceKey: 'id' })
  models.role_template_modules.belongsTo(models.modules, { as: 'module', foreignKey: 'moduleId', targetKey: 'id' })
  models.modules.hasMany(models.role_template_modules, { as: 'roleTemplateModules', foreignKey: 'moduleId', sourceKey: 'id' })
  models.sales_agents.belongsTo(models.states, { as: 'state', foreignKey: 'stateId', targetKey: 'id' })
  models.states.hasMany(models.sales_agents, { as: 'salesAgents', foreignKey: 'stateId', sourceKey: 'id' })
  models.sales_agents.belongsTo(models.countries, { as: 'country', foreignKey: 'countryId', targetKey: 'id' })
  models.countries.hasMany(models.sales_agents, { as: 'salesAgents', foreignKey: 'countryId', sourceKey: 'id' })
  models.service_ticket_comments.belongsTo(models.service_tickets, { as: 'serviceTicket', foreignKey: 'serviceTicketId', targetKey: 'id' })
  models.service_tickets.hasMany(models.service_ticket_comments, { as: 'serviceTicketComments', foreignKey: 'serviceTicketId', sourceKey: 'id' })
  models.service_ticket_comments.belongsTo(models.users, { as: 'user', foreignKey: 'userId', targetKey: 'id' })
  models.users.hasMany(models.service_ticket_comments, { as: 'serviceTicketComments', foreignKey: 'userId', sourceKey: 'id' })
  models.service_ticket_type_logs.belongsTo(models.service_tickets, { as: 'serviceTicket', foreignKey: 'serviceTicketId', targetKey: 'id' })
  models.service_tickets.hasMany(models.service_ticket_type_logs, { as: 'serviceTicketTypeLogs', foreignKey: 'serviceTicketId', sourceKey: 'id' })
  models.service_ticket_type_logs.belongsTo(models.service_ticket_types, { as: 'serviceTicketType', foreignKey: 'serviceTicketTypeId', targetKey: 'id' })
  models.service_ticket_types.hasMany(models.service_ticket_type_logs, { as: 'serviceTicketTypeLogs', foreignKey: 'serviceTicketTypeId', sourceKey: 'id' })
  models.service_ticket_user_contents.belongsTo(models.service_tickets, { as: 'serviceTicket', foreignKey: 'serviceTicketId', targetKey: 'id' })
  models.service_tickets.hasMany(models.service_ticket_user_contents, { as: 'serviceTicketUserContents', foreignKey: 'serviceTicketId', sourceKey: 'id' })
  models.service_ticket_user_contents.belongsTo(models.customers, { as: 'customer', foreignKey: 'customerId', targetKey: 'id' })
  models.customers.hasMany(models.service_ticket_user_contents, { as: 'serviceTicketUserContents', foreignKey: 'customerId', sourceKey: 'id' })
  models.service_ticket_user_contents.belongsTo(models.subs, { as: 'sub', foreignKey: 'subId', targetKey: 'id' })
  models.subs.hasMany(models.service_ticket_user_contents, { as: 'serviceTicketUserContents', foreignKey: 'subId', sourceKey: 'id' })
  models.service_ticket_user_contents.belongsTo(models.users, { as: 'user', foreignKey: 'userId', targetKey: 'id' })
  models.users.hasMany(models.service_ticket_user_contents, { as: 'serviceTicketUserContents', foreignKey: 'userId', sourceKey: 'id' })
  models.service_tickets.belongsTo(models.customers, { as: 'customer', foreignKey: 'customerId', targetKey: 'id' })
  models.customers.hasMany(models.service_tickets, { as: 'serviceTickets', foreignKey: 'customerId', sourceKey: 'id' })
  models.service_tickets.belongsTo(models.service_ticket_types, { as: 'serviceTicketType', foreignKey: 'serviceTicketTypeId', targetKey: 'id' })
  models.service_ticket_types.hasMany(models.service_tickets, { as: 'serviceTickets', foreignKey: 'serviceTicketTypeId', sourceKey: 'id' })
  models.service_tickets.belongsTo(models.users, { as: 'user', foreignKey: 'userId', targetKey: 'id' })
  models.users.hasMany(models.service_tickets, { as: 'serviceTickets', foreignKey: 'userId', sourceKey: 'id' })
  models.service_tickets.belongsTo(models.subs, { as: 'sub', foreignKey: 'subId', targetKey: 'id' })
  models.subs.hasMany(models.service_tickets, { as: 'serviceTickets', foreignKey: 'subId', sourceKey: 'id' })
  models.service_tickets.belongsTo(models.primary_service_requests, { as: 'primaryServiceRequest', foreignKey: 'primaryServiceRequestId', targetKey: 'id' })
  models.primary_service_requests.hasMany(models.service_tickets, { as: 'serviceTickets', foreignKey: 'primaryServiceRequestId', sourceKey: 'id' })
  models.sub_modules.belongsTo(models.subs, { as: 'sub', foreignKey: 'subId', targetKey: 'id' })
  models.subs.hasMany(models.sub_modules, { as: 'subModules', foreignKey: 'subId', sourceKey: 'id' })
  models.sub_modules.belongsTo(models.modules, { as: 'module', foreignKey: 'moduleId', targetKey: 'id' })
  models.modules.hasMany(models.sub_modules, { as: 'subModules', foreignKey: 'moduleId', sourceKey: 'id' })
  models.sub_package_feature_block_fields.belongsTo(models.sub_package_feature_blocks, { as: 'subPackageFeatureBlock', foreignKey: 'subPackageFeatureBlockId', targetKey: 'id' })
  models.sub_package_feature_blocks.hasMany(models.sub_package_feature_block_fields, { as: 'subPackageFeatureBlockFields', foreignKey: 'subPackageFeatureBlockId', sourceKey: 'id' })
  models.sub_package_feature_blocks.belongsTo(models.sub_package_features, { as: 'subPackageFeature', foreignKey: 'subPackageFeatureId', targetKey: 'id' })
  models.sub_package_features.hasMany(models.sub_package_feature_blocks, { as: 'subPackageFeatureBlocks', foreignKey: 'subPackageFeatureId', sourceKey: 'id' })
  models.sub_package_features.belongsTo(models.sub_packages, { as: 'subPackage', foreignKey: 'subPackageId', targetKey: 'id' })
  models.sub_packages.hasMany(models.sub_package_features, { as: 'subPackageFeatures', foreignKey: 'subPackageId', sourceKey: 'id' })
  models.sub_package_user_tiers.belongsTo(models.sub_packages, { as: 'subPackage', foreignKey: 'subPackageId', targetKey: 'id' })
  models.sub_packages.hasMany(models.sub_package_user_tiers, { as: 'subPackageUserTiers', foreignKey: 'subPackageId', sourceKey: 'id' })
  models.sub_package_user_tiers.belongsTo(models.user_tiers, { as: 'userTier', foreignKey: 'userTierId', targetKey: 'id' })
  models.user_tiers.hasMany(models.sub_package_user_tiers, { as: 'subPackageUserTiers', foreignKey: 'userTierId', sourceKey: 'id' })
  models.sub_packages.belongsTo(models.subs, { as: 'sub', foreignKey: 'subId', targetKey: 'id' })
  models.subs.hasMany(models.sub_packages, { as: 'subPackages', foreignKey: 'subId', sourceKey: 'id' })
  models.sub_packages.belongsTo(models.packages, { as: 'package', foreignKey: 'packageId', targetKey: 'id' })
  models.packages.hasMany(models.sub_packages, { as: 'subPackages', foreignKey: 'packageId', sourceKey: 'id' })
  models.subs.belongsTo(models.customers, { as: 'customer', foreignKey: 'customerId', targetKey: 'id', onDelete: 'CASCADE' })
  models.customers.hasMany(models.subs, { as: 'subs', foreignKey: 'customerId', sourceKey: 'id', onDelete: 'CASCADE' })
  models.subs.belongsTo(models.industries, { as: 'industry', foreignKey: 'industryId', targetKey: 'id', onDelete: 'CASCADE' })
  models.industries.hasMany(models.subs, { as: 'subs', foreignKey: 'industryId', sourceKey: 'id', onDelete: 'CASCADE' })
  models.subs.belongsTo(models.sub_packages, { as: 'package', foreignKey: 'packageId', targetKey: 'id', onDelete: 'CASCADE' })
  models.sub_packages.hasMany(models.subs, { as: 'subs', foreignKey: 'packageId', sourceKey: 'id', onDelete: 'CASCADE' })
  models.subs.belongsTo(models.environments, { as: 'environment', foreignKey: 'environmentId', targetKey: 'id' })
  models.environments.hasMany(models.subs, { as: 'subs', foreignKey: 'environmentId', sourceKey: 'id' })
  models.subs.belongsTo(models.industry_environments, { as: 'industryEnvironment', foreignKey: 'industryEnvironmentId', targetKey: 'id' })
  models.industry_environments.hasMany(models.subs, { as: 'subs', foreignKey: 'industryEnvironmentId', sourceKey: 'id' })
  models.subs.belongsTo(models.languages, { as: 'language', foreignKey: 'languageId', targetKey: 'id' })
  models.languages.hasMany(models.subs, { as: 'subs', foreignKey: 'languageId', sourceKey: 'id' })
  models.alert_system_details.belongsTo(models.alert_systems, { as: 'alertSystem', foreignKey: 'alertSystemId', targetKey: 'id' })
  models.alert_systems.hasMany(models.alert_system_details, { as: 'alertSystemDetails', foreignKey: 'alertSystemId', sourceKey: 'id' })
  models.alert_system_details.belongsTo(models.subs, { as: 'sub', foreignKey: 'subId', targetKey: 'id' })
  models.subs.hasMany(models.alert_system_details, { as: 'alertSystemDetails', foreignKey: 'subId', sourceKey: 'id' })
  models.billing_add_package.belongsTo(models.subs, { as: 'sub', foreignKey: 'subId', targetKey: 'id' })
  models.subs.hasMany(models.billing_add_package, { as: 'billingAddPackage', foreignKey: 'subId', sourceKey: 'id' })
  models.billing_add_package.belongsTo(models.customers, { as: 'customer', foreignKey: 'customerId', targetKey: 'id' })
  models.customers.hasMany(models.billing_add_package, { as: 'billingAddPackage', foreignKey: 'customerId', sourceKey: 'id' })
  models.billing_cancel_package.belongsTo(models.subs, { as: 'sub', foreignKey: 'subId', targetKey: 'id' })
  models.subs.hasMany(models.billing_cancel_package, { as: 'billingCancelPackage', foreignKey: 'subId', sourceKey: 'id' })
  models.billing_cancel_package.belongsTo(models.customers, { as: 'customer', foreignKey: 'customerId', targetKey: 'id' })
  models.customers.hasMany(models.billing_cancel_package, { as: 'billingCancelPackage', foreignKey: 'customerId', sourceKey: 'id' })
  models.billing_history.belongsTo(models.subs, { as: 'sub', foreignKey: 'subId', targetKey: 'id' })
  models.subs.hasMany(models.billing_history, { as: 'billingHistory', foreignKey: 'subId', sourceKey: 'id' })
  models.billing_history.belongsTo(models.customers, { as: 'customer', foreignKey: 'customerId', targetKey: 'id' })
  models.customers.hasMany(models.billing_history, { as: 'billingHistory', foreignKey: 'customerId', sourceKey: 'id' })
  models.branches.belongsTo(models.states, { as: 'state', foreignKey: 'stateId', targetKey: 'id' })
  models.states.hasMany(models.branches, { as: 'branches', foreignKey: 'stateId', sourceKey: 'id' })
  models.branches.belongsTo(models.countries, { as: 'country', foreignKey: 'countryId', targetKey: 'id' })
  models.countries.hasMany(models.branches, { as: 'branches', foreignKey: 'countryId', sourceKey: 'id' })
  models.countries.belongsTo(models.languages, { as: 'language', foreignKey: 'languageId', targetKey: 'id' })
  models.languages.hasMany(models.countries, { as: 'countries', foreignKey: 'languageId', sourceKey: 'id' })
  models.crm_email_logs.belongsTo(models.subs, { as: 'sub', foreignKey: 'subId', targetKey: 'id' })
  models.subs.hasMany(models.crm_email_logs, { as: 'crmEmailLogs', foreignKey: 'subId', sourceKey: 'id' })
  models.crm_email_logs.belongsTo(models.users, { as: 'user', foreignKey: 'userId', targetKey: 'id' })
  models.users.hasMany(models.crm_email_logs, { as: 'crmEmailLogs', foreignKey: 'userId', sourceKey: 'id' })
  models.crm_module_blocks.belongsTo(models.crm_modules, { as: 'crmModule', foreignKey: 'crmModuleId', targetKey: 'id' })
  models.crm_modules.hasMany(models.crm_module_blocks, { as: 'crmModuleBlocks', foreignKey: 'crmModuleId', sourceKey: 'id' })
  models.crm_user_module_blocks.belongsTo(models.crm_user_modules, { as: 'crmUserModule', foreignKey: 'crmUserModuleId', targetKey: 'id' })
  models.crm_user_modules.hasMany(models.crm_user_module_blocks, { as: 'crmUserModuleBlocks', foreignKey: 'crmUserModuleId', sourceKey: 'id' })
  models.crm_user_modules.belongsTo(models.users, { as: 'user', foreignKey: 'userId', targetKey: 'id' })
  models.users.hasMany(models.crm_user_modules, { as: 'crmUserModules', foreignKey: 'userId', sourceKey: 'id' })
  models.crm_user_modules.belongsTo(models.modules, { as: 'module', foreignKey: 'moduleId', targetKey: 'id' })
  models.modules.hasMany(models.crm_user_modules, { as: 'crmUserModules', foreignKey: 'moduleId', sourceKey: 'id' })
  models.customer_devices.belongsTo(models.customers, { as: 'customer', foreignKey: 'customerId', targetKey: 'id' })
  models.customers.hasMany(models.customer_devices, { as: 'customerDevices', foreignKey: 'customerId', sourceKey: 'id' })
  models.customer_devices.belongsTo(models.devices, { as: 'device', foreignKey: 'deviceId', targetKey: 'id' })
  models.devices.hasMany(models.customer_devices, { as: 'customerDevices', foreignKey: 'deviceId', sourceKey: 'id' })
  models.customer_sales_agents.belongsTo(models.customers, { as: 'customer', foreignKey: 'customerId', targetKey: 'id' })
  models.customers.hasMany(models.customer_sales_agents, { as: 'customerSalesAgents', foreignKey: 'customerId', sourceKey: 'id' })
  models.customer_sales_agents.belongsTo(models.sales_agents, { as: 'salesAgent', foreignKey: 'salesAgentId', targetKey: 'id' })
  models.sales_agents.hasMany(models.customer_sales_agents, { as: 'customerSalesAgents', foreignKey: 'salesAgentId', sourceKey: 'id' })
  models.filter_module_fields.belongsTo(models.filter_modules, { as: 'filterModule', foreignKey: 'filterModuleId', targetKey: 'id' })
  models.filter_modules.hasMany(models.filter_module_fields, { as: 'filterModuleFields', foreignKey: 'filterModuleId', sourceKey: 'id' })
  models.hardware_shipping_address.belongsTo(models.hardwares, { as: 'hardware', foreignKey: 'hardwareId', targetKey: 'id' })
  models.hardwares.hasMany(models.hardware_shipping_address, { as: 'hardwareShippingAddress', foreignKey: 'hardwareId', sourceKey: 'id' })
  models.hardware_shipping_address.belongsTo(models.states, { as: 'state', foreignKey: 'stateId', targetKey: 'id' })
  models.states.hasMany(models.hardware_shipping_address, { as: 'hardwareShippingAddress', foreignKey: 'stateId', sourceKey: 'id' })
  models.hardwares.belongsTo(models.devices, { as: 'device', foreignKey: 'deviceId', targetKey: 'id' })
  models.devices.hasMany(models.hardwares, { as: 'hardwares', foreignKey: 'deviceId', sourceKey: 'id' })
  models.hardwares.belongsTo(models.customers, { as: 'customer', foreignKey: 'customerId', targetKey: 'id' })
  models.customers.hasMany(models.hardwares, { as: 'hardwares', foreignKey: 'customerId', sourceKey: 'id' })
  models.hardwares.belongsTo(models.shipping_methods, { as: 'shippingMethod', foreignKey: 'shippingMethodId', targetKey: 'id' })
  models.shipping_methods.hasMany(models.hardwares, { as: 'hardwares', foreignKey: 'shippingMethodId', sourceKey: 'id' })
  models.industry_crons.belongsTo(models.crons, { as: 'cron', foreignKey: 'cronId', targetKey: 'id' })
  models.crons.hasMany(models.industry_crons, { as: 'industryCrons', foreignKey: 'cronId', sourceKey: 'id' })
  models.module_blocks.belongsTo(models.modules, { as: 'module', foreignKey: 'moduleId', targetKey: 'id' })
  models.modules.hasMany(models.module_blocks, { as: 'moduleBlocks', foreignKey: 'moduleId', sourceKey: 'id' })
  models.module_fields.belongsTo(models.modules, { as: 'module', foreignKey: 'moduleId', targetKey: 'id' })
  models.modules.hasMany(models.module_fields, { as: 'moduleFields', foreignKey: 'moduleId', sourceKey: 'id' })
  models.package_discounts.belongsTo(models.packages, { as: 'package', foreignKey: 'packageId', targetKey: 'id' })
  models.packages.hasMany(models.package_discounts, { as: 'packageDiscounts', foreignKey: 'packageId', sourceKey: 'id' })
  models.package_user_tiers.belongsTo(models.user_tiers, { as: 'userTier', foreignKey: 'userTierId', targetKey: 'id' })
  models.user_tiers.hasMany(models.package_user_tiers, { as: 'packageUserTiers', foreignKey: 'userTierId', sourceKey: 'id' })
  models.package_user_tiers.belongsTo(models.packages, { as: 'package', foreignKey: 'packageId', targetKey: 'id' })
  models.packages.hasMany(models.package_user_tiers, { as: 'packageUserTiers', foreignKey: 'packageId', sourceKey: 'id' })
  models.states.belongsTo(models.countries, { as: 'country', foreignKey: 'countryId', targetKey: 'id' })
  models.countries.hasMany(models.states, { as: 'states', foreignKey: 'countryId', sourceKey: 'id' })
  models.sub_companies.belongsTo(models.subs, { as: 'sub', foreignKey: 'subId', targetKey: 'id' })
  models.subs.hasMany(models.sub_companies, { as: 'subCompanies', foreignKey: 'subId', sourceKey: 'id' })
  models.sub_companies.belongsTo(models.customers, { as: 'customer', foreignKey: 'customerId', targetKey: 'id' })
  models.customers.hasMany(models.sub_companies, { as: 'subCompanies', foreignKey: 'customerId', sourceKey: 'id' })
  models.sub_companies.belongsTo(models.timezones, { as: 'timezone', foreignKey: 'timezoneId', targetKey: 'id' })
  models.timezones.hasMany(models.sub_companies, { as: 'subCompanies', foreignKey: 'timezoneId', sourceKey: 'id' })
  models.sub_companies.belongsTo(models.states, { as: 'state', foreignKey: 'stateId', targetKey: 'id' })
  models.states.hasMany(models.sub_companies, { as: 'subCompanies', foreignKey: 'stateId', sourceKey: 'id' })
  models.sub_crons.belongsTo(models.subs, { as: 'sub', foreignKey: 'subId', targetKey: 'id' })
  models.subs.hasMany(models.sub_crons, { as: 'subCrons', foreignKey: 'subId', sourceKey: 'id' })
  models.sub_crons.belongsTo(models.crons, { as: 'cron', foreignKey: 'cronId', targetKey: 'id' })
  models.crons.hasMany(models.sub_crons, { as: 'subCrons', foreignKey: 'cronId', sourceKey: 'id' })
  models.sub_store_details.belongsTo(models.subs, { as: 'sub', foreignKey: 'subId', targetKey: 'id' })
  models.subs.hasMany(models.sub_store_details, { as: 'subStoreDetails', foreignKey: 'subId', sourceKey: 'id' })
  models.sub_store_details.belongsTo(models.timezones, { as: 'timezone', foreignKey: 'timezoneId', targetKey: 'id' })
  models.timezones.hasMany(models.sub_store_details, { as: 'subStoreDetails', foreignKey: 'timezoneId', sourceKey: 'id' })
  models.user_alerts.belongsTo(models.service_tickets, { as: 'serviceTicket', foreignKey: 'serviceTicketId', targetKey: 'id' })
  models.service_tickets.hasMany(models.user_alerts, { as: 'userAlerts', foreignKey: 'serviceTicketId', sourceKey: 'id' })
  models.user_alerts.belongsTo(models.customers, { as: 'customer', foreignKey: 'customerId', targetKey: 'id' })
  models.customers.hasMany(models.user_alerts, { as: 'userAlerts', foreignKey: 'customerId', sourceKey: 'id' })
  models.user_alerts.belongsTo(models.primary_service_requests, { as: 'primaryServiceRequest', foreignKey: 'primaryServiceRequestId', targetKey: 'id' })
  models.primary_service_requests.hasMany(models.user_alerts, { as: 'userAlerts', foreignKey: 'primaryServiceRequestId', sourceKey: 'id' })
  models.user_alerts_type.belongsTo(models.users, { as: 'user', foreignKey: 'userId', targetKey: 'id' })
  models.users.hasMany(models.user_alerts_type, { as: 'userAlertsType', foreignKey: 'userId', sourceKey: 'id' })
  models.user_autogenerate_reports.belongsTo(models.users, { as: 'user', foreignKey: 'userId', targetKey: 'id' })
  models.users.hasMany(models.user_autogenerate_reports, { as: 'userAutogenerateReports', foreignKey: 'userId', sourceKey: 'id' })
  models.user_branches.belongsTo(models.users, { as: 'user', foreignKey: 'userId', targetKey: 'id' })
  models.users.hasMany(models.user_branches, { as: 'userBranches', foreignKey: 'userId', sourceKey: 'id' })
  models.user_customer_status.belongsTo(models.users, { as: 'user', foreignKey: 'userId', targetKey: 'id' })
  models.users.hasMany(models.user_customer_status, { as: 'userCustomerStatus', foreignKey: 'userId', sourceKey: 'id' })
  models.user_default_filters.belongsTo(models.modules, { as: 'module', foreignKey: 'moduleId', targetKey: 'id' })
  models.modules.hasMany(models.user_default_filters, { as: 'userDefaultFilters', foreignKey: 'moduleId', sourceKey: 'id' })
  models.user_default_filters.belongsTo(models.users, { as: 'user', foreignKey: 'userId', targetKey: 'id' })
  models.users.hasMany(models.user_default_filters, { as: 'userDefaultFilters', foreignKey: 'userId', sourceKey: 'id' })
  models.user_filters.belongsTo(models.filter_modules, { as: 'filterModule', foreignKey: 'filterModuleId', targetKey: 'id' })
  models.filter_modules.hasMany(models.user_filters, { as: 'userFilters', foreignKey: 'filterModuleId', sourceKey: 'id' })
  models.user_icon_sequences.belongsTo(models.users, { as: 'user', foreignKey: 'userId', targetKey: 'id' })
  models.users.hasMany(models.user_icon_sequences, { as: 'userIconSequences', foreignKey: 'userId', sourceKey: 'id' })
  models.user_sales_agents.belongsTo(models.users, { as: 'user', foreignKey: 'userId', targetKey: 'id' })
  models.users.hasMany(models.user_sales_agents, { as: 'userSalesAgents', foreignKey: 'userId', sourceKey: 'id' })
  models.user_sales_agents.belongsTo(models.sales_agents, { as: 'salesAgent', foreignKey: 'salesAgentId', targetKey: 'id' })
  models.sales_agents.hasMany(models.user_sales_agents, { as: 'userSalesAgents', foreignKey: 'salesAgentId', sourceKey: 'id' })
  models.user_service_ticket_types.belongsTo(models.users, { as: 'user', foreignKey: 'userId', targetKey: 'id' })
  models.users.hasMany(models.user_service_ticket_types, { as: 'userServiceTicketTypes', foreignKey: 'userId', sourceKey: 'id' })
  models.user_service_ticket_types.belongsTo(models.service_ticket_types, { as: 'serviceTicketType', foreignKey: 'serviceTicketTypeId', targetKey: 'id' })
  models.service_ticket_types.hasMany(models.user_service_ticket_types, { as: 'userServiceTicketTypes', foreignKey: 'serviceTicketTypeId', sourceKey: 'id' })
  models.users.belongsTo(models.roles, { as: 'role', foreignKey: 'roleId', targetKey: 'id' })
  models.roles.hasMany(models.users, { as: 'users', foreignKey: 'roleId', sourceKey: 'id' })
  return {
    models
  }
}
