import type { IndustryEnvironmentsRequest } from './types/IndustryEnvironmentsRequest'
import type { IndustryEnvironmentsResponse } from './types/IndustryEnvironmentsResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { IndustryEnvironmentsController } from './IndustryEnvironmentsController'

export class IndustryEnvironmentsService implements IndustryEnvironmentsController {
  public async listIndustryEnvironments(app: FastifyInstance, request?: FastifyRequest): Promise<IndustryEnvironmentsResponse[]> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.industry_environments.schema(schema!)
      const rows = await model.findAll()
      return rows.map((row) => row.get({ plain: true })) as IndustryEnvironmentsResponse[]
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async createIndustryEnvironment(app: FastifyInstance, input: IndustryEnvironmentsRequest, request?: FastifyRequest): Promise<IndustryEnvironmentsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.industry_environments.schema(schema!)
      const row = await model.create(input as any)
      return row.get({ plain: true }) as IndustryEnvironmentsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async getIndustryEnvironmentsById(app: FastifyInstance, request?: FastifyRequest): Promise<IndustryEnvironmentsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.industry_environments.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
      if (!row) {
        throw new Error('industry_environments not found')
      }
      return row.get({ plain: true }) as IndustryEnvironmentsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async updateIndustryEnvironment(app: FastifyInstance, input: IndustryEnvironmentsRequest, request?: FastifyRequest): Promise<IndustryEnvironmentsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.industry_environments.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
      if (!row) {
        throw new Error('industry_environments not found')
      }
      await row.update(input as any)
      return row.get({ plain: true }) as IndustryEnvironmentsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async deleteIndustryEnvironment(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.industry_environments.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      await model.destroy({ where: { id } })
      return undefined as void
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
