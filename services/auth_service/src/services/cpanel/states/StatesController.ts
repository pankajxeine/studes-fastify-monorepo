import type { StatesRequest } from './types/StatesRequest'
import type { StatesResponse } from './types/StatesResponse'
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

export interface StatesController {
  listStates(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<StatesResponse[]>>>
  createState(app: FastifyInstance, input: StatesRequest, request?: FastifyRequest): Promise<StatesResponse>
  getStatesById(app: FastifyInstance, request?: FastifyRequest): Promise<StatesResponse>
  updateState(app: FastifyInstance, input: StatesRequest, request?: FastifyRequest): Promise<StatesResponse>
  deleteState(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
