import type { SubCompaniesRequest } from './types/SubCompaniesRequest'
import type { SubCompaniesResponse } from './types/SubCompaniesResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'

export type ListItem<T> = T extends (infer Item)[] ? Item : T

export interface PaginatedResponse<T> {
  data: T[]
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
  }
}

export interface SubCompaniesController {
  listSubCompanies(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<SubCompaniesResponse[]>>>
  createSubCompanie(app: FastifyInstance, input: SubCompaniesRequest, request?: FastifyRequest): Promise<SubCompaniesResponse>
  getSubCompaniesById(app: FastifyInstance, request?: FastifyRequest): Promise<SubCompaniesResponse>
  updateSubCompanie(app: FastifyInstance, input: SubCompaniesRequest, request?: FastifyRequest): Promise<SubCompaniesResponse>
  deleteSubCompanie(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
