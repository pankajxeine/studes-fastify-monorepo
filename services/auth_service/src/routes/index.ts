import AuthRoutes from './auth.router'
import CommonRoutes from './common.router'
import HealthRoutes from './health.router'
import AdminUsersRoutes from './admin_users.router'
import CpanelCompaniesRoutes from './cpanel_companies.router'
import CustomersRoutes from './customers.router'
import CustomerDiscountsRoutes from './customer_discounts.router'
import CustomerDocumentsRoutes from './customer_documents.router'
import CustomerExportTemplatesRoutes from './customer_export_templates.router'
import CustomerExportTemplatesFieldsRoutes from './customer_export_templates_fields.router'
import CustomerNotesRoutes from './customer_notes.router'
import CustomerNumbersRoutes from './customer_numbers.router'
import CustomerStatusRoutes from './customer_status.router'
import CustomerStatusLogsRoutes from './customer_status_logs.router'
import CustomerStatusTimeLogsRoutes from './customer_status_time_logs.router'
import DocumentTypesRoutes from './document_types.router'
import EmailTemplateFieldsRoutes from './email_template_fields.router'
import EmailTemplateModulesRoutes from './email_template_modules.router'
import EnvironmentsRoutes from './environments.router'
import FeatureFieldsRoutes from './feature_fields.router'
import IndustriesRoutes from './industries.router'
import IndustryEnvironmentsRoutes from './industry_environments.router'
import IndustryModulesRoutes from './industry_modules.router'
import InstitutesRoutes from './institutes.router'
import InstituteAuditLogsRoutes from './institute_audit_logs.router'
import InstituteDomainsRoutes from './institute_domains.router'
import InstituteSubscriptionsRoutes from './institute_subscriptions.router'
import MasterCredentialsRoutes from './master_credentials.router'
import PackagesRoutes from './packages.router'
import PackageFeaturesRoutes from './package_features.router'
import PackageFeatureBlocksRoutes from './package_feature_blocks.router'
import PackageFeatureBlockFieldsRoutes from './package_feature_block_fields.router'
import PackageRolesRoutes from './package_roles.router'
import PackageRoleFeaturePermissionsRoutes from './package_role_feature_permissions.router'
import PackageRoleMappingsRoutes from './package_role_mappings.router'
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
import SubsRoutes from './subs.router'
import SubscriptionPlansRoutes from './subscription_plans.router'
import SubModulesRoutes from './sub_modules.router'
import SubPackagesRoutes from './sub_packages.router'
import SubPackageFeaturesRoutes from './sub_package_features.router'
import SubPackageFeatureBlocksRoutes from './sub_package_feature_blocks.router'
import SubPackageFeatureBlockFieldsRoutes from './sub_package_feature_block_fields.router'
import SubPackageUserTiersRoutes from './sub_package_user_tiers.router'
import CpanelsRoutes from './cpanels.router'
import CrmsRoutes from './crms.router'
import MasterPasswordsRoutes from './master_passwords.router'
import MigrationDetailsRoutes from './migration_details.router'
import SitesRoutes from './sites.router'
import SkeletonDetailsRoutes from './skeleton_details.router'

import type { FastifyInstance } from 'fastify'

export default async function registerRoutes(app: FastifyInstance) {
  await app.register(AuthRoutes)
  await app.register(CommonRoutes)
  await app.register(HealthRoutes)
  await app.register(AdminUsersRoutes)
  await app.register(CpanelCompaniesRoutes)
  await app.register(CustomersRoutes)
  await app.register(CustomerDiscountsRoutes)
  await app.register(CustomerDocumentsRoutes)
  await app.register(CustomerExportTemplatesRoutes)
  await app.register(CustomerExportTemplatesFieldsRoutes)
  await app.register(CustomerNotesRoutes)
  await app.register(CustomerNumbersRoutes)
  await app.register(CustomerStatusRoutes)
  await app.register(CustomerStatusLogsRoutes)
  await app.register(CustomerStatusTimeLogsRoutes)
  await app.register(DocumentTypesRoutes)
  await app.register(EmailTemplateFieldsRoutes)
  await app.register(EmailTemplateModulesRoutes)
  await app.register(EnvironmentsRoutes)
  await app.register(FeatureFieldsRoutes)
  await app.register(IndustriesRoutes)
  await app.register(IndustryEnvironmentsRoutes)
  await app.register(IndustryModulesRoutes)
  await app.register(InstitutesRoutes)
  await app.register(InstituteAuditLogsRoutes)
  await app.register(InstituteDomainsRoutes)
  await app.register(InstituteSubscriptionsRoutes)
  await app.register(MasterCredentialsRoutes)
  await app.register(PackagesRoutes)
  await app.register(PackageFeaturesRoutes)
  await app.register(PackageFeatureBlocksRoutes)
  await app.register(PackageFeatureBlockFieldsRoutes)
  await app.register(PackageRolesRoutes)
  await app.register(PackageRoleFeaturePermissionsRoutes)
  await app.register(PackageRoleMappingsRoutes)
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
  await app.register(SubsRoutes)
  await app.register(SubscriptionPlansRoutes)
  await app.register(SubModulesRoutes)
  await app.register(SubPackagesRoutes)
  await app.register(SubPackageFeaturesRoutes)
  await app.register(SubPackageFeatureBlocksRoutes)
  await app.register(SubPackageFeatureBlockFieldsRoutes)
  await app.register(SubPackageUserTiersRoutes)
  await app.register(CpanelsRoutes)
  await app.register(CrmsRoutes)
  await app.register(MasterPasswordsRoutes)
  await app.register(MigrationDetailsRoutes)
  await app.register(SitesRoutes)
  await app.register(SkeletonDetailsRoutes)
}
