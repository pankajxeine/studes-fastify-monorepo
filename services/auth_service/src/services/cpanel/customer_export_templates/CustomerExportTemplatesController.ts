import type { CustomerExportTemplatesRequest } from './types/CustomerExportTemplatesRequest'
import type { CustomerExportTemplatesResponse } from './types/CustomerExportTemplatesResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'

export interface CustomerExportTemplatesController {
  listCustomerExportTemplates(app: FastifyInstance, request?: FastifyRequest): Promise<CustomerExportTemplatesResponse[]>
  createCustomerExportTemplate(app: FastifyInstance, input: CustomerExportTemplatesRequest, request?: FastifyRequest): Promise<CustomerExportTemplatesResponse>
  getCustomerExportTemplatesById(app: FastifyInstance, request?: FastifyRequest): Promise<CustomerExportTemplatesResponse>
  updateCustomerExportTemplate(app: FastifyInstance, input: CustomerExportTemplatesRequest, request?: FastifyRequest): Promise<CustomerExportTemplatesResponse>
  deleteCustomerExportTemplate(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
