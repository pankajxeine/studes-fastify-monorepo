import type { FastifyPluginAsync } from 'fastify'
import { ItemCategoryService } from '../../services/inventory/item_category/ItemCategoryService'

const ItemCategoryRoutes: FastifyPluginAsync = async (app) => {
  const controller = new ItemCategoryService()

  app.get('/item_category', async (request, reply) => {
    const result = await controller.listItemCategory(app, request)
    return reply.send(result)
  })
  app.post('/item_category', async (request, reply) => {
    const result = await controller.createItemCategory(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/item_category/:id', async (request, reply) => {
    const result = await controller.getItemCategoryById(app, request)
    return reply.send(result)
  })
  app.put('/item_category/:id', async (request, reply) => {
    const result = await controller.updateItemCategory(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/item_category/:id', async (request, reply) => {
    const result = await controller.deleteItemCategory(app, request)
    return reply.send(result)
  })
}

export default ItemCategoryRoutes
