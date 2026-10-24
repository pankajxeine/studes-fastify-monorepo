import type { SalaryComponentRequest } from './types/SalaryComponentRequest'
import type { SalaryComponentUpdateRequest } from './types/SalaryComponentUpdateRequest'
import type { SalaryComponentResponse } from './types/SalaryComponentResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface SalaryComponentController {
  listSalaryComponent(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<SalaryComponentResponse[]>>>
  createSalaryComponent(app: FastifyInstance, input: SalaryComponentRequest, request?: FastifyRequest): Promise<SalaryComponentResponse>
  getSalaryComponentById(app: FastifyInstance, request?: FastifyRequest): Promise<SalaryComponentResponse>
  updateSalaryComponent(app: FastifyInstance, input: SalaryComponentUpdateRequest, request?: FastifyRequest): Promise<SalaryComponentResponse>
  deleteSalaryComponent(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
