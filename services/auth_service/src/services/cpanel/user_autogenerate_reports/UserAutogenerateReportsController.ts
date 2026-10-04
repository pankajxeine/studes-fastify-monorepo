import type { UserAutogenerateReportsRequest } from './types/UserAutogenerateReportsRequest'
import type { UserAutogenerateReportsResponse } from './types/UserAutogenerateReportsResponse'
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

export interface UserAutogenerateReportsController {
  listUserAutogenerateReports(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<UserAutogenerateReportsResponse[]>>>
  createUserAutogenerateReport(app: FastifyInstance, input: UserAutogenerateReportsRequest, request?: FastifyRequest): Promise<UserAutogenerateReportsResponse>
  getUserAutogenerateReportsById(app: FastifyInstance, request?: FastifyRequest): Promise<UserAutogenerateReportsResponse>
  updateUserAutogenerateReport(app: FastifyInstance, input: UserAutogenerateReportsRequest, request?: FastifyRequest): Promise<UserAutogenerateReportsResponse>
  deleteUserAutogenerateReport(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
