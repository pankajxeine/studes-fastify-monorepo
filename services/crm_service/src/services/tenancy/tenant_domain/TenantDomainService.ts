import type { TenantDomainRequest } from './types/TenantDomainRequest'
import type { TenantDomainUpdateRequest } from './types/TenantDomainUpdateRequest'
import type { TenantDomainResponse } from './types/TenantDomainResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { TenantDomainController } from './TenantDomainController'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

import { verifyDbSchema, verifyDbModel } from '../../../core/helper/db_utils'
import {toApiAttributes } from '../../../core/helper/api_helper';

import { toModelAttributes } from '../../../core/helper/api_helper';

function httpError(statusCode: number, message: string): Error & { statusCode: number } {
  return Object.assign(new Error(message), { statusCode })
}


export class TenantDomainService implements TenantDomainController {
      public async listTenantDomain(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<TenantDomainResponse[]>>> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.tenancy_tenant_domain.schema(schema!);
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
        data: rows.map((row) => toApiAttributes<ListItem<TenantDomainResponse[]>>(row.get({ plain: true }) as Record<string, unknown>)),
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

      public async createTenantDomain(app: FastifyInstance, input: TenantDomainRequest, request?: FastifyRequest): Promise<TenantDomainResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.tenancy_tenant_domain.schema(schema!);
      const row = await model.create(toModelAttributes(input) as any)
      return toApiAttributes<TenantDomainResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getTenantDomainById(app: FastifyInstance, request?: FastifyRequest): Promise<TenantDomainResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.tenancy_tenant_domain.schema(schema!);
      const { tenant_domain_id } = (request?.params ?? {}) as { tenant_domain_id?: string | number }
      if (tenant_domain_id === undefined || tenant_domain_id === '') throw httpError(400, 'tenant_domain_id is required')
      const row = await model.findByPk(tenant_domain_id)
      if (!row) {
        throw httpError(404, 'tenancy_tenant_domain not found')
      }
      return toApiAttributes<TenantDomainResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateTenantDomain(app: FastifyInstance, input: TenantDomainUpdateRequest, request?: FastifyRequest): Promise<TenantDomainResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.tenancy_tenant_domain.schema(schema!);
      const { tenant_domain_id } = (request?.params ?? {}) as { tenant_domain_id?: string | number }
      if (tenant_domain_id === undefined || tenant_domain_id === '') throw httpError(400, 'tenant_domain_id is required')
      const row = await model.findByPk(tenant_domain_id)
      if (!row) {
        throw httpError(404, 'tenancy_tenant_domain not found')
      }
      await row.update(toModelAttributes(input) as any)
      return toApiAttributes<TenantDomainResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteTenantDomain(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.tenancy_tenant_domain.schema(schema!);
      const { tenant_domain_id } = (request?.params ?? {}) as { tenant_domain_id?: string | number }
      if (tenant_domain_id === undefined || tenant_domain_id === '') throw httpError(400, 'tenant_domain_id is required')
      const deletedCount = await model.destroy({ where: { tenantDomainId: tenant_domain_id } })
      if (deletedCount === 0) throw httpError(404, 'tenancy_tenant_domain not found')
      return
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
