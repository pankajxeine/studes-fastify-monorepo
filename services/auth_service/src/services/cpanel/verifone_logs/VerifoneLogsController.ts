import type { VerifoneLogsRequest } from './types/VerifoneLogsRequest'
import type { VerifoneLogsResponse } from './types/VerifoneLogsResponse'
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

export interface VerifoneLogsController {
  listVerifoneLogs(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<VerifoneLogsResponse[]>>>
  createVerifoneLog(app: FastifyInstance, input: VerifoneLogsRequest, request?: FastifyRequest): Promise<VerifoneLogsResponse>
  getVerifoneLogsById(app: FastifyInstance, request?: FastifyRequest): Promise<VerifoneLogsResponse>
  updateVerifoneLog(app: FastifyInstance, input: VerifoneLogsRequest, request?: FastifyRequest): Promise<VerifoneLogsResponse>
  deleteVerifoneLog(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
