import type { CompanyProfile } from './types/CompanyProfile'
import type { UpdateCompanyProfileRequest } from './types/UpdateCompanyProfileRequest'
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

export interface CompanyController {
  getCompanyProfile(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<CompanyProfile>>>
  updateCompanyProfile(app: FastifyInstance, input: UpdateCompanyProfileRequest, request?: FastifyRequest): Promise<CompanyProfile>
}
