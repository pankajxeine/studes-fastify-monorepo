import type { CoursePrerequisiteRequest } from './types/CoursePrerequisiteRequest'
import type { CoursePrerequisiteUpdateRequest } from './types/CoursePrerequisiteUpdateRequest'
import type { CoursePrerequisiteResponse } from './types/CoursePrerequisiteResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface CoursePrerequisiteController {
  listCoursePrerequisite(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<CoursePrerequisiteResponse[]>>>
  createCoursePrerequisite(app: FastifyInstance, input: CoursePrerequisiteRequest, request?: FastifyRequest): Promise<CoursePrerequisiteResponse>
  getCoursePrerequisiteById(app: FastifyInstance, request?: FastifyRequest): Promise<CoursePrerequisiteResponse>
  updateCoursePrerequisite(app: FastifyInstance, input: CoursePrerequisiteUpdateRequest, request?: FastifyRequest): Promise<CoursePrerequisiteResponse>
  deleteCoursePrerequisite(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
