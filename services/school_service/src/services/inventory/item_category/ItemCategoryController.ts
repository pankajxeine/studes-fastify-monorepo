import type { ItemCategoryRequest } from './types/ItemCategoryRequest'
import type { ItemCategoryUpdateRequest } from './types/ItemCategoryUpdateRequest'
import type { ItemCategoryResponse } from './types/ItemCategoryResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface ItemCategoryController {
  listItemCategory(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<ItemCategoryResponse[]>>>
  createItemCategory(app: FastifyInstance, input: ItemCategoryRequest, request?: FastifyRequest): Promise<ItemCategoryResponse>
  getItemCategoryById(app: FastifyInstance, request?: FastifyRequest): Promise<ItemCategoryResponse>
  updateItemCategory(app: FastifyInstance, input: ItemCategoryUpdateRequest, request?: FastifyRequest): Promise<ItemCategoryResponse>
  deleteItemCategory(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
