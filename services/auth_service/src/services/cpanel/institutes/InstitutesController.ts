import type { InstitutesRequest } from './types/InstitutesRequest'
import type { InstitutesResponse } from './types/InstitutesResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'

export interface InstitutesController {
  listInstitutes(app: FastifyInstance, request?: FastifyRequest): Promise<InstitutesResponse[]>
  createInstitute(app: FastifyInstance, input: InstitutesRequest, request?: FastifyRequest): Promise<InstitutesResponse>
  getInstitutesById(app: FastifyInstance, request?: FastifyRequest): Promise<InstitutesResponse>
  updateInstitute(app: FastifyInstance, input: InstitutesRequest, request?: FastifyRequest): Promise<InstitutesResponse>
  deleteInstitute(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
