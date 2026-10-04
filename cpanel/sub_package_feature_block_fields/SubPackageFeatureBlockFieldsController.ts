import type { SubPackageFeatureBlockFieldsRequest } from './types/SubPackageFeatureBlockFieldsRequest'
import type { SubPackageFeatureBlockFieldsResponse } from './types/SubPackageFeatureBlockFieldsResponse'
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

export interface SubPackageFeatureBlockFieldsController {
  listSubPackageFeatureBlockFields(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<SubPackageFeatureBlockFieldsResponse[]>>>
  createSubPackageFeatureBlockField(app: FastifyInstance, input: SubPackageFeatureBlockFieldsRequest, request?: FastifyRequest): Promise<SubPackageFeatureBlockFieldsResponse>
  getSubPackageFeatureBlockFieldsById(app: FastifyInstance, request?: FastifyRequest): Promise<SubPackageFeatureBlockFieldsResponse>
  updateSubPackageFeatureBlockField(app: FastifyInstance, input: SubPackageFeatureBlockFieldsRequest, request?: FastifyRequest): Promise<SubPackageFeatureBlockFieldsResponse>
  deleteSubPackageFeatureBlockField(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
