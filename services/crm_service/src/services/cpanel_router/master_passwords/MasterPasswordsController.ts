import type { MasterPasswordsRequest } from './types/MasterPasswordsRequest'
import type { MasterPasswordsResponse } from './types/MasterPasswordsResponse'
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

export interface MasterPasswordsController {
  listMasterPasswords(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<MasterPasswordsResponse[]>>>
  createMasterPassword(app: FastifyInstance, input: MasterPasswordsRequest, request?: FastifyRequest): Promise<MasterPasswordsResponse>
  getMasterPasswordsById(app: FastifyInstance, request?: FastifyRequest): Promise<MasterPasswordsResponse>
  updateMasterPassword(app: FastifyInstance, input: MasterPasswordsRequest, request?: FastifyRequest): Promise<MasterPasswordsResponse>
  deleteMasterPassword(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
