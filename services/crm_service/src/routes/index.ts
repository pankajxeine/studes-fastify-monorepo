import CommonRoutes from './common.router'
import AuthRoutes from './auth.router'
import HealthRoutes from './health.router'
import AdminUsersRoutes from './admin_users.router'
import AlertSystemsRoutes from './alert_systems.router'
import AlertSystemDetailsRoutes from './alert_system_details.router'
import AssetsLogsRoutes from './assets_logs.router'
import BillingAddPackageRoutes from './billing_add_package.router'
import BillingCancelPackageRoutes from './billing_cancel_package.router'
import BillingHistoryRoutes from './billing_history.router'
import BranchesRoutes from './branches.router'
import BusinessHoursRoutes from './business_hours.router'
import CountriesRoutes from './countries.router'
import CpanelCompaniesRoutes from './cpanel_companies.router'
import CpanelModulesRoutes from './cpanel_modules.router'
import CrmCronsRoutes from './crm_crons.router'
import CrmCronLogsRoutes from './crm_cron_logs.router'
import CrmEmailConfigRoutes from './crm_email_config.router'
import CrmEmailLogsRoutes from './crm_email_logs.router'
import CrmEmailTemplatesRoutes from './crm_email_templates.router'
import CrmModulesRoutes from './crm_modules.router'
import CrmModuleBlocksRoutes from './crm_module_blocks.router'
import CrmPagesRoutes from './crm_pages.router'
import CrmResourceFilesRoutes from './crm_resource_files.router'
import CrmResourceFoldersRoutes from './crm_resource_folders.router'
import CrmSystemUpdatesRoutes from './crm_system_updates.router'
import CrmUserModulesRoutes from './crm_user_modules.router'
import CrmUserModuleBlocksRoutes from './crm_user_module_blocks.router'
import CronsRoutes from './crons.router'
import CurrenciesRoutes from './currencies.router'
import CustomersRoutes from './customers.router'
import CustomerDevicesRoutes from './customer_devices.router'
import CustomerDiscountsRoutes from './customer_discounts.router'
import CustomerDocumentsRoutes from './customer_documents.router'
import CustomerExportTemplatesRoutes from './customer_export_templates.router'
import CustomerExportTemplatesFieldsRoutes from './customer_export_templates_fields.router'
import CustomerNotesRoutes from './customer_notes.router'
import CustomerNumbersRoutes from './customer_numbers.router'
import CustomerSalesAgentsRoutes from './customer_sales_agents.router'
import CustomerStatusRoutes from './customer_status.router'
import CustomerStatusLogsRoutes from './customer_status_logs.router'
import CustomerStatusTimeLogsRoutes from './customer_status_time_logs.router'
import CustomModulesRoutes from './custom_modules.router'
import DateFormatsRoutes from './date_formats.router'
import DevicesRoutes from './devices.router'
import DocumentTypesRoutes from './document_types.router'
import EmailTemplateFieldsRoutes from './email_template_fields.router'
import EmailTemplateModulesRoutes from './email_template_modules.router'
import EnvironmentsRoutes from './environments.router'
import FeatureFieldsRoutes from './feature_fields.router'
import FilterModulesRoutes from './filter_modules.router'
import FilterModuleFieldsRoutes from './filter_module_fields.router'
import HardwaresRoutes from './hardwares.router'
import HardwareShippingAddressRoutes from './hardware_shipping_address.router'
import IndustriesRoutes from './industries.router'
import IndustryCronsRoutes from './industry_crons.router'
import IndustryEnvironmentsRoutes from './industry_environments.router'
import IndustryModulesRoutes from './industry_modules.router'
import InstitutesRoutes from './institutes.router'
import InstituteAuditLogsRoutes from './institute_audit_logs.router'
import InstituteDomainsRoutes from './institute_domains.router'
import InstituteSubscriptionsRoutes from './institute_subscriptions.router'
import LanguagesRoutes from './languages.router'
import MasterCredentialsRoutes from './master_credentials.router'
import ModulesRoutes from './modules.router'
import ModuleBlocksRoutes from './module_blocks.router'
import ModuleFieldsRoutes from './module_fields.router'
import PackagesRoutes from './packages.router'
import PackageDiscountsRoutes from './package_discounts.router'
import PackageFeaturesRoutes from './package_features.router'
import PackageFeatureBlocksRoutes from './package_feature_blocks.router'
import PackageFeatureBlockFieldsRoutes from './package_feature_block_fields.router'
import PackageRolesRoutes from './package_roles.router'
import PackageRoleFeaturePermissionsRoutes from './package_role_feature_permissions.router'
import PackageRoleMappingsRoutes from './package_role_mappings.router'
import PackageUserTiersRoutes from './package_user_tiers.router'
import PaxStoreLinksRoutes from './pax_store_links.router'
import PrimaryServiceRequestsRoutes from './primary_service_requests.router'
import RolesRoutes from './roles.router'
import RoleModulePermissionsRoutes from './role_module_permissions.router'
import RoleTemplatesRoutes from './role_templates.router'
import RoleTemplateModulesRoutes from './role_template_modules.router'
import SalesAgentsRoutes from './sales_agents.router'
import ServiceTicketsRoutes from './service_tickets.router'
import ServiceTicketCommentsRoutes from './service_ticket_comments.router'
import ServiceTicketLogsRoutes from './service_ticket_logs.router'
import ServiceTicketTypesRoutes from './service_ticket_types.router'
import ServiceTicketTypeLogsRoutes from './service_ticket_type_logs.router'
import ServiceTicketUserContentsRoutes from './service_ticket_user_contents.router'
import ShippingMethodsRoutes from './shipping_methods.router'
import StatesRoutes from './states.router'
import SubsRoutes from './subs.router'
import SubscriptionPlansRoutes from './subscription_plans.router'
import SubCompaniesRoutes from './sub_companies.router'
import SubCronsRoutes from './sub_crons.router'
import SubModulesRoutes from './sub_modules.router'
import SubPackagesRoutes from './sub_packages.router'
import SubPackageFeaturesRoutes from './sub_package_features.router'
import SubPackageFeatureBlocksRoutes from './sub_package_feature_blocks.router'
import SubPackageFeatureBlockFieldsRoutes from './sub_package_feature_block_fields.router'
import SubPackageUserTiersRoutes from './sub_package_user_tiers.router'
import SubStoreDetailsRoutes from './sub_store_details.router'
import TimezonesRoutes from './timezones.router'
import UsersRoutes from './users.router'
import UserAlertsRoutes from './user_alerts.router'
import UserAlertsTypeRoutes from './user_alerts_type.router'
import UserAutogenerateReportsRoutes from './user_autogenerate_reports.router'
import UserBranchesRoutes from './user_branches.router'
import UserCustomerStatusRoutes from './user_customer_status.router'
import UserDefaultFiltersRoutes from './user_default_filters.router'
import UserFiltersRoutes from './user_filters.router'
import UserIconSequencesRoutes from './user_icon_sequences.router'
import UserSalesAgentsRoutes from './user_sales_agents.router'
import UserServiceTicketTypesRoutes from './user_service_ticket_types.router'
import UserTiersRoutes from './user_tiers.router'
import VerifoneEndpointsRoutes from './verifone_endpoints.router'
import VerifoneLogsRoutes from './verifone_logs.router'
import WizardContentsRoutes from './wizard_contents.router'
import CpanelsRoutes from './cpanels.router'
import CrmsRoutes from './crms.router'
import MasterPasswordsRoutes from './master_passwords.router'
import MigrationDetailsRoutes from './migration_details.router'
import SitesRoutes from './sites.router'
import SkeletonDetailsRoutes from './skeleton_details.router'

