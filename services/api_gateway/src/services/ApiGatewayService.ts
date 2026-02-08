import type { HealthResponse } from '../openapi/types/HealthResponse'
import type { GatewayServiceHealth } from '../openapi/types/GatewayServiceHealth'
import type { GatewayServicesHealth } from '../openapi/types/GatewayServicesHealth'
import type { RegisterRequest } from '../openapi/types/RegisterRequest'
import type { LoginRequest } from '../openapi/types/LoginRequest'
import type { LoginResponse } from '../openapi/types/LoginResponse'
import type { AuthUser } from '../openapi/types/AuthUser'
import type { CreateTenantRequest } from '../openapi/types/CreateTenantRequest'
import type { Tenant } from '../openapi/types/Tenant'
import type { InvoiceCreateRequest } from '../openapi/types/InvoiceCreateRequest'
import type { Invoice } from '../openapi/types/Invoice'
import type { InvoiceList } from '../openapi/types/InvoiceList'
import type { NotificationCreateRequest } from '../openapi/types/NotificationCreateRequest'
import type { Notification } from '../openapi/types/Notification'
import type { NotificationList } from '../openapi/types/NotificationList'
import type { RequestHeaders } from '../openapi/types/RequestHeaders'
import type { ApiGatewayController } from '../openapi/controller/ApiGatewayController'

export class ApiGatewayService implements ApiGatewayController {
  public async gatewayHealth(headers?: RequestHeaders): Promise<HealthResponse> {
    void headers
    throw new Error('Not implemented')
  }

  public async gatewayHealthServices(headers?: RequestHeaders): Promise<GatewayServicesHealth> {
    void headers
    throw new Error('Not implemented')
  }

  public async gatewayHealthDb(headers?: RequestHeaders): Promise<GatewayServicesHealth> {
    void headers
    throw new Error('Not implemented')
  }

  public async gatewayMetrics(headers?: RequestHeaders): Promise<string> {
    void headers
    throw new Error('Not implemented')
  }

  public async gatewayAuthRegister(input: RegisterRequest, headers?: RequestHeaders): Promise<AuthUser> {
    void input
    void headers
    throw new Error('Not implemented')
  }

  public async gatewayAuthLogin(input: LoginRequest, headers?: RequestHeaders): Promise<LoginResponse> {
    void input
    void headers
    throw new Error('Not implemented')
  }

  public async gatewayAuthLogout(headers?: RequestHeaders): Promise<void> {
    void headers
    throw new Error('Not implemented')
  }

  public async gatewayCreateTenant(input: CreateTenantRequest, headers?: RequestHeaders): Promise<Tenant> {
    void input
    void headers
    throw new Error('Not implemented')
  }

  public async gatewayListInvoices(headers?: RequestHeaders): Promise<InvoiceList> {
    void headers
    throw new Error('Not implemented')
  }

  public async gatewayCreateInvoice(input: InvoiceCreateRequest, headers?: RequestHeaders): Promise<Invoice> {
    void input
    void headers
    throw new Error('Not implemented')
  }

  public async gatewayListNotifications(headers?: RequestHeaders): Promise<NotificationList> {
    void headers
    throw new Error('Not implemented')
  }

  public async gatewayCreateNotification(input: NotificationCreateRequest, headers?: RequestHeaders): Promise<Notification> {
    void input
    void headers
    throw new Error('Not implemented')
  }
}
