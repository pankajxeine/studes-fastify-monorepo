import type { CpanelCompaniesRequest } from './types/CpanelCompaniesRequest'
import type { CpanelCompaniesResponse } from './types/CpanelCompaniesResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { CpanelCompaniesController } from './CpanelCompaniesController'

export class CpanelCompaniesService implements CpanelCompaniesController {
  public async listCpanelCompanies(app: FastifyInstance, request?: FastifyRequest): Promise<CpanelCompaniesResponse[]> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.cpanel_companies.schema(schema!)
      const rows = await model.findAll()
      return rows.map((row) => row.get({ plain: true })) as CpanelCompaniesResponse[]
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async createCpanelCompanie(app: FastifyInstance, input: CpanelCompaniesRequest, request?: FastifyRequest): Promise<CpanelCompaniesResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.cpanel_companies.schema(schema!)
      const row = await model.create(input as any)
      return row.get({ plain: true }) as CpanelCompaniesResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async getCpanelCompaniesById(app: FastifyInstance, request?: FastifyRequest): Promise<CpanelCompaniesResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.cpanel_companies.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
      if (!row) {
        throw new Error('cpanel_companies not found')
      }
      return row.get({ plain: true }) as CpanelCompaniesResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async updateCpanelCompanie(app: FastifyInstance, input: CpanelCompaniesRequest, request?: FastifyRequest): Promise<CpanelCompaniesResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.cpanel_companies.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
      if (!row) {
        throw new Error('cpanel_companies not found')
      }
      await row.update(input as any)
      return row.get({ plain: true }) as CpanelCompaniesResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async deleteCpanelCompanie(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.cpanel_companies.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      await model.destroy({ where: { id } })
      return undefined as void
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
