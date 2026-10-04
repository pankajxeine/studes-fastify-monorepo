import type { InstituteAuditLogsRequest } from './types/InstituteAuditLogsRequest'
import type { InstituteAuditLogsResponse } from './types/InstituteAuditLogsResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { InstituteAuditLogsController, ListItem, PaginatedResponse } from './InstituteAuditLogsController'

export class InstituteAuditLogsService implements InstituteAuditLogsController {
      public async listInstituteAuditLogs(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<InstituteAuditLogsResponse[]>>> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.institute_audit_logs.schema(schema!)
      const query = (request?.query ?? {}) as { page?: string | number; limit?: string | number }
      const parsePositiveInteger = (value: string | number | undefined, fallback: number) => {
        const parsed = Number(value)
        return Number.isInteger(parsed) && parsed > 0 ? parsed : fallback
      }
      const page = parsePositiveInteger(query.page, 1)
      const limit = Math.min(parsePositiveInteger(query.limit, 20), 100)
      const { count, rows } = await model.findAndCountAll({
        limit,
        offset: (page - 1) * limit,
      })
      return {
        data: rows.map((row) => row.get({ plain: true })) as ListItem<InstituteAuditLogsResponse[]>[],
        pagination: {
          page,
          limit,
          total: count,
          totalPages: Math.ceil(count / limit),
        },
      }
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
