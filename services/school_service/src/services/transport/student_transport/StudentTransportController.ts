import type { StudentTransportRequest } from './types/StudentTransportRequest'
import type { StudentTransportUpdateRequest } from './types/StudentTransportUpdateRequest'
import type { StudentTransportResponse } from './types/StudentTransportResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface StudentTransportController {
  listStudentTransport(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<StudentTransportResponse[]>>>
  createStudentTransport(app: FastifyInstance, input: StudentTransportRequest, request?: FastifyRequest): Promise<StudentTransportResponse>
  getStudentTransportById(app: FastifyInstance, request?: FastifyRequest): Promise<StudentTransportResponse>
  updateStudentTransport(app: FastifyInstance, input: StudentTransportUpdateRequest, request?: FastifyRequest): Promise<StudentTransportResponse>
  deleteStudentTransport(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
