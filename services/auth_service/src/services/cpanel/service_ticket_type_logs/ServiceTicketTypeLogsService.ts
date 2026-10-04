import type { ServiceTicketTypeLogsRequest } from './types/ServiceTicketTypeLogsRequest'
import type { ServiceTicketTypeLogsResponse } from './types/ServiceTicketTypeLogsResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { ServiceTicketTypeLogsController, ListItem, PaginatedResponse } from './ServiceTicketTypeLogsController'

export class ServiceTicketTypeLogsService implements ServiceTicketTypeLogsController {
      public async listServiceTicketTypeLogs(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<ServiceTicketTypeLogsResponse[]>>> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.service_ticket_type_logs.schema(schema!)
      const query = (request?.query ?? {}) as { page?: string | number; limit?: string | number }
      const parsePositiveInteger = (value: string | number | undefined, fallback: number) => {
        const parsed = Number(value)
        return Number.isInteger(parsed) && parsed > 0 ? parsed : fallback
      }
      const page = parsePositiveInteger(query.page, 1)
      const limit = Math.min(parsePositiveInteger(query.limit, 20), 100)
      const { count, rows } = await model.findAndCountAll({
        limit,
        offset: (page - 1) * limit,
      })
      return {
        data: rows.map((row) => row.get({ plain: true })) as ListItem<ServiceTicketTypeLogsResponse[]>[],
        pagination: {
          page,
          limit,
          total: count,
          totalPages: Math.ceil(count / limit),
        },
      }
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async createServiceTicketTypeLog(app: FastifyInstance, input: ServiceTicketTypeLogsRequest, request?: FastifyRequest): Promise<ServiceTicketTypeLogsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.service_ticket_type_logs.schema(schema!)
      const row = await model.create(input as any)
      return row.get({ plain: true }) as ServiceTicketTypeLogsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getServiceTicketTypeLogsById(app: FastifyInstance, request?: FastifyRequest): Promise<ServiceTicketTypeLogsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.service_ticket_type_logs.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
      if (!row) {
        throw new Error('service_ticket_type_logs not found')
      }
      return row.get({ plain: true }) as ServiceTicketTypeLogsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateServiceTicketTypeLog(app: FastifyInstance, input: ServiceTicketTypeLogsRequest, request?: FastifyRequest): Promise<ServiceTicketTypeLogsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.service_ticket_type_logs.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
      if (!row) {
        throw new Error('service_ticket_type_logs not found')
      }
      await row.update(input as any)
      return row.get({ plain: true }) as ServiceTicketTypeLogsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteServiceTicketTypeLog(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.service_ticket_type_logs.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      await model.destroy({ where: { id } })
      return undefined as void
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
