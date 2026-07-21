import type { CpanelsRequest } from './types/CpanelsRequest'
import type { CpanelsResponse } from './types/CpanelsResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { CpanelsController } from './CpanelsController'

export class CpanelsService implements CpanelsController {
  public async listCpanels(app: FastifyInstance, request?: FastifyRequest): Promise<CpanelsResponse[]> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelRouterModels.cpanels.schema(schema!)
      const rows = await model.findAll()
      return rows.map((row) => row.get({ plain: true })) as CpanelsResponse[]
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async createCpanel(app: FastifyInstance, input: CpanelsRequest, request?: FastifyRequest): Promise<CpanelsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelRouterModels.cpanels.schema(schema!)
      const row = await model.create(input as any)
      return row.get({ plain: true }) as CpanelsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async getCpanelsById(app: FastifyInstance, request?: FastifyRequest): Promise<CpanelsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelRouterModels.cpanels.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
      if (!row) {
        throw new Error('cpanels not found')
      }
      return row.get({ plain: true }) as CpanelsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async updateCpanel(app: FastifyInstance, input: CpanelsRequest, request?: FastifyRequest): Promise<CpanelsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelRouterModels.cpanels.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
      if (!row) {
        throw new Error('cpanels not found')
      }
      await row.update(input as any)
      return row.get({ plain: true }) as CpanelsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async deleteCpanel(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelRouterModels.cpanels.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      await model.destroy({ where: { id } })
      return undefined as void
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
