import type { PackagesRequest } from './types/PackagesRequest'
import type { PackagesResponse } from './types/PackagesResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { PackagesController } from './PackagesController'

export class PackagesService implements PackagesController {
  public async listPackages(app: FastifyInstance, request?: FastifyRequest): Promise<PackagesResponse[]> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelBbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.packages.schema(schema!)
      const rows = await model.findAll()
      return rows.map((row) => row.get({ plain: true })) as PackagesResponse[]
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async createPackage(app: FastifyInstance, input: PackagesRequest, request?: FastifyRequest): Promise<PackagesResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelBbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.packages.schema(schema!)
      const row = await model.create(input as any)
      return row.get({ plain: true }) as PackagesResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async getPackagesById(app: FastifyInstance, request?: FastifyRequest): Promise<PackagesResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelBbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.packages.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
      if (!row) {
        throw new Error('packages not found')
      }
      return row.get({ plain: true }) as PackagesResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async updatePackage(app: FastifyInstance, input: PackagesRequest, request?: FastifyRequest): Promise<PackagesResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelBbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.packages.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
      if (!row) {
        throw new Error('packages not found')
      }
      await row.update(input as any)
      return row.get({ plain: true }) as PackagesResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async deletePackage(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelBbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.packages.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      await model.destroy({ where: { id } })
      return undefined as void
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
