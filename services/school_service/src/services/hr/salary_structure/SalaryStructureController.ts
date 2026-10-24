import type { SalaryStructureRequest } from './types/SalaryStructureRequest'
import type { SalaryStructureUpdateRequest } from './types/SalaryStructureUpdateRequest'
import type { SalaryStructureResponse } from './types/SalaryStructureResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface SalaryStructureController {
  listSalaryStructure(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<SalaryStructureResponse[]>>>
  createSalaryStructure(app: FastifyInstance, input: SalaryStructureRequest, request?: FastifyRequest): Promise<SalaryStructureResponse>
  getSalaryStructureById(app: FastifyInstance, request?: FastifyRequest): Promise<SalaryStructureResponse>
  updateSalaryStructure(app: FastifyInstance, input: SalaryStructureUpdateRequest, request?: FastifyRequest): Promise<SalaryStructureResponse>
  deleteSalaryStructure(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
