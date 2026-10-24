import type { AcademicYearRequest } from './types/AcademicYearRequest'
import type { AcademicYearUpdateRequest } from './types/AcademicYearUpdateRequest'
import type { AcademicYearResponse } from './types/AcademicYearResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface AcademicYearController {
  listAcademicYear(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<AcademicYearResponse[]>>>
  createAcademicYear(app: FastifyInstance, input: AcademicYearRequest, request?: FastifyRequest): Promise<AcademicYearResponse>
  getAcademicYearById(app: FastifyInstance, request?: FastifyRequest): Promise<AcademicYearResponse>
  updateAcademicYear(app: FastifyInstance, input: AcademicYearUpdateRequest, request?: FastifyRequest): Promise<AcademicYearResponse>
  deleteAcademicYear(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
