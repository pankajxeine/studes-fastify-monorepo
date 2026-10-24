import type { MessageThreadRequest } from './types/MessageThreadRequest'
import type { MessageThreadUpdateRequest } from './types/MessageThreadUpdateRequest'
import type { MessageThreadResponse } from './types/MessageThreadResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface MessageThreadController {
  listMessageThread(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<MessageThreadResponse[]>>>
  createMessageThread(app: FastifyInstance, input: MessageThreadRequest, request?: FastifyRequest): Promise<MessageThreadResponse>
  getMessageThreadById(app: FastifyInstance, request?: FastifyRequest): Promise<MessageThreadResponse>
  updateMessageThread(app: FastifyInstance, input: MessageThreadUpdateRequest, request?: FastifyRequest): Promise<MessageThreadResponse>
  deleteMessageThread(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
