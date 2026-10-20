import type { UserIconSequencesRequest } from './types/UserIconSequencesRequest'
import type { UserIconSequencesResponse } from './types/UserIconSequencesResponse'
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

export interface UserIconSequencesController {
  listUserIconSequences(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<UserIconSequencesResponse[]>>>
  createUserIconSequence(app: FastifyInstance, input: UserIconSequencesRequest, request?: FastifyRequest): Promise<UserIconSequencesResponse>
  getUserIconSequencesById(app: FastifyInstance, request?: FastifyRequest): Promise<UserIconSequencesResponse>
  updateUserIconSequence(app: FastifyInstance, input: UserIconSequencesRequest, request?: FastifyRequest): Promise<UserIconSequencesResponse>
  deleteUserIconSequence(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
