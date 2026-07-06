import type { SubPackagesRequest } from './types/SubPackagesRequest'
import type { SubPackagesResponse } from './types/SubPackagesResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { SubPackagesController } from './SubPackagesController'

export class SubPackagesService implements SubPackagesController {
  public async listSubPackages(app: FastifyInstance, request?: FastifyRequest): Promise<SubPackagesResponse[]> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelBbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.sub_packages.schema(schema!)
      const rows = await model.findAll()
      return rows.map((row) => row.get({ plain: true })) as SubPackagesResponse[]
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async createSubPackage(app: FastifyInstance, input: SubPackagesRequest, request?: FastifyRequest): Promise<SubPackagesResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelBbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.sub_packages.schema(schema!)
      const row = await model.create(input as any)
      return row.get({ plain: true }) as SubPackagesResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async getSubPackagesById(app: FastifyInstance, request?: FastifyRequest): Promise<SubPackagesResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelBbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.sub_packages.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
      if (!row) {
        throw new Error('sub_packages not found')
      }
      return row.get({ plain: true }) as SubPackagesResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async updateSubPackage(app: FastifyInstance, input: SubPackagesRequest, request?: FastifyRequest): Promise<SubPackagesResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelBbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.sub_packages.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
      if (!row) {
        throw new Error('sub_packages not found')
      }
      await row.update(input as any)
      return row.get({ plain: true }) as SubPackagesResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async deleteSubPackage(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelBbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.sub_packages.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      await model.destroy({ where: { id } })
      return undefined as void
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
