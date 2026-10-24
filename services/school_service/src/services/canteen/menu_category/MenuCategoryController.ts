import type { MenuCategoryRequest } from './types/MenuCategoryRequest'
import type { MenuCategoryUpdateRequest } from './types/MenuCategoryUpdateRequest'
import type { MenuCategoryResponse } from './types/MenuCategoryResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface MenuCategoryController {
  listMenuCategory(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<MenuCategoryResponse[]>>>
  createMenuCategory(app: FastifyInstance, input: MenuCategoryRequest, request?: FastifyRequest): Promise<MenuCategoryResponse>
  getMenuCategoryById(app: FastifyInstance, request?: FastifyRequest): Promise<MenuCategoryResponse>
  updateMenuCategory(app: FastifyInstance, input: MenuCategoryUpdateRequest, request?: FastifyRequest): Promise<MenuCategoryResponse>
  deleteMenuCategory(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
