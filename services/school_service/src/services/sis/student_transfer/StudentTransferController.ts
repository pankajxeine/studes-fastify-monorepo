import type { StudentTransferRequest } from './types/StudentTransferRequest'
import type { StudentTransferUpdateRequest } from './types/StudentTransferUpdateRequest'
import type { StudentTransferResponse } from './types/StudentTransferResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface StudentTransferController {
  listStudentTransfer(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<StudentTransferResponse[]>>>
  createStudentTransfer(app: FastifyInstance, input: StudentTransferRequest, request?: FastifyRequest): Promise<StudentTransferResponse>
  getStudentTransferById(app: FastifyInstance, request?: FastifyRequest): Promise<StudentTransferResponse>
  updateStudentTransfer(app: FastifyInstance, input: StudentTransferUpdateRequest, request?: FastifyRequest): Promise<StudentTransferResponse>
  deleteStudentTransfer(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
