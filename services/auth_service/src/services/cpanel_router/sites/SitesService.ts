import type { SitesRequest } from './types/SitesRequest'
import type { SitesResponse } from './types/SitesResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { SitesController } from './SitesController'

export class SitesService implements SitesController {
  public async listSites(app: FastifyInstance, request?: FastifyRequest): Promise<SitesResponse[]> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelBbSchema;
      // bind model to tenant schema
      const model = app.cpanelRouterModels.sites.schema(schema!)
      const rows = await model.findAll()
      return rows.map((row) => row.get({ plain: true })) as SitesResponse[]
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async createSite(app: FastifyInstance, input: SitesRequest, request?: FastifyRequest): Promise<SitesResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelBbSchema;
      // bind model to tenant schema
      const model = app.cpanelRouterModels.sites.schema(schema!)
      const row = await model.create(input as any)
      return row.get({ plain: true }) as SitesResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async getSitesById(app: FastifyInstance, request?: FastifyRequest): Promise<SitesResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelBbSchema;
      // bind model to tenant schema
      const model = app.cpanelRouterModels.sites.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
      if (!row) {
        throw new Error('sites not found')
      }
      return row.get({ plain: true }) as SitesResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async updateSite(app: FastifyInstance, input: SitesRequest, request?: FastifyRequest): Promise<SitesResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelBbSchema;
      // bind model to tenant schema
      const model = app.cpanelRouterModels.sites.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
      if (!row) {
        throw new Error('sites not found')
      }
      await row.update(input as any)
      return row.get({ plain: true }) as SitesResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async deleteSite(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelBbSchema;
      // bind model to tenant schema
      const model = app.cpanelRouterModels.sites.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      await model.destroy({ where: { id } })
      return undefined as void
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
