import type { TenantConfigRequest } from './types/TenantConfigRequest'
import type { TenantConfigUpdateRequest } from './types/TenantConfigUpdateRequest'
import type { TenantConfigResponse } from './types/TenantConfigResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { TenantConfigController } from './TenantConfigController'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

import { verifyDbSchema, verifyDbModel } from '../../../core/helper/db_utils'
import {toApiAttributes } from '../../../core/helper/api_helper';

import { toModelAttributes } from '../../../core/helper/api_helper';

function httpError(statusCode: number, message: string): Error & { statusCode: number } {
  return Object.assign(new Error(message), { statusCode })
}


export class TenantConfigService implements TenantConfigController {
      public async listTenantConfig(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<TenantConfigResponse[]>>> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.tenancy_tenant_config.schema(schema!);
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
        data: rows.map((row) => toApiAttributes<ListItem<TenantConfigResponse[]>>(row.get({ plain: true }) as Record<string, unknown>)),
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

      public async createTenantConfig(app: FastifyInstance, input: TenantConfigRequest, request?: FastifyRequest): Promise<TenantConfigResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.tenancy_tenant_config.schema(schema!);
      const row = await model.create(toModelAttributes(input) as any)
      return toApiAttributes<TenantConfigResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getTenantConfigById(app: FastifyInstance, request?: FastifyRequest): Promise<TenantConfigResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.tenancy_tenant_config.schema(schema!);
      const { tenant_config_id } = (request?.params ?? {}) as { tenant_config_id?: string | number }
      if (tenant_config_id === undefined || tenant_config_id === '') throw httpError(400, 'tenant_config_id is required')
      const row = await model.findByPk(tenant_config_id)
      if (!row) {
        throw httpError(404, 'tenancy_tenant_config not found')
      }
      return toApiAttributes<TenantConfigResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateTenantConfig(app: FastifyInstance, input: TenantConfigUpdateRequest, request?: FastifyRequest): Promise<TenantConfigResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.tenancy_tenant_config.schema(schema!);
      const { tenant_config_id } = (request?.params ?? {}) as { tenant_config_id?: string | number }
      if (tenant_config_id === undefined || tenant_config_id === '') throw httpError(400, 'tenant_config_id is required')
      const row = await model.findByPk(tenant_config_id)
      if (!row) {
        throw httpError(404, 'tenancy_tenant_config not found')
      }
      await row.update(toModelAttributes(input) as any)
      return toApiAttributes<TenantConfigResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteTenantConfig(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.tenancy_tenant_config.schema(schema!);
      const { tenant_config_id } = (request?.params ?? {}) as { tenant_config_id?: string | number }
      if (tenant_config_id === undefined || tenant_config_id === '') throw httpError(400, 'tenant_config_id is required')
      const deletedCount = await model.destroy({ where: { tenantConfigId: tenant_config_id } })
      if (deletedCount === 0) throw httpError(404, 'tenancy_tenant_config not found')
      return
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
