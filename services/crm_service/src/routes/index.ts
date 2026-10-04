import BillingRoutes from './billing.router'
import BranchesRoutes from './branches.router'
import CompanyRoutes from './company.router'
import CpanelUsersRoutes from './cpanel_users.router'
import CrmRolesRoutes from './crm_roles.router'
import CrmUsersRoutes from './crm_users.router'
import CustomersRoutes from './customers.router'
import EmailSettingsRoutes from './email_settings.router'
import EmailTemplatesRoutes from './email_templates.router'
import PackagesRoutes from './packages.router'
import ReportsRoutes from './reports.router'
import SalesAgentsRoutes from './sales_agents.router'
import SettingsRoutes from './settings.router'
import TenantOnboardRoutes from './tenant_onboard.router'

import type { FastifyInstance } from 'fastify'

export default async function registerRoutes(app: FastifyInstance) {
  await app.register(BillingRoutes)
  await app.register(BranchesRoutes)
  await app.register(CompanyRoutes)
  await app.register(CpanelUsersRoutes)
  await app.register(CrmRolesRoutes)
  await app.register(CrmUsersRoutes)
  await app.register(CustomersRoutes)
  await app.register(EmailSettingsRoutes)
  await app.register(EmailTemplatesRoutes)
  await app.register(PackagesRoutes)
  await app.register(ReportsRoutes)
  await app.register(SalesAgentsRoutes)
  await app.register(SettingsRoutes)
  await app.register(TenantOnboardRoutes)
}
