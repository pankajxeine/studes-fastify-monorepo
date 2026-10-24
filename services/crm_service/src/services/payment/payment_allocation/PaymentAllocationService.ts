import type { PaymentAllocationRequest } from './types/PaymentAllocationRequest'
import type { PaymentAllocationUpdateRequest } from './types/PaymentAllocationUpdateRequest'
import type { PaymentAllocationResponse } from './types/PaymentAllocationResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { PaymentAllocationController } from './PaymentAllocationController'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

import { verifyDbSchema, verifyDbModel } from '../../../core/helper/db_utils'

function toModelAttributes(input: object): Record<string, unknown> {
  return Object.fromEntries(
    Object.entries(input).map(([key, value]) => [
      key.replace(/_([a-z])/g, (_match, character: string) => character.toUpperCase()),
      value,
    ])
  )
}

function toApiAttributes<T>(attributes: Record<string, unknown>): T {
  return Object.fromEntries(
    Object.entries(attributes).map(([key, value]) => [
      key.replace(/[A-Z]/g, (character) => `_${character.toLowerCase()}`),
      value,
    ])
  ) as T
}

function httpError(statusCode: number, message: string): Error & { statusCode: number } {
  return Object.assign(new Error(message), { statusCode })
}


export class PaymentAllocationService implements PaymentAllocationController {
      public async listPaymentAllocation(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<PaymentAllocationResponse[]>>> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.payment_payment_allocation.schema(schema!);
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
        data: rows.map((row) => toApiAttributes<ListItem<PaymentAllocationResponse[]>>(row.get({ plain: true }) as Record<string, unknown>)),
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

      public async createPaymentAllocation(app: FastifyInstance, input: PaymentAllocationRequest, request?: FastifyRequest): Promise<PaymentAllocationResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.payment_payment_allocation.schema(schema!);
      const row = await model.create(toModelAttributes(input) as any)
      return toApiAttributes<PaymentAllocationResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getPaymentAllocationById(app: FastifyInstance, request?: FastifyRequest): Promise<PaymentAllocationResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.payment_payment_allocation.schema(schema!);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      if (id === undefined || id === '') throw httpError(400, 'id is required')
      const row = await model.findByPk(id)
      if (!row) {
        throw httpError(404, 'payment_payment_allocation not found')
      }
      return toApiAttributes<PaymentAllocationResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updatePaymentAllocation(app: FastifyInstance, input: PaymentAllocationUpdateRequest, request?: FastifyRequest): Promise<PaymentAllocationResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.payment_payment_allocation.schema(schema!);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      if (id === undefined || id === '') throw httpError(400, 'id is required')
      const row = await model.findByPk(id)
      if (!row) {
        throw httpError(404, 'payment_payment_allocation not found')
      }
      await row.update(toModelAttributes(input) as any)
      return toApiAttributes<PaymentAllocationResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deletePaymentAllocation(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.payment_payment_allocation.schema(schema!);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      if (id === undefined || id === '') throw httpError(400, 'id is required')
      const deletedCount = await model.destroy({ where: { id } })
      if (deletedCount === 0) throw httpError(404, 'payment_payment_allocation not found')
      return
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
