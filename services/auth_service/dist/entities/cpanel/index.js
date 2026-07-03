"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initGeneratedEntities = initGeneratedEntities;
const admin_users_entity_1 = require("./admin_users/admin_users.entity");
const cpanel_companies_entity_1 = require("./cpanel_companies/cpanel_companies.entity");
const customer_discounts_entity_1 = require("./customer_discounts/customer_discounts.entity");
const customer_documents_entity_1 = require("./customer_documents/customer_documents.entity");
const customer_export_templates_entity_1 = require("./customer_export_templates/customer_export_templates.entity");
const customer_export_templates_fields_entity_1 = require("./customer_export_templates_fields/customer_export_templates_fields.entity");
const customer_notes_entity_1 = require("./customer_notes/customer_notes.entity");
const customer_numbers_entity_1 = require("./customer_numbers/customer_numbers.entity");
const customer_status_entity_1 = require("./customer_status/customer_status.entity");
const customer_status_logs_entity_1 = require("./customer_status_logs/customer_status_logs.entity");
const customer_status_time_logs_entity_1 = require("./customer_status_time_logs/customer_status_time_logs.entity");
const customers_entity_1 = require("./customers/customers.entity");
const document_types_entity_1 = require("./document_types/document_types.entity");
const email_template_fields_entity_1 = require("./email_template_fields/email_template_fields.entity");
const email_template_modules_entity_1 = require("./email_template_modules/email_template_modules.entity");
const environments_entity_1 = require("./environments/environments.entity");
const feature_fields_entity_1 = require("./feature_fields/feature_fields.entity");
const industries_entity_1 = require("./industries/industries.entity");
const industry_environments_entity_1 = require("./industry_environments/industry_environments.entity");
const industry_modules_entity_1 = require("./industry_modules/industry_modules.entity");
const institute_audit_logs_entity_1 = require("./institute_audit_logs/institute_audit_logs.entity");
const institute_domains_entity_1 = require("./institute_domains/institute_domains.entity");
const institute_subscriptions_entity_1 = require("./institute_subscriptions/institute_subscriptions.entity");
const institutes_entity_1 = require("./institutes/institutes.entity");
const master_credentials_entity_1 = require("./master_credentials/master_credentials.entity");
const package_feature_block_fields_entity_1 = require("./package_feature_block_fields/package_feature_block_fields.entity");
const package_feature_blocks_entity_1 = require("./package_feature_blocks/package_feature_blocks.entity");
const package_features_entity_1 = require("./package_features/package_features.entity");
const package_role_feature_permissions_entity_1 = require("./package_role_feature_permissions/package_role_feature_permissions.entity");
const package_role_mappings_entity_1 = require("./package_role_mappings/package_role_mappings.entity");
const package_roles_entity_1 = require("./package_roles/package_roles.entity");
const packages_entity_1 = require("./packages/packages.entity");
const role_module_permissions_entity_1 = require("./role_module_permissions/role_module_permissions.entity");
const role_template_modules_entity_1 = require("./role_template_modules/role_template_modules.entity");
const role_templates_entity_1 = require("./role_templates/role_templates.entity");
const roles_entity_1 = require("./roles/roles.entity");
const sales_agents_entity_1 = require("./sales_agents/sales_agents.entity");
const service_ticket_comments_entity_1 = require("./service_ticket_comments/service_ticket_comments.entity");
const service_ticket_logs_entity_1 = require("./service_ticket_logs/service_ticket_logs.entity");
const service_ticket_type_logs_entity_1 = require("./service_ticket_type_logs/service_ticket_type_logs.entity");
const service_ticket_types_entity_1 = require("./service_ticket_types/service_ticket_types.entity");
const service_ticket_user_contents_entity_1 = require("./service_ticket_user_contents/service_ticket_user_contents.entity");
const service_tickets_entity_1 = require("./service_tickets/service_tickets.entity");
const sub_modules_entity_1 = require("./sub_modules/sub_modules.entity");
const sub_package_feature_block_fields_entity_1 = require("./sub_package_feature_block_fields/sub_package_feature_block_fields.entity");
const sub_package_feature_blocks_entity_1 = require("./sub_package_feature_blocks/sub_package_feature_blocks.entity");
const sub_package_features_entity_1 = require("./sub_package_features/sub_package_features.entity");
const sub_package_user_tiers_entity_1 = require("./sub_package_user_tiers/sub_package_user_tiers.entity");
const sub_packages_entity_1 = require("./sub_packages/sub_packages.entity");
const subs_entity_1 = require("./subs/subs.entity");
const subscription_plans_entity_1 = require("./subscription_plans/subscription_plans.entity");
function initGeneratedEntities(sequelize) {
    return {
        models: {
            admin_users: (0, admin_users_entity_1.initAdminUsersEntity)(sequelize),
            cpanel_companies: (0, cpanel_companies_entity_1.initCpanelCompaniesEntity)(sequelize),
            customer_discounts: (0, customer_discounts_entity_1.initCustomerDiscountsEntity)(sequelize),
            customer_documents: (0, customer_documents_entity_1.initCustomerDocumentsEntity)(sequelize),
            customer_export_templates: (0, customer_export_templates_entity_1.initCustomerExportTemplatesEntity)(sequelize),
            customer_export_templates_fields: (0, customer_export_templates_fields_entity_1.initCustomerExportTemplatesFieldsEntity)(sequelize),
            customer_notes: (0, customer_notes_entity_1.initCustomerNotesEntity)(sequelize),
            customer_numbers: (0, customer_numbers_entity_1.initCustomerNumbersEntity)(sequelize),
            customer_status: (0, customer_status_entity_1.initCustomerStatusEntity)(sequelize),
            customer_status_logs: (0, customer_status_logs_entity_1.initCustomerStatusLogsEntity)(sequelize),
            customer_status_time_logs: (0, customer_status_time_logs_entity_1.initCustomerStatusTimeLogsEntity)(sequelize),
            customers: (0, customers_entity_1.initCustomersEntity)(sequelize),
            document_types: (0, document_types_entity_1.initDocumentTypesEntity)(sequelize),
            email_template_fields: (0, email_template_fields_entity_1.initEmailTemplateFieldsEntity)(sequelize),
            email_template_modules: (0, email_template_modules_entity_1.initEmailTemplateModulesEntity)(sequelize),
            environments: (0, environments_entity_1.initEnvironmentsEntity)(sequelize),
            feature_fields: (0, feature_fields_entity_1.initFeatureFieldsEntity)(sequelize),
            industries: (0, industries_entity_1.initIndustriesEntity)(sequelize),
            industry_environments: (0, industry_environments_entity_1.initIndustryEnvironmentsEntity)(sequelize),
            industry_modules: (0, industry_modules_entity_1.initIndustryModulesEntity)(sequelize),
            institute_audit_logs: (0, institute_audit_logs_entity_1.initInstituteAuditLogsEntity)(sequelize),
            institute_domains: (0, institute_domains_entity_1.initInstituteDomainsEntity)(sequelize),
            institute_subscriptions: (0, institute_subscriptions_entity_1.initInstituteSubscriptionsEntity)(sequelize),
            institutes: (0, institutes_entity_1.initInstitutesEntity)(sequelize),
            master_credentials: (0, master_credentials_entity_1.initMasterCredentialsEntity)(sequelize),
            package_feature_block_fields: (0, package_feature_block_fields_entity_1.initPackageFeatureBlockFieldsEntity)(sequelize),
            package_feature_blocks: (0, package_feature_blocks_entity_1.initPackageFeatureBlocksEntity)(sequelize),
            package_features: (0, package_features_entity_1.initPackageFeaturesEntity)(sequelize),
            package_role_feature_permissions: (0, package_role_feature_permissions_entity_1.initPackageRoleFeaturePermissionsEntity)(sequelize),
            package_role_mappings: (0, package_role_mappings_entity_1.initPackageRoleMappingsEntity)(sequelize),
            package_roles: (0, package_roles_entity_1.initPackageRolesEntity)(sequelize),
            packages: (0, packages_entity_1.initPackagesEntity)(sequelize),
            role_module_permissions: (0, role_module_permissions_entity_1.initRoleModulePermissionsEntity)(sequelize),
            role_template_modules: (0, role_template_modules_entity_1.initRoleTemplateModulesEntity)(sequelize),
            role_templates: (0, role_templates_entity_1.initRoleTemplatesEntity)(sequelize),
            roles: (0, roles_entity_1.initRolesEntity)(sequelize),
            sales_agents: (0, sales_agents_entity_1.initSalesAgentsEntity)(sequelize),
            service_ticket_comments: (0, service_ticket_comments_entity_1.initServiceTicketCommentsEntity)(sequelize),
            service_ticket_logs: (0, service_ticket_logs_entity_1.initServiceTicketLogsEntity)(sequelize),
            service_ticket_type_logs: (0, service_ticket_type_logs_entity_1.initServiceTicketTypeLogsEntity)(sequelize),
            service_ticket_types: (0, service_ticket_types_entity_1.initServiceTicketTypesEntity)(sequelize),
            service_ticket_user_contents: (0, service_ticket_user_contents_entity_1.initServiceTicketUserContentsEntity)(sequelize),
            service_tickets: (0, service_tickets_entity_1.initServiceTicketsEntity)(sequelize),
            sub_modules: (0, sub_modules_entity_1.initSubModulesEntity)(sequelize),
            sub_package_feature_block_fields: (0, sub_package_feature_block_fields_entity_1.initSubPackageFeatureBlockFieldsEntity)(sequelize),
            sub_package_feature_blocks: (0, sub_package_feature_blocks_entity_1.initSubPackageFeatureBlocksEntity)(sequelize),
            sub_package_features: (0, sub_package_features_entity_1.initSubPackageFeaturesEntity)(sequelize),
            sub_package_user_tiers: (0, sub_package_user_tiers_entity_1.initSubPackageUserTiersEntity)(sequelize),
            sub_packages: (0, sub_packages_entity_1.initSubPackagesEntity)(sequelize),
            subs: (0, subs_entity_1.initSubsEntity)(sequelize),
            subscription_plans: (0, subscription_plans_entity_1.initSubscriptionPlansEntity)(sequelize)
        }
    };
}
