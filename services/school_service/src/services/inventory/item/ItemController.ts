import type { ItemRequest } from './types/ItemRequest'
import type { ItemUpdateRequest } from './types/ItemUpdateRequest'
import type { ItemResponse } from './types/ItemResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface ItemController {
  listItem(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<ItemResponse[]>>>
  createItem(app: FastifyInstance, input: ItemRequest, request?: FastifyRequest): Promise<ItemResponse>
  getItemById(app: FastifyInstance, request?: FastifyRequest): Promise<ItemResponse>
  updateItem(app: FastifyInstance, input: ItemUpdateRequest, request?: FastifyRequest): Promise<ItemResponse>
  deleteItem(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
