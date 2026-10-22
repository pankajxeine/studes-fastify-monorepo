import type { WizardContentsRequest } from './types/WizardContentsRequest'
import type { WizardContentsResponse } from './types/WizardContentsResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { WizardContentsController, ListItem, PaginatedResponse } from './WizardContentsController'

import { verifyDbSchema, verifyDbModel } from '../../../core/helper/db_utils';


export class WizardContentsService implements WizardContentsController {
      public async listWizardContents(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<WizardContentsResponse[]>>> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const model = models.wizard_contents.schema(schema!);
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
        data: rows.map((row) => row.get({ plain: true })) as ListItem<WizardContentsResponse[]>[],
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

      public async createWizardContent(app: FastifyInstance, input: WizardContentsRequest, request?: FastifyRequest): Promise<WizardContentsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const model = models.wizard_contents.schema(schema!);
      const row = await models.wizard_contents.schema(schema!).create(input as any)
      return row.get({ plain: true }) as WizardContentsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getWizardContentsById(app: FastifyInstance, request?: FastifyRequest): Promise<WizardContentsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const model = models.wizard_contents.schema(schema!);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
      if (!row) {
        throw new Error('wizard_contents not found')
      }
      return row.get({ plain: true }) as WizardContentsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateWizardContent(app: FastifyInstance, input: WizardContentsRequest, request?: FastifyRequest): Promise<WizardContentsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const model = models.wizard_contents.schema(schema!);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
      if (!row) {
        throw new Error('wizard_contents not found')
      }
      await row.update(input as any)
      return row.get({ plain: true }) as WizardContentsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteWizardContent(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const model = models.wizard_contents.schema(schema!);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      await models.wizard_contents.schema(schema!).destroy({ where: { id } })
      return undefined as void
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
