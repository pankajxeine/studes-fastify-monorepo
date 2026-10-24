import type { PersonAllergenRequest } from './types/PersonAllergenRequest'
import type { PersonAllergenUpdateRequest } from './types/PersonAllergenUpdateRequest'
import type { PersonAllergenResponse } from './types/PersonAllergenResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface PersonAllergenController {
  listPersonAllergen(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<PersonAllergenResponse[]>>>
  createPersonAllergen(app: FastifyInstance, input: PersonAllergenRequest, request?: FastifyRequest): Promise<PersonAllergenResponse>
  getPersonAllergenById(app: FastifyInstance, request?: FastifyRequest): Promise<PersonAllergenResponse>
  updatePersonAllergen(app: FastifyInstance, input: PersonAllergenUpdateRequest, request?: FastifyRequest): Promise<PersonAllergenResponse>
  deletePersonAllergen(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
