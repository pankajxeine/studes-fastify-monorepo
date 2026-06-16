import type { MasterPasswordsRequest } from './types/MasterPasswordsRequest'
import type { MasterPasswordsResponse } from './types/MasterPasswordsResponse'
import { FastifyInstance, FastifyRequest} from 'fastify'

export interface MasterPasswordsController {
  listMasterPasswords(app: FastifyInstance, request?: FastifyRequest): Promise<MasterPasswordsResponse[]>
  createMasterPassword(app: FastifyInstance, input: MasterPasswordsRequest, request?: FastifyRequest): Promise<MasterPasswordsResponse>
  getMasterPasswordsById(app: FastifyInstance, request?: FastifyRequest): Promise<MasterPasswordsResponse>
  updateMasterPassword(app: FastifyInstance, input: MasterPasswordsRequest, request?: FastifyRequest): Promise<MasterPasswordsResponse>
  deleteMasterPassword(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
