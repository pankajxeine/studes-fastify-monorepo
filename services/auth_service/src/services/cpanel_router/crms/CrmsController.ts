import type { CrmsRequest } from './types/CrmsRequest'
import type { CrmsResponse } from './types/CrmsResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'

export interface CrmsController {
  listCrms(app: FastifyInstance, request?: FastifyRequest): Promise<CrmsResponse[]>
  createCrm(app: FastifyInstance, input: CrmsRequest, request?: FastifyRequest): Promise<CrmsResponse>
  getCrmsById(app: FastifyInstance, request?: FastifyRequest): Promise<CrmsResponse>
  updateCrm(app: FastifyInstance, input: CrmsRequest, request?: FastifyRequest): Promise<CrmsResponse>
  deleteCrm(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
