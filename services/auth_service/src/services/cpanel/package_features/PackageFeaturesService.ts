import type { PackageFeaturesRequest } from './types/PackageFeaturesRequest'
import type { PackageFeaturesResponse } from './types/PackageFeaturesResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { PackageFeaturesController } from './PackageFeaturesController'

export class PackageFeaturesService implements PackageFeaturesController {
  public async listPackageFeatures(app: FastifyInstance, request?: FastifyRequest): Promise<PackageFeaturesResponse[]> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelBbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.package_features.schema(schema!)
      const rows = await model.findAll()
      return rows.map((row) => row.get({ plain: true })) as PackageFeaturesResponse[]
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async createPackageFeature(app: FastifyInstance, input: PackageFeaturesRequest, request?: FastifyRequest): Promise<PackageFeaturesResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelBbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.package_features.schema(schema!)
      const row = await model.create(input as any)
      return row.get({ plain: true }) as PackageFeaturesResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async getPackageFeaturesById(app: FastifyInstance, request?: FastifyRequest): Promise<PackageFeaturesResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelBbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.package_features.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
      if (!row) {
        throw new Error('package_features not found')
      }
      return row.get({ plain: true }) as PackageFeaturesResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async updatePackageFeature(app: FastifyInstance, input: PackageFeaturesRequest, request?: FastifyRequest): Promise<PackageFeaturesResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelBbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.package_features.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
      if (!row) {
        throw new Error('package_features not found')
      }
      await row.update(input as any)
      return row.get({ plain: true }) as PackageFeaturesResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async deletePackageFeature(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelBbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.package_features.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      await model.destroy({ where: { id } })
      return undefined as void
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
