import type { HealthResponse } from '../types/HealthResponse'
import type { GatewayServiceHealth } from '../types/GatewayServiceHealth'
import type { GatewayServicesHealth } from '../types/GatewayServicesHealth'
import type { RegisterRequest } from '../types/RegisterRequest'
import type { LoginRequest } from '../types/LoginRequest'
import type { LoginResponse } from '../types/LoginResponse'
import type { AuthUser } from '../types/AuthUser'
import type { CreateTenantRequest } from '../types/CreateTenantRequest'
import type { Tenant } from '../types/Tenant'
import type { InvoiceCreateRequest } from '../types/InvoiceCreateRequest'
import type { Invoice } from '../types/Invoice'
import type { InvoiceList } from '../types/InvoiceList'
import type { NotificationCreateRequest } from '../types/NotificationCreateRequest'
import type { Notification } from '../types/Notification'
import type { NotificationList } from '../types/NotificationList'
import { FastifyInstance, FastifyRequest} from 'fastify'

export interface ApiGatewayController {
  gatewayHealth(app: FastifyInstance, request?: FastifyRequest): Promise<HealthResponse>
  gatewayHealthServices(app: FastifyInstance, request?: FastifyRequest): Promise<GatewayServicesHealth>
  gatewayHealthDb(app: FastifyInstance, request?: FastifyRequest): Promise<GatewayServicesHealth>
  gatewayMetrics(app: FastifyInstance, request?: FastifyRequest): Promise<string>
  gatewayAuthRegister(app: FastifyInstance, input: RegisterRequest, request?: FastifyRequest): Promise<AuthUser>
  gatewayAuthLogin(app: FastifyInstance, input: LoginRequest, request?: FastifyRequest): Promise<LoginResponse>
  gatewayAuthLogout(app: FastifyInstance, request?: FastifyRequest): Promise<void>
  gatewayCreateTenant(app: FastifyInstance, input: CreateTenantRequest, request?: FastifyRequest): Promise<Tenant>
  gatewayListInvoices(app: FastifyInstance, request?: FastifyRequest): Promise<InvoiceList>
  gatewayCreateInvoice(app: FastifyInstance, input: InvoiceCreateRequest, request?: FastifyRequest): Promise<Invoice>
  gatewayListNotifications(app: FastifyInstance, request?: FastifyRequest): Promise<NotificationList>
  gatewayCreateNotification(app: FastifyInstance, input: NotificationCreateRequest, request?: FastifyRequest): Promise<Notification>
}
