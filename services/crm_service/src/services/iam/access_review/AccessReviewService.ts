import type { AccessReviewRequest } from './types/AccessReviewRequest'
import type { AccessReviewUpdateRequest } from './types/AccessReviewUpdateRequest'
import type { AccessReviewResponse } from './types/AccessReviewResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { AccessReviewController } from './AccessReviewController'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

import { verifyDbSchema, verifyDbModel } from '../../../core/helper/db_utils'
import {toApiAttributes } from '../../../core/helper/api_helper';

import { toModelAttributes } from '../../../core/helper/api_helper';

function httpError(statusCode: number, message: string): Error & { statusCode: number } {
  return Object.assign(new Error(message), { statusCode })
}


export class AccessReviewService implements AccessReviewController {
      public async listAccessReview(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<AccessReviewResponse[]>>> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.iam_access_review.schema(schema!);
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
        data: rows.map((row) => toApiAttributes<ListItem<AccessReviewResponse[]>>(row.get({ plain: true }) as Record<string, unknown>)),
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

      public async createAccessReview(app: FastifyInstance, input: AccessReviewRequest, request?: FastifyRequest): Promise<AccessReviewResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.iam_access_review.schema(schema!);
      const row = await model.create(toModelAttributes(input) as any)
      return toApiAttributes<AccessReviewResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getAccessReviewById(app: FastifyInstance, request?: FastifyRequest): Promise<AccessReviewResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.iam_access_review.schema(schema!);
      const { access_review_id } = (request?.params ?? {}) as { access_review_id?: string | number }
      if (access_review_id === undefined || access_review_id === '') throw httpError(400, 'access_review_id is required')
      const row = await model.findByPk(access_review_id)
      if (!row) {
        throw httpError(404, 'iam_access_review not found')
      }
      return toApiAttributes<AccessReviewResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateAccessReview(app: FastifyInstance, input: AccessReviewUpdateRequest, request?: FastifyRequest): Promise<AccessReviewResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.iam_access_review.schema(schema!);
      const { access_review_id } = (request?.params ?? {}) as { access_review_id?: string | number }
      if (access_review_id === undefined || access_review_id === '') throw httpError(400, 'access_review_id is required')
      const row = await model.findByPk(access_review_id)
      if (!row) {
        throw httpError(404, 'iam_access_review not found')
      }
      await row.update(toModelAttributes(input) as any)
      return toApiAttributes<AccessReviewResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteAccessReview(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.iam_access_review.schema(schema!);
      const { access_review_id } = (request?.params ?? {}) as { access_review_id?: string | number }
      if (access_review_id === undefined || access_review_id === '') throw httpError(400, 'access_review_id is required')
      const deletedCount = await model.destroy({ where: { accessReviewId: access_review_id } })
      if (deletedCount === 0) throw httpError(404, 'iam_access_review not found')
      return
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
