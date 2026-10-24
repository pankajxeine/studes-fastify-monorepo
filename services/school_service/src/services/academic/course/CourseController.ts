import type { CourseRequest } from './types/CourseRequest'
import type { CourseUpdateRequest } from './types/CourseUpdateRequest'
import type { CourseResponse } from './types/CourseResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface CourseController {
  listCourse(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<CourseResponse[]>>>
  createCourse(app: FastifyInstance, input: CourseRequest, request?: FastifyRequest): Promise<CourseResponse>
  getCourseById(app: FastifyInstance, request?: FastifyRequest): Promise<CourseResponse>
  updateCourse(app: FastifyInstance, input: CourseUpdateRequest, request?: FastifyRequest): Promise<CourseResponse>
  deleteCourse(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
