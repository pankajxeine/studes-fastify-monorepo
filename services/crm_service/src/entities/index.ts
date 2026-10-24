import type { FastifyInstance } from 'fastify'
import type { Sequelize } from 'sequelize'
import { createGeneratedModels as createAuditModels, associateGeneratedModels as associateAuditModels, type GeneratedModels as AuditModels } from './audit'
import { createGeneratedModels as createBillingModels, associateGeneratedModels as associateBillingModels, type GeneratedModels as BillingModels } from './billing'
import { createGeneratedModels as createCatalogModels, associateGeneratedModels as associateCatalogModels, type GeneratedModels as CatalogModels } from './catalog'
import { createGeneratedModels as createCommerceModels, associateGeneratedModels as associateCommerceModels, type GeneratedModels as CommerceModels } from './commerce'
import { createGeneratedModels as createCommissionModels, associateGeneratedModels as associateCommissionModels, type GeneratedModels as CommissionModels } from './commission'
import { createGeneratedModels as createCrmModels, associateGeneratedModels as associateCrmModels, type GeneratedModels as CrmModels } from './crm'
import { createGeneratedModels as createEntitlementModels, associateGeneratedModels as associateEntitlementModels, type GeneratedModels as EntitlementModels } from './entitlement'
import { createGeneratedModels as createIamModels, associateGeneratedModels as associateIamModels, type GeneratedModels as IamModels } from './iam'
import { createGeneratedModels as createIntegrationModels, associateGeneratedModels as associateIntegrationModels, type GeneratedModels as IntegrationModels } from './integration'
import { createGeneratedModels as createMeteringModels, associateGeneratedModels as associateMeteringModels, type GeneratedModels as MeteringModels } from './metering'
import { createGeneratedModels as createNotifyModels, associateGeneratedModels as associateNotifyModels, type GeneratedModels as NotifyModels } from './notify'
import { createGeneratedModels as createOnboardingModels, associateGeneratedModels as associateOnboardingModels, type GeneratedModels as OnboardingModels } from './onboarding'
import { createGeneratedModels as createOrgModels, associateGeneratedModels as associateOrgModels, type GeneratedModels as OrgModels } from './org'
import { createGeneratedModels as createPartnerModels, associateGeneratedModels as associatePartnerModels, type GeneratedModels as PartnerModels } from './partner'
import { createGeneratedModels as createPaymentModels, associateGeneratedModels as associatePaymentModels, type GeneratedModels as PaymentModels } from './payment'
import { createGeneratedModels as createPlatformModels, associateGeneratedModels as associatePlatformModels, type GeneratedModels as PlatformModels } from './platform'
import { createGeneratedModels as createProvisioningModels, associateGeneratedModels as associateProvisioningModels, type GeneratedModels as ProvisioningModels } from './provisioning'
import { createGeneratedModels as createSubscriptionModels, associateGeneratedModels as associateSubscriptionModels, type GeneratedModels as SubscriptionModels } from './subscription'
import { createGeneratedModels as createSupportModels, associateGeneratedModels as associateSupportModels, type GeneratedModels as SupportModels } from './support'
import { createGeneratedModels as createSysModels, associateGeneratedModels as associateSysModels, type GeneratedModels as SysModels } from './sys'
import { createGeneratedModels as createTenancyModels, associateGeneratedModels as associateTenancyModels, type GeneratedModels as TenancyModels } from './tenancy'

export type GeneratedEntityDecorations =
  AuditModels &
  BillingModels &
  CatalogModels &
  CommerceModels &
  CommissionModels &
  CrmModels &
  EntitlementModels &
  IamModels &
  IntegrationModels &
  MeteringModels &
  NotifyModels &
  OnboardingModels &
  OrgModels &
  PartnerModels &
  PaymentModels &
  PlatformModels &
  ProvisioningModels &
  SubscriptionModels &
  SupportModels &
  SysModels &
  TenancyModels

export function registerGeneratedEntityDecorators(app: FastifyInstance, sequelize: Sequelize): GeneratedEntityDecorations {
  const auditModels = createAuditModels(sequelize)
  const billingModels = createBillingModels(sequelize)
  const catalogModels = createCatalogModels(sequelize)
  const commerceModels = createCommerceModels(sequelize)
  const commissionModels = createCommissionModels(sequelize)
  const crmModels = createCrmModels(sequelize)
  const entitlementModels = createEntitlementModels(sequelize)
  const iamModels = createIamModels(sequelize)
  const integrationModels = createIntegrationModels(sequelize)
  const meteringModels = createMeteringModels(sequelize)
  const notifyModels = createNotifyModels(sequelize)
  const onboardingModels = createOnboardingModels(sequelize)
  const orgModels = createOrgModels(sequelize)
  const partnerModels = createPartnerModels(sequelize)
  const paymentModels = createPaymentModels(sequelize)
  const platformModels = createPlatformModels(sequelize)
  const provisioningModels = createProvisioningModels(sequelize)
  const subscriptionModels = createSubscriptionModels(sequelize)
  const supportModels = createSupportModels(sequelize)
  const sysModels = createSysModels(sequelize)
  const tenancyModels = createTenancyModels(sequelize)
  associateAuditModels(auditModels)
  associateBillingModels(billingModels)
  associateCatalogModels(catalogModels)
  associateCommerceModels(commerceModels)
  associateCommissionModels(commissionModels)
  associateCrmModels(crmModels)
  associateEntitlementModels(entitlementModels)
  associateIamModels(iamModels)
  associateIntegrationModels(integrationModels)
  associateMeteringModels(meteringModels)
  associateNotifyModels(notifyModels)
  associateOnboardingModels(onboardingModels)
  associateOrgModels(orgModels)
  associatePartnerModels(partnerModels)
  associatePaymentModels(paymentModels)
  associatePlatformModels(platformModels)
  associateProvisioningModels(provisioningModels)
  associateSubscriptionModels(subscriptionModels)
  associateSupportModels(supportModels)
  associateSysModels(sysModels)
  associateTenancyModels(tenancyModels)
  const models: GeneratedEntityDecorations = {
    ...auditModels,
    ...billingModels,
    ...catalogModels,
    ...commerceModels,
    ...commissionModels,
    ...crmModels,
    ...entitlementModels,
    ...iamModels,
    ...integrationModels,
    ...meteringModels,
    ...notifyModels,
    ...onboardingModels,
    ...orgModels,
    ...partnerModels,
    ...paymentModels,
    ...platformModels,
    ...provisioningModels,
    ...subscriptionModels,
    ...supportModels,
    ...sysModels,
    ...tenancyModels
  }
  app.decorate('models', models)

  return models
}

declare module 'fastify' {
  interface FastifyInstance {
    models: GeneratedEntityDecorations
  }
}
