import type { GetCpanelUsersResponse } from '../types/GetCpanelUsersResponse'
import type { CpanelUser } from '../types/CpanelUser'
import { FastifyInstance, FastifyRequest} from 'fastify'

export interface CpanelController {
  getCpanelUsers(app: FastifyInstance, request?: FastifyRequest): Promise<GetCpanelUsersResponse>
}
