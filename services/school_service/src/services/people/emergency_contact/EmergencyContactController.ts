import type { EmergencyContactRequest } from './types/EmergencyContactRequest'
import type { EmergencyContactUpdateRequest } from './types/EmergencyContactUpdateRequest'
import type { EmergencyContactResponse } from './types/EmergencyContactResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface EmergencyContactController {
  listEmergencyContact(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<EmergencyContactResponse[]>>>
  createEmergencyContact(app: FastifyInstance, input: EmergencyContactRequest, request?: FastifyRequest): Promise<EmergencyContactResponse>
  getEmergencyContactById(app: FastifyInstance, request?: FastifyRequest): Promise<EmergencyContactResponse>
  updateEmergencyContact(app: FastifyInstance, input: EmergencyContactUpdateRequest, request?: FastifyRequest): Promise<EmergencyContactResponse>
  deleteEmergencyContact(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
