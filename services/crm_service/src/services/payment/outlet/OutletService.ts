import type { OutletRequest } from './types/OutletRequest'
import type { OutletUpdateRequest } from './types/OutletUpdateRequest'
import type { OutletResponse } from './types/OutletResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { OutletController } from './OutletController'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

import { verifyDbSchema, verifyDbModel } from '../../../core/helper/db_utils'
import {toApiAttributes } from '../../../core/helper/api_helper';

import { toModelAttributes } from '../../../core/helper/api_helper';

function httpError(statusCode: number, message: string): Error & { statusCode: number } {
  return Object.assign(new Error(message), { statusCode })
}


export class OutletService implements OutletController {
      public async listOutlet(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<OutletResponse[]>>> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.payment_outlet.schema(schema!);
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
        data: rows.map((row) => toApiAttributes<ListItem<OutletResponse[]>>(row.get({ plain: true }) as Record<string, unknown>)),
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

      public async createOutlet(app: FastifyInstance, input: OutletRequest, request?: FastifyRequest): Promise<OutletResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.payment_outlet.schema(schema!);
      const row = await model.create(toModelAttributes(input) as any)
      return toApiAttributes<OutletResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getOutletById(app: FastifyInstance, request?: FastifyRequest): Promise<OutletResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.payment_outlet.schema(schema!);
      const { outlet_id } = (request?.params ?? {}) as { outlet_id?: string | number }
      if (outlet_id === undefined || outlet_id === '') throw httpError(400, 'outlet_id is required')
      const row = await model.findByPk(outlet_id)
      if (!row) {
        throw httpError(404, 'payment_outlet not found')
      }
      return toApiAttributes<OutletResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateOutlet(app: FastifyInstance, input: OutletUpdateRequest, request?: FastifyRequest): Promise<OutletResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.payment_outlet.schema(schema!);
      const { outlet_id } = (request?.params ?? {}) as { outlet_id?: string | number }
      if (outlet_id === undefined || outlet_id === '') throw httpError(400, 'outlet_id is required')
      const row = await model.findByPk(outlet_id)
      if (!row) {
        throw httpError(404, 'payment_outlet not found')
      }
      await row.update(toModelAttributes(input) as any)
      return toApiAttributes<OutletResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteOutlet(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.payment_outlet.schema(schema!);
      const { outlet_id } = (request?.params ?? {}) as { outlet_id?: string | number }
      if (outlet_id === undefined || outlet_id === '') throw httpError(400, 'outlet_id is required')
      const deletedCount = await model.destroy({ where: { outletId: outlet_id } })
      if (deletedCount === 0) throw httpError(404, 'payment_outlet not found')
      return
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
