import type { ServiceTicketUserContentsRequest } from './types/ServiceTicketUserContentsRequest'
import type { ServiceTicketUserContentsResponse } from './types/ServiceTicketUserContentsResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { ServiceTicketUserContentsController, ListItem, PaginatedResponse } from './ServiceTicketUserContentsController'

import { verifyDbSchema, verifyDbModel } from '../../../core/helper/db_utils';

export class ServiceTicketUserContentsService implements ServiceTicketUserContentsController {
      public async listServiceTicketUserContents(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<ServiceTicketUserContentsResponse[]>>> {
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
      const { count, rows } = await models.service_ticket_user_contents.schema(schema!).findAndCountAll({
        limit,
        offset: (page - 1) * limit,
      })
      return {
        data: rows.map((row) => row.get({ plain: true })) as ListItem<ServiceTicketUserContentsResponse[]>[],
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

      public async createServiceTicketUserContent(app: FastifyInstance, input: ServiceTicketUserContentsRequest, request?: FastifyRequest): Promise<ServiceTicketUserContentsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const row = await models.service_ticket_user_contents.schema(schema!).create(input as any)
      return row.get({ plain: true }) as ServiceTicketUserContentsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getServiceTicketUserContentsById(app: FastifyInstance, request?: FastifyRequest): Promise<ServiceTicketUserContentsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await models.service_ticket_user_contents.schema(schema!).findByPk(id)
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
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await models.service_ticket_user_contents.schema(schema!).findByPk(id)
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
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      await models.service_ticket_user_contents.schema(schema!).destroy({ where: { id } })
      return undefined as void
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
