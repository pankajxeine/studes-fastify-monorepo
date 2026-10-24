import type { FastifyPluginAsync } from 'fastify'
import { MenuItemAllergenService } from '../../services/canteen/menu_item_allergen/MenuItemAllergenService'

const MenuItemAllergenRoutes: FastifyPluginAsync = async (app) => {
  const controller = new MenuItemAllergenService()

  app.get('/menu_item_allergen', async (request, reply) => {
    const result = await controller.listMenuItemAllergen(app, request)
    return reply.send(result)
  })
  app.post('/menu_item_allergen', async (request, reply) => {
    const result = await controller.createMenuItemAllergen(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/menu_item_allergen/:id', async (request, reply) => {
    const result = await controller.getMenuItemAllergenById(app, request)
    return reply.send(result)
  })
  app.put('/menu_item_allergen/:id', async (request, reply) => {
    const result = await controller.updateMenuItemAllergen(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/menu_item_allergen/:id', async (request, reply) => {
    const result = await controller.deleteMenuItemAllergen(app, request)
    return reply.send(result)
  })
}

export default MenuItemAllergenRoutes
