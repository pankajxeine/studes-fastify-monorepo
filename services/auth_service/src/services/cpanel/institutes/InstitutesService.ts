import type { InstitutesRequest } from './types/InstitutesRequest'
import type { InstitutesResponse } from './types/InstitutesResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { InstitutesController } from './InstitutesController'

export class InstitutesService implements InstitutesController {
  public async listInstitutes(app: FastifyInstance, request?: FastifyRequest): Promise<InstitutesResponse[]> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.institutes.schema(schema!)
      const rows = await model.findAll()
      return rows.map((row) => row.get({ plain: true })) as InstitutesResponse[]
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async createInstitute(app: FastifyInstance, input: InstitutesRequest, request?: FastifyRequest): Promise<InstitutesResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.institutes.schema(schema!)
      const row = await model.create(input as any)
      return row.get({ plain: true }) as InstitutesResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async getInstitutesById(app: FastifyInstance, request?: FastifyRequest): Promise<InstitutesResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.institutes.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
      if (!row) {
        throw new Error('institutes not found')
      }
      return row.get({ plain: true }) as InstitutesResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async updateInstitute(app: FastifyInstance, input: InstitutesRequest, request?: FastifyRequest): Promise<InstitutesResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.institutes.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
      if (!row) {
        throw new Error('institutes not found')
      }
      await row.update(input as any)
      return row.get({ plain: true }) as InstitutesResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async deleteInstitute(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.institutes.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      await model.destroy({ where: { id } })
      return undefined as void
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
