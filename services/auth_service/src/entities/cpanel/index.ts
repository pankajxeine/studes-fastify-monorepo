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

export function initGeneratedEntities(sequelize: Sequelize): void {
  initAdminUsersEntity(sequelize)
  initCpanelCompaniesEntity(sequelize)
  initCustomerDiscountsEntity(sequelize)
  initCustomerDocumentsEntity(sequelize)
  initCustomerExportTemplatesEntity(sequelize)
  initCustomerExportTemplatesFieldsEntity(sequelize)
  initCustomerNotesEntity(sequelize)
  initCustomerNumbersEntity(sequelize)
  initCustomerStatusEntity(sequelize)
  initCustomerStatusLogsEntity(sequelize)
  initCustomerStatusTimeLogsEntity(sequelize)
  initCustomersEntity(sequelize)
  initDocumentTypesEntity(sequelize)
  initEmailTemplateFieldsEntity(sequelize)
  initEmailTemplateModulesEntity(sequelize)
  initEnvironmentsEntity(sequelize)
  initFeatureFieldsEntity(sequelize)
  initIndustriesEntity(sequelize)
  initIndustryEnvironmentsEntity(sequelize)
  initIndustryModulesEntity(sequelize)
  initInstituteAuditLogsEntity(sequelize)
  initInstituteDomainsEntity(sequelize)
  initInstituteSubscriptionsEntity(sequelize)
  initInstitutesEntity(sequelize)
  initMasterCredentialsEntity(sequelize)
  initPackageFeatureBlockFieldsEntity(sequelize)
  initPackageFeatureBlocksEntity(sequelize)
  initPackageFeaturesEntity(sequelize)
  initPackageRoleFeaturePermissionsEntity(sequelize)
  initPackageRoleMappingsEntity(sequelize)
  initPackageRolesEntity(sequelize)
  initPackagesEntity(sequelize)
  initRoleModulePermissionsEntity(sequelize)
  initRoleTemplateModulesEntity(sequelize)
  initRoleTemplatesEntity(sequelize)
  initRolesEntity(sequelize)
  initSalesAgentsEntity(sequelize)
  initServiceTicketCommentsEntity(sequelize)
  initServiceTicketLogsEntity(sequelize)
  initServiceTicketTypeLogsEntity(sequelize)
  initServiceTicketTypesEntity(sequelize)
  initServiceTicketUserContentsEntity(sequelize)
  initServiceTicketsEntity(sequelize)
  initSubModulesEntity(sequelize)
  initSubPackageFeatureBlockFieldsEntity(sequelize)
  initSubPackageFeatureBlocksEntity(sequelize)
  initSubPackageFeaturesEntity(sequelize)
  initSubPackageUserTiersEntity(sequelize)
  initSubPackagesEntity(sequelize)
  initSubsEntity(sequelize)
  initSubscriptionPlansEntity(sequelize)
}
