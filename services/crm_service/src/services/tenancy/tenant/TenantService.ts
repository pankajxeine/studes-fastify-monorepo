import type { TenantRequest } from './types/TenantRequest'
import type { TenantUpdateRequest } from './types/TenantUpdateRequest'
import type { TenantResponse } from './types/TenantResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { TenantController } from './TenantController'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

import { verifyDbSchema, verifyDbModel } from '../../../core/helper/db_utils'
import {toApiAttributes } from '../../../core/helper/api_helper';

import { toModelAttributes } from '../../../core/helper/api_helper';

function httpError(statusCode: number, message: string): Error & { statusCode: number } {
  return Object.assign(new Error(message), { statusCode })
}


export class TenantService implements TenantController {
      public async listTenant(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<TenantResponse[]>>> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.tenancy_tenant.schema(schema!);
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
        data: rows.map((row) => toApiAttributes<ListItem<TenantResponse[]>>(row.get({ plain: true }) as Record<string, unknown>)),
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

      public async createTenant(app: FastifyInstance, input: TenantRequest, request?: FastifyRequest): Promise<TenantResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.tenancy_tenant.schema(schema!);
      const row = await model.create(toModelAttributes(input) as any)
      return toApiAttributes<TenantResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getTenantById(app: FastifyInstance, request?: FastifyRequest): Promise<TenantResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.tenancy_tenant.schema(schema!);
      const { tenant_id } = (request?.params ?? {}) as { tenant_id?: string | number }
      if (tenant_id === undefined || tenant_id === '') throw httpError(400, 'tenant_id is required')
      const row = await model.findByPk(tenant_id)
      if (!row) {
        throw httpError(404, 'tenancy_tenant not found')
      }
      return toApiAttributes<TenantResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateTenant(app: FastifyInstance, input: TenantUpdateRequest, request?: FastifyRequest): Promise<TenantResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.tenancy_tenant.schema(schema!);
      const { tenant_id } = (request?.params ?? {}) as { tenant_id?: string | number }
      if (tenant_id === undefined || tenant_id === '') throw httpError(400, 'tenant_id is required')
      const row = await model.findByPk(tenant_id)
      if (!row) {
        throw httpError(404, 'tenancy_tenant not found')
      }
      await row.update(toModelAttributes(input) as any)
      return toApiAttributes<TenantResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteTenant(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.tenancy_tenant.schema(schema!);
      const { tenant_id } = (request?.params ?? {}) as { tenant_id?: string | number }
      if (tenant_id === undefined || tenant_id === '') throw httpError(400, 'tenant_id is required')
      const deletedCount = await model.destroy({ where: { tenantId: tenant_id } })
      if (deletedCount === 0) throw httpError(404, 'tenancy_tenant not found')
      return
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
