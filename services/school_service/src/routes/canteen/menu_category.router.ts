import type { FastifyPluginAsync } from 'fastify'
import { MenuCategoryService } from '../../services/canteen/menu_category/MenuCategoryService'

const MenuCategoryRoutes: FastifyPluginAsync = async (app) => {
  const controller = new MenuCategoryService()

  app.get('/menu_category', async (request, reply) => {
    const result = await controller.listMenuCategory(app, request)
    return reply.send(result)
  })
  app.post('/menu_category', async (request, reply) => {
    const result = await controller.createMenuCategory(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/menu_category/:id', async (request, reply) => {
    const result = await controller.getMenuCategoryById(app, request)
    return reply.send(result)
  })
  app.put('/menu_category/:id', async (request, reply) => {
    const result = await controller.updateMenuCategory(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/menu_category/:id', async (request, reply) => {
    const result = await controller.deleteMenuCategory(app, request)
    return reply.send(result)
  })
}

export default MenuCategoryRoutes
