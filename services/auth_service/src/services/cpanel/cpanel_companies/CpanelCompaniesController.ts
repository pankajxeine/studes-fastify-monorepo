import type { CpanelCompaniesRequest } from './types/CpanelCompaniesRequest'
import type { CpanelCompaniesResponse } from './types/CpanelCompaniesResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'

export interface CpanelCompaniesController {
  listCpanelCompanies(app: FastifyInstance, request?: FastifyRequest): Promise<CpanelCompaniesResponse[]>
  createCpanelCompanie(app: FastifyInstance, input: CpanelCompaniesRequest, request?: FastifyRequest): Promise<CpanelCompaniesResponse>
  getCpanelCompaniesById(app: FastifyInstance, request?: FastifyRequest): Promise<CpanelCompaniesResponse>
  updateCpanelCompanie(app: FastifyInstance, input: CpanelCompaniesRequest, request?: FastifyRequest): Promise<CpanelCompaniesResponse>
  deleteCpanelCompanie(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
