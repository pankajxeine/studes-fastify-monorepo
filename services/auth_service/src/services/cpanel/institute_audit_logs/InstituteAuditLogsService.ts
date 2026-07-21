import type { InstituteAuditLogsRequest } from './types/InstituteAuditLogsRequest'
import type { InstituteAuditLogsResponse } from './types/InstituteAuditLogsResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { InstituteAuditLogsController } from './InstituteAuditLogsController'

export class InstituteAuditLogsService implements InstituteAuditLogsController {
  public async listInstituteAuditLogs(app: FastifyInstance, request?: FastifyRequest): Promise<InstituteAuditLogsResponse[]> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.institute_audit_logs.schema(schema!)
      const rows = await model.findAll()
      return rows.map((row) => row.get({ plain: true })) as InstituteAuditLogsResponse[]
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async createInstituteAuditLog(app: FastifyInstance, input: InstituteAuditLogsRequest, request?: FastifyRequest): Promise<InstituteAuditLogsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.institute_audit_logs.schema(schema!)
      const row = await model.create(input as any)
      return row.get({ plain: true }) as InstituteAuditLogsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async getInstituteAuditLogsById(app: FastifyInstance, request?: FastifyRequest): Promise<InstituteAuditLogsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.institute_audit_logs.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
      if (!row) {
        throw new Error('institute_audit_logs not found')
      }
      return row.get({ plain: true }) as InstituteAuditLogsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async updateInstituteAuditLog(app: FastifyInstance, input: InstituteAuditLogsRequest, request?: FastifyRequest): Promise<InstituteAuditLogsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.institute_audit_logs.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
      if (!row) {
        throw new Error('institute_audit_logs not found')
      }
      await row.update(input as any)
      return row.get({ plain: true }) as InstituteAuditLogsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async deleteInstituteAuditLog(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.institute_audit_logs.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      await model.destroy({ where: { id } })
      return undefined as void
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
