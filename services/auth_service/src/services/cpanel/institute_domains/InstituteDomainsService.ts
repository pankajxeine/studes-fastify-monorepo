import type { InstituteDomainsRequest } from './types/InstituteDomainsRequest'
import type { InstituteDomainsResponse } from './types/InstituteDomainsResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { InstituteDomainsController } from './InstituteDomainsController'

export class InstituteDomainsService implements InstituteDomainsController {
  public async listInstituteDomains(app: FastifyInstance, request?: FastifyRequest): Promise<InstituteDomainsResponse[]> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.institute_domains.schema(schema!)
      const rows = await model.findAll()
      return rows.map((row) => row.get({ plain: true })) as InstituteDomainsResponse[]
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async createInstituteDomain(app: FastifyInstance, input: InstituteDomainsRequest, request?: FastifyRequest): Promise<InstituteDomainsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.institute_domains.schema(schema!)
      const row = await model.create(input as any)
      return row.get({ plain: true }) as InstituteDomainsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async getInstituteDomainsById(app: FastifyInstance, request?: FastifyRequest): Promise<InstituteDomainsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.institute_domains.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
      if (!row) {
        throw new Error('institute_domains not found')
      }
      return row.get({ plain: true }) as InstituteDomainsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async updateInstituteDomain(app: FastifyInstance, input: InstituteDomainsRequest, request?: FastifyRequest): Promise<InstituteDomainsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.institute_domains.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
      if (!row) {
        throw new Error('institute_domains not found')
      }
      await row.update(input as any)
      return row.get({ plain: true }) as InstituteDomainsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async deleteInstituteDomain(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.institute_domains.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      await model.destroy({ where: { id } })
      return undefined as void
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
