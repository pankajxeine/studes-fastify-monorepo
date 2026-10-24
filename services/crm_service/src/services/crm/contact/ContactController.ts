import type { ContactRequest } from './types/ContactRequest'
import type { ContactUpdateRequest } from './types/ContactUpdateRequest'
import type { ContactResponse } from './types/ContactResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface ContactController {
  listContact(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<ContactResponse[]>>>
  createContact(app: FastifyInstance, input: ContactRequest, request?: FastifyRequest): Promise<ContactResponse>
  getContactById(app: FastifyInstance, request?: FastifyRequest): Promise<ContactResponse>
  updateContact(app: FastifyInstance, input: ContactUpdateRequest, request?: FastifyRequest): Promise<ContactResponse>
  deleteContact(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
