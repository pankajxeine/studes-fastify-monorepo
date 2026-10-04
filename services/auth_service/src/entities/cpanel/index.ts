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

  // sales_agents
  models.sales_agents.belongsTo(models.states, { foreignKey: 'stateId', as: 'state' })
  models.sales_agents.belongsTo(models.countries, { foreignKey: 'countryId', as: 'country' })

  //branches
  models.branches.belongsTo(models.states, { foreignKey: 'stateId', as: 'state' })
  models.branches.belongsTo(models.countries, { foreignKey: 'countryId', as: 'country' })

  models.countries.hasMany(models.states);

  models.countries.belongsTo(models.currencies, {
    as: "currency",
    foreignKey: "currencyId",
  });
  models.countries.belongsTo(models.languages, {
    as: "language",
    foreignKey: "languageId",
  });

  models.users.belongsTo(models.roles, {
    foreignKey: "roleId"
  });

  models.role_templates.hasMany(models.role_template_modules, {
    foreignKey: "role_template_id"
  });

  models.users.hasMany(models.user_branches);

  models.users.belongsTo(models.branches);

  models.users.hasMany(models.user_sales_agents);

  models.user_sales_agents.belongsTo(models.sales_agents);


  models.users.hasMany(models.user_alerts_type, {
    foreignKey: "user_id",
    //sourceKey: "id"
  });

  models.user_alerts_type.belongsTo(models.service_ticket_types, {
    foreignKey: "alert_type_id"
  });

  models.roles.hasMany(models.role_module_permissions, {
    foreignKey: "role_id"
  });

  models.role_module_permissions.belongsTo(models.cpanel_modules, {
    foreignKey: "module_id"
  });

  models.customers.belongsTo(models.branches, {
    foreignKey: "branch_id",
    targetKey: "id"
  });

  models.customers.hasMany(models.customer_sales_agents, {
    foreignKey: "customer_id",
    sourceKey: "id"
  });

  models.customers.hasMany(models.customer_devices, {
    foreignKey: "customer_id",
    sourceKey: "id"
  });

  models.customers.belongsTo(models.states, {
    foreignKey: "state_id",
    targetKey: "id"
  });

  models.customers.belongsTo(models.countries, {
    foreignKey: "country_id",
    targetKey: "id"
  });

  models.customer_sales_agents.belongsTo(models.sales_agents);

  models.customers.belongsTo(models.customer_status, {
    foreignKey: "customer_status_id",
    targetKey: "id"
  });

  models.customer_status.hasOne(models.customers, {
    foreignKey: "customer_status_id",
    sourceKey: "id"
  });

  // models.customers.hasMany(Sub, {
  //   foreignKey: "customer_id",
  //   sourceKey: "id"
  // });

  models.service_ticket_comments.belongsTo(models.users, {
    foreignKey: "user_id",
    targetKey: "id"
  });

  models.service_tickets.belongsTo(models.customers, {
    foreignKey: "customer_id",
    targetKey: "id"
  });

  models.service_tickets.hasMany(models.customer_sales_agents, {
    foreignKey: "customer_id",
    sourceKey: "customer_id"
  });

  models.service_tickets.belongsTo(models.service_ticket_types, {
    foreignKey: "service_ticket_type_id",
    targetKey: "id"
  });

  models.service_tickets.belongsTo(models.primary_service_requests, {
    foreignKey: "primary_service_request_id",
    targetKey: "id"
  });

  models.service_tickets.belongsTo(models.users, {
    foreignKey: "user_id",
    targetKey: "id"
  });
  models.service_tickets.belongsTo(models.customer_sales_agents, {
    foreignKey: "customer_id",
    targetKey: "id"
  });
  models.service_ticket_types.hasMany(models.service_tickets, {
    foreignKey: "service_ticket_type_id",
    sourceKey: "id"
  });



  return { models }
}
