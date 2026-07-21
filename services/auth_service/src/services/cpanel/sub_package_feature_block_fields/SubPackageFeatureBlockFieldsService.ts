import type { SubPackageFeatureBlockFieldsRequest } from './types/SubPackageFeatureBlockFieldsRequest'
import type { SubPackageFeatureBlockFieldsResponse } from './types/SubPackageFeatureBlockFieldsResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { SubPackageFeatureBlockFieldsController } from './SubPackageFeatureBlockFieldsController'

export class SubPackageFeatureBlockFieldsService implements SubPackageFeatureBlockFieldsController {
  public async listSubPackageFeatureBlockFields(app: FastifyInstance, request?: FastifyRequest): Promise<SubPackageFeatureBlockFieldsResponse[]> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.sub_package_feature_block_fields.schema(schema!)
      const rows = await model.findAll()
      return rows.map((row) => row.get({ plain: true })) as SubPackageFeatureBlockFieldsResponse[]
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async createSubPackageFeatureBlockField(app: FastifyInstance, input: SubPackageFeatureBlockFieldsRequest, request?: FastifyRequest): Promise<SubPackageFeatureBlockFieldsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.sub_package_feature_block_fields.schema(schema!)
      const row = await model.create(input as any)
      return row.get({ plain: true }) as SubPackageFeatureBlockFieldsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async getSubPackageFeatureBlockFieldsById(app: FastifyInstance, request?: FastifyRequest): Promise<SubPackageFeatureBlockFieldsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.sub_package_feature_block_fields.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
      if (!row) {
        throw new Error('sub_package_feature_block_fields not found')
      }
      return row.get({ plain: true }) as SubPackageFeatureBlockFieldsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async updateSubPackageFeatureBlockField(app: FastifyInstance, input: SubPackageFeatureBlockFieldsRequest, request?: FastifyRequest): Promise<SubPackageFeatureBlockFieldsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.sub_package_feature_block_fields.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
      if (!row) {
        throw new Error('sub_package_feature_block_fields not found')
      }
      await row.update(input as any)
      return row.get({ plain: true }) as SubPackageFeatureBlockFieldsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async deleteSubPackageFeatureBlockField(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.sub_package_feature_block_fields.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      await model.destroy({ where: { id } })
      return undefined as void
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
