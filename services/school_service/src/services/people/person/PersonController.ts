import type { PersonRequest } from './types/PersonRequest'
import type { PersonUpdateRequest } from './types/PersonUpdateRequest'
import type { PersonResponse } from './types/PersonResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface PersonController {
  listPerson(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<PersonResponse[]>>>
  createPerson(app: FastifyInstance, input: PersonRequest, request?: FastifyRequest): Promise<PersonResponse>
  getPersonById(app: FastifyInstance, request?: FastifyRequest): Promise<PersonResponse>
  updatePerson(app: FastifyInstance, input: PersonUpdateRequest, request?: FastifyRequest): Promise<PersonResponse>
  deletePerson(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
