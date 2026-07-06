import type { IndustryEnvironmentsRequest } from './types/IndustryEnvironmentsRequest'
import type { IndustryEnvironmentsResponse } from './types/IndustryEnvironmentsResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'

export interface IndustryEnvironmentsController {
  listIndustryEnvironments(app: FastifyInstance, request?: FastifyRequest): Promise<IndustryEnvironmentsResponse[]>
  createIndustryEnvironment(app: FastifyInstance, input: IndustryEnvironmentsRequest, request?: FastifyRequest): Promise<IndustryEnvironmentsResponse>
  getIndustryEnvironmentsById(app: FastifyInstance, request?: FastifyRequest): Promise<IndustryEnvironmentsResponse>
  updateIndustryEnvironment(app: FastifyInstance, input: IndustryEnvironmentsRequest, request?: FastifyRequest): Promise<IndustryEnvironmentsResponse>
  deleteIndustryEnvironment(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