import type { FastifyInstance } from 'fastify'

export default async function registerRoutes(app: FastifyInstance) {
  await app.register(CommonRoutes)
  await app.register(AuthRoutes)
  await app.register(HealthRoutes)
  await app.register(AdminUsersRoutes)
  await app.register(AlertSystemsRoutes)
  await app.register(AlertSystemDetailsRoutes)
  await app.register(AssetsLogsRoutes)
  await app.register(BillingAddPackageRoutes)
  await app.register(BillingCancelPackageRoutes)
  await app.register(BillingHistoryRoutes)
  await app.register(BranchesRoutes)
  await app.register(BusinessHoursRoutes)
  await app.register(CountriesRoutes)
  await app.register(CpanelCompaniesRoutes)
  await app.register(CpanelModulesRoutes)
  await app.register(CrmCronsRoutes)
  await app.register(CrmCronLogsRoutes)
  await app.register(CrmEmailConfigRoutes)
  await app.register(CrmEmailLogsRoutes)
  await app.register(CrmEmailTemplatesRoutes)
  await app.register(CrmModulesRoutes)
  await app.register(CrmModuleBlocksRoutes)
  await app.register(CrmPagesRoutes)
  await app.register(CrmResourceFilesRoutes)
  await app.register(CrmResourceFoldersRoutes)
  await app.register(CrmSystemUpdatesRoutes)
  await app.register(CrmUserModulesRoutes)
  await app.register(CrmUserModuleBlocksRoutes)
  await app.register(CronsRoutes)
  await app.register(CurrenciesRoutes)
  await app.register(CustomersRoutes)
  await app.register(CustomerDevicesRoutes)
  await app.register(CustomerDiscountsRoutes)
  await app.register(CustomerDocumentsRoutes)
  await app.register(CustomerExportTemplatesRoutes)
  await app.register(CustomerExportTemplatesFieldsRoutes)
  await app.register(CustomerNotesRoutes)
  await app.register(CustomerNumbersRoutes)
  await app.register(CustomerSalesAgentsRoutes)
  await app.register(CustomerStatusRoutes)
  await app.register(CustomerStatusLogsRoutes)
  await app.register(CustomerStatusTimeLogsRoutes)
  await app.register(CustomModulesRoutes)
  await app.register(DateFormatsRoutes)
  await app.register(DevicesRoutes)
  await app.register(DocumentTypesRoutes)
  await app.register(EmailTemplateFieldsRoutes)
  await app.register(EmailTemplateModulesRoutes)
  await app.register(EnvironmentsRoutes)
  await app.register(FeatureFieldsRoutes)
  await app.register(FilterModulesRoutes)
  await app.register(FilterModuleFieldsRoutes)
  await app.register(HardwaresRoutes)
  await app.register(HardwareShippingAddressRoutes)
  await app.register(IndustriesRoutes)
  await app.register(IndustryCronsRoutes)
  await app.register(IndustryEnvironmentsRoutes)
  await app.register(IndustryModulesRoutes)
  await app.register(InstitutesRoutes)
  await app.register(InstituteAuditLogsRoutes)
  await app.register(InstituteDomainsRoutes)
  await app.register(InstituteSubscriptionsRoutes)
  await app.register(LanguagesRoutes)
  await app.register(MasterCredentialsRoutes)
  await app.register(MigrationDetailsRoutes)
  await app.register(ModulesRoutes)
  await app.register(ModuleBlocksRoutes)
  await app.register(ModuleFieldsRoutes)
  await app.register(PackagesRoutes)
  await app.register(PackageDiscountsRoutes)
  await app.register(PackageFeaturesRoutes)
  await app.register(PackageFeatureBlocksRoutes)
  await app.register(PackageFeatureBlockFieldsRoutes)
  await app.register(PackageRolesRoutes)
  await app.register(PackageRoleFeaturePermissionsRoutes)
  await app.register(PackageRoleMappingsRoutes)
  await app.register(PackageUserTiersRoutes)
  await app.register(PaxStoreLinksRoutes)
  await app.register(PrimaryServiceRequestsRoutes)
  await app.register(RolesRoutes)
  await app.register(RoleModulePermissionsRoutes)
  await app.register(RoleTemplatesRoutes)
  await app.register(RoleTemplateModulesRoutes)
  await app.register(SalesAgentsRoutes)
  await app.register(ServiceTicketsRoutes)
  await app.register(ServiceTicketCommentsRoutes)
  await app.register(ServiceTicketLogsRoutes)
  await app.register(ServiceTicketTypesRoutes)
  await app.register(ServiceTicketTypeLogsRoutes)
  await app.register(ServiceTicketUserContentsRoutes)
  await app.register(ShippingMethodsRoutes)
  await app.register(StatesRoutes)
  await app.register(SubsRoutes)
  await app.register(SubscriptionPlansRoutes)
  await app.register(SubCompaniesRoutes)
  await app.register(SubCronsRoutes)
  await app.register(SubModulesRoutes)
  await app.register(SubPackagesRoutes)
  await app.register(SubPackageFeaturesRoutes)
  await app.register(SubPackageFeatureBlocksRoutes)
  await app.register(SubPackageFeatureBlockFieldsRoutes)
  await app.register(SubPackageUserTiersRoutes)
  await app.register(SubStoreDetailsRoutes)
  await app.register(TimezonesRoutes)
  await app.register(UsersRoutes)
  await app.register(UserAlertsRoutes)
  await app.register(UserAlertsTypeRoutes)
  await app.register(UserAutogenerateReportsRoutes)
  await app.register(UserBranchesRoutes)
  await app.register(UserCustomerStatusRoutes)
  await app.register(UserDefaultFiltersRoutes)
  await app.register(UserFiltersRoutes)
  await app.register(UserIconSequencesRoutes)
  await app.register(UserSalesAgentsRoutes)
  await app.register(UserServiceTicketTypesRoutes)
  await app.register(UserTiersRoutes)
  await app.register(VerifoneEndpointsRoutes)
  await app.register(VerifoneLogsRoutes)
  await app.register(WizardContentsRoutes)
  await app.register(CpanelsRoutes)
  await app.register(CrmsRoutes)
  await app.register(MasterPasswordsRoutes)
  await app.register(SitesRoutes)
  await app.register(SkeletonDetailsRoutes)
}
