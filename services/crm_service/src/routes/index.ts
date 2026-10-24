import ConsentRoutes from './audit/consent.router'
import DataAccessLogRoutes from './audit/data_access_log.router'
import EventRoutes from './audit/event.router'
import RetentionPolicyRoutes from './audit/retention_policy.router'
import SensitiveColumnRoutes from './audit/sensitive_column.router'
import AuthRoutes from './auth.router'
import BillingAccountRoutes from './billing/billing_account.router'
import CreditNoteRoutes from './billing/credit_note.router'
import DunningPolicyRoutes from './billing/dunning_policy.router'
import DunningRunRoutes from './billing/dunning_run.router'
import DunningStepRoutes from './billing/dunning_step.router'
import InvoiceLineRoutes from './billing/invoice_line.router'
import InvoiceRoutes from './billing/invoice.router'
import NumberSeriesRoutes from './billing/number_series.router'
import ApplicationRoutes from './catalog/application.router'
import FeatureRoutes from './catalog/feature.router'
import ModuleDependencyRoutes from './catalog/module_dependency.router'
import ModuleRoutes from './catalog/module.router'
import TenantRoleTemplateRoutes from './catalog/tenant_role_template.router'
import AddonItemRoutes from './commerce/addon_item.router'
import AddonPriceRoutes from './commerce/addon_price.router'
import AddonVersionRoutes from './commerce/addon_version.router'
import AddonRoutes from './commerce/addon.router'
import CouponRoutes from './commerce/coupon.router'
import PlanAddonRoutes from './commerce/plan_addon.router'
import PlanItemRoutes from './commerce/plan_item.router'
import PlanPriceRoutes from './commerce/plan_price.router'
import PlanVersionRoutes from './commerce/plan_version.router'
import PlanRoutes from './commerce/plan.router'
import PriceBookRoutes from './commerce/price_book.router'
import AgentPlanAssignmentRoutes from './commission/agent_plan_assignment.router'
import CommissionLedgerRoutes from './commission/commission_ledger.router'
import CommissionPlanRoutes from './commission/commission_plan.router'
import CommissionRuleRoutes from './commission/commission_rule.router'
import PayoutRoutes from './commission/payout.router'
import CommonRoutes from './common/common.router'
import AccountRoutes from './crm/account.router'
import ActivityRoutes from './crm/activity.router'
import CampaignRoutes from './crm/campaign.router'
import ContactRoutes from './crm/contact.router'
import LeadRoutes from './crm/lead.router'
import OpportunityRoutes from './crm/opportunity.router'
import QuoteLineRoutes from './crm/quote_line.router'
import QuoteRoutes from './crm/quote.router'
import EntitlementGrantRoutes from './entitlement/entitlement_grant.router'
import EntitlementOverrideRoutes from './entitlement/entitlement_override.router'
import EntitlementSnapshotRoutes from './entitlement/entitlement_snapshot.router'
import HealthRoutes from './health/health.router'
import AccessReviewItemRoutes from './iam/access_review_item.router'
import AccessReviewRoutes from './iam/access_review.router'
import ApiTokenRoutes from './iam/api_token.router'
import AppUserRoutes from './iam/app_user.router'
import LoginAttemptRoutes from './iam/login_attempt.router'
import MfaFactorRoutes from './iam/mfa_factor.router'
import PasswordResetTokenRoutes from './iam/password_reset_token.router'
import PermissionRoutes from './iam/permission.router'
import PrivilegedAccessRequestRoutes from './iam/privileged_access_request.router'
import RoleConflictRoutes from './iam/role_conflict.router'
import RolePermissionRoutes from './iam/role_permission.router'
import RoleRoutes from './iam/role.router'
import UserRoleRoutes from './iam/user_role.router'
import UserSessionRoutes from './iam/user_session.router'
import IdempotencyKeyRoutes from './integration/idempotency_key.router'
import InboxEventRoutes from './integration/inbox_event.router'
import OutboxEventRoutes from './integration/outbox_event.router'
import WebhookDeliveryRoutes from './integration/webhook_delivery.router'
import WebhookSubscriptionRoutes from './integration/webhook_subscription.router'
import MeterRoutes from './metering/meter.router'
import QuotaAlertRoutes from './metering/quota_alert.router'
import UsageCounterRoutes from './metering/usage_counter.router'
import UsageDedupRoutes from './metering/usage_dedup.router'
import UsageEventRoutes from './metering/usage_event.router'
import ChannelProviderRoutes from './notify/channel_provider.router'
import DeliveryAttemptRoutes from './notify/delivery_attempt.router'
import NotificationRoutes from './notify/notification.router'
import SuppressionRoutes from './notify/suppression.router'
import TemplateLocaleRoutes from './notify/template_locale.router'
import TemplateVersionRoutes from './notify/template_version.router'
import TemplateRoutes from './notify/template.router'
import ApprovalRuleRoutes from './onboarding/approval_rule.router'
import ApprovalRoutes from './onboarding/approval.router'
import ChecklistItemRoutes from './onboarding/checklist_item.router'
import KycDocumentRoutes from './onboarding/kyc_document.router'
import OnboardingRequestRoutes from './onboarding/onboarding_request.router'
import BranchRoutes from './org/branch.router'
import LegalEntityRoutes from './org/legal_entity.router'
import TeamMemberRoutes from './org/team_member.router'
import TeamRoutes from './org/team.router'
import TerritoryRoutes from './org/territory.router'
import AgentHierarchyRoutes from './partner/agent_hierarchy.router'
import SalesAgentRoutes from './partner/sales_agent.router'
import AcceptanceConfigurationRoutes from './payment/acceptance_configuration.router'
import AcceptanceModeRoutes from './payment/acceptance_mode.router'
import GatewayWebhookRoutes from './payment/gateway_webhook.router'
import MerchantAccountRoutes from './payment/merchant_account.router'
import OutletRoutes from './payment/outlet.router'
import PaymentAllocationRoutes from './payment/payment_allocation.router'
import PaymentMethodRoutes from './payment/payment_method.router'
import PaymentRoutes from './payment/payment.router'
import PosTerminalRoutes from './payment/pos_terminal.router'
import ReconciliationBatchRoutes from './payment/reconciliation_batch.router'
import ReconciliationItemRoutes from './payment/reconciliation_item.router'
import RefundRoutes from './payment/refund.router'
import CalendarRoutes from './platform/calendar.router'
import ConfigDefinitionRoutes from './platform/config_definition.router'
import CountryRoutes from './platform/country.router'
import CurrencyRoutes from './platform/currency.router'
import EnvironmentRoutes from './platform/environment.router'
import FeatureFlagRoutes from './platform/feature_flag.router'
import FxRateRoutes from './platform/fx_rate.router'
import HolidayRoutes from './platform/holiday.router'
import IndustryRoutes from './platform/industry.router'
import LookupTypeRoutes from './platform/lookup_type.router'
import LookupValueRoutes from './platform/lookup_value.router'
import RegionRoutes from './platform/region.router'
import SettingRoutes from './platform/setting.router'
import TaxJurisdictionRoutes from './platform/tax_jurisdiction.router'
import TaxRateRoutes from './platform/tax_rate.router'
import DeprovisionRequestRoutes from './provisioning/deprovision_request.router'
import JobStepTemplateRoutes from './provisioning/job_step_template.router'
import ProvisioningJobRoutes from './provisioning/provisioning_job.router'
import ProvisioningStepRoutes from './provisioning/provisioning_step.router'
import SubscriptionChangeRoutes from './subscription/subscription_change.router'
import SubscriptionDiscountRoutes from './subscription/subscription_discount.router'
import SubscriptionItemRoutes from './subscription/subscription_item.router'
import SubscriptionRoutes from './subscription/subscription.router'
import CsatResponseRoutes from './support/csat_response.router'
import EscalationRuleRoutes from './support/escalation_rule.router'
import KbArticleRoutes from './support/kb_article.router'
import QueueRoutes from './support/queue.router'
import SlaPolicyRoutes from './support/sla_policy.router'
import SlaTargetRoutes from './support/sla_target.router'
import TicketEscalationRoutes from './support/ticket_escalation.router'
import TicketMessageRoutes from './support/ticket_message.router'
import TicketRoutes from './support/ticket.router'
import StateTransitionRoutes from './sys/state_transition.router'
import ApiClientRoutes from './tenancy/api_client.router'
import LifecycleEventRoutes from './tenancy/lifecycle_event.router'
import TenantApplicationRoutes from './tenancy/tenant_application.router'
import TenantConfigRoutes from './tenancy/tenant_config.router'
import TenantContactRoutes from './tenancy/tenant_contact.router'
import TenantDomainRoutes from './tenancy/tenant_domain.router'
import TenantRoutes from './tenancy/tenant.router'

