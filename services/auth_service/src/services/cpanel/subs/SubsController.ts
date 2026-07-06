import type { SubsRequest } from './types/SubsRequest'
import type { SubsResponse } from './types/SubsResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'

export interface SubsController {
  listSubs(app: FastifyInstance, request?: FastifyRequest): Promise<SubsResponse[]>
  createSub(app: FastifyInstance, input: SubsRequest, request?: FastifyRequest): Promise<SubsResponse>
  getSubsById(app: FastifyInstance, request?: FastifyRequest): Promise<SubsResponse>
  updateSub(app: FastifyInstance, input: SubsRequest, request?: FastifyRequest): Promise<SubsResponse>
  deleteSub(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
