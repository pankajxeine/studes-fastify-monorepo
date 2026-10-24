import type { CourseResultRequest } from './types/CourseResultRequest'
import type { CourseResultUpdateRequest } from './types/CourseResultUpdateRequest'
import type { CourseResultResponse } from './types/CourseResultResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface CourseResultController {
  listCourseResult(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<CourseResultResponse[]>>>
  createCourseResult(app: FastifyInstance, input: CourseResultRequest, request?: FastifyRequest): Promise<CourseResultResponse>
  getCourseResultById(app: FastifyInstance, request?: FastifyRequest): Promise<CourseResultResponse>
  updateCourseResult(app: FastifyInstance, input: CourseResultUpdateRequest, request?: FastifyRequest): Promise<CourseResultResponse>
  deleteCourseResult(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
