import type { VendorRequest } from './types/VendorRequest'
import type { VendorUpdateRequest } from './types/VendorUpdateRequest'
import type { VendorResponse } from './types/VendorResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface VendorController {
  listVendor(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<VendorResponse[]>>>
  createVendor(app: FastifyInstance, input: VendorRequest, request?: FastifyRequest): Promise<VendorResponse>
  getVendorById(app: FastifyInstance, request?: FastifyRequest): Promise<VendorResponse>
  updateVendor(app: FastifyInstance, input: VendorUpdateRequest, request?: FastifyRequest): Promise<VendorResponse>
  deleteVendor(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
