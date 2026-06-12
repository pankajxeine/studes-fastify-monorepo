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
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { ApiGatewayController } from '../openapi/controller/ApiGatewayController'

export class ApiGatewayService implements ApiGatewayController {
  public async gatewayHealth(app: FastifyInstance,request?: FastifyRequest): Promise<HealthResponse> {
    void request
    throw new Error('Not implemented')
  }

  public async gatewayHealthServices(app: FastifyInstance,request?: FastifyRequest): Promise<GatewayServicesHealth> {
    void request
    throw new Error('Not implemented')
  }

  public async gatewayHealthDb(app: FastifyInstance,request?: FastifyRequest): Promise<GatewayServicesHealth> {
    void request
    throw new Error('Not implemented')
  }

  public async gatewayMetrics(app: FastifyInstance,request?: FastifyRequest): Promise<string> {
    void request
    throw new Error('Not implemented')
  }

  public async gatewayAuthRegister(app: FastifyInstance, input: RegisterRequest, request?: FastifyRequest): Promise<AuthUser> {
    void input
    void request
    throw new Error('Not implemented')
  }

  public async gatewayAuthLogin(app: FastifyInstance, input: LoginRequest, request?: FastifyRequest): Promise<LoginResponse> {
    void input
    void request
    throw new Error('Not implemented')
  }

  public async gatewayAuthLogout(app: FastifyInstance,request?: FastifyRequest): Promise<void> {
    void request
    throw new Error('Not implemented')
  }

  public async gatewayCreateTenant(app: FastifyInstance, input: CreateTenantRequest, request?: FastifyRequest): Promise<Tenant> {
    void input
    void request
    throw new Error('Not implemented')
  }

  public async gatewayListInvoices(app: FastifyInstance,request?: FastifyRequest): Promise<InvoiceList> {
    void request
    throw new Error('Not implemented')
  }

  public async gatewayCreateInvoice(app: FastifyInstance, input: InvoiceCreateRequest, request?: FastifyRequest): Promise<Invoice> {
    void input
    void request
    throw new Error('Not implemented')
  }

  public async gatewayListNotifications(app: FastifyInstance,request?: FastifyRequest): Promise<NotificationList> {
    void request
    throw new Error('Not implemented')
  }

  public async gatewayCreateNotification(app: FastifyInstance, input: NotificationCreateRequest, request?: FastifyRequest): Promise<Notification> {
    void input
    void request
    throw new Error('Not implemented')
  }
}
