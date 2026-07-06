import type { ServiceTicketUserContentsRequest } from './types/ServiceTicketUserContentsRequest'
import type { ServiceTicketUserContentsResponse } from './types/ServiceTicketUserContentsResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { ServiceTicketUserContentsController } from './ServiceTicketUserContentsController'

export class ServiceTicketUserContentsService implements ServiceTicketUserContentsController {
  public async listServiceTicketUserContents(app: FastifyInstance, request?: FastifyRequest): Promise<ServiceTicketUserContentsResponse[]> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelBbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.service_ticket_user_contents.schema(schema!)
      const rows = await model.findAll()
      return rows.map((row) => row.get({ plain: true })) as ServiceTicketUserContentsResponse[]
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async createServiceTicketUserContent(app: FastifyInstance, input: ServiceTicketUserContentsRequest, request?: FastifyRequest): Promise<ServiceTicketUserContentsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelBbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.service_ticket_user_contents.schema(schema!)
      const row = await model.create(input as any)
      return row.get({ plain: true }) as ServiceTicketUserContentsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async getServiceTicketUserContentsById(app: FastifyInstance, request?: FastifyRequest): Promise<ServiceTicketUserContentsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelBbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.service_ticket_user_contents.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
      if (!row) {
        throw new Error('service_ticket_user_contents not found')
      }
      return row.get({ plain: true }) as ServiceTicketUserContentsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async updateServiceTicketUserContent(app: FastifyInstance, input: ServiceTicketUserContentsRequest, request?: FastifyRequest): Promise<ServiceTicketUserContentsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelBbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.service_ticket_user_contents.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
      if (!row) {
        throw new Error('service_ticket_user_contents not found')
      }
      await row.update(input as any)
      return row.get({ plain: true }) as ServiceTicketUserContentsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async deleteServiceTicketUserContent(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelBbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.service_ticket_user_contents.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      await model.destroy({ where: { id } })
      return undefined as void
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
