import type { ServiceTicketTypesRequest } from './types/ServiceTicketTypesRequest'
import type { ServiceTicketTypesResponse } from './types/ServiceTicketTypesResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { ServiceTicketTypesController, ListItem, PaginatedResponse } from './ServiceTicketTypesController'

import { verifyDbSchema, verifyDbModel } from '../../../core/helper/db_utils';


export class ServiceTicketTypesService implements ServiceTicketTypesController {
      public async listServiceTicketTypes(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<ServiceTicketTypesResponse[]>>> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const model = models.service_ticket_types.schema(schema!);
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
        data: rows.map((row) => row.get({ plain: true })) as ListItem<ServiceTicketTypesResponse[]>[],
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

      public async createServiceTicketType(app: FastifyInstance, input: ServiceTicketTypesRequest, request?: FastifyRequest): Promise<ServiceTicketTypesResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const model = models.service_ticket_types.schema(schema!);
      const row = await models.service_ticket_types.schema(schema!).create(input as any)
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
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const model = models.service_ticket_types.schema(schema!);
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
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const model = models.service_ticket_types.schema(schema!);
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
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const model = models.service_ticket_types.schema(schema!);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      await models.service_ticket_types.schema(schema!).destroy({ where: { id } })
      return undefined as void
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
