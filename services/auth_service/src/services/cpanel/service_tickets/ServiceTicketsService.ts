import type { ServiceTicketsRequest } from './types/ServiceTicketsRequest'
import type { ServiceTicketsResponse } from './types/ServiceTicketsResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { ServiceTicketsController } from './ServiceTicketsController'

export class ServiceTicketsService implements ServiceTicketsController {
  public async listServiceTickets(app: FastifyInstance, request?: FastifyRequest): Promise<ServiceTicketsResponse[]> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.service_tickets.schema(schema!)
      const rows = await model.findAll()
      return rows.map((row) => row.get({ plain: true })) as ServiceTicketsResponse[]
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async createServiceTicket(app: FastifyInstance, input: ServiceTicketsRequest, request?: FastifyRequest): Promise<ServiceTicketsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.service_tickets.schema(schema!)
      const row = await model.create(input as any)
      return row.get({ plain: true }) as ServiceTicketsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async getServiceTicketsById(app: FastifyInstance, request?: FastifyRequest): Promise<ServiceTicketsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.service_tickets.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
      if (!row) {
        throw new Error('service_tickets not found')
      }
      return row.get({ plain: true }) as ServiceTicketsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async updateServiceTicket(app: FastifyInstance, input: ServiceTicketsRequest, request?: FastifyRequest): Promise<ServiceTicketsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.service_tickets.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
      if (!row) {
        throw new Error('service_tickets not found')
      }
      await row.update(input as any)
      return row.get({ plain: true }) as ServiceTicketsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async deleteServiceTicket(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.service_tickets.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      await model.destroy({ where: { id } })
      return undefined as void
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
