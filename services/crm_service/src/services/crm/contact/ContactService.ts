import type { ContactRequest } from './types/ContactRequest'
import type { ContactUpdateRequest } from './types/ContactUpdateRequest'
import type { ContactResponse } from './types/ContactResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ContactController } from './ContactController'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

import { verifyDbSchema, verifyDbModel } from '../../../core/helper/db_utils'
import {toApiAttributes } from '../../../core/helper/api_helper';

import { toModelAttributes } from '../../../core/helper/api_helper';

function httpError(statusCode: number, message: string): Error & { statusCode: number } {
  return Object.assign(new Error(message), { statusCode })
}


export class ContactService implements ContactController {
      public async listContact(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<ContactResponse[]>>> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.crm_contact.schema(schema!);
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
        data: rows.map((row) => toApiAttributes<ListItem<ContactResponse[]>>(row.get({ plain: true }) as Record<string, unknown>)),
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

      public async createContact(app: FastifyInstance, input: ContactRequest, request?: FastifyRequest): Promise<ContactResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.crm_contact.schema(schema!);
      const row = await model.create(toModelAttributes(input) as any)
      return toApiAttributes<ContactResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getContactById(app: FastifyInstance, request?: FastifyRequest): Promise<ContactResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.crm_contact.schema(schema!);
      const { contact_id } = (request?.params ?? {}) as { contact_id?: string | number }
      if (contact_id === undefined || contact_id === '') throw httpError(400, 'contact_id is required')
      const row = await model.findByPk(contact_id)
      if (!row) {
        throw httpError(404, 'crm_contact not found')
      }
      return toApiAttributes<ContactResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateContact(app: FastifyInstance, input: ContactUpdateRequest, request?: FastifyRequest): Promise<ContactResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.crm_contact.schema(schema!);
      const { contact_id } = (request?.params ?? {}) as { contact_id?: string | number }
      if (contact_id === undefined || contact_id === '') throw httpError(400, 'contact_id is required')
      const row = await model.findByPk(contact_id)
      if (!row) {
        throw httpError(404, 'crm_contact not found')
      }
      await row.update(toModelAttributes(input) as any)
      return toApiAttributes<ContactResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteContact(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.crm_contact.schema(schema!);
      const { contact_id } = (request?.params ?? {}) as { contact_id?: string | number }
      if (contact_id === undefined || contact_id === '') throw httpError(400, 'contact_id is required')
      const deletedCount = await model.destroy({ where: { contactId: contact_id } })
      if (deletedCount === 0) throw httpError(404, 'crm_contact not found')
      return
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
