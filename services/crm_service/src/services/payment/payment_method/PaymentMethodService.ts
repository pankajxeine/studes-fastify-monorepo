import type { PaymentMethodRequest } from './types/PaymentMethodRequest'
import type { PaymentMethodUpdateRequest } from './types/PaymentMethodUpdateRequest'
import type { PaymentMethodResponse } from './types/PaymentMethodResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { PaymentMethodController } from './PaymentMethodController'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

import { verifyDbSchema, verifyDbModel } from '../../../core/helper/db_utils'
import {toApiAttributes } from '../../../core/helper/api_helper';

import { toModelAttributes } from '../../../core/helper/api_helper';

function httpError(statusCode: number, message: string): Error & { statusCode: number } {
  return Object.assign(new Error(message), { statusCode })
}


export class PaymentMethodService implements PaymentMethodController {
      public async listPaymentMethod(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<PaymentMethodResponse[]>>> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.payment_payment_method.schema(schema!);
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
        data: rows.map((row) => toApiAttributes<ListItem<PaymentMethodResponse[]>>(row.get({ plain: true }) as Record<string, unknown>)),
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

      public async createPaymentMethod(app: FastifyInstance, input: PaymentMethodRequest, request?: FastifyRequest): Promise<PaymentMethodResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.payment_payment_method.schema(schema!);
      const row = await model.create(toModelAttributes(input) as any)
      return toApiAttributes<PaymentMethodResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getPaymentMethodById(app: FastifyInstance, request?: FastifyRequest): Promise<PaymentMethodResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.payment_payment_method.schema(schema!);
      const { payment_method_id } = (request?.params ?? {}) as { payment_method_id?: string | number }
      if (payment_method_id === undefined || payment_method_id === '') throw httpError(400, 'payment_method_id is required')
      const row = await model.findByPk(payment_method_id)
      if (!row) {
        throw httpError(404, 'payment_payment_method not found')
      }
      return toApiAttributes<PaymentMethodResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updatePaymentMethod(app: FastifyInstance, input: PaymentMethodUpdateRequest, request?: FastifyRequest): Promise<PaymentMethodResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.payment_payment_method.schema(schema!);
      const { payment_method_id } = (request?.params ?? {}) as { payment_method_id?: string | number }
      if (payment_method_id === undefined || payment_method_id === '') throw httpError(400, 'payment_method_id is required')
      const row = await model.findByPk(payment_method_id)
      if (!row) {
        throw httpError(404, 'payment_payment_method not found')
      }
      await row.update(toModelAttributes(input) as any)
      return toApiAttributes<PaymentMethodResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deletePaymentMethod(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.payment_payment_method.schema(schema!);
      const { payment_method_id } = (request?.params ?? {}) as { payment_method_id?: string | number }
      if (payment_method_id === undefined || payment_method_id === '') throw httpError(400, 'payment_method_id is required')
      const deletedCount = await model.destroy({ where: { paymentMethodId: payment_method_id } })
      if (deletedCount === 0) throw httpError(404, 'payment_payment_method not found')
      return
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
