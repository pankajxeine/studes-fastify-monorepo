import type { FeatureFieldsRequest } from './types/FeatureFieldsRequest'
import type { FeatureFieldsResponse } from './types/FeatureFieldsResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { FeatureFieldsController } from './FeatureFieldsController'

export class FeatureFieldsService implements FeatureFieldsController {
  public async listFeatureFields(app: FastifyInstance, request?: FastifyRequest): Promise<FeatureFieldsResponse[]> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelBbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.feature_fields.schema(schema!)
      const rows = await model.findAll()
      return rows.map((row) => row.get({ plain: true })) as FeatureFieldsResponse[]
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async createFeatureField(app: FastifyInstance, input: FeatureFieldsRequest, request?: FastifyRequest): Promise<FeatureFieldsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelBbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.feature_fields.schema(schema!)
      const row = await model.create(input as any)
      return row.get({ plain: true }) as FeatureFieldsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async getFeatureFieldsById(app: FastifyInstance, request?: FastifyRequest): Promise<FeatureFieldsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelBbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.feature_fields.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
      if (!row) {
        throw new Error('feature_fields not found')
      }
      return row.get({ plain: true }) as FeatureFieldsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async updateFeatureField(app: FastifyInstance, input: FeatureFieldsRequest, request?: FastifyRequest): Promise<FeatureFieldsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelBbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.feature_fields.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
      if (!row) {
        throw new Error('feature_fields not found')
      }
      await row.update(input as any)
      return row.get({ plain: true }) as FeatureFieldsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async deleteFeatureField(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelBbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.feature_fields.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      await model.destroy({ where: { id } })
      return undefined as void
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
