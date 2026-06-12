import type { CpanelUser } from '../openapi/types/CpanelUser'
import type { CreateCpanelUserRequest } from '../openapi/types/CreateCpanelUserRequest'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { CpanelUsersController } from '../openapi/controller/CpanelUsersController'

export class CpanelUsersService implements CpanelUsersController {
  public async createSalesCpanelUser(app: FastifyInstance, input: CreateCpanelUserRequest, request?: FastifyRequest): Promise<CpanelUser> {
    void input
    void request
    throw new Error('Not implemented')
  }
}
