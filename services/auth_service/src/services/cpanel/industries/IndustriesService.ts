import type { IndustriesRequest } from './types/IndustriesRequest'
import type { IndustriesResponse } from './types/IndustriesResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { IndustriesController } from './IndustriesController'

export class IndustriesService implements IndustriesController {
  public async listIndustries(app: FastifyInstance, request?: FastifyRequest): Promise<IndustriesResponse[]> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelBbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.industries.schema(schema!)
      const rows = await model.findAll()
      return rows.map((row) => row.get({ plain: true })) as IndustriesResponse[]
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async createIndustrie(app: FastifyInstance, input: IndustriesRequest, request?: FastifyRequest): Promise<IndustriesResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelBbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.industries.schema(schema!)
      const row = await model.create(input as any)
      return row.get({ plain: true }) as IndustriesResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async getIndustriesById(app: FastifyInstance, request?: FastifyRequest): Promise<IndustriesResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelBbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.industries.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
      if (!row) {
        throw new Error('industries not found')
      }
      return row.get({ plain: true }) as IndustriesResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async updateIndustrie(app: FastifyInstance, input: IndustriesRequest, request?: FastifyRequest): Promise<IndustriesResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelBbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.industries.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
      if (!row) {
        throw new Error('industries not found')
      }
      await row.update(input as any)
      return row.get({ plain: true }) as IndustriesResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async deleteIndustrie(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelBbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.industries.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      await model.destroy({ where: { id } })
      return undefined as void
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
