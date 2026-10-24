import type { AppUserRequest } from './types/AppUserRequest'
import type { AppUserUpdateRequest } from './types/AppUserUpdateRequest'
import type { AppUserResponse } from './types/AppUserResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface AppUserController {
  listAppUser(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<AppUserResponse[]>>>
  createAppUser(app: FastifyInstance, input: AppUserRequest, request?: FastifyRequest): Promise<AppUserResponse>
  getAppUserById(app: FastifyInstance, request?: FastifyRequest): Promise<AppUserResponse>
  updateAppUser(app: FastifyInstance, input: AppUserUpdateRequest, request?: FastifyRequest): Promise<AppUserResponse>
  deleteAppUser(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
