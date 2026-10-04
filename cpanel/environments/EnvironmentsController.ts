import type { EnvironmentsRequest } from './types/EnvironmentsRequest'
import type { EnvironmentsResponse } from './types/EnvironmentsResponse'
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

export interface EnvironmentsController {
  listEnvironments(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<EnvironmentsResponse[]>>>
  createEnvironment(app: FastifyInstance, input: EnvironmentsRequest, request?: FastifyRequest): Promise<EnvironmentsResponse>
  getEnvironmentsById(app: FastifyInstance, request?: FastifyRequest): Promise<EnvironmentsResponse>
  updateEnvironment(app: FastifyInstance, input: EnvironmentsRequest, request?: FastifyRequest): Promise<EnvironmentsResponse>
  deleteEnvironment(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
