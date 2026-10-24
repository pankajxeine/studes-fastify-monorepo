import type { AssessmentTypeRequest } from './types/AssessmentTypeRequest'
import type { AssessmentTypeUpdateRequest } from './types/AssessmentTypeUpdateRequest'
import type { AssessmentTypeResponse } from './types/AssessmentTypeResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface AssessmentTypeController {
  listAssessmentType(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<AssessmentTypeResponse[]>>>
  createAssessmentType(app: FastifyInstance, input: AssessmentTypeRequest, request?: FastifyRequest): Promise<AssessmentTypeResponse>
  getAssessmentTypeById(app: FastifyInstance, request?: FastifyRequest): Promise<AssessmentTypeResponse>
  updateAssessmentType(app: FastifyInstance, input: AssessmentTypeUpdateRequest, request?: FastifyRequest): Promise<AssessmentTypeResponse>
  deleteAssessmentType(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
