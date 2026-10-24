import type { CourseOfferingRequest } from './types/CourseOfferingRequest'
import type { CourseOfferingUpdateRequest } from './types/CourseOfferingUpdateRequest'
import type { CourseOfferingResponse } from './types/CourseOfferingResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface CourseOfferingController {
  listCourseOffering(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<CourseOfferingResponse[]>>>
  createCourseOffering(app: FastifyInstance, input: CourseOfferingRequest, request?: FastifyRequest): Promise<CourseOfferingResponse>
  getCourseOfferingById(app: FastifyInstance, request?: FastifyRequest): Promise<CourseOfferingResponse>
  updateCourseOffering(app: FastifyInstance, input: CourseOfferingUpdateRequest, request?: FastifyRequest): Promise<CourseOfferingResponse>
  deleteCourseOffering(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
