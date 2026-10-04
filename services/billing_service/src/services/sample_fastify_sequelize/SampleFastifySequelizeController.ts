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

export interface SampleFastifySequelizeController {
  getUsers(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<unknown>>>
  postUsers(app: FastifyInstance, input: unknown, request?: FastifyRequest): Promise<unknown>
  getHealth(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<unknown>>>
  postLogin(app: FastifyInstance, input: unknown, request?: FastifyRequest): Promise<unknown>
  postLogout(app: FastifyInstance, request?: FastifyRequest): Promise<unknown>
}
