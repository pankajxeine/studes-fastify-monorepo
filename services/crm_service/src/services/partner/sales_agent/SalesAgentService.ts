import type { SalesAgentRequest } from './types/SalesAgentRequest'
import type { SalesAgentUpdateRequest } from './types/SalesAgentUpdateRequest'
import type { SalesAgentResponse } from './types/SalesAgentResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { SalesAgentController } from './SalesAgentController'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

import { verifyDbSchema, verifyDbModel } from '../../../core/helper/db_utils'
import {toApiAttributes } from '../../../core/helper/api_helper';

import { toModelAttributes } from '../../../core/helper/api_helper';

function httpError(statusCode: number, message: string): Error & { statusCode: number } {
  return Object.assign(new Error(message), { statusCode })
}


export class SalesAgentService implements SalesAgentController {
      public async listSalesAgent(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<SalesAgentResponse[]>>> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.partner_sales_agent.schema(schema!);
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
        data: rows.map((row) => toApiAttributes<ListItem<SalesAgentResponse[]>>(row.get({ plain: true }) as Record<string, unknown>)),
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

      public async createSalesAgent(app: FastifyInstance, input: SalesAgentRequest, request?: FastifyRequest): Promise<SalesAgentResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.partner_sales_agent.schema(schema!);
      const row = await model.create(toModelAttributes(input) as any)
      return toApiAttributes<SalesAgentResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getSalesAgentById(app: FastifyInstance, request?: FastifyRequest): Promise<SalesAgentResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.partner_sales_agent.schema(schema!);
      const { sales_agent_id } = (request?.params ?? {}) as { sales_agent_id?: string | number }
      if (sales_agent_id === undefined || sales_agent_id === '') throw httpError(400, 'sales_agent_id is required')
      const row = await model.findByPk(sales_agent_id)
      if (!row) {
        throw httpError(404, 'partner_sales_agent not found')
      }
      return toApiAttributes<SalesAgentResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateSalesAgent(app: FastifyInstance, input: SalesAgentUpdateRequest, request?: FastifyRequest): Promise<SalesAgentResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.partner_sales_agent.schema(schema!);
      const { sales_agent_id } = (request?.params ?? {}) as { sales_agent_id?: string | number }
      if (sales_agent_id === undefined || sales_agent_id === '') throw httpError(400, 'sales_agent_id is required')
      const row = await model.findByPk(sales_agent_id)
      if (!row) {
        throw httpError(404, 'partner_sales_agent not found')
      }
      await row.update(toModelAttributes(input) as any)
      return toApiAttributes<SalesAgentResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteSalesAgent(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.partner_sales_agent.schema(schema!);
      const { sales_agent_id } = (request?.params ?? {}) as { sales_agent_id?: string | number }
      if (sales_agent_id === undefined || sales_agent_id === '') throw httpError(400, 'sales_agent_id is required')
      const deletedCount = await model.destroy({ where: { salesAgentId: sales_agent_id } })
      if (deletedCount === 0) throw httpError(404, 'partner_sales_agent not found')
      return
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
