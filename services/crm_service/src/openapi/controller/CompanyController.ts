import type { CompanyProfile } from '../types/CompanyProfile'
import type { UpdateCompanyProfileRequest } from '../types/UpdateCompanyProfileRequest'
import type { RequestHeaders } from '../types/RequestHeaders'

export interface CompanyController {
  getCompanyProfile(headers?: RequestHeaders): Promise<CompanyProfile>
  updateCompanyProfile(input: UpdateCompanyProfileRequest, headers?: RequestHeaders): Promise<CompanyProfile>
}
