import type { CrmRole } from '../types/CrmRole'
import type { CreateCrmRoleRequest } from '../types/CreateCrmRoleRequest'
import type { UpdateCrmRoleRequest } from '../types/UpdateCrmRoleRequest'
import type { CrmRoleListResponse } from '../types/CrmRoleListResponse'
import type { RequestHeaders } from '../types/RequestHeaders'

export interface CrmRolesController {
  listCrmRoles(headers?: RequestHeaders): Promise<CrmRoleListResponse>
  createCrmRole(input: CreateCrmRoleRequest, headers?: RequestHeaders): Promise<CrmRole>
  getCrmRole(headers?: RequestHeaders): Promise<CrmRole>
  updateCrmRole(input: UpdateCrmRoleRequest, headers?: RequestHeaders): Promise<CrmRole>
  deleteCrmRole(headers?: RequestHeaders): Promise<void>
}
