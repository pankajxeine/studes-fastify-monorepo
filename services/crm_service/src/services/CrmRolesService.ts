import type { CrmRole } from '../openapi/types/CrmRole'
import type { CreateCrmRoleRequest } from '../openapi/types/CreateCrmRoleRequest'
import type { UpdateCrmRoleRequest } from '../openapi/types/UpdateCrmRoleRequest'
import type { CrmRoleListResponse } from '../openapi/types/CrmRoleListResponse'
import type { RequestHeaders } from '../openapi/types/RequestHeaders'
import type { CrmRolesController } from '../openapi/controller/CrmRolesController'

export class CrmRolesService implements CrmRolesController {
  public async listCrmRoles(headers?: RequestHeaders): Promise<CrmRoleListResponse> {
    void headers
    throw new Error('Not implemented')
  }

  public async createCrmRole(input: CreateCrmRoleRequest, headers?: RequestHeaders): Promise<CrmRole> {
    void input
    void headers
    throw new Error('Not implemented')
  }

  public async getCrmRole(headers?: RequestHeaders): Promise<CrmRole> {
    void headers
    throw new Error('Not implemented')
  }

  public async updateCrmRole(input: UpdateCrmRoleRequest, headers?: RequestHeaders): Promise<CrmRole> {
    void input
    void headers
    throw new Error('Not implemented')
  }

  public async deleteCrmRole(headers?: RequestHeaders): Promise<void> {
    void headers
    throw new Error('Not implemented')
  }
}
