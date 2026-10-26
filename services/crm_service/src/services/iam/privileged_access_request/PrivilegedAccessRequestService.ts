import type { PrivilegedAccessRequestRequest } from './types/PrivilegedAccessRequestRequest'
import type { PrivilegedAccessRequestUpdateRequest } from './types/PrivilegedAccessRequestUpdateRequest'
import type { PrivilegedAccessRequestResponse } from './types/PrivilegedAccessRequestResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { PrivilegedAccessRequestController } from './PrivilegedAccessRequestController'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

import { verifyDbSchema, verifyDbModel } from '../../../core/helper/db_utils'
import {toApiAttributes } from '../../../core/helper/api_helper';

import { toModelAttributes } from '../../../core/helper/api_helper';

function httpError(statusCode: number, message: string): Error & { statusCode: number } {
  return Object.assign(new Error(message), { statusCode })
}


export class PrivilegedAccessRequestService implements PrivilegedAccessRequestController {
      public async listPrivilegedAccessRequest(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<PrivilegedAccessRequestResponse[]>>> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.iam_privileged_access_request.schema(schema!);
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
        data: rows.map((row) => toApiAttributes<ListItem<PrivilegedAccessRequestResponse[]>>(row.get({ plain: true }) as Record<string, unknown>)),
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

      public async createPrivilegedAccessRequest(app: FastifyInstance, input: PrivilegedAccessRequestRequest, request?: FastifyRequest): Promise<PrivilegedAccessRequestResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.iam_privileged_access_request.schema(schema!);
      const row = await model.create(toModelAttributes(input) as any)
      return toApiAttributes<PrivilegedAccessRequestResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getPrivilegedAccessRequestById(app: FastifyInstance, request?: FastifyRequest): Promise<PrivilegedAccessRequestResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.iam_privileged_access_request.schema(schema!);
      const { request_id } = (request?.params ?? {}) as { request_id?: string | number }
      if (request_id === undefined || request_id === '') throw httpError(400, 'request_id is required')
      const row = await model.findByPk(request_id)
      if (!row) {
        throw httpError(404, 'iam_privileged_access_request not found')
      }
      return toApiAttributes<PrivilegedAccessRequestResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updatePrivilegedAccessRequest(app: FastifyInstance, input: PrivilegedAccessRequestUpdateRequest, request?: FastifyRequest): Promise<PrivilegedAccessRequestResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.iam_privileged_access_request.schema(schema!);
      const { request_id } = (request?.params ?? {}) as { request_id?: string | number }
      if (request_id === undefined || request_id === '') throw httpError(400, 'request_id is required')
      const row = await model.findByPk(request_id)
      if (!row) {
        throw httpError(404, 'iam_privileged_access_request not found')
      }
      await row.update(toModelAttributes(input) as any)
      return toApiAttributes<PrivilegedAccessRequestResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deletePrivilegedAccessRequest(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.iam_privileged_access_request.schema(schema!);
      const { request_id } = (request?.params ?? {}) as { request_id?: string | number }
      if (request_id === undefined || request_id === '') throw httpError(400, 'request_id is required')
      const deletedCount = await model.destroy({ where: { requestId: request_id } })
      if (deletedCount === 0) throw httpError(404, 'iam_privileged_access_request not found')
      return
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
