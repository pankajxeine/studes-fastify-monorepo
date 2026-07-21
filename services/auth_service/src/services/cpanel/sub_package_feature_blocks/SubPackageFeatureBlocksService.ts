import type { SubPackageFeatureBlocksRequest } from './types/SubPackageFeatureBlocksRequest'
import type { SubPackageFeatureBlocksResponse } from './types/SubPackageFeatureBlocksResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { SubPackageFeatureBlocksController } from './SubPackageFeatureBlocksController'

export class SubPackageFeatureBlocksService implements SubPackageFeatureBlocksController {
  public async listSubPackageFeatureBlocks(app: FastifyInstance, request?: FastifyRequest): Promise<SubPackageFeatureBlocksResponse[]> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.sub_package_feature_blocks.schema(schema!)
      const rows = await model.findAll()
      return rows.map((row) => row.get({ plain: true })) as SubPackageFeatureBlocksResponse[]
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async createSubPackageFeatureBlock(app: FastifyInstance, input: SubPackageFeatureBlocksRequest, request?: FastifyRequest): Promise<SubPackageFeatureBlocksResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.sub_package_feature_blocks.schema(schema!)
      const row = await model.create(input as any)
      return row.get({ plain: true }) as SubPackageFeatureBlocksResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async getSubPackageFeatureBlocksById(app: FastifyInstance, request?: FastifyRequest): Promise<SubPackageFeatureBlocksResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.sub_package_feature_blocks.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
      if (!row) {
        throw new Error('sub_package_feature_blocks not found')
      }
      return row.get({ plain: true }) as SubPackageFeatureBlocksResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async updateSubPackageFeatureBlock(app: FastifyInstance, input: SubPackageFeatureBlocksRequest, request?: FastifyRequest): Promise<SubPackageFeatureBlocksResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.sub_package_feature_blocks.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
      if (!row) {
        throw new Error('sub_package_feature_blocks not found')
      }
      await row.update(input as any)
      return row.get({ plain: true }) as SubPackageFeatureBlocksResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async deleteSubPackageFeatureBlock(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.sub_package_feature_blocks.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      await model.destroy({ where: { id } })
      return undefined as void
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
