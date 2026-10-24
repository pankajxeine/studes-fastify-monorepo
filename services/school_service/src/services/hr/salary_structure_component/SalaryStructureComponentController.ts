import type { SalaryStructureComponentRequest } from './types/SalaryStructureComponentRequest'
import type { SalaryStructureComponentUpdateRequest } from './types/SalaryStructureComponentUpdateRequest'
import type { SalaryStructureComponentResponse } from './types/SalaryStructureComponentResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface SalaryStructureComponentController {
  listSalaryStructureComponent(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<SalaryStructureComponentResponse[]>>>
  createSalaryStructureComponent(app: FastifyInstance, input: SalaryStructureComponentRequest, request?: FastifyRequest): Promise<SalaryStructureComponentResponse>
  getSalaryStructureComponentById(app: FastifyInstance, request?: FastifyRequest): Promise<SalaryStructureComponentResponse>
  updateSalaryStructureComponent(app: FastifyInstance, input: SalaryStructureComponentUpdateRequest, request?: FastifyRequest): Promise<SalaryStructureComponentResponse>
  deleteSalaryStructureComponent(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
