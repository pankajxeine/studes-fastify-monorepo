import type { PersonContactRequest } from './types/PersonContactRequest'
import type { PersonContactUpdateRequest } from './types/PersonContactUpdateRequest'
import type { PersonContactResponse } from './types/PersonContactResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface PersonContactController {
  listPersonContact(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<PersonContactResponse[]>>>
  createPersonContact(app: FastifyInstance, input: PersonContactRequest, request?: FastifyRequest): Promise<PersonContactResponse>
  getPersonContactById(app: FastifyInstance, request?: FastifyRequest): Promise<PersonContactResponse>
  updatePersonContact(app: FastifyInstance, input: PersonContactUpdateRequest, request?: FastifyRequest): Promise<PersonContactResponse>
  deletePersonContact(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
