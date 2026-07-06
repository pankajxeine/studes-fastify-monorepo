import type { MasterCredentialsRequest } from './types/MasterCredentialsRequest'
import type { MasterCredentialsResponse } from './types/MasterCredentialsResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'

export interface MasterCredentialsController {
  listMasterCredentials(app: FastifyInstance, request?: FastifyRequest): Promise<MasterCredentialsResponse[]>
  createMasterCredential(app: FastifyInstance, input: MasterCredentialsRequest, request?: FastifyRequest): Promise<MasterCredentialsResponse>
  getMasterCredentialsById(app: FastifyInstance, request?: FastifyRequest): Promise<MasterCredentialsResponse>
  updateMasterCredential(app: FastifyInstance, input: MasterCredentialsRequest, request?: FastifyRequest): Promise<MasterCredentialsResponse>
  deleteMasterCredential(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
