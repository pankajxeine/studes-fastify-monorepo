import type { ProvisioningStepRequest } from './types/ProvisioningStepRequest'
import type { ProvisioningStepUpdateRequest } from './types/ProvisioningStepUpdateRequest'
import type { ProvisioningStepResponse } from './types/ProvisioningStepResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ProvisioningStepController } from './ProvisioningStepController'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

import { verifyDbSchema, verifyDbModel } from '../../../core/helper/db_utils'
import {toApiAttributes } from '../../../core/helper/api_helper';

import { toModelAttributes } from '../../../core/helper/api_helper';

function httpError(statusCode: number, message: string): Error & { statusCode: number } {
  return Object.assign(new Error(message), { statusCode })
}


export class ProvisioningStepService implements ProvisioningStepController {
      public async listProvisioningStep(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<ProvisioningStepResponse[]>>> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.provisioning_provisioning_step.schema(schema!);
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
        data: rows.map((row) => toApiAttributes<ListItem<ProvisioningStepResponse[]>>(row.get({ plain: true }) as Record<string, unknown>)),
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

      public async createProvisioningStep(app: FastifyInstance, input: ProvisioningStepRequest, request?: FastifyRequest): Promise<ProvisioningStepResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.provisioning_provisioning_step.schema(schema!);
      const row = await model.create(toModelAttributes(input) as any)
      return toApiAttributes<ProvisioningStepResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getProvisioningStepById(app: FastifyInstance, request?: FastifyRequest): Promise<ProvisioningStepResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.provisioning_provisioning_step.schema(schema!);
      const { provisioning_step_id } = (request?.params ?? {}) as { provisioning_step_id?: string | number }
      if (provisioning_step_id === undefined || provisioning_step_id === '') throw httpError(400, 'provisioning_step_id is required')
      const row = await model.findByPk(provisioning_step_id)
      if (!row) {
        throw httpError(404, 'provisioning_provisioning_step not found')
      }
      return toApiAttributes<ProvisioningStepResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateProvisioningStep(app: FastifyInstance, input: ProvisioningStepUpdateRequest, request?: FastifyRequest): Promise<ProvisioningStepResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.provisioning_provisioning_step.schema(schema!);
      const { provisioning_step_id } = (request?.params ?? {}) as { provisioning_step_id?: string | number }
      if (provisioning_step_id === undefined || provisioning_step_id === '') throw httpError(400, 'provisioning_step_id is required')
      const row = await model.findByPk(provisioning_step_id)
      if (!row) {
        throw httpError(404, 'provisioning_provisioning_step not found')
      }
      await row.update(toModelAttributes(input) as any)
      return toApiAttributes<ProvisioningStepResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteProvisioningStep(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.provisioning_provisioning_step.schema(schema!);
      const { provisioning_step_id } = (request?.params ?? {}) as { provisioning_step_id?: string | number }
      if (provisioning_step_id === undefined || provisioning_step_id === '') throw httpError(400, 'provisioning_step_id is required')
      const deletedCount = await model.destroy({ where: { provisioningStepId: provisioning_step_id } })
      if (deletedCount === 0) throw httpError(404, 'provisioning_provisioning_step not found')
      return
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
