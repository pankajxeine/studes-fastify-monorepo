import type { MenuItemAllergenRequest } from './types/MenuItemAllergenRequest'
import type { MenuItemAllergenUpdateRequest } from './types/MenuItemAllergenUpdateRequest'
import type { MenuItemAllergenResponse } from './types/MenuItemAllergenResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface MenuItemAllergenController {
  listMenuItemAllergen(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<MenuItemAllergenResponse[]>>>
  createMenuItemAllergen(app: FastifyInstance, input: MenuItemAllergenRequest, request?: FastifyRequest): Promise<MenuItemAllergenResponse>
  getMenuItemAllergenById(app: FastifyInstance, request?: FastifyRequest): Promise<MenuItemAllergenResponse>
  updateMenuItemAllergen(app: FastifyInstance, input: MenuItemAllergenUpdateRequest, request?: FastifyRequest): Promise<MenuItemAllergenResponse>
  deleteMenuItemAllergen(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
