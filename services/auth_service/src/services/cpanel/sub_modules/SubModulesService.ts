import type { SubModulesRequest } from './types/SubModulesRequest'
import type { SubModulesResponse } from './types/SubModulesResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { SubModulesController } from './SubModulesController'

export class SubModulesService implements SubModulesController {
  public async listSubModules(app: FastifyInstance, request?: FastifyRequest): Promise<SubModulesResponse[]> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.sub_modules.schema(schema!)
      const rows = await model.findAll()
      return rows.map((row) => row.get({ plain: true })) as SubModulesResponse[]
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async createSubModule(app: FastifyInstance, input: SubModulesRequest, request?: FastifyRequest): Promise<SubModulesResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.sub_modules.schema(schema!)
      const row = await model.create(input as any)
      return row.get({ plain: true }) as SubModulesResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async getSubModulesById(app: FastifyInstance, request?: FastifyRequest): Promise<SubModulesResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.sub_modules.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
      if (!row) {
        throw new Error('sub_modules not found')
      }
      return row.get({ plain: true }) as SubModulesResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async updateSubModule(app: FastifyInstance, input: SubModulesRequest, request?: FastifyRequest): Promise<SubModulesResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.sub_modules.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
      if (!row) {
        throw new Error('sub_modules not found')
      }
      await row.update(input as any)
      return row.get({ plain: true }) as SubModulesResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async deleteSubModule(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.sub_modules.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      await model.destroy({ where: { id } })
      return undefined as void
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
