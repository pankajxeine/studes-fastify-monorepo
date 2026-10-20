import type { ServiceTicketsRequest } from './types/ServiceTicketsRequest'
import type { ServiceTicketsResponse } from './types/ServiceTicketsResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { ServiceTicketsController, ListItem, PaginatedResponse } from './ServiceTicketsController'

import { verifyDbSchema, verifyDbModel } from '../../../core/helper/db_utils';

export class ServiceTicketsService implements ServiceTicketsController {
      public async listServiceTickets(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<ServiceTicketsResponse[]>>> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const query = (request?.query ?? {}) as { page?: string | number; limit?: string | number }
      const parsePositiveInteger = (value: string | number | undefined, fallback: number) => {
        const parsed = Number(value)
        return Number.isInteger(parsed) && parsed > 0 ? parsed : fallback
      }
      const page = parsePositiveInteger(query.page, 1)
      const limit = Math.min(parsePositiveInteger(query.limit, 20), 100)
      const { count, rows } = await models.service_tickets.schema(schema!).findAndCountAll({
        limit,
        offset: (page - 1) * limit,
      })
      return {
        data: rows.map((row) => row.get({ plain: true })) as ListItem<ServiceTicketsResponse[]>[],
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

      public async createServiceTicket(app: FastifyInstance, input: ServiceTicketsRequest, request?: FastifyRequest): Promise<ServiceTicketsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const row = await models.service_tickets.schema(schema!).create(input as any)
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
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await models.service_tickets.schema(schema!).findByPk(id)
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
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await models.service_tickets.schema(schema!).findByPk(id)
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
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      await models.service_tickets.schema(schema!).destroy({ where: { id } })
      return undefined as void
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
