import type { IndustryEnvironmentsRequest } from './types/IndustryEnvironmentsRequest'
import type { IndustryEnvironmentsResponse } from './types/IndustryEnvironmentsResponse'
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

export interface IndustryEnvironmentsController {
  listIndustryEnvironments(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<IndustryEnvironmentsResponse[]>>>
  createIndustryEnvironment(app: FastifyInstance, input: IndustryEnvironmentsRequest, request?: FastifyRequest): Promise<IndustryEnvironmentsResponse>
  getIndustryEnvironmentsById(app: FastifyInstance, request?: FastifyRequest): Promise<IndustryEnvironmentsResponse>
  updateIndustryEnvironment(app: FastifyInstance, input: IndustryEnvironmentsRequest, request?: FastifyRequest): Promise<IndustryEnvironmentsResponse>
  deleteIndustryEnvironment(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
