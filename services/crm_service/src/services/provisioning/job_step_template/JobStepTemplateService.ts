import type { JobStepTemplateRequest } from './types/JobStepTemplateRequest'
import type { JobStepTemplateUpdateRequest } from './types/JobStepTemplateUpdateRequest'
import type { JobStepTemplateResponse } from './types/JobStepTemplateResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { JobStepTemplateController } from './JobStepTemplateController'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

import { verifyDbSchema, verifyDbModel } from '../../../core/helper/db_utils'
import {toApiAttributes } from '../../../core/helper/api_helper';

import { toModelAttributes } from '../../../core/helper/api_helper';

function httpError(statusCode: number, message: string): Error & { statusCode: number } {
  return Object.assign(new Error(message), { statusCode })
}


export class JobStepTemplateService implements JobStepTemplateController {
      public async listJobStepTemplate(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<JobStepTemplateResponse[]>>> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.provisioning_job_step_template.schema(schema!);
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
        data: rows.map((row) => toApiAttributes<ListItem<JobStepTemplateResponse[]>>(row.get({ plain: true }) as Record<string, unknown>)),
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

      public async createJobStepTemplate(app: FastifyInstance, input: JobStepTemplateRequest, request?: FastifyRequest): Promise<JobStepTemplateResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.provisioning_job_step_template.schema(schema!);
      const row = await model.create(toModelAttributes(input) as any)
      return toApiAttributes<JobStepTemplateResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getJobStepTemplateById(app: FastifyInstance, request?: FastifyRequest): Promise<JobStepTemplateResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.provisioning_job_step_template.schema(schema!);
      const { job_step_template_id } = (request?.params ?? {}) as { job_step_template_id?: string | number }
      if (job_step_template_id === undefined || job_step_template_id === '') throw httpError(400, 'job_step_template_id is required')
      const row = await model.findByPk(job_step_template_id)
      if (!row) {
        throw httpError(404, 'provisioning_job_step_template not found')
      }
      return toApiAttributes<JobStepTemplateResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateJobStepTemplate(app: FastifyInstance, input: JobStepTemplateUpdateRequest, request?: FastifyRequest): Promise<JobStepTemplateResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.provisioning_job_step_template.schema(schema!);
      const { job_step_template_id } = (request?.params ?? {}) as { job_step_template_id?: string | number }
      if (job_step_template_id === undefined || job_step_template_id === '') throw httpError(400, 'job_step_template_id is required')
      const row = await model.findByPk(job_step_template_id)
      if (!row) {
        throw httpError(404, 'provisioning_job_step_template not found')
      }
      await row.update(toModelAttributes(input) as any)
      return toApiAttributes<JobStepTemplateResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteJobStepTemplate(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.provisioning_job_step_template.schema(schema!);
      const { job_step_template_id } = (request?.params ?? {}) as { job_step_template_id?: string | number }
      if (job_step_template_id === undefined || job_step_template_id === '') throw httpError(400, 'job_step_template_id is required')
      const deletedCount = await model.destroy({ where: { jobStepTemplateId: job_step_template_id } })
      if (deletedCount === 0) throw httpError(404, 'provisioning_job_step_template not found')
      return
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
