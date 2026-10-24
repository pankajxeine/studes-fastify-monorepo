import fp from 'fastify-plugin';
import { z } from 'zod';
import { BadRequestError, UnauthorizedError } from '../core';
import { jwtAuthGuard } from '../core/middleware/jwtAuth';
import { sequelize } from './db';
import { DataTypes, Op } from 'sequelize';
import { registerGeneratedEntityDecorators } from '../entities';
import { AdminAuthService } from '../services/auth/AdminAuthService'
import { ForbiddenError } from '../core/errors/http-errors'

const tenantConfigSchema = z.object({
  isPublic: z.boolean().optional().default(false),
  requireTenant: z.boolean().optional().default(true),
  adminPermission: z.string().optional(),
  adminPermissionModule: z.string().optional(),
  adminScopeType: z.string().optional(),
  adminScopeIdParam: z.string().optional(),
});

export default fp(async (app) => {
  app.decorateRequest('tenant', null);
  app.decorateRequest('tenantModels', null);
  app.decorateRequest('dbSchema', null);
  app.decorateRequest('routerDbSchema', 'default_cpanel_route');
  app.decorate('db', null);

  await Object.defineProperty(app, 'db', {
    get() { return sequelize; }
  });

  registerGeneratedEntityDecorators(app, sequelize);
  const adminAuth = new AdminAuthService()

  app.addHook('onRequest', async (request, reply) => {
    const config = tenantConfigSchema.parse(request.routeOptions.config ?? {});

    request.dbSchema = app.env.DEFAULT_CPANEL_SCHEMA;
    request.routerDbSchema = app.env.DEFAULT_CPANEL_ROUTE_SCHEMA;

    let tokenClaims: { tenantId?: string; tenantSlug?: string; audience?: string; sub?: string } | undefined;
    if (config.isPublic !== true) {
      await jwtAuthGuard(request, reply);
      tokenClaims = request.user as typeof tokenClaims;
      if (tokenClaims?.audience !== 'admin') {
        throw new UnauthorizedError('This service only accepts authenticated CRM administrator sessions')
      }
      request.userType = 'admin'
      const session = await adminAuth.authenticateRequest(app, request)
      const permission = config.adminPermission ?? inferAdminPermission(request.routeOptions.url, request.method, config.adminPermissionModule)
      const scopeType = config.adminScopeType ?? 'global'
      const rawScopeId = config.adminScopeIdParam
        ? (request.params as Record<string, string> | undefined)?.[config.adminScopeIdParam]
        : null
      if (scopeType !== 'global' && (!rawScopeId || !/^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(rawScopeId))) {
        throw new ForbiddenError('A valid authorization scope is required')
      }
      await adminAuth.authorize(app, session.app_user_id, permission, scopeType, rawScopeId ?? null)
    } else {
      return
    }

    if (!config.requireTenant || tokenClaims?.audience === 'admin') {
      return;
    }

    const headerName = (app.env?.TENANT_HEADER_NAME ?? process.env.TENANT_HEADER_NAME ?? 'x-tenant-id').toLowerCase();
    const headerSlugName = (app.env?.TENANT_HEADER_SLUG_NAME ?? process.env.TENANT_HEADER_SLUG_NAME ?? 'x-tenant-slug').toLowerCase();
    const precedence = (app.env?.TENANT_HEADER_PRECEDENCE ?? process.env.TENANT_HEADER_PRECEDENCE ?? 'header_then_subdomain') as
      | 'header_then_subdomain'
      | 'subdomain_then_header';

    const headerTenantId = request.headers[headerName] as string | undefined;
    const headerTenantSlug = request.headers[headerSlugName] as string | undefined;
    const hostname = (request.hostname || '').toLowerCase();
    const baseDomain = (app.env?.TENANT_BASE_DOMAIN ?? process.env.TENANT_BASE_DOMAIN ?? 'localtest.me').toLowerCase();

    let tenantIdOrSlug: string | undefined;
    let from: 'token' | 'header' | 'subdomain' | undefined;

    const subdomain = hostname.endsWith(`.${baseDomain}`)
      ? hostname.slice(0, -1 * (baseDomain.length + 1))
      : undefined;

    const tokenTenant = tokenClaims?.tenantId || tokenClaims?.tenantSlug;
    if (tokenTenant) {
      tenantIdOrSlug = tokenTenant;
      from = 'token';
    } else if (precedence === 'header_then_subdomain') {
      tenantIdOrSlug = headerTenantId || headerTenantSlug || subdomain;
      from = headerTenantId || headerTenantSlug ? 'header' : subdomain ? 'subdomain' : undefined;
    } else {
      tenantIdOrSlug = subdomain || headerTenantId || headerTenantSlug;
      from = subdomain ? 'subdomain' : headerTenantId || headerTenantSlug ? 'header' : undefined;
    }

    if (!tenantIdOrSlug) {
      request.log.warn({ headerName, headerSlugName, hostname, baseDomain }, 'tenant resolution failed: tenant not specified');
      reply.code(400);
      throw new BadRequestError('Tenant not specified');
    }

    request.log.info({ tenantIdOrSlug, resolvedBy: from, hostname }, 'tenant resolution started');

    // Lookup tenant in central "tenants" table (shared schema)
    const Tenant = sequelize.define(
      'Tenant',
      {
        id: { type: DataTypes.STRING, primaryKey: true },
        slug: { type: DataTypes.STRING },
        schema_name: { type: DataTypes.STRING },
      },
      { tableName: 'tenants', schema: 'public', timestamps: false }
    );

    const tenant = await Tenant.findOne({
      where: { [Op.or]: [{ id: tenantIdOrSlug }, { slug: tenantIdOrSlug }] },
    });

    if (!tenant) {
      request.log.warn({ tenantIdOrSlug }, 'tenant resolution failed: tenant not found');
      reply.code(404);
      throw new Error('Tenant not found');
    }

    request.tenant = {
      id: tenant.getDataValue('id'),
      slug: tenant.getDataValue('slug'),
      resolvedBy: from ?? 'header',
    };
    request.dbSchema = tenant.getDataValue('schema_name');

    request.log.info(
      { tenantId: tenant.getDataValue('id'), tenantSlug: tenant.getDataValue('slug'), resolvedBy: from },
      'tenant resolved'
    );
  });

  app.addHook('onClose', async () => {
    await sequelize.close();
  });
});

