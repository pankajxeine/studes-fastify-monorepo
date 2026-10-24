import type { JobStepTemplateRequest } from './types/JobStepTemplateRequest'
import type { JobStepTemplateUpdateRequest } from './types/JobStepTemplateUpdateRequest'
import type { JobStepTemplateResponse } from './types/JobStepTemplateResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface JobStepTemplateController {
  listJobStepTemplate(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<JobStepTemplateResponse[]>>>
  createJobStepTemplate(app: FastifyInstance, input: JobStepTemplateRequest, request?: FastifyRequest): Promise<JobStepTemplateResponse>
  getJobStepTemplateById(app: FastifyInstance, request?: FastifyRequest): Promise<JobStepTemplateResponse>
  updateJobStepTemplate(app: FastifyInstance, input: JobStepTemplateUpdateRequest, request?: FastifyRequest): Promise<JobStepTemplateResponse>
  deleteJobStepTemplate(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
