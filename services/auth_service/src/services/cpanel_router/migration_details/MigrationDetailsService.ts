import type { MigrationDetailsRequest } from './types/MigrationDetailsRequest'
import type { MigrationDetailsResponse } from './types/MigrationDetailsResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { MigrationDetailsController } from './MigrationDetailsController'

export class MigrationDetailsService implements MigrationDetailsController {
  public async listMigrationDetails(app: FastifyInstance, request?: FastifyRequest): Promise<MigrationDetailsResponse[]> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelBbSchema;
      // bind model to tenant schema
      const model = app.cpanelRouterModels.migration_details.schema(schema!)
      const rows = await model.findAll()
      return rows.map((row) => row.get({ plain: true })) as MigrationDetailsResponse[]
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async createMigrationDetail(app: FastifyInstance, input: MigrationDetailsRequest, request?: FastifyRequest): Promise<MigrationDetailsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelBbSchema;
      // bind model to tenant schema
      const model = app.cpanelRouterModels.migration_details.schema(schema!)
      const row = await model.create(input as any)
      return row.get({ plain: true }) as MigrationDetailsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async getMigrationDetailsById(app: FastifyInstance, request?: FastifyRequest): Promise<MigrationDetailsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelBbSchema;
      // bind model to tenant schema
      const model = app.cpanelRouterModels.migration_details.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
      if (!row) {
        throw new Error('migration_details not found')
      }
      return row.get({ plain: true }) as MigrationDetailsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async updateMigrationDetail(app: FastifyInstance, input: MigrationDetailsRequest, request?: FastifyRequest): Promise<MigrationDetailsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelBbSchema;
      // bind model to tenant schema
      const model = app.cpanelRouterModels.migration_details.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
      if (!row) {
        throw new Error('migration_details not found')
      }
      await row.update(input as any)
      return row.get({ plain: true }) as MigrationDetailsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async deleteMigrationDetail(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelBbSchema;
      // bind model to tenant schema
      const model = app.cpanelRouterModels.migration_details.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      await model.destroy({ where: { id } })
      return undefined as void
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
