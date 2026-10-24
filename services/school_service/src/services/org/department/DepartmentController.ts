import type { DepartmentRequest } from './types/DepartmentRequest'
import type { DepartmentUpdateRequest } from './types/DepartmentUpdateRequest'
import type { DepartmentResponse } from './types/DepartmentResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface DepartmentController {
  listDepartment(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<DepartmentResponse[]>>>
  createDepartment(app: FastifyInstance, input: DepartmentRequest, request?: FastifyRequest): Promise<DepartmentResponse>
  getDepartmentById(app: FastifyInstance, request?: FastifyRequest): Promise<DepartmentResponse>
  updateDepartment(app: FastifyInstance, input: DepartmentUpdateRequest, request?: FastifyRequest): Promise<DepartmentResponse>
  deleteDepartment(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
