import type { AcceptanceConfigurationRequest } from './types/AcceptanceConfigurationRequest'
import type { AcceptanceConfigurationUpdateRequest } from './types/AcceptanceConfigurationUpdateRequest'
import type { AcceptanceConfigurationResponse } from './types/AcceptanceConfigurationResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { AcceptanceConfigurationController } from './AcceptanceConfigurationController'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

import { verifyDbSchema, verifyDbModel } from '../../../core/helper/db_utils'
import {toApiAttributes } from '../../../core/helper/api_helper';

import { toModelAttributes } from '../../../core/helper/api_helper';

function httpError(statusCode: number, message: string): Error & { statusCode: number } {
  return Object.assign(new Error(message), { statusCode })
}


export class AcceptanceConfigurationService implements AcceptanceConfigurationController {
      public async listAcceptanceConfiguration(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<AcceptanceConfigurationResponse[]>>> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.payment_acceptance_configuration.schema(schema!);
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
        data: rows.map((row) => toApiAttributes<ListItem<AcceptanceConfigurationResponse[]>>(row.get({ plain: true }) as Record<string, unknown>)),
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

      public async createAcceptanceConfiguration(app: FastifyInstance, input: AcceptanceConfigurationRequest, request?: FastifyRequest): Promise<AcceptanceConfigurationResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.payment_acceptance_configuration.schema(schema!);
      const row = await model.create(toModelAttributes(input) as any)
      return toApiAttributes<AcceptanceConfigurationResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getAcceptanceConfigurationById(app: FastifyInstance, request?: FastifyRequest): Promise<AcceptanceConfigurationResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.payment_acceptance_configuration.schema(schema!);
      const { acceptance_configuration_id } = (request?.params ?? {}) as { acceptance_configuration_id?: string | number }
      if (acceptance_configuration_id === undefined || acceptance_configuration_id === '') throw httpError(400, 'acceptance_configuration_id is required')
      const row = await model.findByPk(acceptance_configuration_id)
      if (!row) {
        throw httpError(404, 'payment_acceptance_configuration not found')
      }
      return toApiAttributes<AcceptanceConfigurationResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateAcceptanceConfiguration(app: FastifyInstance, input: AcceptanceConfigurationUpdateRequest, request?: FastifyRequest): Promise<AcceptanceConfigurationResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.payment_acceptance_configuration.schema(schema!);
      const { acceptance_configuration_id } = (request?.params ?? {}) as { acceptance_configuration_id?: string | number }
      if (acceptance_configuration_id === undefined || acceptance_configuration_id === '') throw httpError(400, 'acceptance_configuration_id is required')
      const row = await model.findByPk(acceptance_configuration_id)
      if (!row) {
        throw httpError(404, 'payment_acceptance_configuration not found')
      }
      await row.update(toModelAttributes(input) as any)
      return toApiAttributes<AcceptanceConfigurationResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteAcceptanceConfiguration(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.payment_acceptance_configuration.schema(schema!);
      const { acceptance_configuration_id } = (request?.params ?? {}) as { acceptance_configuration_id?: string | number }
      if (acceptance_configuration_id === undefined || acceptance_configuration_id === '') throw httpError(400, 'acceptance_configuration_id is required')
      const deletedCount = await model.destroy({ where: { acceptanceConfigurationId: acceptance_configuration_id } })
      if (deletedCount === 0) throw httpError(404, 'payment_acceptance_configuration not found')
      return
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
