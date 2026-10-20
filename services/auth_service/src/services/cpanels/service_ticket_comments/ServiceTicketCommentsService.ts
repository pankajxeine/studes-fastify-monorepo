import type { ServiceTicketCommentsRequest } from './types/ServiceTicketCommentsRequest'
import type { ServiceTicketCommentsResponse } from './types/ServiceTicketCommentsResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { ServiceTicketCommentsController, ListItem, PaginatedResponse } from './ServiceTicketCommentsController'

import { verifyDbSchema, verifyDbModel } from '../../../core/helper/db_utils';

export class ServiceTicketCommentsService implements ServiceTicketCommentsController {
      public async listServiceTicketComments(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<ServiceTicketCommentsResponse[]>>> {
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
      const { count, rows } = await models.service_ticket_comments.schema(schema!).findAndCountAll({
        limit,
        offset: (page - 1) * limit,
      })
      return {
        data: rows.map((row) => row.get({ plain: true })) as ListItem<ServiceTicketCommentsResponse[]>[],
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

      public async createServiceTicketComment(app: FastifyInstance, input: ServiceTicketCommentsRequest, request?: FastifyRequest): Promise<ServiceTicketCommentsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const row = await models.service_ticket_comments.schema(schema!).create(input as any)
      return row.get({ plain: true }) as ServiceTicketCommentsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getServiceTicketCommentsById(app: FastifyInstance, request?: FastifyRequest): Promise<ServiceTicketCommentsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await models.service_ticket_comments.schema(schema!).findByPk(id)
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
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await models.service_ticket_comments.schema(schema!).findByPk(id)
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
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      await models.service_ticket_comments.schema(schema!).destroy({ where: { id } })
      return undefined as void
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
