import type { CrmUser } from '../openapi/types/CrmUser'
import type { CreateCrmUserRequest } from '../openapi/types/CreateCrmUserRequest'
import type { UpdateCrmUserRequest } from '../openapi/types/UpdateCrmUserRequest'
import type { CrmUserListResponse } from '../openapi/types/CrmUserListResponse'
import type { ErrorResponse } from '../openapi/types/ErrorResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { CrmUsersController } from '../openapi/controller/CrmUsersController'

export class CrmUsersService implements CrmUsersController {
  public async listCrmUsers(app: FastifyInstance,request?: FastifyRequest): Promise<CrmUserListResponse> {
    void request
    throw new Error('Not implemented')
  }

  public async createCrmUser(app: FastifyInstance, input: CreateCrmUserRequest, request?: FastifyRequest): Promise<CrmUser> {
    void input
    void request
    throw new Error('Not implemented')
  }

  public async getCrmUser(app: FastifyInstance,request?: FastifyRequest): Promise<CrmUser> {
    void request
    throw new Error('Not implemented')
  }

  public async updateCrmUser(app: FastifyInstance, input: UpdateCrmUserRequest, request?: FastifyRequest): Promise<CrmUser> {
    void input
    void request
    throw new Error('Not implemented')
  }

  public async deleteCrmUser(app: FastifyInstance,request?: FastifyRequest): Promise<void> {
    void request
    throw new Error('Not implemented')
  }
}
