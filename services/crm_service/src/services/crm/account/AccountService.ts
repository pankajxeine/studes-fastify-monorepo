import type { AccountRequest } from './types/AccountRequest'
import type { AccountUpdateRequest } from './types/AccountUpdateRequest'
import type { AccountResponse } from './types/AccountResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { AccountController } from './AccountController'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

import { verifyDbSchema, verifyDbModel } from '../../../core/helper/db_utils'
import {toApiAttributes } from '../../../core/helper/api_helper';

import { toModelAttributes } from '../../../core/helper/api_helper';

function httpError(statusCode: number, message: string): Error & { statusCode: number } {
  return Object.assign(new Error(message), { statusCode })
}


export class AccountService implements AccountController {
      public async listAccount(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<AccountResponse[]>>> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.crm_account.schema(schema!);
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
        data: rows.map((row) => toApiAttributes<ListItem<AccountResponse[]>>(row.get({ plain: true }) as Record<string, unknown>)),
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

      public async createAccount(app: FastifyInstance, input: AccountRequest, request?: FastifyRequest): Promise<AccountResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.crm_account.schema(schema!);
      const row = await model.create(toModelAttributes(input) as any)
      return toApiAttributes<AccountResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getAccountById(app: FastifyInstance, request?: FastifyRequest): Promise<AccountResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.crm_account.schema(schema!);
      const { account_id } = (request?.params ?? {}) as { account_id?: string | number }
      if (account_id === undefined || account_id === '') throw httpError(400, 'account_id is required')
      const row = await model.findByPk(account_id)
      if (!row) {
        throw httpError(404, 'crm_account not found')
      }
      return toApiAttributes<AccountResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateAccount(app: FastifyInstance, input: AccountUpdateRequest, request?: FastifyRequest): Promise<AccountResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.crm_account.schema(schema!);
      const { account_id } = (request?.params ?? {}) as { account_id?: string | number }
      if (account_id === undefined || account_id === '') throw httpError(400, 'account_id is required')
      const row = await model.findByPk(account_id)
      if (!row) {
        throw httpError(404, 'crm_account not found')
      }
      await row.update(toModelAttributes(input) as any)
      return toApiAttributes<AccountResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteAccount(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.crm_account.schema(schema!);
      const { account_id } = (request?.params ?? {}) as { account_id?: string | number }
      if (account_id === undefined || account_id === '') throw httpError(400, 'account_id is required')
      const deletedCount = await model.destroy({ where: { accountId: account_id } })
      if (deletedCount === 0) throw httpError(404, 'crm_account not found')
      return
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
