import type { EnvironmentsRequest } from './types/EnvironmentsRequest'
import type { EnvironmentsResponse } from './types/EnvironmentsResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { EnvironmentsController } from './EnvironmentsController'

export class EnvironmentsService implements EnvironmentsController {
  public async listEnvironments(app: FastifyInstance, request?: FastifyRequest): Promise<EnvironmentsResponse[]> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelBbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.environments.schema(schema!)
      const rows = await model.findAll()
      return rows.map((row) => row.get({ plain: true })) as EnvironmentsResponse[]
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async createEnvironment(app: FastifyInstance, input: EnvironmentsRequest, request?: FastifyRequest): Promise<EnvironmentsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelBbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.environments.schema(schema!)
      const row = await model.create(input as any)
      return row.get({ plain: true }) as EnvironmentsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async getEnvironmentsById(app: FastifyInstance, request?: FastifyRequest): Promise<EnvironmentsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelBbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.environments.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
      if (!row) {
        throw new Error('environments not found')
      }
      return row.get({ plain: true }) as EnvironmentsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async updateEnvironment(app: FastifyInstance, input: EnvironmentsRequest, request?: FastifyRequest): Promise<EnvironmentsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelBbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.environments.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
      if (!row) {
        throw new Error('environments not found')
      }
      await row.update(input as any)
      return row.get({ plain: true }) as EnvironmentsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async deleteEnvironment(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelBbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.environments.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      await model.destroy({ where: { id } })
      return undefined as void
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
