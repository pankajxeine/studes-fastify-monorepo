import type { CrmRole } from '../openapi/types/CrmRole'
import type { CreateCrmRoleRequest } from '../openapi/types/CreateCrmRoleRequest'
import type { UpdateCrmRoleRequest } from '../openapi/types/UpdateCrmRoleRequest'
import type { CrmRoleListResponse } from '../openapi/types/CrmRoleListResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { CrmRolesController } from '../openapi/controller/CrmRolesController'

export class CrmRolesService implements CrmRolesController {
  public async listCrmRoles(app: FastifyInstance,request?: FastifyRequest): Promise<CrmRoleListResponse> {
    void request
    throw new Error('Not implemented')
  }

  public async createCrmRole(app: FastifyInstance, input: CreateCrmRoleRequest, request?: FastifyRequest): Promise<CrmRole> {
    void input
    void request
    throw new Error('Not implemented')
  }

  public async getCrmRole(app: FastifyInstance,request?: FastifyRequest): Promise<CrmRole> {
    void request
    throw new Error('Not implemented')
  }

  public async updateCrmRole(app: FastifyInstance, input: UpdateCrmRoleRequest, request?: FastifyRequest): Promise<CrmRole> {
    void input
    void request
    throw new Error('Not implemented')
  }

  public async deleteCrmRole(app: FastifyInstance,request?: FastifyRequest): Promise<void> {
    void request
    throw new Error('Not implemented')
  }
}
