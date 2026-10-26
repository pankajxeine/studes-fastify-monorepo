import type { TenantContactRequest } from './types/TenantContactRequest'
import type { TenantContactUpdateRequest } from './types/TenantContactUpdateRequest'
import type { TenantContactResponse } from './types/TenantContactResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { TenantContactController } from './TenantContactController'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

import { verifyDbSchema, verifyDbModel } from '../../../core/helper/db_utils'
import {toApiAttributes } from '../../../core/helper/api_helper';

import { toModelAttributes } from '../../../core/helper/api_helper';

function httpError(statusCode: number, message: string): Error & { statusCode: number } {
  return Object.assign(new Error(message), { statusCode })
}


export class TenantContactService implements TenantContactController {
      public async listTenantContact(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<TenantContactResponse[]>>> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.tenancy_tenant_contact.schema(schema!);
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
        data: rows.map((row) => toApiAttributes<ListItem<TenantContactResponse[]>>(row.get({ plain: true }) as Record<string, unknown>)),
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

      public async createTenantContact(app: FastifyInstance, input: TenantContactRequest, request?: FastifyRequest): Promise<TenantContactResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.tenancy_tenant_contact.schema(schema!);
      const row = await model.create(toModelAttributes(input) as any)
      return toApiAttributes<TenantContactResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getTenantContactById(app: FastifyInstance, request?: FastifyRequest): Promise<TenantContactResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.tenancy_tenant_contact.schema(schema!);
      const { tenant_contact_id } = (request?.params ?? {}) as { tenant_contact_id?: string | number }
      if (tenant_contact_id === undefined || tenant_contact_id === '') throw httpError(400, 'tenant_contact_id is required')
      const row = await model.findByPk(tenant_contact_id)
      if (!row) {
        throw httpError(404, 'tenancy_tenant_contact not found')
      }
      return toApiAttributes<TenantContactResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateTenantContact(app: FastifyInstance, input: TenantContactUpdateRequest, request?: FastifyRequest): Promise<TenantContactResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.tenancy_tenant_contact.schema(schema!);
      const { tenant_contact_id } = (request?.params ?? {}) as { tenant_contact_id?: string | number }
      if (tenant_contact_id === undefined || tenant_contact_id === '') throw httpError(400, 'tenant_contact_id is required')
      const row = await model.findByPk(tenant_contact_id)
      if (!row) {
        throw httpError(404, 'tenancy_tenant_contact not found')
      }
      await row.update(toModelAttributes(input) as any)
      return toApiAttributes<TenantContactResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteTenantContact(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.tenancy_tenant_contact.schema(schema!);
      const { tenant_contact_id } = (request?.params ?? {}) as { tenant_contact_id?: string | number }
      if (tenant_contact_id === undefined || tenant_contact_id === '') throw httpError(400, 'tenant_contact_id is required')
      const deletedCount = await model.destroy({ where: { tenantContactId: tenant_contact_id } })
      if (deletedCount === 0) throw httpError(404, 'tenancy_tenant_contact not found')
      return
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
