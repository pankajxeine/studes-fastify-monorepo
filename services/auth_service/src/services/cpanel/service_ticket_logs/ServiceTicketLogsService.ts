import type { ServiceTicketLogsRequest } from './types/ServiceTicketLogsRequest'
import type { ServiceTicketLogsResponse } from './types/ServiceTicketLogsResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { ServiceTicketLogsController } from './ServiceTicketLogsController'

export class ServiceTicketLogsService implements ServiceTicketLogsController {
  public async listServiceTicketLogs(app: FastifyInstance, request?: FastifyRequest): Promise<ServiceTicketLogsResponse[]> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.service_ticket_logs.schema(schema!)
      const rows = await model.findAll()
      return rows.map((row) => row.get({ plain: true })) as ServiceTicketLogsResponse[]
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async createServiceTicketLog(app: FastifyInstance, input: ServiceTicketLogsRequest, request?: FastifyRequest): Promise<ServiceTicketLogsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.service_ticket_logs.schema(schema!)
      const row = await model.create(input as any)
      return row.get({ plain: true }) as ServiceTicketLogsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async getServiceTicketLogsById(app: FastifyInstance, request?: FastifyRequest): Promise<ServiceTicketLogsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.service_ticket_logs.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
      if (!row) {
        throw new Error('service_ticket_logs not found')
      }
      return row.get({ plain: true }) as ServiceTicketLogsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async updateServiceTicketLog(app: FastifyInstance, input: ServiceTicketLogsRequest, request?: FastifyRequest): Promise<ServiceTicketLogsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.service_ticket_logs.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
      if (!row) {
        throw new Error('service_ticket_logs not found')
      }
      await row.update(input as any)
      return row.get({ plain: true }) as ServiceTicketLogsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async deleteServiceTicketLog(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.service_ticket_logs.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      await model.destroy({ where: { id } })
      return undefined as void
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
