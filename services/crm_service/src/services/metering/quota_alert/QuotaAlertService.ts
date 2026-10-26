import type { QuotaAlertRequest } from './types/QuotaAlertRequest'
import type { QuotaAlertUpdateRequest } from './types/QuotaAlertUpdateRequest'
import type { QuotaAlertResponse } from './types/QuotaAlertResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { QuotaAlertController } from './QuotaAlertController'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

import { verifyDbSchema, verifyDbModel } from '../../../core/helper/db_utils'
import {toApiAttributes } from '../../../core/helper/api_helper';

import { toModelAttributes } from '../../../core/helper/api_helper';

function httpError(statusCode: number, message: string): Error & { statusCode: number } {
  return Object.assign(new Error(message), { statusCode })
}


export class QuotaAlertService implements QuotaAlertController {
      public async listQuotaAlert(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<QuotaAlertResponse[]>>> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.metering_quota_alert.schema(schema!);
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
        data: rows.map((row) => toApiAttributes<ListItem<QuotaAlertResponse[]>>(row.get({ plain: true }) as Record<string, unknown>)),
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

      public async createQuotaAlert(app: FastifyInstance, input: QuotaAlertRequest, request?: FastifyRequest): Promise<QuotaAlertResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.metering_quota_alert.schema(schema!);
      const row = await model.create(toModelAttributes(input) as any)
      return toApiAttributes<QuotaAlertResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getQuotaAlertById(app: FastifyInstance, request?: FastifyRequest): Promise<QuotaAlertResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.metering_quota_alert.schema(schema!);
      const { quota_alert_id } = (request?.params ?? {}) as { quota_alert_id?: string | number }
      if (quota_alert_id === undefined || quota_alert_id === '') throw httpError(400, 'quota_alert_id is required')
      const row = await model.findByPk(quota_alert_id)
      if (!row) {
        throw httpError(404, 'metering_quota_alert not found')
      }
      return toApiAttributes<QuotaAlertResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateQuotaAlert(app: FastifyInstance, input: QuotaAlertUpdateRequest, request?: FastifyRequest): Promise<QuotaAlertResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.metering_quota_alert.schema(schema!);
      const { quota_alert_id } = (request?.params ?? {}) as { quota_alert_id?: string | number }
      if (quota_alert_id === undefined || quota_alert_id === '') throw httpError(400, 'quota_alert_id is required')
      const row = await model.findByPk(quota_alert_id)
      if (!row) {
        throw httpError(404, 'metering_quota_alert not found')
      }
      await row.update(toModelAttributes(input) as any)
      return toApiAttributes<QuotaAlertResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteQuotaAlert(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.metering_quota_alert.schema(schema!);
      const { quota_alert_id } = (request?.params ?? {}) as { quota_alert_id?: string | number }
      if (quota_alert_id === undefined || quota_alert_id === '') throw httpError(400, 'quota_alert_id is required')
      const deletedCount = await model.destroy({ where: { quotaAlertId: quota_alert_id } })
      if (deletedCount === 0) throw httpError(404, 'metering_quota_alert not found')
      return
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
