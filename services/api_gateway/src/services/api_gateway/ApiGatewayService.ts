import type { HealthResponse } from './types/HealthResponse'
import type { GatewayServiceHealth } from './types/GatewayServiceHealth'
import type { GatewayServicesHealth } from './types/GatewayServicesHealth'
import type { RegisterRequest } from './types/RegisterRequest'
import type { LoginRequest } from './types/LoginRequest'
import type { LoginResponse } from './types/LoginResponse'
import type { AuthUser } from './types/AuthUser'
import type { CreateTenantRequest } from './types/CreateTenantRequest'
import type { Tenant } from './types/Tenant'
import type { InvoiceCreateRequest } from './types/InvoiceCreateRequest'
import type { Invoice } from './types/Invoice'
import type { InvoiceList } from './types/InvoiceList'
import type { NotificationCreateRequest } from './types/NotificationCreateRequest'
import type { Notification } from './types/Notification'
import type { NotificationList } from './types/NotificationList'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ApiGatewayController } from './ApiGatewayController'
import type { ListItem, PaginatedResponse } from '../../types/PaginatedResponse'






export class ApiGatewayService implements ApiGatewayController {
      public async gatewayHealth(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<HealthResponse>>> {
    try {
      // TODO: implement logic using app + request

      void request;
      throw new Error('Not implemented');
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async gatewayHealthServices(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<GatewayServicesHealth>>> {
    try {
      // TODO: implement logic using app + request

      void request;
      throw new Error('Not implemented');
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async gatewayHealthDb(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<GatewayServicesHealth>>> {
    try {
      // TODO: implement logic using app + request

      void request;
      throw new Error('Not implemented');
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async gatewayMetrics(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<string>>> {
    try {
      // TODO: implement logic using app + request

      void request;
      throw new Error('Not implemented');
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async gatewayAuthRegister(app: FastifyInstance, input: RegisterRequest, request?: FastifyRequest): Promise<AuthUser> {
    try {
      // TODO: implement logic using app + input
      void input;
      void request;
      throw new Error('Not implemented');
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async gatewayAuthLogin(app: FastifyInstance, input: LoginRequest, request?: FastifyRequest): Promise<LoginResponse> {
    try {
      // TODO: implement logic using app + input
      void input;
      void request;
      throw new Error('Not implemented');
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async gatewayAuthLogout(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // TODO: implement logic using app + request

      void request;
      throw new Error('Not implemented');
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async gatewayCreateTenant(app: FastifyInstance, input: CreateTenantRequest, request?: FastifyRequest): Promise<Tenant> {
    try {
      // TODO: implement logic using app + input
      void input;
      void request;
      throw new Error('Not implemented');
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async gatewayListInvoices(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<InvoiceList>>> {
    try {
      // TODO: implement logic using app + request

      void request;
      throw new Error('Not implemented');
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async gatewayCreateInvoice(app: FastifyInstance, input: InvoiceCreateRequest, request?: FastifyRequest): Promise<Invoice> {
    try {
      // TODO: implement logic using app + input
      void input;
      void request;
      throw new Error('Not implemented');
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async gatewayListNotifications(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<NotificationList>>> {
    try {
      // TODO: implement logic using app + request

      void request;
      throw new Error('Not implemented');
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async gatewayCreateNotification(app: FastifyInstance, input: NotificationCreateRequest, request?: FastifyRequest): Promise<Notification> {
    try {
      // TODO: implement logic using app + input
      void input;
      void request;
      throw new Error('Not implemented');
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
