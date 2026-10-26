import type { LeadRequest } from './types/LeadRequest'
import type { LeadUpdateRequest } from './types/LeadUpdateRequest'
import type { LeadResponse } from './types/LeadResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { LeadController } from './LeadController'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

import { verifyDbSchema, verifyDbModel } from '../../../core/helper/db_utils'
import {toApiAttributes } from '../../../core/helper/api_helper';

import { toModelAttributes } from '../../../core/helper/api_helper';

function httpError(statusCode: number, message: string): Error & { statusCode: number } {
  return Object.assign(new Error(message), { statusCode })
}


export class LeadService implements LeadController {
      public async listLead(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<LeadResponse[]>>> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.crm_lead.schema(schema!);
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
        data: rows.map((row) => toApiAttributes<ListItem<LeadResponse[]>>(row.get({ plain: true }) as Record<string, unknown>)),
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

      public async createLead(app: FastifyInstance, input: LeadRequest, request?: FastifyRequest): Promise<LeadResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.crm_lead.schema(schema!);
      const row = await model.create(toModelAttributes(input) as any)
      return toApiAttributes<LeadResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getLeadById(app: FastifyInstance, request?: FastifyRequest): Promise<LeadResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.crm_lead.schema(schema!);
      const { lead_id } = (request?.params ?? {}) as { lead_id?: string | number }
      if (lead_id === undefined || lead_id === '') throw httpError(400, 'lead_id is required')
      const row = await model.findByPk(lead_id)
      if (!row) {
        throw httpError(404, 'crm_lead not found')
      }
      return toApiAttributes<LeadResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateLead(app: FastifyInstance, input: LeadUpdateRequest, request?: FastifyRequest): Promise<LeadResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.crm_lead.schema(schema!);
      const { lead_id } = (request?.params ?? {}) as { lead_id?: string | number }
      if (lead_id === undefined || lead_id === '') throw httpError(400, 'lead_id is required')
      const row = await model.findByPk(lead_id)
      if (!row) {
        throw httpError(404, 'crm_lead not found')
      }
      await row.update(toModelAttributes(input) as any)
      return toApiAttributes<LeadResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteLead(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.crm_lead.schema(schema!);
      const { lead_id } = (request?.params ?? {}) as { lead_id?: string | number }
      if (lead_id === undefined || lead_id === '') throw httpError(400, 'lead_id is required')
      const deletedCount = await model.destroy({ where: { leadId: lead_id } })
      if (deletedCount === 0) throw httpError(404, 'crm_lead not found')
      return
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
