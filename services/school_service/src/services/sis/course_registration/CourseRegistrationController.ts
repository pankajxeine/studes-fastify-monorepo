import type { CourseRegistrationRequest } from './types/CourseRegistrationRequest'
import type { CourseRegistrationUpdateRequest } from './types/CourseRegistrationUpdateRequest'
import type { CourseRegistrationResponse } from './types/CourseRegistrationResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface CourseRegistrationController {
  listCourseRegistration(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<CourseRegistrationResponse[]>>>
  createCourseRegistration(app: FastifyInstance, input: CourseRegistrationRequest, request?: FastifyRequest): Promise<CourseRegistrationResponse>
  getCourseRegistrationById(app: FastifyInstance, request?: FastifyRequest): Promise<CourseRegistrationResponse>
  updateCourseRegistration(app: FastifyInstance, input: CourseRegistrationUpdateRequest, request?: FastifyRequest): Promise<CourseRegistrationResponse>
  deleteCourseRegistration(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
