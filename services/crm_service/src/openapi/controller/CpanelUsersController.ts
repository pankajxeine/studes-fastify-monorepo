import type { CpanelUser } from '../types/CpanelUser'
import type { CreateCpanelUserRequest } from '../types/CreateCpanelUserRequest'
import { FastifyInstance, FastifyRequest} from 'fastify'

export interface CpanelUsersController {
  createSalesCpanelUser(app: FastifyInstance, input: CreateCpanelUserRequest, request?: FastifyRequest): Promise<CpanelUser>
}
