import type { FastifyPluginAsync } from 'fastify'
import { WatchlistService } from '../../services/visitor/watchlist/WatchlistService'

const WatchlistRoutes: FastifyPluginAsync = async (app) => {
  const controller = new WatchlistService()

  app.get('/watchlist', async (request, reply) => {
    const result = await controller.listWatchlist(app, request)
    return reply.send(result)
  })
  app.post('/watchlist', async (request, reply) => {
    const result = await controller.createWatchlist(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/watchlist/:id', async (request, reply) => {
    const result = await controller.getWatchlistById(app, request)
    return reply.send(result)
  })
  app.put('/watchlist/:id', async (request, reply) => {
    const result = await controller.updateWatchlist(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/watchlist/:id', async (request, reply) => {
    const result = await controller.deleteWatchlist(app, request)
    return reply.send(result)
  })
}

export default WatchlistRoutes
