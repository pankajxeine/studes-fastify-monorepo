import type { AlumniEmploymentRequest } from './types/AlumniEmploymentRequest'
import type { AlumniEmploymentUpdateRequest } from './types/AlumniEmploymentUpdateRequest'
import type { AlumniEmploymentResponse } from './types/AlumniEmploymentResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface AlumniEmploymentController {
  listAlumniEmployment(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<AlumniEmploymentResponse[]>>>
  createAlumniEmployment(app: FastifyInstance, input: AlumniEmploymentRequest, request?: FastifyRequest): Promise<AlumniEmploymentResponse>
  getAlumniEmploymentById(app: FastifyInstance, request?: FastifyRequest): Promise<AlumniEmploymentResponse>
  updateAlumniEmployment(app: FastifyInstance, input: AlumniEmploymentUpdateRequest, request?: FastifyRequest): Promise<AlumniEmploymentResponse>
  deleteAlumniEmployment(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
