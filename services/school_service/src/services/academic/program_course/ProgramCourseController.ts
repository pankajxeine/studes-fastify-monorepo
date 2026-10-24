import type { ProgramCourseRequest } from './types/ProgramCourseRequest'
import type { ProgramCourseUpdateRequest } from './types/ProgramCourseUpdateRequest'
import type { ProgramCourseResponse } from './types/ProgramCourseResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface ProgramCourseController {
  listProgramCourse(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<ProgramCourseResponse[]>>>
  createProgramCourse(app: FastifyInstance, input: ProgramCourseRequest, request?: FastifyRequest): Promise<ProgramCourseResponse>
  getProgramCourseById(app: FastifyInstance, request?: FastifyRequest): Promise<ProgramCourseResponse>
  updateProgramCourse(app: FastifyInstance, input: ProgramCourseUpdateRequest, request?: FastifyRequest): Promise<ProgramCourseResponse>
  deleteProgramCourse(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
