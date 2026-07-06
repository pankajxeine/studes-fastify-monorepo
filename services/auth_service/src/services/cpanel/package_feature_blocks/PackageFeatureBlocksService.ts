import type { PackageFeatureBlocksRequest } from './types/PackageFeatureBlocksRequest'
import type { PackageFeatureBlocksResponse } from './types/PackageFeatureBlocksResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { PackageFeatureBlocksController } from './PackageFeatureBlocksController'

export class PackageFeatureBlocksService implements PackageFeatureBlocksController {
  public async listPackageFeatureBlocks(app: FastifyInstance, request?: FastifyRequest): Promise<PackageFeatureBlocksResponse[]> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelBbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.package_feature_blocks.schema(schema!)
      const rows = await model.findAll()
      return rows.map((row) => row.get({ plain: true })) as PackageFeatureBlocksResponse[]
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async createPackageFeatureBlock(app: FastifyInstance, input: PackageFeatureBlocksRequest, request?: FastifyRequest): Promise<PackageFeatureBlocksResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelBbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.package_feature_blocks.schema(schema!)
      const row = await model.create(input as any)
      return row.get({ plain: true }) as PackageFeatureBlocksResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async getPackageFeatureBlocksById(app: FastifyInstance, request?: FastifyRequest): Promise<PackageFeatureBlocksResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelBbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.package_feature_blocks.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
      if (!row) {
        throw new Error('package_feature_blocks not found')
      }
      return row.get({ plain: true }) as PackageFeatureBlocksResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async updatePackageFeatureBlock(app: FastifyInstance, input: PackageFeatureBlocksRequest, request?: FastifyRequest): Promise<PackageFeatureBlocksResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelBbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.package_feature_blocks.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
      if (!row) {
        throw new Error('package_feature_blocks not found')
      }
      await row.update(input as any)
      return row.get({ plain: true }) as PackageFeatureBlocksResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async deletePackageFeatureBlock(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelBbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.package_feature_blocks.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      await model.destroy({ where: { id } })
      return undefined as void
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
