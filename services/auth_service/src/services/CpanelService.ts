import type { GetCpanelUsersResponse } from '../openapi/types/GetCpanelUsersResponse'
import type { CpanelUser } from '../openapi/types/CpanelUser'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { CpanelController } from '../openapi/controller/CpanelController'

export class CpanelService implements CpanelController {
  public async getCpanelUsers(app: FastifyInstance,request?: FastifyRequest): Promise<GetCpanelUsersResponse> {
    void request
    throw new Error('Not implemented')
  }
}
