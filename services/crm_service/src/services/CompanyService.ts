import type { CompanyProfile } from '../openapi/types/CompanyProfile'
import type { UpdateCompanyProfileRequest } from '../openapi/types/UpdateCompanyProfileRequest'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { CompanyController } from '../openapi/controller/CompanyController'

export class CompanyService implements CompanyController {
  public async getCompanyProfile(app: FastifyInstance,request?: FastifyRequest): Promise<CompanyProfile> {
    void request
    throw new Error('Not implemented')
  }

  public async updateCompanyProfile(app: FastifyInstance, input: UpdateCompanyProfileRequest, request?: FastifyRequest): Promise<CompanyProfile> {
    void input
    void request
    throw new Error('Not implemented')
  }
}
