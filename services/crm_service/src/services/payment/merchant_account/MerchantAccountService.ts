import type { MerchantAccountRequest } from './types/MerchantAccountRequest'
import type { MerchantAccountUpdateRequest } from './types/MerchantAccountUpdateRequest'
import type { MerchantAccountResponse } from './types/MerchantAccountResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { MerchantAccountController } from './MerchantAccountController'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

import { verifyDbSchema, verifyDbModel } from '../../../core/helper/db_utils'
import {toApiAttributes } from '../../../core/helper/api_helper';

import { toModelAttributes } from '../../../core/helper/api_helper';

function httpError(statusCode: number, message: string): Error & { statusCode: number } {
  return Object.assign(new Error(message), { statusCode })
}


export class MerchantAccountService implements MerchantAccountController {
      public async listMerchantAccount(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<MerchantAccountResponse[]>>> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.payment_merchant_account.schema(schema!);
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
        data: rows.map((row) => toApiAttributes<ListItem<MerchantAccountResponse[]>>(row.get({ plain: true }) as Record<string, unknown>)),
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

      public async createMerchantAccount(app: FastifyInstance, input: MerchantAccountRequest, request?: FastifyRequest): Promise<MerchantAccountResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.payment_merchant_account.schema(schema!);
      const row = await model.create(toModelAttributes(input) as any)
      return toApiAttributes<MerchantAccountResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getMerchantAccountById(app: FastifyInstance, request?: FastifyRequest): Promise<MerchantAccountResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.payment_merchant_account.schema(schema!);
      const { merchant_account_id } = (request?.params ?? {}) as { merchant_account_id?: string | number }
      if (merchant_account_id === undefined || merchant_account_id === '') throw httpError(400, 'merchant_account_id is required')
      const row = await model.findByPk(merchant_account_id)
      if (!row) {
        throw httpError(404, 'payment_merchant_account not found')
      }
      return toApiAttributes<MerchantAccountResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateMerchantAccount(app: FastifyInstance, input: MerchantAccountUpdateRequest, request?: FastifyRequest): Promise<MerchantAccountResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.payment_merchant_account.schema(schema!);
      const { merchant_account_id } = (request?.params ?? {}) as { merchant_account_id?: string | number }
      if (merchant_account_id === undefined || merchant_account_id === '') throw httpError(400, 'merchant_account_id is required')
      const row = await model.findByPk(merchant_account_id)
      if (!row) {
        throw httpError(404, 'payment_merchant_account not found')
      }
      await row.update(toModelAttributes(input) as any)
      return toApiAttributes<MerchantAccountResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteMerchantAccount(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.payment_merchant_account.schema(schema!);
      const { merchant_account_id } = (request?.params ?? {}) as { merchant_account_id?: string | number }
      if (merchant_account_id === undefined || merchant_account_id === '') throw httpError(400, 'merchant_account_id is required')
      const deletedCount = await model.destroy({ where: { merchantAccountId: merchant_account_id } })
      if (deletedCount === 0) throw httpError(404, 'payment_merchant_account not found')
      return
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
