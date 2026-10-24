import type { AlumniHigherEducationRequest } from './types/AlumniHigherEducationRequest'
import type { AlumniHigherEducationUpdateRequest } from './types/AlumniHigherEducationUpdateRequest'
import type { AlumniHigherEducationResponse } from './types/AlumniHigherEducationResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface AlumniHigherEducationController {
  listAlumniHigherEducation(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<AlumniHigherEducationResponse[]>>>
  createAlumniHigherEducation(app: FastifyInstance, input: AlumniHigherEducationRequest, request?: FastifyRequest): Promise<AlumniHigherEducationResponse>
  getAlumniHigherEducationById(app: FastifyInstance, request?: FastifyRequest): Promise<AlumniHigherEducationResponse>
  updateAlumniHigherEducation(app: FastifyInstance, input: AlumniHigherEducationUpdateRequest, request?: FastifyRequest): Promise<AlumniHigherEducationResponse>
  deleteAlumniHigherEducation(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
