import type { ProvisioningJobRequest } from './types/ProvisioningJobRequest'
import type { ProvisioningJobUpdateRequest } from './types/ProvisioningJobUpdateRequest'
import type { ProvisioningJobResponse } from './types/ProvisioningJobResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ProvisioningJobController } from './ProvisioningJobController'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

import { verifyDbSchema, verifyDbModel } from '../../../core/helper/db_utils'
import {toApiAttributes } from '../../../core/helper/api_helper';

import { toModelAttributes } from '../../../core/helper/api_helper';

function httpError(statusCode: number, message: string): Error & { statusCode: number } {
  return Object.assign(new Error(message), { statusCode })
}


export class ProvisioningJobService implements ProvisioningJobController {
      public async listProvisioningJob(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<ProvisioningJobResponse[]>>> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.provisioning_provisioning_job.schema(schema!);
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
        data: rows.map((row) => toApiAttributes<ListItem<ProvisioningJobResponse[]>>(row.get({ plain: true }) as Record<string, unknown>)),
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

      public async createProvisioningJob(app: FastifyInstance, input: ProvisioningJobRequest, request?: FastifyRequest): Promise<ProvisioningJobResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.provisioning_provisioning_job.schema(schema!);
      const row = await model.create(toModelAttributes(input) as any)
      return toApiAttributes<ProvisioningJobResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getProvisioningJobById(app: FastifyInstance, request?: FastifyRequest): Promise<ProvisioningJobResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.provisioning_provisioning_job.schema(schema!);
      const { job_id } = (request?.params ?? {}) as { job_id?: string | number }
      if (job_id === undefined || job_id === '') throw httpError(400, 'job_id is required')
      const row = await model.findByPk(job_id)
      if (!row) {
        throw httpError(404, 'provisioning_provisioning_job not found')
      }
      return toApiAttributes<ProvisioningJobResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateProvisioningJob(app: FastifyInstance, input: ProvisioningJobUpdateRequest, request?: FastifyRequest): Promise<ProvisioningJobResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.provisioning_provisioning_job.schema(schema!);
      const { job_id } = (request?.params ?? {}) as { job_id?: string | number }
      if (job_id === undefined || job_id === '') throw httpError(400, 'job_id is required')
      const row = await model.findByPk(job_id)
      if (!row) {
        throw httpError(404, 'provisioning_provisioning_job not found')
      }
      await row.update(toModelAttributes(input) as any)
      return toApiAttributes<ProvisioningJobResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteProvisioningJob(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.provisioning_provisioning_job.schema(schema!);
      const { job_id } = (request?.params ?? {}) as { job_id?: string | number }
      if (job_id === undefined || job_id === '') throw httpError(400, 'job_id is required')
      const deletedCount = await model.destroy({ where: { jobId: job_id } })
      if (deletedCount === 0) throw httpError(404, 'provisioning_provisioning_job not found')
      return
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