import type { FastifyInstance } from 'fastify'

export default async function registerRoutes(app: FastifyInstance) {
  await app.register(ConsentRoutes)
  await app.register(DataAccessLogRoutes)
  await app.register(EventRoutes)
  await app.register(RetentionPolicyRoutes)
  await app.register(SensitiveColumnRoutes)
  await app.register(AuthRoutes)
  await app.register(BillingAccountRoutes)
  await app.register(CreditNoteRoutes)
  await app.register(DunningPolicyRoutes)
  await app.register(DunningRunRoutes)
  await app.register(DunningStepRoutes)
  await app.register(InvoiceLineRoutes)
  await app.register(InvoiceRoutes)
  await app.register(NumberSeriesRoutes)
  await app.register(ApplicationRoutes)
  await app.register(FeatureRoutes)
  await app.register(ModuleDependencyRoutes)
  await app.register(ModuleRoutes)
  await app.register(TenantRoleTemplateRoutes)
  await app.register(AddonItemRoutes)
  await app.register(AddonPriceRoutes)
  await app.register(AddonVersionRoutes)
  await app.register(AddonRoutes)
  await app.register(CouponRoutes)
  await app.register(PlanAddonRoutes)
  await app.register(PlanItemRoutes)
  await app.register(PlanPriceRoutes)
  await app.register(PlanVersionRoutes)
  await app.register(PlanRoutes)
  await app.register(PriceBookRoutes)
  await app.register(AgentPlanAssignmentRoutes)
  await app.register(CommissionLedgerRoutes)
  await app.register(CommissionPlanRoutes)
  await app.register(CommissionRuleRoutes)
  await app.register(PayoutRoutes)
  await app.register(CommonRoutes)
  await app.register(AccountRoutes)
  await app.register(ActivityRoutes)
  await app.register(CampaignRoutes)
  await app.register(ContactRoutes)
  await app.register(LeadRoutes)
  await app.register(OpportunityRoutes)
  await app.register(QuoteLineRoutes)
  await app.register(QuoteRoutes)
  await app.register(EntitlementGrantRoutes)
  await app.register(EntitlementOverrideRoutes)
  await app.register(EntitlementSnapshotRoutes)
  await app.register(HealthRoutes)
  await app.register(AccessReviewItemRoutes)
  await app.register(AccessReviewRoutes)
  await app.register(ApiTokenRoutes)
  await app.register(AppUserRoutes)
  await app.register(LoginAttemptRoutes)
  await app.register(MfaFactorRoutes)
  await app.register(PasswordResetTokenRoutes)
  await app.register(PermissionRoutes)
  await app.register(PrivilegedAccessRequestRoutes)
  await app.register(RoleConflictRoutes)
  await app.register(RolePermissionRoutes)
  await app.register(RoleRoutes)
  await app.register(UserRoleRoutes)
  await app.register(UserSessionRoutes)
  await app.register(IdempotencyKeyRoutes)
  await app.register(InboxEventRoutes)
  await app.register(OutboxEventRoutes)
  await app.register(WebhookDeliveryRoutes)
  await app.register(WebhookSubscriptionRoutes)
  await app.register(MeterRoutes)
  await app.register(QuotaAlertRoutes)
  await app.register(UsageCounterRoutes)
  await app.register(UsageDedupRoutes)
  await app.register(UsageEventRoutes)
  await app.register(ChannelProviderRoutes)
  await app.register(DeliveryAttemptRoutes)
  await app.register(NotificationRoutes)
  await app.register(SuppressionRoutes)
  await app.register(TemplateLocaleRoutes)
  await app.register(TemplateVersionRoutes)
  await app.register(TemplateRoutes)
  await app.register(ApprovalRuleRoutes)
  await app.register(ApprovalRoutes)
  await app.register(ChecklistItemRoutes)
  await app.register(KycDocumentRoutes)
  await app.register(OnboardingRequestRoutes)
  await app.register(BranchRoutes)
  await app.register(LegalEntityRoutes)
  await app.register(TeamMemberRoutes)
  await app.register(TeamRoutes)
  await app.register(TerritoryRoutes)
  await app.register(AgentHierarchyRoutes)
  await app.register(SalesAgentRoutes)
  await app.register(AcceptanceConfigurationRoutes)
  await app.register(AcceptanceModeRoutes)
  await app.register(GatewayWebhookRoutes)
  await app.register(MerchantAccountRoutes)
  await app.register(OutletRoutes)
  await app.register(PaymentAllocationRoutes)
  await app.register(PaymentMethodRoutes)
  await app.register(PaymentRoutes)
  await app.register(PosTerminalRoutes)
  await app.register(ReconciliationBatchRoutes)
  await app.register(ReconciliationItemRoutes)
  await app.register(RefundRoutes)
  await app.register(CalendarRoutes)
  await app.register(ConfigDefinitionRoutes)
  await app.register(CountryRoutes)
  await app.register(CurrencyRoutes)
  await app.register(EnvironmentRoutes)
  await app.register(FeatureFlagRoutes)
  await app.register(FxRateRoutes)
  await app.register(HolidayRoutes)
  await app.register(IndustryRoutes)
  await app.register(LookupTypeRoutes)
  await app.register(LookupValueRoutes)
  await app.register(RegionRoutes)
  await app.register(SettingRoutes)
  await app.register(TaxJurisdictionRoutes)
  await app.register(TaxRateRoutes)
  await app.register(DeprovisionRequestRoutes)
  await app.register(JobStepTemplateRoutes)
  await app.register(ProvisioningJobRoutes)
  await app.register(ProvisioningStepRoutes)
  await app.register(SubscriptionChangeRoutes)
  await app.register(SubscriptionDiscountRoutes)
  await app.register(SubscriptionItemRoutes)
  await app.register(SubscriptionRoutes)
  await app.register(CsatResponseRoutes)
  await app.register(EscalationRuleRoutes)
  await app.register(KbArticleRoutes)
  await app.register(QueueRoutes)
  await app.register(SlaPolicyRoutes)
  await app.register(SlaTargetRoutes)
  await app.register(TicketEscalationRoutes)
  await app.register(TicketMessageRoutes)
  await app.register(TicketRoutes)
  await app.register(StateTransitionRoutes)
  await app.register(ApiClientRoutes)
  await app.register(LifecycleEventRoutes)
  await app.register(TenantApplicationRoutes)
  await app.register(TenantConfigRoutes)
  await app.register(TenantContactRoutes)
  await app.register(TenantDomainRoutes)
  await app.register(TenantRoutes)
}
