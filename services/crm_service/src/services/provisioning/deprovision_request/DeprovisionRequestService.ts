import type { DeprovisionRequestRequest } from './types/DeprovisionRequestRequest'
import type { DeprovisionRequestUpdateRequest } from './types/DeprovisionRequestUpdateRequest'
import type { DeprovisionRequestResponse } from './types/DeprovisionRequestResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { DeprovisionRequestController } from './DeprovisionRequestController'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

import { verifyDbSchema, verifyDbModel } from '../../../core/helper/db_utils'
import {toApiAttributes } from '../../../core/helper/api_helper';

import { toModelAttributes } from '../../../core/helper/api_helper';

function httpError(statusCode: number, message: string): Error & { statusCode: number } {
  return Object.assign(new Error(message), { statusCode })
}


export class DeprovisionRequestService implements DeprovisionRequestController {
      public async listDeprovisionRequest(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<DeprovisionRequestResponse[]>>> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.provisioning_deprovision_request.schema(schema!);
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
        data: rows.map((row) => toApiAttributes<ListItem<DeprovisionRequestResponse[]>>(row.get({ plain: true }) as Record<string, unknown>)),
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

      public async createDeprovisionRequest(app: FastifyInstance, input: DeprovisionRequestRequest, request?: FastifyRequest): Promise<DeprovisionRequestResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.provisioning_deprovision_request.schema(schema!);
      const row = await model.create(toModelAttributes(input) as any)
      return toApiAttributes<DeprovisionRequestResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getDeprovisionRequestById(app: FastifyInstance, request?: FastifyRequest): Promise<DeprovisionRequestResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.provisioning_deprovision_request.schema(schema!);
      const { deprovision_request_id } = (request?.params ?? {}) as { deprovision_request_id?: string | number }
      if (deprovision_request_id === undefined || deprovision_request_id === '') throw httpError(400, 'deprovision_request_id is required')
      const row = await model.findByPk(deprovision_request_id)
      if (!row) {
        throw httpError(404, 'provisioning_deprovision_request not found')
      }
      return toApiAttributes<DeprovisionRequestResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateDeprovisionRequest(app: FastifyInstance, input: DeprovisionRequestUpdateRequest, request?: FastifyRequest): Promise<DeprovisionRequestResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.provisioning_deprovision_request.schema(schema!);
      const { deprovision_request_id } = (request?.params ?? {}) as { deprovision_request_id?: string | number }
      if (deprovision_request_id === undefined || deprovision_request_id === '') throw httpError(400, 'deprovision_request_id is required')
      const row = await model.findByPk(deprovision_request_id)
      if (!row) {
        throw httpError(404, 'provisioning_deprovision_request not found')
      }
      await row.update(toModelAttributes(input) as any)
      return toApiAttributes<DeprovisionRequestResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteDeprovisionRequest(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.provisioning_deprovision_request.schema(schema!);
      const { deprovision_request_id } = (request?.params ?? {}) as { deprovision_request_id?: string | number }
      if (deprovision_request_id === undefined || deprovision_request_id === '') throw httpError(400, 'deprovision_request_id is required')
      const deletedCount = await model.destroy({ where: { deprovisionRequestId: deprovision_request_id } })
      if (deletedCount === 0) throw httpError(404, 'provisioning_deprovision_request not found')
      return
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
