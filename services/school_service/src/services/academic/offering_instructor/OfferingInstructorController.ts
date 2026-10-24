import type { OfferingInstructorRequest } from './types/OfferingInstructorRequest'
import type { OfferingInstructorUpdateRequest } from './types/OfferingInstructorUpdateRequest'
import type { OfferingInstructorResponse } from './types/OfferingInstructorResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface OfferingInstructorController {
  listOfferingInstructor(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<OfferingInstructorResponse[]>>>
  createOfferingInstructor(app: FastifyInstance, input: OfferingInstructorRequest, request?: FastifyRequest): Promise<OfferingInstructorResponse>
  getOfferingInstructorById(app: FastifyInstance, request?: FastifyRequest): Promise<OfferingInstructorResponse>
  updateOfferingInstructor(app: FastifyInstance, input: OfferingInstructorUpdateRequest, request?: FastifyRequest): Promise<OfferingInstructorResponse>
  deleteOfferingInstructor(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
