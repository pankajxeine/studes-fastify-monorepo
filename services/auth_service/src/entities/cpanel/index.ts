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
}

export function initGeneratedEntities(sequelize: Sequelize): { models: GeneratedModels } {
  return {
    models: {
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
      subscription_plans: initSubscriptionPlansEntity(sequelize)
    }
  }
}
