import type { CrmsRequest } from './types/CrmsRequest'
import type { CrmsResponse } from './types/CrmsResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { CrmsController } from './CrmsController'

export class CrmsService implements CrmsController {
  public async listCrms(app: FastifyInstance, request?: FastifyRequest): Promise<CrmsResponse[]> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelRouterModels.crms.schema(schema!)
      const rows = await model.findAll()
      return rows.map((row) => row.get({ plain: true })) as CrmsResponse[]
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async createCrm(app: FastifyInstance, input: CrmsRequest, request?: FastifyRequest): Promise<CrmsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelRouterModels.crms.schema(schema!)
      const row = await model.create(input as any)
      return row.get({ plain: true }) as CrmsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async getCrmsById(app: FastifyInstance, request?: FastifyRequest): Promise<CrmsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelRouterModels.crms.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
      if (!row) {
        throw new Error('crms not found')
      }
      return row.get({ plain: true }) as CrmsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async updateCrm(app: FastifyInstance, input: CrmsRequest, request?: FastifyRequest): Promise<CrmsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelRouterModels.crms.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
      if (!row) {
        throw new Error('crms not found')
      }
      await row.update(input as any)
      return row.get({ plain: true }) as CrmsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async deleteCrm(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelRouterModels.crms.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      await model.destroy({ where: { id } })
      return undefined as void
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
