import type { ApplicationAssessmentRequest } from './types/ApplicationAssessmentRequest'
import type { ApplicationAssessmentUpdateRequest } from './types/ApplicationAssessmentUpdateRequest'
import type { ApplicationAssessmentResponse } from './types/ApplicationAssessmentResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface ApplicationAssessmentController {
  listApplicationAssessment(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<ApplicationAssessmentResponse[]>>>
  createApplicationAssessment(app: FastifyInstance, input: ApplicationAssessmentRequest, request?: FastifyRequest): Promise<ApplicationAssessmentResponse>
  getApplicationAssessmentById(app: FastifyInstance, request?: FastifyRequest): Promise<ApplicationAssessmentResponse>
  updateApplicationAssessment(app: FastifyInstance, input: ApplicationAssessmentUpdateRequest, request?: FastifyRequest): Promise<ApplicationAssessmentResponse>
  deleteApplicationAssessment(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
