import type { KbArticleRequest } from './types/KbArticleRequest'
import type { KbArticleUpdateRequest } from './types/KbArticleUpdateRequest'
import type { KbArticleResponse } from './types/KbArticleResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { KbArticleController } from './KbArticleController'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

import { verifyDbSchema, verifyDbModel } from '../../../core/helper/db_utils'
import {toApiAttributes } from '../../../core/helper/api_helper';

import { toModelAttributes } from '../../../core/helper/api_helper';

function httpError(statusCode: number, message: string): Error & { statusCode: number } {
  return Object.assign(new Error(message), { statusCode })
}


export class KbArticleService implements KbArticleController {
      public async listKbArticle(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<KbArticleResponse[]>>> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.support_kb_article.schema(schema!);
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
        data: rows.map((row) => toApiAttributes<ListItem<KbArticleResponse[]>>(row.get({ plain: true }) as Record<string, unknown>)),
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

      public async createKbArticle(app: FastifyInstance, input: KbArticleRequest, request?: FastifyRequest): Promise<KbArticleResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.support_kb_article.schema(schema!);
      const row = await model.create(toModelAttributes(input) as any)
      return toApiAttributes<KbArticleResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getKbArticleById(app: FastifyInstance, request?: FastifyRequest): Promise<KbArticleResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.support_kb_article.schema(schema!);
      const { kb_article_id } = (request?.params ?? {}) as { kb_article_id?: string | number }
      if (kb_article_id === undefined || kb_article_id === '') throw httpError(400, 'kb_article_id is required')
      const row = await model.findByPk(kb_article_id)
      if (!row) {
        throw httpError(404, 'support_kb_article not found')
      }
      return toApiAttributes<KbArticleResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateKbArticle(app: FastifyInstance, input: KbArticleUpdateRequest, request?: FastifyRequest): Promise<KbArticleResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.support_kb_article.schema(schema!);
      const { kb_article_id } = (request?.params ?? {}) as { kb_article_id?: string | number }
      if (kb_article_id === undefined || kb_article_id === '') throw httpError(400, 'kb_article_id is required')
      const row = await model.findByPk(kb_article_id)
      if (!row) {
        throw httpError(404, 'support_kb_article not found')
      }
      await row.update(toModelAttributes(input) as any)
      return toApiAttributes<KbArticleResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteKbArticle(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.support_kb_article.schema(schema!);
      const { kb_article_id } = (request?.params ?? {}) as { kb_article_id?: string | number }
      if (kb_article_id === undefined || kb_article_id === '') throw httpError(400, 'kb_article_id is required')
      const deletedCount = await model.destroy({ where: { kbArticleId: kb_article_id } })
      if (deletedCount === 0) throw httpError(404, 'support_kb_article not found')
      return
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
