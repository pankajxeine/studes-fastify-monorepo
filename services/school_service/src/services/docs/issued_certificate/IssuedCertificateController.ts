import type { IssuedCertificateRequest } from './types/IssuedCertificateRequest'
import type { IssuedCertificateUpdateRequest } from './types/IssuedCertificateUpdateRequest'
import type { IssuedCertificateResponse } from './types/IssuedCertificateResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface IssuedCertificateController {
  listIssuedCertificate(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<IssuedCertificateResponse[]>>>
  createIssuedCertificate(app: FastifyInstance, input: IssuedCertificateRequest, request?: FastifyRequest): Promise<IssuedCertificateResponse>
  getIssuedCertificateById(app: FastifyInstance, request?: FastifyRequest): Promise<IssuedCertificateResponse>
  updateIssuedCertificate(app: FastifyInstance, input: IssuedCertificateUpdateRequest, request?: FastifyRequest): Promise<IssuedCertificateResponse>
  deleteIssuedCertificate(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
