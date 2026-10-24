import type { MenuItemRequest } from './types/MenuItemRequest'
import type { MenuItemUpdateRequest } from './types/MenuItemUpdateRequest'
import type { MenuItemResponse } from './types/MenuItemResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface MenuItemController {
  listMenuItem(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<MenuItemResponse[]>>>
  createMenuItem(app: FastifyInstance, input: MenuItemRequest, request?: FastifyRequest): Promise<MenuItemResponse>
  getMenuItemById(app: FastifyInstance, request?: FastifyRequest): Promise<MenuItemResponse>
  updateMenuItem(app: FastifyInstance, input: MenuItemUpdateRequest, request?: FastifyRequest): Promise<MenuItemResponse>
  deleteMenuItem(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
