import type { CertificateTemplateRequest } from './types/CertificateTemplateRequest'
import type { CertificateTemplateUpdateRequest } from './types/CertificateTemplateUpdateRequest'
import type { CertificateTemplateResponse } from './types/CertificateTemplateResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface CertificateTemplateController {
  listCertificateTemplate(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<CertificateTemplateResponse[]>>>
  createCertificateTemplate(app: FastifyInstance, input: CertificateTemplateRequest, request?: FastifyRequest): Promise<CertificateTemplateResponse>
  getCertificateTemplateById(app: FastifyInstance, request?: FastifyRequest): Promise<CertificateTemplateResponse>
  updateCertificateTemplate(app: FastifyInstance, input: CertificateTemplateUpdateRequest, request?: FastifyRequest): Promise<CertificateTemplateResponse>
  deleteCertificateTemplate(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
