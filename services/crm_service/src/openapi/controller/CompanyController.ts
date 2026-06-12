import type { CompanyProfile } from '../types/CompanyProfile'
import type { UpdateCompanyProfileRequest } from '../types/UpdateCompanyProfileRequest'
import { FastifyInstance, FastifyRequest} from 'fastify'

export interface CompanyController {
  getCompanyProfile(app: FastifyInstance, request?: FastifyRequest): Promise<CompanyProfile>
  updateCompanyProfile(app: FastifyInstance, input: UpdateCompanyProfileRequest, request?: FastifyRequest): Promise<CompanyProfile>
}
