import type { BillingAccountRequest } from './types/BillingAccountRequest'
import type { BillingAccountUpdateRequest } from './types/BillingAccountUpdateRequest'
import type { BillingAccountResponse } from './types/BillingAccountResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { BillingAccountController } from './BillingAccountController'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

import { verifyDbSchema, verifyDbModel } from '../../../core/helper/db_utils'
import {toApiAttributes } from '../../../core/helper/api_helper';

import { toModelAttributes } from '../../../core/helper/api_helper';

function httpError(statusCode: number, message: string): Error & { statusCode: number } {
  return Object.assign(new Error(message), { statusCode })
}


export class BillingAccountService implements BillingAccountController {
      public async listBillingAccount(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<BillingAccountResponse[]>>> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.billing_billing_account.schema(schema!);
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
        data: rows.map((row) => toApiAttributes<ListItem<BillingAccountResponse[]>>(row.get({ plain: true }) as Record<string, unknown>)),
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

      public async createBillingAccount(app: FastifyInstance, input: BillingAccountRequest, request?: FastifyRequest): Promise<BillingAccountResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.billing_billing_account.schema(schema!);
      const row = await model.create(toModelAttributes(input) as any)
      return toApiAttributes<BillingAccountResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getBillingAccountById(app: FastifyInstance, request?: FastifyRequest): Promise<BillingAccountResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.billing_billing_account.schema(schema!);
      const { billing_account_id } = (request?.params ?? {}) as { billing_account_id?: string | number }
      if (billing_account_id === undefined || billing_account_id === '') throw httpError(400, 'billing_account_id is required')
      const row = await model.findByPk(billing_account_id)
      if (!row) {
        throw httpError(404, 'billing_billing_account not found')
      }
      return toApiAttributes<BillingAccountResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateBillingAccount(app: FastifyInstance, input: BillingAccountUpdateRequest, request?: FastifyRequest): Promise<BillingAccountResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.billing_billing_account.schema(schema!);
      const { billing_account_id } = (request?.params ?? {}) as { billing_account_id?: string | number }
      if (billing_account_id === undefined || billing_account_id === '') throw httpError(400, 'billing_account_id is required')
      const row = await model.findByPk(billing_account_id)
      if (!row) {
        throw httpError(404, 'billing_billing_account not found')
      }
      await row.update(toModelAttributes(input) as any)
      return toApiAttributes<BillingAccountResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteBillingAccount(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.billing_billing_account.schema(schema!);
      const { billing_account_id } = (request?.params ?? {}) as { billing_account_id?: string | number }
      if (billing_account_id === undefined || billing_account_id === '') throw httpError(400, 'billing_account_id is required')
      const deletedCount = await model.destroy({ where: { billingAccountId: billing_account_id } })
      if (deletedCount === 0) throw httpError(404, 'billing_billing_account not found')
      return
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
