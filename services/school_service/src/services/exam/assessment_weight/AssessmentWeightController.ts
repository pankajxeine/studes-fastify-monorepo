import type { AssessmentWeightRequest } from './types/AssessmentWeightRequest'
import type { AssessmentWeightUpdateRequest } from './types/AssessmentWeightUpdateRequest'
import type { AssessmentWeightResponse } from './types/AssessmentWeightResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface AssessmentWeightController {
  listAssessmentWeight(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<AssessmentWeightResponse[]>>>
  createAssessmentWeight(app: FastifyInstance, input: AssessmentWeightRequest, request?: FastifyRequest): Promise<AssessmentWeightResponse>
  getAssessmentWeightById(app: FastifyInstance, request?: FastifyRequest): Promise<AssessmentWeightResponse>
  updateAssessmentWeight(app: FastifyInstance, input: AssessmentWeightUpdateRequest, request?: FastifyRequest): Promise<AssessmentWeightResponse>
  deleteAssessmentWeight(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
