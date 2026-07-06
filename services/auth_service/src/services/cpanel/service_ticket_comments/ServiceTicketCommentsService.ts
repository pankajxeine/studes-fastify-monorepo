import type { ServiceTicketCommentsRequest } from './types/ServiceTicketCommentsRequest'
import type { ServiceTicketCommentsResponse } from './types/ServiceTicketCommentsResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { ServiceTicketCommentsController } from './ServiceTicketCommentsController'

export class ServiceTicketCommentsService implements ServiceTicketCommentsController {
  public async listServiceTicketComments(app: FastifyInstance, request?: FastifyRequest): Promise<ServiceTicketCommentsResponse[]> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelBbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.service_ticket_comments.schema(schema!)
      const rows = await model.findAll()
      return rows.map((row) => row.get({ plain: true })) as ServiceTicketCommentsResponse[]
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async createServiceTicketComment(app: FastifyInstance, input: ServiceTicketCommentsRequest, request?: FastifyRequest): Promise<ServiceTicketCommentsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelBbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.service_ticket_comments.schema(schema!)
      const row = await model.create(input as any)
      return row.get({ plain: true }) as ServiceTicketCommentsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async getServiceTicketCommentsById(app: FastifyInstance, request?: FastifyRequest): Promise<ServiceTicketCommentsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelBbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.service_ticket_comments.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
      if (!row) {
        throw new Error('service_ticket_comments not found')
      }
      return row.get({ plain: true }) as ServiceTicketCommentsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async updateServiceTicketComment(app: FastifyInstance, input: ServiceTicketCommentsRequest, request?: FastifyRequest): Promise<ServiceTicketCommentsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelBbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.service_ticket_comments.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
      if (!row) {
        throw new Error('service_ticket_comments not found')
      }
      await row.update(input as any)
      return row.get({ plain: true }) as ServiceTicketCommentsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async deleteServiceTicketComment(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelBbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.service_ticket_comments.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      await model.destroy({ where: { id } })
      return undefined as void
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