declare module 'fastify' {
  interface FastifyInstance {
    db: typeof sequelize | null;
  }
  interface FastifyRequest {
    dbSchema: string | null;
    routerDbSchema: string;
    tenant: null | {
      id: string;
      slug: string;
      resolvedBy: 'token' | 'header' | 'subdomain';
    };
    userType: string | null;
  }

  interface FastifyRouteConfig {
    isPublic?: boolean;
    requireTenant?: boolean;
    /** Permission code module.resource.action. Defaults are inferred from the route and HTTP method. */
    adminPermission?: string;
    /** Optional module override for inferred permission codes. */
    adminPermissionModule?: string;
    /** IAM scope to authorize against; defaults to global. */
    adminScopeType?: string;
    /** Route parameter containing the UUID scope ID for non-global authorization. */
    adminScopeIdParam?: string;
  }
}

const IAM_RESOURCES = new Set(['app_user', 'role', 'permission', 'user_role', 'role_permission', 'user_session', 'mfa_factor', 'api_token', 'login_attempt', 'access_review', 'access_review_item', 'privileged_access_request', 'role_conflict', 'password_reset_token'])
const TENANCY_RESOURCES = new Set(['tenant', 'tenant_application', 'tenant_config', 'tenant_contact', 'tenant_domain', 'lifecycle_event', 'api_client'])
const BILLING_RESOURCES = new Set(['invoice', 'invoice_line', 'credit_note', 'billing_account', 'billing_history', 'dunning_policy', 'dunning_run', 'dunning_step', 'number_series'])
const RESOURCE_MODULES: Record<string, string> = Object.fromEntries([
  ['catalog', ['application', 'feature', 'module', 'module_dependency', 'tenant_role_template']],
  ['commerce', ['addon', 'addon_item', 'addon_price', 'addon_version', 'coupon', 'plan', 'plan_addon', 'plan_item', 'plan_price', 'plan_version', 'price_book']],
  ['commission', ['agent_plan_assignment', 'commission_ledger', 'commission_plan', 'commission_rule', 'payout']],
  ['partner', ['agent_hierarchy', 'sales_agent']],
  ['payment', ['acceptance_configuration', 'acceptance_mode', 'gateway_webhook', 'merchant_account', 'outlet', 'payment', 'payment_allocation', 'payment_method', 'pos_terminal', 'reconciliation_batch', 'reconciliation_item', 'refund']],
  ['support', ['csat_response', 'escalation_rule', 'kb_article', 'queue', 'sla_policy', 'sla_target', 'ticket', 'ticket_escalation', 'ticket_message']],
  ['subscription', ['subscription', 'subscription_change', 'subscription_discount', 'subscription_item', 'subscription_plan']],
  ['entitlement', ['entitlement_grant', 'entitlement_override', 'entitlement_snapshot']],
  ['metering', ['meter', 'quota_alert', 'usage_counter', 'usage_dedup', 'usage_event']],
  ['onboarding', ['approval', 'checklist_item', 'kyc_document', 'onboarding_request']],
  ['provisioning', ['deprovision_request', 'job_step_template', 'provisioning_job', 'provisioning_step']],
  ['org', ['branch', 'legal_entity', 'team', 'team_member', 'territory']],
  ['platform', ['config_definition', 'environment', 'feature_flag', 'fx_rate', 'holiday', 'lookup_type', 'lookup_value', 'region', 'setting', 'tax_jurisdiction', 'tax_rate']],
  ['audit', ['consent', 'data_access_log', 'event', 'retention_policy', 'sensitive_column']],
  ['integration', ['idempotency_key', 'inbox_event', 'outbox_event', 'webhook_delivery', 'webhook_subscription']],
  ['notify', ['channel_provider', 'delivery_attempt', 'notification', 'suppression', 'template', 'template_locale', 'template_version']],
  ['sys', ['state_transition']]
].flatMap(([module, resources]) => (resources as string[]).map(resource => [resource, module as string] as const)))

function inferAdminPermission(url: string | undefined, method: string, moduleOverride?: string) {
  const resource = (url ?? '').split('?')[0].split('/').filter(Boolean)[0]?.replace(/^:/, '')
  if (!resource || resource.startsWith(':')) throw new ForbiddenError('Route is missing CRM authorization metadata')
  const module = moduleOverride ?? (IAM_RESOURCES.has(resource) ? 'iam' : TENANCY_RESOURCES.has(resource) ? 'tenancy' : BILLING_RESOURCES.has(resource) ? 'billing' : RESOURCE_MODULES[resource] ?? 'crm')
  const action = method === 'GET' || method === 'HEAD' ? 'read' : method === 'POST' ? 'create' : method === 'DELETE' ? 'delete' : 'update'
  return `${module}.${resource}.${action}`
}
