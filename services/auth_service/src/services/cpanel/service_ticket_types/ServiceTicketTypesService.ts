import type { ServiceTicketTypesRequest } from './types/ServiceTicketTypesRequest'
import type { ServiceTicketTypesResponse } from './types/ServiceTicketTypesResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { ServiceTicketTypesController } from './ServiceTicketTypesController'

export class ServiceTicketTypesService implements ServiceTicketTypesController {
  public async listServiceTicketTypes(app: FastifyInstance, request?: FastifyRequest): Promise<ServiceTicketTypesResponse[]> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.service_ticket_types.schema(schema!)
      const rows = await model.findAll()
      return rows.map((row) => row.get({ plain: true })) as ServiceTicketTypesResponse[]
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async createServiceTicketType(app: FastifyInstance, input: ServiceTicketTypesRequest, request?: FastifyRequest): Promise<ServiceTicketTypesResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.service_ticket_types.schema(schema!)
      const row = await model.create(input as any)
      return row.get({ plain: true }) as ServiceTicketTypesResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async getServiceTicketTypesById(app: FastifyInstance, request?: FastifyRequest): Promise<ServiceTicketTypesResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.service_ticket_types.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
      if (!row) {
        throw new Error('service_ticket_types not found')
      }
      return row.get({ plain: true }) as ServiceTicketTypesResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async updateServiceTicketType(app: FastifyInstance, input: ServiceTicketTypesRequest, request?: FastifyRequest): Promise<ServiceTicketTypesResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.service_ticket_types.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
      if (!row) {
        throw new Error('service_ticket_types not found')
      }
      await row.update(input as any)
      return row.get({ plain: true }) as ServiceTicketTypesResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async deleteServiceTicketType(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.service_ticket_types.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      await model.destroy({ where: { id } })
      return undefined as void
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
