import type { OpportunityRequest } from './types/OpportunityRequest'
import type { OpportunityUpdateRequest } from './types/OpportunityUpdateRequest'
import type { OpportunityResponse } from './types/OpportunityResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { OpportunityController } from './OpportunityController'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

import { verifyDbSchema, verifyDbModel } from '../../../core/helper/db_utils'
import {toApiAttributes } from '../../../core/helper/api_helper';

import { toModelAttributes } from '../../../core/helper/api_helper';

function httpError(statusCode: number, message: string): Error & { statusCode: number } {
  return Object.assign(new Error(message), { statusCode })
}


export class OpportunityService implements OpportunityController {
      public async listOpportunity(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<OpportunityResponse[]>>> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.crm_opportunity.schema(schema!);
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
        data: rows.map((row) => toApiAttributes<ListItem<OpportunityResponse[]>>(row.get({ plain: true }) as Record<string, unknown>)),
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

      public async createOpportunity(app: FastifyInstance, input: OpportunityRequest, request?: FastifyRequest): Promise<OpportunityResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.crm_opportunity.schema(schema!);
      const row = await model.create(toModelAttributes(input) as any)
      return toApiAttributes<OpportunityResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getOpportunityById(app: FastifyInstance, request?: FastifyRequest): Promise<OpportunityResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.crm_opportunity.schema(schema!);
      const { opportunity_id } = (request?.params ?? {}) as { opportunity_id?: string | number }
      if (opportunity_id === undefined || opportunity_id === '') throw httpError(400, 'opportunity_id is required')
      const row = await model.findByPk(opportunity_id)
      if (!row) {
        throw httpError(404, 'crm_opportunity not found')
      }
      return toApiAttributes<OpportunityResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateOpportunity(app: FastifyInstance, input: OpportunityUpdateRequest, request?: FastifyRequest): Promise<OpportunityResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.crm_opportunity.schema(schema!);
      const { opportunity_id } = (request?.params ?? {}) as { opportunity_id?: string | number }
      if (opportunity_id === undefined || opportunity_id === '') throw httpError(400, 'opportunity_id is required')
      const row = await model.findByPk(opportunity_id)
      if (!row) {
        throw httpError(404, 'crm_opportunity not found')
      }
      await row.update(toModelAttributes(input) as any)
      return toApiAttributes<OpportunityResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteOpportunity(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.crm_opportunity.schema(schema!);
      const { opportunity_id } = (request?.params ?? {}) as { opportunity_id?: string | number }
      if (opportunity_id === undefined || opportunity_id === '') throw httpError(400, 'opportunity_id is required')
      const deletedCount = await model.destroy({ where: { opportunityId: opportunity_id } })
      if (deletedCount === 0) throw httpError(404, 'crm_opportunity not found')
      return
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
