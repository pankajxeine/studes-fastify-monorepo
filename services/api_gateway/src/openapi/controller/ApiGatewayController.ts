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
import type { RequestHeaders } from '../types/RequestHeaders'

export interface ApiGatewayController {
  gatewayHealth(headers?: RequestHeaders): Promise<HealthResponse>
  gatewayHealthServices(headers?: RequestHeaders): Promise<GatewayServicesHealth>
  gatewayHealthDb(headers?: RequestHeaders): Promise<GatewayServicesHealth>
  gatewayMetrics(headers?: RequestHeaders): Promise<string>
  gatewayAuthRegister(input: RegisterRequest, headers?: RequestHeaders): Promise<AuthUser>
  gatewayAuthLogin(input: LoginRequest, headers?: RequestHeaders): Promise<LoginResponse>
  gatewayAuthLogout(headers?: RequestHeaders): Promise<void>
  gatewayCreateTenant(input: CreateTenantRequest, headers?: RequestHeaders): Promise<Tenant>
  gatewayListInvoices(headers?: RequestHeaders): Promise<InvoiceList>
  gatewayCreateInvoice(input: InvoiceCreateRequest, headers?: RequestHeaders): Promise<Invoice>
  gatewayListNotifications(headers?: RequestHeaders): Promise<NotificationList>
  gatewayCreateNotification(input: NotificationCreateRequest, headers?: RequestHeaders): Promise<Notification>
}
