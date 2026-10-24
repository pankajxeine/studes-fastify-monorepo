import type { MessageRequest } from './types/MessageRequest'
import type { MessageUpdateRequest } from './types/MessageUpdateRequest'
import type { MessageResponse } from './types/MessageResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface MessageController {
  listMessage(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<MessageResponse[]>>>
  createMessage(app: FastifyInstance, input: MessageRequest, request?: FastifyRequest): Promise<MessageResponse>
  getMessageById(app: FastifyInstance, request?: FastifyRequest): Promise<MessageResponse>
  updateMessage(app: FastifyInstance, input: MessageUpdateRequest, request?: FastifyRequest): Promise<MessageResponse>
  deleteMessage(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
