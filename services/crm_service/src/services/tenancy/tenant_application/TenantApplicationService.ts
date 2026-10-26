import type { TenantApplicationRequest } from './types/TenantApplicationRequest'
import type { TenantApplicationUpdateRequest } from './types/TenantApplicationUpdateRequest'
import type { TenantApplicationResponse } from './types/TenantApplicationResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { TenantApplicationController } from './TenantApplicationController'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

import { verifyDbSchema, verifyDbModel } from '../../../core/helper/db_utils'
import {toApiAttributes } from '../../../core/helper/api_helper';

import { toModelAttributes } from '../../../core/helper/api_helper';

function httpError(statusCode: number, message: string): Error & { statusCode: number } {
  return Object.assign(new Error(message), { statusCode })
}


export class TenantApplicationService implements TenantApplicationController {
      public async listTenantApplication(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<TenantApplicationResponse[]>>> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.tenancy_tenant_application.schema(schema!);
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
        data: rows.map((row) => toApiAttributes<ListItem<TenantApplicationResponse[]>>(row.get({ plain: true }) as Record<string, unknown>)),
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

      public async createTenantApplication(app: FastifyInstance, input: TenantApplicationRequest, request?: FastifyRequest): Promise<TenantApplicationResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.tenancy_tenant_application.schema(schema!);
      const row = await model.create(toModelAttributes(input) as any)
      return toApiAttributes<TenantApplicationResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getTenantApplicationById(app: FastifyInstance, request?: FastifyRequest): Promise<TenantApplicationResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.tenancy_tenant_application.schema(schema!);
      const { tenant_application_id } = (request?.params ?? {}) as { tenant_application_id?: string | number }
      if (tenant_application_id === undefined || tenant_application_id === '') throw httpError(400, 'tenant_application_id is required')
      const row = await model.findByPk(tenant_application_id)
      if (!row) {
        throw httpError(404, 'tenancy_tenant_application not found')
      }
      return toApiAttributes<TenantApplicationResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateTenantApplication(app: FastifyInstance, input: TenantApplicationUpdateRequest, request?: FastifyRequest): Promise<TenantApplicationResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.tenancy_tenant_application.schema(schema!);
      const { tenant_application_id } = (request?.params ?? {}) as { tenant_application_id?: string | number }
      if (tenant_application_id === undefined || tenant_application_id === '') throw httpError(400, 'tenant_application_id is required')
      const row = await model.findByPk(tenant_application_id)
      if (!row) {
        throw httpError(404, 'tenancy_tenant_application not found')
      }
      await row.update(toModelAttributes(input) as any)
      return toApiAttributes<TenantApplicationResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteTenantApplication(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.tenancy_tenant_application.schema(schema!);
      const { tenant_application_id } = (request?.params ?? {}) as { tenant_application_id?: string | number }
      if (tenant_application_id === undefined || tenant_application_id === '') throw httpError(400, 'tenant_application_id is required')
      const deletedCount = await model.destroy({ where: { tenantApplicationId: tenant_application_id } })
      if (deletedCount === 0) throw httpError(404, 'tenancy_tenant_application not found')
      return
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
