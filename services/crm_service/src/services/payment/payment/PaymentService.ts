import type { PaymentRequest } from './types/PaymentRequest'
import type { PaymentUpdateRequest } from './types/PaymentUpdateRequest'
import type { PaymentResponse } from './types/PaymentResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { PaymentController } from './PaymentController'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

import { verifyDbSchema, verifyDbModel } from '../../../core/helper/db_utils'
import {toApiAttributes } from '../../../core/helper/api_helper';

import { toModelAttributes } from '../../../core/helper/api_helper';

function httpError(statusCode: number, message: string): Error & { statusCode: number } {
  return Object.assign(new Error(message), { statusCode })
}


export class PaymentService implements PaymentController {
      public async listPayment(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<PaymentResponse[]>>> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.payment_payment.schema(schema!);
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
        data: rows.map((row) => toApiAttributes<ListItem<PaymentResponse[]>>(row.get({ plain: true }) as Record<string, unknown>)),
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

      public async createPayment(app: FastifyInstance, input: PaymentRequest, request?: FastifyRequest): Promise<PaymentResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.payment_payment.schema(schema!);
      const row = await model.create(toModelAttributes(input) as any)
      return toApiAttributes<PaymentResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getPaymentById(app: FastifyInstance, request?: FastifyRequest): Promise<PaymentResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.payment_payment.schema(schema!);
      const { payment_id } = (request?.params ?? {}) as { payment_id?: string | number }
      if (payment_id === undefined || payment_id === '') throw httpError(400, 'payment_id is required')
      const row = await model.findByPk(payment_id)
      if (!row) {
        throw httpError(404, 'payment_payment not found')
      }
      return toApiAttributes<PaymentResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updatePayment(app: FastifyInstance, input: PaymentUpdateRequest, request?: FastifyRequest): Promise<PaymentResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.payment_payment.schema(schema!);
      const { payment_id } = (request?.params ?? {}) as { payment_id?: string | number }
      if (payment_id === undefined || payment_id === '') throw httpError(400, 'payment_id is required')
      const row = await model.findByPk(payment_id)
      if (!row) {
        throw httpError(404, 'payment_payment not found')
      }
      await row.update(toModelAttributes(input) as any)
      return toApiAttributes<PaymentResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deletePayment(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.payment_payment.schema(schema!);
      const { payment_id } = (request?.params ?? {}) as { payment_id?: string | number }
      if (payment_id === undefined || payment_id === '') throw httpError(400, 'payment_id is required')
      const deletedCount = await model.destroy({ where: { paymentId: payment_id } })
      if (deletedCount === 0) throw httpError(404, 'payment_payment not found')
      return
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
