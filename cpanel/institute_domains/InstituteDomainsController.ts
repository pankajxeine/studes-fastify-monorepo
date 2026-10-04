import type { InstituteDomainsRequest } from './types/InstituteDomainsRequest'
import type { InstituteDomainsResponse } from './types/InstituteDomainsResponse'
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

export interface InstituteDomainsController {
  listInstituteDomains(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<InstituteDomainsResponse[]>>>
  createInstituteDomain(app: FastifyInstance, input: InstituteDomainsRequest, request?: FastifyRequest): Promise<InstituteDomainsResponse>
  getInstituteDomainsById(app: FastifyInstance, request?: FastifyRequest): Promise<InstituteDomainsResponse>
  updateInstituteDomain(app: FastifyInstance, input: InstituteDomainsRequest, request?: FastifyRequest): Promise<InstituteDomainsResponse>
  deleteInstituteDomain(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
