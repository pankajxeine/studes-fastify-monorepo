import type { FastifyPluginAsync } from 'fastify'
import { ItemService } from '../../services/inventory/item/ItemService'

const ItemRoutes: FastifyPluginAsync = async (app) => {
  const controller = new ItemService()

  app.get('/item', async (request, reply) => {
    const result = await controller.listItem(app, request)
    return reply.send(result)
  })
  app.post('/item', async (request, reply) => {
    const result = await controller.createItem(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/item/:id', async (request, reply) => {
    const result = await controller.getItemById(app, request)
    return reply.send(result)
  })
  app.put('/item/:id', async (request, reply) => {
    const result = await controller.updateItem(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/item/:id', async (request, reply) => {
    const result = await controller.deleteItem(app, request)
    return reply.send(result)
  })
}

export default ItemRoutes
