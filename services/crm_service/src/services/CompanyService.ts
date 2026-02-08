import type { CompanyProfile } from '../openapi/types/CompanyProfile'
import type { UpdateCompanyProfileRequest } from '../openapi/types/UpdateCompanyProfileRequest'
import type { RequestHeaders } from '../openapi/types/RequestHeaders'
import type { CompanyController } from '../openapi/controller/CompanyController'

export class CompanyService implements CompanyController {
  public async getCompanyProfile(headers?: RequestHeaders): Promise<CompanyProfile> {
    void headers
    throw new Error('Not implemented')
  }

  public async updateCompanyProfile(input: UpdateCompanyProfileRequest, headers?: RequestHeaders): Promise<CompanyProfile> {
    void input
    void headers
    throw new Error('Not implemented')
  }
}
