import type { LanguagesRequest } from './types/LanguagesRequest'
import type { LanguagesResponse } from './types/LanguagesResponse'
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

export interface LanguagesController {
  listLanguages(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<LanguagesResponse[]>>>
  createLanguage(app: FastifyInstance, input: LanguagesRequest, request?: FastifyRequest): Promise<LanguagesResponse>
  getLanguagesById(app: FastifyInstance, request?: FastifyRequest): Promise<LanguagesResponse>
  updateLanguage(app: FastifyInstance, input: LanguagesRequest, request?: FastifyRequest): Promise<LanguagesResponse>
  deleteLanguage(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
