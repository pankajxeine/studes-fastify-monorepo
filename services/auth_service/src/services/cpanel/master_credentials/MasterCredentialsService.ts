import type { MasterCredentialsRequest } from './types/MasterCredentialsRequest'
import type { MasterCredentialsResponse } from './types/MasterCredentialsResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { MasterCredentialsController } from './MasterCredentialsController'

export class MasterCredentialsService implements MasterCredentialsController {
  public async listMasterCredentials(app: FastifyInstance, request?: FastifyRequest): Promise<MasterCredentialsResponse[]> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelBbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.master_credentials.schema(schema!)
      const rows = await model.findAll()
      return rows.map((row) => row.get({ plain: true })) as MasterCredentialsResponse[]
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async createMasterCredential(app: FastifyInstance, input: MasterCredentialsRequest, request?: FastifyRequest): Promise<MasterCredentialsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelBbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.master_credentials.schema(schema!)
      const row = await model.create(input as any)
      return row.get({ plain: true }) as MasterCredentialsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async getMasterCredentialsById(app: FastifyInstance, request?: FastifyRequest): Promise<MasterCredentialsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelBbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.master_credentials.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
      if (!row) {
        throw new Error('master_credentials not found')
      }
      return row.get({ plain: true }) as MasterCredentialsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async updateMasterCredential(app: FastifyInstance, input: MasterCredentialsRequest, request?: FastifyRequest): Promise<MasterCredentialsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelBbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.master_credentials.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
      if (!row) {
        throw new Error('master_credentials not found')
      }
      await row.update(input as any)
      return row.get({ plain: true }) as MasterCredentialsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async deleteMasterCredential(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelBbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.master_credentials.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      await model.destroy({ where: { id } })
      return undefined as void
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
