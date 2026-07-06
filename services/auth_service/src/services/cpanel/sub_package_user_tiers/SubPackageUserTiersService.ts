import type { SubPackageUserTiersRequest } from './types/SubPackageUserTiersRequest'
import type { SubPackageUserTiersResponse } from './types/SubPackageUserTiersResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { SubPackageUserTiersController } from './SubPackageUserTiersController'

export class SubPackageUserTiersService implements SubPackageUserTiersController {
  public async listSubPackageUserTiers(app: FastifyInstance, request?: FastifyRequest): Promise<SubPackageUserTiersResponse[]> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelBbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.sub_package_user_tiers.schema(schema!)
      const rows = await model.findAll()
      return rows.map((row) => row.get({ plain: true })) as SubPackageUserTiersResponse[]
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async createSubPackageUserTier(app: FastifyInstance, input: SubPackageUserTiersRequest, request?: FastifyRequest): Promise<SubPackageUserTiersResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelBbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.sub_package_user_tiers.schema(schema!)
      const row = await model.create(input as any)
      return row.get({ plain: true }) as SubPackageUserTiersResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async getSubPackageUserTiersById(app: FastifyInstance, request?: FastifyRequest): Promise<SubPackageUserTiersResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelBbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.sub_package_user_tiers.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
      if (!row) {
        throw new Error('sub_package_user_tiers not found')
      }
      return row.get({ plain: true }) as SubPackageUserTiersResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async updateSubPackageUserTier(app: FastifyInstance, input: SubPackageUserTiersRequest, request?: FastifyRequest): Promise<SubPackageUserTiersResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelBbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.sub_package_user_tiers.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
      if (!row) {
        throw new Error('sub_package_user_tiers not found')
      }
      await row.update(input as any)
      return row.get({ plain: true }) as SubPackageUserTiersResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async deleteSubPackageUserTier(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelBbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.sub_package_user_tiers.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      await model.destroy({ where: { id } })
      return undefined as void
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
