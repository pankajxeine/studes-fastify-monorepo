import type { DataAccessLogRequest } from './types/DataAccessLogRequest'
import type { DataAccessLogUpdateRequest } from './types/DataAccessLogUpdateRequest'
import type { DataAccessLogResponse } from './types/DataAccessLogResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { DataAccessLogController } from './DataAccessLogController'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

import { verifyDbSchema, verifyDbModel } from '../../../core/helper/db_utils'
import {toApiAttributes } from '../../../core/helper/api_helper';

import { toModelAttributes } from '../../../core/helper/api_helper';

function httpError(statusCode: number, message: string): Error & { statusCode: number } {
  return Object.assign(new Error(message), { statusCode })
}


export class DataAccessLogService implements DataAccessLogController {
      public async listDataAccessLog(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<DataAccessLogResponse[]>>> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.audit_data_access_log.schema(schema!);
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
        data: rows.map((row) => toApiAttributes<ListItem<DataAccessLogResponse[]>>(row.get({ plain: true }) as Record<string, unknown>)),
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

      public async createDataAccessLog(app: FastifyInstance, input: DataAccessLogRequest, request?: FastifyRequest): Promise<DataAccessLogResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.audit_data_access_log.schema(schema!);
      const row = await model.create(toModelAttributes(input) as any)
      return toApiAttributes<DataAccessLogResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getDataAccessLogById(app: FastifyInstance, request?: FastifyRequest): Promise<DataAccessLogResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.audit_data_access_log.schema(schema!);
      const { data_access_log_id } = (request?.params ?? {}) as { data_access_log_id?: string | number }
      if (data_access_log_id === undefined || data_access_log_id === '') throw httpError(400, 'data_access_log_id is required')
      const row = await model.findByPk(data_access_log_id)
      if (!row) {
        throw httpError(404, 'audit_data_access_log not found')
      }
      return toApiAttributes<DataAccessLogResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateDataAccessLog(app: FastifyInstance, input: DataAccessLogUpdateRequest, request?: FastifyRequest): Promise<DataAccessLogResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.audit_data_access_log.schema(schema!);
      const { data_access_log_id } = (request?.params ?? {}) as { data_access_log_id?: string | number }
      if (data_access_log_id === undefined || data_access_log_id === '') throw httpError(400, 'data_access_log_id is required')
      const row = await model.findByPk(data_access_log_id)
      if (!row) {
        throw httpError(404, 'audit_data_access_log not found')
      }
      await row.update(toModelAttributes(input) as any)
      return toApiAttributes<DataAccessLogResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteDataAccessLog(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.audit_data_access_log.schema(schema!);
      const { data_access_log_id } = (request?.params ?? {}) as { data_access_log_id?: string | number }
      if (data_access_log_id === undefined || data_access_log_id === '') throw httpError(400, 'data_access_log_id is required')
      const deletedCount = await model.destroy({ where: { dataAccessLogId: data_access_log_id } })
      if (deletedCount === 0) throw httpError(404, 'audit_data_access_log not found')
      return
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
