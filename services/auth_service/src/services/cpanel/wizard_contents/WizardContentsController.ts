import type { WizardContentsRequest } from './types/WizardContentsRequest'
import type { WizardContentsResponse } from './types/WizardContentsResponse'
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

export interface WizardContentsController {
  listWizardContents(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<WizardContentsResponse[]>>>
  createWizardContent(app: FastifyInstance, input: WizardContentsRequest, request?: FastifyRequest): Promise<WizardContentsResponse>
  getWizardContentsById(app: FastifyInstance, request?: FastifyRequest): Promise<WizardContentsResponse>
  updateWizardContent(app: FastifyInstance, input: WizardContentsRequest, request?: FastifyRequest): Promise<WizardContentsResponse>
  deleteWizardContent(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
