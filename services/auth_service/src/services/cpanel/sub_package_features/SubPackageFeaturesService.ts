import type { SubPackageFeaturesRequest } from './types/SubPackageFeaturesRequest'
import type { SubPackageFeaturesResponse } from './types/SubPackageFeaturesResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { SubPackageFeaturesController } from './SubPackageFeaturesController'

export class SubPackageFeaturesService implements SubPackageFeaturesController {
  public async listSubPackageFeatures(app: FastifyInstance, request?: FastifyRequest): Promise<SubPackageFeaturesResponse[]> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.sub_package_features.schema(schema!)
      const rows = await model.findAll()
      return rows.map((row) => row.get({ plain: true })) as SubPackageFeaturesResponse[]
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async createSubPackageFeature(app: FastifyInstance, input: SubPackageFeaturesRequest, request?: FastifyRequest): Promise<SubPackageFeaturesResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.sub_package_features.schema(schema!)
      const row = await model.create(input as any)
      return row.get({ plain: true }) as SubPackageFeaturesResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async getSubPackageFeaturesById(app: FastifyInstance, request?: FastifyRequest): Promise<SubPackageFeaturesResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.sub_package_features.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
      if (!row) {
        throw new Error('sub_package_features not found')
      }
      return row.get({ plain: true }) as SubPackageFeaturesResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async updateSubPackageFeature(app: FastifyInstance, input: SubPackageFeaturesRequest, request?: FastifyRequest): Promise<SubPackageFeaturesResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.sub_package_features.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
      if (!row) {
        throw new Error('sub_package_features not found')
      }
      await row.update(input as any)
      return row.get({ plain: true }) as SubPackageFeaturesResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async deleteSubPackageFeature(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.sub_package_features.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      await model.destroy({ where: { id } })
      return undefined as void
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
