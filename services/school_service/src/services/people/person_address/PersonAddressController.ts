import type { PersonAddressRequest } from './types/PersonAddressRequest'
import type { PersonAddressUpdateRequest } from './types/PersonAddressUpdateRequest'
import type { PersonAddressResponse } from './types/PersonAddressResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface PersonAddressController {
  listPersonAddress(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<PersonAddressResponse[]>>>
  createPersonAddress(app: FastifyInstance, input: PersonAddressRequest, request?: FastifyRequest): Promise<PersonAddressResponse>
  getPersonAddressById(app: FastifyInstance, request?: FastifyRequest): Promise<PersonAddressResponse>
  updatePersonAddress(app: FastifyInstance, input: PersonAddressUpdateRequest, request?: FastifyRequest): Promise<PersonAddressResponse>
  deletePersonAddress(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
