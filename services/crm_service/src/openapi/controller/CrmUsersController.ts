import type { CrmUser } from '../types/CrmUser'
import type { CreateCrmUserRequest } from '../types/CreateCrmUserRequest'
import type { UpdateCrmUserRequest } from '../types/UpdateCrmUserRequest'
import type { CrmUserListResponse } from '../types/CrmUserListResponse'
import type { ErrorResponse } from '../types/ErrorResponse'
import { FastifyInstance, FastifyRequest} from 'fastify'

export interface CrmUsersController {
  listCrmUsers(app: FastifyInstance, request?: FastifyRequest): Promise<CrmUserListResponse>
  createCrmUser(app: FastifyInstance, input: CreateCrmUserRequest, request?: FastifyRequest): Promise<CrmUser>
  getCrmUser(app: FastifyInstance, request?: FastifyRequest): Promise<CrmUser>
  updateCrmUser(app: FastifyInstance, input: UpdateCrmUserRequest, request?: FastifyRequest): Promise<CrmUser>
  deleteCrmUser(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
