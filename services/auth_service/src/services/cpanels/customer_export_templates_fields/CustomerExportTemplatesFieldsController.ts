import type { CustomerExportTemplatesFieldsRequest } from './types/CustomerExportTemplatesFieldsRequest'
import type { CustomerExportTemplatesFieldsResponse } from './types/CustomerExportTemplatesFieldsResponse'
import { FastifyInstance, FastifyRequest} from 'fastify'

export interface CustomerExportTemplatesFieldsController {
  listCustomerExportTemplatesFields(app: FastifyInstance, request?: FastifyRequest): Promise<CustomerExportTemplatesFieldsResponse[]>
  createCustomerExportTemplatesField(app: FastifyInstance, input: CustomerExportTemplatesFieldsRequest, request?: FastifyRequest): Promise<CustomerExportTemplatesFieldsResponse>
  getCustomerExportTemplatesFieldsById(app: FastifyInstance, request?: FastifyRequest): Promise<CustomerExportTemplatesFieldsResponse>
  updateCustomerExportTemplatesField(app: FastifyInstance, input: CustomerExportTemplatesFieldsRequest, request?: FastifyRequest): Promise<CustomerExportTemplatesFieldsResponse>
  deleteCustomerExportTemplatesField(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
